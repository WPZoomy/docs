import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Search } from 'lucide-react';

export default function HelpCenterHero({ showTitle = true, showSearch = true }) {
  const { siteConfig } = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('English');
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && searchQuery?.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className={`help-center-hero-block${!showTitle ? " help-center-hero-block--compact" : ""}`}>
      <div className="help-center-hero-top">
        <Link to="/" className="help-center-hero-link">Help Center</Link>
        <span className="help-center-hero-lang" aria-label="Language"><span className="help-center-hero-lang-icon" aria-hidden>🌐</span> English</span>
      </div>
      {showTitle && (
        <h1 className="help-center-hero-title">{siteConfig.title}</h1>
      )}
      {showSearch && (
        <form onSubmit={handleSearchSubmit} className="help-center-hero-search-wrap">
          <Search size={20} className="help-center-hero-search-icon" aria-hidden />
          <input
            type="search"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="help-center-hero-search-input"
            aria-label="Search for articles"
          />
        </form>
      )}
    </header>
  );
}
