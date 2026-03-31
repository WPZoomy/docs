// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoomy Help Centre',
  tagline: 'Search for articles...',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'http://localhost:3000',
  baseUrl: '/',


  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/category/tutorial---basics', to: '/collections/features' },
          { from: '/docs/category/tutorial---extras', to: '/collections/features' },
        ],
      },
    ],
  ],

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
        title: 'Zoomy Features & Settings',
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
      metadata: [
        {
          name: 'google-site-verification',
          content: 'lZIxHXWM-7gFvK0PrOd0zEt7AWFufFxk7tXM_JJSoUs',
        },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Zoomy',
        hideOnScroll: false,
        logo: {
          alt: 'Zoomy',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          { to: '/docs/intro', label: 'All Collections', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: 'Zoomy',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
