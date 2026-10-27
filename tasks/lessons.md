# Lessons

- Run the real app end to end (API plus browser render) before saying it works. Unit tests and a build did not catch the CORS failure.
- backend/.env FRONTEND_URL had a stale value (4173) that blocked the dev origin (5173). CORS now allows both ports on localhost and 127.0.0.1.
- Do not use pkill -f with a pattern that matches the calling shell's own command line.
- A leftover php built-in server on port 8000 can hang and silently block a new one: check the port with ss before starting.
- A long-running vite dev server goes stale after npm install changes node_modules (alias import failures). Restart it by PID, not by pattern.
- Brand icons are not in lucide-react (v1+). simple-icons is used for tech logos, with lucide generics as fallback for AWS S3, OpenAI, SendGrid and non-brand skills.
- Filled buttons need a darker brand color (--brand) than the text accent so white text keeps 4.5:1 contrast.
- To screenshot scroll-reveal sections, drive Chrome over --remote-debugging-pipe (scratchpad shoot.py) instead of --screenshot.
- Free Render APIs sleep after 15 minutes and take about a minute to wake. The frontend must never block first paint on the API: ship a data snapshot as initialData and refresh in the background. Refresh it with npm run snapshot after content changes.
- Color token names must not collide with Tailwind utilities (text-base is a font size). Use text-onbrand for text on filled brand buttons.
