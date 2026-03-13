import React, { useState, useMemo, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Search, ArrowRight } from 'lucide-react';
import { helpCenterArticles, filterArticles } from '@site/src/data/helpCenterArticles';

export default function HelpCenterSearch({ query = '' }) {
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

const filteredArticles = useMemo(() => filterArticles(helpCenterArticles, searchQuery), [searchQuery]);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #4DB8E8 0%, #2BA8D8 100%)',
        padding: '30px 40px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <Link
            to="/"
            style={{
              margin: '0 0 20px 0',
              fontSize: '24px',
              fontWeight: '600',
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Help Center
          </Link>

          {/* Search Bar */}
          <div style={{
            position: 'relative'
          }}>
            <Search 
              size={20} 
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.7)'
              }}
            />
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: searchQuery.trim() ? '14px 44px 14px 48px' : '14px 16px 14px 48px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                background: 'rgba(255,255,255,0.95)',
                color: '#333',
                transition: 'background 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.background = 'white';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.95)';
              }}
            />
            {searchQuery.trim() && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                title="Clear"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '20px',
                  lineHeight: 1,
                  color: '#666',
                  padding: '4px'
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Results */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px'
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '10px',
          color: '#1a1a1a'
        }}>
          {searchQuery.trim() ? 'Search Results' : 'All Articles'}
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '30px'
        }}>
          {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
        </p>

        {filteredArticles.length > 0 ? (
          <div style={{
            display: 'grid',
            gap: '16px'
          }}>
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0066FF';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,102,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '12px',
                      color: '#0066FF',
                      fontWeight: '600',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {article.category}
                    </div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: '#1a1a1a'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: 0,
                      lineHeight: '1.6'
                    }}>
                      {article.description}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#f0f0f0',
                    color: '#0066FF',
                    flexShrink: 0
                  }}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'white',
            padding: '60px 20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: 0
            }}>
              No articles found matching "{searchQuery}"
            </p>
            <p style={{
              fontSize: '14px',
              color: '#999',
              margin: '10px 0 0 0'
            }}>
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
