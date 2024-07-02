/*! For license information please see comments-comments-tab.js.LICENSE.txt */
(()=>{var e,n,r,o={7041:(e,n,r)=>{"use strict";var o=r(21777),s=r(32981),i=r(51651),a=r(85471),c=r(96689),l=r(44719),u=r(68928);const p={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},h=t=>t.replace(/[[\]\\-]/g,"\\$&"),f=t=>t.join(""),d=(t,e)=>{const n=e;if("["!==t.charAt(n))throw new Error("not in a brace expression");const r=[],o=[];let s=n+1,i=!1,a=!1,c=!1,l=!1,u=n,d="";t:for(;s<t.length;){const e=t.charAt(s);if("!"!==e&&"^"!==e||s!==n+1){if("]"===e&&i&&!c){u=s+1;break}if(i=!0,"\\"!==e||c){if("["===e&&!c)for(const[e,[i,c,l]]of Object.entries(p))if(t.startsWith(e,s)){if(d)return["$.",!1,t.length-n,!0];s+=e.length,l?o.push(i):r.push(i),a=a||c;continue t}c=!1,d?(e>d?r.push(h(d)+"-"+h(e)):e===d&&r.push(h(e)),d="",s++):t.startsWith("-]",s+1)?(r.push(h(e+"-")),s+=2):t.startsWith("-",s+1)?(d=e,s+=2):(r.push(h(e)),s++)}else c=!0,s++}else l=!0,s++}if(u<s)return["",!1,0,!1];if(!r.length&&!o.length)return["$.",!1,t.length-n,!0];if(0===o.length&&1===r.length&&/^\\?.$/.test(r[0])&&!l){return[(g=2===r[0].length?r[0].slice(-1):r[0],g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")),!1,u-n,!1]}var g;const m="["+(l?"^":"")+f(r)+"]",b="["+(l?"":"^")+f(o)+"]";return[r.length&&o.length?"("+m+"|"+b+")":r.length?m:b,a,u-n,!0]};var g=r(65606),m=r(96763);const b=(t,e,n={})=>(U(e),!(!n.nocomment&&"#"===e.charAt(0))&&new Y(e,n).match(t)),v=/^\*+([^+@!?\*\[\(]*)$/,y=t=>e=>!e.startsWith(".")&&e.endsWith(t),w=t=>e=>e.endsWith(t),O=t=>(t=t.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(t)),j=t=>(t=t.toLowerCase(),e=>e.toLowerCase().endsWith(t)),x=/^\*+\.\*+$/,A=t=>!t.startsWith(".")&&t.includes("."),S=t=>"."!==t&&".."!==t&&t.includes("."),E=/^\.\*+$/,C=t=>"."!==t&&".."!==t&&t.startsWith("."),P=/^\*+$/,M=t=>0!==t.length&&!t.startsWith("."),$=t=>0!==t.length&&"."!==t&&".."!==t,L=/^\?+([^+@!?\*\[\(]*)?$/,T=([t,e=""])=>{const n=W([t]);return e?(e=e.toLowerCase(),t=>n(t)&&t.toLowerCase().endsWith(e)):n},R=([t,e=""])=>{const n=_([t]);return e?(e=e.toLowerCase(),t=>n(t)&&t.toLowerCase().endsWith(e)):n},k=([t,e=""])=>{const n=_([t]);return e?t=>n(t)&&t.endsWith(e):n},N=([t,e=""])=>{const n=W([t]);return e?t=>n(t)&&t.endsWith(e):n},W=([t])=>{const e=t.length;return t=>t.length===e&&!t.startsWith(".")},_=([t])=>{const e=t.length;return t=>t.length===e&&"."!==t&&".."!==t},I="object"==typeof g&&g?"object"==typeof g.env&&g.env&&g.env.__MINIMATCH_TESTING_PLATFORM__||g.platform:"posix";b.sep="win32"===I?"\\":"/";const z=Symbol("globstar **");b.GLOBSTAR=z;const V={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},F="[^/]",H=F+"*?",B=t=>t.split("").reduce(((t,e)=>(t[e]=!0,t)),{}),D=B("().*{}+?[]^$\\!"),G=B("[.(");b.filter=(t,e={})=>n=>b(n,t,e);const Z=(t,e={})=>Object.assign({},t,e);b.defaults=t=>{if(!t||"object"!=typeof t||!Object.keys(t).length)return b;const e=b;return Object.assign(((n,r,o={})=>e(n,r,Z(t,o))),{Minimatch:class extends e.Minimatch{constructor(e,n={}){super(e,Z(t,n))}static defaults(n){return e.defaults(Z(t,n)).Minimatch}},unescape:(n,r={})=>e.unescape(n,Z(t,r)),escape:(n,r={})=>e.escape(n,Z(t,r)),filter:(n,r={})=>e.filter(n,Z(t,r)),defaults:n=>e.defaults(Z(t,n)),makeRe:(n,r={})=>e.makeRe(n,Z(t,r)),braceExpand:(n,r={})=>e.braceExpand(n,Z(t,r)),match:(n,r,o={})=>e.match(n,r,Z(t,o)),sep:e.sep,GLOBSTAR:z})};const q=(t,e={})=>(U(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:u(t));b.braceExpand=q;const U=t=>{if("string"!=typeof t)throw new TypeError("invalid pattern");if(t.length>65536)throw new TypeError("pattern is too long")};b.makeRe=(t,e={})=>new Y(t,e).makeRe(),b.match=(t,e,n={})=>{const r=new Y(e,n);return t=t.filter((t=>r.match(t))),r.options.nonull&&!t.length&&t.push(e),t};const X=/[?*]|[+@!]\(.*?\)|\[|\]/,K=t=>t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class Y{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(t,e={}){U(t),e=e||{},this.options=e,this.pattern=t,this.platform=e.platform||I,this.isWindows="win32"===this.platform,this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||!1===e.allowWindowsEscape,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!e.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!e.nonegate,this.comment=!1,this.empty=!1,this.partial=!!e.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=void 0!==e.windowsNoMagicRoot?e.windowsNoMagicRoot:!(!this.isWindows||!this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const t of this.set)for(const e of t)if("string"!=typeof e)return!0;return!1}debug(...t){}make(){const t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],e.debug&&(this.debug=(...t)=>m.error(...t)),this.debug(this.pattern,this.globSet);const n=this.globSet.map((t=>this.slashSplit(t)));this.globParts=this.preprocess(n),this.debug(this.pattern,this.globParts);let r=this.globParts.map(((t,e,n)=>{if(this.isWindows&&this.windowsNoMagicRoot){const e=!(""!==t[0]||""!==t[1]||"?"!==t[2]&&X.test(t[2])||X.test(t[3])),n=/^[a-z]:/i.test(t[0]);if(e)return[...t.slice(0,4),...t.slice(4).map((t=>this.parse(t)))];if(n)return[t[0],...t.slice(1).map((t=>this.parse(t)))]}return t.map((t=>this.parse(t)))}));if(this.debug(this.pattern,r),this.set=r.filter((t=>-1===t.indexOf(!1))),this.isWindows)for(let t=0;t<this.set.length;t++){const e=this.set[t];""===e[0]&&""===e[1]&&"?"===this.globParts[t][2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3])&&(e[2]="?")}this.debug(this.pattern,this.set)}preprocess(t){if(this.options.noglobstar)for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)"**"===t[e][n]&&(t[e][n]="*");const{optimizationLevel:e=1}=this.options;return e>=2?(t=this.firstPhasePreProcess(t),t=this.secondPhasePreProcess(t)):t=e>=1?this.levelOneOptimize(t):this.adjascentGlobstarOptimize(t),t}adjascentGlobstarOptimize(t){return t.map((t=>{let e=-1;for(;-1!==(e=t.indexOf("**",e+1));){let n=e;for(;"**"===t[n+1];)n++;n!==e&&t.splice(e,n-e)}return t}))}levelOneOptimize(t){return t.map((t=>0===(t=t.reduce(((t,e)=>{const n=t[t.length-1];return"**"===e&&"**"===n?t:".."===e&&n&&".."!==n&&"."!==n&&"**"!==n?(t.pop(),t):(t.push(e),t)}),[])).length?[""]:t))}levelTwoFileOptimize(t){Array.isArray(t)||(t=this.slashSplit(t));let e=!1;do{if(e=!1,!this.preserveMultipleSlashes){for(let n=1;n<t.length-1;n++){const r=t[n];1===n&&""===r&&""===t[0]||"."!==r&&""!==r||(e=!0,t.splice(n,1),n--)}"."!==t[0]||2!==t.length||"."!==t[1]&&""!==t[1]||(e=!0,t.pop())}let n=0;for(;-1!==(n=t.indexOf("..",n+1));){const r=t[n-1];r&&"."!==r&&".."!==r&&"**"!==r&&(e=!0,t.splice(n-1,2),n-=2)}}while(e);return 0===t.length?[""]:t}firstPhasePreProcess(t){let e=!1;do{e=!1;for(let n of t){let r=-1;for(;-1!==(r=n.indexOf("**",r+1));){let o=r;for(;"**"===n[o+1];)o++;o>r&&n.splice(r+1,o-r);let s=n[r+1];const i=n[r+2],a=n[r+3];if(".."!==s)continue;if(!i||"."===i||".."===i||!a||"."===a||".."===a)continue;e=!0,n.splice(r,1);const c=n.slice(0);c[r]="**",t.push(c),r--}if(!this.preserveMultipleSlashes){for(let t=1;t<n.length-1;t++){const r=n[t];1===t&&""===r&&""===n[0]||"."!==r&&""!==r||(e=!0,n.splice(t,1),t--)}"."!==n[0]||2!==n.length||"."!==n[1]&&""!==n[1]||(e=!0,n.pop())}let o=0;for(;-1!==(o=n.indexOf("..",o+1));){const t=n[o-1];if(t&&"."!==t&&".."!==t&&"**"!==t){e=!0;const t=1===o&&"**"===n[o+1]?["."]:[];n.splice(o-1,2,...t),0===n.length&&n.push(""),o-=2}}}}while(e);return t}secondPhasePreProcess(t){for(let e=0;e<t.length-1;e++)for(let n=e+1;n<t.length;n++){const r=this.partsMatch(t[e],t[n],!this.preserveMultipleSlashes);r&&(t[e]=r,t[n]=[])}return t.filter((t=>t.length))}partsMatch(t,e,n=!1){let r=0,o=0,s=[],i="";for(;r<t.length&&o<e.length;)if(t[r]===e[o])s.push("b"===i?e[o]:t[r]),r++,o++;else if(n&&"**"===t[r]&&e[o]===t[r+1])s.push(t[r]),r++;else if(n&&"**"===e[o]&&t[r]===e[o+1])s.push(e[o]),o++;else if("*"!==t[r]||!e[o]||!this.options.dot&&e[o].startsWith(".")||"**"===e[o]){if("*"!==e[o]||!t[r]||!this.options.dot&&t[r].startsWith(".")||"**"===t[r])return!1;if("a"===i)return!1;i="b",s.push(e[o]),r++,o++}else{if("b"===i)return!1;i="a",s.push(t[r]),r++,o++}return t.length===e.length&&s}parseNegate(){if(this.nonegate)return;const t=this.pattern;let e=!1,n=0;for(let r=0;r<t.length&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.slice(n)),this.negate=e}matchOne(t,e,n=!1){const r=this.options;if(this.isWindows){const n=""===t[0]&&""===t[1]&&"?"===t[2]&&"string"==typeof t[3]&&/^[a-z]:$/i.test(t[3]),r=""===e[0]&&""===e[1]&&"?"===e[2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3]);if(n&&r){const n=t[3],r=e[3];n.toLowerCase()===r.toLowerCase()&&(t[3]=r)}else if(r&&"string"==typeof t[0]){const n=e[3],r=t[0];n.toLowerCase()===r.toLowerCase()&&(e[3]=r,e=e.slice(3))}else if(n&&"string"==typeof e[0]){const n=t[3];n.toLowerCase()===e[0].toLowerCase()&&(e[0]=n,t=t.slice(3))}}const{optimizationLevel:o=1}=this.options;o>=2&&(t=this.levelTwoFileOptimize(t)),this.debug("matchOne",this,{file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var s=0,i=0,a=t.length,c=e.length;s<a&&i<c;s++,i++){this.debug("matchOne loop");var l=e[i],u=t[s];if(this.debug(e,l,u),!1===l)return!1;if(l===z){this.debug("GLOBSTAR",[e,l,u]);var p=s,h=i+1;if(h===c){for(this.debug("** at the end");s<a;s++)if("."===t[s]||".."===t[s]||!r.dot&&"."===t[s].charAt(0))return!1;return!0}for(;p<a;){var f=t[p];if(this.debug("\nglobstar while",t,p,e,h,f),this.matchOne(t.slice(p),e.slice(h),n))return this.debug("globstar found match!",p,a,f),!0;if("."===f||".."===f||!r.dot&&"."===f.charAt(0)){this.debug("dot detected!",t,p,e,h);break}this.debug("globstar swallow a segment, and continue"),p++}return!(!n||(this.debug("\n>>> no match, partial?",t,p,e,h),p!==a))}let o;if("string"==typeof l?(o=u===l,this.debug("string match",l,u,o)):(o=l.test(u),this.debug("pattern match",l,u,o)),!o)return!1}if(s===a&&i===c)return!0;if(s===a)return n;if(i===c)return s===a-1&&""===t[s];throw new Error("wtf?")}braceExpand(){return q(this.pattern,this.options)}parse(t){U(t);const e=this.options;if("**"===t)return z;if(""===t)return"";let n,r=null;(n=t.match(P))?r=e.dot?$:M:(n=t.match(v))?r=(e.nocase?e.dot?j:O:e.dot?w:y)(n[1]):(n=t.match(L))?r=(e.nocase?e.dot?R:T:e.dot?k:N)(n):(n=t.match(x))?r=e.dot?S:A:(n=t.match(E))&&(r=C);let o="",s=!1,i=!1;const a=[],c=[];let l,u=!1,p=!1,h="."===t.charAt(0),f=e.dot||h;const g=t=>"."===t.charAt(0)?"":e.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",m=()=>{if(u){switch(u){case"*":o+=H,s=!0;break;case"?":o+=F,s=!0;break;default:o+="\\"+u}this.debug("clearStateChar %j %j",u,o),u=!1}};for(let n,r=0;r<t.length&&(n=t.charAt(r));r++)if(this.debug("%s\t%s %s %j",t,r,o,n),i){if("/"===n)return!1;D[n]&&(o+="\\"),o+=n,i=!1}else switch(n){case"/":return!1;case"\\":m(),i=!0;continue;case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",t,r,o,n),this.debug("call clearStateChar %j",u),m(),u=n,e.noext&&m();continue;case"(":{if(!u){o+="\\(";continue}const e={type:u,start:r-1,reStart:o.length,open:V[u].open,close:V[u].close};this.debug(this.pattern,"\t",e),a.push(e),o+=e.open,0===e.start&&"!"!==e.type&&(h=!0,o+=g(t.slice(r+1))),this.debug("plType %j %j",u,o),u=!1;continue}case")":{const t=a[a.length-1];if(!t){o+="\\)";continue}a.pop(),m(),s=!0,l=t,o+=l.close,"!"===l.type&&c.push(Object.assign(l,{reEnd:o.length}));continue}case"|":{const e=a[a.length-1];if(!e){o+="\\|";continue}m(),o+="|",0===e.start&&"!"!==e.type&&(h=!0,o+=g(t.slice(r+1)));continue}case"[":m();const[f,b,v,y]=d(t,r);v?(o+=f,p=p||b,r+=v-1,s=s||y):o+="\\[";continue;case"]":o+="\\"+n;continue;default:m(),o+=K(n)}for(l=a.pop();l;l=a.pop()){let t;t=o.slice(l.reStart+l.open.length),this.debug(this.pattern,"setting tail",o,l),t=t.replace(/((?:\\{2}){0,64})(\\?)\|/g,((t,e,n)=>(n||(n="\\"),e+e+n+"|"))),this.debug("tail=%j\n   %s",t,t,l,o);const e="*"===l.type?H:"?"===l.type?F:"\\"+l.type;s=!0,o=o.slice(0,l.reStart)+e+"\\("+t}m(),i&&(o+="\\\\");const b=G[o.charAt(0)];for(let t=c.length-1;t>-1;t--){const e=c[t],n=o.slice(0,e.reStart),r=o.slice(e.reStart,e.reEnd-8);let s=o.slice(e.reEnd);const i=o.slice(e.reEnd-8,e.reEnd)+s,a=n.split(")").length,l=n.split("(").length-a;let u=s;for(let t=0;t<l;t++)u=u.replace(/\)[+*?]?/,"");s=u,o=n+r+s+(""===s?"(?:$|\\/)":"")+i}if(""!==o&&s&&(o="(?=.)"+o),b&&(o=(h?"":f?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)")+o),!e.nocase||s||e.nocaseMagicOnly||(s=t.toUpperCase()!==t.toLowerCase()),!s)return o.replace(/\\(.)/g,"$1");const W=(e.nocase?"i":"")+(p?"u":"");try{const e=r?{_glob:t,_src:o,test:r}:{_glob:t,_src:o};return Object.assign(new RegExp("^"+o+"$",W),e)}catch(t){return this.debug("invalid regexp",t),new RegExp("$.")}}makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;const t=this.set;if(!t.length)return this.regexp=!1,this.regexp;const e=this.options,n=e.noglobstar?H:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=e.nocase?"i":"";let o=t.map((t=>{const e=t.map((t=>"string"==typeof t?K(t):t===z?z:t._src));return e.forEach(((t,r)=>{const o=e[r+1],s=e[r-1];t===z&&s!==z&&(void 0===s?void 0!==o&&o!==z?e[r+1]="(?:\\/|"+n+"\\/)?"+o:e[r]=n:void 0===o?e[r-1]=s+"(?:\\/|"+n+")?":o!==z&&(e[r-1]=s+"(?:\\/|\\/"+n+"\\/)"+o,e[r+1]=z))})),e.filter((t=>t!==z)).join("/")})).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,r)}catch(t){this.regexp=!1}return this.regexp}slashSplit(t){return this.preserveMultipleSlashes?t.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(t)?["",...t.split(/\/+/)]:t.split(/\/+/)}match(t,e=this.partial){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;const n=this.options;this.isWindows&&(t=t.split("\\").join("/"));const r=this.slashSplit(t);this.debug(this.pattern,"split",r);const o=this.set;this.debug(this.pattern,"set",o);let s=r[r.length-1];if(!s)for(let t=r.length-2;!s&&t>=0;t--)s=r[t];for(let t=0;t<o.length;t++){const i=o[t];let a=r;if(n.matchBase&&1===i.length&&(a=[s]),this.matchOne(a,i,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate}static defaults(t){return b.defaults(t).Minimatch}}function J(t){const e={};for(const n of t.keys())e[n]=t.get(n);return e}b.Minimatch=Y,b.escape=(t,{windowsPathsNoEscape:e=!1}={})=>e?t.replace(/[?*()[\]]/g,"[$&]"):t.replace(/[?*()[\]\\]/g,"\\$&"),b.unescape=(t,{windowsPathsNoEscape:e=!1}={})=>e?t.replace(/\[([^\/\\])\]/g,"$1"):t.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1");var Q,tt=r(12692);r(86454),r(26602),Error,function(t){t.Array="array",t.Object="object",t.Original="original"}(Q||(Q={}));var et=r(35550);const nt=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:n}}=t;return n.map((t=>{const n=t.propstat.prop;return function(t,e,n=!1){const{getlastmodified:r=null,getcontentlength:o="0",resourcetype:s=null,getcontenttype:i=null,getetag:a=null}=t,c=s&&"object"==typeof s&&void 0!==s.collection?"directory":"file",l={filename:e,basename:tt.basename(e),lastmod:r,size:parseInt(o,10),type:c,etag:"string"==typeof a?a.replace(/"/g,""):null};return"file"===c&&(l.mime=i&&"string"==typeof i?i.split(";")[0]:""),n&&(l.props=t),l}(n,n.id.toString(),e)}))};let rt,ot;var st;if(r.nc=btoa((0,o.do)()),(0,s.C)("comments","activityEnabled",!1)&&void 0!==(null===(st=OCA)||void 0===st||null===(st=st.Activity)||void 0===st?void 0:st.registerSidebarAction))window.addEventListener("DOMContentLoaded",(function(){window.OCA.Activity.registerSidebarAction({mount:async(t,e)=>{let{context:n,fileInfo:o,reload:s}=e;if(!rt){const{default:t}=await Promise.all([r.e(4208),r.e(7462),r.e(2913)]).then(r.bind(r,72913));rt=a.Ay.extend(t)}ot=new rt({parent:n,propsData:{reloadCallback:s,resourceId:o.id}}),ot.$mount(t),c.A.info("Comments plugin mounted in Activity sidebar action",{fileInfo:o})},unmount:()=>{ot&&ot.$destroy()}}),window.OCA.Activity.registerSidebarEntries((async t=>{let{fileInfo:e,limit:n,offset:o}=t;const{data:s}=await async function(t,e){var n;let{resourceType:r,resourceId:o}=t;const s=["",r,o].join("/"),i=e.datetime?"<oc:datetime>".concat(e.datetime.toISOString(),"</oc:datetime>"):"",a=await et.A.customRequest(s,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(null!==(n=e.limit)&&void 0!==n?n:20,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(e.offset||0,"</oc:offset>\n\t\t\t\t").concat(i,"\n\t\t\t</oc:filter-comments>")},e)),c=await a.text(),u=await(0,l.h4)(c);return function(t,e,n=!1){return n?{data:e,headers:t.headers?J(t.headers):{},status:t.status,statusText:t.statusText}:e}(a,nt(u,!0),!0)}({resourceType:"files",resourceId:e.id},{limit:n,offset:o});c.A.debug("Loaded comments",{fileInfo:e,comments:s});const{default:u}=await Promise.all([r.e(4208),r.e(7462),r.e(5632)]).then(r.bind(r,25632)),p=a.Ay.extend(u);return s.map((t=>({timestamp:(0,i.A)(t.props.creationDateTime).toDate().getTime(),mount(n,r){let{context:o,reload:s}=r;this._CommentsViewInstance=new p({parent:o,propsData:{comment:t,resourceId:e.id,reloadCallback:s}}),this._CommentsViewInstance.$mount(n)},unmount(){this._CommentsViewInstance.$destroy()}})))})),window.OCA.Activity.registerSidebarFilter((t=>"comments"!==t.type)),c.A.info("Comments plugin registered for Activity sidebar action")}));else{let e=null;const n=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-message-reply-text" viewBox="0 0 24 24"><path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" /></svg>',async mount(t,n,r){e&&e.$destroy(),e=new OCA.Comments.View("files",{parent:r}),await e.update(n.id),e.$mount(t)},update(t){e.update(t.id)},destroy(){e.$destroy(),e=null},scrollBottomReached(){e.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(n)}))}},96689:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});const r=(0,n(53529).YK)().setApp("comments").detectUser().build()},35550:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(44719),o=n(17003),s=n(21777);const i=(0,r.UU)((0,o.e)()),a=t=>{i.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=t?t:""})};(0,s.zo)(a),a((0,s.do)());const c=i},17003:(t,e,n)=>{"use strict";n.d(e,{e:()=>o});var r=n(99498);const o=function(){return(0,r.dC)("dav/comments")}},8505:t=>{"use strict";function e(t,e,o){t instanceof RegExp&&(t=n(t,o)),e instanceof RegExp&&(e=n(e,o));var s=r(t,e,o);return s&&{start:s[0],end:s[1],pre:o.slice(0,s[0]),body:o.slice(s[0]+t.length,s[1]),post:o.slice(s[1]+e.length)}}function n(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var r,o,s,i,a,c=n.indexOf(t),l=n.indexOf(e,c+1),u=c;if(c>=0&&l>0){if(t===e)return[c,l];for(r=[],s=n.length;u>=0&&!a;)u==c?(r.push(u),c=n.indexOf(t,u+1)):1==r.length?a=[r.pop(),l]:((o=r.pop())<s&&(s=o,i=l),l=n.indexOf(e,u+1)),u=c<l&&c>=0?c:l;r.length&&(a=[s,i])}return a}t.exports=e,e.range=r},68928:(t,e,n)=>{var r=n(8505);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),m(function(t){return t.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(i).split("\\,").join(a).split("\\.").join(c)}(t),!0).map(u)):[]};var o="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",i="\0CLOSE"+Math.random()+"\0",a="\0COMMA"+Math.random()+"\0",c="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function u(t){return t.split(o).join("\\").split(s).join("{").split(i).join("}").split(a).join(",").split(c).join(".")}function p(t){if(!t)return[""];var e=[],n=r("{","}",t);if(!n)return t.split(",");var o=n.pre,s=n.body,i=n.post,a=o.split(",");a[a.length-1]+="{"+s+"}";var c=p(i);return i.length&&(a[a.length-1]+=c.shift(),a.push.apply(a,c)),e.push.apply(e,a),e}function h(t){return"{"+t+"}"}function f(t){return/^-?0\d/.test(t)}function d(t,e){return t<=e}function g(t,e){return t>=e}function m(t,e){var n=[],o=r("{","}",t);if(!o)return[t];var s=o.pre,a=o.post.length?m(o.post,!1):[""];if(/\$$/.test(o.pre))for(var c=0;c<a.length;c++){var u=s+"{"+o.body+"}"+a[c];n.push(u)}else{var b,v,y=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body),w=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body),O=y||w,j=o.body.indexOf(",")>=0;if(!O&&!j)return o.post.match(/,.*\}/)?m(t=o.pre+"{"+o.body+i+o.post):[t];if(O)b=o.body.split(/\.\./);else if(1===(b=p(o.body)).length&&1===(b=m(b[0],!1).map(h)).length)return a.map((function(t){return o.pre+b[0]+t}));if(O){var x=l(b[0]),A=l(b[1]),S=Math.max(b[0].length,b[1].length),E=3==b.length?Math.abs(l(b[2])):1,C=d;A<x&&(E*=-1,C=g);var P=b.some(f);v=[];for(var M=x;C(M,A);M+=E){var $;if(w)"\\"===($=String.fromCharCode(M))&&($="");else if($=String(M),P){var L=S-$.length;if(L>0){var T=new Array(L+1).join("0");$=M<0?"-"+T+$.slice(1):T+$}}v.push($)}}else{v=[];for(var R=0;R<b.length;R++)v.push.apply(v,m(b[R],!1))}for(R=0;R<v.length;R++)for(c=0;c<a.length;c++)u=s+v[R]+a[c],(!e||O||u)&&n.push(u)}return n}},86454:(t,e,n)=>{"use strict";const r=n(43918),o=n(32923),s=n(8904);t.exports={XMLParser:o,XMLValidator:r,XMLBuilder:s}},26602:t=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return r(t,arguments,s(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,t)},n(t)}function r(t,e,n){return r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var s=new(Function.bind.apply(t,r));return n&&o(s,n.prototype),s},r.apply(null,arguments)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}var i=function(t){function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,s(n).call(this,t))).name="ObjectPrototypeMutationError",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,t),n}(n(Error));function a(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.split("."),s=o.length,i=function(e){var n=o[e];if(!t)return{v:void 0};if("+"===n){if(Array.isArray(t))return{v:t.map((function(n,s){var i=o.slice(e+1);return i.length>0?a(n,i.join("."),r):r(t,s,o,e)}))};var s=o.slice(0,e).join(".");throw new Error("Object at wildcard (".concat(s,") is not an array"))}t=r(t,n,o,e)},c=0;c<s;c++){var l=i(c);if("object"===e(l))return l.v}return t}function c(t,e){return t.length===e+1}t.exports={set:function(t,n,r){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n]=r,t[n];try{return a(t,n,(function(t,e,n,o){if(t===Reflect.getPrototypeOf({}))throw new i("Attempting to mutate Object.prototype");if(!t[e]){var s=Number.isInteger(Number(n[o+1])),a="+"===n[o+1];t[e]=s||a?[]:{}}return c(n,o)&&(t[e]=r),t[e]}))}catch(e){if(e instanceof i)throw e;return t}},get:function(t,n){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n];try{return a(t,n,(function(t,e){return t[e]}))}catch(e){return t}},has:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;if("number"==typeof n)return n in t;try{var o=!1;return a(t,n,(function(t,e,n,s){if(!c(n,s))return t&&t[e];o=r.own?t.hasOwnProperty(e):e in t})),o}catch(t){return!1}},hasOwn:function(t,e,n){return this.has(t,e,n||{own:!0})},isIn:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;try{var s=!1,i=!1;return a(t,n,(function(t,n,o,a){return s=s||t===r||!!t&&t[n]===r,i=c(o,a)&&"object"===e(t)&&n in t,t&&t[n]})),o.validPath?s&&i:s}catch(t){return!1}},ObjectPrototypeMutationError:i}},12692:(t,e,n)=>{"use strict";var r=n(65606),o=n(40537),s=function(t){return"string"==typeof t};function i(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o))}return n}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,c={};function l(t){return a.exec(t).slice(1)}c.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!s(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o.charAt(0))}return(e?"/":"")+(t=i(t.split("/"),!e).join("/"))||"."},c.normalize=function(t){var e=c.isAbsolute(t),n="/"===t.substr(-1);return(t=i(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},c.isAbsolute=function(t){return"/"===t.charAt(0)},c.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!s(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return c.normalize(t)},c.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n+1)}t=c.resolve(t).substr(1),e=c.resolve(e).substr(1);for(var r=n(t.split("/")),o=n(e.split("/")),s=Math.min(r.length,o.length),i=s,a=0;a<s;a++)if(r[a]!==o[a]){i=a;break}var l=[];for(a=i;a<r.length;a++)l.push("..");return(l=l.concat(o.slice(i))).join("/")},c._makeLong=function(t){return t},c.dirname=function(t){var e=l(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},c.basename=function(t,e){var n=l(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},c.extname=function(t){return l(t)[3]},c.format=function(t){if(!o.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!s(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return(t.dir?t.dir+c.sep:"")+(t.base||"")},c.parse=function(t){if(!s(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=l(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,e[1].length-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},c.sep="/",c.delimiter=":",t.exports=c}},s={};function i(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,loaded:!1,exports:{}};return o[t].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=o,e=[],i.O=(t,n,r,o)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((t=>i.O[t](n[c])))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,n)=>(i.f[n](t,e),e)),[])),i.u=t=>t+"-"+t+".js?v="+{1110:"ee198291c8b389847012",2913:"1ccb2adaaea884424d3c",5528:"51e4e2fa9f60f9a32432",5632:"f16542372833977f05d1",7422:"39643d0d022e5d161ff9",7462:"dc4ab980ab8b4ba05e04"}[t],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},r="nextcloud:",i.l=(t,e,o,s)=>{if(n[t])n[t].push(e);else{var a,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",r+o),a.src=t),n[t]=[e];var h=(e,r)=>{a.onerror=a.onload=null,clearTimeout(f);var o=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(r))),e)return e(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=2122,(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={2122:0};i.f.j=(e,n)=>{var r=i.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=t[e]=[n,o]));n.push(r[2]=o);var s=i.p+i.u(e),a=new Error;i.l(s,(n=>{if(i.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}}),"chunk-"+e,e)}},i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,s=n[0],a=n[1],c=n[2],l=0;if(s.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var u=c(i)}for(e&&e(n);l<s.length;l++)o=s[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var a=i.O(void 0,[4208],(()=>i(7041)));a=i.O(a)})();
//# sourceMappingURL=comments-comments-tab.js.map?v=d68658a381e8a6e796ae