import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Search } from 'lucide-react';
import styles from './index.module.css';

function CollectionCard({ title, description, authorCount, articleCount, link }) {
  return (
    <Link to={link} className={styles.collectionCard}>
      <h3 className={styles.collectionCardTitle}>{title}</h3>
      <p className={styles.collectionCardDescription}>{description}</p>
      <div className={styles.collectionCardMeta}>
        <span className={styles.collectionCardAvatar}>S</span>
        <span>{authorCount} author{authorCount !== 1 ? 's' : ''} · {articleCount} articles</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      }
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchQuery]);
  const collections = siteConfig.customFields?.collections || [
    { title: 'Initial Setup', description: 'Connecting your Zoom account with Zoomy', authorCount: 1, articleCount: 2, link: '/docs/intro' },
    { title: 'Zoomy features&settings', description: 'Learn how to use the various features of Zoomy', authorCount: 2, articleCount: 7, link: '/docs/tutorial-basics/create-a-document' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && searchQuery?.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline} noFooter wrapperClassName="help-center-home">
      <div className={styles.helpCenterLayout}>
        <header className={styles.heroBlock}>
          <div className={styles.heroTop}>
            <Link to="/" className={styles.heroHelpCenterLink}>Help Center</Link>
            <span className={styles.heroLang} aria-label="Language"><span className={styles.heroLangIcon} aria-hidden>🌐</span> English</span>
          </div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <form onSubmit={handleSearchSubmit} className={styles.heroSearchWrap}>
            <Search size={20} className={styles.heroSearchIcon} aria-hidden />
            <input
              type="search"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.heroSearchInput}
              aria-label="Search for articles"
            />
          </form>
        </header>
        <main className={styles.helpCenterMain}>
          <div className={styles.collectionGrid}>
            {collections.map((col, i) => (
              <CollectionCard key={i} {...col} />
            ))}
          </div>
        </main>
        <footer className={styles.helpCenterFooter}>
          <Link to="/">Help Center</Link>
          <span className={styles.footerSeparator}> · </span>
          <a href="https://www.intercom.com/intercom-link?company=Zoomy&solution=customer-support&utm_campaign=intercom-link&utm_content=We+run+on+Intercom&utm_medium=help-center&utm_referrer=https%3A%2F%2Fintercom.help%2Fwpzoomy%2Fen&utm_source=desktop-web" target="_blank" rel="noopener noreferrer">We run on Intercom</a>
        </footer>
      </div>
    </Layout>
  );
}
