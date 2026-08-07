/**
 * audio.js v1.1 | https://github.com/rt265/hexo-theme-stellar
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% audio src [waveformplayer] [title] [artist] [cover] %}
 * 
 * 现在不支持网易云音乐。要启用 waveformplayer 播放器，请在 front-matter 中添加 waveformplayer，值为 true
 * 
 * Full example: {% audio /audio/AAA.mp3 waveformplayer:true title:AAA artist:AAA cover:/img/AAA.webp %}
 *
 */

'use strict';

module.exports = ctx => function (args) {
  args = ctx.args.map(args, ['waveformplayer', 'title', 'artist', 'cover'], ['src'])
  if (args.waveformplayer === 'true') {
    return `
    <div
      data-waveform-player
      data-url="${args.src}"
      data-title="${args.title || 'null'}"
      data-artist="${args.artist || 'null'}"
      data-artwork="${args.cover || 'null'}"
      data-height="50"
      data-progress-color="#05a5ad"
      data-waveform-style="seekbar"
      data-seek-handle="true">
    </div>
    `
  }
  return `
  <div class="tag-plugin audio">
  <audio controls preload>
  <source src="${args.src}" type="${args.type || 'audio/mp3'}">Your browser does not support the audio tag.
  </audio>
  </div>
  `
}
