import { h, json, jsx, PathParams, serve, validateRequest } from "./deps.ts";
// deployctl run --libs=ns,fetchevent --watch mod.tsx

import { App, NotFound } from "./public/index.tsx";

serve({
  "/": () => jsx(<App />),
  // The route handler of 404 will be invoked when a route handler
  // for the requested path is not found.
  404: () => jsx(<NotFound />, { status: 404 }),
});
