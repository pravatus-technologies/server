/*! For license information please see sharebymail-vue-settings-admin-sharebymail.js.LICENSE.txt */
!function(){"use strict";var e,r,n,o={25529:function(e,r,n){var o=n(20144),i=n(77958),a=n(31352),c=(n(32316),n(20571)),u=n.n(c),s=n(13299),l=n.n(s),f=n(43554),h=n(64024),d=n(48033),p=n(79753),v=n(10128),y=(n(65509),n(25108));function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&r.call(b,i)&&(v=b);var w=p.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==m(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(I.prototype),u(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new I(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function b(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,c,"next",t)}function c(t){b(i,n,o,a,c,"throw",t)}a(void 0)}))}}var x={name:"AdminSettings",components:{NcCheckboxRadioSwitch:u(),NcSettingsSection:l()},data:function(){return{sendPasswordMail:(0,f.j)("sharebymail","sendPasswordMail"),replyToInitiator:(0,f.j)("sharebymail","replyToInitiator")}},methods:{update:function(e,r){var n=this;return w(g().mark((function o(){var i,a,c,u,s;return g().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,v.confirmPassword)();case 2:return i=(0,p.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"sharebymail",key:e}),a=r?"yes":"no",o.prev=4,o.next=7,d.Z.post(i,{value:a});case 7:u=o.sent,s=u.data,n.handleResponse({status:null===(c=s.ocs)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.status}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(4),n.handleResponse({errorMessage:t("sharebymail","Unable to update share by mail config"),error:o.t0});case 15:case"end":return o.stop()}}),o,null,[[4,12]])})))()},handleResponse:function(t){return w(g().mark((function e(){var r,n,o;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.status,n=t.errorMessage,o=t.error,"ok"!==r&&((0,h.x2)(n),y.error(n,o));case 2:case"end":return e.stop()}}),e)})))()}}},I=(0,n(51900).Z)(x,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("sharebymail","Share by mail"),description:t.t("sharebymail","Allows users to share a personalized link to a file or folder by putting in an email address.")}},[e("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:t.sendPasswordMail},on:{"update:checked":[function(e){t.sendPasswordMail=e},function(e){return t.update("sendpasswordmail",t.sendPasswordMail)}]}},[t._v("\n\t\t"+t._s(t.t("sharebymail","Send password by mail"))+"\n\t")]),t._v(" "),e("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:t.replyToInitiator},on:{"update:checked":[function(e){t.replyToInitiator=e},function(e){return t.update("replyToInitiator",t.replyToInitiator)}]}},[t._v("\n\t\t"+t._s(t.t("sharebymail","Reply to initiator"))+"\n\t")])],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,i.IH)()),o.default.mixin({methods:{t:a.Iu}}),(new(o.default.extend(I))).$mount("#vue-admin-sharebymail")},81490:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=function(t,r,n,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))},a.u=function(t){return t+"-"+t+".js?v=99acfc6f3005fff45b76"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r={},n="nextcloud:",a.l=function(t,e,o,i){if(r[t])r[t].push(e);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+o){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",n+o),c.src=t),r[t]=[e];var h=function(e,n){c.onerror=c.onload=null,clearTimeout(d);var o=r[t];if(delete r[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),u&&document.head.appendChild(c)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=3173,function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){a.b=document.baseURI||self.location.href;var t={3173:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,(function(r){if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(u)var l=u(a)}for(e&&e(r);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),a.nc=void 0;var c=a.O(void 0,[7874],(function(){return a(25529)}));c=a.O(c)}();
//# sourceMappingURL=sharebymail-vue-settings-admin-sharebymail.js.map?v=a0b37ab9319da438e517