import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Cards from '../components/Cards';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button', 'button--lg', styles.buttonCustom1)}
            to="/docs/mainnet/complete-node-guide/hardware-build/start-here"
          >
            Start Your Mainnet Node
          </Link>

          <Link
            className={clsx('button', 'button--lg', styles.buttonCustom2)}
            to="/path-to-your-new-link"
          >
            👨🏻‍💻 Hire node support
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout description="LUKSO Community Docs">
        <HomepageHeader />
        <main className={styles.container}>
          <section className={styles.cardContainer}>
            <Cards />
          </section>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
