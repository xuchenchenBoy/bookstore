webpackJsonp([1],{"+/XW":function(t,n){},"0EwI":function(t,n,e){"use strict";function i(t){e("QxHB")}var a=e("FWzO"),o=e("l+R4"),r=e("VU/8"),c=i,s=r(a.a,o.a,c,"data-v-005872d6",null);n.a=s.exports},"0bkq":function(t,n,e){"use strict";var i=e("Dd8w"),a=e.n(i),o=e("NYxO"),r=e("0EwI");n.a={components:{loading:r.a},computed:a()({},e.i(o.b)({count:function(t){return t.homeVuex.count},status:function(t){return t.homeVuex.status}}),e.i(o.c)(["getCount"])),methods:a()({doAddAction:function(){this.calcuateAdd()},doDECAction:function(){this.calcuateDEC()},doRequest:function(){this.requestStatus()}},e.i(o.d)(["calcuateAdd","calcuateDEC","requestStatus"]))}},"4lL+":function(t,n,e){"use strict";var i=e("Xxa5"),a=e.n(i),o=e("d7EF"),r=e.n(o),c=e("exGp"),s=e.n(c),u=this,d=function(){var t=s()(a.a.mark(function t(n,e){var i,o,c,s,d,l,f;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.types,o=n.promise,!i){t.next=17;break}return c=r()(i,3),s=c[0],d=c[1],l=c[2],e.commit(s),t.prev=4,t.next=7,o();case 7:f=t.sent,e.commit(d,f),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),console.log("e=",t.t0),e.commit(l);case 15:t.next=18;break;case 17:e.commit(n.type);case 18:case"end":return t.stop()}},t,u,[[4,11]])}));return function(n,e){return t.apply(this,arguments)}}();n.a=d},"5tEK":function(t,n,e){"use strict";function i(t){e("HA1T")}var a=e("xMma"),o=e("VwrX"),r=e("VU/8"),c=i,s=r(a.a,o.a,c,"data-v-ea85912a",null);n.a=s.exports},FWzO:function(t,n,e){"use strict";n.a={}},HA1T:function(t,n){},KR8f:function(t,n,e){"use strict";function i(t){e("gTKH")}var a=e("0bkq"),o=e("nDIc"),r=e("VU/8"),c=i,s=r(a.a,o.a,c,"data-v-05f0015a",null);n.a=s.exports},M93x:function(t,n,e){"use strict";function i(t){e("+/XW")}var a=e("xJD8"),o=e("YjzE"),r=e("VU/8"),c=i,s=r(a.a,o.a,c,null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),o=e("YaEn"),r=e("NYxO"),c=e("TbTn"),s=e("sax8"),u=e.n(s),d=e("uMhA"),l=(e.n(d),e("UoMW")),f=(e.n(l),e("flk3"));e.n(f);i.a.config.productionTip=!1,i.a.use(r.a);var m=new r.a.Store({modules:{homeVuex:c.a},plugins:[u()()]});new i.a({el:"#app",router:o.a,store:m,template:"<App/>",components:{App:a.a}})},QxHB:function(t,n){},TIfe:function(t,n,e){"use strict";function i(){return window.localStorage.getItem("token")||""}n.a=i},TbTn:function(t,n,e){"use strict";var i=e("4lL+"),a=e("jNpJ"),o={state:{count:1,status:"nothing status"},getters:{getCount:function(t){return t.count}},mutations:{increment:function(t){return t.count++},decrement:function(t){return t.count--},onLoading:function(t){t.status="pending status"},onSuccess:function(t){t.status="success status"},onError:function(t){t.status="error status"}},actions:{requestStatus:function(t,n){var o={types:["onLoading","onSuccess","onError"],promise:a.a(n)};e.i(i.a)(o,t)},calcuateAdd:function(t,n){var e=(t.state,t.commit);t.rootState;e("increment")},calcuateDEC:function(t,n){var e=(t.state,t.commit);t.rootState;e("decrement")}}};n.a=o},UoMW:function(t,n){function e(t){var n=document,e=1/window.devicePixelRatio,i=screen.orientation&&"portrait-primary"===screen.orientation.type?0:0===window.orientation?0:-90;console.log("type:"+t+" orientation:"+i),e=1;var a=414*window.devicePixelRatio,o=navigator.userAgent,r="device-width",c=!0,s=0,u=n.getElementsByTagName("html")[0];-1==o.toLowerCase().indexOf("iphone")&&-1==o.toLowerCase().indexOf("android")&&(c=!1,r=s+"px"),n.querySelector('[name="viewport"]').setAttribute("content","width="+r+" , initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),s=0===i?Math.min(n.documentElement.clientWidth,window.innerWidth):Math.min(n.documentElement.clientWidth,window.innerWidth,window.innerHeight),console.log("clientWidth:"+n.documentElement.clientWidth+" innerWidth:"+window.innerWidth+" innerHeight:"+window.innerHeight),console.log("iWidth: "+s+" desWidth: 750"),c||(s=a),u.style.fontSize=100*s/750+"px",u.dataset.dpr=1}window.onresize=e,e("init")},VwrX:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("img",{staticClass:"icon-404",attrs:{src:"http://img-shop.kkkd.com/FggZQGPICcbIULtFW0T1VqIdPNSV",alt:""}}),t._v(" "),e("span",{staticClass:"desc"},[t._v("404 页面没找到.")])])}],o={render:i,staticRenderFns:a};n.a=o},YaEn:function(t,n,e){"use strict";var i=e("7+uW"),a=e("/ocq"),o=e("KR8f"),r=e("5tEK");i.a.use(a.a),n.a=new a.a({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"主页",component:o.a},{path:"*",name:"404页面没找到",component:r.a}]})},YjzE:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o={render:i,staticRenderFns:a};n.a=o},Zq1L:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=""},flk3:function(t,n){(function(){var t=this,n=function(t){function n(t){"js-alertHidden"===t.animationName&&document.querySelector(".js-alert")&&document.body.removeChild(document.querySelector(".js-alert"))}var e;document.querySelector(".js-alert")?(e=document.querySelector(".js-alert"),e.innerText=t):(e=document.createElement("div"),e.className="js-alert",e.innerText=t,document.body.appendChild(e)),e.addEventListener("webkitAnimationEnd",n,!1),e.addEventListener("animationEnd",n,!1)};t.alertTip=n}).call(window)},gTKH:function(t,n){},jNpJ:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("vLgD"),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.i(i.a)("api",t)}},"l+R4":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex items-center justify-center fixed-full"},[e("div",{staticClass:"lds-facebook"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])])}],o={render:i,staticRenderFns:a};n.a=o},nDIc:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"header"}),t._v(" "),e("div",[t._v("\n    count:\n  ")]),t._v(" "),e("div",[t._v("\n    "+t._s(t.count)+"\n  ")]),t._v(" "),e("div",[e("span",{staticClass:"btn",on:{click:t.doAddAction}},[t._v("+")]),t._v(" "),e("span",{staticClass:"btn",on:{click:t.doDECAction}},[t._v("-")])]),t._v(" "),e("div",{on:{click:t.doRequest}},[t._v("\n    click here to request status: "+t._s(t.status)+"\n  ")])])},a=[],o={render:i,staticRenderFns:a};n.a=o},srBc:function(t,n,e){"use strict";function i(t){var n=t.appId,e=t.domain,i=t.qunId,a=t.oauthPlatform,o=void 0===a?"cloud":a,r=(t.callbackUrl,t.redirectUri),c=void 0===r?window.location.href:r,s=(t.isWechat,t.isHybrid,t.hostHref,t.link);return c=(void 0===s?"":s).replace(/&/g,"--"),c+="&domain="+e+"&qunId="+i+"&oauthPlatform="+o,"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n+"&redirect_uri="+encodeURIComponent("?referer="+c)+"&response_type=code&scope=snsapi_userinfo&state="+encodeURIComponent("")+"#wechat_redirect"}n.a=i},uMhA:function(t,n){},vLgD:function(t,n,e){"use strict";function i(t){var n=this,i=t.method,a=t.url,o=t.body,c=void 0===o?{}:o;return d()(r.a.mark(function t(){var o,u,d,l,h,w,x,g,_,E,b;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=i.toLowerCase(),o={method:i,headers:{"Content-Type":"application/json",Accept:"application/json",token:e.i(p.a)()}},/http/.test(a)||(a=v.a+a),["get","jsonp"].indexOf(i)>=0&&c?(a=a.replace(/\?$/,""),/\?/.test(a)?a+="&":a+="?",a+=f.a.stringify(c)):o.body=c&&s()(c),u=void 0,t.next=7,fetch(a,o);case 7:return u=t.sent,t.next=10,u.json();case 10:return u=t.sent,d=401===u.status,d?(l=window.location.href,h=u.data||{},w=h.appId,x=h.domain,g=h.qunId,_=h.callbackUrl,E=h.oauthPlatform,b={appId:w,domain:x,qunId:g,callbackUrl:_,oauthPlatform:E,link:l},window.location.href=e.i(m.a)(b)):1!==u.status&&401!==u.status&&window.alertTip(u.msg),t.abrupt("return",u);case 14:case"end":return t.stop()}},t,n)}))}function a(t,n){return i({method:"post",url:t,body:n})}e.d(n,"a",function(){return a});var o=e("Xxa5"),r=e.n(o),c=e("mvHQ"),s=e.n(c),u=e("exGp"),d=e.n(u),l=e("mw3O"),f=e.n(l),m=e("srBc"),p=e("TIfe"),v=e("Zq1L")},xJD8:function(t,n,e){"use strict";n.a={name:"app"}},xMma:function(t,n,e){"use strict";n.a={}}},["NHnr"]);
//# sourceMappingURL=app.75bc1a37af0f08821242.js.map