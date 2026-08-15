# Stellar - 每个人的独立博客

Stellar 是一个功能强大的综合型 Hexo 主题，内置博客、知识库、专栏、笔记四大系统，并提供丰富的标签组件与动态数据组件，开箱即用。

和上游相比：

- 调整了文章轮播布局（~~我觉得不好看~~）
- 清理了部分现代浏览器不再需要的特性（作者在 Firefox Beta latest / Thorium latest 上开发和测试）
- Audio 标签移除 Aplayer 和网易云音乐的支持，使用颜值更高的 WaveformPlayer
- 适配 v5 版本的 `algoliasearch`（但我更建议使用 local_search）
- 其他外部包的缺省版本也同步升级
- ~~石山 Commit 记录、V属性大爆发和胶水代码~~

与上游的全部改动参见此 [Full Changelog](https://github.com/xaoxuu/hexo-theme-stellar/compare/main...rt265:hexo-theme-stellar:main)

## 亮点

- 支持技术 / 生活两种文章布局风格，为不同类型的文章呈现不同的阅读体验。
- 内置 Wiki 系统，既可以展示多个项目文档，也可以作为个人知识库。
- 内置专栏系统，支持沉浸式阅读专栏系列文章。
- 内置笔记系统，方便地梳理和归档笔记。
- 内置大量灵活而强大的标签组件，互相之间可以自由混搭嵌套。
- 内置多种动态数据组件，让静态博客的内容更新不再依赖重新部署：
  - 动态时间线：像发朋友圈一样发布短文，也可以订阅他人的时间线。
  - 自动化友链：自动检测友链状态、打标签、订阅友链文章。
  - 远程 Markdown 渲染：例如直接渲染项目仓库的 README，避免重复维护。
- 模块化设计，内置多种高复用性的小组件，可以自由搭配布局。
- 图片懒加载时按原图比例预留占位，不会出现高度跳变，体验更佳。
- 支持一站多作者，可以为不同文章指定不同作者，每位作者都有专属主页。
- 社区文化：可以订阅「探索号」时间线数据源，获取社区用户的宝贵经验分享。

以上功能都可以在 [文档](https://xaoxuu.com/wiki/stellar/) 中找到详细的使用方法。

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
- 其他使用上游主题的站点：[杜老师说](https://dusays.com)、[妄司逸](https://blog.flechazo.icu/)

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

## Usage

See docs: https://xaoxuu.com/wiki/stellar/

> AI docs： https://deepwiki.com/xaoxuu/hexo-theme-stellar/

由于近期上游变更较快，且此 fork 的部分功能未同步上游，因此文档可能过时/不完整。请以源代码为准。

## Feedback

Issues: https://github.com/rt265/hexo-theme-stellar/issues

请不要直接向上游报告问题，因为可能是此 fork 独有的 bug。有必要我会向上游报告。

贡献指南：[CONTRIBUTING.md](CONTRIBUTING.md)

上游 [Wiki 贡献页](https://xaoxuu.com/wiki/stellar/contributors/)
