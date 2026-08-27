import { Hono } from "hono";
import { cors } from "hono/cors";
import { submitContactForm } from "./controllers/contactController.js";
import { submitComplaintForm } from "./controllers/complaintController.js";
import { submitApplication } from "./controllers/applicationController.js";

const app = new Hono();

// Enable CORS
app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
}));

// Bind env variables from Worker context to process.env if present
app.use("*", async (c, next) => {
  if (c.env && c.env.RESEND_API_KEY) {
    if (typeof process !== "undefined") {
      process.env.RESEND_API_KEY = c.env.RESEND_API_KEY;
    }
  }
  await next();
});

// Global error handler ensuring CORS headers are always present even on 500 errors
app.onError((err, c) => {
  console.error("Global Hono App Error:", err);
  c.header("Access-Control-Allow-Origin", "*");
  return c.json({
    success: false,
    message: err.message || "Internal Server Error"
  }, 500);
});

// Health check routes
app.get("/health", (c) => c.text("OK", 200));
app.get("/api/health", (c) => c.text("OK", 200));

// API routes
app.post("/api/contact", submitContactForm);
app.post("/api/complaint", submitComplaintForm);
app.post("/api/apply", submitApplication);
app.post("/api/application", submitApplication);

export default app;

