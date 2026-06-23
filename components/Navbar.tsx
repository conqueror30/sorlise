"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Gönüllüler", href: "#mentorlar" },
  { label: "Okullar İçin", href: "#okullar" },
  { label: "Hakkında", href: "#hakkinda" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-brand-dark">Sor</span>
            <span className="text-ink">Lise</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/kayit"
            className="text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2"
          >
            Giriş Yap
          </Link>
          <Link
            href="/kayit"
            className="text-sm font-semibold bg-brand text-ink px-4 py-2 rounded-xl hover:bg-brand-dark transition-colors"
          >
            Ücretsiz Başla
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-line px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kayit"
            className="text-sm font-semibold bg-brand text-ink px-4 py-3 rounded-xl text-center hover:bg-brand-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Ücretsiz Başla
          </Link>
        </div>
      )}
    </header>
  );
}
