"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[34],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Part 3 - Settings & Security",s={unversionedId:"the-guide/settings-security",id:"the-guide/settings-security",title:"Part 3 - Settings & Security",description:"In part three, we will update various settings to improve security.",source:"@site/docs/the-guide/3-settings-security.md",sourceDirName:"the-guide",slug:"/the-guide/settings-security",permalink:"/docs/the-guide/settings-security",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/the-guide/3-settings-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 2 - Configure SSH",permalink:"/docs/the-guide/setup-client"},next:{title:"Part 4 - LUKSO Network Setup",permalink:"/docs/the-guide/network-setup"}},l={},u=[{value:"Step 1 - Configure SSH Server",id:"step-1---configure-ssh-server",level:2},{value:"1.1 -  open the configuration file:",id:"11----open-the-configuration-file",level:3},{value:"1.2 - configure the settings",id:"12---configure-the-settings",level:3},{value:"1.3 - validate SSH configuration",id:"13---validate-ssh-configuration",level:3},{value:"1.4 - restart ssh service",id:"14---restart-ssh-service",level:3},{value:"1.5 - test connection",id:"15---test-connection",level:3},{value:"Step 2 - System Update",id:"step-2---system-update",level:2},{value:"2.1 - manually update the system",id:"21---manually-update-the-system",level:3},{value:"2.2 - configure auto-update",id:"22---configure-auto-update",level:3},{value:"Step 3 - Disable Root Access",id:"step-3---disable-root-access",level:2},{value:"Step 4 - Block Unauthorized Access",id:"step-4---block-unauthorized-access",level:2},{value:"4.1 - install fail2ban",id:"41---install-fail2ban",level:3},{value:"4.2 - configure fail2ban",id:"42---configure-fail2ban",level:3},{value:"4.3 - restart the service",id:"43---restart-the-service",level:3},{value:"Step 5 - Improve SSH Connection",id:"step-5---improve-ssh-connection",level:2},{value:"5.1 - open the configuration file",id:"51---open-the-configuration-file",level:3},{value:"5.2 - modify power setting",id:"52---modify-power-setting",level:3},{value:"5.3 - restart the service:",id:"53---restart-the-service",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-3---settings--security"},"Part 3 - Settings & Security"),(0,r.kt)("p",null,"In part three, we will update various settings to improve security."),(0,r.kt)("h2",{id:"step-1---configure-ssh-server"},"Step 1 - Configure SSH Server"),(0,r.kt)("p",null,"In this step, the SSH server will be configured. The following keywords will be set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ChallengeResponseAuthentication no")," - disables keyboard authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication no")," - disables password authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PermitRootLogin prohibit-password")," - disables password and keyboard-interactive authentication for root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PermitEmptyPasswords no")," - When password authentication is allowed, it specifies whether the server allows login to accounts with empty password strings. The default is no.")),(0,r.kt)("h3",{id:"11----open-the-configuration-file"},"1.1 -  open the configuration file:"),(0,r.kt)("p",null,"Connect to you node machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/ssh/sshd_config\n")),(0,r.kt)("h3",{id:"12---configure-the-settings"},"1.2 - configure the settings"),(0,r.kt)("p",null,"Copy the code block below and paste the keywords to the top of the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/ssh/sshd_config",title:"/etc/ssh/sshd_config"},"ChallengeResponseAuthentication no\nPasswordAuthentication no\nPermitRootLogin prohibit-password\nPermitEmptyPasswords no\n")),(0,r.kt)("p",null,"Save and exit"),(0,r.kt)("h3",{id:"13---validate-ssh-configuration"},"1.3 - validate SSH configuration"),(0,r.kt)("p",null,"Check that the ssdh_config file is valid. If this command results in errors, go back to the last step and double check the changes you made."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sshd -t\n")),(0,r.kt)("h3",{id:"14---restart-ssh-service"},"1.4 - restart ssh service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart sshd\n")),(0,r.kt)("p",null,"Close the ssh session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"exit\n")),(0,r.kt)("h3",{id:"15---test-connection"},"1.5 - test connection"),(0,r.kt)("p",null,"Reconnect to your node machine to verify the settings have not caused any connectivity issues."),(0,r.kt)("h2",{id:"step-2---system-update"},"Step 2 - System Update"),(0,r.kt)("p",null,"It is very important to keep your machine updated. In this step we will run a manual update and the configure the machine to automatically update."),(0,r.kt)("h3",{id:"21---manually-update-the-system"},"2.1 - manually update the system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt-get update -y\nsudo apt dist-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,r.kt)("h3",{id:"22---configure-auto-update"},"2.2 - configure auto-update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt-get install unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,r.kt)("h2",{id:"step-3---disable-root-access"},"Step 3 - Disable Root Access"),(0,r.kt)("p",null,"A root access should not be used. Instead, a user should be using sudo to perform privileged operations on a system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo passwd -l root\n")),(0,r.kt)("h2",{id:"step-4---block-unauthorized-access"},"Step 4 - Block Unauthorized Access"),(0,r.kt)("p",null,"Install Fail2ban to block IP addresses that are attempting to access our node. Fail2ban blocks addresses after a certain number of failed attempts."),(0,r.kt)("h3",{id:"41---install-fail2ban"},"4.1 - install fail2ban"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get install fail2ban -y\n")),(0,r.kt)("h3",{id:"42---configure-fail2ban"},"4.2 - configure fail2ban"),(0,r.kt)("p",null,"Edit a config to monitor ssh logins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/fail2ban/jail.local\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<ssh-port>")," to match the ssh port number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[sshd]\nenabled=true\nport=<ssh-port>\nfilter=sshd\nlogpath=/var/log/auth.log\nmaxretry=3\nignoreip=\n")),(0,r.kt)("p",null,"Save changes and close the editor"),(0,r.kt)("h3",{id:"43---restart-the-service"},"4.3 - restart the service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart fail2ban\n")),(0,r.kt)("h2",{id:"step-5---improve-ssh-connection"},"Step 5 - Improve SSH Connection"),(0,r.kt)("p",null,"WiFi power management may slow down SSH connections. Modifying the config file will disable it."),(0,r.kt)("h3",{id:"51---open-the-configuration-file"},"5.1 - open the configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf\n")),(0,r.kt)("h3",{id:"52---modify-power-setting"},"5.2 - modify power setting"),(0,r.kt)("p",null,"Find the wifi.power setting and change to to match the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[connection]\nwifi.powersave = 2\n")),(0,r.kt)("p",null,"Save changes and close the editor."),(0,r.kt)("h3",{id:"53---restart-the-service"},"5.3 - restart the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart NetworkManager\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://man.openbsd.org/sshd_config"},"https://man.openbsd.org/sshd_config"))))}p.isMDXComponent=!0}}]);