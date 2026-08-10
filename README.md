# Stellar - 每个人的独立博客

Stellar 是一个极为强大的综合型 Hexo 主题，包含博客系统、知识库系统、专栏系统、笔记系统，内置海量的标签和动态数据组件。

和上游相比：

- 改进了无障碍，努力贴近 WCGA AA 等级要求
- 清理了部分现代浏览器不再需要的特性（作者的主力浏览器为 Firefox Beta latest）
- Audio 标签放弃对网易云音乐的兼容（已经获取不到数据了），引入颜值更高的 WaveformPlayer
- 添加 `hexo-wordcount` 实现文章字数和阅读用时统计
- 适配 v5 版本的 `algoliasearch`
- 其他外部包的缺省版本也同步升级
- ~~石山 Commit 记录和胶水代码~~

## 亮点

- 支持技术/生活文章布局风格，为不同类型的文章使用不同的风格。
- 内置 wiki 系统，可以展示多个项目文档，或个人知识库。
- 内置专栏系统，可以沉浸式阅读专栏系列文章。
- 内置笔记系统，更方便梳理笔记。
- 内置海量的灵活而强大的标签组件，互相之间还可以混搭嵌套。
- 内置多种动态数据组件，静态博客更新不再依赖于重新部署。
  - 动态时间线（像发朋友圈一样发布短文，也可以订阅他人的时间线）
  - 自动化的动态友链（自动检测友链状态、打标签、友链文章订阅）
  - 渲染远程 markdown 文件（例如渲染项目仓库的 README 以减少重复工作）
- 模块化设计，内置多种复用性极强的小组件，自由搭配布局。
- 图片懒加载占位固定原图长宽比，不会发生高度跳变，体验更佳。
- 支持一站多作者，可以为不同文章指定不同的作者，每位作者都有专属主页。
- 社区文化：可订阅「探索号」时间线数据源获取社区用户的宝贵经验分享。

上述亮点都可以在 [文档](https://xaoxuu.com/wiki/stellar/) 中找到详细使用方法。

[![Stargazers over time](https://starchart.cc/xaoxuu/hexo-theme-stellar.svg)](https://starchart.cc/xaoxuu/hexo-theme-stellar)

## Getting Started

Check your environment:

```yaml
Hexo: latest
hexo-cli: latest
node: latest LTS # 建议选择 LTS 版本，过高的版本 hexo 还没有进行兼容。
npm: latest
```

Edit your `_config.yml`:

```yaml
theme: stellar
```

Install Stellar in terminal:

```bash
npm i hexo-theme-stellar
```

## Usage

See docs: https://xaoxuu.com/wiki/stellar/

> AI docs： https://deepwiki.com/xaoxuu/hexo-theme-stellar/

## Examples

https://xaoxuu.com/wiki/stellar/examples/

## Feedback

Issues: https://github.com/xaoxuu/hexo-theme-stellar/issues/

Discussions: https://github.com/xaoxuu/hexo-theme-stellar/discussions/
