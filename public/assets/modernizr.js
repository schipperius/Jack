/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-iepp-respond-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr=function(a,b,c){function d(){l.input=function(a){for(var b=0,c=a.length;b<c;b++)A[a[b]]=a[b]in s;return A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),l.inputtypes=function(a){for(var d=0,e,f,g,h=a.length;d<h;d++)s.setAttribute("type",f=a[d]),e=s.type!=="text",e&&(s.value=t,s.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&s.style.WebkitAppearance!==c?(n.appendChild(s),g=b.defaultView,e=g.getComputedStyle&&g.getComputedStyle(s,null).WebkitAppearance!=="textfield"&&s.offsetHeight!==0,n.removeChild(s)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=s.checkValidity&&s.checkValidity()===!1:/^color$/.test(f)?(n.appendChild(s),n.offsetWidth,e=s.value!=t,n.removeChild(s)):e=s.value!=t)),z[a[d]]=!!e;return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function e(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+w.join(c+" ")+c).split(" ");return f(d,b)}function f(a,b){for(var d in a)if(r[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){return typeof a===b}function i(a,b){return j(v.join(a+";")+(b||""))}function j(a){r.cssText=a}var k="2.0.6",l={},m=!0,n=b.documentElement,o=b.head||b.getElementsByTagName("head")[0],p="modernizr",q=b.createElement(p),r=q.style,s=b.createElement("input"),t=":)",u=Object.prototype.toString,v=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),w="Webkit Moz O ms Khtml".split(" "),x={svg:"http://www.w3.org/2000/svg"},y={},z={},A={},B=[],C=function(a,c,d,e){var f,g,h,i=b.createElement("div");if(parseInt(d,10))while(d--)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),i.appendChild(h);return f=["&shy;","<style>",a,"</style>"].join(""),i.id=p,i.innerHTML+=f,n.appendChild(i),g=c(i,a),i.parentNode.removeChild(i),!!g},D=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;return C("@media "+b+" { #"+p+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"}),c},E=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var f=a in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),f=h(e[a],"function"),h(e[a],c)||(e[a]=c),e.removeAttribute(a))),e=null,f}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),F,G={}.hasOwnProperty,H;!h(G,c)&&!h(G.call,c)?H=function(a,b){return G.call(a,b)}:H=function(a,b){return b in a&&h(a.constructor.prototype[b],c)};var I=function(c,d){var e=c.join(""),f=d.length;C(e,function(c,d){var e=b.styleSheets[b.styleSheets.length-1],g=e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"",h=c.childNodes,i={};while(f--)i[h[f].id]=h[f];l.touch="ontouchstart"in a||i.touch.offsetTop===9,l.csstransforms3d=i.csstransforms3d.offsetLeft===9,l.generatedcontent=i.generatedcontent.offsetHeight>=1,l.fontface=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0},f,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",v.join("touch-enabled),("),p,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",v.join("transform-3d),("),p,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',t,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);y.flexbox=function(){function a(a,b,c,d){a.style.cssText=v.join(b+":"+c+";")+(d||"")}function c(a,b,c,d){b+=":",a.style.cssText=(b+v.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");c(d,"display","box","width:42px;padding:0;"),a(e,"box-flex","1","width:10px;"),d.appendChild(e),n.appendChild(d);var f=e.offsetWidth===42;return d.removeChild(e),n.removeChild(d),f},y.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},y.canvastext=function(){return!!l.canvas&&!!h(b.createElement("canvas").getContext("2d").fillText,"function")},y.webgl=function(){return!!a.WebGLRenderingContext},y.touch=function(){return l.touch},y.geolocation=function(){return!!navigator.geolocation},y.postmessage=function(){return!!a.postMessage},y.websqldatabase=function(){var b=!!a.openDatabase;return b},y.indexedDB=function(){for(var b=-1,c=w.length;++b<c;)if(a[w[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},y.hashchange=function(){return E("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},y.history=function(){return!!a.history&&!!history.pushState},y.draganddrop=function(){return E("dragstart")&&E("drop")},y.websockets=function(){for(var b=-1,c=w.length;++b<c;)if(a[w[b]+"WebSocket"])return!0;return"WebSocket"in a},y.rgba=function(){return j("background-color:rgba(150,255,150,.5)"),g(r.backgroundColor,"rgba")},y.hsla=function(){return j("background-color:hsla(120,40%,100%,.5)"),g(r.backgroundColor,"rgba")||g(r.backgroundColor,"hsla")},y.multiplebgs=function(){return j("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(r.background)},y.backgroundsize=function(){return e("backgroundSize")},y.borderimage=function(){return e("borderImage")},y.borderradius=function(){return e("borderRadius")},y.boxshadow=function(){return e("boxShadow")},y.textshadow=function(){return b.createElement("div").style.textShadow===""},y.opacity=function(){return i("opacity:.55"),/^0.55$/.test(r.opacity)},y.cssanimations=function(){return e("animationName")},y.csscolumns=function(){return e("columnCount")},y.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return j((a+v.join(b+a)+v.join(c+a)).slice(0,-a.length)),g(r.backgroundImage,"gradient")},y.cssreflections=function(){return e("boxReflect")},y.csstransforms=function(){return!!f(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},y.csstransforms3d=function(){var a=!!f(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return a&&"webkitPerspective"in n.style&&(a=l.csstransforms3d),a},y.csstransitions=function(){return e("transitionProperty")},y.fontface=function(){return l.fontface},y.generatedcontent=function(){return l.generatedcontent},y.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},y.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},y.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},y.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},y.webworkers=function(){return!!a.Worker},y.applicationcache=function(){return!!a.applicationCache},y.svg=function(){return!!b.createElementNS&&!!b.createElementNS(x.svg,"svg").createSVGRect},y.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==x.svg},y.smil=function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS(x.svg,"animate")))},y.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS(x.svg,"clipPath")))};for(var J in y)H(y,J)&&(F=J.toLowerCase(),l[F]=y[J](),B.push((l[F]?"":"no-")+F));return l.input||d(),j(""),q=s=null,a.attachEvent&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>",a.childNodes.length!==1}()&&function(a,b){function d(a){var b=-1;while(++b<h)a.createElement(g[b])}a.iepp=a.iepp||{};var e=a.iepp,f=e.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",g=f.split("|"),h=g.length,i=new RegExp("(^|\\s)("+f+")","gi"),j=new RegExp("<(/*)("+f+")","gi"),k=/^\s*[\{\}]\s*$/,l=new RegExp("(^|[^\\n]*?\\s)("+f+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),m=b.createDocumentFragment(),n=b.documentElement,o=n.firstChild,p=b.createElement("body"),q=b.createElement("style"),r=/print|all/,s;e.getCSS=function(a,b){if(a+""===c)return"";var d=-1,f=a.length,g,h=[];while(++d<f){g=a[d];if(g.disabled)continue;b=g.media||b,r.test(b)&&h.push(e.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},e.parseCSS=function(a){var b=[],c;while((c=l.exec(a))!=null)b.push(((k.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(i,"$1.iepp_$2")+c[4]);return b.join("\n")},e.writeHTML=function(){var a=-1;s=s||b.body;while(++a<h){var c=b.getElementsByTagName(g[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+g[a])}m.appendChild(s),n.appendChild(p),p.className=s.className,p.id=s.id,p.innerHTML=s.innerHTML.replace(j,"<$1font")},e._beforePrint=function(){q.styleSheet.cssText=e.parseCSS(e.getCSS(b.styleSheets,"all")),e.writeHTML()},e.restoreHTML=function(){p.innerHTML="",n.removeChild(p),n.appendChild(s)},e._afterPrint=function(){e.restoreHTML(),q.styleSheet.cssText=""},d(b),d(m),e.disablePP||(o.insertBefore(q,o.firstChild),q.media="print",q.className="iepp-printshim",a.attachEvent("onbeforeprint",e._beforePrint),a.attachEvent("onafterprint",e._afterPrint))}(a,b),l._version=k,l._prefixes=v,l._domPrefixes=w,l.mq=D,l.hasEvent=E,l.testProp=function(a){return f([a])},l.testAllProps=e,l.testStyles=C,n.className=n.className.replace(/\bno-js\b/,"")+(m?" js "+B.join(" "):""),l}(this,this.document),function(a,b){function c(){s(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=b;if(!b){var d=a.document,e=d.documentElement,f=[],g=[],h=[],i={},j=30,k=d.getElementsByTagName("head")[0]||e,l=k.getElementsByTagName("link"),m=[],n=function(){var b=l,c=b.length,d=0,e,f,g,h;for(;d<c;d++)e=b[d],f=e.href,g=e.media,h=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&h&&!i[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host?m.push({href:f,media:g}):i[f]=!0);o()},o=function(){if(m.length){var a=m.shift();t(a.href,function(b){p(b,a.href,a.media),i[a.href]=!0,o()})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),e=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!e&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(e=1);for(;j<e;j++){k=0,i?(l=c,g.push(h(a))):(l=d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,g.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],f.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:g.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}s()},q,r,s=function(a){var b="clientWidth",c=e[b],i=d.compatMode==="CSS1Compat"&&c||d.body[b]||c,m={},n=d.createDocumentFragment(),o=l[l.length-1],p=(new Date).getTime();if(a&&q&&p-q<j)clearTimeout(r),r=setTimeout(s,j);else{q=p;for(var t in f){var u=f[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&i>=u.minw)&&(!u.maxw||u.maxw&&i<=u.maxw))m[u.media]||(m[u.media]=[]),m[u.media].push(g[u.rules])}for(var t in h)h[t]&&h[t].parentNode===k&&k.removeChild(h[t]);for(var t in m){var v=d.createElement("style"),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=w:v.appendChild(d.createTextNode(w)),n.appendChild(v),h.push(v)}k.insertBefore(n,o.nextSibling)}},t=function(a,b){var c=u();if(!!c){c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(c.readyState==4)return;c.send()}},u=function(){var a=!1,b=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();n(),respond.update=n,a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}}(this,Modernizr.mq("only all")),function(a,b,c){function d(a){return!a||a=="loaded"||a=="complete"}function e(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&h()}function f(a){var c=b.createElement("script"),f;c.src=a.s,c.onreadystatechange=c.onload=function(){!f&&d(c.readyState)&&(f=1,e(),c.onload=c.onreadystatechange=null)},m(function(){f||(f=1,e())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function g(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var f=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,e()):f(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){e()},0)):f(a)}},0)};f(c)}else c.onload=function(){d||(d=1,m(function(){e()},0))},a.e&&c.onload();m(function(){d||(d=1,e())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function h(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?g(a):f(a)},0):(a(),e()):q=0}function i(a,c,f,g,i,j){function k(){!o&&d(l.readyState)&&(r.r=o=1,!q&&e(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:f,s:c,e:j};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=f),l.onload=l.onreadystatechange=k,a=="img"?l.onerror=k:a=="script"&&(l.onerror=function(){r.e=r.r=1,h()}),p.splice(g,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,e())},H.errorTimeout)}function j(a,b,c){var d=b=="c"?z:y;return q=0,b=b||"j",C(a)?i(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=H;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function b(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function d(a,d,e,f,g){var h=b(a),i=h.autoCallback;if(!h.bypass){d&&(d=D(d)?d:d[a]||d[f]||d[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,d,e,f,g);e.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(D(d)||D(i))&&e.load(function(){k(),d&&d(h.origUrl,g,f),i&&i(h.origUrl,g,f)})}}function e(a,b){function c(a){if(C(a))d(a,h,b,0,e);else if(B(a))for(i in a)a.hasOwnProperty(i)&&d(a[i],h,b,i,e)}var e=!!a.test,f=e?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var f,g,h=this.yepnope.loader;if(C(a))d(a,0,h,0);else if(A(a))for(f=0;f<a.length;f++)g=a[f],C(g)?d(g,0,h,0):A(g)?H(g):B(g)&&e(g,h);else B(a)&&e(a,h)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=k()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};