/*! For license information please see federatedfilesharing-vue-settings-admin.js.LICENSE.txt */
(()=>{"use strict";var e,r,n,a={46508:(e,r,n)=>{var a=n(85471),o=n(21777),i=n(53334),s=n(32981),d=n(32073),l=n(88837),c=n(85168),u=n(26287),h=n(63814),p=n(39654),v=(n(51257),n(96763));const f={name:"AdminSettings",components:{NcCheckboxRadioSwitch:d.A,NcSettingsSection:l.A},data:()=>({outgoingServer2serverShareEnabled:(0,s.C)("federatedfilesharing","outgoingServer2serverShareEnabled"),incomingServer2serverShareEnabled:(0,s.C)("federatedfilesharing","incomingServer2serverShareEnabled"),outgoingServer2serverGroupShareEnabled:(0,s.C)("federatedfilesharing","outgoingServer2serverGroupShareEnabled"),incomingServer2serverGroupShareEnabled:(0,s.C)("federatedfilesharing","incomingServer2serverGroupShareEnabled"),federatedGroupSharingSupported:(0,s.C)("federatedfilesharing","federatedGroupSharingSupported"),lookupServerEnabled:(0,s.C)("federatedfilesharing","lookupServerEnabled"),lookupServerUploadEnabled:(0,s.C)("federatedfilesharing","lookupServerUploadEnabled"),internalOnly:(0,s.C)("federatedfilesharing","internalOnly"),sharingFederatedDocUrl:(0,s.C)("federatedfilesharing","sharingFederatedDocUrl")}),methods:{async update(e,r){await(0,p.C)();const n=(0,h.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"files_sharing",key:e}),a=r?"yes":"no";try{var o;const{data:e}=await u.A.post(n,{value:a});this.handleResponse({status:null===(o=e.ocs)||void 0===o||null===(o=o.meta)||void 0===o?void 0:o.status})}catch(e){this.handleResponse({errorMessage:t("federatedfilesharing","Unable to update federated files sharing config"),error:e})}},async handleResponse(e){let{status:r,errorMessage:t,error:n}=e;"ok"!==r&&((0,c.Qg)(t),v.error(t,n))}}},g=(0,n(14486).A)(f,(function(){var e=this,r=e._self._c;return r("NcSettingsSection",{attrs:{name:e.t("federatedfilesharing","Federated Cloud Sharing"),description:e.t("federatedfilesharing","Adjust how people can share between servers. This includes shares between users on this server as well if they are using federated sharing."),"doc-url":e.sharingFederatedDocUrl}},[r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverShareEnabled=r},function(r){return e.update("outgoing_server2server_share_enabled",e.outgoingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to send shares to other servers (this option also allows WebDAV access to public shares)"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverShareEnabled=r},function(r){return e.update("incoming_server2server_share_enabled",e.incomingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to receive shares from other servers"))+"\n\t")]),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverGroupShareEnabled=r},function(r){return e.update("outgoing_server2server_group_share_enabled",e.outgoingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to send shares to groups on other servers"))+"\n\t")]):e._e(),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverGroupShareEnabled=r},function(r){return e.update("incoming_server2server_group_share_enabled",e.incomingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to receive group shares from other servers"))+"\n\t")]):e._e(),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerEnabled},on:{"update:checked":[function(r){e.lookupServerEnabled=r},function(r){return e.update("lookupServerEnabled",e.lookupServerEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Search global and public address book for users"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerUploadEnabled},on:{"update:checked":[function(r){e.lookupServerUploadEnabled=r},function(r){return e.update("lookupServerUploadEnabled",e.lookupServerUploadEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users to publish their data to a global and public address book"))+"\n\t")])],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,o.do)()),a.Ay.mixin({methods:{t:i.Tl}}),(0,s.C)("federatedfilesharing","internalOnly",!1)||(new(a.Ay.extend(g))).$mount("#vue-admin-federated")}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=a,e=[],i.O=(r,t,n,a)=>{if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],a=e[c][2];for(var s=!0,d=0;d<t.length;d++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](t[d])))?t.splice(d--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,n,a]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"-"+e+".js?v="+{4065:"80bd6be35a0955d2992a",4254:"96661b9f421b07ce7189"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="nextcloud:",i.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var s,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+a){s=u;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",n+a),s.src=e),r[e]=[t];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),d&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=5098,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={5098:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,o=t[0],s=t[1],d=t[2],l=0;if(o.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(d)var c=d(i)}for(r&&r(t);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var s=i.O(void 0,[4208],(()=>i(46508)));s=i.O(s)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-admin.js.map?v=0d4cca5f5baaf1ee7929