// deno-lint-ignore-file camelcase

export type Response = {
  total_count: number;
  incomplete_results: boolean;
  items: [];
};

export type RepoData = {
  full_name: string;
  archived: boolean;
  stargazers_count: number;
  html_url: string;
  description: string;
}[];
