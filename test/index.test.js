import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import Index from '../pages/index.page.mdx';
import { load } from 'cheerio';
import Footer from '../components/Footer.mdx';


describe('paragraph test', function () {
  it('tests for paragraph of coming soon', function () {
    const sHtml = renderToString(React.createElement(Index));
    const $ = load(sHtml);
    expect($('p').html()).toBe("Join us for the grand opening of Brantford's first botanical café.");
  });
});

describe('copyright test', function () {
  it('tests for copyright', function () {
    const sHtml = renderToString(React.createElement(Footer));
    const $ = load(sHtml);
    expect($('p').html()).toContain("© Katryn Relleve, 2023");
  });
});
