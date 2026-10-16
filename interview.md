# Portfolio Project: Interview Guide

## 30-second pitch

"I built my portfolio as a real full-stack app instead of a static page. The backend is a Laravel REST API that serves my profile, experience, projects and skills, and handles a contact form. The frontend is a React and TypeScript app organised by feature. I used it to practise clean architecture: SOLID on the backend and a feature-based structure on the frontend, so it is readable, scalable and easy to maintain."

## Tech stack and why

| Layer | Choice | Reason |
|---|---|---|
| API | Laravel 13, PHP 8.3 | My main backend stack at work |
| Database | SQLite (dev) | Zero setup; swap to PostgreSQL or MySQL by changing `.env` only |
| Frontend | React 18, TypeScript, Vite 5 | Type safety and fast dev builds (Vite 5 because my machine runs Node 18) |
| Styling | Tailwind 3 with CSS variable tokens | Fast to build, and dark/light theming comes from swapping variables |
| Data fetching | TanStack Query | Caching, loading and error states without hand-written effects |
| Motion | Framer Motion | Scroll reveals and the progress bar |

## Architecture

```
React (feature-based)  --HTTP/JSON-->  Laravel API v1
                                         Controller
                                           -> Service
                                             -> Repository interface
                                               -> Eloquent repository -> DB
```

### Backend

- **Request flow:** Controller (thin, HTTP only) -> Service (use case) -> Repository interface -> Eloquent implementation.
- **Form Requests** validate input (`StoreContactRequest`).
- **API Resources** shape output, so the database columns are not exposed directly.
- **Versioned routes** under `/api/v1`.
- **Rate limiting:** the contact endpoint is throttled to 5 requests per minute.
- **One aggregate endpoint** (`GET /portfolio`) returns everything the page needs in one request.
- **Seeders** hold the content from my resume, so a fresh database gives a working site.
- **Tests:** 6 feature tests cover the endpoints, validation and the 404 case.

### Frontend

```
src/
  app/        app shell and providers
  shared/     reusable UI, hooks, http client, utils
  features/
    portfolio/  api, hooks, types (single data source)
    hero  about  experience  projects  skills  contact  layout
```

- Each feature owns its components, hooks, api calls and types.
- One cached `portfolio` query feeds every section through small selector hooks.
- Features import from `shared`, never from each other's internals (only the shared `portfolio` data feature is used across them).

## How SOLID shows up

- **Single responsibility:** controllers only handle HTTP, services hold logic, repositories only talk to the database. On the frontend, `useContactForm` holds form logic and `ContactForm` only renders.
- **Open/closed:** I can add a new section (for example testimonials) by adding a model, repository, resource and feature folder without editing existing ones, apart from registering it.
- **Liskov:** any class implementing a repository interface can replace the Eloquent one (for example an in-memory fake for tests).
- **Interface segregation:** one small interface per repository instead of one large "data" interface.
- **Dependency inversion:** services depend on interfaces; `RepositoryServiceProvider` binds the concrete classes in one place.

## A bug I debugged (good story to tell)

**Symptom:** the site showed "Portfolio unavailable" even though tests and the build passed.

**Investigation:**
1. API worked with curl, so it was not the backend logic.
2. I loaded the page in headless Chrome and read the console.
3. It showed a CORS error: the API allowed origin `localhost:4173` but the app ran on `5173`.

**Root cause:** a stale `FRONTEND_URL` in `.env`. A second problem was a leftover PHP process holding port 8000.

**Fix and lesson:** allow the dev and preview origins, check ports before starting servers, and always test end to end in a real browser, not only unit tests and builds. I recorded this in `tasks/lessons.md`.

## Trade-offs and what I would do next

Be honest about these; interviewers respect it.

- **Skills and highlights are JSON columns.** Simple and fast for read-only content. If I needed to query or filter by skill, I would normalise them into a table.
- **No admin panel or auth.** Content is seeded. Next step: admin CRUD using Laravel auth and RBAC.
- **Contact messages are only stored.** Next step: send an email notification via a queued job, plus a spam check.
- **Hero stats are hardcoded** in the frontend; they should come from the API.
- **Single page, no routing.** A project detail page (`/projects/:slug`) is the next feature; the API endpoint already exists.
- **Frontend tests are missing.** I would add Vitest and Testing Library for the contact form and hooks.
- **Deployment:** Docker for both services behind Nginx, which is how I deploy at work.

## Likely questions and short answers

**Why a separate API instead of Blade?**
It matches how I work professionally, keeps the frontend independent, and lets the same API serve a mobile app later.

**Why the repository pattern for a small app?**
To practise and demonstrate dependency inversion, and it makes services testable without a database. I would say plainly that for a site this small it is more structure than strictly needed.

**Why feature-based folders?**
Everything for one feature lives together, so changes are local and new developers find code quickly. Shared code lives in `shared`, which prevents circular imports.

**Why TanStack Query rather than `useEffect` and `fetch`?**
Built-in caching, loading and error states, and one request shared by every section.

**How do you handle validation?**
Twice: on the client for fast feedback, and on the server with a Form Request as the source of truth. Server errors (422) are mapped back to the form fields.

**How is it secured?**
Input validation, rate limiting on the public write endpoint, CORS restricted to known origins, no secrets in the repo (`.env` is not committed).

**How would it scale?**
The API is stateless, so it scales horizontally. The portfolio response can be cached (Laravel cache or HTTP cache headers), and the database can move to PostgreSQL.

**How did you make the UI feel modern?**
A glass card style, animated gradient background, cursor spotlight on cards, scroll-triggered reveals, a dark/light theme using CSS variable tokens, and `prefers-reduced-motion` support for accessibility.

**What was the hardest part?**
Debugging the CORS failure that tests did not catch (see the story above).

## Demo script (2 minutes)

1. Open the site and show the hero and theme toggle.
2. Scroll through experience and projects; expand a project and use the filter.
3. Show `GET /api/v1/portfolio` in the browser.
4. Show the backend folder: controller, service, repository interface, Eloquent class, provider binding.
5. Show the frontend `features/` folder and one feature's structure.
6. Submit the contact form, then show the validation error path.
