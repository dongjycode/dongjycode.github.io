"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1908],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>s});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),c=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(r),s=n,f=d["".concat(i,".").concat(s)]||d[s]||m[s]||o;return r?a.createElement(f,l(l({ref:e},p),{},{components:r})):a.createElement(f,l({ref:e},p))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:n,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8634:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",summary:"warnquota\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5bf9\u8d85\u8fc7\u78c1\u76d8\u9650\u989d\u7684\u7528\u6237\u53d1\u51fa\u8b66\u544a\u90ae\u4ef6\uff0c\u800c\u90ae\u4ef6\u7684\u5185\u5bb9\u5728/etc/warnquota.conf\u6587\u4ef6\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002",meta_keywords:"warnquota\u547d\u4ee4,\u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",meta_description:"warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,u={unversionedId:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",id:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",title:"warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",description:"warnquota\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5bf9\u8d85\u8fc7\u78c1\u76d8\u9650\u989d\u7684\u7528\u6237\u53d1\u51fa\u8b66\u544a\u90ae\u4ef6\uff0c\u800c\u90ae\u4ef6\u7684\u5185\u5bb9\u5728/etc/warnquota.conf\u6587\u4ef6\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237.md",sourceDirName:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406",slug:"/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237.md",tags:[],version:"current",frontMatter:{title:"warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",summary:"warnquota\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5bf9\u8d85\u8fc7\u78c1\u76d8\u9650\u989d\u7684\u7528\u6237\u53d1\u51fa\u8b66\u544a\u90ae\u4ef6\uff0c\u800c\u90ae\u4ef6\u7684\u5185\u5bb9\u5728/etc/warnquota.conf\u6587\u4ef6\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002",meta_keywords:"warnquota\u547d\u4ee4,\u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",meta_description:"warnquota\u547d\u4ee4 \u2013 \u53d1\u9001\u90ae\u4ef6\u7ed9\u8d85\u51fa\u914d\u989d\u7684\u7528\u6237",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"vgs\u547d\u4ee4 \u2013 \u62a5\u544a\u5173\u4e8e\u5377\u7ec4\u7684\u4fe1\u606f",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/vgs\u547d\u4ee4 \u2013 \u62a5\u544a\u5173\u4e8e\u5377\u7ec4\u7684\u4fe1\u606f"},next:{title:"\u6587\u6863\u7f16\u8f91",permalink:"/docs/category/\u6587\u6863\u7f16\u8f91"}},i={},c=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],p={toc:c};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"warnquota\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u5bf9\u8d85\u8fc7\u78c1\u76d8\u9650\u989d\u7684\u7528\u6237\u53d1\u51fa\u8b66\u544a\u90ae\u4ef6\uff0c\u800c\u90ae\u4ef6\u7684\u5185\u5bb9\u5728/etc/warnquota.conf\u6587\u4ef6\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002\nwarnquota\u547d\u4ee4\u9700\u8981\u5b89\u88c5\u5305quota-warnquota\u7684\u652f\u6301\u624d\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"warnquota ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-u"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5411\u7528\u6237\u53d1\u51fa\u8b66\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-g"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5411\u7ec4\u7fa4\u53d1\u51fa\u8b66\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u66f4\u6613\u61c2\u7684\u5355\u4f4d\u53d1\u9001\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u907f\u514dautofs\u6302\u8f7d\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u7ed9\u81ea\u5df1\u53d1\u9001\u78c1\u76d8\u914d\u989d\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-F<\u683c\u5f0f\u540d>"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u7279\u5b9a\u683c\u5f0f\u7684\u914d\u989d\u6587\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-c<\u914d\u7f6e\u6587\u4ef6>"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u975e\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-a<\u7ba1\u7406\u5458\u6587\u4ef6>"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u975e\u9ed8\u8ba4\u7684\u7ba1\u7406\u5458\u6587\u4ef6")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u53d1\u9001\u78c1\u76d8\u914d\u989d\u8b66\u544a\u7535\u5b50\u90ae\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# warnquota -c /etc/warnquota.conf\n")),(0,n.kt)("p",null,"\u7528\u66f4\u6613\u61c2\u7684\u5355\u4f4d\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# warnquota -s\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u7279\u5b9a\u683c\u5f0f\u7684\u914d\u989d\u6587\u4ef6\u53d1\u9001\u78c1\u76d8\u914d\u989d\u8b66\u544a\u7535\u5b50\u90ae\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# warnquota -F /etc/warning.conf\n")))}m.isMDXComponent=!0}}]);