!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=2)}({0:function(e,t){function n(e){return'<img src="./assets/images/video_cover.png">'.replace("ID",e)+'<div class="play"></div>'}function r(){var e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/ID?autoplay=1".replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,o=document.getElementsByClassName("youtube-player");for(t=0;t<o.length;t++)(e=document.createElement("div")).setAttribute("data-id",o[t].dataset.id),e.innerHTML=n(o[t].dataset.id),e.onclick=r,o[t].appendChild(e)})},1:function(e,t,n){"use strict";n.r(t);n(0),n(27)},2:function(e,t,n){e.exports=n(1)},27:function(e,t){}});
//# sourceMappingURL=main.861dd337.js.map