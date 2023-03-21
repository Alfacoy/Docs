import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';



export default function Home() {
  return (
    <Layout
      title={`Documentación `}
      description="Una web de auto documentación.">
      
      <main className={styles.heroBanner}>
        <header className={styles.heroContent}>
          <h1>Mi documentación</h1>
          <h3>Bajo construcción 🏗️</h3>
        </header>
      </main>
    </Layout>
  );
}
