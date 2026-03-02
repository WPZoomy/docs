import React from 'react';
import { Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function BlogHeader({ 
  title = "BigBlueButton Hosting",
  author = "Adeel",
  category = "BigBlueButton",
  datePosted = "January 25, 2022",
  url
}) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : (url || '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const sideShareLinks = [
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
      bgColor: '#25d366'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      bgColor: '#3b5998'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      bgColor: '#0077b5'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
      bgColor: '#1DA1F2'
    }
  ];

  const headerShareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      bgColor: '#3b5998'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      bgColor: '#0077b5'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
      bgColor: '#1DA1F2'
    }
  ];

  return (
    <>
      {/* Side Fixed Share Buttons */}
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 100
      }}>
        {sideShareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${link.name}`}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: link.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                textDecoration: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>

      {/* Blue Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)',
        color: 'white',
        padding: '60px 40px',
        borderBottom: '4px solid #003d99'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Title */}
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0 0 30px 0',
            borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
            paddingBottom: '20px'
          }}>
            {title}
          </h1>

          {/* Meta Information Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Post Author */}
            <div>
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                opacity: 0.9,
                fontWeight: '500'
              }}>
                Post Author:
              </p>
              <p style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {author}
              </p>
            </div>

            {/* Categories */}
            <div>
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                opacity: 0.9,
                fontWeight: '500'
              }}>
                Categories:
              </p>
              <p style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {category}
              </p>
            </div>

            {/* Date Posted */}
            <div>
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                opacity: 0.9,
                fontWeight: '500'
              }}>
                Date Posted:
              </p>
              <p style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {datePosted}
              </p>
            </div>

            {/* Share This */}
            <div>
              <p style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                opacity: 0.9,
                fontWeight: '500'
              }}>
                Share This:
              </p>
              <div style={{
                display: 'flex',
                gap: '10px'
              }}>
                {headerShareLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Share on ${link.name}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '6px',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = link.bgColor;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
