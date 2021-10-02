import ky from 'https://cdn.skypack.dev/ky?dts';

const baseUrl = "https://api.github.com";
const keyword = "topic:hacktoberfest+topic:deno";

type Response = {
  total_count: number;
  incomplete_results: boolean;
  items: [];
};

const repos = await ky.get(`${baseUrl}/search/repositories?q=${keyword}`).json<Response>();

export const data = repos.items.map(({
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

//console.table(data);