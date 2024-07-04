/*! For license information please see 9558-9558.js.LICENSE.txt */
"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[9558],{85099:(t,e,i)=>{i.d(e,{A:()=>o});var a=i(71354),n=i.n(a),r=i(76314),l=i.n(r)()(n());l.push([t.id,".template-picker__item[data-v-28c913b4]{display:flex}.template-picker__label[data-v-28c913b4]{display:flex;align-items:center;flex:1 1;flex-direction:column}.template-picker__label[data-v-28c913b4],.template-picker__label *[data-v-28c913b4]{cursor:pointer;user-select:none}.template-picker__label[data-v-28c913b4]::before{display:none !important}.template-picker__preview[data-v-28c913b4]{display:block;overflow:hidden;flex:1 1;width:var(--width);min-height:var(--height);max-height:var(--height);padding:0;border:var(--border) solid var(--color-border);border-radius:var(--border-radius-large)}input:checked+label>.template-picker__preview[data-v-28c913b4]{border-color:var(--color-primary-element)}.template-picker__preview--failed[data-v-28c913b4]{display:flex}.template-picker__image[data-v-28c913b4]{max-width:100%;background-color:var(--color-main-background);object-fit:cover}.template-picker__preview--failed .template-picker__image[data-v-28c913b4]{width:calc(var(--margin)*8);margin:auto;background-color:rgba(0,0,0,0) !important;object-fit:initial}.template-picker__title[data-v-28c913b4]{overflow:hidden;max-width:calc(var(--width) + 4px);padding:var(--margin);white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./apps/files/src/components/TemplatePreview.vue"],names:[],mappings:"AAGC,wCACC,YAAA,CAGD,yCACC,YAAA,CAEA,kBAAA,CACA,QAAA,CACA,qBAAA,CAEA,oFACC,cAAA,CACA,gBAAA,CAGD,iDACC,uBAAA,CAIF,2CACC,aAAA,CACA,eAAA,CAEA,QAAA,CACA,kBAAA,CACA,wBAAA,CACA,wBAAA,CACA,SAAA,CACA,8CAAA,CACA,wCAAA,CAEA,+DACC,yCAAA,CAGD,mDAEC,YAAA,CAIF,yCACC,cAAA,CACA,6CAAA,CAEA,gBAAA,CAID,2EACC,2BAAA,CAEA,WAAA,CACA,yCAAA,CAEA,kBAAA,CAGD,yCACC,eAAA,CAEA,kCAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["\n\n.template-picker {\n\t&__item {\n\t\tdisplay: flex;\n\t}\n\n\t&__label {\n\t\tdisplay: flex;\n\t\t// Align in the middle of the grid\n\t\talign-items: center;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\n\t\t&, * {\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t&::before {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t&__preview {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\t\t// Stretch so all entries are the same width\n\t\tflex: 1 1;\n\t\twidth: var(--width);\n\t\tmin-height: var(--height);\n\t\tmax-height: var(--height);\n\t\tpadding: 0;\n\t\tborder: var(--border) solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\tinput:checked + label > & {\n\t\t\tborder-color: var(--color-primary-element);\n\t\t}\n\n\t\t&--failed {\n\t\t\t// Make sure to properly center fallback icon\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__image {\n\t\tmax-width: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tobject-fit: cover;\n\t}\n\n\t// Failed preview, fallback to mime icon\n\t&__preview--failed &__image {\n\t\twidth: calc(var(--margin) * 8);\n\t\t// Center mime icon\n\t\tmargin: auto;\n\t\tbackground-color: transparent !important;\n\n\t\tobject-fit: initial;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\t// also count preview border\n\t\tmax-width: calc(var(--width) + 2*2px);\n\t\tpadding: var(--margin);\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n\n"],sourceRoot:""}]);const o=l},31519:(t,e,i)=>{i.d(e,{A:()=>o});var a=i(71354),n=i.n(a),r=i(76314),l=i.n(r)()(n());l.push([t.id,".templates-picker__form[data-v-1b34b376]{padding:calc(var(--margin)*2);padding-bottom:0}.templates-picker__form h2[data-v-1b34b376]{text-align:center;font-weight:bold;margin:var(--margin) 0 calc(var(--margin)*2)}.templates-picker__list[data-v-1b34b376]{display:grid;grid-gap:calc(var(--margin)*2);grid-auto-columns:1fr;max-width:calc(var(--fullwidth)*6);grid-template-columns:repeat(auto-fit, var(--fullwidth));grid-auto-rows:1fr;justify-content:center}.templates-picker__buttons[data-v-1b34b376]{display:flex;justify-content:end;padding:calc(var(--margin)*2) var(--margin);position:sticky;bottom:0;background-image:linear-gradient(0, var(--gradient-main-background))}.templates-picker__buttons button[data-v-1b34b376],.templates-picker__buttons input[type=submit][data-v-1b34b376]{height:44px}.templates-picker[data-v-1b34b376] .modal-container{position:relative}.templates-picker__loading[data-v-1b34b376]{position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;margin:0;background-color:var(--color-main-background-translucent)}","",{version:3,sources:["webpack://./apps/files/src/views/TemplatePicker.vue"],names:[],mappings:"AAEC,yCACC,6BAAA,CAEA,gBAAA,CAEA,4CACC,iBAAA,CACA,gBAAA,CACA,4CAAA,CAIF,yCACC,YAAA,CACA,8BAAA,CACA,qBAAA,CAEA,kCAAA,CACA,wDAAA,CAEA,kBAAA,CAEA,sBAAA,CAGD,4CACC,YAAA,CACA,mBAAA,CACA,2CAAA,CACA,eAAA,CACA,QAAA,CACA,oEAAA,CAEA,kHACC,WAAA,CAKF,oDACC,iBAAA,CAGD,4CACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,yDAAA",sourcesContent:["\n.templates-picker {\n\t&__form {\n\t\tpadding: calc(var(--margin) * 2);\n\t\t// Will be handled by the buttons\n\t\tpadding-bottom: 0;\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: var(--margin) 0 calc(var(--margin) * 2);\n\t\t}\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-gap: calc(var(--margin) * 2);\n\t\tgrid-auto-columns: 1fr;\n\t\t// We want maximum 5 columns. Putting 6 as we don't count the grid gap. So it will always be lower than 6\n\t\tmax-width: calc(var(--fullwidth) * 6);\n\t\tgrid-template-columns: repeat(auto-fit, var(--fullwidth));\n\t\t// Make sure all rows are the same height\n\t\tgrid-auto-rows: 1fr;\n\t\t// Center the columns set\n\t\tjustify-content: center;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: end;\n\t\tpadding: calc(var(--margin) * 2) var(--margin);\n\t\tposition: sticky;\n\t\tbottom: 0;\n\t\tbackground-image: linear-gradient(0, var(--gradient-main-background));\n\n\t\tbutton, input[type='submit'] {\n\t\t\theight: 44px;\n\t\t}\n\t}\n\n\t// Make sure we're relative for the loading emptycontent on top\n\t::v-deep .modal-container {\n\t\tposition: relative;\n\t}\n\n\t&__loading {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-main-background-translucent);\n\t}\n}\n\n"],sourceRoot:""}]);const o=l},69558:(t,e,i)=>{i.r(e),i.d(e,{default:()=>U});var a=i(21777),n=i(85168),r=i(61338),l=i(35810),o=i(53334),s=i(63814),c=i(43627),d=i(85471),A=i(26287),p=i(34196),m=i(34499),u=i(71089);const h=256,v={name:"TemplatePreview",inheritAttrs:!1,props:{basename:{type:String,required:!0},checked:{type:Boolean,default:!1},fileid:{type:[String,Number],required:!0},filename:{type:String,required:!0},previewUrl:{type:String,default:null},hasPreview:{type:Boolean,default:!0},mime:{type:String,required:!0},ratio:{type:Number,default:null}},data:()=>({failedPreview:!1}),computed:{nameWithoutExt(){return this.basename.indexOf(".")>-1?this.basename.split(".").slice(0,-1).join("."):this.basename},id(){return"template-picker-".concat(this.fileid)},realPreviewUrl(){return this.failedPreview&&this.mimeIcon?this.mimeIcon:this.previewUrl?this.previewUrl:(0,a.HW)()?(0,s.Jv)("/core/preview?fileId=".concat(this.fileid,"&x=").concat(h,"&y=").concat(h,"&a=1")):(0,s.Jv)("/apps/files_sharing/publicpreview/".concat(document.getElementById("sharingToken")&&document.getElementById("sharingToken").value,"?fileId=").concat(this.fileid,"&file=").concat((0,u.O0)(this.filename),"&x=").concat(h,"&y=").concat(h,"&a=1"))},mimeIcon(){return OC.MimeType.getIconUrl(this.mime)}},methods:{onCheck(){this.$emit("check",this.fileid)},onFailure(){this.failedPreview=!0}}};var C=i(85072),f=i.n(C),g=i(97825),b=i.n(g),w=i(77659),_=i.n(w),k=i(55056),y=i.n(k),x=i(10540),T=i.n(x),B=i(41113),E=i.n(B),P=i(85099),D={};D.styleTagTransform=E(),D.setAttributes=y(),D.insert=_().bind(null,"head"),D.domAPI=b(),D.insertStyleElement=T(),f()(P.A,D),P.A&&P.A.locals&&P.A.locals;var I=i(14486);const j=(0,I.A)(v,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"template-picker__item"},[e("input",{staticClass:"radio",attrs:{id:t.id,type:"radio",name:"template-picker"},domProps:{checked:t.checked},on:{change:t.onCheck}}),t._v(" "),e("label",{staticClass:"template-picker__label",attrs:{for:t.id}},[e("div",{staticClass:"template-picker__preview",class:t.failedPreview?"template-picker__preview--failed":""},[e("img",{staticClass:"template-picker__image",attrs:{src:t.realPreviewUrl,alt:"",draggable:"false"},on:{error:t.onFailure}})]),t._v(" "),e("span",{staticClass:"template-picker__title"},[t._v("\n\t\t\t"+t._s(t.nameWithoutExt)+"\n\t\t")])])])}),[],!1,null,"28c913b4",null).exports;var S=i(76150);const W=(0,d.pM)({name:"TemplatePicker",components:{NcEmptyContent:p.A,NcModal:m.A,TemplatePreview:j},props:{parent:{type:Object,default:()=>null}},data:()=>({checked:-1,loading:!1,name:null,opened:!1,provider:null}),computed:{extension(){var t;return(0,c.extname)(null!==(t=this.name)&&void 0!==t?t:"")},nameWithoutExt(){return this.extension?this.name.slice(0,0-this.extension.length):this.name},emptyTemplate(){var t,e;return{basename:(0,o.Tl)("files","Blank"),fileid:-1,filename:(0,o.Tl)("files","Blank"),hasPreview:!1,mime:(null===(t=this.provider)||void 0===t?void 0:t.mimetypes[0])||(null===(e=this.provider)||void 0===e?void 0:e.mimetypes)}},selectedTemplate(){return this.provider?this.provider.templates.find((t=>t.fileid===this.checked)):null},style(){if(!this.provider)return{};const t=(this.provider.ratio?this.provider.ratio:1.77)>1?240:160;return{"--margin":"8px","--width":t+"px","--border":"2px","--fullwidth":t+16+4+"px","--height":this.provider.ratio?Math.round(t/this.provider.ratio)+"px":null}}},methods:{t:o.Tl,async open(t,e){this.checked=this.emptyTemplate.fileid,this.name=t,this.provider=e;const i=(await async function(){return(await A.A.get((0,s.KT)("apps/files/api/v1/templates"))).data.ocs.data}()).find((t=>t.app===e.app&&t.label===e.label));if(null===i)throw new Error("Failed to match provider in results");this.provider=i,0!==i.templates.length?this.opened=!0:this.onSubmit()},close(){this.checked=this.emptyTemplate.fileid,this.loading=!1,this.name=null,this.opened=!1,this.provider=null},onCheck(t){this.checked=t},async onSubmit(){this.loading=!0;const t=new URL(window.location.href).searchParams.get("dir")||"/";var e,i,d;this.nameWithoutExt===this.name&&(S.A.warn("Fixed invalid filename",{name:this.name,extension:null===(e=this.provider)||void 0===e?void 0:e.extension}),this.name="".concat(this.name).concat(null!==(i=null===(d=this.provider)||void 0===d?void 0:d.extension)&&void 0!==i?i:""));try{var p,m,u,h,v,C,f,g;const e=await async function(t,e,i){return(await A.A.post((0,s.KT)("apps/files/api/v1/templates/create"),{filePath:t,templatePath:e,templateType:i})).data.ocs.data}((0,c.normalize)("".concat(t,"/").concat(this.name)),null!==(p=null===(m=this.selectedTemplate)||void 0===m?void 0:m.filename)&&void 0!==p?p:"",null!==(u=null===(h=this.selectedTemplate)||void 0===h?void 0:h.templateType)&&void 0!==u?u:"");S.A.debug("Created new file",e);const i=(null===(v=(0,a.HW)())||void 0===v?void 0:v.uid)||null,n=new l.ZH({id:e.fileid,source:(0,s.dC)((0,c.join)("dav/files/".concat(i),e.filename)),root:"/files/".concat(i),mime:e.mime,mtime:new Date(1e3*e.lastmod),owner:i,size:e.size,permissions:e.permissions,attributes:{"mount-type":null===(C=this.parent)||void 0===C||null===(C=C.attributes)||void 0===C?void 0:C["mount-type"],"owner-id":null===(f=this.parent)||void 0===f||null===(f=f.attributes)||void 0===f?void 0:f["owner-id"],"owner-display-name":null===(g=this.parent)||void 0===g||null===(g=g.attributes)||void 0===g?void 0:g["owner-display-name"],...e,"has-preview":e.hasPreview}});(0,r.Ic)("files:node:created",n),window.OCP.Files.Router.goToRoute(null,{view:"files",fileid:n.fileid},{dir:n.dirname,openfile:"true"}),this.close()}catch(t){S.A.error("Error while creating the new file from template",{error:t}),(0,n.Qg)((0,o.Tl)("files","Unable to create new file from template"))}finally{this.loading=!1}}}});var F=i(31519),M={};M.styleTagTransform=E(),M.setAttributes=y(),M.insert=_().bind(null,"head"),M.domAPI=b(),M.insertStyleElement=T(),f()(F.A,M),F.A&&F.A.locals&&F.A.locals;const U=(0,I.A)(W,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.opened?e("NcModal",{staticClass:"templates-picker",attrs:{"clear-view-delay":-1,size:"large"},on:{close:t.close}},[e("form",{staticClass:"templates-picker__form",style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit.apply(null,arguments)}}},[e("h2",[t._v(t._s(t.t("files","Pick a template for {name}",{name:t.nameWithoutExt})))]),t._v(" "),e("ul",{staticClass:"templates-picker__list"},[e("TemplatePreview",t._b({attrs:{checked:t.checked===t.emptyTemplate.fileid},on:{check:t.onCheck}},"TemplatePreview",t.emptyTemplate,!1)),t._v(" "),t._l(t.provider.templates,(function(i){return e("TemplatePreview",t._b({key:i.fileid,attrs:{checked:t.checked===i.fileid,ratio:t.provider.ratio},on:{check:t.onCheck}},"TemplatePreview",i,!1))}))],2),t._v(" "),e("div",{staticClass:"templates-picker__buttons"},[e("input",{staticClass:"primary",attrs:{type:"submit","aria-label":t.t("files","Create a new file with the selected template")},domProps:{value:t.t("files","Create")}})])]),t._v(" "),t.loading?e("NcEmptyContent",{staticClass:"templates-picker__loading",attrs:{icon:"icon-loading"}},[t._v("\n\t\t"+t._s(t.t("files","Creating file"))+"\n\t")]):t._e()],1):t._e()}),[],!1,null,"1b34b376",null).exports}}]);
//# sourceMappingURL=9558-9558.js.map?v=5df3ca5ddcc673b8817e