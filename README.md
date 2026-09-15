# Japanese Like a Breeze

A documentation site for the Jlab (Japanese Like a Breeze) Anki addon and
courses, built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

For a full account of the migration from the original WordPress site — page
mapping, editorial decisions, placeholders, and known caveats — see
[`MIGRATION.md`](./MIGRATION.md).

## Development

Start the dev server (see `AGENTS.md` for background-mode usage):

```sh
nix develop   # provides node + pnpm
pnpm install
pnpm dev
```

### Site URL

The Astro `site` option (which drives the RSS feed, sitemap, canonical URLs and
Open Graph tags) defaults to the GitHub project URL
`https://RTSAjwad.github.io`, and `base` is set to `/jlab_website`. During local
development, the flake dev shell exports `SITE_URL=http://localhost:4321` so
generated links point at the dev server instead.

To override it (e.g. for a preview deploy), set `SITE_URL` before running the
dev/preview command:

```sh
SITE_URL=https://staging.example.com pnpm dev
```

## Deployment

The site deploys to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`). Pushing to `main` triggers a build and deploy.
In the repository settings, set **Pages → Source → GitHub Actions**.

The site is served at `https://RTSAjwad.github.io/jlab_website/`.

### Switching to a custom domain

The `/jlab_website/` path segment comes from GitHub Pages hosting the repo as a
**project site** (`https://<username>.github.io/<repo>/`). To serve the site at a
custom domain (e.g. the original `japanese-like-a-breeze.com`), that segment must
be removed. Steps:

1. **Configure DNS** at your domain provider: add a `CNAME` record pointing
   `<your-domain>` to `RTSAjwad.github.io` (or an A/AAAA record to GitHub's
   Pages IPs).
2. **Add a `public/CNAME` file** containing the bare domain
   (e.g. `japanese-like-a-breeze.com`).
3. **Update `astro.config.mjs`:**
   - remove `base` (or set it to `/`)
   - set `site` to `https://<your-domain>`
4. **Remove the manual `/jlab_website/` prefixes** from hero action links
   (`src/content/docs/index.mdx`) and in-content Markdown links (see
   `MIGRATION.md` for the full list). Sidebar links are auto-prefixed and need
   no change.
5. In **GitHub → Settings → Pages → Custom domain**, enter the domain and
   enable **Enforce HTTPS**.
6. Push; the workflow redeploys to the custom domain.

See the Astro guide's
["Change your GitHub URL to a custom domain"](https://docs.astro.build/en/guides/deploy/github/#change-your-github-url-to-a-custom-domain)
section for the canonical steps.

## Project structure

```
.
├── public/
│   └── assets/          # rehosted images, audio, and GIFs
├── src/
│   ├── assets/          # processed assets (e.g. the logo)
│   ├── components/      # Astro components (contact/newsletter forms)
│   ├── content/
│   │   └── docs/        # Markdown/MDX pages (guides, decks, addon, reference, blog)
│   ├── styles/          # custom CSS
│   └── content.config.ts
├── astro.config.mjs
├── flake.nix            # Nix dev shell
├── package.json
└── tsconfig.json
```

## Commands

| Command             | Action                                     |
| :------------------ | :----------------------------------------- |
| `pnpm install`      | Install dependencies                       |
| `pnpm dev`          | Start dev server at `localhost:4321`       |
| `pnpm build`        | Build production site to `./dist/`         |
| `pnpm preview`      | Preview the production build               |
| `pnpm astro ...`    | Run Astro CLI commands                     |
