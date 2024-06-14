"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[1241],{62830:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(71354),s=n.n(o),r=n(76314),m=n.n(r)()(s());m.push([t.id,"\n.comments-activity[data-v-2b24308f] {\n\tpadding: 0;\n}\n","",{version:3,sources:["webpack://./apps/comments/src/views/ActivityCommentEntry.vue"],names:[],mappings:";AAoFA;CACA,UAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2023 Ferdinand Thiessen <opensource@fthiessen.de>\n  -\n  - @author Ferdinand Thiessen <opensource@fthiessen.de>\n  -\n  - @license AGPL-3.0-or-later\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<Comment ref="comment"\n\t\ttag="li"\n\t\tv-bind="comment.props"\n\t\t:auto-complete="autoComplete"\n\t\t:resource-type="resourceType"\n\t\t:message="commentMessage"\n\t\t:resource-id="resourceId"\n\t\t:user-data="genMentionsData(comment.props.mentions)"\n\t\tclass="comments-activity"\n\t\t@delete="reloadCallback()" />\n</template>\n\n<script lang="ts">\nimport type { PropType } from \'vue\'\nimport { translate as t } from \'@nextcloud/l10n\'\n\nimport Comment from \'../components/Comment.vue\'\nimport CommentView from \'../mixins/CommentView\'\n\nexport default {\n\tname: \'ActivityCommentEntry\',\n\n\tcomponents: {\n\t\tComment,\n\t},\n\n\tmixins: [CommentView],\n\tprops: {\n\t\tcomment: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t},\n\t\treloadCallback: {\n\t\t\ttype: Function as PropType<() => void>,\n\t\t\trequired: true,\n\t\t},\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tcommentMessage: \'\',\n\t\t}\n\t},\n\n\twatch: {\n\t\tcomment() {\n\t\t\tthis.commentMessage = this.comment.props.message\n\t\t},\n\t},\n\n\tmounted() {\n\t\tthis.commentMessage = this.comment.props.message\n\t},\n\n\tmethods: {\n\t\tt,\n\t},\n}\n<\/script>\n\n<style scoped>\n.comments-activity {\n\tpadding: 0;\n}\n</style>\n'],sourceRoot:""}]);const i=m},41241:(t,e,n)=>{n.d(e,{default:()=>v});var o=n(53334),s=n(65463),r=n(70452);const m={name:"ActivityCommentEntry",components:{Comment:s.A},mixins:[r.A],props:{comment:{type:Object,required:!0},reloadCallback:{type:Function,required:!0}},data:()=>({commentMessage:""}),watch:{comment(){this.commentMessage=this.comment.props.message}},mounted(){this.commentMessage=this.comment.props.message},methods:{t:o.Tl}};var i=n(85072),a=n.n(i),c=n(97825),p=n.n(c),l=n(77659),u=n.n(l),d=n(55056),h=n.n(d),A=n(10540),f=n.n(A),y=n(41113),g=n.n(y),C=n(62830),b={};b.styleTagTransform=g(),b.setAttributes=h(),b.insert=u().bind(null,"head"),b.domAPI=p(),b.insertStyleElement=f(),a()(C.A,b),C.A&&C.A.locals&&C.A.locals;const v=(0,n(14486).A)(m,(function(){var t=this;return(0,t._self._c)("Comment",t._b({ref:"comment",staticClass:"comments-activity",attrs:{tag:"li","auto-complete":t.autoComplete,"resource-type":t.resourceType,message:t.commentMessage,"resource-id":t.resourceId,"user-data":t.genMentionsData(t.comment.props.mentions)},on:{delete:function(e){return t.reloadCallback()}}},"Comment",t.comment.props,!1))}),[],!1,null,"2b24308f",null).exports}}]);
//# sourceMappingURL=1241-1241.js.map?v=a4187792299da984916c