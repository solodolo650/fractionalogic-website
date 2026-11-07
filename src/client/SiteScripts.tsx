'use client';

import { useEffect } from 'react';
import initNav from './Nav';
import initEmail from './EmailLink';
import initForm from './Form';
import initFilter from './FilterGroup';
import initTabs from './Tabs';
import initToc from './OnThisPage';

/*
 * Progressive enhancement, ported as-is from the static site: the HTML works without
 * JavaScript, and these scripts add menus, filters, tabs and form handling once loaded.
 * Navigation uses plain links (full page loads), so each page runs them once.
 */
let started = false;

export default function SiteScripts() {
  useEffect(() => {
    // React runs effects twice in development; bind handlers once per page load.
    if (started) return;
    started = true;
    initNav();
    initEmail();
    initForm();
    initFilter();
    initTabs();
    initToc();
  }, []);
  return null;
}
