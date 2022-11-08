"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9679],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),p=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(r),d=n,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(k,s(s({ref:e},c),{},{components:r})):a.createElement(k,s({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4379:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",summary:"\u5c06\u8fdb\u7a0b\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684CPU\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u8fdb\u7a0b\u5207\u6362\u4ea7\u751f\u7684\u65e0\u6548\u65f6\u95f4\u3002\u901a\u8fc7 taskset \u547d\u4ee4\u53ef\u5c06\u67d0\u4e2a\u8fdb\u7a0b\u4e0e\u67d0\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff0c\u4f7f\u5f97\u5176\u4ec5\u5728\u4e0e\u4e4b\u7ed1\u5b9a\u7684CPU\u6838\u5fc3\u4e0a\u8fd0\u884c\u3002",meta_keywords:"taskset\u547d\u4ee4,\u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",meta_description:"taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",categories:"linux",tag:"linux\u547d\u4ee4"},s=void 0,o={unversionedId:"\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",id:"\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",title:"taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",description:"\u5c06\u8fdb\u7a0b\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684CPU\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u8fdb\u7a0b\u5207\u6362\u4ea7\u751f\u7684\u65e0\u6548\u65f6\u95f4\u3002\u901a\u8fc7 taskset \u547d\u4ee4\u53ef\u5c06\u67d0\u4e2a\u8fdb\u7a0b\u4e0e\u67d0\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff0c\u4f7f\u5f97\u5176\u4ec5\u5728\u4e0e\u4e4b\u7ed1\u5b9a\u7684CPU\u6838\u5fc3\u4e0a\u8fd0\u884c\u3002",source:"@site/docs/\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027.md",sourceDirName:"\u7cfb\u7edf\u7ba1\u7406",slug:"/\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7cfb\u7edf\u7ba1\u7406/taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027.md",tags:[],version:"current",frontMatter:{title:"taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",summary:"\u5c06\u8fdb\u7a0b\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684CPU\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u8fdb\u7a0b\u5207\u6362\u4ea7\u751f\u7684\u65e0\u6548\u65f6\u95f4\u3002\u901a\u8fc7 taskset \u547d\u4ee4\u53ef\u5c06\u67d0\u4e2a\u8fdb\u7a0b\u4e0e\u67d0\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff0c\u4f7f\u5f97\u5176\u4ec5\u5728\u4e0e\u4e4b\u7ed1\u5b9a\u7684CPU\u6838\u5fc3\u4e0a\u8fd0\u884c\u3002",meta_keywords:"taskset\u547d\u4ee4,\u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",meta_description:"taskset\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u6216\u68c0\u7d22\u8fdb\u7a0b\u7684CPU\u76f8\u5173\u6027",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"sosreport\u547d\u4ee4 \u2013 \u6536\u96c6\u5e76\u6253\u5305\u8bca\u65ad\u548c\u652f\u6301\u6570\u636e",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/sosreport\u547d\u4ee4 \u2013 \u6536\u96c6\u5e76\u6253\u5305\u8bca\u65ad\u548c\u652f\u6301\u6570\u636e"},next:{title:"timedatectl\u547d\u4ee4 \u2013 \u63a7\u5236\u7cfb\u7edf\u65f6\u95f4\u548c\u65e5\u671f",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/timedatectl\u547d\u4ee4 \u2013 \u63a7\u5236\u7cfb\u7edf\u65f6\u95f4\u548c\u65e5\u671f"}},i={},p=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c06\u8fdb\u7a0b\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684CPU\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u8fdb\u7a0b\u5207\u6362\u4ea7\u751f\u7684\u65e0\u6548\u65f6\u95f4\u3002\u901a\u8fc7 taskset \u547d\u4ee4\u53ef\u5c06\u67d0\u4e2a\u8fdb\u7a0b\u4e0e\u67d0\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff0c\u4f7f\u5f97\u5176\u4ec5\u5728\u4e0e\u4e4b\u7ed1\u5b9a\u7684CPU\u6838\u5fc3\u4e0a\u8fd0\u884c\u3002\n\u7ebf\u7a0b\u662f\u6700\u5c0f\u7684\u5185\u6838\u6267\u884c\u8c03\u5ea6\u5355\u5143\uff0c\u56e0\u6b64\uff0c\u51c6\u786e\u5730\u8bf4\u662f\u5c06\u67d0\u4e2a\u7ebf\u7a0b\u4e0e\u67d0\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff0c\u800c\u975e\u67d0\u4e2a\u8fdb\u7a0b\u3002\ntaskset\u547d\u4ee4\u662f\u4f9d\u636e\u7ebf\u7a0bPID\uff08TID\uff09\u67e5\u8be2\u6216\u8bbe\u7f6e\u7ebf\u7a0b\u7684CPU\u4eb2\u548c\u6027\uff08\u4e0e\u54ea\u4e2aCPU\u6838\u5fc3\u7ed1\u5b9a\uff09\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"taskset ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-a, --all-tasks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u6216\u68c0\u7d22\u6240\u6709\u4efb\u52a1\uff08\u7ebf\u7a0b\uff09\u7684CPU\u76f8\u5173\u6027\u5bf9\u4e8e\u7ed9\u5b9a\u7684PID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-c, --cpu-list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u63a9\u7801\u89e3\u91ca\u4e3a\u5904\u7406\u5668\u7684\u6570\u5b57\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-p, --pid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5728\u73b0\u6709PID\u4e0a\u64cd\u4f5c\uff0c\u4e0d\u8981\u542f\u52a8\u65b0\u4efb\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-V, --version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u7248\u672c\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-h, --help"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u4f7f\u7528\u7ed9\u5b9a\u7684\u5173\u8054\u8fd0\u884c\u65b0\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# taskset mask command [arguments]\n")),(0,n.kt)("p",null,"\u68c0\u7d22\u73b0\u6709\u4efb\u52a1\u7684CPU\u76f8\u5173\u6027\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# taskset -p pid\n")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u73b0\u6709\u4efb\u52a1\u7684CPU\u76f8\u5173\u6027\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# taskset -p mask pid\n")))}u.isMDXComponent=!0}}]);