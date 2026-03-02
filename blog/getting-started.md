---
slug: getting-started
title: Getting Started
category: Initial Setup
authors: [stephen-bowles]
date: 2024-01-15
updated: 2024-02-11
---


export const gettingStartedContent = (
  <>
    <p>
      We will walk you through the process of connecting your Zoom account with your Zoomy Wordpress plugin on your website.
    </p>

    <h2 id="sign-up">1. Sign up for a Zoom Account</h2>
    <p>
      If you haven't already, start by signing up for a Zoom account. Visit the Zoom website (<strong>zoom.us</strong>) and choose the plan that best suits your needs. Zoom offers a range of plans, including a free basic plan and various paid options with additional features and capabilities.
    </p>

    <h2 id="install-plugin">2. Install the Zoomy Wordpress plugin</h2>
    <p>
      Zoomy allows you to embed your Zoom meetings, webinars, and recordings directly onto your site and manage Zoom meetings from your WordPress dashboard.
    </p>
    <ol>
      <li>You can purchase a Zoomy license <strong>here</strong>.</li>
      <li>Upload and active the Zoomy plugin zip file into your Wordpress admin's plugin</li>
      <li>Register your Zoomy license</li>
    </ol>

    <h2 id="oauth-app">3. Create a Server-to-Server OAuth App with Zoom</h2>
    <p>
      To integrate Zoom with your WordPress site, you'll need to generate API credentials from your Zoom account. We have a detailed guide <strong>here</strong> to help you with this.
    </p>

    <h2 id="add-credentials">4. Add API credentials to the Zoomy plugin</h2>
    <p>
      In your Zoomy plugin settings, locate the section for Server-to-Server OAuth app credentials in the plugin settings and enter the keys obtained in the previous step. Save the settings to establish the connection between your Zoomy WordPress site and Zoom's API.
    </p>

    <h2 id="embedding">5. Embedding Zoom Meetings or Webinars</h2>
    <p>
      Now that Zoomy is fully integrated with your Zoomy account, you can embed and view Zoom meetings or webinars directly on your WordPress site. Create a new page or post where you want to add the meeting or webinar and look for the Zoomy integration options provided by the plugin.
    </p>
    <p>
      You can also use the shortcode generator that allows you to insert a Zoom meeting wherever you want across your website.
    </p>
    <p>
      Example shortcode: <code>[zoom_api_link meeting_id="85479679955"]</code>
    </p>

    <h2 id="advanced-options">6. Personalize Advanced Plugin Options</h2>
    <p>
      There are tons of other advanced options to tightly integrate Zoom into your site. For example, we offer an Auto Join mode in our plugin that allows you to further simplify the meeting join process. You can enable this option if you want the users to automatically join the meeting when they visit your page. There will be no need to enter any meeting passwords or usernames.
    </p>

    <h2 id="testing">7. Testing Zoom on website</h2>
    <p>
      Before launching your integrated Zoom event, it's crucial to thoroughly test it. Create a test meeting or webinar and register as a participant to ensure that the registration process, meeting link, and email notifications are functioning correctly. Test various features, such as screen sharing, chat, and Q&A, to ensure a smooth experience for your attendees.
    </p>

    <h2 id="conclusion">Conclusion</h2>
    <p>
      <strong>You did it! Time to get Zoomy!!</strong>
    </p>
  </>
);

export const tableOfContents = [
  { id: 'sign-up', title: '1. Sign up for a Zoom Account', level: 1 },
  { id: 'install-plugin', title: '2. Install the Zoomy Wordpress plugin', level: 1 },
  { id: 'oauth-app', title: '3. Create a Server-to-Server OAuth App with Zoom', level: 1 },
  { id: 'add-credentials', title: '4. Add API credentials to the Zoomy plugin', level: 1 },
  { id: 'embedding', title: '5. Embedding Zoom Meetings or Webinars', level: 1 },
  { id: 'advanced-options', title: '6. Personalize Advanced Plugin Options', level: 1 },
  { id: 'testing', title: '7. Testing Zoom on website', level: 1 },
  { id: 'conclusion', title: 'Conclusion', level: 1 }
];

export const relatedArticles = [
  { title: 'Creating Server-to-Server OAuth App', link: '/help/creating-oauth-app' },
  { title: 'Multiple hosts on Zoom', link: '/help/multiple-hosts-zoom' },
  { title: 'Setting up the Recurring Meetings/Webinars Addon for Zoomy', link: '/help/recurring-meetings' },
  { title: 'How to embed Zoom Webinar on your website', link: '/help/embed-webinar' },
  { title: 'Embed Zoom Meeting on WordPress', link: '/help/embed-meeting' }
];


