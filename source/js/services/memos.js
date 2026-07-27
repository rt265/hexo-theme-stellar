utils.jq(() => {
  const els = Array.from(document.getElementsByClassName('ds-memos'));

  els.forEach(el => {
    const api = el.dataset.api;
    const bearer_token = el.dataset.token;
    if (!api) return;

    const default_avatar = el.getAttribute('avatar') || def.avatar;
    const limit = el.getAttribute('limit');
    const host = api.match(/https:\/\/(.*?)\/(.*)/i)[1];
    const site = api.split('/api/v1')[0];

    // 用户缓存与请求去重，避免重复拉取同一 creator
    const userCache = [];
    const userRequests = {};

    utils.request(el, api, async resp => {
      const data = await resp.json();
      // 0.30.x ListMemos 返回 { memos: [...], nextPageToken }
      const memos = Array.isArray(data?.memos) ? data.memos : [];
      if (!memos.length) return;

      const users = el.getAttribute('user')?.split(",") || [];
      const hide = el.getAttribute('hide')?.split(",") || [];

      await Promise.all(memos.slice(0, limit || memos.length).map(item =>
          createMemoCell(item, users, hide).then(cell => $(el).append(cell))
      ));
    });

    async function createMemoCell(item, users, hide) {
      return `<div class="timenode">
                      <div class="header">${!users.length && !hide.includes('user') ? await buildUser(item) : ''}
                      <span>${buildDate(item).toLocaleString()}</span></div>
                      <div class="body">${marked.parse(item.content || '')}
                      <p>${buildImages(item).join('')}</p>
                      </div></div>`;
    }

    // creator 格式为 "users/{id}"，通过 GetUser 拉取用户信息
    async function buildUser(item) {
      const creatorId = item?.creator?.split('/')[1];
      let user = userCache.find(u => u.name?.split('/')[1] === creatorId);
      if (!user && creatorId) {
        if (!userRequests[creatorId]) {
          userRequests[creatorId] = fetch(`${site}/api/v1/users/${creatorId}`, {
            headers: bearer_token ? { Authorization: `Bearer ${bearer_token}` } : {}
          })
              .then(response => response.json())
              .then(data => {
                if (data?.username) userCache.push(data);
              })
              .finally(() => delete userRequests[creatorId]);
        }
        await userRequests[creatorId];
        user = userCache.find(u => u.name?.split('/')[1] === creatorId);
      }
      const name = user ? user.displayName || user.username : 'memos';
      const avatarUrl = user?.avatarUrl
          ? (user.avatarUrl.startsWith('http') ? user.avatarUrl : `${site}${user.avatarUrl}`)
          : default_avatar || '';
      return `<div class="user-info">${avatarUrl ? `<img src="${avatarUrl}">` : ''}<span>${name}</span></div>`;
    }

    function buildDate(item) {
      return new Date(item.createTime);
    }

    // 0.30.x 附件字段为 attachments，name 格式 "attachments/{id}"
    function buildImages(item) {
      return (item.attachments || [])
          .filter(res => res.type?.includes('image/'))
          .map(res => {
            const src = res.externalLink || `${site}/file/${res.name}/${res.filename}`;
            return `<div class="image-bg"><img src="${src}"></div>`;
          });
    }
  });
});
