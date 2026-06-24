"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Phase = "home" | "tapping" | "splash" | "chatlist" | "chat";

const APP_ICONS = [
  { src: "/app_foto.png", label: "Fotoğraflar" },
  { src: "/app_26.png",  label: "Müzik"       },
  { src: "/app_27.png",  label: "App Store"    },
  { src: "/app_24.png",  label: "Fitness"      },
  { src: "/app_28.png",  label: "Ev"           },
  { src: "/app_29.png",  label: "Cüzdan"       },
];

const CHATS = [
  { initials: "EA", name: "Ece A.", school: "Ankara Fen Lisesi",  preview: "Tabii ki yardımcı olurum!", time: "12:34", unread: 2 },
  { initials: "SK", name: "S. Koç",  school: "Galatasaray Lisesi", preview: "Hazırlık dönemi zor ama...",  time: "11:20", unread: 0 },
  { initials: "EM", name: "E. Mert", school: "İstanbul Lisesi",    preview: "Hazırlıkta çok çalıştım.",   time: "Dün",   unread: 0 },
];

const MESSAGES = [
  { id: 0, text: "Fen Lisesi'nde hayat nasıl? 🤔",            mine: true  },
  { id: 1, text: "Yoğun ama çok keyifli! Alışınca harika 😊", mine: false },
  { id: 2, text: "Puan aralığı ne kadar?",                    mine: true  },
  { id: 3, text: "490+ genelde. Ama değişiyor 📚",            mine: false },
  { id: 4, text: "Çok teşekkürler, gerçekten yardımcı oldun!", mine: true },
];

// Mockup: 1032×1182 px, displayed at 360×412 px
// Phone outer border-radius at 360px: ≈42px (clips all children via overflow:hidden on container)
// Screen area within: left≈20, top≈16, width≈320, height≈382
//
// App grid (4 cols, starts y=60 within screen div):
//   content-w = 320-28 = 292, col-gap=8 → col-w = (292-24)/4 = 67
//   SorLise col=1,row=1: x=14+75+29=118, y=60+87+29=176 within screen div
const SORLISE_TARGET = { left: 118, top: 176 };
const CURSOR_START   = { left: 282, top: 55  };

// ── Status Bar ──────────────────────────────────────────────
function StatusBar({ dark }: { dark: boolean }) {
  const c = dark ? "rgba(255,255,255,0.9)" : "rgba(10,10,10,0.85)";
  const cs = dark ? "rgba(255,255,255,0.35)" : "rgba(10,10,10,0.3)";
  return (
    <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 34,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 20px", zIndex: 20 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: c, letterSpacing: -0.3 }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
          {[4, 7, 10, 13].map((h, i) => (
            <div key={i} style={{ width: 3, height: h, borderRadius: 1, background: i < 3 ? c : cs }} />
          ))}
        </div>
        <svg viewBox="0 0 17 12" width={17} height={12} fill="none">
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
          <path d="M5.2 8C6.1 6.9 7.2 6.3 8.5 6.3s2.4.6 3.3 1.7" stroke={c} strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M2 5.5C3.6 3.5 5.9 2.3 8.5 2.3s4.9 1.2 6.5 3.2" stroke={c} strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>
        <svg viewBox="0 0 26 13" width={25} height={12} fill="none">
          <rect x="0.5" y="0.5" width="21" height="12" rx="3.5" stroke={cs}/>
          <rect x="2" y="2" width="15" height="9" rx="2" fill={c}/>
          <path d="M23 4.5v4c.9-.5 1.5-1.2 1.5-2s-.6-1.5-1.5-2z" fill={cs}/>
        </svg>
      </div>
    </div>
  );
}

// ── Home Screen ────────────────────────────────────────────
function HomeScreen({ tapping }: { tapping: boolean }) {
  return (
    <motion.div key="home"
      style={{ position:"absolute", inset:0,
        background:"linear-gradient(160deg,#0d0221 0%,#1a0533 40%,#2d1b69 75%,#160a40 100%)" }}
      initial={{ opacity:0 }} animate={{ opacity:1 }}
      exit={{ opacity:0, scale:1.15 }}
      transition={{ duration:0.45, ease:[0.22,1,0.36,1] }}
    >
      {/* Soft glows */}
      <div style={{ position:"absolute", top:40, left:20, width:120, height:120,
        borderRadius:"50%", background:"rgba(178,136,245,0.18)", filter:"blur(38px)" }}/>
      <div style={{ position:"absolute", top:150, right:15, width:90, height:90,
        borderRadius:"50%", background:"rgba(120,80,255,0.13)", filter:"blur(28px)" }}/>

      {/* App grid — 4 cols, 2 rows, no date, no dock */}
      <div style={{ position:"absolute", top:60, left:14, right:14,
        display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px 8px" }}>

        {/* Row 0: first 4 apps */}
        {APP_ICONS.slice(0,4).map((app,i) => (
          <motion.div key={i}
            initial={{ opacity:0, scale:0.55, y:10 }}
            animate={{ opacity:1, scale:1, y:0 }}
            transition={{ delay:0.04+i*0.04, duration:0.4, ease:"backOut" }}
            style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}
          >
            <div style={{ width:58, height:58, borderRadius:14, overflow:"hidden",
              boxShadow:"0 3px 10px rgba(0,0,0,0.35)" }}>
              <Image src={app.src} alt={app.label} width={58} height={58}
                style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            <span style={{ color:"rgba(255,255,255,0.72)", fontSize:9.5, fontWeight:500,
              textAlign:"center", width:66, overflow:"hidden", whiteSpace:"nowrap",
              textOverflow:"ellipsis" }}>{app.label}</span>
          </motion.div>
        ))}

        {/* Row 1: app4, SorLise (col=1), app5 */}
        <motion.div initial={{ opacity:0, scale:0.55, y:10 }} animate={{ opacity:1, scale:1, y:0 }}
          transition={{ delay:0.20, duration:0.4, ease:"backOut" }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
          <div style={{ width:58, height:58, borderRadius:14, overflow:"hidden",
            boxShadow:"0 3px 10px rgba(0,0,0,0.35)" }}>
            <Image src={APP_ICONS[4].src} alt={APP_ICONS[4].label} width={58} height={58}
              style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
          </div>
          <span style={{ color:"rgba(255,255,255,0.72)", fontSize:9.5, fontWeight:500,
            textAlign:"center", width:66, overflow:"hidden", whiteSpace:"nowrap",
            textOverflow:"ellipsis" }}>{APP_ICONS[4].label}</span>
        </motion.div>

        {/* SorLise */}
        <motion.div
          initial={{ opacity:0, scale:0.55, y:10 }}
          animate={{ opacity:1, scale:tapping ? 0.82 : 1, y:0 }}
          transition={{ delay:0.22, duration:tapping ? 0.1 : 0.4, ease:tapping ? "easeIn" : "backOut" }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}
        >
          <motion.div
            style={{ width:58, height:58, borderRadius:14, background:"white",
              display:"flex", alignItems:"center", justifyContent:"center" }}
            animate={{ boxShadow:[
              "0 0 0 0px rgba(209,175,254,0), 0 3px 10px rgba(0,0,0,0.3)",
              "0 0 0 5px rgba(209,175,254,0.55), 0 4px 18px rgba(0,0,0,0.4)",
              "0 0 0 0px rgba(209,175,254,0), 0 3px 10px rgba(0,0,0,0.3)",
            ]}}
            transition={{ duration:1.4, repeat:2, ease:"easeInOut", delay:1.2 }}
          >
            <Image src="/logo.png" alt="SorLise" width={44} height={44}
              style={{ width:44, height:44, objectFit:"contain" }}/>
          </motion.div>
          <span style={{ color:"white", fontSize:9.5, fontWeight:700,
            textAlign:"center", width:66 }}>SorLise</span>
        </motion.div>

        <motion.div initial={{ opacity:0, scale:0.55, y:10 }} animate={{ opacity:1, scale:1, y:0 }}
          transition={{ delay:0.24, duration:0.4, ease:"backOut" }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
          <div style={{ width:58, height:58, borderRadius:14, overflow:"hidden",
            boxShadow:"0 3px 10px rgba(0,0,0,0.35)" }}>
            <Image src={APP_ICONS[5].src} alt={APP_ICONS[5].label} width={58} height={58}
              style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
          </div>
          <span style={{ color:"rgba(255,255,255,0.72)", fontSize:9.5, fontWeight:500,
            textAlign:"center", width:66, overflow:"hidden", whiteSpace:"nowrap",
            textOverflow:"ellipsis" }}>{APP_ICONS[5].label}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Splash ─────────────────────────────────────────────────
function SplashScreen() {
  return (
    <motion.div key="splash"
      style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:24,
        background:"linear-gradient(160deg,#1a0533,#2d1b69,#0d0221)" }}
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.4 }}
    >
      <motion.div
        style={{ width:90, height:90, borderRadius:22, background:"white",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 0 0 10px rgba(209,175,254,0.2), 0 24px 60px rgba(0,0,0,0.5)" }}
        initial={{ scale:0.35, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1], delay:0.1 }}
      >
        <Image src="/logo.png" alt="SorLise" width={66} height={66}
          style={{ width:66, height:66, objectFit:"contain" }}/>
      </motion.div>
      <motion.div
        initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:0.45, duration:0.5, ease:[0.22,1,0.36,1] }}
      >
        <Image src="/isimli_logo.png" alt="SorLise" width={164} height={52}
          style={{ width:164, height:"auto", objectFit:"contain",
            filter:"brightness(0) invert(1)" }}/>
      </motion.div>
    </motion.div>
  );
}

// ── Chat List (SorLise brand style) ───────────────────────
function ChatList({ selectedIdx }: { selectedIdx: number | null }) {
  return (
    <motion.div key="chatlist"
      style={{ position:"absolute", inset:0, background:"#F5F0FF",
        display:"flex", flexDirection:"column" }}
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.35 }}
    >
      {/* Brand header */}
      <div style={{ background:"linear-gradient(135deg,#2d1b69,#1a0533)",
        paddingTop:52, paddingBottom:14, paddingLeft:16, paddingRight:16 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <p style={{ fontSize:20, fontWeight:800, color:"white", letterSpacing:-0.4 }}>Sohbetler</p>
          <div style={{ width:32, height:32, borderRadius:"50%",
            background:"rgba(255,255,255,0.15)", display:"flex",
            alignItems:"center", justifyContent:"center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round"
              d="M12 5v14M5 12h14"/></svg>
          </div>
        </div>
        {/* Search */}
        <div style={{ marginTop:10, background:"rgba(255,255,255,0.12)",
          borderRadius:10, padding:"7px 11px", display:"flex", alignItems:"center", gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="rgba(255,255,255,0.6)" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>Ara</span>
        </div>
      </div>

      {/* Chat items */}
      <div style={{ flex:1, overflowY:"hidden", background:"white" }}>
        {CHATS.map((chat,i) => (
          <motion.div key={i}
            initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }}
            transition={{ delay:0.06+i*0.09, duration:0.38, ease:[0.22,1,0.36,1] }}
            style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px",
              background: selectedIdx===i ? "#F5F0FF" : "white",
              borderBottom:"0.5px solid #F0EBF8", transition:"background 0.25s" }}
          >
            <div style={{ position:"relative", flexShrink:0 }}>
              <div style={{ width:46, height:46, borderRadius:"50%",
                background:"linear-gradient(135deg,#D1AFFE,#B388F5)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"white", fontWeight:700, fontSize:15 }}>{chat.initials}</div>
              {i===0 && (
                <div style={{ position:"absolute", bottom:1, right:1, width:12, height:12,
                  borderRadius:"50%", background:"#34C759", border:"2px solid white" }}/>
              )}
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <p style={{ fontSize:13.5, fontWeight:600, color:"#0A0A0A" }}>{chat.name}</p>
                <p style={{ fontSize:11, color:"#9CA3AF" }}>{chat.time}</p>
              </div>
              <p style={{ fontSize:11.5, color:"#B388F5", marginTop:1, fontWeight:500 }}>{chat.school}</p>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:2 }}>
                <p style={{ fontSize:11.5, color:"#9CA3AF", overflow:"hidden",
                  whiteSpace:"nowrap", textOverflow:"ellipsis", maxWidth:165 }}>{chat.preview}</p>
                {chat.unread>0 && (
                  <div style={{ width:18, height:18, borderRadius:"50%",
                    background:"#B388F5", display:"flex", alignItems:"center",
                    justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontSize:10, color:"white", fontWeight:700 }}>{chat.unread}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Chat Conversation (SorLise brand style) ───────────────
function ChatConversation({ visibleMessages, showTyping }:
  { visibleMessages: number[]; showTyping: boolean }) {
  return (
    <motion.div key="chat"
      style={{ position:"absolute", inset:0, background:"#F5F0FF",
        display:"flex", flexDirection:"column" }}
      initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
      transition={{ duration:0.38, ease:[0.22,1,0.36,1] }}
    >
      {/* Brand header */}
      <div style={{ background:"linear-gradient(135deg,#2d1b69,#1a0533)",
        paddingTop:50, paddingBottom:12, paddingLeft:10, paddingRight:14,
        display:"flex", alignItems:"center", gap:10 }}>
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
          <path d="M8.5 1.5L1.5 8.5l7 7" stroke="rgba(255,255,255,0.8)"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div style={{ position:"relative" }}>
          <div style={{ width:38, height:38, borderRadius:"50%",
            background:"rgba(255,255,255,0.2)", border:"1.5px solid rgba(255,255,255,0.3)",
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"white", fontWeight:700, fontSize:13 }}>EA</div>
          <div style={{ position:"absolute", bottom:0, right:0, width:11, height:11,
            borderRadius:"50%", background:"#34C759", border:"1.5px solid white" }}/>
        </div>
        <div style={{ flex:1 }}>
          <p style={{ fontSize:14, fontWeight:700, color:"white", lineHeight:1.2 }}>Ece A.</p>
          <p style={{ fontSize:10.5, color:"rgba(255,255,255,0.6)", fontWeight:400 }}>çevrimiçi · Ankara Fen</p>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="rgba(255,255,255,0.7)" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
      </div>

      {/* Messages */}
      <div style={{ flex:1, overflowY:"hidden", padding:"10px 10px",
        display:"flex", flexDirection:"column", gap:7 }}>
        <AnimatePresence initial={false}>
          {MESSAGES.map((msg) =>
            visibleMessages.includes(msg.id) ? (
              <motion.div key={msg.id}
                style={{ display:"flex", alignItems:"flex-end", gap:6,
                  flexDirection: msg.mine ? "row-reverse" : "row" }}
                initial={{ opacity:0, y:16, scale:0.88 }}
                animate={{ opacity:1, y:0, scale:1 }}
                transition={{ duration:0.34, ease:[0.22,1,0.36,1] }}
              >
                {!msg.mine && (
                  <div style={{ width:26, height:26, borderRadius:"50%",
                    background:"linear-gradient(135deg,#D1AFFE,#B388F5)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:"white", fontSize:8.5, fontWeight:700, flexShrink:0, marginBottom:2 }}>EA</div>
                )}
                <div style={{ maxWidth:185, padding:"9px 13px", fontSize:12.5, lineHeight:1.45,
                  borderRadius: msg.mine ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: msg.mine ? "linear-gradient(135deg,#B388F5,#9B5FE0)" : "white",
                  color: msg.mine ? "white" : "#0A0A0A",
                  boxShadow: msg.mine
                    ? "0 4px 14px rgba(179,136,245,0.4)"
                    : "0 2px 8px rgba(0,0,0,0.07)" }}>
                  {msg.text}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTyping && (
            <motion.div style={{ display:"flex", alignItems:"flex-end", gap:6 }}
              initial={{ opacity:0, y:12, scale:0.88 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, scale:0.85 }}
              transition={{ duration:0.26 }}
            >
              <div style={{ width:26, height:26, borderRadius:"50%",
                background:"linear-gradient(135deg,#D1AFFE,#B388F5)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"white", fontSize:8.5, fontWeight:700, flexShrink:0 }}>EA</div>
              <div style={{ background:"white", borderRadius:"16px 16px 16px 4px",
                padding:"9px 14px", display:"flex", gap:4, alignItems:"center",
                boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
                {[0,1,2].map(i => (
                  <motion.div key={i}
                    style={{ width:5, height:5, borderRadius:"50%", background:"#C4B5FD" }}
                    animate={{ y:[0,-5,0] }}
                    transition={{ duration:0.55, repeat:Infinity, delay:i*0.14, ease:"easeInOut" }}/>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div style={{ background:"white", borderTop:"1px solid #EDE9F8",
        padding:"8px 10px", display:"flex", alignItems:"center", gap:7 }}>
        <div style={{ flex:1, background:"#F5F0FF", borderRadius:20,
          border:"1px solid #E0D5F5", padding:"7px 14px",
          fontSize:12, color:"#B388F5" }}>Mesaj yaz...</div>
        <motion.div
          style={{ width:30, height:30, borderRadius:"50%",
            background:"linear-gradient(135deg,#B388F5,#9B5FE0)",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            boxShadow:"0 3px 10px rgba(179,136,245,0.4)" }}
          animate={visibleMessages.length>0 ? { scale:[1,1.18,1] } : {}}
          transition={{ duration:0.25 }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Main ───────────────────────────────────────────────────
export function PhoneAnimation() {
  const [phase, setPhase]                     = useState<Phase>("home");
  const [showCursor, setShowCursor]           = useState(false);
  const [cursorAtTarget, setCursorAtTarget]   = useState(false);
  const [tapping, setTapping]                 = useState(false);
  const [selectedChat, setSelectedChat]       = useState<number | null>(null);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping]           = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    function run() {
      setPhase("home"); setShowCursor(false); setCursorAtTarget(false);
      setTapping(false); setSelectedChat(null);
      setVisibleMessages([]); setShowTyping(false);

      t(() => setShowCursor(true), 1000);
      t(() => setCursorAtTarget(true), 1900);
      t(() => setTapping(true), 3100);
      t(() => { setTapping(false); }, 3420);
      t(() => { setShowCursor(false); setPhase("splash"); }, 3750);
      t(() => setPhase("chatlist"), 6000);
      t(() => setSelectedChat(0), 7200);
      t(() => setPhase("chat"), 8000);
      t(() => setVisibleMessages([0]), 8700);
      t(() => setShowTyping(true), 9900);
      t(() => { setShowTyping(false); setVisibleMessages([0,1]); }, 10900);
      t(() => setVisibleMessages([0,1,2]), 12400);
      t(() => setShowTyping(true), 13500);
      t(() => { setShowTyping(false); setVisibleMessages([0,1,2,3]); }, 14500);
      t(() => setVisibleMessages([0,1,2,3,4]), 16000);
      t(() => run(), 20500);
    }

    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const isHome = phase === "home" || phase === "tapping";

  return (
    /* Outer wrapper scales down on very small screens (<360px) */
    <div className="flex justify-center w-full">
      <div className="scale-[0.82] min-[360px]:scale-[0.92] sm:scale-100 origin-top">
        <motion.div
          style={{ position:"relative", width:360, height:412 }}
          initial={{ opacity:0, y:48, scale:0.88 }}
          animate={{ opacity:1, y:0, scale:1 }}
          transition={{ duration:1, ease:[0.22,1,0.36,1] }}
        >
        {/* ── Screen content ──
            PNG screen transparent from y=86 (CSS y=30). Frame ends at PNG y=1151 (CSS y=401).
            top:26 overlaps 4px into frame zone (frame pixels cover it) — closes the tiny gap.
            height:374 → ends at CSS y=400, 1px before frame cuts off at y=401. */}
        <div style={{
          position:"absolute", left:30, top:26, width:300, height:374,
          borderTopLeftRadius:34, borderTopRightRadius:34,
          borderBottomLeftRadius:0, borderBottomRightRadius:0,
          overflow:"hidden", background:"#000",
        }}>
          <StatusBar dark={true} />

          <AnimatePresence mode="wait">
            {isHome && <HomeScreen key="home" tapping={tapping} />}
            {phase === "splash" && <SplashScreen key="splash" />}
            {phase === "chatlist" && <ChatList key="chatlist" selectedIdx={selectedChat} />}
            {phase === "chat" && (
              <ChatConversation key="chat"
                visibleMessages={visibleMessages} showTyping={showTyping} />
            )}
          </AnimatePresence>

          {/* Cursor */}
          <AnimatePresence>
            {showCursor && (
              <motion.div key="cursor"
                style={{ position:"absolute", zIndex:50, pointerEvents:"none" }}
                initial={{ left:CURSOR_START.left, top:CURSOR_START.top, opacity:0, scale:1 }}
                animate={{
                  left: cursorAtTarget ? SORLISE_TARGET.left : CURSOR_START.left,
                  top:  cursorAtTarget ? SORLISE_TARGET.top  : CURSOR_START.top,
                  opacity: 1,
                  scale: tapping ? 0.62 : 1,
                }}
                exit={{ opacity:0 }}
                transition={{
                  left:    { duration:1.1, ease:[0.22,1,0.36,1] },
                  top:     { duration:1.1, ease:[0.22,1,0.36,1] },
                  opacity: { duration:0.25 },
                  scale:   { duration:0.11 },
                }}
              >
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none"
                  style={{ filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.7))" }}>
                  <path d="M4 2L4 22L9.5 16.5L13 24L16.5 22.5L13 15.5L21 15.5L4 2Z"
                    fill="white" stroke="rgba(0,0,0,0.45)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                {tapping && (
                  <motion.div
                    style={{ position:"absolute", top:"50%", left:"50%",
                      transform:"translate(-50%,-50%)", borderRadius:"50%",
                      border:"2.5px solid rgba(255,255,255,0.85)" }}
                    initial={{ width:0, height:0, opacity:1 }}
                    animate={{ width:52, height:52, opacity:0 }}
                    transition={{ duration:0.48, ease:"easeOut" }}/>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Mockup overlay — PNG screen area is transparent, frame is opaque ── */}
        <Image src="/iphone_mockup.png" alt="" width={360} height={412}
          style={{ position:"absolute", inset:0, width:"100%", height:"100%",
            objectFit:"fill", pointerEvents:"none", zIndex:10 }}
          priority/>
      </motion.div>
      </div>
    </div>
  );
}
