// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Initial Setup',
      link: { type: 'doc', id: 'tutorial-basics/create-a-document' },
      items: [
        'tutorial-basics/create-a-document',
      ],
    },
    {
      type: 'category',
      label: 'Zoomy features & settings',
      link: { type: 'doc', id: 'tutorial-basics/setting-up-instructor-role-addon' },
      items: [
        'tutorial-basics/setting-up-instructor-role-addon',
        'tutorial-extras/multiple-hosts-on-zoom',
        'tutorial-basics/create-a-page',
        'tutorial-basics/monetize-meeting-addon',
        'tutorial-basics/embedding-third-party-tools-shortcode',
        'tutorial-basics/how-to-embed-zoom-webinar',
        'tutorial-basics/embed-zoom-meeting-on-wordpress',
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
        'tutorial-basics/markdown-features',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
  ],
};

export default sidebars;
