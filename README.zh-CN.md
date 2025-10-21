<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/154486817-f86b8f20-5463-4122-b6e9-930622e757f2.png' alt='Vitesse Worker - 面向 Cloudflare Workers 的 Vite 起始模板' width='600'/>
</p>

<p align='center'>
在边缘节点构建全栈 Web 应用 <b>Vitesse Worker</b><br>
</p>

<br>

<p align='center'>
<a href="README.md">English</a> | <b>简体中文</b>
</p>

<br>

> 基于 [@antfu](https://github.com/antfu) 的 [Vitesse](https://github.com/antfu/vitesse) 开发的 Vue + Vite Cloudflare SSR 模板

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

- 🌐 **Cloudflare Workers 边缘 SSR** - 在全球边缘节点进行服务端渲染，超低延迟

- 🚀 **亚秒级冷启动** - Worker 闪电般的初始化速度

- 🔧 **Vite 全栈开发** - 客户端和服务端的统一开发体验

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [通过 Pinia 的状态管理](https://pinia.vuejs.org/)

- 📑 [布局系统](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [使用纯 CSS 的图标解决方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [国际化多语言 i18n 开箱即用](./locales)

- 🗒 [Markdown 支持](https://github.com/unplugin/unplugin-vue-markdown)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦾 当然，TypeScript

- ⚙️ 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - 基于文件系统的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.vuejs.org) - 符合直觉的 Vue.js 状态管理库
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Vue Composition API 和其他 API 而无需导入
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - 探索并扩展更多的宏和语法糖到 Vue 中
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA 渐进式 Web 应用
- [`unplugin-vue-markdown`](https://github.com/unplugin/unplugin-vue-markdown) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [`@shikijs/markdown-it`](https://github.com/shikijs/shiki) - [Shiki](https://github.com/shikijs/shiki) 用于语法高亮
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Vue I18n 的 Vite 插件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`@unhead/vue v2`](https://github.com/unjs/unhead) - 响应式地操作文档头信息
- [`vite-plugin-vue-devtools`](https://github.com/vuejs/devtools-next) - 旨在增强 Vue 开发者体验
- [`@cloudflare/vite-plugin`](https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin) - Vite 的 Cloudflare Workers 集成
- [`@hiogawa/vite-plugin-fullstack`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/fullstack) - 由 [@hi-ogawa](https://github.com/hi-ogawa) 开发的以支持 [SSR 的客户端资产元数据 API 提案](https://github.com/vitejs/vite/discussions/20913)的 Vite 插件，顺带说一下这个提案真的很酷。

### 编码风格

- 使用 Composition API 和 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号，无分号

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快，节省磁盘空间的包管理器
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - Cloudflare Workers 命令行工具
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 i18n 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 现在可以试试！

> Vitesse Worker 需要 Node 版本 >=18

### GitHub 模板

[从这个模板在 GitHub 上创建仓库](https://github.com/antfu-collective/vitesse-worker/generate)

### 克隆到本地

如果你更喜欢使用更干净的 git 历史记录手动执行

```bash
npx degit antfu-collective/vitesse-worker my-vitesse-worker-app
cd my-vitesse-worker-app
pnpm i # 如果你没有安装 pnpm，可以先运行：npm install -g pnpm
```

## 清单

当你使用这个模板时，请尝试按照清单正确更新你的信息

- [ ] 在 `LICENSE` 中修改作者名
- [ ] 在 `App.vue` 中修改标题
- [ ] 在 `public` 目录下修改 favicon
- [ ] 在 `wrangler.jsonc` 中更新项目名称
- [ ] 设置 Cloudflare 账号和 Workers
- [ ] 整理 README 并删除路由

然后，尽情享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
pnpm dev
```

开发服务器会在本地模拟 Cloudflare Workers 环境。

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到生成的文件：

- `dist/worker/` - Worker 入口点和服务端代码
- `dist/client/` - 客户端资源（HTML、CSS、JS）

### 预览

在本地预览生产构建产物：

```bash
pnpm preview
```

### 部署到 Cloudflare Workers

<a href="https://deploy.workers.cloudflare.com/?url=https://github.com/enpitsuLin/vitesse-worker"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare"/></a>

#### 准备工作

1. **注册 Cloudflare 账号**
   - 在 [Cloudflare Dashboard](https://dash.cloudflare.com/sign-up) 创建免费账号
2. **安装 Wrangler**（已包含在 devDependencies 中）
   ```bash
   npx wrangler login
   ```

#### 配置

在 `wrangler.jsonc` 中更新你的项目设置：

```jsonc
{
  "name": "my-vitesse-worker-app", // 修改为你的项目名称
  "main": "server.ts",
  "compatibility_date": "2025-10-01"
}
```

#### 部署

```bash
# 构建并部署到 Cloudflare Workers
pnpm build
npx wrangler deploy
```

你的应用将部署到 `https://my-vitesse-worker-app.your-subdomain.workers.dev`

#### 自定义域名（可选）

1. 访问 [Cloudflare Workers 控制台](https://dash.cloudflare.com/)
2. 选择你的 Worker
3. 前往 **Settings** > **Triggers** > **Custom Domains**
4. 添加你的自定义域名
5. SSL 证书会自动配置
