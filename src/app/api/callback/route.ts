import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const city = String(body.city ?? "").trim();
    const loanType = String(body.loanType ?? "").trim();

    if (!name || !phone || !city || !loanType) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // --- Google Sheets Integration ---
    try {
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwyLvdIP5WGKdXl6IKNsf002khqmGfD42esiaOPr-PgDsitvIX0sOBzmZuQSx6TRSPr/exec";

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          city,
          loanType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sync with Google Sheets");
      }

      console.log("[callback] Google Sheets sync success");
      return NextResponse.json({ ok: true });
    } catch (sheetError) {
      console.error("[callback] Google Sheets sync failed", sheetError);
      return NextResponse.json(
        { ok: false, message: "Could not save lead to Google Sheets" },
        { status: 500 }
      );
    }
    // ---------------------------------

  } catch (error) {
    console.error("[callback] unexpected error", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Invalid request",
      },
      { status: 500 },
    );
  }
}
