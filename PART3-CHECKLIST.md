# Part 3 evidence and remaining submission steps

| Requirement | Implementation / evidence |
|---|---|
| Part 2 corrections | Missing Contact form added; misleading captured-enquiry message replaced; dead social anchors removed; skip links added. Lecturer-specific feedback was not provided. |
| Interactive elements | Home native FAQ accordion, modal gallery, back-to-top, and Contact Leaflet map with city buttons. |
| Animation | Gallery hover transitions and IntersectionObserver section reveals with reduced-motion support. |
| Dynamic DOM/content | Services fetched from JSON over HTTP, local bundled fallback for file previews, DOM-created cards, live result count. |
| Search/filter/sort | Name/description search, category filter, name and price sorting, empty-results feedback. |
| SEO | Unique title/description, headings, descriptive image names/alt text, internal links, deploy-generated canonical URLs, robots and sitemap. |
| Off-page SEO | Plan in SEO-PLAN.md. Actual outreach/social posting still required; no fabricated evidence. |
| Enquiry | Existing fields retained; estimate from original Part 2 prices; training requires custom quote; unconfirmed availability clearly stated. |
| Contact | General-message form, message category, email draft with all fields, configured recipient, optional AJAX submission. Recipient configured as phillimonkatlego272@gmail.com. |
| Validation | Required fields, email format, name/message lengths, 10–15 digit phone validation, non-past date/time, inline field errors. |
| AJAX | URL-encoded fetch POST to registered Netlify forms with hidden form-name, honeypot, pending state, retryable failure. Netlify detection/deployment required. |
| Repository | README and changelog supplied. Student must push to existing repository and add actual URL. |
| Publishing | Netlify build configuration supplied. Actual publish and live delivery verification remain outstanding. |

After publishing, test: empty/invalid/valid forms, each service price, a training enquiry, a past date/time, email draft contents, delayed/failed delivery, mobile overflow, keyboard-only modal open/Escape/return focus, both map buttons, and the public sitemap/robots/canonical URLs. Keep screenshots of the final deployed pages if your lecturer requests evidence.
