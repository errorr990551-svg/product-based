import { serve } from "@hono/node-server";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

// Export default worker fetch handler for Cloudflare Workers (Wrangler)
export default {
  fetch(request, env, ctx) {
    return app.fetch(request, env, ctx);
  },
};

// Start local Node server if run directly (Node.js runtime / Render)
if (process.env.NODE_ENV !== "production") {
  try {
    serve({ fetch: app.fetch, port: Number(PORT) }, (info) => {
      console.log(`🚀 Local Server running on port ${info.port}`);
    });
  } catch (err) {
    // Cloudflare Workers execution environment
  }
}
