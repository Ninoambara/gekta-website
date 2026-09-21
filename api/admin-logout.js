export function GET() {
  return Response.json({ ok: true }, { headers: { "set-cookie": "gekta_admin=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0" } });
}
