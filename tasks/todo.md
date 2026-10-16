# Portfolio Plan

## Stack
- backend/: Laravel REST API (SQLite, service + repository pattern, API Resources, Form Requests)
- frontend/: React + TypeScript + Vite 5 + Tailwind 3 (Node 18 compatible), feature-based structure

## Backend
- [x] Scaffold Laravel, API only, versioned routes /api/v1
- [x] Migrations: profiles, experiences, projects, skill_categories, skills, educations, contact_messages
- [x] Models, repository interfaces + Eloquent implementations, services, controllers, resources
- [x] Contact form request + throttle
- [x] Seeder populated from resume
- [x] Feature tests for endpoints

## Frontend
- [x] Scaffold Vite React TS, Tailwind, router, query client
- [x] src/app, src/shared, src/features/{hero,about,experience,projects,skills,contact}
- [x] Each feature: api, hooks, components, types
- [x] Modern 2026 UI: dark/light theme, glass cards, gradient mesh, motion, bento grid

## Verification
- [x] php artisan test, tsc, vite build

## Deployment
- [x] backend/Dockerfile, .dockerignore, docker/start.sh (migrate, seed, cache, apache on $PORT)
- [x] render.yaml (blueprint), frontend/vercel.json
- [x] Built image and tested in production mode: health, API, CORS, contact
- [ ] User: push to GitHub, create Render and Vercel projects, set APP_KEY, APP_URL, FRONTEND_URL, VITE_API_URL
