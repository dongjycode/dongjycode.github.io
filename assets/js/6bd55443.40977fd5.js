"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),d=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),s=n,f=p["".concat(u,".").concat(s)]||p[s]||m[s]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={title:"bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",summary:"bootadm \u547d\u4ee4\u7ba1\u7406\u542f\u52a8\u5b58\u6863\uff0c\u5bf9\u4e8e x86 \u7684\u542f\u52a8\u73af\u5883\uff0c\u7ba1\u7406 GRUB\uff08GRand Unified Bootloader\uff09\u83dc\u5355\u3002 \u5bf9\u4e8ex86\u6765\u8bf4\uff0c\u652f\u6301Legacy GRUB\u548cGRUB2\uff08\u4f46\u4e0d\u662f\u540c\u65f6\uff09\u3002\u66f4\u65b0\u5b58\u6863\u9009\u9879\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u65b0\u5f15\u5bfc\u5b58\u6863\u7684\u65b9\u6cd5\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9884\u9632\u63aa\u65bd\u6216\u4f5c\u4e3a\u6062\u590d\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002",meta_keywords:"bootadm\u547d\u4ee4,\u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",meta_description:"bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,i={unversionedId:"Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",id:"Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",title:"bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",description:"bootadm \u547d\u4ee4\u7ba1\u7406\u542f\u52a8\u5b58\u6863\uff0c\u5bf9\u4e8e x86 \u7684\u542f\u52a8\u73af\u5883\uff0c\u7ba1\u7406 GRUB\uff08GRand Unified Bootloader\uff09\u83dc\u5355\u3002 \u5bf9\u4e8ex86\u6765\u8bf4\uff0c\u652f\u6301Legacy GRUB\u548cGRUB2\uff08\u4f46\u4e0d\u662f\u540c\u65f6\uff09\u3002\u66f4\u65b0\u5b58\u6863\u9009\u9879\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u65b0\u5f15\u5bfc\u5b58\u6863\u7684\u65b9\u6cd5\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9884\u9632\u63aa\u65bd\u6216\u4f5c\u4e3a\u6062\u590d\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e.md",sourceDirName:"Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406",slug:"/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",permalink:"/docs/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{title:"bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",summary:"bootadm \u547d\u4ee4\u7ba1\u7406\u542f\u52a8\u5b58\u6863\uff0c\u5bf9\u4e8e x86 \u7684\u542f\u52a8\u73af\u5883\uff0c\u7ba1\u7406 GRUB\uff08GRand Unified Bootloader\uff09\u83dc\u5355\u3002 \u5bf9\u4e8ex86\u6765\u8bf4\uff0c\u652f\u6301Legacy GRUB\u548cGRUB2\uff08\u4f46\u4e0d\u662f\u540c\u65f6\uff09\u3002\u66f4\u65b0\u5b58\u6863\u9009\u9879\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u65b0\u5f15\u5bfc\u5b58\u6863\u7684\u65b9\u6cd5\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9884\u9632\u63aa\u65bd\u6216\u4f5c\u4e3a\u6062\u590d\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002",meta_keywords:"bootadm\u547d\u4ee4,\u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",meta_description:"bootadm\u547d\u4ee4 \u2013 \u7ba1\u7406\u5f15\u5bfc\u914d\u7f6e",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"aulastlog\u547d\u4ee4 \u2013 \u6253\u5370\u6700\u8fd1\u767b\u9646\u8bb0\u5f55",permalink:"/docs/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/aulastlog\u547d\u4ee4 \u2013 \u6253\u5370\u6700\u8fd1\u767b\u9646\u8bb0\u5f55"},next:{title:"fgconsole\u547d\u4ee4 \u2013 \u663e\u793a\u6d3b\u52a8\u7684\u865a\u62df\u7ec8\u7aef\u6570\u91cf",permalink:"/docs/Linux\u547d\u4ee4/\u7cfb\u7edf\u7ba1\u7406/fgconsole\u547d\u4ee4 \u2013 \u663e\u793a\u6d3b\u52a8\u7684\u865a\u62df\u7ec8\u7aef\u6570\u91cf"}},u={},d=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"bootadm \u547d\u4ee4\u7ba1\u7406\u542f\u52a8\u5b58\u6863\uff0c\u5bf9\u4e8e x86 \u7684\u542f\u52a8\u73af\u5883\uff0c\u7ba1\u7406 GRUB\uff08GRand Unified Bootloader\uff09\u83dc\u5355\u3002 \u5bf9\u4e8ex86\u6765\u8bf4\uff0c\u652f\u6301Legacy GRUB\u548cGRUB2\uff08\u4f46\u4e0d\u662f\u540c\u65f6\uff09\u3002\u66f4\u65b0\u5b58\u6863\u9009\u9879\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u65b0\u5f15\u5bfc\u5b58\u6863\u7684\u65b9\u6cd5\uff0c\u4f5c\u4e3a\u4e00\u79cd\u9884\u9632\u63aa\u65bd\u6216\u4f5c\u4e3a\u6062\u590d\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"bootadm ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"update-archive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u5f15\u5bfc\u5f52\u6863\u6587\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"set-menu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u7f3a\u7701\u7684\u5f15\u5bfc\u9879")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list-menu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793aGRUB \u83dc\u5355\u9879")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add-entry"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u83dc\u5355\u9879")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u66f4\u65b0\u5f15\u5bfc\u5f52\u6863\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# bootadm update-archive\n")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u7f3a\u7701\u7684\u5f15\u5bfc\u9879\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# bootadm set-menu default=5\n")),(0,n.kt)("p",null,"\u663e\u793aGRUB \u83dc\u5355\u9879\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# bootadm list-menu\n")))}m.isMDXComponent=!0}}]);