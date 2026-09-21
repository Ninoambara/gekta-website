/* global process */
import { authCookie, json } from "../lib/cloudinary.js";

export async function POST(request) {
  const { password } = await request.json();
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) return json({ error: "Password salah" }, 401);
  return json({ ok: true }, 200, { "set-cookie": `gekta_admin=${authCookie({ exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800` });
}
