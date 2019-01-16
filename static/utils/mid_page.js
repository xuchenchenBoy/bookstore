var MidModule = {
  init: function() {
    this.setTitle()
    if (isTokenInvalid()) {
      this.doWxAuth();
    }
  },
  urlParams: this.getQuery(),
  isTokenInvalid: function() {

  },
  doWxAuth: function() {

  },
  getQuery: function(s) {
    var match,
    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query  = s || window.location.search.substring(1);

    var urlParams = {};
    while (match = search.exec(query))
      urlParams[decode(match[1])] = decode(match[2]);
    return urlParams;
  },
  setTitle: function() {
    document.title = 'Loading...';
  },
  replaceQueryValue: function(href, key, value) {
    var pattern = new RegExp('(' + key + '=)' + '.*?(&|$)');
    if (pattern.test(href)) {
      return href.replace(pattern, '$1' + value + '$2');
    } else {
      if (href.indexOf('?') > 0) {
        href += '&';
      } else {
        href += '?';
      }

      href += key + '=' + value;
    }

    return href;
  },
  urlRequest: function(cb) {
    var params = Object.assign({type: 2}, this.urlParams);
    $.ajax({
      type: 'POST',
      url: '//cows-bos.xuanwonainiu.com/common-api/cows/open/prod/getActivityUrl',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(params),
      success: function (res) {
        res.data && cb(res.data);
      }
    })
  },
  getUrlSuc: function(data) {
    var to = data.activityUrl;
    for (var key in this.urlParams) {
      to = this.replaceQueryValue(to, key, this.urlParams[key]);
    }
    to = encodeURIComponent(btoa(encodeURIComponent(to)));

    var downProtocol = 'http://';
    if ((/kuaizhan.com/).test(data.shortDownUrl)) {
      downProtocol = 'https://'
    }

    var newUrl = downProtocol + data.shortDownUrl + '/' + location.search + '&to=' + to;
    window.location.href = newUrl;
  }
}


MidModule.init()