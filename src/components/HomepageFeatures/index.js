import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Docs & Guides",
    src: require("@site/static/img/documents-logo.png").default,
    description: (
      <>
       Text how and why to use the docs website
      </>
    ),
  },
  {
    title: "Contribute",
    src: require("@site/static/img/GitHub-logo.png").default,
    description: (
      <>
       Text how to contribute to our GitHub
      </>
    ),
  },
  {
    title: "By Luksoverse",
    src: require("@site/static/img/black-logo.png").default,
    description: (
      <>
       New images for all blocks
      </>
    ),
  },
];

const FeaturePng = ({ src, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureSvg}>
          <img src={src} height="100%" />
        </div>
      </div>
      <div className="text--center padding-horiz-md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <>
              <FeaturePng key={idx} {...props} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
