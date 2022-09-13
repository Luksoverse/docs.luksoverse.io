import React from "react";
import Card from "../Card";

const Cards = () => {
  const cardData = [
    {
      title: "SSH",
      description: "how to setup SSH for your node",
      path: "/docs/Guides/ssh",
    },
    {
      title: "vpn",
      description: "how to setup a vnp for your node",
      path: "/docs/Guides/vpn",
    },
    {
      title: "Run a Node",
      description: "Learn how to setup a Lukso node from start to finish",
      path: "/docs/the-guide/start-here",
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
