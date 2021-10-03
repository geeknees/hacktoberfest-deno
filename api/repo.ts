import ky from "https://cdn.skypack.dev/ky?dts";

import { Response } from "./type.ts";

const baseUrl = "https://api.github.com";
const keyword = "topic:hacktoberfest+topic:deno";
const page = 1;
const perPage = 9;
const sort = "";
const order = "desc";

export const endpoint = (page: number) => {
  return `${baseUrl}/search/repositories?q=${keyword}&page=${page}&per_page=${perPage}&sort=${sort}&order=${order}`;
};

export const fetchRepo = async (page: number) => {
  const newRepos = await ky.get(endpoint(page)).json<Response>();
  return newRepos.items.map(({
    full_name,
    archived,
    stargazers_count,
    html_url,
    description,
  }) => ({
    full_name,
    archived,
    stargazers_count,
    html_url,
    description,
  }));
};

const repos = await ky.get(endpoint(page)).json<Response>();
export const topRepo = repos.items.map(({
  full_name,
  archived,
  stargazers_count,
  html_url,
  description,
}) => ({
  full_name,
  archived,
  stargazers_count,
  html_url,
  description,
}));

//console.log(topRepo);
