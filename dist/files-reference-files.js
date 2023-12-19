/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,t,i,n={1774:(e,t,i)=>{var n=i(20144),r=i(31352),a=(i(13372),i(29612)),l=i(79753),o=i(62520),s=i.n(o),c=i(25108);const d={name:"ReferenceFileWidget",props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0}},data(){return{previewUrl:window.OC.MimeType.getIconUrl(this.richObject.mimetype)}},computed:{fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return s().dirname(this.richObject.path)},filePreview(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{backgroundImage:"url("+window.OC.MimeType.getIconUrl(this.richObject.mimetype)+")"}},filePreviewClass(){return this.previewUrl?"widget-file--image--preview":"widget-file--image--icon"}},mounted(){if(this.richObject["preview-available"]){const e=(0,l.generateUrl)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{c.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(){OCA.Viewer&&-1!==OCA.Viewer.mimetypes.indexOf(this.richObject.mimetype)?OCA.Viewer.open({path:this.richObject.path}):window.location=this.richObject.link}}};var A=i(93379),g=i.n(A),p=i(7795),u=i.n(p),f=i(90569),C=i.n(f),m=i(3565),v=i.n(m),h=i(19216),w=i.n(h),b=i(44589),y=i.n(b),I=i(27357),j={};j.styleTagTransform=y(),j.setAttributes=v(),j.insert=C().bind(null,"head"),j.domAPI=u(),j.insertStyleElement=w(),g()(I.Z,j),I.Z&&I.Z.locals&&I.Z.locals;var x=i(51900);const M=(0,x.Z)(d,(function(){var e=this,t=e._self._c;return e.accessible?t("a",{staticClass:"widget-file",attrs:{href:e.richObject.link},on:{click:function(t){return t.preventDefault(),e.navigate.apply(null,arguments)}}},[t("div",{staticClass:"widget-file--image",class:e.filePreviewClass,style:e.filePreview}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file--link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("div",{staticClass:"widget-file--image widget-file--image--icon icon-folder"}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v("\n\t\t\t"+e._s(e.t("files","You might not have have permissions to view it, ask the sender to share it"))+"\n\t\t")])])])}),[],!1,null,"3f729da0",null).exports;var O=i(90923);const S=(0,n.defineComponent)({name:"FileReferencePickerElement",components:{FilePicker:O.FilePickerVue},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},computed:{containerId:()=>`filepicker-${Math.random().toString(36).slice(7)}`,filepickerOptions(){return{allowPickDirectory:!1,buttons:this.buttonFactory,container:`#${this.containerId}`,multiselect:!1,name:(0,r.Iu)("files","Select file or folder to link to")}}},methods:{t:r.Iu,buttonFactory(e){const t=[];return 0===e.length?t.push({label:(0,r.Iu)("files","Choose file"),type:"tertiary",callback:this.onClose}):t.push({label:(0,r.Iu)("files","Choose {file}",{file:e[0].basename}),type:"primary",callback:this.onClose}),t},onClose(e){void 0===e||0===e.length?this.$emit("cancel"):this.onSubmit(e[0])},onSubmit(e){const t=new URL(window.location.href);t.pathname=(0,l.generateUrl)("/f/{fileId}",{fileId:e.fileid}),t.search="",this.$emit("submit",t.href)}}}),k=(0,x.Z)(S,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{attrs:{id:e.containerId}},[t("FilePicker",e._b({on:{close:e.onClose}},"FilePicker",e.filepickerOptions,!1))],1)}),[],!1,null,null,null).exports;n.default.mixin({methods:{t:r.Iu}}),(0,a.r)("file",((e,t)=>{let{richObjectType:i,richObject:r,accessible:a}=t;new(n.default.extend(M))({propsData:{richObjectType:i,richObject:r,accessible:a}}).$mount(e)})),(0,a.f)("files",((e,t)=>{let{providerId:i,accessible:r}=t;const l=new(n.default.extend(k))({propsData:{providerId:i,accessible:r}}).$mount(e);return new a.e(l.$el,l)}),((e,t)=>{t.object.$destroy()}))},27357:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(87537),r=i.n(n),a=i(23645),l=i.n(a)()(r());l.push([e.id,".widget-file[data-v-3f729da0]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important}.widget-file--image[data-v-3f729da0]{min-width:40%;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file--image.widget-file--image--icon[data-v-3f729da0]{min-width:88px;background-size:44px}.widget-file--title[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file--details[data-v-3f729da0]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file--details p[data-v-3f729da0]{margin:0;padding:0}.widget-file--description[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-3f729da0]{color:var(--color-text-maxcontrast)}.widget-file.widget-file--no-access[data-v-3f729da0]{padding:12px}.widget-file.widget-file--no-access .widget-file--details[data-v-3f729da0]{padding:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CAEA,qCACC,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,8DACC,cAAA,CACA,oBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAGD,oCACC,mCAAA,CAGD,qDACC,YAAA,CAEA,2EACC,SAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\n\t&--image {\n\t\tmin-width: 40%;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&.widget-file--image--icon {\n\t\t\tmin-width: 88px;\n\t\t\tbackground-size: 44px;\n\t\t}\n\t}\n\n\t&--title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&--details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&--description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&.widget-file--no-access {\n\t\tpadding: 12px;\n\n\t\t.widget-file--details {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const o=l},42761:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="},90923:(e,t,i)=>{i.d(t,{FilePickerVue:()=>n});const n=(0,i(20144).defineAsyncComponent)((()=>Promise.all([i.e(7874),i.e(8321)]).then(i.bind(i,94542))))}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=n,e=[],a.O=(t,i,n,r)=>{if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],r=e[d][2];for(var o=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](i[s])))?i.splice(s--,1):(o=!1,r<l&&(l=r));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v=fff558785bdb7fddced6",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},i="nextcloud:",a.l=(e,n,r,l)=>{if(t[e])t[e].push(n);else{var o,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var A=c[d];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==i+r){o=A;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",i+r),o.src=e),t[e]=[n];var g=(i,n)=>{o.onerror=o.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),i)return i(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),s&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9098,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9098:0,923:0};a.f.j=(t,i)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var l=a.p+a.u(t),o=new Error;a.l(l,(i=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",o.name="ChunkLoadError",o.type=r,o.request=l,n[1](o)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,l=i[0],o=i[1],s=i[2],c=0;if(l.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var d=s(a)}for(t&&t(i);c<l.length;c++)r=l[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),a.nc=void 0;var l=a.O(void 0,[7874],(()=>a(1774)));l=a.O(l)})();
//# sourceMappingURL=files-reference-files.js.map?v=c245cc9d34622c684b57