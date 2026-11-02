# Part 3 SEO and promotion plan

## Keyword intent

These are project keyword hypotheses, not measured search-volume results.

| Page | Primary phrase | Related phrases |
|---|---|---|
| Home | Le Delicate beauty services | beauty training South Africa |
| Services | nails lashes hair services | gel application, classic lashes, hair treatment |
| Classes | beginner beauty training | nail training, lash training, hair training |
| About | Le Delicate beauty studio | proposed beauty studio |
| Enquiry | beauty service enquiry | beauty training enquiry |
| Contact | Le Delicate contact | Johannesburg and Polokwane service areas |

Each page has a distinct title, description and single H1, relevant internal links and descriptive image text. Lightweight original SVGs and lazy loading keep images small. Production canonical URLs, crawler instructions and six sitemap entries are generated with the real URL during deployment. The receipt page is excluded from indexing. Search engines decide whether and when to index a page; the sitemap does not guarantee ranking.

## Local SEO

The source is a fictional academic business. City map markers represent service areas, not actual street addresses. Do not register a fake business listing or publish structured business data claiming fictional addresses are real. If launched as a real business, verify name/address/phone and opening hours, keep them consistent across legitimate listings and add accurate LocalBusiness structured data.

## Off-page plan — requires real follow-through

1. After publication, ask a relevant training partner or community directory to link to useful course information. Use genuine editorial placements; do not buy spam links.
2. Create verified studio social profiles, link them in the footer, and publish a post linking to services and beginner classes. Do not claim existing profiles or promotion without evidence.
3. Record the actual referring URL, publication date and evidence in README. Currently no backlinks or social promotion have been carried out.

## Performance and security

Use the deployed HTTPS URL, small local SVGs, no font downloads, deferred-by-placement local scripts, native FAQ elements, and Leaflet only on Contact. The map downloads external assets and tiles; test on a slow connection. `_headers` supplies CSP, anti-framing, MIME-sniffing prevention and restricted permissions on Netlify. The map library is version-pinned with integrity hashes. Dynamic text uses textContent, no personal form entries are stored in localStorage, and Netlify forms include honeypots. Client validation improves usability and is not a security boundary. If adding a custom backend, independently validate input, rate-limit and apply spam protection there. Netlify-hosted handling requires its own account and live verification.
