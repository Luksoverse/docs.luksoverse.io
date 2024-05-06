"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[3669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Enable Secure Authentication",s={unversionedId:"mainnet/complete-node-guide/access-connection/secure-auth",id:"mainnet/complete-node-guide/access-connection/secure-auth",title:"Enable Secure Authentication",description:"Now we need to enable key authentication on the SSH configuration of the node. Therefore we adjusted the config file as we did in the system's setup.",source:"@site/docs/mainnet/complete-node-guide/5-access-connection/05-secure-auth.md",sourceDirName:"mainnet/complete-node-guide/5-access-connection",slug:"/mainnet/complete-node-guide/access-connection/secure-auth",permalink:"/docs/mainnet/complete-node-guide/access-connection/secure-auth",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/5-access-connection/05-secure-auth.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuring a Login Key",permalink:"/docs/mainnet/complete-node-guide/access-connection/key-login"},next:{title:"Start here",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/start-here"}},l={},c=[{value:"5.5.1 Testing the password connection",id:"551-testing-the-password-connection",level:3},{value:"5.5.2 Adding the key on the computer",id:"552-adding-the-key-on-the-computer",level:3},{value:"5.5.3 Testing the new authentification",id:"553-testing-the-new-authentification",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enable-secure-authentication"},"Enable Secure Authentication"),(0,a.kt)("p",null,"Now we need to enable key authentication on the SSH configuration of the node. Therefore we adjusted the config file as we did in the system's setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,"Within the file, scroll down to the following lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"#PermitRootLogin prohibit-password\n...\n#PubkeyAuthentication yes\n...\n#AuthorizedKeysFile .ssh/authorized_keys ./ssh/authored_keys2\n...\n#PasswordAuthentication yes\n#PermitEmptyPasswords no\n...\n#KbdInteractiveAuthentication no\n")),(0,a.kt)("p",null,"Here is a description of what those settings are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PermitRootLogin"),': Controls whether the root user can log in via SSH. The "prohibit-password" value means the root user can log in using public key authentication but not a password.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PubkeyAuthentication"),": Enables or disables public key authentication, which allows users to authenticate using their SSH keys instead of a password."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AuthorizedKeysFile"),": Specifies the file(s) containing the public keys authorized to log in to the system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PasswordAuthentication"),': Enables or disables password-based authentication. It is enabled by default, so we want to uncomment the line and explicitly set it to "no" to disable password authentication.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PermitEmptyPasswords"),": Controls whether users with empty passwords can authenticate. When disabled, users with blank passwords cannot establish a connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KbdInteractiveAuthentication"),': Enables or disables challenge-response authentication, a more interactive form of authentication that typically involves the server sending a challenge to the client, and the client responds with an appropriate answer. When set to "no," challenge-response authentication is disabled. We do not need this when we want to use our new key exclusively.')),(0,a.kt)("p",null,"Now edit the properties within the config file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"uncomment them by removing the ",(0,a.kt)("inlineCode",{parentName:"li"},"#")," in front"),(0,a.kt)("li",{parentName:"ul"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},"remove the second key folder from the authorized key files")),(0,a.kt)("p",null,"The outcome should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"PermitRootLogin prohibit-password\n...\nPubkeyAuthentication yes\n...\nAuthorizedKeysFile .ssh/authorized_keys\n...\nPasswordAuthentication no\nPermitEmptyPasswords no\n...\nKbdInteractiveAuthentication no\n")),(0,a.kt)("p",null,"Save and close the file. We can use the SHH daemon to validate our updated SSH configuration in a test run before we apply the change in production. Testing is crucial as we cannot do a regular password login afterward."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo sshd -t\n")),(0,a.kt)("p",null,"If there is no output, everything has been alright. Restart the running SSH daemon for the new adjustments to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart sshd\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log out of your node")),(0,a.kt)("h3",{id:"551-testing-the-password-connection"},"5.5.1 Testing the password connection"),(0,a.kt)("p",null,"After these configurations were applied correctly, we want to test if we can still log in using our password. Please exchange ",(0,a.kt)("inlineCode",{parentName:"p"},"<ssh-device-alias")," with your actual SSH device name of the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh <ssh-device-alias>\n")),(0,a.kt)("p",null,"You should not be permitted anymore and see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh: connect to host <ssh-device-alias> port 22: Connection refused\n")),(0,a.kt)("p",null,"If you can still log in using your user's password, redo the previous step and make sure the SSH client is restarted correctly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To connect to our node again, we need to add the SSH key to the SSH client of our personal computer.")),(0,a.kt)("h3",{id:"552-adding-the-key-on-the-computer"},"5.5.2 Adding the key on the computer"),(0,a.kt)("p",null,"Add the RSA key as an identity to your SSH connection properties on your personal computer by opening the configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano ~/.ssh/config\n")),(0,a.kt)("p",null,"Below the port of your node host, add the following line starting with two spaces. Ensure to update ",(0,a.kt)("inlineCode",{parentName:"p"},"<my-chosen-keyname>")," with the actual name of the key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"  IdentityFile ~/.ssh/<my-chosen-keyname>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The identity file points to your private SSH key, so do not add the ",(0,a.kt)("inlineCode",{parentName:"p"},".pub")," file type extension behind the name.")),(0,a.kt)("p",null,"The final output should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Host <ssh-device-alias>\n  User <node-username>\n  HostName <node-ip>\n  Port <ssh-port>\n  IdentityFile ~/.ssh/<my-chosen-keyname>\n")),(0,a.kt)("p",null,"Of course, you will see your actual properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<ssh-device-alias>"),": your nodes SSH device name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<node-username>"),": your node's username"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<node-ip-address>"),": your node's static IP address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<ssh-port>"),": your opened port number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<my-chosen-keyname>"),": your SSH key.")),(0,a.kt)("p",null,"Save and close the file so we can continue to test the SSH key login."),(0,a.kt)("h3",{id:"553-testing-the-new-authentification"},"5.5.3 Testing the new authentification"),(0,a.kt)("p",null,"Test the new key login by starting the SSH connection to our node. This time the SSH client should not prompt for the user's password. Instead, it should ask to encrypt the private key with the passphrase."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you did not set up any password for the key, you will connect automatically.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh <ssh-device-alias>\n")),(0,a.kt)("p",null,"After entering the correct passphrase, you will end up on the Ubuntu server welcoming printout."))}p.isMDXComponent=!0}}]);