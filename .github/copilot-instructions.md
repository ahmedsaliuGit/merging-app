# Copilot / AI agent instructions — merging-app

Short goal
- Help an AI agent get productive fast in this exercise repo (see `README.md` and `.devcontainer/devcontainer.json`). Keep changes small and verifiable.

Quick scan checklist (do this first)
1. Read `README.md` — it's an exercise entry point and links to issue #1.
2. Inspect `.devcontainer/devcontainer.json` for runtime hints (Node + Python, pnpm, forwarded ports).
3. Look for `package.json`, `pyproject.toml`/`requirements.txt`, `manage.py`, or `Dockerfile` to infer build/run commands.

Immediate actionable facts (repo-specific)
- Devcontainer indicates a React frontend (port 3000), Django backend (port 8000), and MongoDB (27017).
- Devcontainer enables `chat.agent.enabled` and installs Copilot-related extensions — assume a devcontainer workflow is supported.

What to run when files are present
- If `package.json` exists (frontend): prefer pnpm (devcontainer provides pnpm). Example: `pnpm install` then `pnpm start` or check `scripts` for `dev`/`start`.
- If Django backend files exist (`manage.py`, `requirements.txt`): create venv, install deps, run `python manage.py runserver 8000`.
- If a Docker/Docker Compose setup exists, use it for integration testing (look for `docker-compose.yml` or `Dockerfile`).

Patterns & conventions
- Preserve environment-driven config. Look for `.env`, `process.env`, or Django `settings.py` usage and avoid hardcoding secrets.
- Follow the devcontainer's port mapping and extension choices; prefer iterative, containerized runs when available.
- Keep PRs small; this repo is an exercise scaffold.

Integration points to check before edits
- Confirm whether MongoDB is required for tests/local runs (check code for `mongodb` or `pymongo` clients).
- If modifying API contracts, run both frontend and backend locally (ports 3000 & 8000) to verify integration.

Merging guidance
- No existing `copilot-instructions.md` detected; merge any found `AGENT.md`/`AGENTS.md` if present in future by copying concrete commands and env var names into the "Repository-specific facts" section.

If you want me to expand
- I can re-scan the repo and populate exact npm/pnpm scripts, Django commands, and env var names into the guidance — point me at the repo root or allow me to run a deeper scan and I will update this file.

Repository-specific facts (populated from repo scan)
- `.devcontainer/devcontainer.json` present — Node (pnpm), Python, Docker-in-Docker features enabled.
- Forwarded ports: 3000 (frontend), 8000 (backend), 27017 (MongoDB).
- `README.md` points to exercise issue #1 for next steps.

---
Keep this file short and focused; append only concrete, discoverable commands or env var names.