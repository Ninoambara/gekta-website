/* global process */
import { cloudinaryConfig, cloudinaryRequest, isAdmin, json, PORTFOLIO_TAG, PUBLISHED_TAG, signParams } from "./_lib/cloudinary.js";

export default async function handler(request) {
  if (!isAdmin(request)) return json({ error: "Unauthorized" }, 401);
  try {
    if (request.method === "GET") {
      const response = await cloudinaryRequest(`/resources/image/tags/${PORTFOLIO_TAG}?max_results=500`);
      if (!response.ok) return json({ error: "Cloudinary request failed" }, 502);
      const data = await response.json();
      return json({ photos: (data.resources || []).map((asset) => ({ ...asset, published: asset.tags?.includes(PUBLISHED_TAG) })) });
    }
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
    const { action, publicId } = await request.json();
    if (!publicId) return json({ error: "publicId wajib diisi" }, 400);
    if (action === "publish" || action === "unpublish") {
      const response = await cloudinaryRequest("/image/tags", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ command: action === "publish" ? "add" : "remove", tag: PUBLISHED_TAG, "public_ids[]": publicId }) });
      if (!response.ok) return json({ error: "Gagal mengubah status foto" }, 502);
      return json({ ok: true });
    }
    if (action === "delete") {
      const { apiKey, apiSecret } = cloudinaryConfig();
      const timestamp = Math.floor(Date.now() / 1000);
      const params = { invalidate: "true", public_id: publicId, timestamp };
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/destroy`, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ ...params, api_key: apiKey, signature: signParams(params, apiSecret) }) });
      if (!response.ok) return json({ error: "Gagal menghapus foto" }, 502);
      return json({ ok: true });
    }
    return json({ error: "Action tidak dikenal" }, 400);
  } catch (error) {
    return json({ error: error.message }, 500);
  }
}
