import { h, jsx } from "../deps.ts";

import { RepoData } from "../api/type.ts";
import { topRepo } from "../api/repo.ts";

export const style = css`
:root {
  --default-color: transparent;
  --primary-color: #6c63ff;
  --secondary-color: #f5f2fe;
  --link-border-radius: 5px;
  --box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

body {
  margin: 20px auto;
  text-align: center;
  max-width: 1200px;
}

h1 {
  font-size: 96px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 24px;
}

a {
  color: var(--primary-color);
}

.links {
  display: flex;
  justify-content: center;
}

.links a {
  text-decoration: none;
}

.contact-link {
  border-radius: var(--link-border-radius);
  margin: 20px;
  padding: 10px 20px;
  border: 1px solid #000000;
}

a.contact-link {
  background-color: #000000;
  color: var(--secondary-color);
}

.repo-link {
  border-radius: var(--link-border-radius);
  margin: 20px;
  padding: 20px;
  border: 1px solid #000000;
}

a.repo-link {
  background-color: var(--default-color);
  color: #000000;
}

#repo {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
}

#repo li {
  text-align: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: var(--link-border-radius);
  flex: 0 1 calc(25% - 1em);
  padding: 20px;
  margin: 10px;
}

#repo li a {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 24px;
}
`;

const repoList = (data: RepoData) => {
  return data.map((repo) => {
    return (
      <li>
        <a href={repo.html_url}>{repo.full_name}</a>
        <br />⭐ star: {repo.stargazers_count}{" "}
        {repo.archived ? "📦 archived" : ""}
        <p>{repo.description}</p>
      </li>
    );
  });
};

const repoButton = () => (
  <div class="links">
    <a
      href="/repos/page/1"
      class="repo-link"
    >
      🆕 Find more repositories
    </a>
  </div>
);

const nextButton = (page: number) => (
  <div class="links">
    <a
      href={`/repos/page/${page - 1}`}
      class="repo-link"
    >
      ◀️ Prev
    </a>

    <a
      href={`/repos/page/${page + 1}`}
      class="repo-link"
    >
      ▶️ Next
    </a>
  </div>
);

export const App = ({ items, page }: any) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <title>Hacktoberfest for deno developers</title>
    </head>
    <body>
      <h2>👋 Hacktoberfest for deno developers</h2>
      <div id="repo">
        {repoList(items ? JSON.parse(items) : topRepo)}
      </div>
      {page ? nextButton(page) : repoButton()}
      <div class="links">
        <a
          href="https://github.com/geeknees/hacktoberfest-deno"
          class="contact-link"
        >
          GitHub
        </a>
      </div>
    </body>
  </html>
);

export const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

/** Wrapper function to get syntax highlight for CSS in editors. */
function css(style: TemplateStringsArray) {
  return style.join("");
}
