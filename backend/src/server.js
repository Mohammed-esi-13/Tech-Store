import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/product/productRouter.ts";
import { connectDB, disconnectDB } from "./config/db.js";
const app = express();
// Docker maps host 5000 -> container 3000; Number() guards against unset/garbage values.
const PORT = Number(process.env.PORT) || 5000;

connectDB();

// Local dev servers are always allowed so the frontend works while developing.
const devOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

// Extra origins (production frontend URL) come from CORS_ORIGIN, comma-separated.
const envOrigins = (process.env.CORS_ORIGIN ?? "")
  .split(",")
  .map((o) => o.trim().replace(/\/+$/, ""))
  .filter(Boolean);

const allowedOrigins = [...new Set([...devOrigins, ...envOrigins])];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check (also gives the root path a real response for uptime monitors).
app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "tech-store-api" });
});

//API routes
app.use("/api/products", router);
// Placeholder router — replaced by real domain routes (products, orders, ...).
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", db: "not-connected-yet" });
});

const server = app.listen(PORT, () => {
  console.log(`tech-store-api listening on :${PORT}`);
});

// unhandledRejection :
process.on("unhandledRejection", (err) => {
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// uncaughtException :
process.on("uncaughtException", (err) => {
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// SIGTERM :
process.on("SIGTERM", async () => {
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
