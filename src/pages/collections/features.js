import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HelpCenterHero from '@site/src/components/HelpCenterHero';
import { BookOpen } from 'lucide-react';
import styles from './collection.module.css';

const collection = {
  title: 'Zoomy features & settings',
  description: 'Learn how to use the various features of Zoomy',
  authorCount: 2,
  articleCount: 7,
  articles: [
    { title: 'Setting Up the Instructor Role Add On', description: '', link: '/docs/tutorial-basics/setting-up-instructor-role-addon' },
    { title: 'Multiple hosts on Zoom', description: '', link: '/docs/tutorial-extras/multiple-hosts-on-zoom' },
    { title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy', description: '', link: '/docs/tutorial-basics/create-a-page' },
    { title: 'Monetize Meeting ADD On', description: '', link: '/docs/tutorial-basics/monetize-meeting-addon' },
    { title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', description: 'Embedding Third-Party Tools on a Zoom Meeting Page', link: '/docs/tutorial-basics/embedding-third-party-tools-shortcode' },
    { title: 'How to embed Zoom Webinar on your website', description: 'Steps to embed Zoom webinars on your website.', link: '/docs/tutorial-basics/how-to-embed-zoom-webinar' },
    { title: 'Embed Zoom Meeting on WordPress', description: 'How to add a zoom meeting to your Wordpress posts or pages using Zoomy.', link: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress' },
  ],
};

export default function CollectionFeatures() {
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
              <span>By Stephen and 1 other · {collection.authorCount} authors · {collection.articleCount} articles</span>
            </div>
          </div>
          <ul className={styles.articleList}>
            {collection.articles.map((art, i) => (
              <li key={i}>
                <Link to={art.link} className={styles.articleCard}>
                  <span className={styles.articleCardTitle}>{art.title}</span>
                  {art.description && <span className={styles.articleCardDesc}>{art.description}</span>}
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
