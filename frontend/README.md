# Tech-Store frontend

NEOTEK Tech-Store customer + admin SPA. Stack: Vite + React 19 + `react-router` v7 + Tailwind v4 + `lucide-react`.

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for the full architecture (routes, feature modules, services, stores).

## Local development

```bash
# from this directory
pnpm install
pnpm dev        # Vite dev server (default http://localhost:5173)

pnpm build      # production build into dist/
pnpm preview    # preview the production build
```

Copy `.env.example` to `.env` and set `VITE_API_URL` to the backend URL
(default `http://localhost:5000`). The frontend currently runs against
static fixtures via `src/services/` — swap those service bodies for `fetch`
calls once the backend implements the API.

## Docker

Built and served via Nginx (see `Dockerfile` + `nginx.conf`), or run the
whole monorepo from the repo root with `docker compose up --build`.
