import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Card = ({ title, description, path, color }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div className={styles.card} style={{ backgroundColor: color }}>
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
