import { cloudinaryConfig, isAdmin, json, signParams } from "../lib/cloudinary.js";

export function POST(request) {
  if (!isAdmin(request)) return json({ error: "Unauthorized" }, 401);
  const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
  const timestamp = Math.floor(Date.now() / 1000);
  const params = { folder: "gekta/portfolio", tags: "gekta-portfolio,gekta-published", timestamp };
  return json({ cloudName, apiKey, timestamp, ...params, signature: signParams(params, apiSecret) });
}
