// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WP Zoomy Documentation',
  tagline: 'Search for articles...',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.wpzoomy.com',
  baseUrl: '/',

  organizationName: 'WPZoomy',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    collections: [
      {
        title: 'Initial Setup',
        description: 'Connecting your Zoom account with Zoomy',
        authorCount: 1,
        articleCount: 2,
        link: '/collections/initial-setup',
      },
      {
        title: 'Zoomy features & settings',
        description: 'Learn how to use the various features of Zoomy',
        authorCount: 2,
        articleCount: 7,
        link: '/collections/features',
      },
    ],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'WP Zoomy Documentation',
        hideOnScroll: false,
        logo: {
          alt: 'WP Zoomy Documentation',
          src: 'https://wpzoomy.com/wp-content/uploads/2024/01/zoomy_logo-blue-1.png',
          href: '/',
        },
        items: [
          { to: '/docs/intro', label: 'All Collections', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'WP Zoomy',
            items: [
              {
                label: 'WPZoomy.com',
                href: 'https://wpzoomy.com',
              },
            ],
          },
        ],
        copyright: 'WP Zoomy',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
