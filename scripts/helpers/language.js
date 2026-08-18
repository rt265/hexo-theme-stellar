/* global hexo */
'use strict';

function themeConfig() {
  return (hexo.theme && hexo.theme.config && hexo.theme.config.language_switcher) || {};
}

function asList(collection) {
  if (!collection) return [];
  if (Array.isArray(collection)) return collection;
  if (Array.isArray(collection.data)) return collection.data;
  if (typeof collection.toArray === 'function') return collection.toArray();
  return [];
}

function configuredLanguages(ctx) {
  const cfg = themeConfig();
  const siteLanguages = Array.isArray(ctx.config.language)
    ? ctx.config.language
    : [ctx.config.language || 'en'];
  const items = Array.isArray(cfg.items) && cfg.items.length > 0
    ? cfg.items
    : siteLanguages.map(function(code, index) {
      return {
        code: code,
        title: code,
        url: index === 0 ? '/' : '/' + code + '/'
      };
    });

  return items.filter(function(item) {
    return item && item.code;
  }).map(function(item, index) {
    return {
      code: String(item.code),
      title: item.title || String(item.code),
      url: item.url || (index === 0 ? '/' : '/' + item.code + '/'),
      available: item.available
    };
  });
}

function normalizePath(path) {
  let value = String(path || '').split(/[?#]/)[0];
  value = value.replace(/^\/+|\/+$/g, '');
  value = value.replace(/(^|\/)index\.html?$/i, '$1');
  return value.replace(/^\/+|\/+$/g, '') || '/';
}

function pathLanguage(path, ctx) {
  const languages = configuredLanguages(ctx)
    .map(function(item) { return item.code; })
    .sort(function(a, b) { return b.length - a.length; });
  const normalized = normalizePath(path);
  const segments = normalized === '/' ? [] : normalized.split('/');
  const first = segments[0] || '';
  const code = languages.find(function(item) {
    return item.toLowerCase() === first.toLowerCase();
  });
  return {
    code: code || null,
    key: (code ? segments.slice(1) : segments).join('/') || '/',
  };
}

function pageLanguage(page, ctx) {
  const detected = pathLanguage(page && page.path, ctx);
  if (detected.code) return detected.code;
  if (page && page.lang) return String(page.lang);
  const languages = configuredLanguages(ctx);
  return languages.length > 0 ? languages[0].code : 'en';
}

function findTranslation(page, code, ctx) {
  if (!page) return null;
  const currentKey = pathLanguage(page.path, ctx).key;
  const pages = asList(hexo.locals.get('pages'));
  const posts = asList(hexo.locals.get('posts'));
  const all = pages.concat(posts);
  return all.find(function(item) {
    return item && item !== page &&
      pathLanguage(item.path, ctx).key === currentKey &&
      pageLanguage(item, ctx) === code;
  }) || null;
}

hexo.extend.helper.register('language_versions', function(page) {
  const ctx = this;
  const current = page || ctx.page;
  const languages = configuredLanguages(ctx);
  return languages.map(function(item) {
    const translation = findTranslation(current, item.code, ctx);
    return Object.assign({}, item, {
      current: pageLanguage(current, ctx) === item.code,
      page: translation,
      has_page: Boolean(translation || pageLanguage(current, ctx) === item.code),
      available: Boolean(translation || item.available || pageLanguage(current, ctx) === item.code),
      href: translation ? ctx.pretty_url(translation.path) : ctx.pretty_url(item.url)
    });
  });
});

hexo.extend.helper.register('language_switcher_enabled', function() {
  const cfg = themeConfig();
  return cfg.enable !== false && configuredLanguages(this).length > 1;
});
