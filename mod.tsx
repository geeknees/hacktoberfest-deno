import { h, json, jsx, PathParams, serve, validateRequest } from "./deps.ts";
// deployctl run --libs=ns,fetchevent --watch mod.tsx

import { RepoData } from "./api/type.ts";
import { fetchRepo } from "./api/repo.ts";
import { App, NotFound } from "./public/index.tsx";

const handleNewRepos = async (request: Request, params: PathParams) => {
  const { error } = await validateRequest(request, {
    GET: {},
  });
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  const page = Number(params.page);
  const items = await fetchRepo(page);

  if (Array.isArray(items) && items.length === 0) {
    return jsx(<NotFound />, { status: 404 });
  }

  return jsx(<App items={JSON.stringify(items)} page={page} />);
};

serve({
  "/": () => jsx(<App />),
  "/repos/page/:page": handleNewRepos,
  // The route handler of 404 will be invoked when a route handler
  // for the requested path is not found.
  404: () => jsx(<NotFound />, { status: 404 }),
});
