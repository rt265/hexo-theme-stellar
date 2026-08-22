const initServices = () => {
  // 用于存储需要清理的资源
  let timers = [];

  for (let id of Object.keys(ctx.services)) {
    const js = ctx.services[id].js;
    if (id == 'siteinfo') {
      const cardlinks = document.querySelectorAll('a.link-card[cardlink]');
      const siteCards = document.querySelectorAll('.ds-sites, .site-card .card-link[data-siteinfo-api]');
      if (cardlinks?.length > 0 || siteCards?.length > 0) {
        utils.js(js, { defer: true }).then(function () {
          if (cardlinks?.length > 0) {
            setCardLink(cardlinks);
          }
        });
      }
    } else if (id == 'ghinfo') {
      const els = document.querySelectorAll('.ds-ghinfo');
      if (els.length > 0) {
        utils.js(js, { defer: true });
      }
    } else {
      const els = document.getElementsByClassName(`ds-${id}`);
      if (els?.length > 0) {
        if (id == 'timeline' || id == 'memos' || id == 'marked' || id == 'mdrender') {
          utils.js(deps.marked).then(function () {
            utils.js(js, { defer: true });
          });
        } else {
          utils.js(js, { defer: true });
        }
      }
    }
  }

  // search
  if (ctx.search && typeof searchFunc === 'function') {
    const searchCfg = ctx.search.local_search;
    const lazyLoad = searchCfg ? searchCfg.lazy_load !== false : true;
    // 懒加载模式下由 local-search.js 的聚焦事件负责初始化，此处跳过
    if (!lazyLoad) {
      const inputArea = document.querySelector("input#search-input");
      if (inputArea && !inputArea._searchInitialized) {
        const path = ctx.search.path.startsWith('/') ? ctx.root + ctx.search.path.substring(1) : ctx.root + ctx.search.path;
        const filter = inputArea.getAttribute('data-filter') || '';
        searchFunc(path, filter, 'search-wrapper', 'search-input', 'search-result');
        // searchFunc 内部管理 _searchInitialized（pending → true），此处不再覆盖
      }
    }
  }
};

stellar.initPlugin(initServices, 'services');
