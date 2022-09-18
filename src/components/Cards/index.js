import React from "react";
import Card from "../Card";

const Cards = () => {
  const cardData = [
    {
      title: "Run a Node",
      description: "Learn how to setup a Lukso node from start to finish",
      path: "/docs/the-guide/start-here",
    },
    {
      title: "SSH",
      description: "How to setup SSH for your node",
      path: "/docs/Community Guides/ssh",
    },
    {
      title: "VPN",
      description: "How to setup a VPN for your node",
      path: "/docs/Community Guides/vpn",
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
