"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[9842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const s={title:"Stats & Monitoring",sidebar_position:5},i="Logs, Stats and Monitoring",a={unversionedId:"l16-archive-docs/logs-stats-monitoring",id:"l16-archive-docs/logs-stats-monitoring",title:"Stats & Monitoring",description:"Execution logs",source:"@site/docs/l16-archive-docs/logs-stats-monitoring.md",sourceDirName:"l16-archive-docs",slug:"/l16-archive-docs/logs-stats-monitoring",permalink:"/docs/l16-archive-docs/logs-stats-monitoring",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/l16-archive-docs/logs-stats-monitoring.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Stats & Monitoring",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Backup and Recovery",permalink:"/docs/l16-archive-docs/node-backup"},next:{title:"Troubleshooting",permalink:"/docs/l16-archive-docs/troubleshooting"}},l={},c=[{value:"Execution logs",id:"execution-logs",level:2},{value:"Consensus logs",id:"consensus-logs",level:2},{value:"Stats",id:"stats",level:2},{value:"Explorers",id:"explorers",level:2},{value:"Monitoring",id:"monitoring",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logs-stats-and-monitoring"},"Logs, Stats and Monitoring"),(0,r.kt)("h2",{id:"execution-logs"},"Execution logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo lukso network log execution -f\n")),(0,r.kt)("p",null,"You can close the logs by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+c")),(0,r.kt)("h2",{id:"consensus-logs"},"Consensus logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo lukso network log consensus -f\n")),(0,r.kt)("p",null,"You can close the logs by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+c")),(0,r.kt)("h2",{id:"stats"},"Stats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"Execution stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.consensus.l16.lukso.network"},"Consensus stats"))),(0,r.kt)("h2",{id:"explorers"},"Explorers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.execution.l16.lukso.network"},"Execution explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.consensus.l16.lukso.network"},"Consensus explorer"))),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"You can find a community guide about how to setup your Grafana dashboard on Linux ",(0,r.kt)("a",{parentName:"p",href:"/docs/Community-Archive/node-guide/monitoring"},"here"),"."))}p.isMDXComponent=!0}}]);