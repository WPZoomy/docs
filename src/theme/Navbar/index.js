import React from 'react';
import {useLocation} from '@docusaurus/router';
import NavbarOriginal from '@theme-original/Navbar';

/**
 * Custom navbar wrapper.
 * - Hide navbar entirely on the Help Center home page ("/") so only the hero shows.
 * - Keep default navbar everywhere else (docs, collections, search, etc.).
 */
export default function Navbar(props) {
  const location = useLocation();

  if (location?.pathname === '/') {
    return null;
  }

  return <NavbarOriginal {...props} />;
}
