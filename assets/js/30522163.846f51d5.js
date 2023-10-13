"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[4976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},s="Service Automation",i={unversionedId:"mainnet/complete-node-guide/blockchain-clients/automation",id:"mainnet/complete-node-guide/blockchain-clients/automation",title:"Service Automation",description:"By default, the blockchain clients are not automatically starting whenever there has been a power outage or crash on your node system. This means additional manual work by logging into the node again after a power outage and restarting the clients.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/12-automation.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/automation",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/automation",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/12-automation.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peer Discovery",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/peer-discovery"},next:{title:"LUKSO Docker Setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"}},l={},u=[{value:"6.12.1 Preparations",id:"6121-preparations",level:3},{value:"6.12.2 Setting a New User",id:"6122-setting-a-new-user",level:3},{value:"6.12.3 Checking the New User",id:"6123-checking-the-new-user",level:3},{value:"6.12.4 Adding the Password File",id:"6124-adding-the-password-file",level:3},{value:"6.12.5 Adding Startup Script",id:"6125-adding-startup-script",level:3},{value:"6.12.6 Change User Access Rights",id:"6126-change-user-access-rights",level:3},{value:"6.12.7 Configuring the Service",id:"6127-configuring-the-service",level:3},{value:"JSON Exporter Logging",id:"json-exporter-logging",level:4},{value:"Property Modifications",id:"property-modifications",level:4},{value:"6.12.8 Restarting the Service",id:"6128-restarting-the-service",level:3},{value:"6.12.9 Checking the Service Status",id:"6129-checking-the-service-status",level:3},{value:"Permission Disclaimer",id:"permission-disclaimer",level:4},{value:"6.12.10 Maintenance",id:"61210-maintenance",level:3},{value:"Manual CLI Starts",id:"manual-cli-starts",level:4},{value:"Service Management",id:"service-management",level:4},{value:"Logging",id:"logging",level:4},{value:"Restarting",id:"restarting",level:4},{value:"Stopping",id:"stopping",level:4},{value:"6.12.11 Optional User Removal",id:"61211-optional-user-removal",level:3},{value:"6.12.12 Optional Service Removal",id:"61212-optional-service-removal",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-automation"},"Service Automation"),(0,o.kt)("p",null,"By default, the blockchain clients are not automatically starting whenever there has been a power outage or crash on your node system. This means additional manual work by logging into the node again after a power outage and restarting the clients."),(0,o.kt)("p",null,"As the CLI maintains all blockchain clients, we can add a script run every time on boot. However, managing or restarting individual services is not possible within this setup, as it requires the professional configuration of each client. Here, ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/notifications/telegram-alerts"},"Grafana Alerts")," are helping out, as they will inform you if singular processes can not be reached anymore."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Version Disclaimer"),": Automation is only possible from ",(0,o.kt)("inlineCode",{parentName:"p"},"LUKSO CLI Version 0.8.1")," onwards. Make sure you have the latest version installed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso version")," command.")),(0,o.kt)("p",null,"If you have an outdated version, install the latest one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://install.lukso.network | sh\n")),(0,o.kt)("h3",{id:"6121-preparations"},"6.12.1 Preparations"),(0,o.kt)("p",null,"As we need our validator wallet's password every time during startup, automation would mean that we have to write it into a file. It is not a significant security issue, as only the specific node user would have access to read. Still, you must understand the added risk in exchange for convenience if someone gets access to your node's root password and authentication key. Therefore, we will add a separate user to run the node and exclusively be able to read from the password file."),(0,o.kt)("p",null,"Move into the working directory of your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Move to home path\ncd\n\n# Move into your working directory\ncd <your-node-folder>\n")),(0,o.kt)("p",null,"Stop the node before you continue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso stop\n")),(0,o.kt)("h3",{id:"6122-setting-a-new-user"},"6.12.2 Setting a New User"),(0,o.kt)("p",null,"We will create a new system user specifically to run the node and its validator service. Running services as a system user with minimal privileges is a typical security best practice, as he would not be allowed to write outside of his client's folders. It limits the potential damage if the software is somehow compromised, and hides the related folders for all other services. The node's user won't be able to write to directorieson the system or execute commands as other users. We will use the system's user creation tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons rather than for people to log in with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to create a new group with the same name as the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with a login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,o.kt)("inlineCode",{parentName:"li"},"lukso-validator-worker")," to differentiate the service between the user, often using the exact name of the program. Feel free to come up with your name, but remember that you must change future commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system lukso-validator-worker --group --no-create-home\n")),(0,o.kt)("h3",{id:"6123-checking-the-new-user"},"6.12.3 Checking the New User"),(0,o.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),",\na powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'grep "lukso-validator-worker" /etc/passwd\n')),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"lukso-validator-worker:x:120:126::/home/lukso-validator-worker:/usr/sbin/nologin\n")),(0,o.kt)("h3",{id:"6124-adding-the-password-file"},"6.12.4 Adding the Password File"),(0,o.kt)("p",null,"We will need to create two new files: one for the password and one for the service automation. Start by creating the password file:"),(0,o.kt)("p",null,"Make sure you're in the config folder of the node's working directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Move to home directory\ncd\n\n# Open config folder\ncd <your-node-folder>\n")),(0,o.kt)("p",null,"Create a new directory to store the file in. This is just so it does not directly appear within the root directory for everyone to see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Create the folder\nmkdir static\n\n# Move into it\ncd static\n")),(0,o.kt)("p",null,"It is definitely recommended to define a generic name, so not everyone immedientelly can tell there is a password behind, even if they somehow got access."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nano ./<your-generic-filename>\n\n# Example\nnano ./client_dependencies\n")),(0,o.kt)("p",null,"Write your password into this file and save it. Afterward we will have to give permissions to this file, so the specified user can access it during startup."),(0,o.kt)("h3",{id:"6125-adding-startup-script"},"6.12.5 Adding Startup Script"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Permission Notice"),": In case you are updating or creating a startup script, make sure to also redo the permissions within step 6.12.6 as the user wont have access to it.")),(0,o.kt)("p",null,"The system service file we will create later can execute a program and check if the network is online before starting it up. However, it's essential to understand that these ",(0,o.kt)("strong",{parentName:"p"},"system checks do not necessarily imply that you have a working internet connection"),"! It's mainly designed to indicate that the network is set up, which doesn't always guarantee a full-fledged active internet connection."),(0,o.kt)("p",null,"For the LUKSO CLI to start correctly without stalling, an internet connection must be established before starting the clients. If you face a power outage at home, and your node resumes work before the router can reconnect, you would still have to restart the system service manually."),(0,o.kt)("p",null,"To solve this issue, we can call an external script instead of starting the CLI directly. This script then tries to ping Google first, before continuing the node start. If the internet connection is up and could ping Google successful, it will start up the LUKSO CLI. If not, it will wait for 1 second and retry to ping Google again until it is successful."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The external script will guarantee a healthy startup for the clients.")),(0,o.kt)("p",null,"First, we will create a new file within the same folder as the password file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nano ./lukso_startup.sh\n")),(0,o.kt)("p",null,"To ping Google, we can define the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"c1"),": Specifies the number of packets to send before stopping. In our case, it tells ping only to send one package. The parameter is often used in scripts or when testing connectivity because it prevents other pings after one successful or unsuccessful try rather than continuing indefinitely."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&>/dev/null"),": Redirects errors and outputs to ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/null"),", effectively discarding them. The discard is helpful because we don't care about the output and just want to use the ping utility for our script.")),(0,o.kt)("p",null,"The working directory will be our regular node folder so that we can use dynamic file paths. However, make sure that you exchange the placeholders with your own input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-generic-password-file>"),": The name of your password file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-fee-recipient-address>"),": Your EOA address to receive recipient fees.")),(0,o.kt)("p",null,"This is how the script looks for mainnet startup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\n# Try to ping Google server\nwhile ! ping -c1 google.com &>/dev/null\ndo\n    echo "Internet down. Google could not be pinged, retrying in 1 second."\n    sleep 1\ndone\necho "Internet up. Starting the LUKSO Validator."\n# If internet is up, continue with next command\nexec /usr/local/bin/lukso start \\\n        --validator \\\n        --genesis-json ./configs/mainnet/shared/genesis_42.json \\\n        --genesis-ssz ./configs/mainnet/shared/genesis_42.ssz \\\n        --validator-wallet-password ./static/<your-generic-password-file> \\\n        --transaction-fee-recipient "<your-fee-recipient-address>" \\\n        --checkpoint-sync\n')),(0,o.kt)("p",null,"This is how the script looks for testnet startup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\n# Try to ping Google server\nwhile ! ping -c1 google.com &>/dev/null\ndo\n    echo "Internet down. Google could not be pinged, retrying in 1 second."\n    sleep 1\ndone\necho "Internet up. Starting the LUKSO Validator."\n# If internet is up, continue with next command\nexec /usr/local/bin/lukso start \\\n        --testnet \\\n        --validator \\\n        --validator-wallet-password ./static/<your-generic-password-file> \\\n        --transaction-fee-recipient "<your-fee-recipient-address>" \\\n        --checkpoint-sync\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Additional Flags"),": You can also add more flags (using ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),") like ",(0,o.kt)("inlineCode",{parentName:"p"},"--prysm-no-slasher"),". Please keep in mind that you will also have to add another backslash ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," to the previous line.")),(0,o.kt)("h3",{id:"6126-change-user-access-rights"},"6.12.6 Change User Access Rights"),(0,o.kt)("p",null,"Afterward, we can give access to the whole working directory of the node, so the processes can read all the config files. Make sure to adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"<user-name>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso-working-directory"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-generic-password-file>")," properties to your actual names. The user name is the regular one you log in with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R lukso-validator-worker:lukso-validator-worker /home/<user-name>/<lukso-working-directory>\n")),(0,o.kt)("p",null,"Next we also want to change the ownership of the LUKSO CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown lukso-validator-worker:lukso-validator-worker /usr/local/bin/lukso\n")),(0,o.kt)("p",null,"In order to still be able to access our logs and working directory as regular user, we need to change the permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod -R 755 /home/<user-name>/<your-node-folder>\n")),(0,o.kt)("p",null,"The same goes for the read access of the password file, so only the owner of the validator client can read it. Groups and others won't see anything."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 400 /home/<user-name>/<your-node-folder>/static/<your-generic-password-file>\n")),(0,o.kt)("p",null,"For the startup script, only the user will need full read and execution rights:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 500 /home/<user-name>/<your-node-folder>/static/lukso_startup.sh\n")),(0,o.kt)("p",null,"Now we only have to check that the service can access the node directorie's path. If the process can not access parent directories, it wont be able to even see the folders he became owner of."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"namei -l /home/<user-name>/<your-node-folder>\n")),(0,o.kt)("p",null,"The output will look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"f: /home/<user-name>/<your-node-folder>\ndrwxr-xr-x root                    root                    /\ndrwxr-xr-x root                    root                    home\ndrwxr-x--- <user-name>             <user-name>             <user-name>\ndrwxr-xr-x lukso-validator-worker  lukso-validator-worker  <your-node-folder>\n")),(0,o.kt)("p",null,"You can see, that the lukso-validator-worker is owner of the node folder and can access ",(0,o.kt)("inlineCode",{parentName:"p"},"/home"),". However, only the regular node user can enter ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<user-name>"),"! We need to change it, so our new user can enter the node folder that sits within ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<user-name>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /home/<user-name>\n")),(0,o.kt)("p",null,"If you run the command again, you should see the change took effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"namei -l /home/<user-name>/<your-node-folder>\n")),(0,o.kt)("p",null,"The output will look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"f: /home/<user-name>/<your-node-folder>\ndrwxr-xr-x root                    root                    /\ndrwxr-xr-x root                    root                    home\ndrwxr-xr-x <user-name>             <user-name>             <user-name>\ndrwxr-xr-x lukso-validator-worker  lukso-validator-worker  <your-node-folder>\n")),(0,o.kt)("p",null,"Now we're good to go to configure the actual service."),(0,o.kt)("h3",{id:"6127-configuring-the-service"},"6.12.7 Configuring the Service"),(0,o.kt)("p",null,"Afterwards, we need to configure the system's service file for the validator application itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/lukso-validator.service\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information about the program can be found"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after a specific service, in this case, that the network has been set up, as we will need a network connection for this exporter to succeed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,o.kt)("inlineCode",{parentName:"li"},"lukso-validator-worker"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group"),": Specifies under which user group the service will run. In this case, it will be ",(0,o.kt)("inlineCode",{parentName:"li"},"lukso-validator-worker"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Configures the process startup type for this service unit. The ",(0,o.kt)("inlineCode",{parentName:"li"},"oneshot")," value means that our service configuration is starting up the clients but not maintaining them after boot or shutdown. The problem is, that there are multiple blockchain clients we have to start simultainiously, so we can not detect if one single one of them fails or exits, as all the configuration is done using the CLI files. If you want full control and maintanance, you would have to set up each client manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RemainAfterExit"),": Instructs the system to consider the service as remaining active even when all its processes exited. This is meaningful for oneshot services, where this option helps to indicate that the service, although its process has exited, should still be considered active."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WorkingDirectory"),": This directive specifies the working directory for the executed processes. In our case, it will be our node's working directory as all config files are fetched from there."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/lukso")," as the program folder of the LUKSO CLI. We will also start with the needed flags."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardOutput"),": Logfile where the output from the LUKSO CLI will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardError"),": Logfile where errors from the LUKSO CLI will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and starts the service at boot time. If we input ",(0,o.kt)("inlineCode",{parentName:"li"},"multi-user.target"),", we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its user fitting the description.")),(0,o.kt)("h4",{id:"json-exporter-logging"},"JSON Exporter Logging"),(0,o.kt)("p",null,"By default, the service will write journal logs into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,o.kt)("inlineCode",{parentName:"p"},"journal")," service. But you can also configure it to use system logs written into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," process. Here is a quick rundown:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"journal"),": The logs are structured and include metadata about each log entry, making them easier to filter and analyze but more challenging to read our bugfix. The service includes default rate limiting and log rotation, which can help keep log sizes small. It also stores logs in a binary format, which can be more space-efficient and faster to process than text-based logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"syslog"),": System logs are text-based logs, which are easier to read, bugfix, and process with traditional command-line tools. It also has a network protocol, so it could send logs to remote servers if thats something you need.")),(0,o.kt)("h4",{id:"property-modifications"},"Property Modifications"),(0,o.kt)("p",null,"Make sure you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," properties if you've previously changed the name, as it will fall back to ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," and could cause security risks. You also have to change the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<user-name>"),": Your systems user name that you use to log into your node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<lukso-working-directory>"),": This will be your working directory of your node where you did ",(0,o.kt)("inlineCode",{parentName:"li"},"lukso init")," in. Its needed for all config files, the wallet, and the chaindata.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, following the correct syntax and structure are essential to ensure that the JSON Exporter functions appropriately and provides the desired level of security. Please verify that you do not use spaces between properties and their values.")),(0,o.kt)("p",null,"Our final configuration file for mainnet will look like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=LUKSO Validator Service\nDocumentation=https://github.com/lukso-network/tools-lukso-cli\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=lukso-validator-worker\nGroup=lukso-validator-worker\nType=oneshot\nRemainAfterExit=yes\nWorkingDirectory=/home/<user-name>/<lukso-working-directory>\nExecStart=/home/<user-name>/<lukso-working-directory>/static/lukso_startup.sh\nExecStop=/usr/local/bin/lukso stop\nSyslogIdentifier=lukso-validator\nStandardOutput=journal\nStandardError=journal\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("h3",{id:"6128-restarting-the-service"},"6.12.8 Restarting the Service"),(0,o.kt)("p",null,"First, we need to reload the system manager configuration. It is used when making changes to service configuration files or creating new service files, ensuring that systemd is aware of the changes like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Afterwards, we can start the Node Exporter service using the system control command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start lukso-validator\n")),(0,o.kt)("p",null,"To enable the validator client to start when the system boots, we can use the system control to create a symbolic link as we did before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable lukso-validator\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Created symlink /etc/systemd/system/multi-user.target.wants/validator-validator.service \u2192 /etc/systemd/system/lukso-validator.service.\n")),(0,o.kt)("h3",{id:"6129-checking-the-service-status"},"6.12.9 Checking the Service Status"),(0,o.kt)("p",null,"We can fetch the current status from the system control to check if the Node Exporter service is running and configured correctly. It will display whether it is active, enabled, or disabled and show any recent log entries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status lukso-validator\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'\u25cf validator.service - LUKSO Validator Node\n     Loaded: loaded (/etc/systemd/system/validator.service; enabled; vendor preset: enabled)\n     Active: active (exited) since [DATE] UTC; [TIME] ago\n       Docs: https://github.com/lukso-network/tools-lukso-cli\n   Main PID: 9096 (code=exited, status=0/SUCCESS)\n      Tasks: 26 (limit: 4694)\n     Memory: 1.1G\n     CGroup: /system.slice/validator.service\n             [PID] geth --config=./configs/testnet/geth/geth.toml\n             \u251c\u2500[PID] prysm --log-file=./testnet-logs/prysm_2023-06-06_14-43-01.log --accept-terms-of-use --config-file=./configs/testn>\n             \u2514\u2500[PID] validator --accept-terms-of-use --config-file=./configs/testnet/prysm/validator.yaml --log-file=./testnet-logs/va>\n\n[DATE] [TIME] [USER] validator[9096]: time="2023-06-06T14:43:13Z" level=info msg="\u2705  Validator started! Use \'luk>\n[DATE] [TIME] [USER] validator[9096]: time="2023-06-06T14:43:13Z" level=info msg="\ud83c\udf89  Clients have been started. >\n...\n[DATE] [TIME] [USER] systemd[1]: Finished LUKSO Validator Node.\n')),(0,o.kt)("p",null,"You can still check the status of the node, however, you always have to use the superuser permission to do so."),(0,o.kt)("h4",{id:"permission-disclaimer"},"Permission Disclaimer"),(0,o.kt)("p",null,"As we are having a separate user to run the service, we now need to execute all ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso")," commands using super user permission. If you are not using super user permission, ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso status")," will show all processes as stopped even if they are running! The same goes for ",(0,o.kt)("inlineCode",{parentName:"p"},"lukso logs"),", as it will show that there are no logs found, even if the process is generating them in the background."),(0,o.kt)("p",null,"Navigate into your home directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,o.kt)("p",null,"Move into your working directory of your node. Make sure to change ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-working-directory>")," within your command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <your-working-directory>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo lukso status\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"INFO[0000] PID 9409 - Execution (geth): Running \ud83d\udfe2\nINFO[0000] PID 9419 - Consensus (prysm): Running \ud83d\udfe2\nINFO[0000] PID 9426 - Validator (validator): Running \ud83d\udfe2\n")),(0,o.kt)("h3",{id:"61210-maintenance"},"6.12.10 Maintenance"),(0,o.kt)("p",null,"Proper maintenance ensures that all the components are working as intended, can be updated on the fly, and that software can be kept up-to-date and secure. It's also essential to identify and fix errors quickly. There are some things to clarify first about how the node clients should be maintained and why:"),(0,o.kt)("h4",{id:"manual-cli-starts"},"Manual CLI Starts"),(0,o.kt)("p",null,"Within the service, we configured the LUKSO CLI to run as a specific user with only the necessary permissions to the node folder and its exclusive rights to view the password file. Separate permissions are a preventative measure against potential security threats. If you start and stop the CLI with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," manually, it will be run with superuser privileges as root, meaning it will have complete access to the system. The entire system could be at risk if the service or application is compromised or has a potentially undiscovered exploit. Therefore, always use the system control so it is run from a specific user, limiting its access and reducing risk."),(0,o.kt)("p",null,"In addition, using the system management tool for controlling your services is beneficial for maintenance. The configured service provides a standard method to start, stop, and restart applications. It manages service dependencies and can automatically restart services if they crash. Systemd also logs service outputs and monitors their process IDs, which aids in monitoring and troubleshooting. All the convenience and automation would not be done if started manually!"),(0,o.kt)("h4",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"The service file simulates the start command as if it is run directly within your node's working directory, meaning executing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo lukso stop")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo lukso start")," will work as before. The LUKSO CLI can not be started two times simultaneously if it is already running on the system. So there is no risk of accidentally being slashed or duplicating the clients. However, if it was started as a service before, and you would execute the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo lukso start")," manually, it would restart the node clients as root with full access rights, which should be avoided, as stated above."),(0,o.kt)("h4",{id:"logging"},"Logging"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"journal")," is your logging tool, you can access the full logs with the journal control tool."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f"),": Logging in follow mode displays the most recent journal entries and then updates in real-time as new entries are added."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-u"),": In unit mode, it filters the log to show only entries for the specified system's service, this time ",(0,o.kt)("inlineCode",{parentName:"li"},"validator"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -f -u lukso-validator\n")),(0,o.kt)("h4",{id:"restarting"},"Restarting"),(0,o.kt)("p",null,"If you made any changes to configuration files, reload the system daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Then, restart the service using the system control:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart lukso-validator\n")),(0,o.kt)("h4",{id:"stopping"},"Stopping"),(0,o.kt)("p",null,"You can stop the service using the system control. Make sure to always use the"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop lukso-validator\n")),(0,o.kt)("h3",{id:"61211-optional-user-removal"},"6.12.11 Optional User Removal"),(0,o.kt)("p",null,"If you ever want to remove the user or something went wrong, do the following steps:"),(0,o.kt)("p",null,"Change the owner back to your regular node user. Make sure to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-node-user>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-working-directory>")," properties within the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R <your-node-user>:<your-node-user> /home/<your-node-user>/<your-working-directory>\n")),(0,o.kt)("p",null,"Next, you can revert the ownership of the LUKSO CLI back to as it was before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown root:root /usr/local/bin/lukso\n")),(0,o.kt)("p",null,"After, you can restrict the home directory to your user again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 750 /home/<user-name>\n")),(0,o.kt)("p",null,"Remove the user and all the files, so there are no orphaned data blobs on your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo deluser --remove-all-files lukso-validator-worker\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo delgroup lukso-validator-worker\n")),(0,o.kt)("h3",{id:"61212-optional-service-removal"},"6.12.12 Optional Service Removal"),(0,o.kt)("p",null,"If you want to remove the automation tool, stop the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop lukso-validator\n")),(0,o.kt)("p",null,"Disable the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl disable lukso-validator\n")),(0,o.kt)("p",null,"Remove the service file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm /etc/systemd/system/lukso-validator.service\n")),(0,o.kt)("p",null,"Now, remove password file and its folder. You may need to adjust the names in case you stored the password file in a different position."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf <node-working-directory>/static\n")),(0,o.kt)("p",null,"Reload the system service daemon to get the service file change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")))}d.isMDXComponent=!0}}]);