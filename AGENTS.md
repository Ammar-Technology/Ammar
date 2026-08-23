# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static personal portfolio website** for "Ammar" — plain HTML, CSS, and vanilla JavaScript. There is no package manager, lockfile, bundler, or build step, so there are no dependencies to install.

### Files
- `index.html` — the single page (hero, skills, services, projects, about, contact).
- `style.css` — all styling, including light/dark theme (`.apply-theme`) and RTL/LTR handling.
- `script.js` — interactive behavior: mobile nav toggle, theme toggle (persisted in `localStorage`), EN/AR language toggle, and the EmailJS-backed contact form.
- `images/` — image assets.

### Running the site (development)
Serve the folder over HTTP from the repo root and open the served URL (do not open `index.html` via `file://`, since relative asset paths and some browser behavior work better over HTTP):

```
python3 -m http.server 8000
```

Then browse to `http://localhost:8000/`. Any static file server works (`npx serve`, etc.); `python3` is preinstalled, so it needs no extra install.

### Build / lint / test
There is **no** configured build, lint, or automated test tooling in this repo. "Building" is unnecessary — the served files are the deliverable. Verification is manual in a browser.

### Non-obvious gotchas
- `index.html` references `form-handler.js`, which does not exist in the repo; the contact form is actually handled inline in `script.js`. The missing file 404 is harmless and does not affect functionality.
- The contact form uses the external EmailJS service (`emailjs.send(...)`). Actually sending a message requires network egress to EmailJS and a valid service/template; it is not needed to verify the site loads and the UI works.
- The language toggle and theme toggle persist their state in `localStorage` (`language`, `themeApplied`), so state carries across reloads within the same browser profile.
