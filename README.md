<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/154486817-f86b8f20-5463-4122-b6e9-930622e757f2.png' alt='Vitesse Worker - Opinionated Vite Starter Template for Cloudflare Workers' width='600'/>
</p>

<p align='center'>
Building full-stack web apps with <b>Vitesse Worker</b> on the edge<br>
</p>

<br>

<p align='center'>
<b>English</b> | <a href="README.zh-CN.md">简体中文</a>
</p>

<br>

> Vue + Vite Cloudflare SSR template based on [@antfu](https://github.com/antfu)'s [Vitesse](https://github.com/antfu/vitesse)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🌐 **Edge SSR on Cloudflare Workers** - Server-side rendering at the edge for ultra-low latency

- 🚀 **Sub-10ms cold start** - Lightning-fast Worker initialization

- 🔧 **Full-stack development with Vite** - Unified development experience for client and server

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)

- 🗒 [Markdown Support](https://github.com/unplugin/unplugin-vue-markdown)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦾 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`unplugin-vue-markdown`](https://github.com/unplugin/unplugin-vue-markdown) - Markdown as components / components in Markdown
  - [`@shikijs/markdown-it`](https://github.com/shikijs/shiki) - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@unhead/vue v2`](https://github.com/unjs/unhead) - manipulate document head reactively
- [`vite-plugin-vue-devtools`](https://github.com/vuejs/devtools-next) - Designed to enhance the Vue developer experience
- [`@cloudflare/vite-plugin`](https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin) - Cloudflare Workers integration for Vite
- [`@hiogawa/vite-plugin-fullstack`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/vite-plugin-fullstack) - Full-stack development support with Vite

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - Cloudflare Workers CLI
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now!

> Vitesse Worker requires Node >=18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu-collective/vitesse-worker/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu-collective/vitesse-worker my-vitesse-worker-app
cd my-vitesse-worker-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Update project name in `wrangler.jsonc`
- [ ] Setup Cloudflare account and Workers
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

The dev server will simulate the Cloudflare Workers environment locally.

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated files:

- `dist/worker/` - Worker entry point and server-side code
- `dist/client/` - Client-side assets (HTML, CSS, JS)

### Preview

To preview the production build locally:

```bash
pnpm preview
```

### Deploy to Cloudflare Workers

<a href="https://deploy.workers.cloudflare.com/?url=https://github.com/enpitsuLin/vitesse-worker"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare"/></a>

#### Prerequisites

1. **Sign up for Cloudflare**
   - Create a free account at [Cloudflare Dashboard](https://dash.cloudflare.com/sign-up)
2. **Install Wrangler** (already included in devDependencies)
   ```bash
   npx wrangler login
   ```

#### Configuration

Update `wrangler.jsonc` with your project settings:

```jsonc
{
  "name": "my-vitesse-worker-app", // Change this to your project name
  "main": "server.ts",
  "compatibility_date": "2025-10-01"
}
```

#### Deploy

```bash
# Build and deploy to Cloudflare Workers
pnpm build
npx wrangler deploy
```

Your app will be live at `https://my-vitesse-worker-app.your-subdomain.workers.dev`

#### Custom Domain (Optional)

1. Go to your [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)
2. Select your Worker
3. Go to **Settings** > **Triggers** > **Custom Domains**
4. Add your custom domain
5. SSL certificates are automatically provisioned
