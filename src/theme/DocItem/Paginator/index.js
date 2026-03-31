import React, {useMemo} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import DocPaginator from '@theme/DocPaginator';

const FEATURES_COLLECTION_ORDER = [
  {
    title: 'Setting Up the Instructor Role Add On',
    permalink: '/docs/tutorial-basics/setting-up-instructor-role-addon',
  },
  {
    title: 'Multiple hosts on Zoom',
    permalink: '/docs/tutorial-extras/multiple-hosts-on-zoom',
  },
  {
    title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy',
    permalink:
      '/docs/tutorial-basics/setting-up-the-recurring-meetings-webinars-addon-for-zoomy',
  },
  {
    title: 'Monetize Meeting ADD On',
    permalink: '/docs/tutorial-basics/monetize-meeting-addon',
  },
  {
    title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page',
    permalink:
      '/docs/tutorial-basics/embedding-third-party-tools-shortcode',
  },
  {
    title: 'How to embed Zoom Webinar on your website',
    permalink: '/docs/tutorial-basics/how-to-embed-zoom-webinar',
  },
  {
    title: 'Embed Zoom Meeting on WordPress',
    permalink: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress',
  },
];

function withCollectionQuery(permalink, collectionKey) {
  // Keep the query param so the paginator can keep using the collection order
  // if the user clicks Previous/Next.
  return `${permalink}?collection=${encodeURIComponent(collectionKey)}`;
}

export default function DocItemPaginator() {
  const {metadata} = useDoc();
  const location = useLocation();

  const collectionKey = useMemo(() => {
    const searchParams = new URLSearchParams(location?.search || '');
    return searchParams.get('collection');
  }, [location?.search]);

  const computed = useMemo(() => {
    const currentPermalink = metadata?.permalink;
    if (collectionKey === 'features' && currentPermalink) {
      const idx = FEATURES_COLLECTION_ORDER.findIndex(
        (d) => d.permalink === currentPermalink,
      );
      if (idx !== -1) {
        const prev = idx > 0 ? FEATURES_COLLECTION_ORDER[idx - 1] : undefined;
        const next =
          idx < FEATURES_COLLECTION_ORDER.length - 1
            ? FEATURES_COLLECTION_ORDER[idx + 1]
            : undefined;
        return {
          previous: prev
            ? {
                title: prev.title,
                permalink: withCollectionQuery(prev.permalink, 'features'),
              }
            : undefined,
          next: next
            ? {
                title: next.title,
                permalink: withCollectionQuery(next.permalink, 'features'),
              }
            : undefined,
        };
      }
    }

    // Fallback to default doc sidebar previous/next
    return {previous: metadata?.previous, next: metadata?.next};
  }, [collectionKey, metadata?.permalink, metadata?.previous, metadata?.next]);

  return (
    <DocPaginator
      className="docusaurus-mt-lg"
      previous={computed.previous}
      next={computed.next}
    />
  );
}
