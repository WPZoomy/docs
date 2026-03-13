import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import HelpCenterSearch from '@site/src/components/Helpcentersearch';

export default function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search || '');
  const initialQuery = params.get('q') || '';

  return (
    <Layout title="Search" description="Search for articles" noFooter wrapperClassName="help-center-search-page">
      <HelpCenterSearch key={initialQuery} query={initialQuery} />
    </Layout>
  );
}
