/*! For license information please see files_sharing-init.js.LICENSE.txt */
(()=>{"use strict";var e,t,i,n={67597:(e,t,i)=>{var n=i(78791),r=i(53334);const s='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-account-group" viewBox="0 0 24 24"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" /></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-account-plus" viewBox="0 0 24 24"><path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" /></svg>',o='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-link" viewBox="0 0 24 24"><path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" /></svg>';var l=i(63814),d=i(21777),h=i(65043),u=i(53529);const c=(0,u.YK)().setApp("files_sharing").detectUser().build();var p;const v="/files/".concat(null===(p=(0,d.HW)())||void 0===p?void 0:p.uid),g={"Content-Type":"application/json"},m=async function(e){try{var t;if(void 0!==(null==e?void 0:e.remote_id)){const t=(await i.e(857).then(i.bind(i,10857))).default;e.mimetype=t.getType(e.name),e.item_type=e.mimetype?"file":"folder",e.item_permissions=n.aX.NONE,e.permissions=n.aX.NONE,e.uid_owner=e.owner,e.displayname_owner=e.owner}const r="folder"===(null==e?void 0:e.item_type),s=!0===(null==e?void 0:e.has_preview),a=r?n.vd:n.ZH,o=e.file_source||e.id,d=(null==e?void 0:e.path)||e.file_target||e.name,h=(0,l.dC)("dav/".concat(v,"/").concat(d).replaceAll(/\/\//gm,"/"));let u=null!=e&&e.item_mtime?new Date(1e3*e.item_mtime):void 0;return(null==e?void 0:e.stime)>((null==e?void 0:e.item_mtime)||0)&&(u=new Date(1e3*e.stime)),new a({id:o,source:h,owner:null==e?void 0:e.uid_owner,mime:(null==e?void 0:e.mimetype)||"application/octet-stream",mtime:u,size:null==e?void 0:e.item_size,permissions:(null==e?void 0:e.item_permissions)||(null==e?void 0:e.permissions),root:v,attributes:{...e,"has-preview":s,"owner-id":null==e?void 0:e.uid_owner,"owner-display-name":null==e?void 0:e.displayname_owner,"share-types":null==e?void 0:e.share_type,favorite:null!=e&&null!==(t=e.tags)&&void 0!==t&&t.includes(window.OC.TAG_FAVORITE)?1:0}})}catch(e){return c.error("Error while parsing OCS entry",{error:e}),null}},w=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=(0,l.KT)("apps/files_sharing/api/v1/shares");return h.Ay.get(t,{headers:g,params:{shared_with_me:e,include_tags:!0}})},f=async function(){var e;let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];const a=[];(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&a.push(w(!0),function(){const e=(0,l.KT)("apps/files_sharing/api/v1/remote_shares");return h.Ay.get(e,{headers:g,params:{include_tags:!0}})}()),t&&a.push(w()),i&&a.push(function(){const e=(0,l.KT)("apps/files_sharing/api/v1/shares/pending");return h.Ay.get(e,{headers:g,params:{include_tags:!0}})}(),function(){const e=(0,l.KT)("apps/files_sharing/api/v1/remote_shares/pending");return h.Ay.get(e,{headers:g,params:{include_tags:!0}})}()),r&&a.push(function(){const e=(0,l.KT)("apps/files_sharing/api/v1/deletedshares");return h.Ay.get(e,{headers:g,params:{include_tags:!0}})}());const o=(await Promise.all(a)).map((e=>e.data.ocs.data)).flat();let u=(await Promise.all(o.map(m))).filter((e=>null!==e));var c,p;return s.length>0&&(u=u.filter((e=>{var t;return s.includes(null===(t=e.attributes)||void 0===t?void 0:t.share_type)}))),u=(c=u,p="source",Object.values(c.reduce((function(e,t){return(e[t[p]]=e[t[p]]||[]).push(t),e}),{}))).map((e=>{const t=e[0];return t.attributes["share-types"]=e.map((e=>e.attributes["share-types"])),t})),{folder:new n.vd({id:0,source:(0,l.dC)("dav"+v),owner:(null===(e=(0,d.HW)())||void 0===e?void 0:e.uid)||null}),contents:u}},y="shareoverview",A="sharingin",_="sharingout",b="sharinglinks",C="deletedshares",T="pendingshares";var x=i(61338),S=i(65659);const H=new n.hY({id:"accept-share",displayName:e=>(0,r.zw)("files_sharing","Accept share","Accept shares",e.length),iconSvgInline:()=>S,enabled:(e,t)=>e.length>0&&t.id===T,async exec(e){try{const t=!!e.attributes.remote,i=(0,l.KT)("apps/files_sharing/api/v1/{shareBase}/pending/{id}",{shareBase:t?"remote_shares":"shares",id:e.attributes.id});return await h.Ay.post(i),(0,x.Ic)("files:node:deleted",e),!0}catch(e){return!1}},async execBatch(e,t,i){return Promise.all(e.map((e=>this.exec(e,t,i))))},order:1,inline:()=>!0});(0,n.Gg)(H);const E=new n.hY({id:"open-in-files",displayName:()=>(0,r.Tl)("files","Open in Files"),iconSvgInline:()=>"",enabled:(e,t)=>[y,A,_,b].includes(t.id),async exec(e){const t=e.type===n.pt.Folder;return window.OCP.Files.Router.goToRoute(null,{view:"files",fileid:String(e.fileid)},{dir:t?e.path:e.dirname,openfile:t?void 0:"true"}),null},order:-1e3,default:n.m9.HIDDEN});(0,n.Gg)(E);const O=new n.hY({id:"reject-share",displayName:e=>(0,r.zw)("files_sharing","Reject share","Reject shares",e.length),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-close" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',enabled:(e,t)=>t.id===T&&0!==e.length&&!e.some((e=>e.attributes.remote_id&&e.attributes.share_type===window.OC.Share.SHARE_TYPE_REMOTE_GROUP)),async exec(e){try{const t=!!e.attributes.remote,i=(0,l.KT)("apps/files_sharing/api/v1/{shareBase}/{id}",{shareBase:t?"remote_shares":"shares",id:e.attributes.id});return await h.Ay.delete(i),(0,x.Ic)("files:node:deleted",e),!0}catch(e){return!1}},async execBatch(e,t,i){return Promise.all(e.map((e=>this.exec(e,t,i))))},order:2,inline:()=>!0});(0,n.Gg)(O);const L=new n.hY({id:"restore-share",displayName:e=>(0,r.zw)("files_sharing","Restore share","Restore shares",e.length),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-arrow-u-left-top" viewBox="0 0 24 24"><path d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" /></svg>',enabled:(e,t)=>e.length>0&&t.id===C,async exec(e){try{const t=(0,l.KT)("apps/files_sharing/api/v1/deletedshares/{id}",{id:e.attributes.id});return await h.Ay.post(t),(0,x.Ic)("files:node:deleted",e),!0}catch(e){return!1}},async execBatch(e,t,i){return Promise.all(e.map((e=>this.exec(e,t,i))))},order:1,inline:()=>!0});(0,n.Gg)(L);var N=i(77905),P=i(49981);const R=(0,u.YK)().setApp("files").detectUser().build(),M=new n.hY({id:"details",displayName:()=>(0,r.Tl)("files","Open details"),iconSvgInline:()=>P,enabled:e=>{var t,i,r;return 1===e.length&&!!e[0]&&!(null===(t=window)||void 0===t||null===(t=t.OCA)||void 0===t||null===(t=t.Files)||void 0===t||!t.Sidebar)&&null!==(i=(null===(r=e[0].root)||void 0===r?void 0:r.startsWith("/files/"))&&e[0].permissions!==n.aX.NONE)&&void 0!==i&&i},async exec(e,t,i){try{return await window.OCA.Files.Sidebar.open(e.path),window.OCP.Files.Router.goToRoute(null,{view:t.id,fileid:e.fileid},{...window.OCP.Files.Router.query,dir:i},!0),null}catch(e){return R.error("Error while opening sidebar",{error:e}),!1}},order:-50});var V,k,B=i(85072),I=i.n(B),Y=i(97825),j=i.n(Y),F=i(77659),G=i.n(F),Z=i(55056),U=i.n(Z),K=i(10540),z=i.n(K),D=i(41113),W=i.n(D),q=i(8132),X={};X.styleTagTransform=W(),X.setAttributes=U(),X.insert=G().bind(null,"head"),X.domAPI=j(),X.insertStyleElement=z(),I()(q.A,X),q.A&&q.A.locals&&q.A.locals;const J=!0===(null===(V=window)||void 0===V||null===(k=V.matchMedia)||void 0===k||null===(k=k.call(V,"(prefers-color-scheme: dark)"))||void 0===k?void 0:k.matches)||null!==document.querySelector("[data-themes*=dark]"),$=e=>void 0!==e.attributes.remote_id,Q=new n.hY({id:"sharing-status",displayName(e){var t,i,n;const s=e[0],a=Object.values((null==s||null===(t=s.attributes)||void 0===t?void 0:t["share-types"])||{}).flat(),o=null==s||null===(i=s.attributes)||void 0===i?void 0:i["owner-id"];return a.length>0||o!==(null===(n=(0,d.HW)())||void 0===n?void 0:n.uid)||$(s)?(0,r.Tl)("files_sharing","Shared"):""},title(e){var t,i,n,s,a;const o=e[0],l=null==o||null===(t=o.attributes)||void 0===t?void 0:t["owner-id"],h=null==o||null===(i=o.attributes)||void 0===i?void 0:i["owner-display-name"];return Array.isArray(null===(n=o.attributes)||void 0===n?void 0:n["share-types"])&&(null===(s=o.attributes)||void 0===s?void 0:s["share-types"].length)>1?(0,r.Tl)("files_sharing","Shared multiple times with different people"):l&&(l!==(null===(a=(0,d.HW)())||void 0===a?void 0:a.uid)||$(o))?(0,r.Tl)("files_sharing","Shared by {ownerDisplayName}",{ownerDisplayName:h}):(0,r.Tl)("files_sharing","Show sharing options")},iconSvgInline(e){var t,i,n,r,h;const u=e[0],c=Object.values((null==u||null===(t=u.attributes)||void 0===t?void 0:t["share-types"])||{}).flat();if(Array.isArray(null===(i=u.attributes)||void 0===i?void 0:i["share-types"])&&(null===(n=u.attributes)||void 0===n?void 0:n["share-types"].length)>1)return a;if(c.includes(N.Z.SHARE_TYPE_LINK)||c.includes(N.Z.SHARE_TYPE_EMAIL))return o;if(c.includes(N.Z.SHARE_TYPE_GROUP)||c.includes(N.Z.SHARE_TYPE_REMOTE_GROUP))return s;if(c.includes(N.Z.SHARE_TYPE_CIRCLE))return'<svg width="16" height="16" viewBox="0 0 21.33 21.33" xmlns="http://www.w3.org/2000/svg"><path d="M10.67 1.33a9.34 9.34 0 100 18.68 9.34 9.34 0 000-18.68zM6.93 15.8a2.33 2.33 0 110-4.67 2.33 2.33 0 010 4.67zm1.4-8.87a2.33 2.33 0 114.67 0 2.33 2.33 0 01-4.67 0zm6.07 8.87a2.33 2.33 0 110-4.67 2.33 2.33 0 010 4.67z"/></svg>\n';const p=null==u||null===(r=u.attributes)||void 0===r?void 0:r["owner-id"];return p&&(p!==(null===(h=(0,d.HW)())||void 0===h?void 0:h.uid)||$(u))?function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=J?"/avatar/{userId}/32/dark":"/avatar/{userId}/32",n=(0,l.Jv)(t?i:i+"?guestFallback=true",{userId:e});return'<svg width="32" height="32" viewBox="0 0 32 32"\n\t\txmlns="http://www.w3.org/2000/svg" class="sharing-status__avatar">\n\t\t<image href="'.concat(n,'" height="32" width="32" />\n\t</svg>')}(p,$(u)):a},enabled(e){var t,i,r;if(1!==e.length)return!1;const s=e[0],a=null==s||null===(t=s.attributes)||void 0===t?void 0:t["owner-id"];return!!Array.isArray(null===(i=s.attributes)||void 0===i?void 0:i["share-types"])||!(!a||a===(null===(r=(0,d.HW)())||void 0===r?void 0:r.uid)&&!$(s))||!!(s.permissions&n.aX.SHARE)},async exec(e,t,i){var r,s;return e.permissions&n.aX.READ?(null===(r=window.OCA)||void 0===r||null===(r=r.Files)||void 0===r||null===(r=r.Sidebar)||void 0===r||null===(s=r.setActiveTab)||void 0===s||s.call(r,"sharing"),M.exec(e,t,i)):null},inline:()=>!0});(0,n.Gg)(Q),(()=>{const e=(0,n.bh)();e.register(new n.Ss({id:y,name:(0,r.Tl)("files_sharing","Shares"),caption:(0,r.Tl)("files_sharing","Overview of shared files."),emptyTitle:(0,r.Tl)("files_sharing","No shares"),emptyCaption:(0,r.Tl)("files_sharing","Files and folders you shared or have been shared with you will show up here"),icon:a,order:20,columns:[],getContents:()=>f()})),e.register(new n.Ss({id:A,name:(0,r.Tl)("files_sharing","Shared with you"),caption:(0,r.Tl)("files_sharing","List of files that are shared with you."),emptyTitle:(0,r.Tl)("files_sharing","Nothing shared with you yet"),emptyCaption:(0,r.Tl)("files_sharing","Files and folders others shared with you will show up here"),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-account" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>',order:1,parent:y,columns:[],getContents:()=>f(!0,!1,!1,!1)})),e.register(new n.Ss({id:_,name:(0,r.Tl)("files_sharing","Shared with others"),caption:(0,r.Tl)("files_sharing","List of files that you shared with others."),emptyTitle:(0,r.Tl)("files_sharing","Nothing shared yet"),emptyCaption:(0,r.Tl)("files_sharing","Files and folders you shared will show up here"),icon:s,order:2,parent:y,columns:[],getContents:()=>f(!1,!0,!1,!1)})),e.register(new n.Ss({id:b,name:(0,r.Tl)("files_sharing","Shared by link"),caption:(0,r.Tl)("files_sharing","List of files that are shared by link."),emptyTitle:(0,r.Tl)("files_sharing","No shared links"),emptyCaption:(0,r.Tl)("files_sharing","Files and folders you shared by link will show up here"),icon:o,order:3,parent:y,columns:[],getContents:()=>f(!1,!0,!1,!1,[window.OC.Share.SHARE_TYPE_LINK])})),e.register(new n.Ss({id:C,name:(0,r.Tl)("files_sharing","Deleted shares"),caption:(0,r.Tl)("files_sharing","List of shares you left."),emptyTitle:(0,r.Tl)("files_sharing","No deleted shares"),emptyCaption:(0,r.Tl)("files_sharing","Shares you have left will show up here"),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-delete" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',order:4,parent:y,columns:[],getContents:()=>f(!1,!1,!1,!0)})),e.register(new n.Ss({id:T,name:(0,r.Tl)("files_sharing","Pending shares"),caption:(0,r.Tl)("files_sharing","List of unapproved shares."),emptyTitle:(0,r.Tl)("files_sharing","No pending shares"),emptyCaption:(0,r.Tl)("files_sharing","Shares you have received but not approved will show up here"),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-account-clock" viewBox="0 0 24 24"><path d="M10.63,14.1C12.23,10.58 16.38,9.03 19.9,10.63C23.42,12.23 24.97,16.38 23.37,19.9C22.24,22.4 19.75,24 17,24C14.3,24 11.83,22.44 10.67,20H1V18C1.06,16.86 1.84,15.93 3.34,15.18C4.84,14.43 6.72,14.04 9,14C9.57,14 10.11,14.05 10.63,14.1V14.1M9,4C10.12,4.03 11.06,4.42 11.81,5.17C12.56,5.92 12.93,6.86 12.93,8C12.93,9.14 12.56,10.08 11.81,10.83C11.06,11.58 10.12,11.95 9,11.95C7.88,11.95 6.94,11.58 6.19,10.83C5.44,10.08 5.07,9.14 5.07,8C5.07,6.86 5.44,5.92 6.19,5.17C6.94,4.42 7.88,4.03 9,4M17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14Z" /></svg>',order:5,parent:y,columns:[],getContents:()=>f(!1,!1,!0,!1)}))})(),(0,n.Yc)("nc:share-attributes",{nc:"http://nextcloud.org/ns"}),(0,n.Yc)("oc:share-types",{oc:"http://owncloud.org/ns"}),(0,n.Yc)("ocs:share-permissions",{ocs:"http://open-collaboration-services.org/ns"})},8132:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(71354),r=i.n(n),s=i(76314),a=i.n(s)()(r());a.push([e.id,".action-items>.files-list__row-action-sharing-status{direction:rtl;padding-right:0 !important}svg.sharing-status__avatar{height:32px !important;width:32px !important;max-height:32px !important;max-width:32px !important;border-radius:32px;overflow:hidden}","",{version:3,sources:["webpack://./apps/files_sharing/src/actions/sharingStatusAction.scss"],names:[],mappings:"AAsBA,qDAEC,aAAA,CAEG,0BAAA,CAGJ,2BACC,sBAAA,CACA,qBAAA,CACA,0BAAA,CACA,yBAAA,CACA,kBAAA,CACA,eAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // Only when rendered inline, when not enough space, this is put in the menu\n.action-items > .files-list__row-action-sharing-status {\n\t// put icon at the end of the button\n\tdirection: rtl;\n\t// align icons with textless inline actions\n    padding-right: 0 !important;\n}\n\nsvg.sharing-status__avatar {\n\theight: 32px !important;\n\twidth: 32px !important;\n\tmax-height: 32px !important;\n\tmax-width: 32px !important;\n\tborder-radius: 32px;\n\toverflow: hidden;\n}\n"],sourceRoot:""}]);const o=a}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=n,e=[],s.O=(t,i,n,r)=>{if(!i){var a=1/0;for(h=0;h<e.length;h++){i=e[h][0],n=e[h][1],r=e[h][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(o=!1,r<a&&(a=r));if(o){e.splice(h--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[i,n,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,i)=>(s.f[i](e,t),t)),[])),s.u=e=>e+"-"+e+".js?v=6797210df0f1d53f94c4",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},i="nextcloud:",s.l=(e,n,r,a)=>{if(t[e])t[e].push(n);else{var o,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),h=0;h<d.length;h++){var u=d[h];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+r){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",i+r),o.src=e),t[e]=[n];var c=(i,n)=>{o.onerror=o.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),i)return i(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=c.bind(null,o.onerror),o.onload=c.bind(null,o.onload),l&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.j=5928,(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s.b=document.baseURI||self.location.href;var e={5928:0};s.f.j=(t,i)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var a=s.p+s.u(t),o=new Error;s.l(a,(i=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,a=i[0],o=i[1],l=i[2],d=0;if(a.some((t=>0!==e[t]))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var h=l(s)}for(t&&t(i);d<a.length;d++)r=a[d],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(h)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.nc=void 0;var a=s.O(void 0,[4208],(()=>s(67597)));a=s.O(a)})();
//# sourceMappingURL=files_sharing-init.js.map?v=28fa486dd4171394e0f3