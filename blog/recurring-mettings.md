---
slug: recurring-meetings
title: Setting up the Recurring Meetings/Webinars Addon for Zoomy
category: Zoomy features & settings
authors: [stephen-bowles]
date: 2024-01-15
updated: 2024-02-11
---

export const recurringContent = (
  <>
    <p>
      The Recurring Meetings addon for the <strong>Zoomy - WordPress Plugin</strong> will enable you to set up recurring Zoom meetings or webinars right from the comfort of your WordPress dashboard. It removes the hassle for WordPress admins to update the starting time of a Zoom meeting each time. The addon can enable you to simply schedule the meeting once from your dashboard then, sit back and relax!
    </p>

    <h2 id="backend-functionality">Backend Functionality</h2>
    <p>
      You will be able to schedule your Zoom meetings or webinars as daily, weekly, or monthly in just a few simple clicks. There are a multitude of ways to set a schedule, the addon enables you to make use of all the possible recurring meeting options available by Zoom.
    </p>

    <h2 id="recurring-countdown">Recurring Meeting Countdown</h2>
    <p>
      This addon is required to update the countdown for each occurrence of a recurring meeting accordingly.
    </p>
    <p>
      There are 2 ways in which the countdown is updated for the next occurrence of a recurring meeting or webinar.
    </p>

    <h3>1. Realtime via Zoom event (Requires <strong>event subscription</strong>):</h3>
    <p>
      The countdown will update to the next occurrence of the recurring meeting as soon as the current meeting is ended by the host. It is required that the meeting is ended by the host after the specified meeting Duration.
    </p>

    <h3>2. Hourly via cronjob:</h3>
    <p>
      This is a fallback method in case the countdown is not updated in realtime. The cronjob automatically runs in the background when you install the addon. It updates the recurring meeting countdown to the next occurrence of the meeting at an hourly interval.
    </p>

    <h2 id="prerequisites">Prerequisites</h2>
    <ol>
      <li><strong>Zoom WordPress Plugin</strong> (at least v3.3.1)</li>
    </ol>

    <h2 id="configuration">Configuration Steps</h2>
    <ol>
      <li>Once you Purchase the addon, you will receive a license key and plugin file via email.</li>
      <li>Upload the plugin zip file to your WP site.</li>
      <li>Add the License key to Zoom Meetings → Extensions → Recurring Meetings Addon and click activate. This will enable you to use the recurring meetings feature in your Zoom meetings.</li>
    </ol>
  </>
);

export const tableOfContents = [
  { id: 'backend-functionality', title: 'Backend Functionality', level: 1 },
  { id: 'recurring-countdown', title: 'Recurring Meeting Countdown', level: 1 },
  { id: 'prerequisites', title: 'Prerequisites', level: 1 },
  { id: 'configuration', title: 'Configuration Steps', level: 1 }
];

export const relatedArticles = [
  { title: 'Getting Started', link: '/help/getting-started' },
  { title: 'Creating Server-to-Server OAuth App', link: '/help/creating-oauth-app' },
  { title: 'Setting Up the Instructor Role Add On', link: '/help/instructor-role' },
  { title: 'Monetize Meeting ADD On', link: '/help/monetize-meeting' },
  { title: 'How to embed Zoom Webinar on your website', link: '/help/embed-webinar' }
];


