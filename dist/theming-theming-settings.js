/*! For license information please see theming-theming-settings.js.LICENSE.txt */
!function(){var n,e={64371:function(n,e,r){"use strict";var a=r(20144),o=r(79753),i=r(16453),c=r(4820),s=r(20571),u=r.n(s),l=r(13299),d=r.n(l),g=function(n){return(0,o.generateFilePath)("theming","","img/background/")+n},h=function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=(null===(e=window.OCA)||void 0===e||null===(t=e.Theming)||void 0===t?void 0:t.enabledThemes)||[],c=0===i.length||"default"===i[0]?window.matchMedia("(prefers-color-scheme: dark)").matches:-1!==i.join("").indexOf("dark");return"default"===n?a&&"backgroundColor"!==a?(0,o.generateUrl)("/apps/theming/image/background")+"?v="+window.OCA.Theming.cacheBuster:g(c?"eduardo-neves-pedra-azul.jpg":"kamil-porembinski-clouds.jpg"):"custom"===n?(0,o.generateUrl)("/apps/theming/background")+"?v="+r:g(n)},m=r(20296),p=r.n(m),f=r(69867),A=r.n(f);function v(n,e,t,r,a,o,i){try{var c=n[o](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,a)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){v(o,r,a,i,c,"next",n)}function c(n){v(o,r,a,i,c,"throw",n)}i(void 0)}))}}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var C=(0,i.loadState)("theming","shippedBackgrounds"),y={name:"BackgroundSettings",components:{NcColorPicker:A()},props:{background:{type:String,default:"default"},themingDefaultBackground:{type:String,default:""}},data:function(){return{backgroundImage:(0,o.generateUrl)("/apps/theming/background")+"?v="+Date.now(),loading:!1,Theming:(0,i.loadState)("theming","data",{})}},computed:{shippedBackgrounds:function(){return Object.keys(C).map((function(n){return{name:n,url:g(n),preview:g("preview/"+n),details:C[n]}}))}},methods:{invertTextColor:function(n){return this.calculateLuma(n)>.6},calculateLuma:function(n){var e,t,r=(e=this.hexToRGB(n),t=3,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){c=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return(.2126*r[0]+.7152*r[1]+.0722*r[2])/255},hexToRGB:function(n){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null},update:function(n){var e=this;return b(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="custom"===n.type||"default"===n.type?n.type:n.value,e.backgroundImage=h(r,n.version,e.themingDefaultBackground),"color"!==n.type&&("default"!==n.type||"backgroundColor"!==e.themingDefaultBackground)){t.next=6;break}return e.$emit("update:background",n),e.loading=!1,t.abrupt("return");case 6:(a=new Image).onload=function(){e.$emit("update:background",n),e.loading=!1},a.src=e.backgroundImage;case 9:case"end":return t.stop()}}),t)})))()},setDefault:function(){var n=this;return b(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading="default",e.next=3,c.default.post((0,o.generateUrl)("/apps/theming/background/default"));case 3:t=e.sent,n.update(t.data);case 5:case"end":return e.stop()}}),e)})))()},setShipped:function(n){var e=this;return b(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=n,t.next=3,c.default.post((0,o.generateUrl)("/apps/theming/background/shipped"),{value:n});case 3:r=t.sent,e.update(r.data);case 5:case"end":return t.stop()}}),t)})))()},setFile:function(n){var e=this;return b(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading="custom",t.next=3,c.default.post((0,o.generateUrl)("/apps/theming/background/custom"),{value:n});case 3:r=t.sent,e.update(r.data);case 5:case"end":return t.stop()}}),t)})))()},debouncePickColor:p()((function(){this.pickColor.apply(this,arguments)}),200),pickColor:function(n){var e=this;return b(regeneratorRuntime.mark((function t(){var r,a,i,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading="color",s=(null==n||null===(r=n.target)||void 0===r||null===(a=r.dataset)||void 0===a?void 0:a.color)||(null===(i=e.Theming)||void 0===i?void 0:i.color)||"#0082c9",t.next=4,c.default.post((0,o.generateUrl)("/apps/theming/background/color"),{value:s});case 4:u=t.sent,e.update(u.data);case 6:case"end":return t.stop()}}),t)})))()},pickFile:function(){var n=this;window.OC.dialogs.filepicker(t("theming","Insert from {productName}",{productName:OC.theme.name}),(function(e,t){t===OC.dialogs.FILEPICKER_TYPE_CHOOSE&&n.setFile(e)}),!1,["image/png","image/gif","image/jpeg","image/svg"],!0,OC.dialogs.FILEPICKER_TYPE_CHOOSE)}}},w=y,_=r(93379),x=r.n(_),T=r(7795),S=r.n(T),B=r(90569),I=r.n(B),D=r(3565),E=r.n(D),O=r(19216),P=r.n(O),j=r(44589),R=r.n(j),U=r(3082),Z={};Z.styleTagTransform=R(),Z.setAttributes=E(),Z.insert=I().bind(null,"head"),Z.domAPI=S(),Z.insertStyleElement=P(),x()(U.Z,Z),U.Z&&U.Z.locals&&U.Z.locals;var q=r(51900),F=(0,q.Z)(w,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"background-selector"},[t("button",{staticClass:"background filepicker",class:{active:"custom"===n.background},attrs:{tabindex:"0"},on:{click:n.pickFile}},[n._v("\n\t\t"+n._s(n.t("theming","Pick from Files"))+"\n\t")]),n._v(" "),t("button",{staticClass:"background default",class:{"icon-loading":"default"===n.loading,active:"default"===n.background},attrs:{tabindex:"0"},on:{click:n.setDefault}},[n._v("\n\t\t"+n._s(n.t("theming","Default image"))+"\n\t")]),n._v(" "),t("NcColorPicker",{on:{input:n.debouncePickColor},model:{value:n.Theming.color,callback:function(e){n.$set(n.Theming,"color",e)},expression:"Theming.color"}},[t("button",{staticClass:"background color",class:{active:n.background===n.Theming.color},style:{backgroundColor:n.Theming.color,color:n.invertTextColor(n.Theming.color)?"#000000":"#ffffff"},attrs:{tabindex:"0","data-color":n.Theming.color,"data-color-bright":n.invertTextColor(n.Theming.color)}},[n._v("\n\t\t\t"+n._s(n.t("theming","Custom color"))+"\n\t\t")])]),n._v(" "),t("button",{staticClass:"background color",class:{active:n.background===n.Theming.defaultColor},style:{color:n.invertTextColor(n.Theming.defaultColor)?"#000000":"#ffffff"},attrs:{tabindex:"0","data-color":n.Theming.defaultColor,"data-color-bright":n.invertTextColor(n.Theming.defaultColor)},on:{click:n.debouncePickColor}},[n._v("\n\t\t"+n._s(n.t("theming","Plain background"))+"\n\t")]),n._v(" "),n._l(n.shippedBackgrounds,(function(e){return t("button",{key:e.name,staticClass:"background",class:{"icon-loading":n.loading===e.name,active:n.background===e.name},style:{"background-image":"url("+e.preview+")"},attrs:{title:e.details.attribution,"aria-label":e.details.attribution,tabindex:"0","data-color-bright":"dark"===e.details.theming},on:{click:function(t){return n.setShipped(e.name)}}})}))],2)}),[],!1,null,"55af1e2c",null).exports,L={name:"ItemPreview",components:{NcCheckboxRadioSwitch:u()},props:{enforced:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},theme:{type:Object,required:!0},type:{type:String,default:""},unique:{type:Boolean,default:!1}},computed:{switchType:function(){return this.unique?"switch":"radio"},name:function(){return this.unique?null:this.type},img:function(){return(0,o.generateFilePath)("theming","img",this.theme.id+".jpg")},checked:{get:function(){return this.selected},set:function(n){console.debug("Changed theme",this.theme.id,n),this.unique?this.$emit("change",{enabled:!0===n,id:this.theme.id}):this.$emit("change",{enabled:!0,id:this.theme.id})}}},methods:{onToggle:function(){"radio"!==this.switchType?this.checked=!this.checked:this.checked=!0}}},N=r(83005),$={};$.styleTagTransform=R(),$.setAttributes=E(),$.insert=I().bind(null,"head"),$.domAPI=S(),$.insertStyleElement=P(),x()(N.Z,$),N.Z&&N.Z.locals&&N.Z.locals;var G=(0,q.Z)(L,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"theming__preview",class:"theming__preview--"+n.theme.id},[t("div",{staticClass:"theming__preview-image",style:{backgroundImage:"url("+n.img+")"},on:{click:n.onToggle}}),n._v(" "),t("div",{staticClass:"theming__preview-description"},[t("h3",[n._v(n._s(n.theme.title))]),n._v(" "),t("p",[n._v(n._s(n.theme.description))]),n._v(" "),n.enforced?t("span",{staticClass:"theming__preview-warning",attrs:{role:"note"}},[n._v("\n\t\t\t"+n._s(n.t("theming","Theme selection is enforced"))+"\n\t\t")]):n._e(),n._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:n.checked,disabled:n.enforced,name:n.name,type:n.switchType},on:{"update:checked":function(e){n.checked=e}}},[n._v("\n\t\t\t"+n._s(n.theme.enableLabel)+"\n\t\t")])],1)])}),[],!1,null,"37ca8ab2",null).exports;function K(n){return function(n){if(Array.isArray(n))return W(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return W(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function M(n,e,t,r,a,o,i){try{var c=n[o](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,a)}function z(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){M(o,r,a,i,c,"next",n)}function c(n){M(o,r,a,i,c,"throw",n)}i(void 0)}))}}var Y=(0,i.loadState)("theming","themes",[]),H=(0,i.loadState)("theming","enforceTheme",""),Q=(0,i.loadState)("theming","shortcutsDisabled",!1),V=(0,i.loadState)("theming","background"),J=(0,i.loadState)("theming","themingDefaultBackground"),X=(0,i.loadState)("theming","isUserThemingDisabled");console.debug("Available themes",Y);var nn={name:"UserThemes",components:{ItemPreview:G,NcCheckboxRadioSwitch:u(),NcSettingsSection:d(),BackgroundSettings:F},data:function(){return{availableThemes:Y,enforceTheme:H,shortcutsDisabled:Q,background:V,themingDefaultBackground:J,isUserThemingDisabled:X}},computed:{themes:function(){return this.availableThemes.filter((function(n){return 1===n.type}))},fonts:function(){return this.availableThemes.filter((function(n){return 2===n.type}))},selectedTheme:function(){return this.themes.find((function(n){return!0===n.enabled}))||this.themes[0]},description:function(){return t("theming","Universal access is very important to us. We follow web standards and check to make everything usable also without mouse, and assistive software such as screenreaders. We aim to be compliant with the {guidelines}Web Content Accessibility Guidelines{linkend} 2.1 on AA level, with the high contrast theme even on AAA level.").replace("{guidelines}",this.guidelinesLink).replace("{linkend}","</a>")},guidelinesLink:function(){return'<a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer nofollow">'},descriptionDetail:function(){return t("theming","If you find any issues, do not hesitate to report them on {issuetracker}our issue tracker{linkend}. And if you want to get involved, come join {designteam}our design team{linkend}!").replace("{issuetracker}",this.issuetrackerLink).replace("{designteam}",this.designteamLink).replace(/\{linkend\}/g,"</a>")},issuetrackerLink:function(){return'<a target="_blank" href="https://github.com/nextcloud/server/issues/" rel="noreferrer nofollow">'},designteamLink:function(){return'<a target="_blank" href="https://nextcloud.com/design" rel="noreferrer nofollow">'}},watch:{shortcutsDisabled:function(n){this.changeShortcutsDisabled(n)}},methods:{updateBackground:function(n){this.background="custom"===n.type||"default"===n.type?n.type:n.value,this.$emit("update:background")},changeTheme:function(n){var e=n.enabled,t=n.id;this.themes.forEach((function(n){n.id===t&&e?n.enabled=!0:n.enabled=!1})),this.updateBodyAttributes(),this.selectItem(e,t)},changeFont:function(n){var e=n.enabled,t=n.id;this.fonts.forEach((function(n){n.id===t&&e?n.enabled=!0:n.enabled=!1})),this.updateBodyAttributes(),this.selectItem(e,t)},changeShortcutsDisabled:function(n){return z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,(0,c.default)({url:(0,o.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),data:{configValue:"yes"},method:"POST"});case 3:e.next=7;break;case 5:return e.next=7,(0,c.default)({url:(0,o.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),method:"DELETE"});case 7:case"end":return e.stop()}}),e)})))()},updateBodyAttributes:function(){var n=this.themes.filter((function(n){return!0===n.enabled})).map((function(n){return n.id})),e=this.fonts.filter((function(n){return!0===n.enabled})).map((function(n){return n.id}));this.themes.forEach((function(n){document.body.toggleAttribute("data-theme-".concat(n.id),n.enabled)})),this.fonts.forEach((function(n){document.body.toggleAttribute("data-theme-".concat(n.id),n.enabled)})),document.body.setAttribute("data-themes",[].concat(K(n),K(e)).join(","))},selectItem:function(n,e){return z(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!n){r.next=6;break}return r.next=4,(0,c.default)({url:(0,o.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}/enable",{themeId:e}),method:"PUT"});case 4:r.next=8;break;case 6:return r.next=8,(0,c.default)({url:(0,o.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}",{themeId:e}),method:"DELETE"});case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.error(r.t0,r.t0.response),OC.Notification.showTemporary(t("theming",r.t0.response.data.ocs.meta.message+". Unable to apply the setting."));case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},en=r(7078),tn={};tn.styleTagTransform=R(),tn.setAttributes=E(),tn.insert=I().bind(null,"head"),tn.domAPI=S(),tn.insertStyleElement=P(),x()(en.Z,tn),en.Z&&en.Z.locals&&en.Z.locals;var rn=(0,q.Z)(nn,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("NcSettingsSection",{staticClass:"theming",attrs:{title:n.t("theming","Appearance and accessibility"),"limit-width":!1}},[t("p",{domProps:{innerHTML:n._s(n.description)}}),n._v(" "),t("p",{domProps:{innerHTML:n._s(n.descriptionDetail)}}),n._v(" "),t("div",{staticClass:"theming__preview-list"},n._l(n.themes,(function(e){return t("ItemPreview",{key:e.id,attrs:{enforced:e.id===n.enforceTheme,selected:n.selectedTheme.id===e.id,theme:e,unique:1===n.themes.length,type:"theme"},on:{change:n.changeTheme}})})),1),n._v(" "),t("div",{staticClass:"theming__preview-list"},n._l(n.fonts,(function(e){return t("ItemPreview",{key:e.id,attrs:{selected:e.enabled,theme:e,unique:1===n.fonts.length,type:"font"},on:{change:n.changeFont}})})),1)]),n._v(" "),t("NcSettingsSection",{attrs:{title:n.t("theming","Keyboard shortcuts")}},[t("p",[n._v(n._s(n.t("theming","In some cases keyboard shortcuts can interfer with accessibility tools. In order to allow focusing on your tool correctly you can disable all keyboard shortcuts here. This will also disable all available shortcuts in apps.")))]),n._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:n.shortcutsDisabled,name:"shortcuts_disabled",type:"switch"},on:{"update:checked":function(e){n.shortcutsDisabled=e},change:n.changeShortcutsDisabled}},[n._v("\n\t\t\t"+n._s(n.t("theming","Disable all keyboard shortcuts"))+"\n\t\t")])],1),n._v(" "),t("NcSettingsSection",{staticClass:"background",attrs:{title:n.t("theming","Background")}},[n.isUserThemingDisabled?[t("p",[n._v(n._s(n.t("theming","Customization has been disabled by your administrator")))])]:[t("p",[n._v(n._s(n.t("theming","Set a custom background")))]),n._v(" "),t("BackgroundSettings",{staticClass:"background__grid",attrs:{background:n.background,"theming-default-background":n.themingDefaultBackground},on:{"update:background":n.updateBackground}})]],2)],1)}),[],!1,null,"17c07ad6",null).exports;function an(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}a.ZP.prototype.OC=OC,a.ZP.prototype.t=t;var on=new(a.ZP.extend(rn));on.$mount("#theming"),on.$on("update:background",(function(){var n;(n=document.head.querySelectorAll("link.theme"),function(n){if(Array.isArray(n))return an(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return an(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?an(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(n){var e=new URL(n.href);e.searchParams.set("v",Date.now());var t=n.cloneNode();t.href=e.toString(),t.onload=function(){return n.remove()},document.head.append(t)}))}))},7078:function(n,e,t){"use strict";var r=t(87537),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([n.id,".theming p[data-v-17c07ad6]{max-width:800px}.theming[data-v-17c07ad6] a{font-weight:bold}.theming[data-v-17c07ad6] a:hover,.theming[data-v-17c07ad6] a:focus{text-decoration:underline}.theming__preview-list[data-v-17c07ad6]{--gap: 30px;display:grid;margin-top:var(--gap);column-gap:var(--gap);row-gap:var(--gap);grid-template-columns:1fr 1fr}.background__grid[data-v-17c07ad6]{margin-top:30px}@media(max-width: 1440px){.theming__preview-list[data-v-17c07ad6]{display:flex;flex-direction:column}}","",{version:3,sources:["webpack://./apps/theming/src/UserThemes.vue"],names:[],mappings:"AAsRC,4BACC,eAAA,CAID,4BACC,gBAAA,CAEA,oEAEC,yBAAA,CAIF,wCACC,WAAA,CAEA,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,kBAAA,CACA,6BAAA,CAKD,mCACC,eAAA,CAIF,0BACC,wCACC,YAAA,CACA,qBAAA,CAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.theming {\n\t// Limit width of settings sections for readability\n\tp {\n\t\tmax-width: 800px;\n\t}\n\n\t// Proper highlight for links and focus feedback\n\t&::v-deep a {\n\t\tfont-weight: bold;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n\n\t&__preview-list {\n\t\t--gap: 30px;\n\n\t\tdisplay: grid;\n\t\tmargin-top: var(--gap);\n\t\tcolumn-gap: var(--gap);\n\t\trow-gap: var(--gap);\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n}\n\n.background {\n\t&__grid {\n\t\tmargin-top: 30px;\n\t}\n}\n\n@media (max-width: 1440px) {\n\t.theming__preview-list {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},3082:function(n,e,t){"use strict";var r=t(87537),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([n.id,'.background-selector[data-v-55af1e2c]{display:flex;flex-wrap:wrap;justify-content:center}.background-selector .background[data-v-55af1e2c]{width:176px;height:96px;margin:8px;background-size:cover;background-position:center center;text-align:center;border-radius:var(--border-radius-large);border:2px solid var(--color-main-background);overflow:hidden}.background-selector .background.current[data-v-55af1e2c]{background-image:var(--color-background-dark)}.background-selector .background.filepicker[data-v-55af1e2c],.background-selector .background.default[data-v-55af1e2c],.background-selector .background.color[data-v-55af1e2c]{border-color:var(--color-border)}.background-selector .background.color[data-v-55af1e2c]{background-color:var(--color-primary-default);color:var(--color-primary-text)}.background-selector .background.active[data-v-55af1e2c],.background-selector .background[data-v-55af1e2c]:hover,.background-selector .background[data-v-55af1e2c]:focus{border:2px solid var(--color-primary)}.background-selector .background.active[data-v-55af1e2c]:not(.icon-loading):after{background-image:var(--original-icon-checkmark-white);background-repeat:no-repeat;background-position:center;background-size:44px;content:"";display:block;height:100%}.background-selector .background.active:not(.icon-loading)[data-color-bright][data-v-55af1e2c]:after{background-image:var(--original-icon-checkmark-dark)}',"",{version:3,sources:["webpack://./apps/theming/src/components/BackgroundSettings.vue"],names:[],mappings:"AA0NA,sCACC,YAAA,CACA,cAAA,CACA,sBAAA,CAEA,kDACC,WAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,iCAAA,CACA,iBAAA,CACA,wCAAA,CACA,6CAAA,CACA,eAAA,CAEA,0DACC,6CAAA,CAGD,+KACC,gCAAA,CAGD,wDACC,6CAAA,CACA,+BAAA,CAGD,yKAGC,qCAAA,CAIA,kFACC,qDAAA,CACA,2BAAA,CACA,0BAAA,CACA,oBAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CAGD,qGACC,oDAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.background-selector {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\n\t.background {\n\t\twidth: 176px;\n\t\theight: 96px;\n\t\tmargin: 8px;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\ttext-align: center;\n\t\tborder-radius: var(--border-radius-large);\n\t\tborder: 2px solid var(--color-main-background);\n\t\toverflow: hidden;\n\n\t\t&.current {\n\t\t\tbackground-image: var(--color-background-dark);\n\t\t}\n\n\t\t&.filepicker, &.default, &.color {\n\t\t\tborder-color: var(--color-border);\n\t\t}\n\n\t\t&.color {\n\t\t\tbackground-color: var(--color-primary-default);\n\t\t\tcolor: var(--color-primary-text);\n\t\t}\n\n\t\t&.active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tborder: 2px solid var(--color-primary);\n\t\t}\n\n\t\t&.active:not(.icon-loading) {\n\t\t\t&:after {\n\t\t\t\tbackground-image: var(--original-icon-checkmark-white);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-size: 44px;\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t&[data-color-bright]:after {\n\t\t\t\tbackground-image: var(--original-icon-checkmark-dark);\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},83005:function(n,e,t){"use strict";var r=t(87537),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([n.id,".theming__preview[data-v-37ca8ab2]{--ratio: 16;position:relative;display:flex;justify-content:flex-start;max-width:800px}.theming__preview[data-v-37ca8ab2],.theming__preview *[data-v-37ca8ab2]{user-select:none}.theming__preview-image[data-v-37ca8ab2]{flex-basis:calc(16px*var(--ratio));flex-shrink:0;height:calc(10px*var(--ratio));margin-right:var(--gap);cursor:pointer;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:top left;background-size:cover}.theming__preview-description[data-v-37ca8ab2]{display:flex;flex-direction:column}.theming__preview-description label[data-v-37ca8ab2]{padding:12px 0}.theming__preview--default[data-v-37ca8ab2]{grid-column:span 2}.theming__preview-warning[data-v-37ca8ab2]{color:var(--color-warning)}@media(max-width: 682.6666666667px){.theming__preview[data-v-37ca8ab2]{flex-direction:column}.theming__preview-image[data-v-37ca8ab2]{margin:0}}","",{version:3,sources:["webpack://./apps/theming/src/components/ItemPreview.vue"],names:[],mappings:"AAiGA,mCAEC,WAAA,CAEA,iBAAA,CACA,YAAA,CACA,0BAAA,CACA,eAAA,CAEA,wEAEC,gBAAA,CAGD,yCACC,kCAAA,CACA,aAAA,CACA,8BAAA,CACA,uBAAA,CACA,cAAA,CACA,kCAAA,CACA,2BAAA,CACA,4BAAA,CACA,qBAAA,CAGD,+CACC,YAAA,CACA,qBAAA,CAEA,qDACC,cAAA,CAIF,4CACC,kBAAA,CAGD,2CACC,0BAAA,CAIF,oCACC,mCACC,qBAAA,CAEA,yCACC,QAAA,CAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.theming__preview {\n\t// We make previews on 16/10 screens\n\t--ratio: 16;\n\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tmax-width: 800px;\n\n\t&,\n\t* {\n\t\tuser-select: none;\n\t}\n\n\t&-image {\n\t\tflex-basis: calc(16px * var(--ratio));\n\t\tflex-shrink: 0;\n\t\theight: calc(10px * var(--ratio));\n\t\tmargin-right: var(--gap);\n\t\tcursor: pointer;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: top left;\n\t\tbackground-size: cover;\n\t}\n\n\t&-description {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tlabel {\n\t\t\tpadding: 12px 0;\n\t\t}\n\t}\n\n\t&--default {\n\t\tgrid-column: span 2;\n\t}\n\n\t&-warning {\n\t\tcolor: var(--color-warning);\n\t}\n}\n\n@media (max-width: (1024px / 1.5)) {\n\t.theming__preview {\n\t\tflex-direction: column;\n\n\t\t&-image {\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),e.Z=i},83766:function(){}},r={};function a(n){var t=r[n];if(void 0!==t)return t.exports;var o=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},n=[],a.O=function(e,t,r,o){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],r=n[l][1],o=n[l][2];for(var c=!0,s=0;s<t.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(n){return a.O[n](t[s])}))?t.splice(s--,1):(c=!1,o<i&&(i=o));if(c){n.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[t,r,o]},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,{a:e}),e},a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},a.j=6755,function(){a.b=document.baseURI||self.location.href;var n={6755:0};a.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,o,i=t[0],c=t[1],s=t[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var l=s(a)}for(e&&e(t);u<i.length;u++)o=i[u],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(l)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),a.nc=void 0;var o=a.O(void 0,[7874],(function(){return a(64371)}));o=a.O(o)}();
//# sourceMappingURL=theming-theming-settings.js.map?v=fdd169d4a9c3982c67d7