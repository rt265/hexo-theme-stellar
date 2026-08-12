# Stellar - 每个人的独立博客

[![npm](https://img.shields.io/npm/v/hexo-theme-stellar)](https://www.npmjs.com/package/hexo-theme-stellar)
[![license](https://img.shields.io/github/license/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar)
[![npm downloads](https://img.shields.io/npm/dm/hexo-theme-stellar)](https://www.npmjs.com/package/hexo-theme-stellar)
[![release](https://img.shields.io/github/v/release/xaoxuu/hexo-theme-stellar)](https://github.com/xaoxuu/hexo-theme-stellar/releases)

Stellar 是一个功能强大的综合型 Hexo 主题，内置博客、知识库、专栏、笔记四大系统，并提供丰富的标签组件与动态数据组件，开箱即用。

和上游相比：

- 改进了无障碍，努力贴近 WCGA AA 等级要求
- 清理了部分现代浏览器不再需要的特性（作者在 Firefox Beta latest / Thorium latest 上开发和测试）
- Audio 标签移除 Aplayer 和网易云音乐的支持，使用颜值更高的 WaveformPlayer
- 添加 `hexo-word-counter` 实现文章字数和阅读用时统计
- 适配 v5 版本的 `algoliasearch`
- 其他外部包的缺省版本也同步升级
- ~~石山 Commit 记录和胶水代码~~

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

## Upstream Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=xaoxuu/hexo-theme-stellar&type=date&legend=top-left)](https://star-history.dera.page/#xaoxuu/hexo-theme-stellar&type=date&legend=top-left)

## 示例与展示

- 示例源码：[hexo-theme-stellar-examples](https://github.com/xaoxuu/hexo-theme-stellar-examples/)（`blog` 博客场景、`docs` 文档场景）
- 展示墙：[使用 Stellar 主题的博客](https://xaoxuu.com/wiki/stellar/examples/)（30 个站点）

部分使用站点：[杜老师说](https://dusays.com)、[Watermelonabc](https://watermelonabc.top/)、[妄司逸](https://blog.flechazo.icu/)

## 快速开始

### 环境要求

```yaml
Hexo: 6.3.0 ~ latest（已验证至 8.1.2）
hexo-cli: 4.3.0 ~ latest
node: >= 22 # 建议选择 LTS 版本
npm: >= 10
```

### 安装

在博客根目录执行：

```bash
npm install hexo-theme-stellar
```

### 配置

编辑 `_config.yml`，启用主题：

```yaml
theme: stellar
```

Install Stellar in terminal:

```bash
# 此 fork 没有在 npm 上发版，你需要从源码拉取。
git submodule add https://github.com/xaoxuu/hexo-theme-stellar.git themes/stellar
git pull # in themes/stellar
```

## Usage

See docs: https://xaoxuu.com/wiki/stellar/

> AI docs： https://deepwiki.com/xaoxuu/hexo-theme-stellar/

由于近期上游变更较快，且此 fork 的部分功能未同步上游，因此文档可能过时/不完整。请以源代码为准。

## Example

https://watermelonabc.top/

## Feedback

Issues: https://github.com/rt265/hexo-theme-stellar/issues

请不要直接向上游报告问题，因为可能是此 fork 独有的 bug。有必要我会向上游报告。
