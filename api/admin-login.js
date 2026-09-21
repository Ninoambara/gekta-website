/* global process */
import { authCookie, json } from "./_lib/cloudinary.js";

export default async function handler(request) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
  const { password } = await request.json();
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) return json({ error: "Password salah" }, 401);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json", "set-cookie": `gekta_admin=${authCookie({ exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800` },
  });
}
