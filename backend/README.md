# Tech-Store backend (placeholder)

Express.js API server for NEOTEK Tech-Store. Currently a minimal placeholder
(health endpoints + CORS) so the monorepo's Docker setup works end to end.
The real implementation follows [`DataBase.json`](./DataBase.json): Postgres,
27 tables (catalog, inventory, carts, orders, RMA, PC builds, settings).

## Local development

```bash
# from this directory
npm install
cp .env.example .env   # adjust values
npm run dev            # nodemon on http://localhost:3000
```

## Next steps (when building the real API)

1. Add Postgres + an ORM layer (Prisma/Drizzle) generated from `DataBase.json`.
2. Replace the `/api/health` stub with domain routes (products, orders, ...).
3. Point the frontend at it via `frontend/.env` (`VITE_API_URL`).
