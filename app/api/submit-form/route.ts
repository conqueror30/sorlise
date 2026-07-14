import { NextRequest, NextResponse } from "next/server";

// Çalışan Google Apps Script endpoint'i — env tanımsızsa yedek olarak kullanılır.
// Böylece Plesk'te APPS_SCRIPT_URL unutulsa bile form Sheets'e yazmaya devam eder.
const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx_R92g1ojIA5xzlYlhzhPU25TuUL1dy2mGUi_IrUO9mtprbSLD4VerVYRe1mHpb75XQA/exec";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[SorLise] Apps Script HTTP hatası:", res.status);
      return NextResponse.json({ success: false }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[SorLise] Form submission error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
