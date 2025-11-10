OctoFit Frontend — quick start

This is a minimal React frontend scaffold for the OctoFit exercise. It assumes you're running in a Codespace or an environment where `REACT_APP_CODESPACE_NAME` is set to your Codespace name so the frontend can call the backend at `https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev`.

Quick steps (Codespaces preferred):

1. Open a Codespace on this repository.
2. In the Codespace terminal:

```powershell
cd octofit-tracker/frontend
# with pnpm (devcontainer suggests pnpm)
pnpm install
pnpm start

# or with npm
# npm install
# npm start
```

3. Set the `REACT_APP_CODESPACE_NAME` environment variable in Codespaces or use the Codespaces forwarded port URL to reach the backend.

Notes
- The app uses `/octofitapp-small.svg` and `/favicon.svg` from the `public/` folder.
- The scaffold is minimal and intended to satisfy exercise checks; production readiness (routing, error handling, auth, CSRF) is out of scope for this exercise.
