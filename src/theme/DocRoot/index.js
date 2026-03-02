/**
 * Help Center doc layout: hero + default doc layout + footer
 */
import React from 'react';
import clsx from 'clsx';
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from '@docusaurus/plugin-content-docs/client';
import DocRootLayout from '@theme-original/DocRoot/Layout';
import HelpCenterHero from '@site/src/components/HelpCenterHero';
import Link from '@docusaurus/Link';
import NotFoundContent from '@theme/NotFound/Content';

export default function DocRoot(props) {
  const currentDocRouteMetadata = useDocRootMetadata(props);
  if (!currentDocRouteMetadata) {
    return <NotFoundContent />;
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage, 'help-center-doc-page')}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <HelpCenterHero showTitle={false} showSearch={true} />
        <DocRootLayout>{docElement}</DocRootLayout>
        <footer className="help-center-doc-footer">
          <Link to="/">Help Center</Link>
          <span className="help-center-doc-footer-sep"> · </span>
          <a href="https://www.intercom.com/intercom-link?company=Zoomy&solution=customer-support&utm_campaign=intercom-link&utm_content=We+run+on+Intercom&utm_medium=help-center&utm_referrer=https%3A%2F%2Fintercom.help%2Fwpzoomy%2Fen&utm_source=desktop-web" target="_blank" rel="noopener noreferrer">We run on Intercom</a>
        </footer>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
