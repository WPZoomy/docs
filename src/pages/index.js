import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Search } from 'lucide-react';
import styles from './index.module.css';

function CollectionCard({ title, description, authorCount, articleCount, link, iconSrc }) {
  return (
    <Link to={link} className={styles.collectionCard}>
      {iconSrc && (
        <img
          src={iconSrc}
          className={styles.collectionCardIcon}
          alt=""
          aria-hidden
        />
      )}
      <div className={styles.collectionCardBody}>
        <h3 className={styles.collectionCardTitle}>{title}</h3>
        <p className={styles.collectionCardDescription}>{description}</p>
        <div className={styles.collectionCardMeta}>
          <span className={styles.collectionCardAvatar}>
            <img src="/img/zoomy-avatar.png" alt="Team Wpzoomy" />
          </span>
          <span>Team Wpzoomy · {articleCount} articles</span>
        </div>
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
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}&returnTo=${encodeURIComponent('/')}`;
      }
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchQuery]);
  const collections = siteConfig.customFields?.collections || [
    { title: 'Initial Setup', description: 'Connecting your Zoom account with Zoomy', authorCount: 1, articleCount: 2, link: '/docs/intro' },
    { title: 'Zoomy features&settings', description: 'Learn how to use the various features of Zoomy', authorCount: 2, articleCount: 7, link: '/docs/tutorial-basics/create-a-document' },
  ];

  const collectionsWithIcons = collections.map((c) => ({
    ...c,
    iconSrc: (() => {
      const t = (c.title || '').toLowerCase();
      if (t.includes('initial setup')) return '/img/initial-setup.svg';
      if (t.includes('zoomy features') || t.includes('features')) return '/img/zoomy-features.svg';
      return null;
    })(),
  }));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && searchQuery?.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}&returnTo=${encodeURIComponent('/')}`;
    }
  };

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline} noFooter wrapperClassName="help-center-home">
      <div className={styles.helpCenterLayout}>
        <header className={styles.heroBlock}>
          <div className={styles.heroTop}>
            <div className={styles.heroTopRow}>
              
            </div>
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
            {searchQuery.trim() && (
              <button
                type="button"
                className={styles.heroSearchClear}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                title="Clear"
              >
                ×
              </button>
            )}
          </form>
        </header>
        <main className={styles.helpCenterMain}>
          <div className={styles.collectionGrid}>
            {collectionsWithIcons.map((col, i) => (
              <CollectionCard key={i} {...col} />
            ))}
          </div>
        </main>
        <footer className={styles.helpCenterFooter}>
          
          <a href="https://wpzoomy.com/" target="_blank" rel="noopener noreferrer">Back to official Zoomy site</a>
        </footer>
      </div>
    </Layout>
  );
}
