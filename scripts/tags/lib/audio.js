/**
 * audio.js v1.2 | https://github.com/rt265/hexo-theme-stellar
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% audio src [native] [title] [artist] [cover] [color] %}
 *
 * native: 是否使用浏览器原生播放器，默认 false（使用 WaveformPlayer，需在文章 front-matter 中设置 waveformplayer: true 或全局开启 plugins.waveformplayer.enable 才会加载 CDN 资源）
 * color:  进度条颜色，支持 theme 色板中的颜色值，默认读取 tag_plugins.audio.waveformplayer.progress_color
 * title:  音频标题
 * artist: 艺术家
 * cover:  封面图
 *
 * Full example: {% audio /audio/AAA.mp3 title:AAA artist:AAA cover:/img/AAA.webp color:accent %}
 *
 */

'use strict';

module.exports = ctx => function (args) {
  args = ctx.args.map(args, ['native', 'title', 'artist', 'cover', 'color', 'type'], ['src'])
  const wpConfig = (ctx.theme.config.tag_plugins && ctx.theme.config.tag_plugins.audio && ctx.theme.config.tag_plugins.audio.waveformplayer) || {}

  if (args.native === 'true') {
    return `
      <div class="tag-plugin audio">
        <audio controls preload>
        <source src="${args.src}" type="${args.type || 'audio/mp3'}">Your browser does not support the audio tag.
        </audio>
      </div>
      `
  }
  return `
    <div class="tag-plugin audio ds-audio data-service"
      data-waveform-player
      data-url="${args.src}"
      data-title="${args.title || 'null'}"
      data-artist="${args.artist || 'null'}"
      data-artwork="${args.cover || 'null'}"
      data-height="${wpConfig.height || 50}"
      data-progress-color="${wpConfig.progress_color || '#05a5ad'}"
      data-waveform-style="${wpConfig.waveform_style || 'seekbar'}"
      data-seek-handle="${wpConfig.seek_handle !== undefined ? wpConfig.seek_handle : 'true'}">
    </div>
    `
}
