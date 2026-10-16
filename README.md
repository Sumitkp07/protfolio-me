# Portfolio

Laravel 13 REST API (`backend/`) and React + TypeScript SPA (`frontend/`).

## Run

Backend:

    cd backend
    php artisan migrate --seed
    php artisan serve

Frontend (Node 18+):

    cd frontend
    cp .env.example .env
    npm install
    npm run dev

## API (v1)

- GET /api/v1/portfolio
- GET /api/v1/projects?featured=1
- GET /api/v1/projects/{slug}
- POST /api/v1/contact (throttled, 5 per minute)

## Structure

Backend: Controller -> Service -> Repository interface -> Eloquent repository, with API Resources and Form Requests.

Frontend: `src/app` (shell), `src/shared` (reusable ui, hooks, api client), `src/features/<name>` (components, hooks, api, types per feature).
# protfolio-me

## Deploy (free)

API on Render (Docker, SQLite, seeded on every start), frontend on Vercel.

1. Push the repo to GitHub.
2. Render: New > Blueprint, pick the repo. It reads `render.yaml`. Set these when prompted:
   - `APP_KEY`: run `php artisan key:generate --show` in `backend/` and paste the output
   - `APP_URL`: the Render service URL, for example `https://portfolio-api.onrender.com`
   - `FRONTEND_URL`: the Vercel URL, for example `https://your-site.vercel.app` (comma separate to allow several)
3. Vercel: import the repo, set Root Directory to `frontend`, and add the environment variable
   `VITE_API_URL=https://portfolio-api.onrender.com/api/v1`.
4. If the Vercel URL changes, update `FRONTEND_URL` on Render and redeploy.
5. Optional: ping `https://portfolio-api.onrender.com/up` every 10 minutes (UptimeRobot) to avoid cold starts.

Contact messages live in SQLite on an ephemeral disk, so they are lost on restart.
