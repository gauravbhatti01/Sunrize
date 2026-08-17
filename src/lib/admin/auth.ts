import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "sunrize_admin_session";

function hashToken(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "sunrize-admin";
}

export function createSessionToken() {
  const password = getAdminPassword();
  const day = new Date().toISOString().slice(0, 10);
  return hashToken(`${password}:${day}:sunrize-admin`);
}

export function verifyPassword(input: string) {
  const expected = getAdminPassword();
  const a = Buffer.from(hashToken(input));
  const b = Buffer.from(hashToken(expected));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const expected = createSessionToken();
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
