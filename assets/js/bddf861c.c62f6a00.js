"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[6327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="VPN Theory",s={unversionedId:"mainnet/complete-node-guide/external-access/vpn-theory",id:"mainnet/complete-node-guide/external-access/vpn-theory",title:"VPN Theory",description:"For External Access to my node, I'm using Tailscale. Tailscale is a technology that creates a secure network of your devices with an internet connection. It works as if they were all connected on the same local network utilizing WireGuard.",source:"@site/docs/mainnet/complete-node-guide/9-external-access/01-vpn-theory.md",sourceDirName:"mainnet/complete-node-guide/9-external-access",slug:"/mainnet/complete-node-guide/external-access/vpn-theory",permalink:"/docs/mainnet/complete-node-guide/external-access/vpn-theory",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/9-external-access/01-vpn-theory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"9 External Access",permalink:"/docs/mainnet/complete-node-guide/external-access/start-here"},next:{title:"Tailscale Setup",permalink:"/docs/mainnet/complete-node-guide/external-access/tailscale-setup"}},c={},l=[{value:"Virtual Private Networks",id:"virtual-private-networks",level:2},{value:"WireGuard",id:"wireguard",level:2},{value:"Tailscale",id:"tailscale",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vpn-theory"},"VPN Theory"),(0,a.kt)("p",null,"For External Access to my node, I'm using Tailscale. Tailscale is a technology that creates a secure network of your devices with an internet connection. It works as if they were all connected on the same local network utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"WireGuard"),"."),(0,a.kt)("h2",{id:"virtual-private-networks"},"Virtual Private Networks"),(0,a.kt)("p",null,"A VPN is a technology that creates a secure and encrypted connection over a less secure network, such as the global internet. VPNs protect your internet traffic from snooping, interference, and censorship but can also help build secure connections between devices or institutions."),(0,a.kt)("p",null,'VPNs work by establishing a secure "tunnel" through which your data passes back and forth between your device and the VPN server. This server can be located anywhere in the world. All data passing through the tunnel is encrypted to ensure it remains confidential, even if intercepted.'),(0,a.kt)("h2",{id:"wireguard"},"WireGuard"),(0,a.kt)("p",null,"WireGuard is an open-source VPN protocol designed for simplicity and speed using state-of-the-art cryptography within the VPN protocol landscape. Some key advantages of the WireGuard protocol over others include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simplicity"),": WireGuard aims to be as easy to configure and deploy as SSH. Its codebase is much smaller than most other VPN protocols, making it easier to audit for security vulnerabilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Speed"),": WireGuard has been designed to offer high speeds. It uses modern, high-speed cryptographic primitives."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": WireGuard uses modern and secure cryptographic algorithms. It also includes several features to enhance security, such as perfect forward secrecy, which ensures that past communication cannot be decrypted, even if a private key is compromised in the future."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compatibility"),": WireGuard can be used on various operating systems, including Windows, MacOS, Linux, iOS, and Android.")),(0,a.kt)("h2",{id:"tailscale"},"Tailscale"),(0,a.kt)("p",null,"Tailscale simplifies creating a Virtual Private Network (VPN) by removing the need to manage and configure the network settings on each device manually. The configuration is managed centrally, allowing the network to adapt as devices join or leave the network."),(0,a.kt)("p",null,"Here's how it works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Identity-Based Networking"),": Tailscale uses your existing identity provider to ensure only authorized users/devices can access your network. It also allows you to set access rules based on the user's identity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WireGuard Protocol"),": Tailscale is built on top of WireGuard, a modern VPN protocol known for its simplicity, performance, and security. It establishes a secure, encrypted channel between the devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Peer-to-Peer Connections"),": Tailscale uses NAT traversal techniques to establish direct, peer-to-peer connections between devices whenever possible, even if they are behind firewalls or routers. Continuous device connections help to minimize latency and improve connection speed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Zero Configuration"),": Tailscale configures the IP addresses and manages the routing tables in the background. Such an onboarding means creating a secure, peer-to-peer network without manually configuring each device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Central Control Panel"),": You can monitor and manage your network from a centralized control panel, allowing you to see what devices are connected, manage access rights, and more.")))}d.isMDXComponent=!0}}]);