# Stellar - 每个人的独立博客

[简体中文](README.md) · [English](README_EN.md)

Stellar 是一个功能强大的综合型 Hexo 主题，内置博客、知识库、专栏、笔记四大系统，并提供丰富的标签组件与动态数据组件，开箱即用。

可以只把它当作一个轻博客主题使用——安装启用即可写文章；Wiki 知识库、专栏、笔记与动态数据组件都按需启用，随着你的内容需求自然生长。

此 fork 仅为自用！请前往上游项目获取更好的支持。

和上游相比：

- 调整了文章轮播布局（~~我觉得上游的不好看，至于语义性，这难道不是单纯的称呼问题吗？~~）
- 清理了部分现代浏览器不再需要的特性（作者在 Firefox Beta latest / Thorium latest 上开发和测试）
- Audio 标签移除对网易云音乐的支持，使用颜值更高的 WaveformPlayer
- 适配 v5 版本的 `algoliasearch`（但我更建议使用 local_search）
- 其他外部包的缺省版本也同步升级
- ~~石山 Commit 记录、V属性大爆发和胶水代码~~

与上游的全部改动参见此 [Full Changelog](https://github.com/xaoxuu/hexo-theme-stellar/compare/main...rt265:hexo-theme-stellar:main)

> 这就是 fork 的意义。现在的上游已经引入一些我并不喜欢的特性，在一些地方限制了我的自由度，部分新增设计欠缺打磨，以及某种对于“自研”的追求。不论是在 Vibe Coding 驱动下的高强度发版，还是在 Issue todo 和个人博文中流露出的焦虑，都说明过去照单全收的模式已经不再适用了。
> fork 了，我就可以自行修改代码，根据自己的需求进行调整。

## 为什么选择 Stellar

### 四大内容系统，一体化整合

- **博客系统**：支持技术 / 生活两种文章布局，分类、标签、分页与相关文章一应俱全；只想写博客时，它就是一个开箱即用的轻博客。
- **Wiki 文档系统**：既可以展示多个项目文档，也可以作为个人知识库，项目树、小节与层级导航开箱即用。
- **专栏系统**：系列文章集中管理，提供沉浸式的连续阅读体验。
- **笔记本系统**：三层架构与标签树导航，方便地梳理、归档和检索笔记。

四套系统与动态数据组件一体化整合，无需拼装多个插件。

### 富表达标签组件

内置大量灵活而强大的标签组件——提示框、折叠、标签页、时间线、图库、图标、表情、高亮、OKR、聊天、表格等，互相之间可以自由混搭嵌套，让内容表达不再受 Markdown 语法限制。详见[标签组件文档](https://xaoxuu.com/wiki/stellar/tag-plugins/)。

### 动态数据组件

静态博客也能拥有动态能力，内容更新无需重新部署：

- **动态时间线**：像发朋友圈一样发布短文，也可以订阅他人的时间线。
- **自动化友链**：自动检测友链状态、打标签、订阅友链文章。
- **远程 Markdown 渲染**：例如直接渲染项目仓库的 README，避免重复维护。
- **GitHub 仓库 / 贡献者卡片、评分、投票、最新评论**等数据组件，按需加载，不拖慢首屏。
- **社区文化**：可以订阅「探索号」时间线数据源，获取社区用户的宝贵经验分享。

### 体验与性能

- **模块化设计**：内置多种高复用性小组件，左右侧边栏自由搭配，布局随心。
- **设计令牌驱动的样式系统**：统一的设计语言、深色模式与移动端响应式适配。
- **图片懒加载**按原图比例预留占位，不会出现高度跳变，体验更佳。
- 可选插件按需启用：代码高亮与复制、KaTeX / MathJax 数学渲染、Mermaid 图表、Fancybox 灯箱、Swiper 轮播等。
- **本地搜索**：内置索引生成器，结果按章节展示，点击直达锚点并高亮关键词。
- **SEO 完备**：JSON-LD 结构化数据、Open Graph、canonical 与克隆站检测，保护原创内容。
- **一站多作者**：可以为不同文章指定不同作者，每位作者都有专属主页。

以上功能都可以在[文档](https://xaoxuu.com/wiki/stellar/)中找到详细的使用方法。

## Upstream Statistics

[![npm](https://img.shields.io/npm/v/hexo-theme-stellar)](https://www.npmjs.com/package/hexo-theme-stellar)
[![license](https://img.shields.io/github/license/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar)
[![npm downloads](https://img.shields.io/npm/dm/hexo-theme-stellar)](https://www.npmjs.com/package/hexo-theme-stellar)
[![release](https://img.shields.io/github/v/release/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar/releases)

[![Star History Chart](https://star-history.dera.page/svg?repos=xaoxuu/hexo-theme-stellar&type=date&legend=top-left)](https://star-history.dera.page/#xaoxuu/hexo-theme-stellar&type=date&legend=top-left)

## 示例与展示

此 fork 的展示：[Watermelonabc](https://watermelonabc.top/)

- 上游示例源码：[hexo-theme-stellar-examples](https://github.com/xaoxuu/hexo-theme-stellar-examples/)（`blog` 博客场景、`docs` 文档场景）
- 上游展示墙：[使用 Stellar 主题的博客](https://xaoxuu.com/wiki/stellar/examples/)（30 个站点）

## 快速开始

### 环境要求

```yaml
Hexo: latest
hexo-cli: latest
node: >= 22 # 建议选择 LTS 版本
npm: >= 10
```

### 安装

首先，根据 [Hexo 文档](https://hexo.io/zh-cn/docs/) 的指导新建站点

在博客根目录执行：

```bash
# 此 fork 没有在 npm 上发版，你需要从源码拉取。
git submodule add https://github.com/xaoxuu/hexo-theme-stellar.git themes/stellar
```

对于已经添加 submodule 的仓库，新 clone 时需要在博客根目录下执行：

```bash
git submodule init
git submodule update
```

### 配置

编辑博客根目录下的 `_config.yml`，启用主题：

```yaml
theme: stellar
```

从主题文件夹复制一份 `_config.yml` 到根目录并重命名为 `_config.stellar.yml`：

```bash
cp ./themes/stellar/_config.yml ./_config.stellar.yml
```

修改 `_config.stellar.yml` 的配置内容。

### 从轻博客开始

配置完成后即可发布文章。Wiki、专栏、笔记本与动态数据组件按需启用，文档中均有详细说明；也可以直接参考示例仓库的 `blog` 场景快速搭建。

## 使用文档

See docs: https://xaoxuu.com/wiki/stellar/

> AI docs： https://deepwiki.com/xaoxuu/hexo-theme-stellar/

由于近期上游变更较快，且此 fork 的部分功能未同步上游，因此文档可能过时/不完整。请以源代码为准。

## 反馈

Issues: https://github.com/rt265/hexo-theme-stellar/issues

请不要直接向上游报告问题，因为可能是此 fork 独有的 bug。有必要我会向上游报告。

贡献指南：[CONTRIBUTING.md](CONTRIBUTING.md)

上游 [Wiki 贡献页](https://xaoxuu.com/wiki/stellar/contributors/)

## 开源许可

本项目采用 [MIT License](LICENSE)，永久开源、完全免费。
