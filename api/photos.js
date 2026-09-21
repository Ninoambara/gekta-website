import { cloudinaryRequest, json, PORTFOLIO_TAG, PUBLISHED_TAG } from "./_lib/cloudinary.js";

export default async function handler(request) {
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);
  try {
    const response = await cloudinaryRequest(`/resources/image/tags/${PUBLISHED_TAG}?max_results=500`);
    if (!response.ok) return json({ error: "Cloudinary request failed" }, 502);
    const data = await response.json();
    return json({ photos: (data.resources || []).filter((asset) => asset.tags?.includes(PORTFOLIO_TAG)).map(toPhoto) });
  } catch (error) {
    return json({ error: error.message }, 500);
  }
}

function toPhoto(asset) {
  return { id: asset.asset_id, title: asset.context?.custom?.title || "GEKTA Project", img: asset.secure_url, publicId: asset.public_id, width: asset.width, height: asset.height };
}
