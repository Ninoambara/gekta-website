/* global Buffer, process */
import crypto from "node:crypto";

export const PORTFOLIO_TAG = "gekta-portfolio";
export const PUBLISHED_TAG = "gekta-published";

export function cloudinaryConfig() {
  const { CLOUDINARY_CLOUD_NAME: cloudName, CLOUDINARY_API_KEY: apiKey, CLOUDINARY_API_SECRET: apiSecret } = process.env;
  if (!cloudName || !apiKey || !apiSecret) throw new Error("Cloudinary environment variables are missing");
  return { cloudName, apiKey, apiSecret };
}

export function signParams(params, apiSecret) {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return crypto.createHash("sha1").update(`${payload}${apiSecret}`).digest("hex");
}

export function authCookie(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", process.env.ADMIN_PASSWORD).update(encoded).digest("base64url");
  return `${encoded}.${signature}`;
}

export function isAdmin(request) {
  const cookie = request.headers.cookie?.match(/(?:^|; )gekta_admin=([^;]+)/)?.[1];
  if (!cookie || !process.env.ADMIN_PASSWORD) return false;
  const [encoded, signature] = cookie.split(".");
  if (!encoded || !signature) return false;
  const expected = crypto.createHmac("sha256", process.env.ADMIN_PASSWORD).update(encoded).digest("base64url");
  if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  try {
    return JSON.parse(Buffer.from(encoded, "base64url").toString()).exp > Date.now();
  } catch {
    return false;
  }
}

export async function cloudinaryRequest(path, options = {}) {
  const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
  return fetch(`https://api.cloudinary.com/v1_1/${cloudName}${path}`, {
    ...options,
    headers: { Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`, ...(options.headers || {}) },
  });
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });
}
