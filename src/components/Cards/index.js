import React from 'react';
import Card from '../Card';

const Cards = () => {
  const cardData = [
    {
      title: 'Run a Node',
      description: 'Learn how to setup a Lukso node from start to finish.',
      path: '/docs/node-guide/start-here',
    },
    {
      title: "Johnny's Node Guide",
      description: 'Setting up your system and start the LUKSO network.',
      path: '/docs/community-guides/johnny-ebd-node-guide',
    },
    {
      title: 'System & Monitoring',
      description: 'How to setup your system and Grafana/Prometheus dashboard.',
      path: '/docs/community-guides/system-monitoring-setup',
    },
    {
      title: 'VPN Setup',
      description: 'How to setup a VPN for external access to your node.',
      path: '/docs/community-guides/vpn-setup',
    },
    {
      title: 'OpenSSH Setup',
      description: 'How to setup SSH for remote controls or data transfers.',
      path: '/docs/community-guides/openssh-setup',
    },
    {
      title: 'SSH Security',
      description: 'Learn to improve your SSH setup for advanced security.',
      path: '/docs/community-guides/ssh-security',
    },
    {
      title: 'Troubleshooting',
      description: 'Learn to troubleshoot your node with easy tooltips.',
      path: '/docs/community-guides/node-troubleshoot',
    },
    {
      title: 'Uninstalling',
      description: 'How to remove depricated node tools and their data.',
      path: '/docs/community-guides/node-uninstall',
    },
    {
      title: 'Archive Docs',
      description:
        'Guides and Specs for L16 and depricated LUKSO CLI versions.',
      path: '/docs/l16-archive-docs/parameters',
    },
  ];
  return (
    <>
      {cardData.map((data) => (
        <Card
          title={data.title}
          description={data.description}
          path={data.path}
        />
      ))}
    </>
  );
};

export default Cards;
