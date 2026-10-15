# Deploying Tech-Store

This monorepo has two services that are deployed separately:

- **backend/** — Express.js API server (placeholder; real schema in `backend/DataBase.json`)
- **frontend/** — Vite + React SPA (see `frontend/PROJECT_STRUCTURE.md`)

## Option A: separate services (e.g. Railway / Render + Vercel)

### Step 1: Deploy the Backend

1. Create a new service from this repository.
2. Set **Root Directory** to `backend`.
3. The `Dockerfile` is auto-detected. If not, select **Dockerfile** as the build method.
4. In the **Variables** tab, add:

| Variable | Value |
|---|---|
| `PORT` | `3000` |
| `NODE_ENV` | `production` |
| `CORS_ORIGIN` | Your frontend URL (e.g. `https://your-frontend.up.railway.app`) |
| `DATABASE_URL` | Your Postgres connection string (once the DB layer lands) |

5. Note the generated URL under networking settings.

### Step 2: Deploy the Frontend

1. Create another service from the same repository.
2. Set **Root Directory** to `frontend`.
3. The Nginx-based `Dockerfile` is used for the build.
4. In the **Variables** tab, add:

| Variable | Value |
|---|---|
| `VITE_API_URL` | Your backend URL (e.g. `https://your-backend.up.railway.app`) |

> Note: `VITE_*` variables are baked in at build time, so set `VITE_API_URL`
> **before** the frontend builds (the `Dockerfile` accepts it as a build arg).

5. Note the generated URL, then go back and set the backend's `CORS_ORIGIN` to it.

## Option B: local development with Docker

```bash
# Copy and fill in your env files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit both .env files with your actual values

# Start both services
docker compose up --build
```

- Frontend: http://localhost:80
- Backend: http://localhost:5000

## Option C: local development without Docker

```bash
# Terminal 1 — backend
cd backend && npm install && npm run dev      # http://localhost:3000

# Terminal 2 — frontend
cd frontend && pnpm install && pnpm dev       # http://localhost:5173
```

Make sure `frontend/.env` points `VITE_API_URL` at the backend
(`http://localhost:3000` for Option C, `http://localhost:5000` for Option B).

## Architecture

```
┌──────────────┐       ┌──────────────┐
│   Frontend   │──────▶│   Backend    │
│  (Nginx:80)  │       │ (Node:3000)  │
└──────────────┘       └──────┬───────┘
                              │
                       ┌──────▼───────┐
                       │   Postgres   │
                       │ (DataBase.json│
                       │  schema, TBD) │
                       └──────────────┘
```
