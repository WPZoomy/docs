---
slug: embed-meeting
title: Embed Zoom Meeting on WordPress
category: Zoomy features & settings
authors: [stephen-bowles]
date: 2024-01-15
updated: 2024-02-11
---



export const meetingContent = (
  <>
    <p>
      The <strong>Zoom WordPress Plugin</strong> v4.5.0 adds a user-friendly way to embed Zoom Meeting/Webinar right from your WordPress editor.
    </p>

    <h2 id="gutenberg-block">1. Gutenberg Block to Embed Zoom Meeting</h2>
    <p>
      A gutenberg block has been added under the EMBEDS category to embed the Zoom Meeting/Webinar on the frontend. Simply select whether you want to embed a Meeting or a Webinar and paste your Zoom Meeting ID in the text field. Now save and view the Zoom meeting window on the frontend.
    </p>

    <h2 id="classic-editor">2. From Classic WordPress Editor</h2>
    <p>
      If you are not using Gutenberg then you can use this method to generate the meeting shortcode from your editor. In this example, we will see how it works with Elementor.
    </p>
    <ol>
      <li>Select the Text Editor element.</li>
      <li>Click the Zoom icon in Visual Tab.</li>
      <li>Choose whether you want to embed a Zoom Meeting or Webinar and select the meeting you want to embed on this page.</li>
      <li>Once you press Ok, the plugin will generate the Meeting shortcode for you.</li>
      <li>That's it, publish your changes and view the Zoom meeting window on the frontend.</li>
    </ol>

    <h2 id="direct-shortcode">3. Direct Shortcode Embed</h2>
    <p>
      There is also an option to add the meeting shortcode directly to your WordPress page/post. Create a Zoom meeting from the plugin menu Zoom Meetings → Add Meeting, copy the shortcode from the icon indicated below, and paste it on your preferred WordPress page/post.
    </p>
  </>
);

export const tableOfContents = [
  { id: 'gutenberg-block', title: '1. Gutenberg Block to Embed Zoom Meeting', level: 1 },
  { id: 'classic-editor', title: '2. From Classic WordPress Editor', level: 1 },
  { id: 'direct-shortcode', title: '3. Direct Shortcode Embed', level: 1 }
];

export const relatedArticles = [
  { title: 'Getting Started', link: '/help/getting-started' },
  { title: 'Creating Server-to-Server OAuth App', link: '/help/creating-oauth-app' },
  { title: 'Multiple hosts on Zoom', link: '/help/multiple-hosts-zoom' },
  { title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', link: '/help/embedding-tools' },
  { title: 'How to embed Zoom Webinar on your website', link: '/help/embed-webinar' }
];


