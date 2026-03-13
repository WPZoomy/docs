import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Search } from 'lucide-react';
import { helpCenterArticles, filterArticles } from '@site/src/data/helpCenterArticles';

export default function HelpCenterHero({ showTitle = true, showSearch = true, searchOnCurrentPage = false }) {
  const { siteConfig } = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef(null);
  const wrapRef = useRef(null);

  const filtered = filterArticles(helpCenterArticles, searchQuery);
  const hasQuery = searchQuery.trim().length > 0;

  useEffect(() => {
    if (!searchOnCurrentPage) {
      if (!hasQuery) return;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
        }
      }, 400);
      return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    }
  }, [searchQuery, searchOnCurrentPage, hasQuery]);

  useEffect(() => {
    if (!searchOnCurrentPage) return;
    setShowDropdown(hasQuery);
  }, [searchQuery, searchOnCurrentPage, hasQuery]);

  useEffect(() => {
    if (!searchOnCurrentPage || !showDropdown) return;
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShowDropdown(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [searchOnCurrentPage, showDropdown]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchOnCurrentPage) return;
    const input = e.currentTarget.querySelector('input[type="search"]');
    const q = (input && input.value ? input.value : searchQuery).trim();
    if (typeof window !== 'undefined' && q) {
      window.location.href = `/search?q=${encodeURIComponent(q)}`;
    }
  };

  return (
    <header className={`help-center-hero-block${!showTitle ? " help-center-hero-block--compact" : ""}`}>
      <div className="help-center-hero-top">
        <div className="help-center-hero-top-row">
          <Link to="/" className="help-center-hero-link">Help Center</Link>
        </div>
      </div>
      {showTitle && (
        <h1 className="help-center-hero-title">{siteConfig.title}</h1>
      )}
      {showSearch && (
        <div ref={wrapRef} style={{ position: 'relative', maxWidth: '600px' }}>
          <form onSubmit={handleSearchSubmit} className="help-center-hero-search-wrap">
            <Search size={20} className="help-center-hero-search-icon" aria-hidden />
            <input
              type="search"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchOnCurrentPage && hasQuery && setShowDropdown(true)}
              className="help-center-hero-search-input"
              aria-label="Search for articles"
              aria-expanded={searchOnCurrentPage && showDropdown}
              aria-autocomplete="list"
            />
            {searchQuery.trim() && (
              <button
                type="button"
                className="help-center-hero-search-clear"
                onClick={() => { setSearchQuery(''); setShowDropdown(false); }}
                aria-label="Clear search"
                title="Clear"
              >
                ×
              </button>
            )}
          </form>
          {searchOnCurrentPage && showDropdown && (
            <ul className="help-center-hero-search-dropdown" role="listbox">
              {filtered.length === 0 ? (
                <li className="help-center-hero-search-dropdown-item help-center-hero-search-dropdown-empty">No articles found</li>
              ) : (
                filtered.slice(0, 8).map((article) => (
                  <li key={article.id} role="option" className="help-center-hero-search-dropdown-item">
                    <Link to={article.link} className="help-center-hero-search-dropdown-link" onClick={() => setShowDropdown(false)}>
                      {article.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </header>
  );
}
