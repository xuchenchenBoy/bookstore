function dpr(e){var t=document;const n=750;var o=1/window.devicePixelRatio,i=screen.orientation&&"portrait-primary"===screen.orientation.type?0:0===window.orientation?0:-90;console.log("type:"+e+" orientation:"+i),o=1;const r=414*window.devicePixelRatio,a=navigator.userAgent;var w="device-width",d=!0,c=0,s=t.getElementsByTagName("html")[0];a.toLowerCase().indexOf("iphone")==-1&&a.toLowerCase().indexOf("android")==-1&&(d=!1,w=c+"px"),t.querySelector('[name="viewport"]').setAttribute("content","width="+w+" , initial-scale="+o+", maximum-scale="+o+", minimum-scale="+o+", user-scalable=no"),c=0===i?Math.min(t.documentElement.clientWidth,window.innerWidth):Math.min(t.documentElement.clientWidth,window.innerWidth,window.innerHeight),console.log("clientWidth:"+t.documentElement.clientWidth+" innerWidth:"+window.innerWidth+" innerHeight:"+window.innerHeight),console.log("iWidth: "+c+" desWidth: "+n),d||(c=r),s.style.fontSize=100*c/n+"px",s.dataset.dpr=1}window.onresize=dpr;dpr("init");