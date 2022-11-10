"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),u=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),s=n,b=c["".concat(m,".").concat(s)]||c[s]||d[s]||l;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={title:"beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",summary:"beadm\u547d\u4ee4\u662f\u7ba1\u7406ZFS\u542f\u52a8\u73af\u5883\uff08BEs\uff09\u7684\u7528\u6237\u754c\u9762\u3002\u6b64\u5b9e\u7528\u7a0b\u5e8f\u4f9b\u5e0c\u671b\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e0a\u7ba1\u7406\u591a\u4e2a Oracle Solaris \u5b9e\u4f8b\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u3002\u7528\u6237\u901a\u8fc7\u4f7f\u7528BeFmris\u786e\u5b9a\u8981\u7ba1\u7406\u7684BE\u3002",meta_keywords:"beadm\u547d\u4ee4,\u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",meta_description:"beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",categories:"linux",tag:"linux\u547d\u4ee4"},o=void 0,i={unversionedId:"Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",id:"Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",title:"beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",description:"beadm\u547d\u4ee4\u662f\u7ba1\u7406ZFS\u542f\u52a8\u73af\u5883\uff08BEs\uff09\u7684\u7528\u6237\u754c\u9762\u3002\u6b64\u5b9e\u7528\u7a0b\u5e8f\u4f9b\u5e0c\u671b\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e0a\u7ba1\u7406\u591a\u4e2a Oracle Solaris \u5b9e\u4f8b\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u3002\u7528\u6237\u901a\u8fc7\u4f7f\u7528BeFmris\u786e\u5b9a\u8981\u7ba1\u7406\u7684BE\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883.md",sourceDirName:"Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406",slug:"/Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883.md",tags:[],version:"current",frontMatter:{title:"beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",summary:"beadm\u547d\u4ee4\u662f\u7ba1\u7406ZFS\u542f\u52a8\u73af\u5883\uff08BEs\uff09\u7684\u7528\u6237\u754c\u9762\u3002\u6b64\u5b9e\u7528\u7a0b\u5e8f\u4f9b\u5e0c\u671b\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e0a\u7ba1\u7406\u591a\u4e2a Oracle Solaris \u5b9e\u4f8b\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u3002\u7528\u6237\u901a\u8fc7\u4f7f\u7528BeFmris\u786e\u5b9a\u8981\u7ba1\u7406\u7684BE\u3002",meta_keywords:"beadm\u547d\u4ee4,\u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",meta_description:"beadm\u547d\u4ee4 \u2013 \u7ba1\u7406 ZFS \u5f15\u5bfc\u73af\u5883",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6\u7ba1\u7406",permalink:"/docs/category/\u6587\u4ef6\u7ba1\u7406"},next:{title:"bsdtar\u547d\u4ee4 \u2013 \u8bfb\u53d6\u548c\u5199\u5165\u78c1\u5e26\u5b58\u6863\u6587\u4ef6",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u4ef6\u7ba1\u7406/bsdtar\u547d\u4ee4 \u2013 \u8bfb\u53d6\u548c\u5199\u5165\u78c1\u5e26\u5b58\u6863\u6587\u4ef6"}},m={},u=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"beadm\u547d\u4ee4\u662f\u7ba1\u7406ZFS\u542f\u52a8\u73af\u5883\uff08BEs\uff09\u7684\u7528\u6237\u754c\u9762\u3002\u6b64\u5b9e\u7528\u7a0b\u5e8f\u4f9b\u5e0c\u671b\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e0a\u7ba1\u7406\u591a\u4e2a Oracle Solaris \u5b9e\u4f8b\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u3002\u7528\u6237\u901a\u8fc7\u4f7f\u7528BeFmris\u786e\u5b9a\u8981\u7ba1\u7406\u7684BE\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"beadm ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65b0\u7684\u5f15\u5bfc\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"destroy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9500\u6bc1\u5f15\u5bfc\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5217\u51fa\u5f15\u5bfc\u73af\u5883\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6302\u8f7d\u5f15\u5bfc\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unmount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5378\u8f7d\u5f15\u5bfc\u73af\u5883")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rename"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539\u5f15\u5bfc\u73af\u5883\u540d\u79f0")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u521b\u5efa\u65b0\u7684\u5f15\u5bfc\u73af\u5883\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# beadm create mylinux\n")),(0,n.kt)("p",null,"\u9500\u6bc1\u4e0a\u9762\u521b\u5efa\u7684\u5f15\u5bfc\u73af\u5883\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# beadm destroy mylinux\n")),(0,n.kt)("p",null,"\u5217\u51fa\u6240\u6709\u5f15\u5bfc\u73af\u5883\u4fe1\u606f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# beadm list\n")),(0,n.kt)("p",null,"\u6302\u8f7d\u5f15\u5bfc\u73af\u5883\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# beadm mount mylinux\n")))}d.isMDXComponent=!0}}]);