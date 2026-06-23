import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!APPS_SCRIPT_URL) {
      console.log("[SorLise] Form gönderimi (APPS_SCRIPT_URL ayarlanmamış):", body);
      return NextResponse.json({ success: true, dev: true });
    }

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[SorLise] Form submission error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
