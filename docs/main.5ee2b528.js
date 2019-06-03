!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=6)}({0:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],s=!1,f=-1;function d(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&p())}function p(){if(!s){var e=c(d);s=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},1:function(e,t,n){(function(e){function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if("object"==typeof n)for(var r in n)e[r]=n[r]}return e}var r=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");function o(e,t){var n=t.replace(r,"\\$1");return e.replace(new RegExp("^"+n),"").replace(new RegExp(n+"$"),"").replace(new RegExp("("+n+"){2,}","g"),t)}var i=function(e){e()};void 0!==e&&"function"==typeof e.nextTick&&(i=e.nextTick);var u=/\s/g,c=/[^a-z0-9-]/gi,a={"Ä":"Ae","ä":"ae","Ö":"Oe","ö":"oe","ü":"ue","Ü":"Ue"},l={"ß":"ss"},s={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"AA","Æ":"AE","Ç":"C","Č":"C","Ď":"D","È":"E","É":"E","Ě":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ł":"L","Ň":"N","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ř":"R","Š":"S","Ś":"S","Ť":"T","Ø":"OE","Ù":"U","Ú":"U","Ü":"U","Û":"U","Ý":"Y","Ž":"Z","Þ":"Th","ß":"sz","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"aa","æ":"ae","ą":"a","ç":"c","č":"c","ď":"d","è":"e","é":"e","ê":"e","ě":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ł":"l","ñ":"n","ń":"n","ň":"n","ò":"o","ó":"o","ô":"o","õ":"o","ō":"o","ö":"o","ø":"oe","ř":"r","š":"s","ś":"s","ť":"t","ù":"u","ú":"u","û":"u","ū":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","ż":"z","ž":"z","Œ":"OE","œ":"oe","&":"and","ı":"i","ş":"s","ğ":"g","Ş":"S","Ğ":"g","İ":"I"},f={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya"};function d(e,t){for(var n=[],r=0;r<e.length;r++){var o=t[e[r]];n.push(void 0===o?e[r]:o)}return n.join("")}t.create=function(e){var t=n({addEToUmlauts:!1,szToSs:!0,spaces:"_",toLower:!1,nonPrintable:"_",trim:!1,extendString:!1,failureOutput:"non-printable"},e),r=function(e,r,p){if(""==e)return"";if("function"==typeof r&&(p=r,r=void 0),!p)return!0===(r=n({},t,r)).szToSs&&(e=d(e,l)),!0===r.addEToUmlauts&&(e=d(e,a)),e=(e=d(e=d(e,s),f)).replace(c,function(e){return-1!==e.search(u)?r.spaces:r.nonPrintable}),!1!==r.trim&&(e=o(e=o(e,r.nonPrintable),r.spaces)),""==e?r.failureOutput:!0===r.toLower?e.toLowerCase():e;var h=arguments.callee;i(function(){p(h.call(0,e,r))})};return!0===t.extendString&&(String.prototype.urlify=function(e){return r(this,e)}),r}}).call(this,n(0))},2:function(e,t,n){e.exports=n(1)},3:function(e,t,n){const r=n(2).create();console.log("hello world toc is live");const o=document.getElementById("toc");if(null!=o&&void 0!==o){const e=document.createElement("ul");o.insertAdjacentElement("beforeend",e);const t=document.querySelectorAll("h5");if(0!=t.length)for(let n=0;n<t.length;n++){const o=t[n];if(o.classList.contains("example"))continue;const i=r(o.innerText);o.setAttribute("id",i);const u=document.createElement("li");e.insertAdjacentElement("beforeend",u);const c=document.createElement("a");c.setAttribute("href","#"+i),c.innerHTML=o.innerText,u.insertAdjacentElement("beforeend",c)}}},32:function(e,t){},4:function(e,t){function n(e){return'<img src="./assets/images/video_cover.png">'.replace("ID",e)+'<div class="play"></div>'}function r(){var e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/ID?autoplay=1".replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,o=document.getElementsByClassName("youtube-player");for(t=0;t<o.length;t++)(e=document.createElement("div")).setAttribute("data-id",o[t].dataset.id),e.innerHTML=n(o[t].dataset.id),e.onclick=r,o[t].appendChild(e)})},5:function(e,t,n){"use strict";n.r(t);n(4),n(32),n(3)},6:function(e,t,n){e.exports=n(5)}});
//# sourceMappingURL=main.5ee2b528.js.map