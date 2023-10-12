"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[7804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={title:"Backup and Recovery",sidebar_position:4},i="Backup And Recover Your validator",l={unversionedId:"l16-archive-docs/node-backup",id:"l16-archive-docs/node-backup",title:"Backup and Recovery",description:"We made it simple and straight forward to recover a node with its validators when your old node doesn't work anymore or you want to transfer everything to a new machine.",source:"@site/docs/l16-archive-docs/node-backup.md",sourceDirName:"l16-archive-docs",slug:"/l16-archive-docs/node-backup",permalink:"/docs/l16-archive-docs/node-backup",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/l16-archive-docs/node-backup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Backup and Recovery",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Become a Validator",permalink:"/docs/l16-archive-docs/become-validator"},next:{title:"Stats & Monitoring",permalink:"/docs/l16-archive-docs/logs-stats-monitoring"}},s={},c=[{value:"The keystore",id:"the-keystore",level:2},{value:"Keystore backup",id:"keystore-backup",level:2},{value:"Start up your new node",id:"start-up-your-new-node",level:2},{value:"Recover you validators with the backup file",id:"recover-you-validators-with-the-backup-file",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup-and-recover-your-validator"},"Backup And Recover Your validator"),(0,a.kt)("p",null,"We made it simple and straight forward to recover a node with its validators when your old node doesn't work anymore or you want to transfer everything to a new machine."),(0,a.kt)("h2",{id:"the-keystore"},"The keystore"),(0,a.kt)("p",null,"the keystore is a derivative of these 4 values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ValidatorMnemonic")," - the seed for your validator keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WithdrawalMnemonic")," - which is needed to withdraw your stakes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KeystoreIndexFrom")," and ",(0,a.kt)("strong",{parentName:"li"},"KeyStoreIndexTo")," - the key positions that you chose to create a keystore with x amount of validator keys.")),(0,a.kt)("p",null,"If you backup those 4 values and store them safely you can always recover your validator setup."),(0,a.kt)("h2",{id:"keystore-backup"},"Keystore backup"),(0,a.kt)("p",null,"First we explain how to backup and transfer the keystore files to another machine."),(0,a.kt)("p",null,"The LUKSO CLI offers 2 commands to make a backup and recover this backup on a new machine."),(0,a.kt)("p",null,"First we explain the backup command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator backup\n")),(0,a.kt)("p",null,"This will produce a recovery file ",(0,a.kt)("strong",{parentName:"p"},'"node_recovery.json with"')," exactly these four values."),(0,a.kt)("p",null,"Use this backup command after you have succesfully setup your node and validators on your machine. Store this file somewhere safe and offline."),(0,a.kt)("h2",{id:"start-up-your-new-node"},"Start up your new node"),(0,a.kt)("p",null,"You always start on your new machine with installing the LUKSO CLI after that you need to initialize the network before you can recover your old validators:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network init --chain l16\n")),(0,a.kt)("h2",{id:"recover-you-validators-with-the-backup-file"},"Recover you validators with the backup file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo CONTENT_OF_RECOVERY_JSON_FILE > node_recovery.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator recover --path ./node_recovery.json\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")),(0,a.kt)("p",null,"Tranfer ",(0,a.kt)("strong",{parentName:"p"},"node_recovery.json")," from the place where you stored it to your machine and add it to your path in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lukso network validator recover")," command:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lukso network validator recover --path /home/USER/lukso-node/node_recovery.json\n")),(0,a.kt)("p",null,"Change ",(0,a.kt)("strong",{parentName:"p"},"USER")," to the username of your account."),(0,a.kt)("p",null,"This will recreate your setup and recover your validator."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"NOTE"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The recovery command will only work if you did ",(0,a.kt)("strong",{parentName:"li"},"not")," used the ",(0,a.kt)("inlineCode",{parentName:"li"},"lukso network validator setup")," command before. So it should happen immediatelly after you initialized the node with ",(0,a.kt)("inlineCode",{parentName:"li"},"lukso network init --chain l16"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NEVER")," run the 2 nodes at the same time - you will get slashed. Make sure that you ",(0,a.kt)("strong",{parentName:"li"},"stopped")," your existing node before you install and recover your new node. Make also sure that your old Docker containers and images are deleted.\n:::"))))}d.isMDXComponent=!0}}]);