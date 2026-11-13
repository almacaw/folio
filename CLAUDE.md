# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and journal for Alexander Stevens (alstevens.co.uk), built with Eleventy 1.x (Liquid templates + Markdown) and Tailwind CSS 3. It started from the `kohrongying/11ty-blog-starter` template, so the README and some leftovers (`author.liquid`, `paginator.liquid`, the `create` script) describe starter behaviour rather than this site. The aim is a site that works without JavaScript: no bundler, JS only for dark mode and analytics.

## Commands

Node 16 (`.node-version`).

- `npm start`: Eleventy dev server on localhost:8080 plus Tailwind in watch mode
- `npm run build`: builds into `_site/`
- `npm run debug`: same as start, with `DEBUG=Eleventy*`
- `npm run lint` / `npm run lint:fix`: ESLint (there are no tests; `npm test` just fails)

Eleventy and Tailwind run as two separate processes joined with `&`. Tailwind compiles the root `tailwind.css` straight into `_site/assets/styles/tailwind.css`; it is not part of the Eleventy pipeline. If styles are missing, check that the Tailwind process ran.

## Architecture

- **Config** lives in `.eleventy.js`; the input dir is `src`, output is `_site`. `src/assets` and `src/manifest.json` are passthrough-copied.
- **Two content collections**, each set up by a directory data file:
  - `src/case-studies/*.md` → `case-studies.json` sets `layout: cs.liquid` and tag `case-studies`. Listed on the homepage (`src/index.html`, layout `home.liquid`).
  - `src/posts/*.md` → `posts.json` sets `layout: post.liquid` and tag `posts`. Listed on `/journal/` (`src/journal/index.html`).
- **Drafts**: listings only show items with `published: true`. The directory JSON defaults this to `true`, so set `published: false` in front matter to hide something (e.g. `demo.md`, `Kotlin.md`). Hidden items are still built and reachable by URL.
- **Excerpts**: the text before `<!-- excerpt -->` becomes `post_excerpt`, which is shown on the homepage case-study cards.
- **Layout chain**: `base.liquid` (head, dark-mode script, GA tag) → `main.liquid` (header, container, footer) → `home` / `default` / `post` / `cs`. `nav.liquid` is included by the leaf layouts.
- **Site data**: `src/_data/site.json` (name, URL, description) is used by the sitemap and templates.
- **Styling**: Tailwind utilities in the templates, plus custom rules in the root `tailwind.css` (prose overrides, figure shadows, dark-mode toggle icons). `src/assets/styles/index.css` is a small hand-written stylesheet that is passthrough-copied and not processed by Tailwind. Dark mode is class-based (`darkMode: 'class'`). Tailwind's `content` globs cover `src/**/*.md`, `*.html` and `_includes/**/*.liquid`, so classes used anywhere else won't be generated.

## Shortcodes and filters (`.eleventy.js`)

- `{% image src, alt, caption, class %}`: async responsive image via `@11ty/eleventy-img`. `src` is a repo-relative path such as `"./src/assets/postimages/..."`. It outputs 320/640/960 widths to `_site/img` and throws if `alt` is undefined. Add the class `no-shadow` to drop the default figure shadow. Case-study `cover`, `cover-alt`, `cover-caption` and `cover-class` front matter are passed into it by `cs.liquid` and the homepage.
- `{% asset_img 'file', 'alt', 'caption' %}`: plain `<img>` from `/assets/img/posts/`.
- `{% figma-proto url, width, height %}`, `{% loom url %}`, `{% mp4 url %}`: embeds. YouTube and Vimeo URLs on their own line are auto-embedded by plugins.
- The `readTime` filter estimates minutes at 450 chars/min. The `tagList` collection gathers every tag except `posts` and `all`.
- Markdown is markdown-it with `html: true` and anchor links on h1/h2.
