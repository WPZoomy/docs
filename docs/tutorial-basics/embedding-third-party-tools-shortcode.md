---
sidebar_position: 5
title: Embedding Third-Party Tools on a Zoom Meeting Shortcode Page
sidebar_label: Embedding Third-Party Tools on a Zoom Meeting Shortcode Page
collection: Zoomy Features & Settings
author: Teams Wpzoomy
updated: over a year ago
---
# Embedding Third-Party Tools on a Zoom Meeting Shortcode Page



Embedding Third-Party Tools on a Zoom Meeting Page

<AuthorBlock />

This guidance applies specifically to the page where you embed the Zoom meeting shortcode and not to other plugin pages or shortcodes.

`[zoom_api_link meeting_id="[meeting_id]"]`

To embed third-party tools, such as external YouTube videos or iframes from different domains, you need to add the `credentialless` attribute to your `<script>` and `<iframe>` elements on the Zoom meeting page starting from plugin version **7.4.0**

This is necessary because Zoom requires cross-origin isolation to enable advanced features like gallery view and 720p video resolution. Without this, resources from other domains may fail to load and display an error message.

To bypass this restriction and successfully embed third-party tools on the Zoom meeting page, use the following methods:

## Embedding a Third-Party I-Frame on Zoom Meeting Page

```html
<iframe credentialless src="https://www.youtube.com/embed/1m.."></iframe>
```

## Embedding a Third-Party Scripts

```html
<script credentialless src="https://third-party.com/tool.js"></script>
```

Using the **`credentialless`** attribute ensures that both the Zoom meeting and third-party scripts are loaded without credentials, maintaining the necessary cross-origin isolation for secure embedding.
