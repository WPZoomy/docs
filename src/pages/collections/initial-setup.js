import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HelpCenterHero from '@site/src/components/HelpCenterHero';
import styles from './collection.module.css';

const collection = {
  title: 'Initial Setup',
  description: 'Connecting your Zoom account with Zoomy',
  authorCount: 1,
  articleCount: 2,
  articles: [
    {
      title: 'Getting Started With WPZoomy Docs – Complete Guide',
      description: 'We will walk you through the process of connecting your Zoom account with your Zoomy Wordpress plugin on your website.',
      link: '/docs/intro',
    },
    {
      title: 'Creating Server-to-Server OAuth App',
      description: 'This is a step-by-step guide to help you setup create a Zoom App to integrate with the Zoomy plugin.',
      link: '/docs/tutorial-basics/creating-server-to-server-oauth-app',
    },
  ],
};

export default function CollectionInitialSetup() {
  return (
    <Layout title={`${collection.title} | Zoomy Help Centre`} description={collection.description} noFooter wrapperClassName="help-center-collection">
      <div className={styles.collectionLayout}>
        <HelpCenterHero showTitle={true} showSearch={true} returnTo="/collections/initial-setup" />
        <main className={styles.collectionMain}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">All Collections</Link>
            <span className={styles.breadcrumbSep}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{collection.title}</span>
          </nav>
          <div className={styles.collectionHeader}>
            <img src="/img/initial-setup.svg" className={styles.collectionIcon} alt="" aria-hidden />
            <h1 className={styles.collectionTitle}>{collection.title}</h1>
            <p className={styles.collectionDescription}>{collection.description}</p>
            <div className={styles.collectionMeta}>
              <span className={styles.collectionAvatar}><img src="/img/zoomy-avatar.png" alt="Team Wpzoomy" /></span>
              <span>Team Wpzoomy · {collection.articleCount} articles</span>
            </div>
          </div>
          <ul className={styles.articleList}>
            {collection.articles.map((art, i) => (
              <li key={i}>
                <Link to={art.link} className={styles.articleCard}>
                  <div className={styles.articleCardBody}>
                    <span className={styles.articleCardTitle}>{art.title}</span>
                    <span className={styles.articleCardDesc}>{art.description}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <footer className={styles.collectionFooter}>
                    <a href="https://wpzoomy.com/" target="_blank" rel="noopener noreferrer">Back to official Zoomy site</a>
        </footer>
      </div>
    </Layout>
  );
}
