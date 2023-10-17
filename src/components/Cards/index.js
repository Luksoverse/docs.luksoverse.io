import React from 'react';
import Card from '../Card';

const Cards = () => {
  const cardData = [
    {
      title: 'Complete Node Guide',
      description:
        'A complete guide to prepare your system, install your node and setup monitoring by LUKSO dev Felix Hildebrandt.',
      path: '/docs/mainnet/complete-node-guide/hardware-build/start-here',
    },
    {
      title: 'Staking Services',
      description: 'Still to complicated, we have some great options for you.',
      path: '/docs/community-guides/node-troubleshoot',
    },
    {
      title: 'Uninstalling',
      description: 'How to remove depricated node tools and their data.',
      path: '/docs/community-guides/node-uninstall',
    },
    {
      title: 'Advanced Setup',
      description:
        'Community Guides how to use an advanced setup to acces your node externally.',
      path: '/docs/community-guides/',
    },
    {
      title: 'Community Archive',
      description: 'Setting up your system and start the LUKSO network.',
      path: '/docs/community-guides/community-archive',
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
