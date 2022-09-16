import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Card from "@site/src/components/Card";

import styles from "./index.module.css";
import Cards from "../components/Cards";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/the-guide/start-here"
          >
            Set up your L16 node!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log({ siteConfig });
  return (
    <Layout
      title={`${siteConfig}`}
      description="The LUKSO Community place for docs."
    >
      <HomepageHeader />
      <main className={styles.container}>
        <section className={styles.cardContainer}>
          <Cards />
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
