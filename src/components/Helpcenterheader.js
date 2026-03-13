import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';

export default function HelpCenterHeader({ onSearch, onLanguageChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('English');
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = ['English', 'Urdu', 'Hindi'];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowLanguages(false);
    onLanguageChange?.(lang);
  };

  return (
    <header style={{
      background: 'linear-gradient(135deg, #4DB8E8 0%, #2BA8D8 100%)',
      padding: '30px 40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Top Row: Title + Language */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Help Center
          </h1>

          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
            >
              <Globe size={16} />
              {language}
              <span>▼</span>
            </button>

            {/* Language Dropdown */}
            {showLanguages && (
              <div style={{
                position: 'absolute',
                top: '40px',
                right: 0,
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                minWidth: '150px',
                zIndex: 1000,
                overflow: 'hidden'
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: 'none',
                      background: language === lang ? '#f0f0f0' : 'white',
                      color: '#333',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '14px',
                      transition: 'background 0.2s ease',
                      borderBottom: lang !== languages[languages.length - 1] ? '1px solid #eee' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f0f0f0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = language === lang ? '#f0f0f0' : 'white';
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

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
            onChange={handleSearch}
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
  );
}
