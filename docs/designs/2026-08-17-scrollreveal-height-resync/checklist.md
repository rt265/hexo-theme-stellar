---
title: ScrollReveal 页面高度变化触发不稳定修复检查清单
date: 2026-08-17
---

# 检查清单 / 验证记录

## 验证

- [x] `npm run lint` 通过
- [x] `npm test` 通过（128/128；无新增纯函数，仅浏览器端 EJS 内联逻辑）
- [x] 主工程 `npm run build`（hexo generate）全量构建通过：滚动 reveal 关闭态 253 文件、临时开启验证态 162 文件、恢复后 162 文件；开启态产物中插件 resync 代码渲染完整正确（配置值 distance/duration/interval/scale 均正确注入）
- [ ] 页面类型覆盖（浏览器手动，**本站点 scrollreveal.enable: false 未执行**；渲染产物已静态验证，需在启用 scrollreveal 的站点回归）：
  - [ ] 首页：卡片滚动入场动画与修复前一致，无回归
  - [ ] 含 `{% tabs %}` 的文章页：切换标签后，下方未 reveal 元素（页脚、相关文章等）在正确位置触发
  - [ ] 含折叠 `<details>` 的文章页：展开后下方元素正常触发
  - [ ] 图片懒加载页面：图片加载撑高页面后，下方元素正常触发
  - [ ] 带锚点打开页面：TOC/侧栏吸顶组件立即显示并播放入场动画（2026-08-09 修复不回归）
  - [ ] 3 秒 `sr-fallback` 兜底仍生效（模拟 ScrollReveal 加载失败）
  - [ ] 控制台无报错、无 delegate 无限循环
- [x] `python3 docs/knowledge/tools/verify.py` 知识库硬事实核查：**行号异常 0**；唯一阻断项为**既有** installation.md 版本不一致（1.42.0 vs 主题 1.42.1，最近提交「更新安装文档版本号至 1.42.0」后未随 1.42.1 更新，与本改动无关）；本改动未新增任何未解析文件/配置键异常

## 文档同步

- [x] `docs/designs/2026-08-17-scrollreveal-height-resync/` 已创建（spec.md / plan.md / checklist.md）
- [x] `docs/knowledge/07-外部集成/plugin-system.md` 已更新（ScrollReveal 节补充页面高度变化自动重算 + issue #569）
- [x] `docs/knowledge/05-前端交互/client-side-overview.md` 已更新（看门狗 bullet 追加 delegate 重算）
- [x] `docs/knowledge/VERIFICATION.md` 已登记偏差修正（2026-08-17 新行）
- [x] `languages/` 文案（不涉及，跳过）
