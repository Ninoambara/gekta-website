export default function handler() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json", "set-cookie": "gekta_admin=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0" },
  });
}
