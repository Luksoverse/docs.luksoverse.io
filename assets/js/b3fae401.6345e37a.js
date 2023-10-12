"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[1550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const s={},i="Peer Discovery",r={unversionedId:"mainnet/complete-node-guide/blockchain-clients/peer-discovery",id:"mainnet/complete-node-guide/blockchain-clients/peer-discovery",title:"Peer Discovery",description:"In a blockchain network, peers are individual nodes participating and playing a crucial role in its functioning. These nodes can have different roles depending on the type of blockchain, but they all work collectively to maintain and validate the shared ledger.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/11-peer-discovery.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/peer-discovery",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/peer-discovery",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/11-peer-discovery.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client Modifications",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/client-modification"},next:{title:"Service Automation",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/automation"}},l={},c=[{value:"Benefits and Drawbacks",id:"benefits-and-drawbacks",level:4},{value:"6.11.1 Resolve Low Execution Peer Count",id:"6111-resolve-low-execution-peer-count",level:3},{value:"6.11.2 Resolve Low Consensus Peer Count",id:"6112-resolve-low-consensus-peer-count",level:3},{value:"What&#39;s my Public IP Address?",id:"whats-my-public-ip-address",level:4},{value:"Resolving your Public IP Address",id:"resolving-your-public-ip-address",level:4},{value:"Setting your Public IP Address",id:"setting-your-public-ip-address",level:4},{value:"Prysm Consensus File",id:"prysm-consensus-file",level:5},{value:"Lighthouse Consensus File",id:"lighthouse-consensus-file",level:5},{value:"6.11.3 Configure Dynamic DNS",id:"6113-configure-dynamic-dns",level:3},{value:"What&#39;s a DNS Record?",id:"whats-a-dns-record",level:4},{value:"What&#39;s a Dynamic DNS?",id:"whats-a-dynamic-dns",level:4},{value:"Installing NOIP",id:"installing-noip",level:4},{value:"Configuring NOIP",id:"configuring-noip",level:4},{value:"Allow NOIP on Startup",id:"allow-noip-on-startup",level:4},{value:"Starting NOIP as a Service",id:"starting-noip-as-a-service",level:4},{value:"Complete NOIP Setup",id:"complete-noip-setup",level:4},{value:"Set Dynamic DNS Hostname in Config",id:"set-dynamic-dns-hostname-in-config",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peer-discovery"},"Peer Discovery"),(0,o.kt)("p",null,"In a blockchain network, peers are individual nodes participating and playing a crucial role in its functioning. These nodes can have different roles depending on the type of blockchain, but they all work collectively to maintain and validate the shared ledger."),(0,o.kt)("p",null,"One of the fundamental characteristics of a blockchain is decentralization, which is achieved through a network of peers distributed across different geographic locations. Each peer maintains a copy of the entire blockchain and validates new transactions and blocks according to the protocol rules. The separate operations ensure the integrity and security of the blockchain, as it makes it very difficult for any single entity to tamper with the data on the blockchain."),(0,o.kt)("p",null,"The process of peers communicating with each other is known as peer-to-peer networking. In a P2P network, there is no central server. Instead, each node or peer is equal and can act as a client and a server. The P2P communication process involves sharing data directly between systems on a network, enabling data to be transmitted directly from the source peer to the destination peer."),(0,o.kt)("p",null,"In a blockchain network like Ethereum, peers validate transactions and blocks, ensuring they comply with network rules before adding them to the blockchain. Peers propagate valid transactions and blocks to other peers in the network, ensuring all peers have the same data and maintain the network's consensus. They play an integral role in blockchain technology's decentralized and trustless nature."),(0,o.kt)("h4",{id:"benefits-and-drawbacks"},"Benefits and Drawbacks"),(0,o.kt)("p",null,"While this page will prepare you to increase your peer count and discoverability to raise the node's connectivity and resilience, setting your peer count too high can also have adverse side effects. Here are the main reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Usage"),": Each peer connection requires computational and network resources for managing the connection and processing transactions and blocks. If the maximum peer count is set too high, it may overwhelm your system resources like CPU, memory, and bandwidth, affecting the performance of your node and possibly your entire system. It affects bandwidth usage because your peer nodes are downloading the blockchain data from you if you are one of their peers. The connections would mean that your upload bandwidth is sending out a lot of data which will add to your outbound network usage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Topology Impact"),": LUKSO is a P2P network designed with a certain degree of decentralization and distribution. If individual nodes have too many connections, it could lead to a more centralized network topology, negatively affecting the network's resilience to specific attacks or failures. Too high counts can defeat the distributed nature of blockchain networks. Ideally, the network consists of smaller circles of discovered nodes with a decentralized topology, extensive network growth, and no large population centers. When some node is down in a minor process of connected nodes, most of the blockchain does not notice the outage and goes on as if nothing happened. However, if every node is connected to most of the network, having outages would mean dropping the peer count of everyone and bringing fluctuations onto the table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wasted Connections"),": There's a point beyond which additional connections don't provide a meaningful increase in data propagation speed or network resilience, for instance, if you are already connected to 33% or more percent for smaller networks or more than 100 active peers for bigger ones. Peers beyond this point are just wasting connections, harming the topology, and consuming resources without providing additional benefits.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The default value of 50 execution peers was chosen wisely by the network team, as you might run into router bandwidth issues above. Make sure your router is capable of handling higher loads and requests.")),(0,o.kt)("p",null,"It's not recommended to set your execution peer limit any higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," in grown-out networks. For genesis validators, execution peer counts of ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," would already be enough. Just think about an evenly spread network and how you can favor decentralization while being energy and data efficient."),(0,o.kt)("h3",{id:"6111-resolve-low-execution-peer-count"},"6.11.1 Resolve Low Execution Peer Count"),(0,o.kt)("p",null,"You can check your peer connections of the execution client by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Geth interface\ngeth attach http://localhost:8545\n\n# Erigon interface\nerigon attach http://localhost:8545\n")),(0,o.kt)("p",null,"Afterward, check the execution peer number by printing the network property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"> net.peerCount\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"35\n")),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"exit")," to close the JSON interface."),(0,o.kt)("p",null,"If your execution peer count is not improving when running the node for around 4h, check that all the ports are open. You can find a guide within the [",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/blockchain-clients/firewall-settings"},"Firewall Settings"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should always have more than 25 stable peers after a setup time of 4h to 6h.")),(0,o.kt)("p",null,"After opening the port, wait some minutes and recheck your peer count."),(0,o.kt)("p",null,"If your ports are already open, there seems to be a threshold on your peer count setting. You might want to raise this number. However, I can not explain what might cause this difference in maximum peer count and actual appearing peers."),(0,o.kt)("p",null,"Open your node's working directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <your-node-directory>\n")),(0,o.kt)("p",null,"Stop your currently running clients:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso stop\n")),(0,o.kt)("p",null,"The output should be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# INFO[0000] PID ----- - Execution (geth): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Consensus (prysm): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Validator (validator): Stopped \ud83d\udd18\n")),(0,o.kt)("p",null,"Open your execution client's configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"### Geth Mainnet Configuration\nnano /configs/mainnet/geth/geth.toml\n\n### Geth Testnet Configuration\nnano /configs/testnet/geth/geth.toml\n\n### Erigon Mainnet Configuration\nnano /configs/mainnet/erigon/erigon.toml\n\n### Erigon Testnet Configuration\nnano /configs/testnet/erigon/erigon.toml\n")),(0,o.kt)("p",null,"For Geth, raise the value of the maximum peer connection count like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"MaxPeers = 100\n")),(0,o.kt)("p",null,"For Erigon, you can do the same like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"maxpeers" = 100\n')),(0,o.kt)("p",null,"Restart the client again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Restart Mainnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..."\n\n# Restart Testnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..." --testnet\n')),(0,o.kt)("p",null,"Wait some minutes and check your execution peer count again. You should see it rise. After some hours, you should have a stable connection."),(0,o.kt)("h3",{id:"6112-resolve-low-consensus-peer-count"},"6.11.2 Resolve Low Consensus Peer Count"),(0,o.kt)("p",null,"More often, low peer counts are faced by the consensus client. If you are running Prysm, the built-in HTTP API provides an easy way to check all the peers. You can use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command to fetch it. However, the plain output will look horrendous. That's why I came up with a quick Python script to check the actual number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Prysm Client\ncurl -s "http://localhost:3500/eth/v1alpha1/node/peers" | python3 -c "import sys, json; print(len(json.load(sys.stdin)[\'peers\']))"\n')),(0,o.kt)("p",null,"The return should ideally look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"37\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should always have more than 30 stable peers after a setup time of 4h to 6h.")),(0,o.kt)("p",null,"If you can not find any peers and the script returns ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", or only get a small number below ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),", you can modify the client to use your public static IP address for peer discovery. This public IP is then used to connect and sync with other peers."),(0,o.kt)("p",null,"Also check how many of those peers are inbound, if you have any:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Mainnet\nlukso logs consensus\n\n# Testnet\nlukso logs consensus --testnet\n")),(0,o.kt)("p",null,"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," to let the logs show up in your terminal. Search for something like the following line: ",(0,o.kt)("inlineCode",{parentName:"p"},"activePeers=184 inbound=129 outbound=55"),". If your inbound peers are ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", there is an issue with telling the network how to find your node. Usually, the problem stems from not having your public IP address set within the config files."),(0,o.kt)("h4",{id:"whats-my-public-ip-address"},"What's my Public IP Address?"),(0,o.kt)("p",null,"Your public IP address is a unique identifier assigned to your internet connection by your service provider. Every device connected to the public internet is set as an IP address. The public IP address is how a device contacts and communicates with other devices on the internet."),(0,o.kt)("p",null,"There are two types of public IP addresses: dynamic and static ones. An active IP address changes over time, while a static IP address remains constant. Most residential users are assigned a dynamic IP address, which is subject to change whenever the ISP sees fit. Active assignments are usually done to manage the limited pool of IP addresses available. On the other hand, static IP addresses are typically used for services that require a constant IP address, such as a web server."),(0,o.kt)("p",null,"Your ISP plays a significant role here because they own the IP addresses they assign to customers. They also maintain the infrastructure that allows your connected devices to communicate with the rest of the internet. Usually, ISPs do not allow regular users to set a static IP address."),(0,o.kt)("p",null,"For most residential customers, ISPs assign dynamic IP addresses. These IP addresses can change periodically, but the ISP determines the exact frequency. Some ISPs may change the IP address every time you disconnect and reconnect to the internet, for example, by rebooting your router, while others may change it at regular intervals, like every 24 hours or once a week. However, in many cases, the IP address remains the same for long periods unless there's a prolonged disconnection, a network or system update, or a manual reset of the modem or router."),(0,o.kt)("h4",{id:"resolving-your-public-ip-address"},"Resolving your Public IP Address"),(0,o.kt)("p",null,"We can use a simple IP echo service. Let us make a simple request to ipecho.net over the public internet, and the service will send us back our IP address that was used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s https://ipecho.net/plain\n")),(0,o.kt)("p",null,"Save that address or copy it to a text editor. We gonna use it to improve our peer count."),(0,o.kt)("h4",{id:"setting-your-public-ip-address"},"Setting your Public IP Address"),(0,o.kt)("p",null,"As a first step, we should tell our public IP address to the consensus client. It's better than nothing and will do the trick. However, in the long run, you won't be able to avoid a more elaborate setup. After all, you don't always want to lose your peers just because the public address has changed and this new address no longer matches the one in the configuration, right?"),(0,o.kt)("p",null,"Navigate into the working directory of your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <your-node-directory>\n")),(0,o.kt)("p",null,"Stop your currently running clients:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso stop\n")),(0,o.kt)("p",null,"The output should be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# INFO[0000] PID ----- - Execution (geth): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Consensus (prysm): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Validator (validator): Stopped \ud83d\udd18\n")),(0,o.kt)("h5",{id:"prysm-consensus-file"},"Prysm Consensus File"),(0,o.kt)("p",null,"Open your Prysm configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"### Prysm Mainnet Configuration\nnano /configs/mainnet/prysm/prysm.yaml\n\n### Prsym Testnet Configuration\nnano /configs/testnet/prysm/prysm.yaml\n")),(0,o.kt)("p",null,"Now change the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"p2p-host-ip: '0.0.0.0'\n")),(0,o.kt)("p",null,"To your public IP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"p2p-host-ip: '<your-public-ip-address>'\n")),(0,o.kt)("h5",{id:"lighthouse-consensus-file"},"Lighthouse Consensus File"),(0,o.kt)("p",null,"Open your Lighthouse configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Mainnet Configuration File\nnano /configs/mainnet/lighthouse/lighthouse.toml\n# Testnet Configuration File\nnano /configs/testnet/lighthouse/lighthouse.toml\n")),(0,o.kt)("p",null,"Now, exchange the following sample addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'listen-address = "0.0.0.0"\nenr-address = "0.0.0.0"\n')),(0,o.kt)("p",null,"With your own public IP addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'listen-address = "<your-public-ip-address>"\nenr-address = "<your-public-ip-address>"\n')),(0,o.kt)("p",null,"Restart the client again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Restart Mainnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..."\n\n# Restart Testnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..." --testnet\n')),(0,o.kt)("p",null,"After setting your public address, wait some minutes and recheck your consensus peer count. You should see it rise. After some hours, you should have a stable connection."),(0,o.kt)("h3",{id:"6113-configure-dynamic-dns"},"6.11.3 Configure Dynamic DNS"),(0,o.kt)("p",null,"Ideally, you want to have a stable node over a long period. Right now, as I described within the IP address section, the public IP would need adjustment every time it changes. Here is where a Dynamic DNS setup comes into play."),(0,o.kt)("h4",{id:"whats-a-dns-record"},"What's a DNS Record?"),(0,o.kt)("p",null,"A Domain Name System record is essential to the internet infrastructure, serving as it's phone book. It maintains a directory of domain names and translates them to Internet Protocol addresses. The record is necessary because although domain names are easy for people to remember, computers or machines access websites based on IP addresses. A DNS record is an entry in this directory that maps a domain name to an IP address."),(0,o.kt)("h4",{id:"whats-a-dynamic-dns"},"What's a Dynamic DNS?"),(0,o.kt)("p",null,"A Dynamic Domain Name System is a service that allows networked devices, such as a node in our case, to update their DNS record whenever their IP address changes. Devices with dynamically assigned IP addresses, like those given out by many ISPs, benefit from such services, as their device's IP address could change daily but needs to stay accessible."),(0,o.kt)("p",null,"Dynamic DNS can play a crucial role in peer discovery for blockchain networks. In a P2P network, every node must maintain a list of other nodes, e.g., peers it can connect to. If a node's IP address changes, other nodes in the network could have trouble finding it unless they are somehow informed of the new IP address."),(0,o.kt)("p",null,"That's where dynamic DNS comes in. With dynamic DNS, a node can register a domain name that always points to its current IP address, even if that address changes. When the node's IP address changes, it simply updates its dynamic DNS record, and other nodes in the network can still find it by looking up its domain name."),(0,o.kt)("p",null,"Dynamic DNS helps maintain the health and connectivity of the P2P network by ensuring that nodes can always find each other, even when their IP addresses are constantly changing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are lots of solutions to handle or manage the topic. You could use your domain and deploy a script there to maintain the record for the device. Another option would be hosting your own Dynamic DNS Service and configuring it via the Cloudflare API on your router. You could also combine those two variants in different ways. However, all those solutions require good technical understanding and the router to support such functionality. I will use a simple and free Dynamic DNS provider.")),(0,o.kt)("h4",{id:"installing-noip"},"Installing NOIP"),(0,o.kt)("p",null,"There are lots of service providers you can choose from. Some of them provide paid services for advanced features. But since we only need a simple record, I went with ",(0,o.kt)("a",{parentName:"p",href:"https://www.noip.com/"},"NO-IP"),". At the point of writing this guide, there are 2 models:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"free"),": You must confirm your Dynamic DNS hostname every month to keep it. You will receive emails with a link to extend the hostname before expiration. Your record will be reset if you do not confirm the link in the mail."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paid"),": You get your hostname forever")),(0,o.kt)("p",null,"I'm ok with clicking a button from an email once a month. It's a straightforward service."),(0,o.kt)("p",null,"First, you must register on their page with an email and password. You can also set a hostname already. Choose a name with a ",(0,o.kt)("inlineCode",{parentName:"p"},"ddns.net")," and complete the registration by confirming your email."),(0,o.kt)("p",null,"To build the no-ip package on our node, we must install a developer library called ",(0,o.kt)("inlineCode",{parentName:"p"},"build-essential"),". It contains references to all the software packages needed to compile and create binary packages, which includes development tools for the programming language C."),(0,o.kt)("p",null,"Update your package list first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,o.kt)("p",null,"Afterward, we can install the package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install build-essential\n")),(0,o.kt)("p",null,"Get the newest build from NO-IP. Do not use beta tools that may be advertised as the current version and sick to stable software releases. As of May 2023, ",(0,o.kt)("inlineCode",{parentName:"p"},"Version 2.1.9-1")," is the latest stable release."),(0,o.kt)("p",null,"Move into the source directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /usr/local/src/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo wget http://www.noip.com/client/linux/noip-duc-linux.tar.gz\n")),(0,o.kt)("p",null,"The output should be similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"[DATE] [TIME] (11.8 MB/s) - \u2018noip-duc-linux.tar.gz\u2019 saved [2529997/2529997]\n")),(0,o.kt)("p",null,"After downloading it, we can extract the tape archive using the Ubuntu tool. We will extract (",(0,o.kt)("inlineCode",{parentName:"p"},"x"),") the tape archive into its previous packaged files (",(0,o.kt)("inlineCode",{parentName:"p"},"f"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tar xf noip-duc-linux.tar.gz\n")),(0,o.kt)("p",null,"Move into the folder of the extracted tape archive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd noip-2.1.9-1/\n")),(0,o.kt)("h4",{id:"configuring-noip"},"Configuring NOIP"),(0,o.kt)("p",null,"Build the application using the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command. You will then be prompted to log in with your No-IP account username and password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo make install\n")),(0,o.kt)("p",null,"Choose your default Ethernet connection, usually ",(0,o.kt)("inlineCode",{parentName:"p"},"eno1"),". Also, choose an update interval of ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", which will update your DNS registry every 5 Minutes, so you never lose peer connections. 5 is the highest frequency you can edit. The final output will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"New configuration file '/tmp/no-ip2.conf' created.\n")),(0,o.kt)("p",null,"To configure the client globally, we must run the built executable with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-C")," flag again. It is needed for our service to find the right config file after automatic startups."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo make install -C\n")),(0,o.kt)("p",null,"The application will create a default config file within the user directory. The final output will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"New configuration file '/usr/local/etc/no-ip2.conf' created.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be careful. One of the questions might be, \u201cDo you wish to update ALL hosts\u201d if you are already using NO-IP with other devices. If answered incorrectly, this could effect hostnames in your account that are pointing at different locations.")),(0,o.kt)("p",null,"Now that the client is installed and configured, you can launch it. Execute this command to launch the client in the background:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo /usr/local/bin/noip2\n")),(0,o.kt)("p",null,"Stop the process again, as we want to enable it on startup. If it is running, we can not configure it as it is running as a forked daemon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pkill noip2\n")),(0,o.kt)("h4",{id:"allow-noip-on-startup"},"Allow NOIP on Startup"),(0,o.kt)("p",null,"For the program to be started at boot, we will create a system service file for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/noip2.service\n")),(0,o.kt)("p",null,"We will set the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": This option configures the process startup type for this service unit. The noip2 software runs as a daemon that forks itself after starting up. The ",(0,o.kt)("inlineCode",{parentName:"li"},"forking")," value tells the system to expect the primary process to return immediately but instead watch the process spawned by noip2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/noip2")," as the program folder of NO-IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,o.kt)("inlineCode",{parentName:"li"},"always")," value means the service will be restarted regardless of whether it exited cleanly or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and starts the service at boot time. If we input ",(0,o.kt)("inlineCode",{parentName:"li"},"multi-user.target"),", we can specify that the software will start when the system is set up for multiple users.")),(0,o.kt)("p",null,"That is the content of the service file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=No-ip.com Dynamic DNS\nAfter=network.target\nAfter=syslog.target\nWants=network-online.target\nAfter=network-online.target\n\n[Install]\nWantedBy=multi-user.target\nAlias=noip.service\n\n[Service]\nExecStart=/usr/local/bin/noip2\nRestart=always\nType=forking\n")),(0,o.kt)("h4",{id:"starting-noip-as-a-service"},"Starting NOIP as a Service"),(0,o.kt)("p",null,"First, we need to reload the system manager configuration. It is used when making changes to service configuration files or creating new service files, ensuring that the system daemon is aware of the changes like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Afterward, we can start the noip2 service using the system control command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start noip2\n")),(0,o.kt)("p",null,"To enable the noip2 service to start when the system boots, we can use the system control to create a symbolic link as we did before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable noip2\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Created symlink /etc/systemd/system/noip.service \u2192 /etc/systemd/system/noip2.service.\nCreated symlink /etc/systemd/system/multi-user.target.wants/noip2.service \u2192 /etc/systemd/system/noip2.service.\n")),(0,o.kt)("p",null,"We can fetch the current status from the system control to check if the noip2 service is running and configured correctly. It will display whether it is active, enabled, or disabled and show any recent log entries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status noip2\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u25cf noip2.service - No-ip.com Dynamic DNS\n     Loaded: loaded (/etc/systemd/system/noip2.service; enabled; vendor preset: enabled)\n     Active: active (running) since [DATE] UTC; [TIME] ago\n   Main PID: 4387 (noip2)\n      Tasks: 1 (limit: 38043)\n     Memory: 228.0K\n        CPU: 6ms\n     CGroup: /system.slice/noip2.service\n             \u2514\u25004387 /usr/local/bin/noip2\n\n[DATE] [TIME] [USER] systemd[1]:  Starting No-ip.com Dynamic DNS\n[DATE] [TIME] [USER] noip2[4387]: v2.1.9 daemon started with NAT enabled\n[DATE] [TIME] [USER] systemd[1]:  Started No-ip.com Dynamic DNS.\n[DATE] [TIME] [USER] noip2[4387]: [DYN_DNS_NAME] was already set to [PUBLIC_IP].\n...\n")),(0,o.kt)("h4",{id:"complete-noip-setup"},"Complete NOIP Setup"),(0,o.kt)("p",null,"Make sure to complete the setup by logging into your NOIP account again. Please set 2FA, a username, and a security question to protect against malicious actors. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"My Services")," section, copy your hostname, as we need it in the next step."),(0,o.kt)("h4",{id:"set-dynamic-dns-hostname-in-config"},"Set Dynamic DNS Hostname in Config"),(0,o.kt)("p",null,"Now that everything is configured in the right way, we can set the hostname into the config file of the consensus client."),(0,o.kt)("p",null,"Navigate into your node's working directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <your-node-directory>\n")),(0,o.kt)("p",null,"Stop your currently running clients:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso stop\n")),(0,o.kt)("p",null,"The output should be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# INFO[0000] PID ----- - Execution (geth): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Consensus (prysm): Stopped \ud83d\udd18\n# INFO[0000] PID ----- - Validator (validator): Stopped \ud83d\udd18\n")),(0,o.kt)("p",null,"Open your Prysm configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"### Prysm Mainnet Configuration\nnano /configs/mainnet/prysm/prysm.yaml\n\n### Prsym Testnet Configuration\nnano /configs/testnet/prysm/prysm.yaml\n")),(0,o.kt)("p",null,"Now add the following line, including your hostname of the Dynamic DNS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"p2p-host-dns: '<your-hostname-address>'\n")),(0,o.kt)("p",null,"Comment the old ip property out by putting a hash in front of it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"#p2p-host-ip: '<your-host-ip>'\n")),(0,o.kt)("p",null,"Restart the client again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Restart Mainnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..."\n\n# Restart Testnet Validator\nlukso start --validator --transaction-fee-recipient "0x1234..." --testnet\n')),(0,o.kt)("p",null,"After setting your public address, wait some minutes to recheck your peer count. You should see it rise. After some hours, you should have a stable connection."))}d.isMDXComponent=!0}}]);