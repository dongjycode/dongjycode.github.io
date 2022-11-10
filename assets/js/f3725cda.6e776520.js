"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[8980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),s=a,m=g["".concat(d,".").concat(s)]||g[s]||c[s]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",summary:"gedit\u547d\u4ee4\u662fGNOME\u684c\u9762\u73af\u5883\u7684\u5b98\u65b9\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5c3d\u7ba1gedit\u65e8\u5728\u7b80\u5316\u548c\u6613\u7528\uff0c\u4f46\u5b83\u662f\u529f\u80fd\u5f3a\u5927\u7684\u901a\u7528\u6587\u672c\u7f16\u8f91\u5668\uff1b\u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u548c\u7f16\u8f91\u5404\u79cd\u6587\u672c\u6587\u4ef6\u3002",meta_keywords:"gedit\u547d\u4ee4,GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",meta_description:"gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,o={unversionedId:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",id:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",title:"gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",description:"gedit\u547d\u4ee4\u662fGNOME\u684c\u9762\u73af\u5883\u7684\u5b98\u65b9\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5c3d\u7ba1gedit\u65e8\u5728\u7b80\u5316\u548c\u6613\u7528\uff0c\u4f46\u5b83\u662f\u529f\u80fd\u5f3a\u5927\u7684\u901a\u7528\u6587\u672c\u7f16\u8f91\u5668\uff1b\u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u548c\u7f16\u8f91\u5404\u79cd\u6587\u672c\u6587\u4ef6\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668.md",sourceDirName:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91",slug:"/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668.md",tags:[],version:"current",frontMatter:{title:"gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",summary:"gedit\u547d\u4ee4\u662fGNOME\u684c\u9762\u73af\u5883\u7684\u5b98\u65b9\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5c3d\u7ba1gedit\u65e8\u5728\u7b80\u5316\u548c\u6613\u7528\uff0c\u4f46\u5b83\u662f\u529f\u80fd\u5f3a\u5927\u7684\u901a\u7528\u6587\u672c\u7f16\u8f91\u5668\uff1b\u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u548c\u7f16\u8f91\u5404\u79cd\u6587\u672c\u6587\u4ef6\u3002",meta_keywords:"gedit\u547d\u4ee4,GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",meta_description:"gedit\u547d\u4ee4 \u2013 GNOME\u684c\u9762\u7684\u6587\u672c\u7f16\u8f91\u5668",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"gawk\u547d\u4ee4 \u2013 \u6a21\u5f0f\u626b\u63cf\u4e0e\u5904\u7406\u8bed\u8a00",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/gawk\u547d\u4ee4 \u2013 \u6a21\u5f0f\u626b\u63cf\u4e0e\u5904\u7406\u8bed\u8a00"},next:{title:"genisoimage\u547d\u4ee4 \u2013 \u521b\u5efa\u6620\u50cf\u6587\u4ef6",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/genisoimage\u547d\u4ee4 \u2013 \u521b\u5efa\u6620\u50cf\u6587\u4ef6"}},d={},u=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"gedit\u547d\u4ee4\u662fGNOME\u684c\u9762\u73af\u5883\u7684\u5b98\u65b9\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5c3d\u7ba1gedit\u65e8\u5728\u7b80\u5316\u548c\u6613\u7528\uff0c\u4f46\u5b83\u662f\u529f\u80fd\u5f3a\u5927\u7684\u901a\u7528\u6587\u672c\u7f16\u8f91\u5668\uff1b\u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u548c\u7f16\u8f91\u5404\u79cd\u6587\u672c\u6587\u4ef6\u3002\ngedit\u5177\u6709\u7075\u6d3b\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u53ef\u7528\u4e8e\u5411gedit\u672c\u8eab\u52a8\u6001\u6dfb\u52a0\u65b0\u7684\u9ad8\u7ea7\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"gedit ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"--list-encodings"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u53ef\u4f7f\u7528\u7684\u7f16\u7801\u9009\u9879\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"--encoding=\u7f16\u7801"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u6253\u5f00\u547d\u4ee4\u884c\u4e2d\u5217\u51fa\u7684\u6587\u4ef6\u65f6\u4f7f\u7528\u7684\u5b57\u7b26\u7f16\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"--new-window"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5df2\u5b58\u5728\u7684gedit\u5b9e\u4f8b\u4e2d\u65b0\u5efa\u4e00\u4e2a\u6700\u4e0a\u5c42\u7a97\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"--new-document"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5df2\u5b58\u5728\u7684 gedit \u5b9e\u4f8b\u4e2d\u65b0\u5efa\u4e00\u4e2a\u6587\u6863")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-w"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u72ec\u5360\u65b9\u5f0f\u6253\u5f00\u6587\u4ef6\u76f4\u5230\u6587\u4ef6\u5173\u95ed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u72ec\u7acb\u6a21\u5f0f\u8fd0\u884cgedit")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u663e\u793a\u53ef\u4f7f\u7528\u7684\u7f16\u7801\u9009\u9879\u5217\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# gedit --list-encodings\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6253\u5f00\u547d\u4ee4\u884c\u4e2d\u5217\u51fa\u7684\u6587\u4ef6\u65f6\u4f7f\u7528\u7684\u5b57\u7b26\u7f16\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# gedit --encoding=GB2312\n")),(0,a.kt)("p",null,"\u5728\u5df2\u5b58\u5728\u7684gedit\u5b9e\u4f8b\u4e2d\u65b0\u5efa\u4e00\u4e2a\u6700\u4e0a\u5c42\u7a97\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# gedit --new-window\n")),(0,a.kt)("p",null,"\u4ee5\u72ec\u7acb\u6a21\u5f0f\u8fd0\u884cgedit\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# gedit -s\n")))}c.isMDXComponent=!0}}]);