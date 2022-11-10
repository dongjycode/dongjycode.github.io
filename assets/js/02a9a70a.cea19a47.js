"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(a,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(b,s(s({ref:n},d),{},{components:t})):r.createElement(b,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={title:"sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",summary:"Linux sed \u547d\u4ee4\u662f\u5229\u7528\u811a\u672c\u6765\u5904\u7406\u6587\u672c\u6587\u4ef6\u3002sed \u53ef\u4f9d\u7167\u811a\u672c\u7684\u6307\u4ee4\u6765\u5904\u7406\u3001\u7f16\u8f91\u6587\u672c\u6587\u4ef6\u3002sed \u4e3b\u8981\u7528\u6765\u81ea\u52a8\u7f16\u8f91\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3001\u7b80\u5316\u5bf9\u6587\u4ef6\u7684\u53cd\u590d\u64cd\u4f5c\u3001\u7f16\u5199\u8f6c\u6362\u7a0b\u5e8f\u7b49\u3002",meta_keywords:"sed\u547d\u4ee4,\u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",meta_description:"sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",categories:"linux",tag:"linux\u547d\u4ee4"},s=void 0,l={unversionedId:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",id:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",title:"sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",description:"Linux sed \u547d\u4ee4\u662f\u5229\u7528\u811a\u672c\u6765\u5904\u7406\u6587\u672c\u6587\u4ef6\u3002sed \u53ef\u4f9d\u7167\u811a\u672c\u7684\u6307\u4ee4\u6765\u5904\u7406\u3001\u7f16\u8f91\u6587\u672c\u6587\u4ef6\u3002sed \u4e3b\u8981\u7528\u6765\u81ea\u52a8\u7f16\u8f91\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3001\u7b80\u5316\u5bf9\u6587\u4ef6\u7684\u53cd\u590d\u64cd\u4f5c\u3001\u7f16\u5199\u8f6c\u6362\u7a0b\u5e8f\u7b49\u3002",source:"@site/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6.md",sourceDirName:"Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91",slug:"/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6.md",tags:[],version:"current",frontMatter:{title:"sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",summary:"Linux sed \u547d\u4ee4\u662f\u5229\u7528\u811a\u672c\u6765\u5904\u7406\u6587\u672c\u6587\u4ef6\u3002sed \u53ef\u4f9d\u7167\u811a\u672c\u7684\u6307\u4ee4\u6765\u5904\u7406\u3001\u7f16\u8f91\u6587\u672c\u6587\u4ef6\u3002sed \u4e3b\u8981\u7528\u6765\u81ea\u52a8\u7f16\u8f91\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3001\u7b80\u5316\u5bf9\u6587\u4ef6\u7684\u53cd\u590d\u64cd\u4f5c\u3001\u7f16\u5199\u8f6c\u6362\u7a0b\u5e8f\u7b49\u3002",meta_keywords:"sed\u547d\u4ee4,\u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",meta_description:"sed\u547d\u4ee4 \u2013 \u5904\u7406\u7f16\u8f91\u6587\u672c\u6587\u4ef6",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"sdiff\u547d\u4ee4 \u2013 \u4ee5\u5e76\u6392\u65b9\u5f0f\u5408\u5e76\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/sdiff\u547d\u4ee4 \u2013 \u4ee5\u5e76\u6392\u65b9\u5f0f\u5408\u5e76\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02"},next:{title:"spell\u547d\u4ee4 \u2013 \u5efa\u7acb\u62fc\u5199\u68c0\u67e5\u7a0b\u5e8f",permalink:"/docs/Linux\u547d\u4ee4/\u6587\u6863\u7f16\u8f91/spell\u547d\u4ee4 \u2013 \u5efa\u7acb\u62fc\u5199\u68c0\u67e5\u7a0b\u5e8f"}},a={},u=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Linux sed \u547d\u4ee4\u662f\u5229\u7528\u811a\u672c\u6765\u5904\u7406\u6587\u672c\u6587\u4ef6\u3002sed \u53ef\u4f9d\u7167\u811a\u672c\u7684\u6307\u4ee4\u6765\u5904\u7406\u3001\u7f16\u8f91\u6587\u672c\u6587\u4ef6\u3002sed \u4e3b\u8981\u7528\u6765\u81ea\u52a8\u7f16\u8f91\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3001\u7b80\u5316\u5bf9\u6587\u4ef6\u7684\u53cd\u590d\u64cd\u4f5c\u3001\u7f16\u5199\u8f6c\u6362\u7a0b\u5e8f\u7b49\u3002"),(0,o.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,"sed ","[\u53c2\u6570]"),(0,o.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,o.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,o.kt)("p",null,"\u5728file\u6587\u4ef6\u7684\u7b2c\u56db\u884c\u540e\u6dfb\u52a0\u4e00\u884c\uff0c\u5e76\u5c06\u7ed3\u679c\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# sed -e 4a\\newline file \nHELLO LINUX!   \nLinux is a free unix-type opterating system.  \nThis is a linux testfile!  \nLinux test  \nnewline\n")),(0,o.kt)("p",null,"\u5c06 /dir \u7684\u5185\u5bb9\u5217\u51fa\u5e76\u4e14\u5217\u5370\u884c\u53f7\uff0c\u540c\u65f6\u5220\u9664\u7b2c 2~5 \u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# nl /dir | sed '2,5d'\n1 root:x:0:0:root:/root:/bin/bash\n6 sync:x:5:0:sync:/sbin:/bin/sync\n7 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\n")),(0,o.kt)("p",null,"\u5728\u7b2c\u4e8c\u884c\u540e\u9762\u52a0\u5165\u4e24\u884c\u5b57\uff0c\u4f8b\u5982 Drink tea or \u2026.. \u4e0e drink beer\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# nl /dir | sed '2a Drink tea or ......\\\n> drink beer ?'\n1 root:x:0:0:root:/root:/bin/bash\n2 bin:x:1:1:bin:/bin:/sbin/nologin\nDrink tea or ......\ndrink beer ?\n3 daemon:x:2:2:daemon:/sbin:/sbin/nologin\n")),(0,o.kt)("p",null,"\u5c06\u7b2c2-5\u884c\u7684\u5185\u5bb9\u53d6\u4ee3\u6210\u4e3aNo 2-5 number\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# nl /dir | sed '2,5c No 2-5 number'\n1 root:x:0:0:root:/root:/bin/bash\nNo 2-5 number\n6 sync:x:5:0:sync:/sbin:/bin/sync\n")),(0,o.kt)("p",null,"\u4ee5\u884c\u4e3a\u5355\u4f4d\u7684\u663e\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# nl /dir | sed -n '5,7p'\n5 lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\n6 sync:x:5:0:sync:/sbin:/bin/sync\n7 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\n")))}c.isMDXComponent=!0}}]);