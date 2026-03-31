import React from 'react';
import { ThumbsDown, ThumbsUp, Share2 } from 'lucide-react';

export default function HelpCenterArticle({ 
  title, 
  subtitle,
  author, 
  updatedDate,
  breadcrumbs,
  content,
  tableOfContents,
  relatedArticles
}) {
  const [feedback, setFeedback] = React.useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Breadcrumb */}
      <div style={{
        padding: '20px 40px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        fontSize: '14px',
        color: '#666'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {breadcrumbs?.map((crumb, idx) => (
            <span key={idx}>
              {idx > 0 && <span style={{ margin: '0 8px' }}>›</span>}
              <span style={{ color: idx === breadcrumbs.length - 1 ? '#333' : '#0066FF', cursor: 'pointer' }}>
                {crumb}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '40px'
      }}>
        {/* Article */}
        <article style={{ background: 'white', padding: '30px', borderRadius: '8px' }}>
          {/* Header */}
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
              lineHeight: '1.3',
              color: '#1a1a1a'
            }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{
                fontSize: '15px',
                color: '#666',
                margin: '8px 0 0 0'
              }}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Author Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '1px solid #eee'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0066FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              {author?.charAt(0) || 'S'}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                Written By {author || 'Team WPZoomy'}
              </div>
              <div style={{ fontSize: '13px', color: '#999' }}>
                Updated {updatedDate || 'recently'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#444'
          }}>
            {content}
          </div>

          {/* Feedback Section */}
          <div style={{
            marginTop: '60px',
            padding: '30px',
            background: '#f5f5f5',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#333'
            }}>
              Did this answer your question?
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px'
            }}>
              <button
                onClick={() => setFeedback('no')}
                style={{
                  background: feedback === 'no' ? '#FFE0B2' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '32px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                😞
              </button>
              <button
                onClick={() => setFeedback('neutral')}
                style={{
                  background: feedback === 'neutral' ? '#FFE0B2' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '32px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                😐
              </button>
              <button
                onClick={() => setFeedback('yes')}
                style={{
                  background: feedback === 'yes' ? '#FFE0B2' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '32px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                😊
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                color: '#1a1a1a'
              }}>
                Related Articles
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedArticles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #eee',
                      textDecoration: 'none',
                      color: '#0066FF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0052CC'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0066FF'}
                  >
                    <span>{article.title}</span>
                    <span>›</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside>
          {/* Table of Contents */}
          {tableOfContents && tableOfContents.length > 0 && (
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              position: 'sticky',
              top: '20px'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#1a1a1a'
              }}>
                In this article
              </h3>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    style={{
                      fontSize: '13px',
                      color: '#0066FF',
                      textDecoration: 'none',
                      paddingLeft: `${(item.level - 1) * 12}px`,
                      borderLeft: '2px solid transparent',
                      paddingBottom: '4px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#0052CC';
                      e.currentTarget.style.borderLeftColor = '#0066FF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#0066FF';
                      e.currentTarget.style.borderLeftColor = 'transparent';
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
