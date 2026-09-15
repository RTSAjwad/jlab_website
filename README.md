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
Open Graph tags) defaults to the production domain
`https://www.japanese-like-a-breeze.com`. During local development, the flake
dev shell exports `SITE_URL=http://localhost:4321` so generated links point at
the dev server instead.

To override it (e.g. for a preview deploy), set `SITE_URL` before running the
dev/preview command:

```sh
SITE_URL=https://staging.example.com pnpm dev
```

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
