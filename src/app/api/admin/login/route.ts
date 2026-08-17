import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  createSessionToken,
  verifyPassword,
} from "@/lib/admin/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = String(body.password ?? "");

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { ok: false, message: "Invalid password" },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, createSessionToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
