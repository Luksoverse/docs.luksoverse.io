"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[568],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6619:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={},i="Part 4 - LUKSO Network Setup",s={unversionedId:"the-guide/network-setup",id:"the-guide/network-setup",title:"Part 4 - LUKSO Network Setup",description:"- Run through LUKSO steps",source:"@site/docs/the-guide/4-network-setup.md",sourceDirName:"the-guide",slug:"/the-guide/network-setup",permalink:"/docs/the-guide/network-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/the-guide/4-network-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 3 - Settings & Security",permalink:"/docs/the-guide/settings-security"},next:{title:"Part 5 - Monitoring",permalink:"/docs/the-guide/monitoring"}},l={},u=[{value:"About",id:"about",level:2},{value:"Nodes",id:"nodes",level:3},{value:"Validators",id:"validators",level:3},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Step 1 - Run a node",id:"step-1---run-a-node",level:2},{value:"Follow LUKSO&#39;s official documentation for this step.",id:"follow-luksos-official-documentation-for-this-step",level:4},{value:"Step 2 - Become a validator",id:"step-2---become-a-validator",level:2},{value:"Follow LUKSO&#39;s official documentation for the next steps.",id:"follow-luksos-official-documentation-for-the-next-steps",level:4},{value:"After your node is up and running begin Part 4: Monitoring.",id:"after-your-node-is-up-and-running-begin-part-4-monitoring",level:4}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-4---lukso-network-setup"},"Part 4 - LUKSO Network Setup"),(0,r.kt)("admonition",{title:"ToDo",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Run through LUKSO steps"),(0,r.kt)("li",{parentName:"ul"},"Write relevant explanations"),(0,r.kt)("li",{parentName:"ul"},"grammerly"))),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("p",null,"LUKSO uses the same software and architecture of Ethereum and will launch completely transitioned to proof-of-stake. It will resemble a post-merge Ethereum, commonly referred to as Ethereum 2.0 but no longer technically correct as the Ethereum foundation has moved away from that term."),(0,r.kt)("h3",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"A node is a computer running client software that can establish connections and exchange information with other nodes, forming a peer-to-peer network. A LUKSO node (like Ethereum) is the combination of two pieces of client software. The execution client processes transactions and smart contracts, while the consensus client coordinates the proof-of-stake consensus and runs the beacon chain. Running a node allows for the trustless and private use of the LUKSO network while supporting the network and ecosystem at the same time. Anyone with proper hardware can run a node; it does not require a stake."),(0,r.kt)("h3",{id:"validators"},"Validators"),(0,r.kt)("p",null,"A validator consists of a LUKSO node and a third piece of client software responsible for proposing blocks. A financial stake is required to run a validator. Validators are rewarded for proposing blocks that help the network reach consensus and penalized for actions that hinder consensus, like being offline or acting maliciously."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Please review all the information in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/networks/l16-testnet/"},"Network")," section of LUKSO's website."),(0,r.kt)("h2",{id:"step-1---run-a-node"},"Step 1 - Run a node"),(0,r.kt)("h4",{id:"follow-luksos-official-documentation-for-this-step"},(0,r.kt)("a",{parentName:"h4",href:"https://docs.lukso.tech/networks/l16-testnet/run-node"},"Follow LUKSO's official documentation for this step.")),(0,r.kt)("h2",{id:"step-2---become-a-validator"},"Step 2 - Become a validator"),(0,r.kt)("h4",{id:"follow-luksos-official-documentation-for-the-next-steps"},(0,r.kt)("a",{parentName:"h4",href:"https://docs.lukso.tech/networks/l16-testnet/become-validator"},"Follow LUKSO's official documentation for the next steps.")),(0,r.kt)("h4",{id:"after-your-node-is-up-and-running-begin-part-4-monitoring"},"After your node is up and running begin Part 4: Monitoring."))}d.isMDXComponent=!0}}]);