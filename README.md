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
