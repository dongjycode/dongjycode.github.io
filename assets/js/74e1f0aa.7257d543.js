"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1658],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},o=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=p(a),f=n,N=u["".concat(i,".").concat(f)]||u[f]||k[f]||l;return a?r.createElement(N,d(d({ref:e},o),{},{components:a})):r.createElement(N,d({ref:e},o))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=u;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:n,d[1]=m;for(var p=2;p<l;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7387:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",summary:"mdadm\u547d\u4ee4\u662fmultiple devices admin\u7684\u7b80\u79f0\uff0c\u5b83\u662flinux\u4e0b\u7684\u4e00\u6b3e\u6807\u51c6\u7684\u8f6f\u4ef6 RAID\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406linux\u8f6fRAID\uff0c\u6bd4\u5982\u521b\u5efa\u3001\u8c03\u6574\u3001\u76d1\u63a7RAID\u3002",meta_keywords:"mdadm\u547d\u4ee4,\u7ba1\u7406linux\u8f6fRAID",meta_description:"mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",categories:"linux",tag:"linux\u547d\u4ee4"},d=void 0,m={unversionedId:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",id:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",title:"mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",description:"mdadm\u547d\u4ee4\u662fmultiple devices admin\u7684\u7b80\u79f0\uff0c\u5b83\u662flinux\u4e0b\u7684\u4e00\u6b3e\u6807\u51c6\u7684\u8f6f\u4ef6 RAID\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406linux\u8f6fRAID\uff0c\u6bd4\u5982\u521b\u5efa\u3001\u8c03\u6574\u3001\u76d1\u63a7RAID\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID.md",sourceDirName:"Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406",slug:"/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID.md",tags:[],version:"current",frontMatter:{title:"mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",summary:"mdadm\u547d\u4ee4\u662fmultiple devices admin\u7684\u7b80\u79f0\uff0c\u5b83\u662flinux\u4e0b\u7684\u4e00\u6b3e\u6807\u51c6\u7684\u8f6f\u4ef6 RAID\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406linux\u8f6fRAID\uff0c\u6bd4\u5982\u521b\u5efa\u3001\u8c03\u6574\u3001\u76d1\u63a7RAID\u3002",meta_keywords:"mdadm\u547d\u4ee4,\u7ba1\u7406linux\u8f6fRAID",meta_description:"mdadm\u547d\u4ee4 \u2013 \u7ba1\u7406linux\u8f6fRAID",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"lvs\u547d\u4ee4 \u2013 \u62a5\u544a\u6709\u5173\u903b\u8f91\u5377\u7684\u4fe1\u606f",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/lvs\u547d\u4ee4 \u2013 \u62a5\u544a\u6709\u5173\u903b\u8f91\u5377\u7684\u4fe1\u606f"},next:{title:"mformat\u547d\u4ee4 \u2013 \u683c\u5f0f\u5316MS-DOS\u6587\u4ef6\u7cfb\u7edf\u7684\u78c1\u76d8",permalink:"/docs/Linux\u547d\u4ee4/\u78c1\u76d8\u7ba1\u7406/mformat\u547d\u4ee4 \u2013 \u683c\u5f0f\u5316MS-DOS\u6587\u4ef6\u7cfb\u7edf\u7684\u78c1\u76d8"}},i={},p=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u6a21\u5f0f\u53c2\u6570\uff1a \u53c2\u6570",id:"\u5e38\u7528\u6a21\u5f0f\u53c2\u6570-\u53c2\u6570",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],o={toc:p};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"mdadm\u547d\u4ee4\u662fmultiple devices admin\u7684\u7b80\u79f0\uff0c\u5b83\u662flinux\u4e0b\u7684\u4e00\u6b3e\u6807\u51c6\u7684\u8f6f\u4ef6 RAID\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u7ba1\u7406linux\u8f6fRAID\uff0c\u6bd4\u5982\u521b\u5efa\u3001\u8c03\u6574\u3001\u76d1\u63a7RAID\u3002\nmdadm\u547d\u4ee4\u80fd\u591f\u8bca\u65ad\u3001\u76d1\u63a7\u548c\u6536\u96c6\u8be6\u7ec6\u7684\u9635\u5217\u4fe1\u606f\uff0c\u662f\u4e00\u4e2a\u5355\u72ec\u96c6\u6210\u5316\u7684\u7a0b\u5e8f\u800c\u4e0d\u662f\u4e00\u4e9b\u5206\u6563\u7a0b\u5e8f\u7684\u96c6\u5408\uff0c\u56e0\u6b64\u5bf9\u4e0d\u540cRAID\u7ba1\u7406\u547d\u4ee4\u6709\u5171\u901a\u7684\u8bed\u6cd5\u3002\nmdadm\u547d\u4ee4\u80fd\u591f\u6267\u884c\u51e0\u4e4e\u6240\u6709\u7684\u529f\u80fd\u800c\u4e0d\u9700\u8981\u914d\u7f6e\u6587\u4ef6\uff08\u4e5f\u6ca1\u6709\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\uff09\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"mdadm ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u6a21\u5f0f\u53c2\u6570-\u53c2\u6570"},"\u5e38\u7528\u6a21\u5f0f\u53c2\u6570\uff1a \u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684RAID\uff0c\u6bcf\u4e2a\u8bbe\u5907\u90fd\u5177\u6709\u5143\u6570\u636e\uff08\u8d85\u7ea7\u5757\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"build"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u6216\u7ec4\u5408\u4e00\u4e2a\u6ca1\u6709\u5143\u6570\u636e\uff08\u8d85\u7ea7\u5757\uff09\u7684RAID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"assemble"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u88c5\u4ee5\u524d\u521b\u5efa\u7684RAID\u7684\u7ec4\u4ef6\u96c6\u6210\u5230\u4e00\u4e2a\u6d3b\u52a8RAID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u6539\u4e00\u4e2a\u73b0\u6709\u7684RAID\uff0c\u6bd4\u5982\u6dfb\u52a0\u65b0\u7684\u5907\u7528\u6210\u5458\u548c\u5220\u9664\u6545\u969c\u8bbe\u5907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"misc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u62a5\u544a\u6216\u4fee\u6539\u5404\u79cdRAID\u76f8\u5173\u8bbe\u5907\uff0c\u6bd4\u5982\u67e5\u8be2RAID\u6216\u8005\u8bbe\u5907\u7684\u72b6\u6001\u4fe1\u606f\u3001\u5220\u9664\u65e7\u7684\u8d85\u7ea7\u5757")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"grow"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u6574/\u91cd\u65b0\u5851\u9020\u4e00\u4e2a\u6d3b\u52a8RAID\uff0c\u6bd4\u5982\u6539\u53d8RAID\u5bb9\u91cf\u6216\u9635\u5217\u4e2d\u7684\u8bbe\u5907\u6570\u76ee\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"monitor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u63a7\u4e00\u4e2a\u6216\u591a\u4e2aRAID\u7684\u66f4\u6539")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"incremental"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u8bbe\u5907\u5230RAID\u4e2d\uff0c\u6216\u4eceRAID\u4e2d\u5220\u9664\u8bbe\u5907\u3002")))),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-D"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793aRAID\u8bbe\u5907\u7684\u8be6\u7ec6\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u5165\u4e00\u4e2a\u4ee5\u524d\u5b9a\u4e49\u7684RAID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u4e00\u4e2a\u6ca1\u6709\u8d85\u7ea7\u5757\u7684RAID\u8bbe\u5907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-F"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u76d1\u63a7\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-G"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u6539RAID\u8bbe\u5907\u7684\u5927\u5c0f\u6216\u5f62\u6001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-I"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u8bbe\u5907\u5230RAID\u4e2d\uff0c\u6216\u4eceRAID\u4e2d\u5220\u9664\u8bbe\u5907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-z"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u5efaRAID1\u3001RAID4\u3001RAID5\u3001RAID6\u540e\u4ece\u6bcf\u4e2aRAID\u6210\u5458\u83b7\u53d6\u7684\u7a7a\u95f4\u5bb9\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u626b\u63cf\u914d\u7f6e\u6587\u4ef6\u6216/proc/mdstat\u4ee5\u641c\u5bfb\u4e22\u5931\u7684\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-C"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efaRAID\u8bbe\u5907\uff0c\u628aRAID\u4fe1\u606f\u5199\u5165\u6bcf\u4e2aRAID\u6210\u5458\u8d85\u7ea7\u5757\u4e2d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-v"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793aRAID\u521b\u5efa\u8fc7\u7a0b\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efaRAID\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\uff0c\u4e0d\u628aRAID\u4fe1\u606f\u5199\u5165\u6bcf\u4e2aRAID\u6210\u5458\u7684\u8d85\u7ea7\u5757\u4e2d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9aRAID\u7684\u7ea7\u522b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9aRAID\u4e2d\u6d3b\u52a8\u8bbe\u5907\u7684\u6570\u76ee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u628aRAID\u6210\u5458\u5217\u4e3a\u6709\u95ee\u9898\uff0c\u4ee5\u4fbf\u79fb\u9664\u8be5\u6210\u5458")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-r"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u628aRAID\u6210\u5458\u79fb\u51faRAID\u8bbe\u5907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5411RAID\u8bbe\u5907\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--re-add"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u628a\u6700\u8fd1\u79fb\u9664\u7684RAID\u6210\u5458\u91cd\u65b0\u6dfb\u52a0\u5230RAID\u8bbe\u5907\u4e2d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-E"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u770bRAID\u6210\u5458\u8be6\u7ec6\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9achunk\u5927\u5c0f\uff0c\u521b\u5efa\u4e00\u4e2aRAID\u8bbe\u5907\u65f6\u9ed8\u8ba4\u4e3a512kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-R"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u90e8\u5206\u7ec4\u88c5RAID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-S"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u505c\u7528RAID\u8bbe\u5907\uff0c\u91ca\u653e\u6240\u6709\u8d44\u6e90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u521d\u59cbRAID\u8bbe\u5907\u7684\u5907\u7528\u6210\u5458\u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--zero-superblock"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679cRAID\u8bbe\u5907\u5305\u542b\u4e00\u4e2a\u6709\u6548\u7684\u8d85\u7ea7\u5757\uff0c\u8be5\u5757\u4f7f\u7528\u96f6\u8986\u76d6")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u4f7f\u7528sda1\u548csdb1\u521b\u5efaRAID0\uff0c\u6761\u5e26\u5927\u5c0f\u662f64KB\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mdadm \u2013create /dev/md0 \u2013chunk=64 \u2013level=0 \u2013raid-devices=2 /dev/sda1 /dev/sdb1\n")),(0,n.kt)("p",null,"\u7ed9md0\u589e\u52a0\u70ed\u5907\u76d8sdc1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mdadm /dev/md0 -add /dev/sdc1\n")),(0,n.kt)("p",null,"\u67e5\u770b\u7ec4\u4ef6\u8bbe\u5907sda1\u4e2d\u8d85\u7ea7\u5757\u7684\u4fe1\u606f\u548c\u72b6\u6001\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mdadm \u2013examine /dev/sda1\n")),(0,n.kt)("p",null,"\u505c\u6b62md0\u7684\u8fd0\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mdadm \u2013stop /dev/md0\n")))}k.isMDXComponent=!0}}]);