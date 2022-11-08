"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[4872],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),p=d(n),u=r,f=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,l[1]=m;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7973:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",summary:"metainit\u547d\u4ee4\u6839\u636e\u547d\u4ee4\u884c\u4e0a\u6307\u5b9a\u7684\u4fe1\u606f\u914d\u7f6e\u5143\u7ec4\u4ef6\u548c\u70ed\u5907\u7528\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884cmetainit\uff0c\u8ba9\u5b83\u4f7f\u7528\u4f60\u5728/etc/lvm/md.\u6307\u5b9a\u7684\u914d\u7f6e\u6761\u76ee\u9009\u9879\u5361\u6587\u4ef6\u3002\u6240\u6709metadevices\u5728\u4f7f\u7528\u4e4b\u524d\u90fd\u5fc5\u987b\u901a\u8fc7metainit\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002",meta_keywords:"metainit\u547d\u4ee4,\u914d\u7f6e\u5143\u8bbe\u5907",meta_description:"metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,m={unversionedId:"\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",id:"\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",title:"metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",description:"metainit\u547d\u4ee4\u6839\u636e\u547d\u4ee4\u884c\u4e0a\u6307\u5b9a\u7684\u4fe1\u606f\u914d\u7f6e\u5143\u7ec4\u4ef6\u548c\u70ed\u5907\u7528\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884cmetainit\uff0c\u8ba9\u5b83\u4f7f\u7528\u4f60\u5728/etc/lvm/md.\u6307\u5b9a\u7684\u914d\u7f6e\u6761\u76ee\u9009\u9879\u5361\u6587\u4ef6\u3002\u6240\u6709metadevices\u5728\u4f7f\u7528\u4e4b\u524d\u90fd\u5fc5\u987b\u901a\u8fc7metainit\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002",source:"@site/docs/\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907.md",sourceDirName:"\u7cfb\u7edf\u7ba1\u7406",slug:"/\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7cfb\u7edf\u7ba1\u7406/metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907.md",tags:[],version:"current",frontMatter:{title:"metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",summary:"metainit\u547d\u4ee4\u6839\u636e\u547d\u4ee4\u884c\u4e0a\u6307\u5b9a\u7684\u4fe1\u606f\u914d\u7f6e\u5143\u7ec4\u4ef6\u548c\u70ed\u5907\u7528\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884cmetainit\uff0c\u8ba9\u5b83\u4f7f\u7528\u4f60\u5728/etc/lvm/md.\u6307\u5b9a\u7684\u914d\u7f6e\u6761\u76ee\u9009\u9879\u5361\u6587\u4ef6\u3002\u6240\u6709metadevices\u5728\u4f7f\u7528\u4e4b\u524d\u90fd\u5fc5\u987b\u901a\u8fc7metainit\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002",meta_keywords:"metainit\u547d\u4ee4,\u914d\u7f6e\u5143\u8bbe\u5907",meta_description:"metainit\u547d\u4ee4 \u2013 \u914d\u7f6e\u5143\u8bbe\u5907",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"metaimport\u547d\u4ee4 \u2013 \u5c06\u78c1\u76d8\u96c6\u5bfc\u5165\u5230\u73b0\u6709\u7684Solaris Volume Manager\u914d\u7f6e\u4e2d",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/metaimport\u547d\u4ee4 \u2013 \u5c06\u78c1\u76d8\u96c6\u5bfc\u5165\u5230\u73b0\u6709\u7684Solaris Volume Manager\u914d\u7f6e\u4e2d"},next:{title:"metaparam\u547d\u4ee4 \u2013 \u4fee\u6539\u5143\u8bbe\u5907\u7684\u53c2\u6570",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/metaparam\u547d\u4ee4 \u2013 \u4fee\u6539\u5143\u8bbe\u5907\u7684\u53c2\u6570"}},o={},d=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],s={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"metainit\u547d\u4ee4\u6839\u636e\u547d\u4ee4\u884c\u4e0a\u6307\u5b9a\u7684\u4fe1\u606f\u914d\u7f6e\u5143\u7ec4\u4ef6\u548c\u70ed\u5907\u7528\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884cmetainit\uff0c\u8ba9\u5b83\u4f7f\u7528\u4f60\u5728/etc/lvm/md.\u6307\u5b9a\u7684\u914d\u7f6e\u6761\u76ee\u9009\u9879\u5361\u6587\u4ef6\u3002\u6240\u6709metadevices\u5728\u4f7f\u7528\u4e4b\u524d\u90fd\u5fc5\u987b\u901a\u8fc7metainit\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,r.kt)("p",null,"metainit","[\u53c2\u6570]"),(0,r.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5373\u4f7f\u7247\u4e2d\u7684\u4e00\u4e2a\u5305\u542b\u4e00\u4e2a\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u6216\u6b63\u7528\u4f5c\u4ea4\u6362\uff0c\u6216\u8005\u6b63\u5728\u521b\u5efa\u7684\u6761\u5e26\u7684\u5927\u5c0f\u5c0f\u4e8e\u57fa\u7840\u8f6f\u5206\u533a\u7684\u5927\u5c0f\uff0c\u4e5f\u5f3a\u5236metainit\u547d\u4ee4\u7ee7\u7eed\u6267\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u4f7f\u7528\u60c5\u51b5\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4e0d\u5b9e\u9645\u8bbe\u7f6e\u5143\u8bbe\u5907\u7684\u60c5\u51b5\u4e0b\u68c0\u67e5\u547d\u4ee4\u884c\u6216md.tab\u6761\u76ee\u7684\u8bed\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-r"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u5bfc\u65f6\u4ec5\u5728shell\u811a\u672c\u4e2d\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-s setname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7528\u4e8emetainit\u7684\u78c1\u76d8\u96c6\u7684\u540d\u79f0")))),(0,r.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,r.kt)("p",null,"\u663e\u793a\u4e86\u4e00\u4e2a\u7531\u4e24\u4e2a\u5207\u7247\u7ec4\u6210\u7684\u5143\u8bbe\u5907/ dev / md / dsk / d15\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# metainit d15 1 2 c0t1d0s0 c0t2d0s0 -i 32k\n")),(0,r.kt)("p",null,"\u663e\u793a\u4e86\u4e00\u4e2a\u5143\u8bbe\u5907/ dev / md / dsk / d75\uff0c\u7531\u4e09\u4e2a\u78c1\u76d8\u7684\u4e24\u4e2a\u6761\u5e26\u7684\u4e32\u8054\u7ec4\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# metainit d75 2 3 c0t1d0s0 c0t2d0s0 \\ \n          c0t3d0s0 -i 16k \\ \n3 c1t1d0s0 c1t2d0s0 c1t3d0s0 -i 32k\n")),(0,r.kt)("p",null,"\u663e\u793a\u4e86\u4e00\u4e2a\u53cc\u5411\u955c\u50cf/ dev / md / dsk / d50\uff0c\u7531\u4e24\u4e2a\u5b50\u955c\u50cf\u7ec4\u6210\u3002\u8be5\u955c\u50cf\u4e0d\u5305\u542b\u4efb\u4f55\u73b0\u6709\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# metainit d51 1 1 c0t1d0s0 \n# metainit d52 1 1 c0t2d0s0 \n# metainit d50 -m d51 \n# metattach d50 d52\n")),(0,r.kt)("p",null,"\u663e\u793a\u4e86\u4e00\u4e2a\u5143\u8bbe\u5907/ dev / md / dsk / d75\uff0c\u7531\u79f0\u4e3aset1\u7684\u78c1\u76d8\u96c6\u5185\u4e24\u4e2a\u6761\u5e26\u7684\u4e32\u8054\u7ec4\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# metainit -s set1 d75 2 3 c2t1d0s0 c2t2d0s0 \\ \n          c2t3d0s0 -i 32k \n# metainit -s set1 d51 1 1 c2t1d0s0 \n# metainit -s set1 d52 1 1 c3t1d0s0 \n# metainit -s set1 d50 -m d51 \n# metattach -s set1 d50 d52\n")))}c.isMDXComponent=!0}}]);