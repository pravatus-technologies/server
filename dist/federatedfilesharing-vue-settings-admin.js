(()=>{"use strict";var e,r,n,o={50482:(e,r,n)=>{var o=n(85471),a=n(21777),i=n(53334),s=n(32981),d=n(85168),l=n(63814),c=n(56760),u=n(65043),p=n(32073),h=n(88837),v=(n(51257),n(96763));const f={name:"AdminSettings",components:{NcCheckboxRadioSwitch:p.A,NcSettingsSection:h.A},data:()=>({outgoingServer2serverShareEnabled:(0,s.C)("federatedfilesharing","outgoingServer2serverShareEnabled"),incomingServer2serverShareEnabled:(0,s.C)("federatedfilesharing","incomingServer2serverShareEnabled"),outgoingServer2serverGroupShareEnabled:(0,s.C)("federatedfilesharing","outgoingServer2serverGroupShareEnabled"),incomingServer2serverGroupShareEnabled:(0,s.C)("federatedfilesharing","incomingServer2serverGroupShareEnabled"),federatedGroupSharingSupported:(0,s.C)("federatedfilesharing","federatedGroupSharingSupported"),lookupServerEnabled:(0,s.C)("federatedfilesharing","lookupServerEnabled"),lookupServerUploadEnabled:(0,s.C)("federatedfilesharing","lookupServerUploadEnabled"),internalOnly:(0,s.C)("federatedfilesharing","internalOnly"),sharingFederatedDocUrl:(0,s.C)("federatedfilesharing","sharingFederatedDocUrl")}),methods:{async update(e,r){await(0,c.C)();const n=(0,l.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"files_sharing",key:e}),o=r?"yes":"no";try{const{data:e}=await u.Ay.post(n,{value:o});this.handleResponse({status:e.ocs?.meta?.status})}catch(e){this.handleResponse({errorMessage:t("federatedfilesharing","Unable to update federated files sharing config"),error:e})}},async handleResponse(e){let{status:r,errorMessage:t,error:n}=e;"ok"!==r&&((0,d.Qg)(t),v.error(t,n))}}},g=(0,n(14486).A)(f,(function(){var e=this,r=e._self._c;return r("NcSettingsSection",{attrs:{name:e.t("federatedfilesharing","Federated Cloud Sharing"),description:e.t("federatedfilesharing","Adjust how people can share between servers. This includes shares between people on this server as well if they are using federated sharing."),"doc-url":e.sharingFederatedDocUrl}},[r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverShareEnabled=r},function(r){return e.update("outgoing_server2server_share_enabled",e.outgoingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to other servers (this option also allows WebDAV access to public shares)"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverShareEnabled=r},function(r){return e.update("incoming_server2server_share_enabled",e.incomingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive shares from other servers"))+"\n\t")]),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverGroupShareEnabled=r},function(r){return e.update("outgoing_server2server_group_share_enabled",e.outgoingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to send shares to groups on other servers"))+"\n\t")]):e._e(),e._v(" "),e.federatedGroupSharingSupported?r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverGroupShareEnabled=r},function(r){return e.update("incoming_server2server_group_share_enabled",e.incomingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people on this server to receive group shares from other servers"))+"\n\t")]):e._e(),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerEnabled},on:{"update:checked":[function(r){e.lookupServerEnabled=r},function(r){return e.update("lookupServerEnabled",e.lookupServerEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Search global and public address book for people"))+"\n\t")]),e._v(" "),r("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerUploadEnabled},on:{"update:checked":[function(r){e.lookupServerUploadEnabled=r},function(r){return e.update("lookupServerUploadEnabled",e.lookupServerUploadEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow people to publish their data to a global and public address book"))+"\n\t")])],1)}),[],!1,null,null,null).exports;n.nc=(0,a.aV)(),o.Ay.mixin({methods:{t:i.Tl}}),(0,s.C)("federatedfilesharing","internalOnly",!1)||(new(o.Ay.extend(g))).$mount("#vue-admin-federated")}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=o,e=[],i.O=(r,t,n,o)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],o=e[c][2];for(var s=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](t[d])))?t.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var l=n();void 0!==l&&(r=l)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,n,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",9480:"5a87f68853fdc8fcde10"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="nextcloud:",i.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var s,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){s=u;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",n+o),s.src=e),r[e]=[t];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=5098,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={5098:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),s=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,a=t[0],s=t[1],d=t[2],l=0;if(a.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(d)var c=d(i)}for(r&&r(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var s=i.O(void 0,[4208],(()=>i(50482)));s=i.O(s)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-admin.js.map?v=234684ca699ad7a367ed