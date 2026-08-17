---
title: ScrollReveal 页面高度变化触发不稳定修复方案
date: 2026-08-17
status: 已实施
---

# ScrollReveal 页面高度变化触发不稳定修复（最小补丁）

## 1. 问题与目标

- **要解决的问题**：ScrollReveal 在 `reveal()` 时按元素当时的文档坐标缓存可见性判断依据。页面初始化后若**高度发生变化**（图片懒加载、折叠面板展开/收起、tabs 切换、评论异步加载、字体加载等），未 reveal 元素的实际位置与缓存坐标产生偏差，导致元素在错误滚动位置触发或一直不显示。上游 issue [jlmakes/scrollreveal#569](https://github.com/jlmakes/scrollreveal/issues/569) 即为该问题，官方 `sync()` 本身有 bug，社区验证 `delegate()` 有效。主题当前代码从不调用 `sync()`/`delegate()`，存在同样隐患。
- **成功标准（可验收的行为）**：
  - 页面高度变化（图片加载、折叠展开、tabs 切换、评论异步加载）后，下方未 reveal 元素在正确位置触发入场动画；
  - 既有行为零回归：普通滚动 reveal、吸顶/固定容器分组 reveal（2026-08-09 修复）、3 秒 `sr-fallback` 兜底；
  - 无重算死循环：不因自身 reveal 写入的 style/class 触发连锁重算。

## 2. 技术方案

- **实现思路**：在 `layout/_plugins/scrollreveal.ejs` 初始化成功后，追加防抖（300ms）的 `resync` 函数，优先调用 `sr.delegate()`（issue #569 社区验证），`typeof` 防御缺失时降级 `sr.sync()`，异常静默忽略。在四类「页面高度变化」场景触发：
  1. 图片加载：`document.addEventListener('load', fn, true)`（load 不冒泡需 capture），过滤 `IMG`；
  2. 页面资源全部加载：`window.addEventListener('load', scheduleResync)`（补字体/图片收尾）；
  3. DOM 结构变化：`MutationObserver` 观察 `document.body` 的 `childList` 与 `attributes`（仅 `open`，覆盖 `<details>` 折叠）；**不观察 style/class**，避免被自身 reveal 写入触发循环；
  4. 主题 tabs 切换：监听 `tabs:click` 事件（[main.js](file:///d:/rt265.github.io/themes/stellar/source/js/main.js) 在激活 tab 面板上派发，`bubbles: true`；tabs 切换仅切换 display/class，不产生 DOM 增删）。
- **涉及文件/模块**：
  - `layout/_plugins/scrollreveal.ejs`（唯一代码改动，追加约 60 行）；
  - `docs/designs/2026-08-17-scrollreveal-height-resync/`（本目录）；
  - `docs/knowledge/07-外部集成/plugin-system.md`、`docs/knowledge/05-前端交互/client-side-overview.md`、`docs/knowledge/VERIFICATION.md`（文档同步）。

## 3. 影响范围

- **对外行为**：页面高度变化后自动重算触发位置，为修复性行为变化，默认生效，不引入配置开关；既有 `.slide-up` 类、配置项、CDN 加载方式不变。
- **配置项**：无变更（保留 `plugins.scrollreveal.js` 等全部键）。
- **兼容性**：`MutationObserver` 为现代浏览器 API（IE11 起可用）；`delegate` 缺失时自动降级 `sync`，极端情况下保持原行为。
- **需要同步的知识库页面与文档**：`07-外部集成/plugin-system.md`、`05-前端交互/client-side-overview.md`、`docs/knowledge/VERIFICATION.md`。

## 4. 验证方式

- 主题仓库 `npm run check`（lint + 单测 + 依赖声明 + 知识库硬事实核查 + 发版文档检查）；
- 主工程 `npm run g` 全量构建通过（`hexo clean && hexo generate && npx gulp minify`）；
- 浏览器手动验证：首页滚动入场回归；含 `{% tabs %}` / 折叠 `<details>` / 懒加载图片的页面，高度变化后下方元素正常触发；带锚点打开时吸顶侧栏立即显示（2026-08-09 修复不回归）；3 秒 `sr-fallback` 兜底仍生效；控制台无报错、无重算循环。
