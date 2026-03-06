// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoomy Documentation',
  tagline: 'Search for articles...',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Help Center',
        hideOnScroll: false,
        logo: {
          alt: 'Help Center',
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
        copyright: 'Help Center',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
