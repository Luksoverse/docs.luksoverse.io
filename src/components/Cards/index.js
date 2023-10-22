import React from 'react';
import Card from '../Card';

const Cards = () => {
  const cardData = [
    {
      title: 'Complete Mainnet Setup',
      description:
        'A complete guide to prepare your system, install your node and setup monitoring by LUKSO dev Felix Hildebrandt.',
      path: '/docs/mainnet/complete-node-guide/hardware-build/start-here',
      color: '#FF5733',
    },
    {
      title: 'Staking Services',
      description:
        'Still too complicated? Luksoverse has some great no-coding options for you.',
      path: '/docs/staking-services/staking-services',
      color: '#FF5733',
    },
    {
      title: 'Uninstalling',
      description: 'How to remove depricated node tools and their data.',
      path: '/docs/community-guides/node-uninstall',
      color: '#FF5733',
    },
    {
      title: 'Advanced Setup',
      description:
        'Community Guides how to use an advanced setup to acces your node externally.',
      path: '/docs/community-guides/',
      color: '#FF5733',
    },
    {
      title: 'Community Archive',
      description: 'Setting up your system and start the LUKSO network.',
      path: '/docs/community-guides/community-archive',
      color: '#FF5733',
    },
    {
      title: 'LUKSO Archive',
      description:
        'Guides and Specs for L16 and depricated LUKSO CLI versions.',
      path: '/docs/l16-archive-docs/parameters',
      color: '#FF5733',
    },
  ];

  return (
    <>
      {cardData.map((data) => (
        <Card
          title={data.title}
          description={data.description}
          path={data.path}
          color={data.color}
        />
      ))}
    </>
  );
};

export default Cards;
