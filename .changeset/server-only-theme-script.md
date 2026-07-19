---
"better-themes": patch
---

Render the theme script only during SSR to avoid React's client-side script warning during StrictMode remounts. Thanks @himself65 for the report and suggested fix.
