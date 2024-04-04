/*! For license information please see settings-vue-settings-admin-basic-settings.js.LICENSE.txt */
(()=>{"use strict";var e,n,o,r={93827:(e,n,o)=>{var r=o(85471),a=o(92457),s=o(38613),i=o(53334);const l=(0,o(53529).YK)().setApp("settings").detectUser().build();var c=o(85168),d=o(26287),A=o(99498),u=o(36124);o(51257);const g=Object.freeze({ADDRESS:"address",AVATAR:"avatar",BIOGRAPHY:"biography",DISPLAYNAME:"displayname",EMAIL_COLLECTION:"additional_mail",EMAIL:"email",HEADLINE:"headline",NOTIFICATION_EMAIL:"notify_email",FEDIVERSE:"fediverse",ORGANISATION:"organisation",PHONE:"phone",PROFILE_ENABLED:"profile_enabled",ROLE:"role",TWITTER:"twitter",WEBSITE:"website"}),p=Object.freeze({ADDRESS:(0,i.Tl)("settings","Location"),AVATAR:(0,i.Tl)("settings","Profile picture"),BIOGRAPHY:(0,i.Tl)("settings","About"),DISPLAYNAME:(0,i.Tl)("settings","Full name"),EMAIL_COLLECTION:(0,i.Tl)("settings","Additional email"),EMAIL:(0,i.Tl)("settings","Email"),HEADLINE:(0,i.Tl)("settings","Headline"),ORGANISATION:(0,i.Tl)("settings","Organisation"),PHONE:(0,i.Tl)("settings","Phone number"),PROFILE_ENABLED:(0,i.Tl)("settings","Profile"),ROLE:(0,i.Tl)("settings","Role"),TWITTER:(0,i.Tl)("settings","X (formerly Twitter)"),FEDIVERSE:(0,i.Tl)("settings","Fediverse (e.g. Mastodon)"),WEBSITE:(0,i.Tl)("settings","Website")}),E=(Object.freeze({[g.ADDRESS]:p.ADDRESS,[g.AVATAR]:p.AVATAR,[g.BIOGRAPHY]:p.BIOGRAPHY,[g.DISPLAYNAME]:p.DISPLAYNAME,[g.EMAIL_COLLECTION]:p.EMAIL_COLLECTION,[g.EMAIL]:p.EMAIL,[g.HEADLINE]:p.HEADLINE,[g.ORGANISATION]:p.ORGANISATION,[g.PHONE]:p.PHONE,[g.PROFILE_ENABLED]:p.PROFILE_ENABLED,[g.ROLE]:p.ROLE,[g.TWITTER]:p.TWITTER,[g.FEDIVERSE]:p.FEDIVERSE,[g.WEBSITE]:p.WEBSITE}),Object.freeze({PROFILE_VISIBILITY:(0,i.Tl)("settings","Profile visibility")}),Object.freeze({[p.ADDRESS]:g.ADDRESS,[p.AVATAR]:g.AVATAR,[p.BIOGRAPHY]:g.BIOGRAPHY,[p.DISPLAYNAME]:g.DISPLAYNAME,[p.EMAIL_COLLECTION]:g.EMAIL_COLLECTION,[p.EMAIL]:g.EMAIL,[p.HEADLINE]:g.HEADLINE,[p.ORGANISATION]:g.ORGANISATION,[p.PHONE]:g.PHONE,[p.PROFILE_ENABLED]:g.PROFILE_ENABLED,[p.ROLE]:g.ROLE,[p.TWITTER]:g.TWITTER,[p.FEDIVERSE]:g.FEDIVERSE,[p.WEBSITE]:g.WEBSITE}),Object.freeze({LANGUAGE:"language",LOCALE:"locale"}),Object.freeze({LANGUAGE:(0,i.Tl)("settings","Language"),LOCALE:(0,i.Tl)("settings","Locale")}),Object.freeze({PRIVATE:"v2-private",LOCAL:"v2-local",FEDERATED:"v2-federated",PUBLISHED:"v2-published"}));Object.freeze({[p.ADDRESS]:[E.LOCAL,E.PRIVATE],[p.AVATAR]:[E.LOCAL,E.PRIVATE],[p.BIOGRAPHY]:[E.LOCAL,E.PRIVATE],[p.DISPLAYNAME]:[E.LOCAL],[p.EMAIL_COLLECTION]:[E.LOCAL],[p.EMAIL]:[E.LOCAL],[p.HEADLINE]:[E.LOCAL,E.PRIVATE],[p.ORGANISATION]:[E.LOCAL,E.PRIVATE],[p.PHONE]:[E.LOCAL,E.PRIVATE],[p.PROFILE_ENABLED]:[E.LOCAL,E.PRIVATE],[p.ROLE]:[E.LOCAL,E.PRIVATE],[p.TWITTER]:[E.LOCAL,E.PRIVATE],[p.FEDIVERSE]:[E.LOCAL,E.PRIVATE],[p.WEBSITE]:[E.LOCAL,E.PRIVATE]}),Object.freeze([p.BIOGRAPHY,p.HEADLINE,p.ORGANISATION,p.ROLE]),Object.freeze({[E.PRIVATE]:{name:E.PRIVATE,displayName:(0,i.Tl)("settings","Private"),tooltip:(0,i.Tl)("settings","Only visible to people matched via phone number integration through Talk on mobile"),tooltipDisabled:(0,i.Tl)("settings","Not available as this property is required for core functionality including file sharing and calendar invitations"),iconClass:"icon-phone"},[E.LOCAL]:{name:E.LOCAL,displayName:(0,i.Tl)("settings","Local"),tooltip:(0,i.Tl)("settings","Only visible to people on this instance and guests"),iconClass:"icon-password"},[E.FEDERATED]:{name:E.FEDERATED,displayName:(0,i.Tl)("settings","Federated"),tooltip:(0,i.Tl)("settings","Only synchronize to trusted servers"),tooltipDisabled:(0,i.Tl)("settings","Not available as federation has been disabled for your account, contact your system administrator if you have any questions"),iconClass:"icon-contacts-dark"},[E.PUBLISHED]:{name:E.PUBLISHED,displayName:(0,i.Tl)("settings","Published"),tooltip:(0,i.Tl)("settings","Synchronize to trusted servers and the global and public address book"),tooltipDisabled:(0,i.Tl)("settings","Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),iconClass:"icon-link"}}),E.LOCAL,Object.freeze({NOT_VERIFIED:0,VERIFICATION_IN_PROGRESS:1,VERIFIED:2});var b=o(32073);const v=(0,s.C)("settings","profileEnabledByDefault",!0),h={name:"ProfileSettings",components:{NcCheckboxRadioSwitch:b.A},data:()=>({initialProfileEnabledByDefault:v}),methods:{async onProfileDefaultChange(e){"boolean"==typeof e&&await this.updateProfileDefault(e)},async updateProfileDefault(e){try{var n;const t=await(async e=>{e=e?"1":"0";const t=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"settings",key:"profile_enabled_by_default"});return await(0,u.C)(),(await d.A.post(t,{value:e})).data})(e);this.handleResponse({isEnabled:e,status:null===(n=t.ocs)||void 0===n||null===(n=n.meta)||void 0===n?void 0:n.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update profile default setting"),error:e})}},handleResponse(e){let{isEnabled:t,status:n,errorMessage:o,error:r}=e;"ok"===n?this.initialProfileEnabledByDefault=t:((0,c.Qg)(o),l.error(o,r))}}};var m=o(14486);const f=(0,m.A)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"profile-settings"}},[t("h2",{staticClass:"inlineblock"},[e._v("\n\t\t"+e._s(e.t("settings","Profile"))+"\n\t")]),e._v(" "),t("p",{staticClass:"settings-hint"},[e._v("\n\t\t"+e._s(e.t("settings","Enable or disable profile by default for new users."))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.initialProfileEnabledByDefault},on:{"update:checked":[function(t){e.initialProfileEnabledByDefault=t},e.onProfileDefaultChange]}},[e._v("\n\t\t"+e._s(e.t("settings","Enable"))+"\n\t")])],1)}),[],!1,null,"5afdc030",null).exports;var T=o(88837),C=o(48934),I=o(51651),L=o(96763);const O=(0,s.C)("settings","lastCron"),R=(0,s.C)("settings","cronMaxAge",""),y=(0,s.C)("settings","backgroundJobsMode","cron"),N=(0,s.C)("settings","cliBasedCronPossible",!0),P=(0,s.C)("settings","cliBasedCronUser","www-data"),k=(0,s.C)("settings","backgroundJobsDocUrl"),S={name:"BackgroundJob",components:{NcCheckboxRadioSwitch:b.A,NcSettingsSection:T.A,NcNoteCard:C.A},data:()=>({lastCron:O,cronMaxAge:R,backgroundJobsMode:y,cliBasedCronPossible:N,cliBasedCronUser:P,backgroundJobsDocUrl:k,relativeTime:(0,I.A)(1e3*O).fromNow(),maxAgeRelativeTime:(0,I.A)(1e3*R).fromNow()}),computed:{cronLabel(){let e=t("settings","Use system cron service to call the cron.php file every 5 minutes.");return this.cliBasedCronPossible?e+="<br>"+t("settings",'The cron.php needs to be executed by the system user "{user}".',{user:this.cliBasedCronUser}):e+="<br>"+t("settings","The PHP POSIX extension is required. See {linkstart}PHP documentation{linkend} for more details.",{linkstart:'<a target="_blank" rel="noreferrer nofollow" class="external" href="https://www.php.net/manual/en/book.posix.php">',linkend:"</a>"},void 0,{escape:!1,sanitize:!1}),e},oldExecution(){return Date.now()/1e3-this.lastCron>600},longExecutionNotCron(){return Date.now()/1e3-this.cronMaxAge>43200&&"cron"!==this.backgroundJobsMode},longExecutionCron(){return Date.now()/1e3-this.cronMaxAge>86400&&"cron"===this.backgroundJobsMode}},methods:{async onBackgroundJobModeChanged(e){const n=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"backgroundjobs_mode"});await(0,u.C)();try{var o;const{data:t}=await d.A.post(n,{value:e});this.handleResponse({status:null===(o=t.ocs)||void 0===o||null===(o=o.meta)||void 0===o?void 0:o.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update background job mode"),error:e})}},async handleResponse(e){let{status:t,errorMessage:n,error:o}=e;"ok"===t?await this.deleteError():((0,c.Qg)(n),L.error(n,o))},async deleteError(){const e=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"cronErrors"});await(0,u.C)();try{await d.A.delete(e)}catch(e){L.error(e)}}}},D=S;var _=o(85072),w=o.n(_),x=o(97825),B=o.n(x),M=o(77659),j=o.n(M),V=o(55056),H=o.n(V),F=o(10540),J=o.n(F),G=o(41113),U=o.n(G),W=o(1410),Y={};Y.styleTagTransform=U(),Y.setAttributes=H(),Y.insert=j().bind(null,"head"),Y.domAPI=B(),Y.insertStyleElement=J(),w()(W.A,Y),W.A&&W.A.locals&&W.A.locals;const z=(0,m.A)(D,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Background jobs"),description:e.t("settings","For the server to work properly, it's important to configure background jobs correctly. Cron is the recommended setting. Please see the documentation for more information."),"doc-url":e.backgroundJobsDocUrl}},[0!==e.lastCron?[e.oldExecution?t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job execution ran {time}. Something seems wrong.",{time:e.relativeTime}))+"\n\t\t")]):e.longExecutionCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider increasing the execution frequency.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):e.longExecutionNotCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider switching to system cron.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):t("NcNoteCard",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job ran {relativeTime}.",{relativeTime:e.relativeTime}))+"\n\t\t")])]:t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t"+e._s(e.t("settings","Background job did not run yet!"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"ajaxSwitch",attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"ajax"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","AJAX"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","Execute one task with each page loaded. Use case: Single user instance.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"webcron"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Webcron"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","cron.php is registered at a webcron service to call cron.php every 5 minutes over HTTP. Use case: Very small instance (1–5 users depending on the usage).")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",disabled:!e.cliBasedCronPossible,checked:e.backgroundJobsMode,value:"cron",name:"backgroundJobsMode"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Cron (Recommended)"))+"\n\t")]),e._v(" "),t("em",{domProps:{innerHTML:e._s(e.cronLabel)}})],2)}),[],!1,null,"722418aa",null).exports;o.nc=btoa((0,a.do)());const q=(0,s.C)("settings","profileEnabledGlobally",!0);r.Ay.mixin({props:{logger:l},methods:{t:i.Tl}}),(new(r.Ay.extend(z))).$mount("#vue-admin-background-job"),q&&(new(r.Ay.extend(f))).$mount("#vue-admin-profile-settings")},1410:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(71354),r=n.n(o),a=n(76314),s=n.n(a)()(r());s.push([e.id,".error[data-v-722418aa]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-error);width:initial}.warning[data-v-722418aa]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-warning);width:initial}.ajaxSwitch[data-v-722418aa]{margin-top:1rem}","",{version:3,sources:["webpack://./apps/settings/src/components/BasicSettings/BackgroundJob.vue"],names:[],mappings:"AACA,wBACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,mCAAA,CACA,aAAA,CAED,0BACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,qCAAA,CACA,aAAA,CAED,6BACC,eAAA",sourcesContent:["\n.error {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-error);\n\twidth: initial;\n}\n.warning {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-warning);\n\twidth: initial;\n}\n.ajaxSwitch {\n\tmargin-top: 1rem;\n}\n"],sourceRoot:""}]);const i=s}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,e=[],s.O=(t,n,o,r)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+"-"+e+".js?v="+{1359:"08b2abcca7c808677f1a",8618:"1e8f15db3b14455fef8f"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="nextcloud:",s.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var A=c[d];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==o+r){i=A;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var u=(t,o)=>{i.onerror=i.onload=null,clearTimeout(g);var r=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(o))),t)return t(o)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.j=6282,(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s.b=document.baseURI||self.location.href;var e={6282:0};s.f.j=(t,n)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var a=s.p+s.u(t),i=new Error;s.l(a,(n=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,a=n[0],i=n[1],l=n[2],c=0;if(a.some((t=>0!==e[t]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var d=l(s)}for(t&&t(n);c<a.length;c++)r=a[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),s.nc=void 0;var i=s.O(void 0,[4208],(()=>s(93827)));i=s.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=3269ff0ae3896ad6dfce