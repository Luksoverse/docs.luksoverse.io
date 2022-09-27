import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Cards from "../components/Cards";
import WarningModal from "../components/WarningModal";

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
  const [hasReadWarning, setHasReadWarning] = useState(false);

  useEffect(() => {
    const checkRead = localStorage.getItem("siteWarning");
    setHasReadWarning(JSON.parse(checkRead));
  }, [hasReadWarning]);

  const hideWarning = () => {
    localStorage.setItem("siteWarning", "true");
    setHasReadWarning(true);
  };

  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      {!hasReadWarning && siteConfig.customFields.warningText ? (
        <WarningModal
          warningText={siteConfig.customFields?.warningText}
          hideWarning={hideWarning}
        />
      ) : (
        <Layout
          title={`${siteConfig.title}`}
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
      )}
    </>
  );
}
