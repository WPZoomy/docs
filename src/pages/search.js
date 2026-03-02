import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import HelpCenterSearch from '@site/src/components/Helpcentersearch';

function useSearchQuery() {
  const [query, setQuery] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    setQuery(params.get('q') || '');
  }, []);
  return query;
}

export default function SearchPage() {
  const initialQuery = useSearchQuery();
  return (
    <Layout title="Search" description="Search for articles" noFooter wrapperClassName="help-center-search-page">
      <HelpCenterSearch key={initialQuery} query={initialQuery} />
    </Layout>
  );
}
