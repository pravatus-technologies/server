/*! For license information please see systemtags-init.js.LICENSE.txt */
(()=>{var e,t={9785:(e,t,s)=>{"use strict";var n=s(31346),i=s(53334),r=s(85072),o=s.n(r),a=s(97825),l=s.n(a),d=s(77659),c=s.n(d),A=s(55056),u=s.n(A),g=s(10540),p=s.n(g),f=s(41113),m=s.n(f),h=s(73911),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;const y=function(e){var t;const s=null===(t=e.attributes)||void 0===t||null===(t=t["system-tags"])||void 0===t?void 0:t["system-tag"];return void 0===s?[]:[s].flat()},C=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=document.createElement("li");return s.classList.add("files-list__system-tag"),s.textContent=e,t&&s.classList.add("files-list__system-tag--more"),s},b=new n.hY({id:"system-tags",displayName:()=>"",iconSvgInline:()=>"",enabled(e){if(1!==e.length)return!1;const t=e[0];return 0!==y(t).length},exec:async()=>null,async renderInline(e){const t=y(e);if(0===t.length)return null;const s=document.createElement("ul");if(s.classList.add("files-list__system-tags"),1===t.length)s.setAttribute("aria-label",(0,i.Tl)("files","This file has the tag {tag}",{tag:t[0]}));else{const e=t.slice(0,-1).join(", "),n=t[t.length-1];s.setAttribute("aria-label",(0,i.Tl)("files","This file has the tags {firstTags} and {lastTag}",{firstTags:e,lastTag:n}))}if(s.append(C(t[0])),t.length>1){const e=C("+"+(t.length-1),!0);e.setAttribute("title",t.slice(1).join(", ")),s.append(e)}return s},order:0});(0,n.Yc)("nc:system-tags"),(0,n.Gg)(b);var w=s(63814),x=s(21777),T=(s(26287),s(63623));const _=(0,w.dC)("dav"),L=(0,T.UU)(_),B=e=>{L.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=e?e:""})};(0,x.zo)(B),B((0,x.do)());var O=s(71654),P=s(35947);const R=(0,P.YK)().setApp("systemtags").detectUser().build();var j;const E="/files/".concat(null===(j=(0,x.HW)())||void 0===j?void 0:j.uid),S=(0,w.dC)("dav"+E);s(36117),(0,P.YK)().setApp("files").detectUser().build();const I=e=>(0,n.Al)(e),z=((0,n.H4)(),e=>'<?xml version="1.0"?>\n<oc:filter-files '.concat((0,n.CP)(),">\n\t<d:prop>\n\t\t").concat((0,n.VX)(),"\n\t</d:prop>\n    <oc:filter-rules>\n        <oc:systemtag>").concat(e,"</oc:systemtag>\n    </oc:filter-rules>\n</oc:filter-files>")),U=function(e){var t;return new n.vd({id:e.id,source:(0,w.dC)("dav/systemtags/"+e.id),owner:null===(t=(0,x.HW)())||void 0===t?void 0:t.uid,root:"/systemtags",permissions:n.aX.READ,attributes:{...e,"is-tag":!0}})};(0,n.bh)().register(new n.Ss({id:"tags",name:(0,i.Tl)("systemtags","Tags"),caption:(0,i.Tl)("systemtags","List of tags and their associated files and folders."),emptyTitle:(0,i.Tl)("systemtags","No tags found"),emptyCaption:(0,i.Tl)("systemtags","Tags you have created will show up here."),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-tag-multiple" viewBox="0 0 24 24"><path d="M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z" /></svg>',order:25,getContents:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";const t=(await(async()=>{try{const{data:e}=await L.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(e=>e.map((e=>{let{props:t}=e;return Object.fromEntries(Object.entries(t).map((e=>{let[t,s]=e;return[(0,O.A)(t),"displayName"===(0,O.A)(t)?String(s):s]})))})))(e)}catch(e){throw R.error((0,i.Tl)("systemtags","Failed to load tags"),{error:e}),new Error((0,i.Tl)("systemtags","Failed to load tags"))}})()).filter((e=>e.userVisible));var s;if("/"===e)return{folder:new n.vd({id:0,source:(0,w.dC)("dav/systemtags"),owner:null===(s=(0,x.HW)())||void 0===s?void 0:s.uid,root:"/systemtags",permissions:n.aX.NONE}),contents:t.map(U)};const r=parseInt(e.replace("/",""),10),o=t.find((e=>e.id===r));if(!o)throw new Error("Tag not found");const a=U(o),l=await function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;const t=(0,T.UU)(e),s=e=>{null==t||t.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=e?e:""})};return(0,x.zo)(s),s((0,x.do)()),(0,T.Gu)().patch("fetch",((e,t)=>{const s=t.headers;return null!=s&&s.method&&(t.method=s.method,delete s.method),fetch(e,t)})),t}().getDirectoryContents("/",{details:!0,data:z(r),headers:{method:"REPORT"}});return{folder:a,contents:l.data.map(I)}}}))},73911:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var n=s(71354),i=s.n(n),r=s(76314),o=s.n(r)()(i());o.push([e.id,".files-list__system-tags{--min-size: 32px;display:none;justify-content:center;align-items:center;min-width:calc(var(--min-size)*2);max-width:300px}.files-list__system-tag{padding:5px 10px;border:1px solid;border-radius:var(--border-radius-pill);border-color:var(--color-border);color:var(--color-text-maxcontrast);height:var(--min-size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:22px;text-align:center}.files-list__system-tag--more{overflow:visible;text-overflow:initial}.files-list__system-tag+.files-list__system-tag{margin-left:5px}@media(min-width: 512px){.files-list__system-tags{display:flex}}","",{version:3,sources:["webpack://./apps/systemtags/src/css/fileEntryInlineSystemTags.scss"],names:[],mappings:"AAsBA,yBACC,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCAAA,CACA,eAAA,CAGD,wBACC,gBAAA,CACA,gBAAA,CACA,uCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,gBAAA,CACA,iBAAA,CAEA,8BACC,gBAAA,CACA,qBAAA,CAID,gDACC,eAAA,CAIF,yBACC,yBACC,YAAA,CAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2023 Lucas Azevedo <lhs_azevedo@hotmail.com>\n *\n * @author Lucas Azevedo <lhs_azevedo@hotmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.files-list__system-tags {\n\t--min-size: 32px;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-width: calc(var(--min-size) * 2);\n\tmax-width: 300px;\n}\n\n.files-list__system-tag {\n\tpadding: 5px 10px;\n\tborder: 1px solid;\n\tborder-radius: var(--border-radius-pill);\n\tborder-color: var(--color-border);\n\tcolor: var(--color-text-maxcontrast);\n\theight: var(--min-size);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tline-height: 22px; // min-size - 2 * 5px padding\n\ttext-align: center;\n\n\t&--more {\n\t\toverflow: visible;\n\t\ttext-overflow: initial;\n\t}\n\n\t// Proper spacing if multiple shown\n\t& + .files-list__system-tag {\n\t\tmargin-left: 5px;\n\t}\n}\n\n@media (min-width: 512px) {\n\t.files-list__system-tags {\n\t\tdisplay: flex;\n\t}\n}\n"],sourceRoot:""}]);const a=o},42634:()=>{},15340:()=>{},79838:()=>{}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,e=[],n.O=(t,s,i,r)=>{if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](s[l])))?s.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,i,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=2766,(()=>{n.b=document.baseURI||self.location.href;var e={2766:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,r,o=s[0],a=s[1],l=s[2],d=0;if(o.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(s);d<o.length;d++)r=o[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),n.nc=void 0;var i=n.O(void 0,[4208],(()=>n(9785)));i=n.O(i)})();
//# sourceMappingURL=systemtags-init.js.map?v=fc197c390646b1ce55b2