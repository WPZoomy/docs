import React, { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function HelpCenterSearch({ query = '' }) {
  const [searchQuery, setSearchQuery] = useState(query);

const allArticles = [
    {
      id: 1,
      title: 'Getting Started',
      category: 'Initial Setup',
      description: 'We will walk you through the process of connecting your Zoom account with your Zoomy Wordpress plugin on your website.',
      link: '/docs/intro',
      keywords: ['getting started', 'zoom account', 'wordpress plugin', 'setup', 'zoomy', 'connect']
    },
    {
      id: 2,
      title: 'Creating Server-to-Server OAuth App',
      category: 'Initial Setup',
      description: 'Generate API credentials from your Zoom account to integrate with WordPress. Step-by-step guide to create a Zoom App for Zoomy.',
      link: '/docs/tutorial-basics/create-a-document',
      keywords: ['oauth', 'api credentials', 'server', 'zoom', 'integration', 'app marketplace', 'client id', 'client secret']
    },
    {
      id: 3,
      title: 'Setting Up the Instructor Role Add On',
      category: 'Zoomy features & settings',
      description: 'Configure the Instructor Role addon with LearnDash and WISDM for Zoomy.',
      link: '/docs/tutorial-basics/setting-up-instructor-role-addon',
      keywords: ['instructor', 'addon', 'learndash', 'wisdm', 'role', 'extension']
    },
    {
      id: 4,
      title: 'Multiple hosts on Zoom',
      category: 'Zoomy features & settings',
      description: 'Configure multiple hosts for your Zoom meetings and webinars with Zoomy.',
      link: '/docs/tutorial-extras/multiple-hosts-on-zoom',
      keywords: ['multiple hosts', 'zoom', 'hosts', 'configuration', 'add user', 'meeting host']
    },
    {
      id: 5,
      title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
      category: 'Zoomy features & settings',
      description: 'Set up recurring Zoom meetings or webinars from your WordPress dashboard.',
      link: '/docs/tutorial-basics/create-a-page',
      keywords: ['recurring meetings', 'webinars', 'addon', 'schedule', 'countdown', 'recurring']
    },
    {
      id: 6,
      title: 'Monetize Meeting ADD On',
      category: 'Zoomy features & settings',
      description: 'Sell Zoom meetings with Easy Digital Downloads. Create paid meeting downloads.',
      link: '/docs/tutorial-basics/monetize-meeting-addon',
      keywords: ['monetize', 'sell', 'meeting', 'addon', 'edd', 'easy digital downloads', 'payment']
    },
    {
      id: 7,
      title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page',
      category: 'Zoomy features & settings',
      description: 'Embed YouTube, iframes and third-party tools on the Zoom meeting shortcode page.',
      link: '/docs/tutorial-basics/embedding-third-party-tools-shortcode',
      keywords: ['embed', 'third party', 'iframe', 'shortcode', 'youtube', 'credentialless']
    },
    {
      id: 8,
      title: 'How to embed Zoom Webinar on your website',
      category: 'Zoomy features & settings',
      description: 'Steps to embed Zoom webinars on your website with Zoomy shortcode and Gutenberg.',
      link: '/docs/tutorial-basics/how-to-embed-zoom-webinar',
      keywords: ['embed webinar', 'zoom webinar', 'website', 'shortcode', 'gutenberg', 'add webinar']
    },
    {
      id: 9,
      title: 'Embed Zoom Meeting on WordPress',
      category: 'Zoomy features & settings',
      description: 'Add Zoom meetings to your WordPress posts or pages using Zoomy Gutenberg block or shortcode.',
      link: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress',
      keywords: ['embed meeting', 'zoom meeting', 'wordpress', 'gutenberg block', 'shortcode', 'elementor']
    }
  ];

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return allArticles;

    const query = searchQuery.toLowerCase();
    return allArticles.filter(article => {
      const matchTitle = article.title.toLowerCase().includes(query);
      const matchDescription = article.description.toLowerCase().includes(query);
      const matchKeywords = article.keywords.some(kw => kw.includes(query));
      const matchCategory = article.category.toLowerCase().includes(query);

      return matchTitle || matchDescription || matchKeywords || matchCategory;
    });
  }, [searchQuery]);

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
          <h1 style={{
            margin: '0 0 20px 0',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Help Center
          </h1>

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
                padding: '14px 16px 14px 48px',
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
