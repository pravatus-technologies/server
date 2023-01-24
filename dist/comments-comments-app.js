/*! For license information please see comments-comments-app.js.LICENSE.txt */
!function(){var n,e={89842:function(n,e,r){"use strict";var o=r(17499),s=r(9944),a=r(79753),i=r(22200),c=r(16453),u=r(4820),m=r(34741),l=r(20144),d=r(93455),p=r.n(d),f=r(10861),h=r.n(f),g=r(8466),v=r(63388),A=r(1252),C=r(80351),j=r.n(C),y=r(45400),b=r.n(y),_=r(12945),w=r.n(_),x=r(875),k=r.n(x),O=r(75925),D=r.n(O),R=r(12323),P=r.n(R),N=r(13408),E=r.n(N),I=r(45947),T={name:"Moment",props:{timestamp:{type:Number,required:!0},format:{type:String,default:"LLL"}},computed:{title:function(){return j().unix(this.timestamp).format(this.format)},formatted:function(){return j().unix(this.timestamp).fromNow()}}},S=r(51900),M=(0,S.Z)(T,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("span",{staticClass:"live-relative-timestamp",attrs:{"data-timestamp":1e3*n.timestamp,title:n.title}},[n._v(n._s(n.formatted))])}),[],!1,null,null,null).exports,z=function(){return(0,a.generateRemoteUrl)("dav/comments")};function B(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=new DOMParser,r=n,o=0;o<t;o++)r=e.parseFromString(r,"text/html").documentElement.textContent;return r}var q=r(81063);u.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",(0,q.getPatcher)().patch("request",u.default);var Z=(0,q.createClient)(z());function $(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function U(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){$(s,r,o,a,i,"next",n)}function i(n){$(s,r,o,a,i,"throw",n)}a(void 0)}))}}function L(n,t,e){return F.apply(this,arguments)}function F(){return(F=U(regeneratorRuntime.mark((function n(t,e,r){var o,s,a,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=["",t,e].join("/"),n.next=3,u.default.post(z()+o,{actorDisplayName:(0,i.getCurrentUser)().displayName,actorId:(0,i.getCurrentUser)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:r,objectType:"files",verb:"comment"});case 3:return s=n.sent,a=parseInt(s.headers["content-location"].split("/").pop()),c=o+"/"+a,n.next=8,Z.stat(c,{details:!0});case 8:return m=n.sent,(l=m.data.props).actorDisplayName=B(l.actorDisplayName,2),l.message=B(l.message,2),n.abrupt("return",m.data);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function G(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function H(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){G(s,r,o,a,i,"next",n)}function i(n){G(s,r,o,a,i,"throw",n)}a(void 0)}))}}function V(n,t,e){return W.apply(this,arguments)}function W(){return(W=H(regeneratorRuntime.mark((function n(t,e,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=["",t,e,r].join("/"),n.next=3,Z.deleteFile(o);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Q(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function X(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){Q(s,r,o,a,i,"next",n)}function i(n){Q(s,r,o,a,i,"throw",n)}a(void 0)}))}}function Y(n,t,e,r){return K.apply(this,arguments)}function K(){return(K=X(regeneratorRuntime.mark((function n(t,e,r,o){var s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=["",t,e,r].join("/"),n.next=3,Z.customRequest(s,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(o,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var J=r(26932);function nn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function tn(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){nn(s,r,o,a,i,"next",n)}function i(n){nn(s,r,o,a,i,"throw",n)}a(void 0)}))}}var en={props:{id:{type:Number,default:null},message:{type:String,default:""},ressourceId:{type:[String,Number],required:!0}},data:function(){return{deleted:!1,editing:!1,loading:!1}},methods:{onEdit:function(){this.editing=!0},onEditCancel:function(){this.editing=!1,this.updateLocalMessage(this.message)},onEditComment:function(n){var e=this;return tn(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.prev=1,r.next=4,Y(e.commentsType,e.ressourceId,e.id,n);case 4:e.logger.debug("Comment edited",{commentsType:e.commentsType,ressourceId:e.ressourceId,id:e.id,message:n}),e.$emit("update:message",n),e.editing=!1,r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),(0,J.x2)(t("comments","An error occurred while trying to edit the comment")),console.error(r.t0);case 13:return r.prev=13,e.loading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})))()},onDeleteWithUndo:function(){var n=this;this.deleted=!0;var e=setTimeout(this.onDelete,J.et);(0,J.yl)(t("comments","Comment deleted"),(function(){clearTimeout(e),n.deleted=!1}))},onDelete:function(){var n=this;return tn(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(n.commentsType,n.ressourceId,n.id);case 3:n.logger.debug("Comment deleted",{commentsType:n.commentsType,ressourceId:n.ressourceId,id:n.id}),n.$emit("delete",n.id),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),(0,J.x2)(t("comments","An error occurred while trying to delete the comment")),console.error(e.t0),n.deleted=!1;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onNewComment:function(n){var e=this;return tn(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.prev=1,r.next=4,L(e.commentsType,e.ressourceId,n);case 4:o=r.sent,e.logger.debug("New comment posted",{commentsType:e.commentsType,ressourceId:e.ressourceId,newComment:o}),e.$emit("new",o),e.$emit("update:message",""),e.localMessage="",r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),(0,J.x2)(t("comments","An error occurred while trying to create the comment")),console.error(r.t0);case 15:return r.prev=15,e.loading=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,11,15,18]])})))()}}},rn={name:"Comment",components:{NcActionButton:b(),NcActions:w(),NcActionSeparator:k(),ArrowRight:I.default,NcAvatar:D(),NcButton:h(),Moment:M,NcRichContenteditable:P()},mixins:[E(),en],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0}},data:function(){return{expanded:!1,localMessage:""}},computed:{isOwnComment:function(){return(0,i.getCurrentUser)().uid===this.actorId},renderedContent:function(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage:function(){return!this.localMessage||""===this.localMessage.trim()},timestamp:function(){return parseInt(j()(this.creationDateTime).format("x"),10)/1e3}},watch:{message:function(n){this.updateLocalMessage(n)}},beforeMount:function(){this.updateLocalMessage(this.message)},methods:{updateLocalMessage:function(n){this.localMessage=n.toString()},onSubmit:function(){var n=this;if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((function(){n.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand:function(){this.expanded=!0}}},on=r(93379),sn=r.n(on),an=r(7795),cn=r.n(an),un=r(90569),mn=r.n(un),ln=r(3565),dn=r.n(ln),pn=r(19216),fn=r.n(pn),hn=r(44589),gn=r.n(hn),vn=r(50423),An={};An.styleTagTransform=gn(),An.setAttributes=dn(),An.insert=mn().bind(null,"head"),An.domAPI=cn(),An.insertStyleElement=fn(),sn()(vn.Z,An),vn.Z&&vn.Z.locals&&vn.Z.locals;var Cn=(0,S.Z)(rn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:!n.deleted,expression:"!deleted"}],staticClass:"comment",class:{"comment--loading":n.loading}},[e("div",{staticClass:"comment__header"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":n.actorDisplayName,user:n.actorId,size:32}}),n._v(" "),e("span",{staticClass:"comment__author"},[n._v(n._s(n.actorDisplayName))]),n._v(" "),n.isOwnComment&&n.id&&!n.loading?e("NcActions",{staticClass:"comment__actions"},[n.editing?e("NcActionButton",{attrs:{icon:"icon-close"},on:{click:n.onEditCancel}},[n._v("\n\t\t\t\t"+n._s(n.t("comments","Cancel edit"))+"\n\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-rename"},on:{click:n.onEdit}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Edit comment"))+"\n\t\t\t\t")]),n._v(" "),e("NcActionSeparator"),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-delete"},on:{click:n.onDeleteWithUndo}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Delete comment"))+"\n\t\t\t\t")])]],2):n._e(),n._v(" "),n.id&&n.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):n.creationDateTime?e("Moment",{staticClass:"comment__timestamp",attrs:{timestamp:n.timestamp}}):n._e()],1),n._v(" "),n.editor||n.editing?e("div",{staticClass:"comment__editor"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":n.autoComplete,contenteditable:!n.loading,value:n.localMessage,"user-data":n.userData},on:{"update:value":n.updateLocalMessage,submit:n.onSubmit}}),n._v(" "),e("NcButton",{staticClass:"comment__submit",attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":n.t("comments","Post comment"),disabled:n.isEmptyMessage},on:{click:n.onSubmit},scopedSlots:n._u([{key:"icon",fn:function(){return[n.loading?e("span",{staticClass:"icon-loading-small"}):e("ArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,2357784758)})],1):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":n.expanded},domProps:{innerHTML:n._s(n.renderedContent)},on:{click:n.onExpand}})])}),[],!1,null,"4feb191a",null).exports,jn=r(7582),yn=r(18635);function bn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function _n(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?bn(Object(e),!0).forEach((function(t){wn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):bn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function wn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function xn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function kn(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){xn(s,r,o,a,i,"next",n)}function i(n){xn(s,r,o,a,i,"throw",n)}a(void 0)}))}}var On=20;function Dn(n){return Rn.apply(this,arguments)}function Rn(){return Rn=kn(regeneratorRuntime.mark((function n(t){var e,r,o,s,a,i=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commentsType,r=t.ressourceId,o=i.length>1&&void 0!==i[1]?i[1]:{},s=null,a=["",e,r].join("/"),n.next=6,Z.customRequest(a,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(On,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(o.offset||0,"</oc:offset>\n\t\t\t</oc:filter-comments>")},o)).then((function(n){return s=n,n.data})).then(jn.parseXML).then((function(n){return Pn(n,!0)})).then((function(n){return(0,yn.processResponsePayload)(s,n,!0)})).then((function(n){return n.data}));case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)}))),Rn.apply(this,arguments)}function Pn(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n.multistatus.response;return e.map((function(n){var e=n.propstat.prop,r=_n(_n({},e),{},{actorDisplayName:B(e.actorDisplayName,2),message:B(e.message,2)});return(0,jn.prepareFileFromProps)(r,r.id.toString(),t)}))}function Nn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var En=function(n){var t=u.default.CancelToken.source(),e=function(){var e,r=(e=regeneratorRuntime.mark((function e(r,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(r,Object.assign({cancelToken:t.token},o)));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(n){Nn(s,r,o,a,i,"next",n)}function i(n){Nn(s,r,o,a,i,"throw",n)}a(void 0)}))});return function(n,t){return r.apply(this,arguments)}}();return{request:e,cancel:t.cancel}};function In(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function Tn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function Sn(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){Tn(s,r,o,a,i,"next",n)}function i(n){Tn(s,r,o,a,i,"throw",n)}a(void 0)}))}}l.ZP.use(m.default);var Mn={name:"Comments",components:{Comment:Cn,NcEmptyContent:p(),NcButton:h(),RefreshIcon:g.Z,MessageReplyTextIcon:v.Z,AlertCircleOutlineIcon:A.default},data:function(){return{error:"",loading:!1,done:!1,ressourceId:null,offset:0,comments:[],cancelRequest:function(){},editorData:{actorDisplayName:(0,i.getCurrentUser)().displayName,actorId:(0,i.getCurrentUser)().uid,key:"editor"},Comment:Cn,userData:{}}},computed:{hasComments:function(){return this.comments.length>0},isFirstLoading:function(){return this.loading&&0===this.offset}},methods:{update:function(n){var t=this;return Sn(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ressourceId=n,t.resetState(),t.getComments();case 3:case"end":return e.stop()}}),e)})))()},onScrollBottomReached:function(){this.error||this.done||this.loading||this.getComments()},genMentionsData:function(n){var t=this;return Object.values(n).flat().forEach((function(n){t.userData[n.mentionId]={icon:"icon-user",id:n.mentionId,label:n.mentionDisplayName,source:"users",primary:(0,i.getCurrentUser)().uid===n.mentionId}})),this.userData},getComments:function(){var n=this;return Sn(regeneratorRuntime.mark((function e(){var r,o,s,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.cancelRequest("cancel"),e.prev=1,n.loading=!0,n.error="",o=En(Dn),s=o.request,a=o.cancel,n.cancelRequest=a,e.next=8,s({commentsType:n.commentsType,ressourceId:n.ressourceId},{offset:n.offset});case 8:i=e.sent,n.logger.debug("Processed ".concat(i.length," comments"),{comments:i}),i.length<On&&(n.done=!0),(r=n.comments).push.apply(r,function(n){if(Array.isArray(n))return In(n)}(c=i)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(c)||function(n,t){if(n){if("string"==typeof n)return In(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?In(n,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n.offset+=On,e.next=21;break;case 15:if(e.prev=15,e.t0=e.catch(1),"cancel"!==e.t0.message){e.next=19;break}return e.abrupt("return");case 19:n.error=t("comments","Unable to load the comments list"),console.error("Error loading the comments list",e.t0);case 21:return e.prev=21,n.loading=!1,e.finish(21);case 24:case"end":return e.stop()}var c}),e,null,[[1,15,21,24]])})))()},autoComplete:function(n,t){var e=this;return Sn(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.default.get((0,a.generateOcsUrl)("core/autocomplete/get"),{params:{search:n,itemType:"files",itemId:e.ressourceId,sorter:"commenters|share-recipients",limit:(0,c.loadState)("comments","maxAutoCompleteResults")}});case 2:return r.sent.data.ocs.data.forEach((function(n){e.userData[n.id]=n})),r.abrupt("return",t(Object.values(e.userData)));case 5:case"end":return r.stop()}}),r)})))()},onNewComment:function(n){this.comments.unshift(n)},onDelete:function(n){var t=this.comments.findIndex((function(t){return t.props.id===n}));t>-1?this.comments.splice(t,1):console.error("Could not find the deleted comment in the list",n)},resetState:function(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}},zn=r(85709),Bn={};Bn.styleTagTransform=gn(),Bn.setAttributes=dn(),Bn.insert=mn().bind(null,"head"),Bn.domAPI=cn(),Bn.insertStyleElement=fn(),sn()(zn.Z,Bn),zn.Z&&zn.Z.locals&&zn.Z.locals;var qn=(0,S.Z)(Mn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"comments",class:{"icon-loading":n.isFirstLoading}},[e("Comment",n._b({staticClass:"comments__writer",attrs:{"auto-complete":n.autoComplete,"user-data":n.userData,editor:!0,"ressource-id":n.ressourceId},on:{new:n.onNewComment}},"Comment",n.editorData,!1)),n._v(" "),n.isFirstLoading?n._e():[!n.hasComments&&n.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{title:n.t("comments","No comments yet, start the conversation!")},scopedSlots:n._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):n._l(n.comments,(function(t){return e("Comment",n._b({key:t.props.id,staticClass:"comments__list",attrs:{"auto-complete":n.autoComplete,message:t.props.message,"ressource-id":n.ressourceId,"user-data":n.genMentionsData(t.props.mentions)},on:{"update:message":function(e){return n.$set(t.props,"message",e)},delete:n.onDelete}},"Comment",t.props,!1))})),n._v(" "),n.loading&&!n.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):n.hasComments&&n.done?e("div",{staticClass:"comments__info"},[n._v("\n\t\t\t"+n._s(n.t("comments","No more messages"))+"\n\t\t")]):n.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{title:n.error},scopedSlots:n._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),n._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:n.getComments},scopedSlots:n._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[n._v("\n\t\t\t\t"+n._s(n.t("comments","Retry"))+"\n\t\t\t")])]:n._e()]],2)}),[],!1,null,"3311fcb9",null).exports;function Zn(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function $n(n,t,e){return t&&Zn(n.prototype,t),e&&Zn(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Un(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var Ln=(0,o.IY)().setApp("comments").detectUser().build();l.ZP.mixin({data:function(){return{logger:Ln}},methods:{t:s.translate,n:s.translatePlural}});var Fn=$n((function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",e=arguments.length>1?arguments[1]:void 0;Un(this,n),l.ZP.mixin({data:function(){return{commentsType:t}}});var r=l.ZP.extend(qn);return new r(e)}));window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:Fn}),console.debug("OCA.Comments.View initialized")},50423:function(n,t,e){"use strict";var r=e(87537),o=e.n(r),s=e(23645),a=e.n(s)()(o());a.push([n.id,".comment[data-v-4feb191a]{position:relative;padding:10px 0 15px}.comment__header[data-v-4feb191a]{display:flex;align-items:center;min-height:44px;padding:5px 0}.comment__author[data-v-4feb191a],.comment__actions[data-v-4feb191a]{margin-left:10px !important}.comment__author[data-v-4feb191a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-4feb191a],.comment__timestamp[data-v-4feb191a]{margin-left:auto;color:var(--color-text-maxcontrast)}.comment__editor[data-v-4feb191a],.comment__message[data-v-4feb191a]{position:relative;padding-left:42px}.comment__submit[data-v-4feb191a]{position:absolute !important;right:0;bottom:0;margin:1px}.comment__message[data-v-4feb191a]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden}.comment__message--expanded[data-v-4feb191a]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-4feb191a]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAmQA,0BACC,iBAAA,CACA,mBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CAGD,qEAEC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,mCAAA,CAGD,qEAEC,iBAAA,CAEA,iBAAA,CAGD,kCACC,4BAAA,CACA,OAAA,CACA,QAAA,CAEA,UAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA7DiB",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tposition: relative;\n\tpadding: $comment-padding 0 $comment-padding * 1.5;\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t\tpadding: math.div($comment-padding, 2) 0;\n\t}\n\n\t&__author,\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor,\n\t&__message {\n\t\tposition: relative;\n\t\t// Avatar size, align with author name\n\t\tpadding-left: 32px + $comment-padding;\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\t// Align with input border\n\t\tmargin: 1px;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]),t.Z=a},85709:function(n,t,e){"use strict";var r=e(87537),o=e.n(r),s=e(23645),a=e.n(s)()(o());a.push([n.id,".comments__empty[data-v-3311fcb9],.comments__error[data-v-3311fcb9]{margin-top:0 !important}.comments__retry[data-v-3311fcb9]{margin:0 auto}.comments__info[data-v-3311fcb9]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AA6SC,oEAEC,uBAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.comments {\n\t// Do not add emptycontent top margin\n\t&__empty,\n\t&__error {\n\t\tmargin-top: 0 !important;\n\t}\n\n\t&__retry {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]),t.Z=a},46700:function(n,t,e){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=s,n.exports=o,o.id=46700},83766:function(){},69862:function(){},40964:function(){}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var s=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},n=[],o.O=function(t,e,r,s){if(!e){var a=1/0;for(m=0;m<n.length;m++){e=n[m][0],r=n[m][1],s=n[m][2];for(var i=!0,c=0;c<e.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((function(n){return o.O[n](e[c])}))?e.splice(c--,1):(i=!1,s<a&&(a=s));if(i){n.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var m=n.length;m>0&&n[m-1][2]>s;m--)n[m]=n[m-1];n[m]=[e,r,s]},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,{a:t}),t},o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},o.j=6335,function(){o.b=document.baseURI||self.location.href;var n={6335:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,s,a=e[0],i=e[1],c=e[2],u=0;if(a.some((function(t){return 0!==n[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var m=c(o)}for(t&&t(e);u<a.length;u++)s=a[u],o.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return o.O(m)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),o.nc=void 0;var s=o.O(void 0,[7874],(function(){return o(89842)}));s=o.O(s)}();
//# sourceMappingURL=comments-comments-app.js.map?v=e8f9e83644b45122b5b1