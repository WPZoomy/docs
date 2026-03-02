import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OurRecommendation() {
  const recommendations = [
    {
      id: 1,
      title: 'LearnDash',
      image: '/img/learndash.png',
      description: 'LearnDash LMS is the most trusted and feature-rich WordPress Plugin with a vibrant community',
      link: 'https://www.learndash.com/learndash-lms/?irpid=5472249&utm_medium=affiliate&irgwc=1&afsrc=1',
      highlight: 'LearnDash',
      keywords: ['community']
    },
    {
      id: 2,
      title: 'BuddyBoss',
      image: '/img/buddyboss.png',
      description: 'BuddyBoss is an elegant design theme with powerful features for course and community websites',
      link: 'https://www.buddyboss.com/',
      highlight: 'BuddyBoss',
      keywords: []
    },
    {
      id: 3,
      title: 'Uncanny Owl',
      image: '/img/uncanny.png',
      description: 'Uncanny Owl provides the very best LearnDash add-ons (10% off on our link)',
      link: 'https://www.uncannyowl.com/',
      highlight: 'Uncanny Owl',
      keywords: []
    },
    {
      id: 4,
      title: 'WP Fusion',
      image: '/img/wpfusion.png',
      description: 'WP Fusion seamlessly integrates website with CRM, empowering advanced access control through tagging',
      link: 'https://wpfusion.com/',
      highlight: 'WP Fusion',
      keywords: []
    }
  ];

  return (
    <section style={{
      padding: '80px 40px',
      backgroundColor: '#f8f9fa',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Title */}
        <h2 style={{
          fontSize: '42px',
          fontWeight: '800',
          marginBottom: '60px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Our Recommendation
        </h2>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {recommendations.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
              >
                {/* Image Container */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Content Container */}
                <div style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Description with highlight */}
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#333',
                    margin: '0 0 16px 0',
                    flex: 1
                  }}>
                    <span style={{
                      color: '#0066FF',
                      fontWeight: '600'
                    }}>
                      {item.highlight}
                    </span>
                    {' '}{item.description.replace(item.highlight, '')}
                  </p>

                  {/* Learn More Button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#0066FF',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: 'auto'
                  }}>
                    Learn more
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
