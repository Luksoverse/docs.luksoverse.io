import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.scss';

function Index() {
  return (
    <Layout description="The Luksoverse - Community documentation">
      <div className={styles.container}>
        <div
          style={{
            padding: '4rem 1rem',
          }}
        >
          <h1>The Luksoverse - docs</h1>
        </div>
        <div className={styles.ctaContainer}>
        </div>
      </div>
    </Layout>
  );
}

export default Index;