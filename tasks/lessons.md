# Lessons

- Run the real app end to end (API plus browser render) before saying it works. Unit tests and a build did not catch the CORS failure.
- backend/.env FRONTEND_URL had a stale value (4173) that blocked the dev origin (5173). CORS now allows both ports on localhost and 127.0.0.1.
- Do not use pkill -f with a pattern that matches the calling shell's own command line.
- A leftover php built-in server on port 8000 can hang and silently block a new one: check the port with ss before starting.
