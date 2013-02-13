(function(a,b){"use strict";var c=function(){var b=a.createElement("dummy").style,c="Webkit Moz O ms Khtml".split(" "),d={};return function(a){if(typeof d[a]=="undefined"){var e=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+c.join(e+" ")+e).split(" ");d[a]=null;for(var g in f)if(b[f[g]]!==undefined){d[a]=f[g];break}}return d[a]}}(),d=function(a){return[].slice.call(a)},e=function(a,b){var d,e;for(d in b)b.hasOwnProperty(d)&&(e=c(d),e!==null&&(a.style[e]=b[d]));return a},f=function(a,b){return isNaN(a)?b||0:Number(a)},g=function(b){return a.getElementById(b)},h=function(b,c){return c=c||a,c.querySelector(b)},i=function(b,c){return c=c||a,d(c.querySelectorAll(b))},j=function(b,c,d){var e=a.createEvent("CustomEvent");e.initCustomEvent(c,!0,!0,d),b.dispatchEvent(e)},k=function(a){return" translate3d("+a.x+"px,"+a.y+"px,"+a.z+"px) "},l=function(a,b){var c=" rotateX("+a.x+"deg) ",d=" rotateY("+a.y+"deg) ",e=" rotateZ("+a.z+"deg) ";return b?e+d+c:c+d+e},m=function(a){return" scale("+a+") "},n=function(a){return" perspective("+a+"px) "},o=function(){return g(b.location.hash.replace(/^#\/?/,""))},p=function(a){var c=b.innerHeight/a.height,d=b.innerWidth/a.width,e=c>d?d:c;return a.maxScale&&e>a.maxScale&&(e=a.maxScale),a.minScale&&e<a.minScale&&(e=a.minScale),e},q=a.body,r=navigator.userAgent.toLowerCase(),s=c("perspective")!==null&&q.classList&&q.dataset&&r.search(/(iphone)|(ipod)|(android)/)===-1;s?(q.classList.remove("impress-not-supported"),q.classList.add("impress-supported")):q.className+=" impress-not-supported ";var t={},u={width:1024,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:1e3},v=function(){return!1},w=b.impress=function(c){if(!s)return{init:v,"goto":v,prev:v,next:v};c=c||"impress";if(t["impress-root-"+c])return t["impress-root-"+c];var r={},w=null,x=null,y=null,z=null,A=null,B=g(c),C=a.createElement("div"),D=!1,E=null,F=function(a){E!==a&&(j(a,"impress:stepenter"),E=a)},G=function(a){E===a&&(j(a,"impress:stepleave"),E=null)},H=function(a,b){var c=a.dataset,d={translate:{x:f(c.x),y:f(c.y),z:f(c.z)},rotate:{x:f(c.rotateX),y:f(c.rotateY),z:f(c.rotateZ||c.rotate)},scale:f(c.scale,1),el:a};a.id||(a.id="step-"+(b+1)),r["impress-"+a.id]=d,e(a,{position:"absolute",transform:"translate(-50%,-50%)"+k(d.translate)+l(d.rotate)+m(d.scale),transformStyle:"preserve-3d"})},I=function(){if(D)return;var b=h("meta[name='viewport']")||a.createElement("meta");b.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",b.parentNode!==a.head&&(b.name="viewport",a.head.appendChild(b));var g=B.dataset;z={width:f(g.width,u.width),height:f(g.height,u.height),maxScale:f(g.maxScale,u.maxScale),minScale:f(g.minScale,u.minScale),perspective:f(g.perspective,u.perspective),transitionDuration:f(g.transitionDuration,u.transitionDuration)},A=p(z),d(B.childNodes).forEach(function(a){C.appendChild(a)}),B.appendChild(C),a.documentElement.style.height="100%",e(q,{height:"100%",overflow:"hidden"});var k={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};e(B,k),e(B,{top:"50%",left:"50%",transform:n(z.perspective/A)+m(A)}),e(C,k),q.classList.remove("impress-disabled"),q.classList.add("impress-enabled"),y=i(".step",B),y.forEach(H),x={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},D=!0,j(B,"impress:init",{api:t["impress-root-"+c]})},J=function(a){return typeof a=="number"?a=a<0?y[y.length+a]:y[a]:typeof a=="string"&&(a=g(a)),a&&a.id&&r["impress-"+a.id]?a:null},K=null,L=function(a,c){if(!D||!(a=J(a)))return!1;b.scrollTo(0,0);var d=r["impress-"+a.id];w&&(w.classList.remove("active"),q.classList.remove("impress-on-"+w.id)),a.classList.add("active"),q.classList.add("impress-on-"+a.id);var g={rotate:{x:-d.rotate.x,y:-d.rotate.y,z:-d.rotate.z},translate:{x:-d.translate.x,y:-d.translate.y,z:-d.translate.z},scale:1/d.scale},h=g.scale>=x.scale;c=f(c,z.transitionDuration);var i=c/2;a===w&&(A=p(z));var j=g.scale*A;w&&w!==a&&G(w),e(B,{transform:n(z.perspective/j)+m(j),transitionDuration:c+"ms",transitionDelay:(h?i:0)+"ms"}),e(C,{transform:l(g.rotate,!0)+k(g.translate),transitionDuration:c+"ms",transitionDelay:(h?0:i)+"ms"});if(x.scale===g.scale||x.rotate.x===g.rotate.x&&x.rotate.y===g.rotate.y&&x.rotate.z===g.rotate.z&&x.translate.x===g.translate.x&&x.translate.y===g.translate.y&&x.translate.z===g.translate.z)i=0;return x=g,w=a,b.clearTimeout(K),K=b.setTimeout(function(){F(w)},c+i),a},M=function(){var a=y.indexOf(w)-1;return a=a>=0?y[a]:y[y.length-1],L(a)},N=function(){var a=y.indexOf(w)+1;return a=a<y.length?y[a]:y[0],L(a)};return B.addEventListener("impress:init",function(){y.forEach(function(a){a.classList.add("future")}),B.addEventListener("impress:stepenter",function(a){a.target.classList.remove("past"),a.target.classList.remove("future"),a.target.classList.add("present")},!1),B.addEventListener("impress:stepleave",function(a){a.target.classList.remove("present"),a.target.classList.add("past")},!1)},!1),B.addEventListener("impress:init",function(){var a="";B.addEventListener("impress:stepenter",function(c){b.location.hash=a="#/"+c.target.id},!1),b.addEventListener("hashchange",function(){b.location.hash!==a&&L(o())},!1),L(o()||y[0],0)},!1),q.classList.add("impress-disabled"),t["impress-root-"+c]={init:I,"goto":L,next:N,prev:M}};w.supported=s})(document,window),function(a,b){"use strict";var c=function(a,b){var c=null;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){a.apply(d,e)},b)}};a.addEventListener("impress:init",function(d){var e=d.detail.api;a.addEventListener("keydown",function(a){(a.keyCode===9||a.keyCode>=32&&a.keyCode<=34||a.keyCode>=37&&a.keyCode<=40)&&a.preventDefault()},!1),a.addEventListener("keyup",function(a){if(a.keyCode===9||a.keyCode>=32&&a.keyCode<=34||a.keyCode>=37&&a.keyCode<=40){switch(a.keyCode){case 33:case 37:case 38:e.prev();break;case 9:case 32:case 34:case 39:case 40:e.next()}a.preventDefault()}},!1),a.addEventListener("click",function(b){var c=b.target;while(c.tagName!=="A"&&c!==a.documentElement)c=c.parentNode;if(c.tagName==="A"){var d=c.getAttribute("href");d&&d[0]==="#"&&(c=a.getElementById(d.slice(1)))}e.goto(c)&&(b.stopImmediatePropagation(),b.preventDefault())},!1),a.addEventListener("click",function(b){var c=b.target;while((!c.classList.contains("step")||!!c.classList.contains("active"))&&c!==a.documentElement)c=c.parentNode;e.goto(c)&&b.preventDefault()},!1),a.addEventListener("touchstart",function(a){if(a.touches.length===1){var c=a.touches[0].clientX,d=b.innerWidth*.3,f=null;c<d?f=e.prev():c>b.innerWidth-d&&(f=e.next()),f&&a.preventDefault()}},!1),b.addEventListener("resize",c(function(){e.goto(a.querySelector(".active"),500)},250),!1)},!1)}(document,window);