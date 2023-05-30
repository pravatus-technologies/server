/*! For license information please see files_versions-files_versions.js.LICENSE.txt */
!function(){var e,n={227:function(e,n,r){"use strict";var o=r(20144),s=r(31352),i=r(64024),a=r(45994),l=r(81063),c=r(79753),u=r(4820);(0,l.getPatcher)().patch("request",u.default);var f=(0,c.generateRemoteUrl)("dav"),d=(0,l.createClient)(f),v='<?xml version="1.0"?>\n<d:propfind xmlns:d="DAV:"\n\txmlns:oc="http://owncloud.org/ns"\n\txmlns:nc="http://nextcloud.org/ns"\n\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t\t<nc:version-label />\n\t</d:prop>\n</d:propfind>',p=(0,r(17499).IY)().setApp("files_version").detectUser().build(),m=r(65358),h=r(80351),b=r.n(h);function j(e,t,n,r,o,s,i){try{var a=e[s](i),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){j(s,r,o,i,a,"next",e)}function a(e){j(s,r,o,i,a,"throw",e)}i(void 0)}))}}function y(e){return g.apply(this,arguments)}function g(){return(g=A(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/versions/".concat(null===(n=(0,a.ts)())||void 0===n?void 0:n.uid,"/versions/").concat(t.id),e.prev=1,e.next=4,d.getDirectoryContents(r,{data:v,details:!0});case 4:return o=e.sent,e.abrupt("return",o.data.filter((function(e){return""!==e.mime})).map((function(e){return C(e,t)})));case 8:throw e.prev=8,e.t0=e.catch(1),p.error("Could not fetch version",{exception:e.t0}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=A(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.debug("Restoring version",{url:t.url}),e.next=4,d.moveFile("/versions/".concat(null===(n=(0,a.ts)())||void 0===n?void 0:n.uid,"/versions/").concat(t.fileId,"/").concat(t.fileVersion),"/versions/".concat(null===(r=(0,a.ts)())||void 0===r?void 0:r.uid,"/restore/target"));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),p.error("Could not restore version",{exception:e.t0}),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function C(e,t){return{fileId:t.id,label:e.props["version-label"],fileName:e.filename,mimeType:e.mime,size:e.size,type:e.type,mtime:1e3*b()(e.lastmod).unix(),preview:(0,c.generateUrl)("/apps/files_versions/preview?file={file}&version={fileVersion}",{file:(0,m.RQ)(t.path,t.name),fileVersion:e.basename}),url:(0,m.RQ)("/remote.php/dav",e.filename),fileVersion:e.basename}}function w(e,t){return k.apply(this,arguments)}function k(){return(k=A(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.customRequest(t.fileName,{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:"\n\t\t\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t\t<d:set>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<nc:version-label>'.concat(n,"</nc:version-label>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:set>\n\t\t\t\t\t</d:propertyupdate>")});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return O.apply(this,arguments)}function O(){return(O=A(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.deleteFile(t.fileName);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=r(88722),R=r(41293),z=r(73229),S=r(80419),L=r(57612),P=r(24860),N=r(15961),D=r(79954),B={name:"Version",components:{NcActionLink:N.ih,NcActionButton:N.Js,NcListItem:N.hx,NcModal:N.Jc,NcButton:N.P2,NcTextField:N.h3,BackupRestore:I.Z,Download:R.Z,Pencil:z.default,Check:S.default,Delete:L.Z,ImageOffOutline:P.Z},directives:{tooltip:N.u},filters:{humanReadableSize:function(e){return OC.Util.humanFileSize(e)},humanDateFromNow:function(e){return b()(e).fromNow()}},props:{version:{type:Object,required:!0},fileInfo:{type:Object,required:!0},isCurrent:{type:Boolean,default:!1},isFirstVersion:{type:Boolean,default:!1}},data:function(){return{showVersionLabelForm:!1,formVersionLabelValue:this.version.label,capabilities:(0,D.j)("core","capabilities",{files:{version_labeling:!1,version_deletion:!1}}),previewError:!1}},computed:{versionLabel:function(){var e,t=null!==(e=this.version.label)&&void 0!==e?e:"";return this.isCurrent?""===t?(0,s.Iu)("files_versions","Current version"):"".concat(t," (").concat((0,s.Iu)("files_versions","Current version"),")"):this.isFirstVersion&&""===t?(0,s.Iu)("files_versions","Initial version"):t},downloadURL:function(){return this.isCurrent?(0,m.RQ)("/remote.php/webdav",this.fileInfo.path,this.fileInfo.name):this.version.url},previewURL:function(){return this.isCurrent?(0,c.generateUrl)("/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0",{fileId:this.fileInfo.id,fileEtag:this.fileInfo.etag}):this.version.preview},formattedDate:function(){return b()(this.version.mtime).format("LLL")}},methods:{openVersionLabelModal:function(){var e=this;this.showVersionLabelForm=!0,this.$nextTick((function(){e.$refs.labelInput.$el.getElementsByTagName("input")[0].focus()}))},restoreVersion:function(){this.$emit("restore",this.version)},setVersionLabel:function(e){this.formVersionLabelValue=e,this.showVersionLabelForm=!1,this.$emit("label-update",this.version,e)},deleteVersion:function(){this.$emit("delete",this.version)}}},F=r(93379),E=r.n(F),U=r(7795),T=r.n(U),Z=r(90569),M=r.n(Z),$=r(3565),q=r.n($),Y=r(19216),G=r.n(Y),Q=r(44589),J=r.n(Q),H=r(77547),W={};W.styleTagTransform=J(),W.setAttributes=q(),W.insert=M().bind(null,"head"),W.domAPI=T(),W.insertStyleElement=G(),E()(H.Z,W),H.Z&&H.Z.locals&&H.Z.locals;var K=r(51900);function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==X(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===X(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t,n,r,o,s,i){try{var a=e[s](i),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,o)}function oe(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){re(s,r,o,i,a,"next",e)}function a(e){re(s,r,o,i,a,"throw",e)}i(void 0)}))}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie={name:"VersionTab",components:{Version:(0,K.Z)(B,(function(){var e=this,t=e._self._c;return t("div",[t("NcListItem",{staticClass:"version",attrs:{title:e.versionLabel,href:e.downloadURL,"force-display-actions":!0,"data-files-versions-version":""},scopedSlots:e._u([{key:"icon",fn:function(){return[e.previewError?t("div",{staticClass:"version__image"},[t("ImageOffOutline",{attrs:{size:20}})],1):t("img",{staticClass:"version__image",attrs:{src:e.previewURL,alt:""},on:{error:function(t){e.previewError=!0}}})]},proxy:!0},{key:"subtitle",fn:function(){return[t("div",{staticClass:"version__info"},[t("span",{attrs:{title:e.formattedDate}},[e._v(e._s(e._f("humanDateFromNow")(e.version.mtime)))]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v("•")]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v(e._s(e._f("humanReadableSize")(e.version.size)))])])]},proxy:!0},{key:"actions",fn:function(){return[!0===e.capabilities.files.version_labeling?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.openVersionLabelModal},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil",{attrs:{size:22}})]},proxy:!0}],null,!1,3072546167)},[e._v("\n\t\t\t\t"+e._s(""===e.version.label?e.t("files_versions","Name this version"):e.t("files_versions","Edit version name"))+"\n\t\t\t")]):e._e(),e._v(" "),e.isCurrent?e._e():t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.restoreVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("BackupRestore",{attrs:{size:22}})]},proxy:!0}],null,!1,2239038444)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Restore version"))+"\n\t\t\t")]),e._v(" "),t("NcActionLink",{attrs:{href:e.downloadURL,"close-after-click":!0,download:e.downloadURL},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Download",{attrs:{size:22}})]},proxy:!0}])},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Download version"))+"\n\t\t\t")]),e._v(" "),e.isCurrent||!0!==e.capabilities.files.version_deletion?e._e():t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.deleteVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Delete",{attrs:{size:22}})]},proxy:!0}],null,!1,2429175571)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Delete version"))+"\n\t\t\t")])]},proxy:!0}])}),e._v(" "),e.showVersionLabelForm?t("NcModal",{attrs:{title:e.t("files_versions","Name this version")},on:{close:function(t){e.showVersionLabelForm=!1}}},[t("form",{staticClass:"version-label-modal",on:{submit:function(t){return t.preventDefault(),e.setVersionLabel(e.formVersionLabelValue)}}},[t("label",[t("div",{staticClass:"version-label-modal__title"},[e._v(e._s(e.t("photos","Version name")))]),e._v(" "),t("NcTextField",{ref:"labelInput",attrs:{value:e.formVersionLabelValue,placeholder:e.t("photos","Version name"),"label-outside":!0},on:{"update:value":function(t){e.formVersionLabelValue=t}}})],1),e._v(" "),t("div",{staticClass:"version-label-modal__info"},[e._v("\n\t\t\t\t"+e._s(e.t("photos","Named versions are persisted, and excluded from automatic cleanups when your storage quota is full."))+"\n\t\t\t")]),e._v(" "),t("div",{staticClass:"version-label-modal__actions"},[t("NcButton",{attrs:{disabled:0===e.formVersionLabelValue.trim().length},on:{click:function(t){return e.setVersionLabel("")}}},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Remove version name"))+"\n\t\t\t\t")]),e._v(" "),t("NcButton",{attrs:{type:"primary","native-type":"submit"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check")]},proxy:!0}],null,!1,2308323205)},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Save version name"))+"\n\t\t\t\t")])],1)])]):e._e()],1)}),[],!1,null,"58449c80",null).exports},data:function(){return{fileInfo:null,versions:[],loading:!1}},computed:{orderedVersions:function(){var e,t=this;return(e=this.versions,function(e){if(Array.isArray(e))return se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(e,n){return e.mtime===t.fileInfo.mtime?-1:n.mtime===t.fileInfo.mtime?1:n.mtime-e.mtime}))},initialVersionMtime:function(){return this.versions.map((function(e){return e.mtime})).reduce((function(e,t){return Math.min(e,t)}))}},methods:{update:function(e){var t=this;return oe(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.fileInfo=e,t.resetState(),t.fetchVersions();case 3:case"end":return n.stop()}}),n)})))()},fetchVersions:function(){var e=this;return oe(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,y(e.fileInfo);case 4:e.versions=t.sent;case 5:return t.prev=5,e.loading=!1,t.finish(5);case 8:case"end":return t.stop()}}),t,null,[[0,,5,8]])})))()},handleRestore:function(e){var n=this;return oe(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=n.fileInfo,n.fileInfo=te(te({},n.fileInfo),{},{size:e.size,mtime:e.mtime}),r.prev=2,r.next=5,_(e);case 5:return""!==e.label?(0,i.s$)(t("files_versions","".concat(e.label," restored"))):e.mtime===n.initialVersionMtime?(0,i.s$)(t("files_versions","Initial version restored")):(0,i.s$)(t("files_versions","Version restored")),r.next=8,n.fetchVersions();case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(2),n.fileInfo=o,(0,i.x2)(t("files_versions","Could not restore version"));case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},handleLabelUpdate:function(e,n){return oe(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.label,e.label=n,r.prev=2,r.next=5,w(e,n);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r.catch(2),e.label=o,(0,i.x2)(t("files_versions","Could not set version name"));case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},handleDelete:function(e){var n=this;return oe(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=n.versions.indexOf(e),n.versions.splice(o,1),r.prev=2,r.next=5,V(e);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r.catch(2),n.versions.push(e),(0,i.x2)(t("files_versions","Could not delete version"));case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},resetState:function(){this.$set(this,"versions",[])}}},ae=(0,K.Z)(ie,(function(){var e=this,t=e._self._c;return t("ul",{attrs:{"data-files-versions-versions-list":""}},e._l(e.orderedVersions,(function(n){return t("Version",{key:n.mtime,attrs:{version:n,"file-info":e.fileInfo,"is-current":n.mtime===e.fileInfo.mtime,"is-first-version":n.mtime===e.initialVersionMtime},on:{restore:e.handleRestore,"label-update":e.handleLabelUpdate,delete:e.handleDelete}})})),1)}),[],!1,null,null,null).exports,le=r(61361),ce=r(27608);function ue(e,t,n,r,o,s,i){try{var a=e[s](i),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,o)}o.ZP.prototype.t=s.Iu,o.ZP.prototype.n=s.uN,o.ZP.use(le.default);var fe=o.ZP.extend(ae),de=null;window.addEventListener("DOMContentLoaded",(function(){var e;void 0!==(null===(e=OCA.Files)||void 0===e?void 0:e.Sidebar)&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"version_vue",name:(0,s.Iu)("files_versions","Versions"),iconSvg:ce,mount:function(e,t,n){return(r=regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return de&&de.$destroy(),de=new fe({parent:n}),r.next=4,de.update(t);case 4:de.$mount(e);case 5:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,o){var s=r.apply(e,t);function i(e){ue(s,n,o,i,a,"next",e)}function a(e){ue(s,n,o,i,a,"throw",e)}i(void 0)}))})();var r},update:function(e){de.update(e)},destroy:function(){de.$destroy(),de=null},enabled:function(e){var t;return!(null===(t=null==e?void 0:e.isDirectory())||void 0===t||t)}}))}))},77547:function(e,t,n){"use strict";var r=n(87537),o=n.n(r),s=n(23645),i=n.n(s)()(o());i.push([e.id,".version[data-v-58449c80]{display:flex;flex-direction:row}.version__info[data-v-58449c80]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.version__info__size[data-v-58449c80]{color:var(--color-text-lighter)}.version__image[data-v-58449c80]{width:3rem;height:3rem;border:1px solid var(--color-border);border-radius:var(--border-radius-large);display:flex;justify-content:center;color:var(--color-text-light)}.version-label-modal[data-v-58449c80]{display:flex;justify-content:space-between;flex-direction:column;height:250px;padding:16px}.version-label-modal__title[data-v-58449c80]{margin-bottom:12px;font-weight:600}.version-label-modal__info[data-v-58449c80]{margin-top:12px;color:var(--color-text-maxcontrast)}.version-label-modal__actions[data-v-58449c80]{display:flex;justify-content:space-between;margin-top:64px}","",{version:3,sources:["webpack://./apps/files_versions/src/components/Version.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,kBAAA,CAEA,gCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,SAAA,CAEA,sCACC,+BAAA,CAIF,iCACC,UAAA,CACA,WAAA,CACA,oCAAA,CACA,wCAAA,CAGA,YAAA,CACA,sBAAA,CACA,6BAAA,CAIF,sCACC,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,YAAA,CACA,YAAA,CAEA,6CACC,kBAAA,CACA,eAAA,CAGD,4CACC,eAAA,CACA,mCAAA,CAGD,+CACC,YAAA,CACA,6BAAA,CACA,eAAA",sourcesContent:["\n.version {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\t&__info {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 0.5rem;\n\n\t\t&__size {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n\t&__image {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t\tborder: 1px solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t// Useful to display no preview icon.\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tcolor: var(--color-text-light);\n\t}\n}\n\n.version-label-modal {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\theight: 250px;\n\tpadding: 16px;\n\n\t&__title {\n\t\tmargin-bottom: 12px;\n\t\tfont-weight: 600;\n\t}\n\n\t&__info {\n\t\tmargin-top: 12px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 64px;\n\t}\n}\n"],sourceRoot:""}]),t.Z=i},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=46700},69862:function(){},40964:function(){}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=n,e=[],o.O=function(t,n,r,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.j=1358,function(){o.b=document.baseURI||self.location.href;var e={1358:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],a=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var u=l(o)}for(t&&t(n);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.nc=void 0;var s=o.O(void 0,[7874],(function(){return o(227)}));s=o.O(s)}();
//# sourceMappingURL=files_versions-files_versions.js.map?v=7c0bd0a4ae160c08ff6f