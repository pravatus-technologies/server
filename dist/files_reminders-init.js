/*! For license information please see files_reminders-init.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r={91410:(e,t,n)=>{var r=n(35810),i=n(53334);const o='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>';var s,a=n(85471),d=n(61338),l=n(85168),c=n(54332),u=n(4604),p=n(31126),m=n(94219),h=n(52201);!function(e){e.LaterToday="later-today",e.Tomorrow="tomorrow",e.ThisWeekend="this-weekend",e.NextWeek="next-week"}(s||(s={}));const f=()=>{const e=new Date;return e.setHours(0,0,0,0),e.setDate(e.getDate()-e.getDay()+1),new Date(e)},g=e=>{new Date(e).setHours(0,0,0,0);const t=new Date(e.getFullYear(),0,1,0,0,0,0),n=(e.getTime()-t.getTime())/864e5;return Math.ceil((n+t.getDay()+1)/7)},w=e=>({[s.LaterToday]:()=>{const e=new Date,t=new Date;t.setHours(18,0,0,0);const n=new Date;return n.setHours(17,0,0,0),e>=n?null:t},[s.Tomorrow]:()=>{const e=new Date,t=new Date;return t.setDate(e.getDate()+1),t.setHours(8,0,0,0),t},[s.ThisWeekend]:()=>{const e=new Date;if([5,6,0].includes(e.getDay()))return null;const t=new Date,n=f();return t.setDate(n.getDate()+5),t.setHours(8,0,0,0),t},[s.NextWeek]:()=>{if(0===(new Date).getDay())return null;const e=new Date,t=f();return e.setDate(t.getDate()+7),e.setHours(8,0,0,0),e}}[e]()),v=e=>{let t={hour:"numeric",minute:"2-digit"};const n=new Date;var r,o;return o=n,((r=e).getDate()!==o.getDate()||r.getMonth()!==o.getMonth()||r.getFullYear()!==o.getFullYear())&&(t={...t,weekday:"short"}),((e,t)=>g(e)===g(t)&&e.getFullYear()===t.getFullYear())(e,n)||(t={...t,month:"short",day:"numeric"}),e.getFullYear()!==n.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},b=e=>{let t={month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"2-digit"};const n=new Date;return e.getFullYear()!==n.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},y=(0,n(53529).YK)().setApp("files_reminders").detectUser().build();var A=n(26287),_=n(63814);const N=async(e,t)=>{const n=(0,_.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await A.A.put(n,{dueDate:t.toISOString()})).data.ocs.data},x=async e=>{const t=(0,_.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await A.A.delete(t)).data.ocs.data},D=a.Ay.extend({name:"SetCustomReminderModal",components:{NcButton:c.A,NcDateTime:u.A,NcDateTimePickerNative:p.A,NcDialog:m.A,NcNoteCard:h.A},data:()=>({node:void 0,hasDueDate:!1,opened:!1,isValid:!0,customDueDate:null,nowDate:new Date}),computed:{fileId(){return this.node.fileid},fileName(){return this.node.basename},name(){return(0,i.Tl)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName})},label:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Tl)("files_reminders","Clear reminder")},methods:{t:i.Tl,getDateString:v,open(e){const t=e.attributes["reminder-due-date"]?new Date(e.attributes["reminder-due-date"]):null;this.node=e,this.hasDueDate=Boolean(t),this.isValid=!0,this.opened=!0,this.customDueDate=null!=t?t:(()=>{const e=new Date,t=new Date;return t.setHours(e.getHours()+2,0,0,0),t})(),this.nowDate=new Date,setTimeout((()=>{const e=document.getElementById("set-custom-reminder");e.focus(),this.hasDueDate||e.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await N(this.fileId,this.customDueDate),a.Ay.set(this.node.attributes,"reminder-due-date",this.customDueDate.toISOString()),(0,d.Ic)("files:node:updated",this.node),(0,l.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){y.error("Failed to set reminder",{error:e}),(0,l.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}else(0,l.Qg)((0,i.Tl)("files_reminders","Please choose a valid date & time"))},async clear(){try{await x(this.fileId),a.Ay.set(this.node.attributes,"reminder-due-date",""),(0,d.Ic)("files:node:updated",this.node),(0,l.Te)((0,i.Tl)("files_reminders",'Reminder cleared for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){y.error("Failed to clear reminder",{error:e}),(0,l.Qg)((0,i.Tl)("files_reminders","Failed to clear reminder"))}},onClose(){this.opened=!1,this.$emit("close")},onInput(){const e=document.getElementById("set-custom-reminder");this.isValid=e.checkValidity()}}});var E=n(85072),T=n.n(E),C=n(97825),S=n.n(C),P=n(77659),L=n.n(P),O=n(55056),I=n.n(O),k=n(10540),F=n.n(k),R=n(41113),$=n.n(R),j=n(25852),B={};B.styleTagTransform=$(),B.setAttributes=I(),B.insert=L().bind(null,"head"),B.domAPI=S(),B.insertStyleElement=F(),T()(j.A,B),j.A&&j.A.locals&&j.A.locals;const V=(0,n(14486).A)(D,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcDialog",{attrs:{name:e.name,"out-transition":!0,size:"small","close-on-click-outside":""},on:{closing:e.onClose},scopedSlots:e._u([{key:"actions",fn:function(){return[t("NcButton",{attrs:{type:"tertiary"},on:{click:e.onClose}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Cancel"))+"\n\t\t")]),e._v(" "),e.hasDueDate?t("NcButton",{on:{click:e.clear}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Clear reminder"))+"\n\t\t")]):e._e(),e._v(" "),t("NcButton",{attrs:{disabled:!e.isValid,type:"primary",form:"set-custom-reminder-form","native-type":"submit"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Set reminder"))+"\n\t\t")])]},proxy:!0}],null,!1,2766788902)},[t("form",{staticClass:"custom-reminder-modal",attrs:{id:"set-custom-reminder-form"},on:{submit:function(t){return t.preventDefault(),e.setCustom.apply(null,arguments)}}},[t("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:e.label,min:e.nowDate,required:!0,type:"datetime-local"},on:{input:e.onInput},model:{value:e.customDueDate,callback:function(t){e.customDueDate=t},expression:"customDueDate"}}),e._v(" "),e.isValid?t("NcNoteCard",{attrs:{type:"info"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),t("NcDateTime",{attrs:{timestamp:e.customDueDate}})],1):t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")])],1)]):e._e()}),[],!1,null,"5a1353a8",null).exports,M=a.Ay.extend(V),H=document.createElement("div");H.id="set-custom-reminder-modal",document.body.appendChild(H);const G=new M({name:"SetCustomReminderModal",el:H}),Y=e=>(G.open(e),new Promise((e=>{G.$once("close",e)}))),U=new r.hY({id:"reminder-status",inline:()=>!0,displayName:()=>"",title:e=>{const t=e.at(0),n=new Date(t.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files_reminders","Reminder set")," – ").concat(b(n))},iconSvgInline:()=>o,enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},exec:async e=>(Y(e),null),order:-15}),W=new r.hY({id:"clear-reminder",displayName:()=>(0,i.Tl)("files_reminders","Clear reminder"),title:e=>{const t=e.at(0),n=new Date(t.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files_reminders","Clear reminder")," – ").concat(b(n))},iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-off" viewBox="0 0 24 24"><path d="M8,3.28L6.6,1.86L5.74,2.57L7.16,4M16.47,18.39C15.26,19.39 13.7,20 12,20A7,7 0 0,1 5,13C5,11.3 5.61,9.74 6.61,8.53M2.92,2.29L1.65,3.57L3,4.9L1.87,5.83L3.29,7.25L4.4,6.31L5.2,7.11C3.83,8.69 3,10.75 3,13A9,9 0 0,0 12,22C14.25,22 16.31,21.17 17.89,19.8L20.09,22L21.36,20.73L3.89,3.27L2.92,2.29M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,6A7,7 0 0,1 19,13C19,13.84 18.84,14.65 18.57,15.4L20.09,16.92C20.67,15.73 21,14.41 21,13A9,9 0 0,0 12,4C10.59,4 9.27,4.33 8.08,4.91L9.6,6.43C10.35,6.16 11.16,6 12,6Z" /></svg>',enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},async exec(e){if(e.fileid)try{return await x(e.fileid),a.Ay.set(e.attributes,"reminder-due-date",""),(0,d.Ic)("files:node:updated",e),!0}catch(e){return!1}return null},order:19}),z="set-reminder-menu",q=new r.hY({id:z,displayName:()=>(0,i.Tl)("files_reminders","Set reminder"),iconSvgInline:()=>o,enabled:()=>!0,exec:async()=>null,order:20});var K=n(19672),Q={};Q.styleTagTransform=$(),Q.setAttributes=I(),Q.insert=L().bind(null,"head"),Q.domAPI=S(),Q.insertStyleElement=F(),T()(K.A,Q),K.A&&K.A.locals&&K.A.locals;const Z={dateTimePreset:s.LaterToday,label:(0,i.Tl)("files_reminders","Later today"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},J={dateTimePreset:s.Tomorrow,label:(0,i.Tl)("files_reminders","Tomorrow"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},X={dateTimePreset:s.ThisWeekend,label:(0,i.Tl)("files_reminders","This weekend"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},ee={dateTimePreset:s.NextWeek,label:(0,i.Tl)("files_reminders","Next week"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[Z,J,X,ee].forEach((e=>{const t=w(e.dateTimePreset);t&&(e.dateString=v(t),e.verboseDateString=b(t),setInterval((()=>{const t=w(e.dateTimePreset);t&&(e.dateString=v(t),e.verboseDateString=b(t))}),18e5))}));const te=[Z,J,X,ee].map((e=>new r.hY({id:"set-reminder-".concat(e.dateTimePreset),displayName:()=>"".concat(e.label," – ").concat(e.dateString),title:()=>"".concat(e.ariaLabel," – ").concat(e.verboseDateString),iconSvgInline:()=>"<svg></svg>",enabled:()=>Boolean(w(e.dateTimePreset)),parent:z,async exec(t){if(!t.fileid)return y.error("Failed to set reminder, missing file id"),(0,l.Qg)((0,i.Tl)("files_reminders","Failed to set reminder")),null;try{const n=w(e.dateTimePreset);await N(t.fileid,n),a.Ay.set(t.attributes,"reminder-due-date",n.toISOString()),(0,d.Ic)("files:node:updated",t),(0,l.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:t.basename}))}catch(e){y.error("Failed to set reminder",{error:e}),(0,l.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}return null},order:21}))),ne=new r.hY({id:"set-reminder-custom",displayName:()=>(0,i.Tl)("files_reminders","Set custom reminder"),title:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:()=>!0,parent:z,exec:async e=>(Y(e),null),order:22});(0,r.Yc)("nc:reminder-due-date",{nc:"http://nextcloud.org/ns"}),(0,r.Gg)(U),(0,r.Gg)(W),(0,r.Gg)(q),(0,r.Gg)(ne),te.forEach((e=>(0,r.Gg)(e)))},19672:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(71354),i=n.n(r),o=n(76314),s=n.n(o)()(i());s.push([e.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin:3px 10px 3px 15px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;left:0;right:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAuBA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,wBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA",sourcesContent:['/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // TODO: remove when/if the actions API supports a separator\n // This the last preset action, so we need to add a separator\n.files-list__row-action-set-reminder-custom {\n\tmargin-top: 13px;\n\tposition: relative;\n\n\t&::before {\n\t\tcontent: "";\n\t\tmargin: 3px 10px 3px 15px;\n\t\tborder-bottom: 1px solid var(--color-border-dark);\n\t\tcursor: default;\n\t\tdisplay: flex;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: -10px;\n\t}\n}\n'],sourceRoot:""}]);const a=s},25852:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(71354),i=n.n(r),o=n(76314),s=n.n(o)()(i());s.push([e.id,".custom-reminder-modal[data-v-5a1353a8]{margin:0 12px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,aAAA",sourcesContent:["\n.custom-reminder-modal {\n\tmargin: 0 12px;\n}\n"],sourceRoot:""}]);const a=s},35810:(e,t,n)=>{n.d(t,{Al:()=>F,Gg:()=>f,H4:()=>I,PY:()=>O,Q$:()=>k,R3:()=>N,VL:()=>_,Yc:()=>b,hY:()=>h,lJ:()=>L,pt:()=>x,v7:()=>j});var r=n(21777),i=n(84697),o=n(43627),s=n(71089),a=n(63814),d=n(44719),l=n(36117),c=n(2568);const u=null===(p=(0,r.HW)())?(0,i.YK)().setApp("files").build():(0,i.YK)().setApp("files").setUid(p.uid).build();var p,m=(e=>(e.DEFAULT="default",e.HIDDEN="hidden",e))(m||{});class h{_action;constructor(e){this.validateAction(e),this._action=e}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(e){if(!e.id||"string"!=typeof e.id)throw new Error("Invalid id");if(!e.displayName||"function"!=typeof e.displayName)throw new Error("Invalid displayName function");if("title"in e&&"function"!=typeof e.title)throw new Error("Invalid title function");if(!e.iconSvgInline||"function"!=typeof e.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!e.exec||"function"!=typeof e.exec)throw new Error("Invalid exec function");if("enabled"in e&&"function"!=typeof e.enabled)throw new Error("Invalid enabled function");if("execBatch"in e&&"function"!=typeof e.execBatch)throw new Error("Invalid execBatch function");if("order"in e&&"number"!=typeof e.order)throw new Error("Invalid order");if("parent"in e&&"string"!=typeof e.parent)throw new Error("Invalid parent");if(e.default&&!Object.values(m).includes(e.default))throw new Error("Invalid default");if("inline"in e&&"function"!=typeof e.inline)throw new Error("Invalid inline function");if("renderInline"in e&&"function"!=typeof e.renderInline)throw new Error("Invalid renderInline function")}}const f=function(e){void 0===window._nc_fileactions&&(window._nc_fileactions=[],u.debug("FileActions initialized")),window._nc_fileactions.find((t=>t.id===e.id))?u.error(`FileAction ${e.id} already registered`,{action:e}):window._nc_fileactions.push(e)};var g=(e=>(e[e.NONE=0]="NONE",e[e.CREATE=4]="CREATE",e[e.READ=1]="READ",e[e.UPDATE=2]="UPDATE",e[e.DELETE=8]="DELETE",e[e.SHARE=16]="SHARE",e[e.ALL=31]="ALL",e))(g||{});const w=["d:getcontentlength","d:getcontenttype","d:getetag","d:getlastmodified","d:quota-available-bytes","d:resourcetype","nc:has-preview","nc:is-encrypted","nc:mount-type","oc:comments-unread","oc:favorite","oc:fileid","oc:owner-display-name","oc:owner-id","oc:permissions","oc:size"],v={d:"DAV:",nc:"http://nextcloud.org/ns",oc:"http://owncloud.org/ns",ocs:"http://open-collaboration-services.org/ns"},b=function(e,t={nc:"http://nextcloud.org/ns"}){void 0===window._nc_dav_properties&&(window._nc_dav_properties=[...w],window._nc_dav_namespaces={...v});const n={...window._nc_dav_namespaces,...t};return window._nc_dav_properties.find((t=>t===e))?(u.warn(`${e} already registered`,{prop:e}),!1):e.startsWith("<")||2!==e.split(":").length?(u.error(`${e} is not valid. See example: 'oc:fileid'`,{prop:e}),!1):n[e.split(":")[0]]?(window._nc_dav_properties.push(e),window._nc_dav_namespaces=n,!0):(u.error(`${e} namespace unknown`,{prop:e,namespaces:n}),!1)},y=function(){return void 0===window._nc_dav_properties&&(window._nc_dav_properties=[...w]),window._nc_dav_properties.map((e=>`<${e} />`)).join(" ")},A=function(){return void 0===window._nc_dav_namespaces&&(window._nc_dav_namespaces={...v}),Object.keys(window._nc_dav_namespaces).map((e=>`xmlns:${e}="${window._nc_dav_namespaces?.[e]}"`)).join(" ")},_=function(){return`<?xml version="1.0"?>\n\t\t<d:propfind ${A()}>\n\t\t\t<d:prop>\n\t\t\t\t${y()}\n\t\t\t</d:prop>\n\t\t</d:propfind>`},N=function(e){return`<?xml version="1.0" encoding="UTF-8"?>\n<d:searchrequest ${A()}\n\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns">\n\t<d:basicsearch>\n\t\t<d:select>\n\t\t\t<d:prop>\n\t\t\t\t${y()}\n\t\t\t</d:prop>\n\t\t</d:select>\n\t\t<d:from>\n\t\t\t<d:scope>\n\t\t\t\t<d:href>/files/${(0,r.HW)()?.uid}/</d:href>\n\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t</d:scope>\n\t\t</d:from>\n\t\t<d:where>\n\t\t\t<d:and>\n\t\t\t\t<d:or>\n\t\t\t\t\t<d:not>\n\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<d:getcontenttype/>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t<d:literal>httpd/unix-directory</d:literal>\n\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t</d:not>\n\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<oc:size/>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t<d:literal>0</d:literal>\n\t\t\t\t\t</d:eq>\n\t\t\t\t</d:or>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${e}</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t</d:and>\n\t\t</d:where>\n\t\t<d:orderby>\n\t\t\t<d:order>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:descending/>\n\t\t\t</d:order>\n\t\t</d:orderby>\n\t\t<d:limit>\n\t\t\t<d:nresults>100</d:nresults>\n\t\t\t<ns:firstresult>0</ns:firstresult>\n\t\t</d:limit>\n\t</d:basicsearch>\n</d:searchrequest>`};var x=(e=>(e.Folder="folder",e.File="file",e))(x||{});const D=function(e,t){return null!==e.match(t)},E=(e,t)=>{if(e.id&&"number"!=typeof e.id)throw new Error("Invalid id type of value");if(!e.source)throw new Error("Missing mandatory source");try{new URL(e.source)}catch(e){throw new Error("Invalid source format, source must be a valid URL")}if(!e.source.startsWith("http"))throw new Error("Invalid source format, only http(s) is supported");if(e.mtime&&!(e.mtime instanceof Date))throw new Error("Invalid mtime type");if(e.crtime&&!(e.crtime instanceof Date))throw new Error("Invalid crtime type");if(!e.mime||"string"!=typeof e.mime||!e.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))throw new Error("Missing or invalid mandatory mime");if("size"in e&&"number"!=typeof e.size&&void 0!==e.size)throw new Error("Invalid size type");if("permissions"in e&&void 0!==e.permissions&&!("number"==typeof e.permissions&&e.permissions>=g.NONE&&e.permissions<=g.ALL))throw new Error("Invalid permissions");if(e.owner&&null!==e.owner&&"string"!=typeof e.owner)throw new Error("Invalid owner type");if(e.attributes&&"object"!=typeof e.attributes)throw new Error("Invalid attributes type");if(e.root&&"string"!=typeof e.root)throw new Error("Invalid root type");if(e.root&&!e.root.startsWith("/"))throw new Error("Root must start with a leading slash");if(e.root&&!e.source.includes(e.root))throw new Error("Root must be part of the source");if(e.root&&D(e.source,t)){const n=e.source.match(t)[0];if(!e.source.includes((0,o.join)(n,e.root)))throw new Error("The root must be relative to the service. e.g /files/emma")}if(e.status&&!Object.values(T).includes(e.status))throw new Error("Status must be a valid NodeStatus")};var T=(e=>(e.NEW="new",e.FAILED="failed",e.LOADING="loading",e.LOCKED="locked",e))(T||{});class C{_data;_attributes;_knownDavService=/(remote|public)\.php\/(web)?dav/i;readonlyAttributes=Object.entries(Object.getOwnPropertyDescriptors(C.prototype)).filter((e=>"function"==typeof e[1].get&&"__proto__"!==e[0])).map((e=>e[0]));handler={set:(e,t,n)=>!this.readonlyAttributes.includes(t)&&Reflect.set(e,t,n),deleteProperty:(e,t)=>!this.readonlyAttributes.includes(t)&&Reflect.deleteProperty(e,t),get:(e,t,n)=>this.readonlyAttributes.includes(t)?(u.warn(`Accessing "Node.attributes.${t}" is deprecated, access it directly on the Node instance.`),Reflect.get(this,t)):Reflect.get(e,t,n)};constructor(e,t){E(e,t||this._knownDavService),this._data={...e,attributes:{}},this._attributes=new Proxy(this._data.attributes,this.handler),this.update(e.attributes??{}),t&&(this._knownDavService=t)}get source(){return this._data.source.replace(/\/$/i,"")}get encodedSource(){const{origin:e}=new URL(this.source);return e+(0,s.O0)(this.source.slice(e.length))}get basename(){return(0,o.basename)(this.source)}get extension(){return(0,o.extname)(this.source)}get dirname(){if(this.root){let e=this.source;this.isDavRessource&&(e=e.split(this._knownDavService).pop());const t=e.indexOf(this.root),n=this.root.replace(/\/$/,"");return(0,o.dirname)(e.slice(t+n.length)||"/")}const e=new URL(this.source);return(0,o.dirname)(e.pathname)}get mime(){return this._data.mime}get mtime(){return this._data.mtime}set mtime(e){this._data.mtime=e}get crtime(){return this._data.crtime}get size(){return this._data.size}set size(e){this.updateMtime(),this._data.size=e}get attributes(){return this._attributes}get permissions(){return null!==this.owner||this.isDavRessource?void 0!==this._data.permissions?this._data.permissions:g.NONE:g.READ}set permissions(e){this.updateMtime(),this._data.permissions=e}get owner(){return this.isDavRessource?this._data.owner:null}get isDavRessource(){return D(this.source,this._knownDavService)}get root(){return this._data.root?this._data.root.replace(/^(.+)\/$/,"$1"):this.isDavRessource&&(0,o.dirname)(this.source).split(this._knownDavService).pop()||null}get path(){if(this.root){let e=this.source;this.isDavRessource&&(e=e.split(this._knownDavService).pop());const t=e.indexOf(this.root),n=this.root.replace(/\/$/,"");return e.slice(t+n.length)||"/"}return(this.dirname+"/"+this.basename).replace(/\/\//g,"/")}get fileid(){return this._data?.id}get status(){return this._data?.status}set status(e){this._data.status=e}move(e){E({...this._data,source:e},this._knownDavService),this._data.source=e,this.updateMtime()}rename(e){if(e.includes("/"))throw new Error("Invalid basename");this.move((0,o.dirname)(this.source)+"/"+e)}updateMtime(){this._data.mtime&&(this._data.mtime=new Date)}update(e){for(const[t,n]of Object.entries(e))try{void 0===n?delete this.attributes[t]:this.attributes[t]=n}catch(e){if(e instanceof TypeError)continue;throw e}}}class S extends C{get type(){return x.File}}class P extends C{constructor(e){super({...e,mime:"httpd/unix-directory"})}get type(){return x.Folder}get extension(){return null}get mime(){return"httpd/unix-directory"}}const L=`/files/${(0,r.HW)()?.uid}`,O=(0,a.dC)("dav"),I=function(e=O,t={}){const n=(0,d.UU)(e,{headers:t});function i(e){n.setHeaders({...t,"X-Requested-With":"XMLHttpRequest",requesttoken:e??""})}return(0,r.zo)(i),i((0,r.do)()),(0,d.Gu)().patch("fetch",((e,t)=>{const n=t.headers;return n?.method&&(t.method=n.method,delete n.method),fetch(e,t)})),n},k=(e,t="/",n=L)=>{const r=new AbortController;return new l.CancelablePromise((async(i,o,s)=>{s((()=>r.abort()));try{i((await e.getDirectoryContents(`${n}${t}`,{signal:r.signal,details:!0,data:`<?xml version="1.0"?>\n\t\t<oc:filter-files ${A()}>\n\t\t\t<d:prop>\n\t\t\t\t${y()}\n\t\t\t</d:prop>\n\t\t\t<oc:filter-rules>\n\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t</oc:filter-rules>\n\t\t</oc:filter-files>`,headers:{method:"REPORT"},includeSelf:!0})).data.filter((e=>e.filename!==t)).map((e=>F(e,n))))}catch(e){o(e)}}))},F=function(e,t=L,n=O){let i=(0,r.HW)()?.uid;const o=document.querySelector("input#isPublic")?.value;if(o)i=i??document.querySelector("input#sharingUserId")?.value,i=i??"anonymous";else if(!i)throw new Error("No user id found");const s=e.props,a=function(e=""){let t=g.NONE;return e?((e.includes("C")||e.includes("K"))&&(t|=g.CREATE),e.includes("G")&&(t|=g.READ),(e.includes("W")||e.includes("N")||e.includes("V"))&&(t|=g.UPDATE),e.includes("D")&&(t|=g.DELETE),e.includes("R")&&(t|=g.SHARE),t):t}(s?.permissions),d=String(s?.["owner-id"]||i),l={id:s?.fileid||0,source:`${n}${e.filename}`,mtime:new Date(Date.parse(e.lastmod)),mime:e.mime||"application/octet-stream",size:s?.size||Number.parseInt(s.getcontentlength||"0"),permissions:a,owner:d,root:t,attributes:{...e,...s,hasPreview:s?.["has-preview"]}};return delete l.attributes?.props,"file"===e.type?new S(l):new P(l)};window._oc_config,window._oc_config?.blacklist_files_regex&&new RegExp(window._oc_config.blacklist_files_regex);const R=["B","KB","MB","GB","TB","PB"],$=["B","KiB","MiB","GiB","TiB","PiB"];function j(e,t=!1,n=!1,r=!1){n=n&&!r,"string"==typeof e&&(e=Number(e));let i=e>0?Math.floor(Math.log(e)/Math.log(r?1e3:1024)):0;i=Math.min((n?$.length:R.length)-1,i);const o=n?$[i]:R[i];let s=(e/Math.pow(r?1e3:1024,i)).toFixed(1);return!0===t&&0===i?("0.0"!==s?"< 1 ":"0 ")+(n?$[1]:R[1]):(s=i<2?parseFloat(s).toFixed(0):parseFloat(s).toLocaleString((0,c.lO)()),s+" "+o)}var B={};!function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+t+"]["+t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");e.isExist=function(e){return void 0!==e},e.isEmptyObject=function(e){return 0===Object.keys(e).length},e.merge=function(e,t,n){if(t){const r=Object.keys(t),i=r.length;for(let o=0;o<i;o++)e[r[o]]="strict"===n?[t[r[o]]]:t[r[o]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(e){return!(null==r.exec(e))},e.getAllMatches=function(e,t){const n=[];let r=t.exec(e);for(;r;){const i=[];i.startIndex=t.lastIndex-r[0].length;const o=r.length;for(let e=0;e<o;e++)i.push(r[e]);n.push(i),r=t.exec(e)}return n},e.nameRegexp=n}(B);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var V={};const M={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,n){return e}};V.buildOptions=function(e){return Object.assign({},M,e)},V.defaultOptions=M,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var H={};function G(e,t,n){let r;const i={};for(let o=0;o<e.length;o++){const s=e[o],a=Y(s);let d="";if(d=void 0===n?a:n+"."+a,a===t.textNodeName)void 0===r?r=s[a]:r+=""+s[a];else{if(void 0===a)continue;if(s[a]){let e=G(s[a],t,d);const n=W(e,t);s[":@"]?U(e,s[":@"],d,t):1!==Object.keys(e).length||void 0===e[t.textNodeName]||t.alwaysCreateTextNode?0===Object.keys(e).length&&(t.alwaysCreateTextNode?e[t.textNodeName]="":e=""):e=e[t.textNodeName],void 0!==i[a]&&i.hasOwnProperty(a)?(Array.isArray(i[a])||(i[a]=[i[a]]),i[a].push(e)):t.isArray(a,d,n)?i[a]=[e]:i[a]=e}}}return"string"==typeof r?r.length>0&&(i[t.textNodeName]=r):void 0!==r&&(i[t.textNodeName]=r),i}function Y(e){const t=Object.keys(e);for(let e=0;e<t.length;e++){const n=t[e];if(":@"!==n)return n}}function U(e,t,n,r){if(t){const i=Object.keys(t),o=i.length;for(let s=0;s<o;s++){const o=i[s];r.isArray(o,n+"."+o,!0,!0)?e[o]=[t[o]]:e[o]=t[o]}}}function W(e,t){const{textNodeName:n}=t,r=Object.keys(e).length;return 0===r||!(1!==r||!e[n]&&"boolean"!=typeof e[n]&&0!==e[n])}H.prettify=function(e,t){return G(e,t)};const{buildOptions:z}=V,{prettify:q}=H;function K(e,t,n,r){let i="",o=!1;for(let s=0;s<e.length;s++){const a=e[s],d=Q(a);if(void 0===d)continue;let l="";if(l=0===n.length?d:`${n}.${d}`,d===t.textNodeName){let e=a[d];J(l,t)||(e=t.tagValueProcessor(d,e),e=X(e,t)),o&&(i+=r),i+=e,o=!1;continue}if(d===t.cdataPropName){o&&(i+=r),i+=`<![CDATA[${a[d][0][t.textNodeName]}]]>`,o=!1;continue}if(d===t.commentPropName){i+=r+`\x3c!--${a[d][0][t.textNodeName]}--\x3e`,o=!0;continue}if("?"===d[0]){const e=Z(a[":@"],t),n="?xml"===d?"":r;let s=a[d][0][t.textNodeName];s=0!==s.length?" "+s:"",i+=n+`<${d}${s}${e}?>`,o=!0;continue}let c=r;""!==c&&(c+=t.indentBy);const u=r+`<${d}${Z(a[":@"],t)}`,p=K(a[d],t,l,c);-1!==t.unpairedTags.indexOf(d)?t.suppressUnpairedNode?i+=u+">":i+=u+"/>":p&&0!==p.length||!t.suppressEmptyNode?p&&p.endsWith(">")?i+=u+`>${p}${r}</${d}>`:(i+=u+">",p&&""!==r&&(p.includes("/>")||p.includes("</"))?i+=r+t.indentBy+p+r:i+=p,i+=`</${d}>`):i+=u+"/>",o=!0}return i}function Q(e){const t=Object.keys(e);for(let n=0;n<t.length;n++){const r=t[n];if(e.hasOwnProperty(r)&&":@"!==r)return r}}function Z(e,t){let n="";if(e&&!t.ignoreAttributes)for(let r in e){if(!e.hasOwnProperty(r))continue;let i=t.attributeValueProcessor(r,e[r]);i=X(i,t),!0===i&&t.suppressBooleanAttributes?n+=` ${r.substr(t.attributeNamePrefix.length)}`:n+=` ${r.substr(t.attributeNamePrefix.length)}="${i}"`}return n}function J(e,t){let n=(e=e.substr(0,e.length-t.textNodeName.length-1)).substr(e.lastIndexOf(".")+1);for(let r in t.stopNodes)if(t.stopNodes[r]===e||t.stopNodes[r]==="*."+n)return!0;return!1}function X(e,t){if(e&&e.length>0&&t.processEntities)for(let n=0;n<t.entities.length;n++){const r=t.entities[n];e=e.replace(r.regex,r.val)}return e}const ee=function(e,t){let n="";return t.format&&t.indentBy.length>0&&(n="\n"),K(e,t,"",n)},te={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function ne(e){this.options=Object.assign({},te,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=oe),this.processTextOrObjNode=re,this.options.format?(this.indentate=ie,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function re(e,t,n){const r=this.j2x(e,n+1);return void 0!==e[this.options.textNodeName]&&1===Object.keys(e).length?this.buildTextValNode(e[this.options.textNodeName],t,r.attrStr,n):this.buildObjectNode(r.val,t,r.attrStr,n)}function ie(e){return this.options.indentBy.repeat(e)}function oe(e){return!(!e.startsWith(this.options.attributeNamePrefix)||e===this.options.textNodeName)&&e.substr(this.attrPrefixLen)}ne.prototype.build=function(e){return this.options.preserveOrder?ee(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)},ne.prototype.j2x=function(e,t){let n="",r="";for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i))if(void 0===e[i])this.isAttribute(i)&&(r+="");else if(null===e[i])this.isAttribute(i)?r+="":"?"===i[0]?r+=this.indentate(t)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(t)+"<"+i+"/"+this.tagEndChar;else if(e[i]instanceof Date)r+=this.buildTextValNode(e[i],i,"",t);else if("object"!=typeof e[i]){const o=this.isAttribute(i);if(o)n+=this.buildAttrPairStr(o,""+e[i]);else if(i===this.options.textNodeName){let t=this.options.tagValueProcessor(i,""+e[i]);r+=this.replaceEntitiesValue(t)}else r+=this.buildTextValNode(e[i],i,"",t)}else if(Array.isArray(e[i])){const n=e[i].length;let o="";for(let s=0;s<n;s++){const n=e[i][s];void 0===n||(null===n?"?"===i[0]?r+=this.indentate(t)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(t)+"<"+i+"/"+this.tagEndChar:"object"==typeof n?this.options.oneListGroup?o+=this.j2x(n,t+1).val:o+=this.processTextOrObjNode(n,i,t):o+=this.buildTextValNode(n,i,"",t))}this.options.oneListGroup&&(o=this.buildObjectNode(o,i,"",t)),r+=o}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const t=Object.keys(e[i]),r=t.length;for(let o=0;o<r;o++)n+=this.buildAttrPairStr(t[o],""+e[i][t[o]])}else r+=this.processTextOrObjNode(e[i],i,t);return{attrStr:n,val:r}},ne.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&"true"===t?" "+e:" "+e+'="'+t+'"'},ne.prototype.buildObjectNode=function(e,t,n,r){if(""===e)return"?"===t[0]?this.indentate(r)+"<"+t+n+"?"+this.tagEndChar:this.indentate(r)+"<"+t+n+this.closeTag(t)+this.tagEndChar;{let i="</"+t+this.tagEndChar,o="";return"?"===t[0]&&(o="?",i=""),!n&&""!==n||-1!==e.indexOf("<")?!1!==this.options.commentPropName&&t===this.options.commentPropName&&0===o.length?this.indentate(r)+`\x3c!--${e}--\x3e`+this.newLine:this.indentate(r)+"<"+t+n+o+this.tagEndChar+e+this.indentate(r)+i:this.indentate(r)+"<"+t+n+o+">"+e+i}},ne.prototype.closeTag=function(e){let t="";return-1!==this.options.unpairedTags.indexOf(e)?this.options.suppressUnpairedNode||(t="/"):t=this.options.suppressEmptyNode?"/":`></${e}`,t},ne.prototype.buildTextValNode=function(e,t,n,r){if(!1!==this.options.cdataPropName&&t===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${e}]]>`+this.newLine;if(!1!==this.options.commentPropName&&t===this.options.commentPropName)return this.indentate(r)+`\x3c!--${e}--\x3e`+this.newLine;if("?"===t[0])return this.indentate(r)+"<"+t+n+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(t,e);return i=this.replaceEntitiesValue(i),""===i?this.indentate(r)+"<"+t+n+this.closeTag(t)+this.tagEndChar:this.indentate(r)+"<"+t+n+">"+i+"</"+t+this.tagEndChar}},ne.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const n=this.options.entities[t];e=e.replace(n.regex,n.val)}return e}}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,e=[],o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,d=0;d<n.length;d++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{8176:"52c1b1b274389b2deab3",8618:"6c1091c3428ffab7c566"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="nextcloud:",o.l=(e,r,i,s)=>{if(t[e])t[e].push(r);else{var a,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+i){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",n+i),a.src=e),t[e]=[r];var p=(n,r)=>{a.onerror=a.onload=null,clearTimeout(m);var i=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),n)return n(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=9735,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={9735:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,s=n[0],a=n[1],d=n[2],l=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var c=d(o)}for(t&&t(n);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var s=o.O(void 0,[4208],(()=>o(91410)));s=o.O(s)})();
//# sourceMappingURL=files_reminders-init.js.map?v=07b20bcef990ac81d8f7