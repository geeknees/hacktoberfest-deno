import ky from "https://cdn.skypack.dev/ky?dts";

import { RepoData, Response } from "./type.ts";

const baseUrl = "https://api.github.com";
const keyword = "topic:hacktoberfest+topic:deno";
const page = 1;
const per_page = 9;
const sort = "";
const order = "desc";
const endpoint = (page: number) => {
  return `${baseUrl}/search/repositories?q=${keyword}&page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`;
};

export const fetchRepo = async (page: number) => {
  const newRepos = await ky.get(endpoint(page)).json<Response>();
  return newRepos.items.map(({
    name,
    archived,
    stargazers_count,
    html_url,
    description,
  }) => ({
    name,
    archived,
    stargazers_count,
    html_url,
    description,
  }));
};

const repos = await ky.get(endpoint(page)).json<Response>();
export const topRepo = repos.items.map(({
  name,
  archived,
  stargazers_count,
  html_url,
  description,
}) => ({
  name,
  archived,
  stargazers_count,
  html_url,
  description,
}));

console.log(topRepo);
