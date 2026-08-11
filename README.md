# Stellar - 每个人的独立博客

Stellar 是一个极为强大的综合型 Hexo 主题，包含博客系统、知识库系统、专栏系统、笔记系统，内置海量的标签和动态数据组件。

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

## Upstream Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=xaoxuu/hexo-theme-stellar&type=date&legend=top-left)](https://star-history.dera.page/#xaoxuu/hexo-theme-stellar&type=date&legend=top-left)

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
