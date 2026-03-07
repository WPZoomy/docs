import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HelpCenterHero from '@site/src/components/HelpCenterHero';
import { BookOpen } from 'lucide-react';
import styles from './collection.module.css';

const collection = {
  title: 'Initial Setup',
  description: 'Connecting your Zoom account with Zoomy',
  authorCount: 1,
  articleCount: 2,
  articles: [
    {
      title: 'Getting Started',
      description: 'We will walk you through the process of connecting your Zoom account with your Zoomy Wordpress plugin on your website.',
      link: '/docs/intro',
    },
    {
      title: 'Creating Server-to-Server OAuth App',
      description: 'This is a step-by-step guide to help you setup create a Zoom App to integrate with the Zoomy plugin.',
      link: '/docs/tutorial-basics/create-a-document',
    },
  ],
};

export default function CollectionInitialSetup() {
  return (
    <Layout title={`${collection.title} | Help Center`} description={collection.description} noFooter wrapperClassName="help-center-collection">
      <div className={styles.collectionLayout}>
        <HelpCenterHero showTitle={false} showSearch={true} />
        <main className={styles.collectionMain}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">All Collections</Link>
            <span className={styles.breadcrumbSep}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{collection.title}</span>
          </nav>
          <div className={styles.collectionHeader}>
            <BookOpen size={32} className={styles.collectionIcon} aria-hidden />
            <h1 className={styles.collectionTitle}>{collection.title}</h1>
            <p className={styles.collectionDescription}>{collection.description}</p>
            <div className={styles.collectionMeta}>
              <span className={styles.collectionAvatar}>S</span>
              <span>By Stephen · {collection.authorCount} author · {collection.articleCount} articles</span>
            </div>
          </div>
          <ul className={styles.articleList}>
            {collection.articles.map((art, i) => (
              <li key={i}>
                <Link to={art.link} className={styles.articleCard}>
                  <span className={styles.articleCardTitle}>{art.title}</span>
                  <span className={styles.articleCardDesc}>{art.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <footer className={styles.collectionFooter}>
          <Link to="/">Help Center</Link>
          <span className={styles.footerSep}> · </span>
          <a href="https://wpzoomy.com/" target="_blank" rel="noopener noreferrer">Back to official Zoomy site</a>
        </footer>
      </div>
    </Layout>
  );
}
