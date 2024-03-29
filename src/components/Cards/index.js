import React from 'react';
import Card from '../Card';

const Cards = () => {
  const cardData = [
    {
      title: 'Complete Mainnet Setup',
      description:
        'A complete guide to prepare your system, install your node and setup monitoring by LUKSO dev Felix Hildebrandt.',
      path: '/docs/mainnet/complete-node-guide/hardware-build/start-here',
      color: '#B3B6BA',
    },
    {
      title: 'Staking Services',
      description:
        'Stakingverse also has no-coding options so anyone can participate in staking and earn rewards.',
      path: '/docs/staking/staking-services',
      color: '#B3B6BA',
    },
    {
      title: 'Uninstalling',
      description: 'How to remove depricated node tools and their data.',
      path: '/docs/community-guides/node-uninstall',
      color: '#B3B6BA',
    },
    {
      title: 'Advanced Setup',
      description:
        'Community Guides how to use an advanced setup to acces your node externally.',
      path: '/docs/community-guides/',
      color: '#B3B6BA',
    },
    {
      title: 'Community Archive',
      description: 'Setting up your system and start the LUKSO network.',
      path: '/docs/community-guides/community-archive',
      color: '#B3B6BA',
    },
    {
      title: 'LUKSO Archive',
      description:
        'Guides and Specs for L16 and depricated LUKSO CLI versions.',
      path: '/docs/l16-archive-docs/parameters',
      color: '#B3B6BA',
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
