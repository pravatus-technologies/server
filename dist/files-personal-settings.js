/*! For license information please see files-personal-settings.js.LICENSE.txt */
!function(){var e,r={70556:function(e,r,n){"use strict";var s,i=n(20144),o=n(22200),a=n(4820),l=n(20296),u=n.n(l),c=n(79753),f=n(26932),d=n(98266),p=n.n(d),h=n(10861),g=n.n(h),v=n(17499),m=null===(s=(0,o.getCurrentUser)())?(0,v.IY)().setApp("files").build():(0,v.IY)().setApp("files").setUid(s.uid).build();function b(e,t,r,n,s,i,o){try{var a=e[i](o),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(n,s)}var w=(0,f.fn)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setModal(!0).setType(1).allowDirectories().build(),A={name:"TransferOwnershipDialogue",components:{NcMultiselect:p(),NcButton:g()},data:function(){return{directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}},computed:{canSubmit:function(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions:function(){var e=this;return Object.keys(this.userSuggestions).map((function(t){var r=e.userSuggestions[t];return{user:r.uid,displayName:r.displayName,icon:"icon-user"}}))},submitButtonText:function(){if(!this.canSubmit)return t("files","Transfer");var e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory:function(){return this.directory?this.directory.substring(1):""}},created:function(){this.findUserDebounced=u()(this.findUser,300),this.findUser("")},methods:{start:function(){var e=this;this.directoryPickerError=void 0,w.pick().then((function(e){return""===e?"/":e})).then((function(r){if(m.debug("path ".concat(r," selected for transferring ownership")),!r.startsWith("/"))throw new Error(t("files","Invalid path selected"));e.directory=r})).catch((function(r){m.error("Selecting object for transfer aborted: ".concat(r.message||"Unknown error"),{error:r}),e.directoryPickerError=r.message||t("files","Unknown error")}))},findUser:function(e){var t,r=this;return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.query=e.trim(),!(e.length<r.config.minSearchStringLength)){t.next=3;break}return t.abrupt("return");case 3:return r.loadingUsers=!0,t.prev=4,t.next=7,a.default.get((0,c.generateOcsUrl)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:e,perPage:20,lookup:!1}});case 7:n=t.sent,r.userSuggestions={},n.data.ocs.data.exact.users.concat(n.data.ocs.data.users).forEach((function(e){i.ZP.set(r.userSuggestions,e.value.shareWith,{uid:e.value.shareWith,displayName:e.label})})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),m.error("could not fetch users",{error:t.t0});case 15:return t.prev=15,r.loadingUsers=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,12,15,18]])})),function(){var e=this,r=arguments;return new Promise((function(n,s){var i=t.apply(e,r);function o(e){b(i,n,s,o,a,"next",e)}function a(e){b(i,n,s,o,a,"throw",e)}o(void 0)}))})()},submit:function(){var e=this;this.canSubmit||m.warn("ignoring form submit"),this.submitError=void 0;var r={path:this.directory,recipient:this.selectedUser.user};m.debug("submit transfer ownership form",r);var n=(0,c.generateOcsUrl)("apps/files/api/v1/transferownership");a.default.post(n,r).then((function(e){return e.data})).then((function(r){m.info("Transfer ownership request sent",{data:r}),e.directory=void 0,e.selectedUser=null,(0,f.s$)(t("files","Ownership transfer request sent"))})).catch((function(r){var n;m.error("Could not send ownership transfer request",{error:r}),403===(null==r||null===(n=r.response)||void 0===n?void 0:n.status)?e.submitError=t("files","Cannot transfer ownership of a file or folder you do not own"):e.submitError=r.message||t("files","Unknown error")}))}}},y=A,C=n(93379),x=n.n(C),_=n(7795),U=n.n(_),S=n(90569),k=n.n(S),O=n(3565),T=n.n(O),E=n(19216),D=n.n(E),P=n(44589),j=n.n(P),B=n(31777),N={};N.styleTagTransform=j(),N.setAttributes=T(),N.insert=k().bind(null,"head"),N.domAPI=U(),N.insertStyleElement=D(),x()(B.Z,N),B.Z&&B.Z.locals&&B.Z.locals;var Z=n(51900),I=(0,Z.Z)(y,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.t("files","Transfer ownership of a file or folder"))+" ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[e._v(e._s(e.readableDirectory))]),e._v(" "),void 0===e.directory?t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Change"))+"\n\t\t\t")]),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.directoryPickerError))])],1),e._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[e._v(e._s(e.t("files","New owner")))])]),e._v(" "),t("NcMultiselect",{staticClass:"middle-align",attrs:{id:"targetUser",options:e.formatedUserSuggestions,multiple:!1,searchable:!0,placeholder:e.t("files","Search users"),"preselect-first":!0,"preserve-search":!0,loading:e.loadingUsers,"track-by":"user",label:"displayName","internal-search":!1,"clear-on-select":!1,"user-select":!0},on:{"search-change":e.findUserDebounced},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),e._v(" "),t("p",[t("input",{staticClass:"primary",attrs:{type:"submit",disabled:!e.canSubmit},domProps:{value:e.submitButtonText}}),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.submitError))])])])])}),[],!1,null,"0efa77f2",null),M={name:"PersonalSettings",components:{TransferOwnershipDialogue:I.exports}},q=(0,Z.Z)(M,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[e._v(e._s(e.t("files","Files")))]),e._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,o.getRequestToken)()),i.ZP.prototype.t=t,window.TESTING||(new(i.ZP.extend(q))).$mount("#files-personal-settings")},31777:function(e,t,r){"use strict";var n=r(87537),s=r.n(n),i=r(23645),o=r.n(i)()(s());o.push([e.id,".middle-align[data-v-0efa77f2]{vertical-align:middle}p[data-v-0efa77f2]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-0efa77f2]{display:flex}.new-owner-row label[data-v-0efa77f2]{display:flex;align-items:center}.new-owner-row label span[data-v-0efa77f2]{margin-right:8px}.new-owner-row .multiselect[data-v-0efa77f2]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-0efa77f2]{margin-right:8px}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA",sourcesContent:["\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n}\n"],sourceRoot:""}]),t.Z=o},83766:function(){}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=r,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=function(t,r,n,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=1623,function(){s.b=document.baseURI||self.location.href;var e={1623:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,o=r[0],a=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var c=l(s)}for(t&&t(r);u<o.length;u++)i=o[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),s.nc=void 0;var i=s.O(void 0,[7874],(function(){return s(70556)}));i=s.O(i)}();
//# sourceMappingURL=files-personal-settings.js.map?v=de6c49b0ef3b6f9d43fb