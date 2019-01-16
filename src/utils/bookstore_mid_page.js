
// 获取微信授权地址
function getWebOAuthUrl(config) {
  var redirectUri = config.redirectUri;
  var appId = config.appId;
  var redirectUri = config.redirectUri || window.location.href;
  var link = config.link;
  var redirectServerUri = ''
  var state = ''
  redirectUri = link.replace(/&/g, '--')
  redirectUri += `&domain=${domain}&qunId=${qunId}&oauthPlatform=${oauthPlatform}`;

  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}` +
    `&redirect_uri=${encodeURIComponent(redirectServerUri + '?referer=' + redirectUri)}` +
    `&response_type=code&scope=snsapi_userinfo&state=${encodeURIComponent(state)}#wechat_redirect`
}