import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HelpCenterHero from '@site/src/components/HelpCenterHero';
import styles from './collection.module.css';

const collection = {
  title: 'Zoomy Features & Settings',
  description: 'Learn how to use the various features of Zoomy',
  authorCount: 2,
  articleCount: 7,
  articles: [
    { title: 'Setting Up the Instructor Role Add On', description: '', link: '/docs/tutorial-basics/setting-up-instructor-role-addon' },
    { title: 'Multiple hosts on Zoom', description: '', link: '/docs/tutorial-extras/multiple-hosts-on-zoom' },
    { title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy', description: '', link: '/docs/tutorial-basics/setting-up-the-recurring-meetings-webinars-addon-for-zoomy' },
    { title: 'Monetize Meeting ADD On', description: '', link: '/docs/tutorial-basics/monetize-meeting-addon' },
    { title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', description: 'Embedding Third-Party Tools on a Zoom Meeting Page', link: '/docs/tutorial-basics/embedding-third-party-tools-shortcode' },
    { title: 'How to embed Zoom Webinar on your website', description: 'Steps to embed Zoom webinars on your website.', link: '/docs/tutorial-basics/how-to-embed-zoom-webinar' },
    { title: 'Embed Zoom Meeting on WordPress', description: 'How to add a zoom meeting to your Wordpress posts or pages using Zoomy.', link: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress' },
  ],
};

export default function CollectionFeatures() {
  return (
    <Layout title={`${collection.title} | Zoomy Help Centre`} description={collection.description} noFooter wrapperClassName="help-center-collection">
      <div className={styles.collectionLayout}>
        <HelpCenterHero showTitle={true} showSearch={true} returnTo="/collections/features" />
        <main className={styles.collectionMain}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">All Collections</Link>
            <span className={styles.breadcrumbSep}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{collection.title}</span>
          </nav>
          <div className={styles.collectionHeader}>
            <img src="/img/zoomy-features.svg" className={styles.collectionIcon} alt="" aria-hidden />
            <h1 className={styles.collectionTitle}>{collection.title}</h1>
            <p className={styles.collectionDescription}>{collection.description}</p>
            <div className={styles.collectionMeta}>
              <span className={styles.collectionAvatar}><img src="/img/zoomy-avatar.png" alt="Team Wpzoomy" /></span>
              <span>Team Wpzoomy · {collection.authorCount} authors · {collection.articleCount} articles</span>
            </div>
          </div>
          <ul className={styles.articleList}>
            {collection.articles.map((art, i) => (
              <li key={i}>
                <Link to={`${art.link}?collection=features`} className={styles.articleCard}>
                  <div className={styles.articleCardBody}>
                    <span className={styles.articleCardTitle}>{art.title}</span>
                    {art.description && <span className={styles.articleCardDesc}>{art.description}</span>}
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
