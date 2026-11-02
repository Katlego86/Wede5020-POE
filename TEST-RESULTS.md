# Validation record — 2 November 2026

## Completed successfully

- Node.js syntax checks for `script.js`, `config.js` and `catalogue.js`.
- Parsed all seven HTML files: all relative href/src targets exist and page IDs are unique.
- Confirmed the nine service names/prices in the JSON catalogue and bundled JavaScript fallback match; prices match the original Part 2 menu.
- Executed the production build with a test HTTPS hostname: generated six valid XML sitemap entries, canonical URLs, robots.txt and Netlify-enabled delivery configuration in `dist`.
- Confirmed a non-HTTPS deployment URL is rejected by the build script.
- Excluded the generated test deployment folder from the final ZIP; no test hostname is presented as a live website.

## Not verified in a rendered browser

Playwright was present, but its Chromium executable was missing. The browser download failed, preventing the planned runtime and viewport tests. No claim is made that desktop/mobile rendering, keyboard interactions, validation events or AJAX responses have passed a browser test.

## Required after opening/publishing

Use the manual test list in PART3-CHECKLIST.md. In particular verify all six pages at 390px, 768px and 1440px; gallery keyboard focus and Escape; category/search/price sorting; invalid and valid forms; enquiry estimates; email-draft contents; external map loading; actual Netlify form receipt; HTTPS response headers; and the public sitemap/canonical URLs. Local build checks are not evidence of live form delivery or publication.
