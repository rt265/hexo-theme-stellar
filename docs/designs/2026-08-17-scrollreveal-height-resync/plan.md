---
title: ScrollReveal 页面高度变化触发不稳定修复执行计划
date: 2026-08-17
---

# 执行计划

## 实施步骤

1. [x] `layout/_plugins/scrollreveal.ejs`：在 `sr.reveal(...)` 之后、`clearTimeout(watchdog)` 之前追加防抖 300ms 的 `resync`（`delegate()` 优先、`sync()` 降级）+ 四类触发源（IMG load capture、window load、MutationObserver childList/open、`tabs:click`）。
2. [x] 设计文档：`docs/designs/2026-08-17-scrollreveal-height-resync/`（spec.md / plan.md / checklist.md）。
3. [x] 知识库同步：`07-外部集成/plugin-system.md`（ScrollReveal 节补充重算说明 + issue #569）、`05-前端交互/client-side-overview.md`（看门狗 bullet 追加一句）、`VERIFICATION.md`（新增 2026-08-17 登记行）。
4. [x] 验证：主题 lint + 单测（128/128）通过；主工程 `hexo generate` 全量构建通过（含临时开启 scrollreveal 验证渲染产物）；verify.py 唯一阻断项为既有 installation.md 版本不一致（1.42.0，与本改动无关）；浏览器手动回归因本站点 scrollreveal 关闭未执行，待启用站点回归（记录于 checklist.md）。

## 风险与回退

- **重算循环**：MutationObserver 仅观察 childList 与 `open` 属性，不观察 style/class，自身 reveal 写入不会触发；若极端场景仍出现高频重算，可移除 MutationObserver 触发源回退（仅保留事件触发）。
- **`delegate()` 不可用**：`typeof` 防御已降级 `sync()`；`sync()` 自身有上游 bug，但仅在极端场景触发，且异常已静默忽略，不阻断页面。
- **ScrollReveal CDN 不可用**：保持现状，3 秒 `sr-fallback` 看门狗兜底。
- **后续方向**：用户确认本次先最小修补，自研 IntersectionObserver 实现另行探索（保留 `.slide-up` 类与配置语义，迁移成本低）。
