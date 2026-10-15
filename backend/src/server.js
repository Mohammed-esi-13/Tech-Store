import express from "express";
import "dotenv/config";
import cors from "cors";

// Placeholder API for NEOTEK Tech-Store.
// The real schema lives in ./DataBase.json (Postgres, 27 tables).
// Endpoints here will grow to match it: catalog, cart, orders, RMA, builds.

const app = express();
// Docker maps host 5000 -> container 3000; Number() guards against unset/garbage values.
const PORT = Number(process.env.PORT) || 3000;

// Local dev servers are always allowed so the frontend works while developing.
const devOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

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

// Placeholder router — replaced by real domain routes (products, orders, ...).
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", db: "not-connected-yet" });
});

const server = app.listen(PORT, () => {
  console.log(`tech-store-api listening on :${PORT}`);
});

process.on("unhandledRejection", () => {
  server.close(() => process.exit(1));
});

process.on("uncaughtException", () => {
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
