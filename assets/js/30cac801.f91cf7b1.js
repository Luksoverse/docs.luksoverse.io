"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7294),a=n(6010),i=n(5281),r=n(5999);const l="admonition_LlT9",s="admonitionHeading_tbUL",c="admonitionIcon_kALy",p="admonitionContent_S0QG";const u={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:a}}function h(e){const{children:t,type:n,title:r,icon:h}=m(e),f=function(e){var t;const n=null!=(t=d[e])?t:e;return u[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),u.info)}(n),k=null!=r?r:f.label,{iconComponent:y}=f,g=null!=h?h:o.createElement(y,null);return o.createElement("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert","alert--"+f.infimaClassName,l)},o.createElement("div",{className:s},o.createElement("span",{className:c},g),k),o.createElement("div",{className:p},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:r,block:d,defaultValue:m,values:h,groupId:f,className:k}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:S}=(0,s.U)(),[N,C]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),o=g[n].value;o!==N&&(E(t),C(o),null!=f&&S(f,String(o)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=T.indexOf(e.currentTarget)+1;n=null!=(o=T[t])?o:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},3719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),i=n(5488),r=n(5162);n(3612);const l={},s="Part 2 - Configure SSH",c={unversionedId:"the-guide/setup-client",id:"the-guide/setup-client",title:"Part 2 - Configure SSH",description:"In this guide we will configure and secure the SSH connection between you personal computer and node machine.",source:"@site/docs/the-guide/2-setup-client.md",sourceDirName:"the-guide",slug:"/the-guide/setup-client",permalink:"/docs/the-guide/setup-client",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/the-guide/2-setup-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 1 - Setup Node Machine",permalink:"/docs/the-guide/node-machine"},next:{title:"Part 3 - Settings & Security",permalink:"/docs/the-guide/settings-security"}},p={},u=[{value:"Choose your personal computer&#39;s operating system",id:"choose-your-personal-computers-operating-system",level:3},{value:"Step 1 - Open Terminal",id:"step-1---open-terminal",level:4},{value:"Step 2 - Install OpenSSH",id:"step-2---install-openssh",level:4},{value:"Step 3 - Connect to node",id:"step-3---connect-to-node",level:4},{value:"Step 4 - Generate SSH Keys",id:"step-4---generate-ssh-keys",level:4},{value:"Step 5 - Copy SSH keys to node machine",id:"step-5---copy-ssh-keys-to-node-machine",level:4},{value:"Step 6: Simplify connection",id:"step-6-simplify-connection",level:4},{value:"Configure Personal Device - Ubuntu",id:"configure-personal-device---ubuntu",level:2},{value:"Step 1 - Configure SSH client",id:"step-1---configure-ssh-client",level:4},{value:"Step 2 - Test connection",id:"step-2---test-connection",level:4},{value:"Step 3: Generate SSH Keys",id:"step-3-generate-ssh-keys",level:4}],d={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-2---configure-ssh"},"Part 2 - Configure SSH"),(0,a.kt)("p",null,"In this guide we will configure and secure the SSH connection between you personal computer and node machine."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you installed Ubuntu Desktop and do not plan to control your node from a personal computer, skip to step 3.")),(0,a.kt)("h3",{id:"choose-your-personal-computers-operating-system"},"Choose your personal computer's operating system"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"windows-terminal",label:"Windows Terminal",mdxType:"TabItem"},(0,a.kt)("p",null,"The next steps will configure Windows Terminal (or PowerShell) to connect to you node device."),(0,a.kt)("h4",{id:"step-1---open-terminal"},"Step 1 - Open Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Search windows for the Terminal application"),(0,a.kt)("li",{parentName:"ol"},"Right click"),(0,a.kt)("li",{parentName:"ol"},"Run as administrator")),(0,a.kt)("h4",{id:"step-2---install-openssh"},"Step 2 - Install OpenSSH"),(0,a.kt)("p",null,"Copy/Paste this command into Terminal. To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button. To paste into Terminal, right-click anywhere in the Terminal window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0\n")),(0,a.kt)("h4",{id:"step-3---connect-to-node"},"Step 3 - Connect to node"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy/paste command. Before pressing enter, replace ",(0,a.kt)("inlineCode",{parentName:"li"},"<node-user>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<node-ip>"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"<ssh-port>")," with your information")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh <node-user>@<node-ip> -p <ssh-port>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Execute the above command. "),(0,a.kt)("li",{parentName:"ol"},"When Promted with the authenticity warning, type ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," "),(0,a.kt)("li",{parentName:"ol"},"Then enter the node's password, press ",(0,a.kt)("inlineCode",{parentName:"li"},"enter"),". You should now see your node's command line."),(0,a.kt)("li",{parentName:"ol"},"Disconnect from node machine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"exit\n")),(0,a.kt)("p",null,"Example of Steps 1 - 3\n",(0,a.kt)("img",{alt:"1-3 Example",src:n(1719).Z,width:"1520",height:"1002"})),(0,a.kt)("h4",{id:"step-4---generate-ssh-keys"},"Step 4 - Generate SSH Keys"),(0,a.kt)("p",null,"SSH is more secure when using public/private keys instead of a password. In this step we will generate keys and send the public key to the node machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh-keygen -t rsa -b 4096\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'When prompted for "file in which to save," press ',(0,a.kt)("inlineCode",{parentName:"p"},"Enter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The passphrase is optional, but it is a good idea."))),(0,a.kt)("h4",{id:"step-5---copy-ssh-keys-to-node-machine"},"Step 5 - Copy SSH keys to node machine"),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-user>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-ip>"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<ssh-port>")," with your information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat ~/.ssh/id_rsa.pub | ssh <node-user>@<node-ip> -p <ssh-port> "cat >> ~/.ssh/authorized_keys"\n')),(0,a.kt)("p",null,"Example of Steps 4 - 5\n",(0,a.kt)("img",{alt:"4-5 Example",src:n(8505).Z,width:"1520",height:"1002"})),(0,a.kt)("h4",{id:"step-6-simplify-connection"},"Step 6: Simplify connection"),(0,a.kt)("p",null,"We will create a desktop icon to simplify logging into your node"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right-click on the Windows desktop --\x3e new --\x3e  shortcut"),(0,a.kt)("li",{parentName:"ol"},'In the "Type the location of the item" box, paste the command below. Replace the user-specific information.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wt ssh <node-user>@<node-ip> -p <ssh-port>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Choose any name for the shortcut.")),(0,a.kt)("p",null,"You should now have an icon on your desktop that will automatically opens the SSH connection to your node machine."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Test the new icon. Notice how it asks for a passphrase instead of a password. This is the passphrase you chose when creating the SSH keys.")),(0,a.kt)("p",null,"Example of Step 6\n",(0,a.kt)("img",{alt:"6 Example",src:n(9069).Z,width:"1520",height:"1002"}))),(0,a.kt)(r.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,a.kt)("h2",{id:"configure-personal-device---ubuntu"},"Configure Personal Device - Ubuntu"),(0,a.kt)("p",null,"The next steps will configure the client software on a personal device running Ubuntu. You will use this device to control your node remotely."),(0,a.kt)("h4",{id:"step-1---configure-ssh-client"},"Step 1 - Configure SSH client"),(0,a.kt)("p",null,"The SSH command requires the username, IP address, and port number of the node machine. "),(0,a.kt)("p",null,"Simplify the SSH command by updating the SSH config file with your node credentials."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano ~/.ssh/config \n")),(0,a.kt)("p",null,"Copy/Paste the following into the config file.\nReplace ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-user>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-ip>"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<ssh-port>"),"\nIP address and port number have been determined in previous steps.\n",(0,a.kt)("inlineCode",{parentName:"p"},"<node-user>")," is your node machine's user name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host lukso\n  User <node-user>\n  HostName <node-ip>\n  Port <ssh-port>\n")),(0,a.kt)("h4",{id:"step-2---test-connection"},"Step 2 - Test connection"),(0,a.kt)("p",null,"Attempt to connect to verify the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh lukso\n")),(0,a.kt)("p",null,"Disconnect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"exit\n")),(0,a.kt)("h4",{id:"step-3-generate-ssh-keys"},"Step 3: Generate SSH Keys"),(0,a.kt)("p",null,"SSH is more secure when using public/private keys instead of a password. In this step we will generate keys on your personal device and send the public key to the node machine."),(0,a.kt)("p",null,"Ensure you have disconnected from your node machine. On your ",(0,a.kt)("strong",{parentName:"p"},"personal device"),", create a new key pair for ssh authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -b 4096\n")),(0,a.kt)("p",null,"Copy the public key to the node machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-copy-id -i ~/.ssh/id_rsa.pub lukso\n")),(0,a.kt)("p",null,"Test key login.  This time it should not prompt for a password."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh lukso\n"))),(0,a.kt)(r.Z,{value:"Windows",label:"Windows (Putty)",mdxType:"TabItem"},"Coming Soon"),(0,a.kt)(r.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},"Coming Soon")),(0,a.kt)("p",null,"Remain connected and proceed to Part 3"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement"},"https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.hostway.com/hc/en-us/articles/115001509884-How-To-Use-SSH-Keys-on-Windows-Clients-with-PuTTY-"},"https://support.hostway.com/hc/en-us/articles/115001509884-How-To-Use-SSH-Keys-on-Windows-Clients-with-PuTTY-")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.how2shout.com/how-to/how-to-login-into-ubuntu-using-ssh-from-windows-10-8-7.html"},"https://www.how2shout.com/how-to/how-to-login-into-ubuntu-using-ssh-from-windows-10-8-7.html"))))}m.isMDXComponent=!0},1719:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/win01-03-4cf72db7e4d86368cf52f3c274574e0b.gif"},8505:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/win04-05-79fb66c313e0f81517f9bfeea99c7ba8.gif"},9069:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/win06-9c9d519495c05e31401ffd59e93ad9af.gif"}}]);