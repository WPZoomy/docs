import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc, useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import ContentVisibility from '@theme/ContentVisibility';
import styles from './styles.module.css';

const ALL_ARTICLES = [
  { title: 'Getting Started With WPZoomy Docs – Complete Guide', link: '/docs/intro' },
  { title: 'Creating Server-to-Server OAuth App', link: '/docs/tutorial-basics/create-a-document' },
  { title: 'Multiple hosts on Zoom', link: '/docs/tutorial-extras/multiple-hosts-on-zoom' },
  { title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy', link: '/docs/tutorial-basics/setting-up-the-recurring-meetings-webinars-addon-for-zoomy' },
  { title: 'How to embed Zoom Webinar on your website', link: '/docs/tutorial-basics/how-to-embed-zoom-webinar' },
  { title: 'Setting Up the Instructor Role Add On', link: '/docs/tutorial-basics/setting-up-instructor-role-addon' },
  { title: 'Monetize Meeting ADD On', link: '/docs/tutorial-basics/monetize-meeting-addon' },
  { title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', link: '/docs/tutorial-basics/embedding-third-party-tools-shortcode' },
  { title: 'Embed Zoom Meeting on WordPress', link: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress' },
];

// Official site: Creating Server-to-Server OAuth App page has these 4 related (no Multiple hosts on Zoom, no self)
const RELATED_BY_DOC = {
  'tutorial-basics/create-a-document': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
    'How to embed Zoom Webinar on your website',
    'Embed Zoom Meeting on WordPress',
  ],
  'tutorial-basics/setting-up-instructor-role-addon': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Creating Server-to-Server OAuth App',
    'Multiple hosts on Zoom',
    'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
    'Monetize Meeting ADD On',
  ],
  'tutorial-extras/multiple-hosts-on-zoom': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Setting Up the Instructor Role Add On',
    'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
    'How to embed Zoom Webinar on your website',
    'Embed Zoom Meeting on WordPress',
  ],
  'tutorial-basics/monetize-meeting-addon': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Creating Server-to-Server OAuth App',
    'Setting Up the Instructor Role Add On',
    'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
    'How to embed Zoom Webinar on your website',
  ],
  'tutorial-basics/embedding-third-party-tools-shortcode': [
    'Embed Zoom Meeting on WordPress',
  ],
  'tutorial-basics/how-to-embed-zoom-webinar': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Creating Server-to-Server OAuth App',
    'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page',
    'Embed Zoom Meeting on WordPress',
  ],
  'tutorial-basics/embed-zoom-meeting-on-wordpress': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Creating Server-to-Server OAuth App',
    'Multiple hosts on Zoom',
    'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page',
    'How to embed Zoom Webinar on your website',
  ],

  'tutorial-basics/setting-up-the-recurring-meetings-webinars-addon-for-zoomy': [
    'Getting Started With WPZoomy Docs – Complete Guide',
    'Creating Server-to-Server OAuth App',
    'Setting Up the Instructor Role Add On',
    'Monetize Meeting ADD On',
    'Embed Zoom Meeting on WordPress',
  ],
};

function getRelatedArticles(currentDocId, currentTitle) {
  const byDoc = RELATED_BY_DOC[currentDocId];
  const titles = byDoc || ALL_ARTICLES.map((a) => a.title);
  const list = ALL_ARTICLES.filter(
    (a) => titles.includes(a.title) && a.title !== currentTitle
  );
  return list;
}

function useDocTOC() {
  const { frontMatter, toc, metadata } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  // Disable default mobile TOC; use our own desktop TOC based on toc data
  const mobile = undefined;
  let desktop = canRender ? toc : undefined;

  // For "Creating Server-to-Server OAuth App" remove specific headings from TOC
  if (desktop && metadata?.id === 'tutorial-basics/create-a-document') {
    const blockedValues = new Set(['add scopes', 'event types']);
    desktop = toc.filter((item) => {
      const v = (item?.value || '').toString().trim().toLowerCase();
      return !blockedValues.has(v);
    });
  }

  return { hidden, mobile, desktop };
}

function getCollectionFromSidebar(sidebar, docId) {
  if (!sidebar?.items) return 'Initial Setup';
  for (const item of sidebar.items) {
    if (item.type === 'category' && item.items?.length) {
      const found = item.items.some((d) => d.id === docId || d.docId === docId);
      if (found) return item.label;
    }
  }
  return 'Initial Setup';
}

export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const { metadata, frontMatter } = useDoc();
  const sidebar = useDocsSidebar();
  const [feedback, setFeedback] = useState(null);
  const collectionName = frontMatter.collection || getCollectionFromSidebar(sidebar, metadata.id);
  const author = 'Team Wpzoomy';
  const updated = frontMatter.updated || 'over 2 years ago';
  const collectionSlug = (collectionName === "Zoomy Features & Settings") ? "features" : "initial-setup";
  const title = metadata.title || frontMatter.title || 'Documentation';
  const relatedArticles = getRelatedArticles(metadata.id || '', title);

  // Open clicked article markdown images in a new tab.
  useEffect(() => {
    const selector =
      '.help-center-article .theme-doc-markdown img, .help-center-article .markdown img';

    const onClick = (e) => {
      const target = e?.target;
      if (!target?.closest) return;

      const img = target.closest(selector);
      if (!img) return;

      // Prevent any parent link/navigation so only the image opens.
      e.preventDefault?.();
      e.stopPropagation?.();

      const url = img.currentSrc || img.src;
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    const root = document.querySelector('.help-center-article');
    if (!root) return;

    root.addEventListener('click', onClick, true);
    return () => root.removeEventListener('click', onClick, true);
  }, [metadata?.id, children]);


  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article className="help-center-article">
            <nav className="help-center-doc-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">All Collections</Link>
              <span className="help-center-doc-breadcrumb-sep">&gt;</span>
              <Link to={`/collections/${collectionSlug}`}>{collectionName}</Link>
              <span className="help-center-doc-breadcrumb-sep">&gt;</span>
              <span className="help-center-doc-breadcrumb-current">{title}</span>
            </nav>
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <div className="help-center-doc-feedback">
              <h3 className="help-center-doc-feedback-title">Did this answer your question?</h3>
              <div className="help-center-doc-feedback-buttons">
                <button type="button" aria-label="Disappointed" className={feedback === 'no' ? 'help-center-doc-feedback-active' : ''} onClick={() => setFeedback('no')}>😞</button>
                <button type="button" aria-label="Neutral" className={feedback === 'neutral' ? 'help-center-doc-feedback-active' : ''} onClick={() => setFeedback('neutral')}>😐</button>
                <button type="button" aria-label="Smiley" className={feedback === 'yes' ? 'help-center-doc-feedback-active' : ''} onClick={() => setFeedback('yes')}>😃</button>
              </div>
              {feedback && <p className="help-center-doc-feedback-thanks">Thanks for your feedback!</p>}
            </div>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && (
        <div className="col col--3">
          <div className="thin-scrollbar theme-doc-toc-desktop">
            <ul className="table-of-contents table-of-contents__left-border">
              {docTOC.desktop.map((item, idx) => (
                <li key={item.id || idx} className="table-of-contents__item">
                  <a href={`#${item.id}`} className="table-of-contents__link">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
