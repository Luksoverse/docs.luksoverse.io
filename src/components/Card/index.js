import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const Card = ({ title, description, path }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className={styles.card}>
        <div class="card-header">
          <h3>{title}</h3>
        </div>
        <div class="card-body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
