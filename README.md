# Le Delicate Website – Part 3

**Student:** Katlego Mohlaka · **Student number:** ST10525436 · **Module:** WEDE5020

Le Delicate is a fictional beauty-services and training organisation. This submission extends the six HTML pages and pink visual identity from Parts 1 and 2 with JavaScript interaction, distinct enquiry/contact forms and search-engine preparation.

## Start here

Read [START-HERE.md](START-HERE.md) for preview, GitHub and hosting instructions. No npm install is required. Run `python -m http.server 8000` from this folder and open http://localhost:8000.

**Repository URL:** To be added after updating the existing repository.  
**Live website URL:** To be added after Netlify deployment.  
**Publishing status:** Prepared for deployment; not published by this handover.

## Part 3 functionality

- **Home:** keyboard-operable gallery modal, Escape to close, focus restored to opener; native FAQ accordion with one expanded answer; animated reveals respecting reduced-motion preferences.
- **Services:** dynamic cards sourced from `data/services.json`, with a bundled file-preview fallback in `js/catalogue.js`; text search, category filtering, alphabetical sorting and ascending/descending price sorting; result counts and empty state. The original detailed menu remains as a no-JavaScript fallback.
- **Enquiry:** required names/email/phone/service/date/time, inline validation, future-date/time checks, and an indicative estimate using the original service prices. Training enquiries request a tailored quote. Availability is not invented or guaranteed. Checking an estimate never submits personal information.
- **Contact:** a separate general-message form with message category and full message, validation and a compiled mailto draft. The visitor opens their own mail client, reviews and sends. The recipient in `js/config.js` is `phillimonkatlego272@gmail.com`, as supplied by the project owner.
- **AJAX:** separate online-submit controls use `fetch` and URL-encoded form data, a hidden `form-name`, honeypot, pending state and visible failure feedback. The Netlify build enables delivery; form detection must be enabled and both registered forms verified in the account. Local previews clearly report that no details were sent. GitHub Pages needs a separate backend for AJAX.
- **Map:** pinned Leaflet 1.9.4 and attributed OpenStreetMap tiles, two city markers and city zoom buttons. City-centre markers identify proposed service areas, not the fictional studio addresses. The map requires internet; a text link remains available if assets cannot load.

## SEO, accessibility, performance and security

Each main page has a unique title and description, one H1, meaningful headings, internal links and Open Graph text. The existing descriptive SVG names and image alternatives are retained. Skip links, focus states, form labels, live feedback and reduced-motion support aid access.

`tools/build.py` copies only public website assets into `dist` and generates canonical URLs, `robots.txt` and `sitemap.xml` using the actual HTTPS site URL. Source sitemap URLs use the reserved `ledelicate.example` domain as explicit templates. The receipt page has noindex and is omitted from the sitemap. Do not upload a source-template sitemap as final live evidence.

Netlify reads `netlify.toml`, builds with its `URL` environment variable and deploys `dist`. `_headers` supplies security headers there; these platform headers do not automatically apply on GitHub Pages. No secret keys or personal form records are stored in the browser. Client validation is a usability feature, not a substitute for backend validation. See [SEO-PLAN.md](documents/SEO-PLAN.md) for keyword intent, local SEO, performance and a genuine off-page promotion plan. No backlinks or social posts have been created.

## Part 3 files

- `js/script.js` — interactions, rendering, validation, estimates, email drafts, AJAX and map.
- `js/config.js` — contact email and delivery configuration.
- `js/catalogue.js` / `data/services.json` — matching service data for offline/HTTP previews. Update both when changing the menu.
- `css/style.css` — retained Part 2 styles plus interaction, errors, modal, map and motion rules.
- `robots.txt`, `sitemap.xml` — source templates; generated public versions go into `dist`.
- `tools/build.py`, `netlify.toml`, `_headers`, `.gitignore` — publishing preparation.
- `START-HERE.md`, `documents/PART3-CHECKLIST.md`, `documents/SEO-PLAN.md` — handover, requirement mapping and SEO evidence plan.

## Changelog — Part 3 (2 November 2026)

### Contact email update

- Set `phillimonkatlego272@gmail.com` as the email-draft recipient, updated both displayed contact emails, and removed the obsolete placeholder-recipient notice. No email was sent during configuration.


### Corrections identified while reviewing Part 2

Lecturer-specific Part 2 feedback was not supplied. These entries describe verified source-file improvements, not invented marking comments.

1. Added the missing general-message form to `contact.html`; Part 2 contained contact information and an enquiry link only. The new form separates general correspondence from service bookings and compiles all entered details into an email draft.
2. Replaced the enquiry form's previous “captured / we will be in touch” response with an actual calculated service estimate and an explicit statement that checking it sends nothing. Added a separate online-submit control so a preview does not imply delivery.
3. Replaced dead social `href="#"` links on all six pages with non-clickable planned-profile text. No unsupported social accounts or backlink claims are made.
4. Added a skip-to-content link on all main pages, kept current-page navigation accurate, and removed the hidden back-to-top control from the keyboard tab order until visible.

### New Part 3 features

5. Added dynamic service rendering, JSON loading with bundled fallback, search/category filters, alphabetical/price sorting, service-specific enquiry links and empty-result feedback.
6. Added a Home illustration gallery with a native dialog lightbox, labelled close control, Escape support, backdrop handling and focus restoration. The existing SVG concept graphics remain clearly labelled as illustrations.
7. Added FAQ accordion behaviour, scroll-triggered heading reveals and reduced-motion handling.
8. Added Contact city-area map, attribution, marker popups, location controls, pinned dependencies/integrity checks and an offline fallback link.
9. Added field-specific validation for required values, whitespace-only input, email, phone length/characters, name/message lengths and non-past dates/times. Input edits invalidate stale estimates and email drafts; failed submissions preserve entries.
10. Added Netlify-ready AJAX forms with explicit action URLs, form names, honeypots, pending/disabled states, timeout handling and honest network-failure responses.
11. Added unique page metadata, deploy-time canonical/Open Graph URLs, robots and sitemap generation; receipt-page noindex; keyword and off-page plans.
12. Added deployment configuration and security headers, retained local lightweight assets, and documented outstanding recipient, feedback, live verification and publishing tasks.

## References — Part 3 additions

Official sources consulted on 2 November 2026:

- Leaflet, *Quick Start Guide*: https://leafletjs.com/examples/quick-start/ — map, tiles, markers, attribution.
- Leaflet, *Reference*: https://leafletjs.com/reference.html — map controls and events.
- OpenStreetMap, *Copyright and License*: https://www.openstreetmap.org/copyright — required attribution.
- Netlify, *Forms setup*: https://docs.netlify.com/manage/forms/setup/ — static form detection and URL-encoded AJAX requests.
- Netlify, *Form notifications*: https://docs.netlify.com/manage/forms/notifications/ — account-level email notifications.
- Google Search Central, *SEO Starter Guide*: https://developers.google.com/search/docs/fundamentals/seo-starter-guide — descriptive content, titles and links.
- Google Search Central, *Build and submit a sitemap*: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — public sitemap generation.
- MDN, *Client-side form validation*: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation — constraints and validation feedback.
- MDN, *HTML dialog element*: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog — modal keyboard/focus behaviour.

All service names/prices and original concept SVG illustrations are inherited from the supplied Part 2 project; no third-party portfolio photographs are claimed.

## Validation

See `documents/TEST-RESULTS.md` for checks performed on this handover. Live form delivery, external map tiles and production security headers still require verification after deployment.

---

# Retained Part 1 and Part 2 documentation

The following original notes and checklists describe the earlier submission. For current form functionality, deployment status and Part 3 changes, use the sections above.

# Le Delicate Website – Part 2

## Student
- **Name:** Katlego Mohlaka
- **Student Number:** ST10525436
- **Subject:** WEDE5020
- **Project:** Le Delicate Beauty Services and Training Website

## Project Overview

Le Delicate is a proposed/fictional beauty services and training organisation created for the WEDE5020 website project.

Part 1 established the website structure, content, navigation, sitemap and basic HTML foundation. Part 2 develops that foundation into a more complete desktop and responsive website through external CSS, visual styling, responsive layouts, interactive states and responsive image techniques.

The website remains an academic prototype. Contact details, prices, locations and training information are therefore presented as proposed information and should be confirmed if the project is later adapted for a real organisation.

## Part 2 Objectives

The main objectives for Part 2 were to:

- improve the website based on the Part 1 foundation;
- establish a consistent visual identity;
- create and use an external stylesheet;
- apply a clear base typography and spacing system;
- develop a desktop layout;
- introduce hover, focus and active states;
- create responsive layouts for desktop, tablet and mobile screens;
- use relative CSS units such as `rem`, `em` and `%`;
- use responsive image markup with `srcset`, `sizes` and `<picture>`;
- keep content as the main focus of each page;
- improve accessibility through semantic HTML, labels, alternative text and visible keyboard focus states;
- document the work clearly in GitHub.

## Pages

- `index.html` – Home
- `about.html` – About Us
- `services.html` – Beauty Services
- `classes.html` – Beauty Classes
- `enquiry.html` – Enquiry / Booking
- `contact.html` – Contact

## Folder Structure

```text
Le-Delicate-Website/
├── index.html
├── about.html
├── services.html
├── classes.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── hero-640.svg
│   ├── hero-1024.svg
│   ├── hero-1600.svg
│   ├── nails-640.svg
│   ├── nails-1024.svg
│   ├── nails-1600.svg
│   ├── lashes-640.svg
│   ├── lashes-1024.svg
│   ├── lashes-1600.svg
│   ├── hair-640.svg
│   ├── hair-1024.svg
│   ├── hair-1600.svg
│   ├── classes-640.svg
│   ├── classes-1024.svg
│   ├── classes-1600.svg
│   ├── about-640.svg
│   ├── about-1024.svg
│   └── about-1600.svg
└── documents/
    └── references/
```

## Part 1 Improvements

The original Part 1 repository provided the required page structure and basic navigation. During the Part 2 review, the following improvements were made to strengthen the foundation before applying the new styling:

1. Reworked page copy to sound more natural and user-focused rather than relying on repeated generic phrases.
2. Improved headings and calls to action so visitors can understand the purpose of each section more quickly.
3. Added clearer service descriptions and separated the service categories into focused sections.
4. Improved the enquiry form labels and wording.
5. Added clearer prototype notes so proposed information is not presented as confirmed real-world business information.
6. Improved accessibility details including descriptive image alternative text, navigation labels and visible focus states.
7. Replaced visual placeholder boxes with locally stored responsive image assets so the pages have a more complete presentation.
8. Kept the six-page structure from Part 1 while improving the consistency of the content and navigation.

> **Note:** The lecturer's individual Part 1 marking comments were not available while this Part 2 version was prepared. The changes above therefore document practical improvements made during the Part 2 review rather than claiming specific lecturer comments that were not supplied.

## CSS Implementation

The website now uses one external stylesheet:

`css/style.css`

The stylesheet establishes:

- a consistent colour palette;
- base font family, font size, weight, line height and letter spacing;
- reusable container and button styles;
- responsive card grids;
- hero and page-banner layouts;
- form styling;
- footer styling;
- borders and box shadows;
- hover effects;
- focus-visible states;
- active navigation states;
- responsive image presentation;
- reduced-motion support.

### Relative units

The CSS uses relative units such as:

- `rem` for typography and spacing;
- `em` where suitable for component sizing;
- `%` for fluid widths;
- `clamp()` for flexible heading and section sizing;
- viewport-based values where they improve responsiveness.

## Responsive Design

Three practical viewport ranges were considered:

### Desktop
**Above 992px**

The desktop layout uses multiple columns where appropriate. The home page uses a two-column hero, service cards are displayed in multiple columns, and the footer uses a multi-column structure.

### Tablet
**Between 673px and 992px**

The layout reduces the number of columns and allows major sections to stack when necessary. Navigation remains available while content becomes more fluid.

### Mobile
**Up to 672px**

Content changes to a single-column layout. Typography is reduced using responsive sizing, navigation wraps across available space, forms become single-column, and cards stack vertically.

## Responsive Images

The website uses `<picture>`, `srcset` and `sizes` for the main visual assets.

Example:

```html
<picture>
  <source media="(max-width: 42rem)" srcset="images/hero-640.svg">
  <source media="(max-width: 62rem)" srcset="images/hero-1024.svg">
  <img
    src="images/hero-1600.svg"
    srcset="images/hero-640.svg 640w,
            images/hero-1024.svg 1024w,
            images/hero-1600.svg 1600w"
    sizes="(max-width: 42rem) 92vw,
           (max-width: 62rem) 46vw,
           560px"
    alt="A soft editorial image representing the Le Delicate beauty studio">
</picture>
```

This allows the browser to select a more suitable asset based on the viewport and display size.

## Interaction and Accessibility

Interactive elements include:

- navigation hover states;
- active navigation states;
- button hover and active states;
- visible keyboard focus states;
- form input focus states;
- a back-to-top button;
- basic front-end form feedback.

The form remains a prototype and does not connect to a real booking or email service.

## Testing

The website should be tested using browser developer tools at a minimum of:

- Desktop: 1440px × 900px
- Tablet: 768px × 1024px
- Mobile: 390px × 844px

### Evidence to add before final submission

Take screenshots after opening each important page in the browser at desktop, tablet and mobile sizes. Add them to the repository in a folder such as:

```text
documents/
└── screenshots/
    ├── desktop-home.png
    ├── desktop-services.png
    ├── tablet-home.png
    ├── tablet-services.png
    ├── mobile-home.png
    └── mobile-services.png
```

The screenshots should show the browser/device dimensions where possible so the lecturer can clearly see the responsive behaviour.

### Testing checklist

- [ ] Desktop navigation displays correctly.
- [ ] Desktop hero and cards use multiple columns.
- [ ] Tablet layout reduces columns without horizontal scrolling.
- [ ] Mobile layout stacks content into one column.
- [ ] Images remain inside their containers.
- [ ] Buttons remain readable and usable.
- [ ] Form controls fit the viewport.
- [ ] Keyboard focus is visible.
- [ ] Navigation links work on every page.
- [ ] Service anchor links open the correct sections.
- [ ] No horizontal scrolling occurs at mobile width.
- [ ] Back-to-top control works after scrolling.

## Changelog

### Part 2 – Content and Part 1 Improvements

- Reviewed the original Part 1 page content and rewrote several sections in a more natural, conversational and customer-focused tone.
- Improved headings so that each section communicates its purpose more clearly.
- Reworked service descriptions to avoid repetitive wording and make the differences between service categories easier to understand.
- Improved calls to action such as “Make an enquiry”, “Explore classes” and “Register interest” so visitors have a clearer next step.
- Updated the enquiry page wording to make it clear that the form is an academic front-end prototype.
- Added proposed-information notes where business details should not be interpreted as confirmed real-world information.
- Replaced the basic visual placeholders with locally stored image assets and responsive image markup.
- Improved accessibility by adding descriptive `alt` text, navigation labels, form labels and visible keyboard focus states.
- Added an active state to the main navigation so the current page is easier to identify.
- Added a back-to-top control to improve navigation on longer pages.

### Part 2 – CSS and Responsive Design

- Created and applied a central external stylesheet at `css/style.css`.
- Added a consistent colour palette using CSS custom properties.
- Added a base typography system covering font family, font size, font weight, line height and letter spacing.
- Created reusable styles for containers, buttons, cards, sections, forms, banners and the footer.
- Added border, background, shadow and radius treatments to establish a consistent visual language.
- Added `:hover`, `:focus-visible` and `:active` states for interactive elements.
- Added a desktop two-column hero layout and multi-column card layouts.
- Added tablet media-query behaviour to reduce columns and stack larger sections where required.
- Added mobile media-query behaviour to create single-column layouts and adjust navigation, typography and form controls.
- Used relative units such as `rem`, `%` and `clamp()` to improve responsiveness.
- Added responsive image handling with `<picture>`, `srcset` and `sizes`.
- Added reduced-motion support for users who prefer less animation.
- Added basic JavaScript for active navigation, back-to-top behaviour and front-end enquiry feedback.

## Submission

The Part 2 submission should contain:

1. All updated HTML files.
2. The external CSS stylesheet.
3. Supporting JavaScript and image assets.
4. Updated README documentation.
5. Detailed changelog entries.
6. Responsive testing screenshots.
7. The GitHub repository link submitted through the learning management system.

## GitHub

Repository:

https://github.com/Katlego86/Le-Delicate-Website

Suggested Part 2 commit message:

```text
Complete Part 2 responsive styling and documentation
```

## References

- S. Sasti and D. Sasti, *Principal Computer Programming*, Macmillan Education South Africa.
- Arihant, *Computer Operator & Programming Assistant, NSQF 3, NIMI Pattern*.
- Andy Vickler, *Web Development for Beginners*.

## Academic Content Note

Le Delicate is treated as a proposed/fictional organisation for this assignment. Addresses, telephone numbers, email addresses, prices, course information and service details are illustrative and should be replaced or confirmed if actual client information becomes available.
