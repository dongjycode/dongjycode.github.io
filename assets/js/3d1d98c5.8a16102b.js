"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,k=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",summary:"lvmdiskscan\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u4e3aLVM\u7269\u7406\u5377\u626b\u63cf\u6240\u6709\u7684SCSI\u3001IDE\u78c1\u76d8\u3001\u591a\u79cd\u8bbe\u5907\u548c\u5176\u4ed6\u5757\u8bbe\u5907\u3002",meta_keywords:"lvmdiskscan\u547d\u4ee4,\u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",meta_description:"lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",categories:"linux",tag:"linux\u547d\u4ee4"},i=void 0,s={unversionedId:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",id:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",title:"lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",description:"lvmdiskscan\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u4e3aLVM\u7269\u7406\u5377\u626b\u63cf\u6240\u6709\u7684SCSI\u3001IDE\u78c1\u76d8\u3001\u591a\u79cd\u8bbe\u5907\u548c\u5176\u4ed6\u5757\u8bbe\u5907\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907.md",sourceDirName:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406",slug:"/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907.md",tags:[],version:"current",frontMatter:{title:"lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",summary:"lvmdiskscan\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u4e3aLVM\u7269\u7406\u5377\u626b\u63cf\u6240\u6709\u7684SCSI\u3001IDE\u78c1\u76d8\u3001\u591a\u79cd\u8bbe\u5907\u548c\u5176\u4ed6\u5757\u8bbe\u5907\u3002",meta_keywords:"lvmdiskscan\u547d\u4ee4,\u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",meta_description:"lvmdiskscan\u547d\u4ee4 \u2013 \u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"lvmconf\u547d\u4ee4 \u2013 LVM\u914d\u7f6e\u4fee\u6539",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmconf\u547d\u4ee4 \u2013 LVM\u914d\u7f6e\u4fee\u6539"},next:{title:"lvmdump\u547d\u4ee4 \u2013 \u8f6c\u50a8LVM2\u6709\u5173\u7684\u5404\u79cd\u4fe1\u606f",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvmdump\u547d\u4ee4 \u2013 \u8f6c\u50a8LVM2\u6709\u5173\u7684\u5404\u79cd\u4fe1\u606f"}},o={},c=[{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570-1",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"lvmdiskscan\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u4e3aLVM\u7269\u7406\u5377\u626b\u63cf\u6240\u6709\u7684SCSI\u3001IDE\u78c1\u76d8\u3001\u591a\u79cd\u8bbe\u5907\u548c\u5176\u4ed6\u5757\u8bbe\u5907\u3002\nlvmdiskscan\u547d\u4ee4\u4f1a\u626b\u63cf\u6240\u6709\u53ef\u89c1\u7684LVM2\u8bbe\u5907\uff0c\u800cLVM2\u6bd4LVM1\u652f\u6301\u4e86\u66f4\u591a\u7684\u903b\u8f91\u5377\u7c7b\u578b\uff0c\u652f\u6301\u4e86cluster lvm\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86\u57fa\u4e8e\u6587\u672c\u683c\u5f0f\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u547d\u4ee4\u96c6\u548c\u64cd\u4f5c\u547d\u4ee4\u3002\nlvmdiskscan\u547d\u4ee4\u62a5\u544a\u7684\u5927\u5c0f\u5c31\u662f\u5b9e\u9645\u8bbe\u5907\u7684\u5927\u5c0f\u3002\u901a\u5e38\u8fd8\u53ef\u4ee5\u901a\u8fc7lvmdiskscan\u547d\u4ee4\u6765\u67e5\u770b\u90a3\u4e9b\u8bbe\u5907\u88ab\u505a\u6210\u4e86\u7269\u7406\u5377\u3002"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("p",null,"lvmdiskscan ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570-1"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u62a5\u544a\u7269\u7406\u5377")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-v"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u957f\u683c\u5f0f\u663e\u793a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e2e\u52a9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-d"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907\uff0c\u53ea\u62a5\u544a\u7269\u7406\u5377\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# lvmdiskscan -l\n")),(0,a.kt)("p",null,"\u626b\u63cf\u6240\u6709\u53ef\u89c1LVM2\u8bbe\u5907\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# lvmdiskscan\n")),(0,a.kt)("p",null,"\u626b\u63cf\u53ef\u89c1LVM2\u6240\u6709\u8bbe\u5907\uff0c\u4ee5\u957f\u683c\u5f0f\u663e\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# lvmdiskscan -v\n")))}u.isMDXComponent=!0}}]);