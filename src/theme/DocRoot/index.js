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
        
        <HelpCenterHero showTitle={true} showSearch={true} searchOnCurrentPage={true} />
        <DocRootLayout>{docElement}</DocRootLayout>
        
        <footer className="help-center-doc-footer">
                    <a href="https://wpzoomy.com/" target="_blank" rel="noopener noreferrer">Back to official Zoomy site</a>
        </footer>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
