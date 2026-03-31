/**
 * Shared article list for Help Center search (search page + hero dropdown).
 */
export const helpCenterArticles = [
  { id: 1, title: 'Getting Started With WPZoomy Docs – Complete Guide', category: 'Initial Setup', description: 'We will walk you through the process of connecting your Zoom account with your Zoomy Wordpress plugin on your website.', link: '/docs/intro', keywords: ['getting started', 'zoom account', 'wordpress plugin', 'setup', 'zoomy', 'connect'] },
  { id: 2, title: 'Creating Server-to-Server OAuth App', category: 'Initial Setup', description: 'Generate API credentials from your Zoom account to integrate with WordPress. Step-by-step guide to create a Zoom App for Zoomy.', link: '/docs/tutorial-basics/create-a-document', keywords: ['oauth', 'api credentials', 'server', 'zoom', 'integration', 'app marketplace', 'client id', 'client secret'] },
  { id: 3, title: 'Setting Up the Instructor Role Add On', category: 'Zoomy Features & Settings', description: 'Configure the Instructor Role addon with LearnDash and WISDM for Zoomy.', link: '/docs/tutorial-basics/setting-up-instructor-role-addon', keywords: ['instructor', 'addon', 'learndash', 'wisdm', 'role', 'extension'] },
  { id: 4, title: 'Multiple hosts on Zoom', category: 'Zoomy Features & Settings', description: 'Configure multiple hosts for your Zoom meetings and webinars with Zoomy.', link: '/docs/tutorial-extras/multiple-hosts-on-zoom', keywords: ['multiple hosts', 'zoom', 'hosts', 'configuration', 'add user', 'meeting host'] },
  { id: 5, title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy', category: 'Zoomy Features & Settings', description: 'Set up recurring Zoom meetings or webinars from your WordPress dashboard.', link: '/docs/tutorial-basics/setting-up-the-recurring-meetings-webinars-addon-for-zoomy', keywords: ['recurring meetings', 'webinars', 'addon', 'schedule', 'countdown', 'recurring'] },
  { id: 6, title: 'Monetize Meeting ADD On', category: 'Zoomy Features & Settings', description: 'Sell Zoom meetings with Easy Digital Downloads. Create paid meeting downloads.', link: '/docs/tutorial-basics/monetize-meeting-addon', keywords: ['monetize', 'sell', 'meeting', 'addon', 'edd', 'easy digital downloads', 'payment'] },
  { id: 7, title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', category: 'Zoomy Features & Settings', description: 'Embed YouTube, iframes and third-party tools on the Zoom meeting shortcode page.', link: '/docs/tutorial-basics/embedding-third-party-tools-shortcode', keywords: ['embed', 'third party', 'iframe', 'shortcode', 'youtube', 'credentialless'] },
  { id: 8, title: 'How to embed Zoom Webinar on your website', category: 'Zoomy Features & Settings', description: 'Steps to embed Zoom webinars on your website with Zoomy shortcode and Gutenberg.', link: '/docs/tutorial-basics/how-to-embed-zoom-webinar', keywords: ['embed webinar', 'zoom webinar', 'website', 'shortcode', 'gutenberg', 'add webinar'] },
  { id: 9, title: 'Embed Zoom Meeting on WordPress', category: 'Zoomy Features & Settings', description: 'Add Zoom meetings to your WordPress posts or pages using Zoomy Gutenberg block or shortcode.', link: '/docs/tutorial-basics/embed-zoom-meeting-on-wordpress', keywords: ['embed meeting', 'zoom meeting', 'wordpress', 'gutenberg block', 'shortcode', 'elementor'] },
];

export function filterArticles(articles, query) {
  if (!query || !String(query).trim()) return articles;
  const q = String(query).toLowerCase();
  return articles.filter((article) => {
    const matchTitle = article.title.toLowerCase().includes(q);
    const matchDescription = (article.description || "").toLowerCase().includes(q);
    const matchKeywords = (article.keywords || []).some((kw) => kw.includes(q));
    const matchCategory = (article.category || "").toLowerCase().includes(q);
    return matchTitle || matchDescription || matchKeywords || matchCategory;
  });
}
