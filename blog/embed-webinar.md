---
slug: embed-webinar
title: How to embed Zoom Webinar on your website
category: Zoomy features & settings
authors: [stephen-bowles]
date: 2024-01-15
updated: 2024-02-11
---

export const webinarContent = (
  <>
    <p>
      This post will help you embed Zoom webinar on your WordPress website. It requires that you have purchased the Webinar add on from your Zoom account and installed Zoomy (the Zoom WordPress Plugin).
    </p>

    <h2 id="steps-embed">Steps to embed Zoom webinar</h2>

    <h3>1. Create Webinar from Dashboard</h3>
    <p>
      From your WordPress Dashboard navigate to Zoom Meetings → Add Webinar. Once you fill in the details and click Create Webinar on this page, a shortcode will be generated on the same page which can be embedded anywhere on your site.
    </p>

    <h3>2. Embed Using Shortcode</h3>
    <p>
      If you are embedding the Zoom webinar shortcode directly on your page, please add <code>is_webinar="1"</code> in the shortcode as indicated below.
    </p>

    <h3>3. Use Gutenberg Block</h3>
    <p>
      You can easily embed the Webinar with the Gutenberg block available with the plugin and place your Webinar ID inside it. If you are not using the default WordPress editor (Gutenberg), you can see another option to embed the Webinar on your WordPress page in this post.
    </p>

    <h3>4. Start the Webinar</h3>
    <p>
      Navigate to the WordPress page where the Webinar was embedded with a logged-in site administrator or the meeting host (same WordPress login email as the Webinar host email). Click Join via Web if you want to start the Webinar as a host right from the WordPress site or click Join Via Zoom App to begin the Webinar from the Zoom App.
    </p>

    <h3>5. Join as Attendee</h3>
    <p>
      Once started by the host the attendees can visit the page, enter their name, and email, and click Join Via Web to enter it from the same WordPress page without the need for a Zoom app.
    </p>
    <p>
      <strong>Note:</strong> If the attendee is logged into the WordPress site then they will see the email field as that is prefilled with their WP login email.
    </p>

    <h3>6. View Webinar Window</h3>
    <p>
      Once an attendee clicks the Join via Web they will see the Webinar window on the WordPress page.
    </p>

    <p style={{ marginTop: '30px' }}>
      <strong>That's it. If you have any other questions feel free to reach out here or comment below!</strong>
    </p>
  </>
);

export const tableOfContents = [
  { id: 'steps-embed', title: 'Steps to embed Zoom webinar', level: 1 }
];

export const relatedArticles = [
  { title: 'Getting Started', link: '/help/getting-started' },
  { title: 'Creating Server-to-Server OAuth App', link: '/help/creating-oauth-app' },
  { title: 'Embedding Third-Party Tools on a Zoom Meeting Shortcode Page', link: '/help/embedding-tools' },
  { title: 'Embed Zoom Meeting on WordPress', link: '/help/embed-meeting' }
];


