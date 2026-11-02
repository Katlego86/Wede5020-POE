# Open and publish Le Delicate Part 3

1. Extract the ZIP. Open the extracted folder in VS Code.
2. For the full local preview, run `python -m http.server 8000` in that folder and open http://localhost:8000. Opening index.html directly also supports the bundled service search, forms and gallery; the map requires internet.
3. Test Home (gallery and FAQs), Services (search, category and price sorting), Enquiry (estimate), and Contact (email draft and map).
4. The contact email is configured as `phillimonkatlego272@gmail.com` in `js/config.js`. The fictional addresses and phone numbers must also be replaced before using this as a real business website.
5. Upload the extracted project contents into your existing Part 1/2 GitHub repository. Keep its history. Commit with a descriptive message such as `Add Part 3 interactions, forms and SEO`. Do not upload only the ZIP.
6. In Netlify, import that GitHub repository. The supplied `netlify.toml` sets the build command and publishes `dist`. Enable form detection in Netlify, then deploy/redeploy. The build reads Netlify's `URL` variable to generate canonical URLs, robots.txt and sitemap.xml and enables the online form buttons. No API key goes into the browser code.
7. Test both online forms with consented test data, check that each submission appears in Netlify Forms, and configure submission email notifications if needed. A local or mocked test is not proof of delivery. Check your account's current free-plan allowances.
8. Add your actual GitHub repository and live Netlify URL to README.md. Submit the repository link to the LMS and supply the live link as requested.

## If you choose GitHub Pages instead

Run `python tools/build.py --url https://YOUR-USERNAME.github.io/YOUR-REPOSITORY` and publish the contents of `dist` using your Pages workflow. Leave Netlify Forms disabled. The email draft and local estimate work, but AJAX delivery requires a separate form backend; GitHub Pages does not process POST requests. Netlify is the recommended route for this assignment's AJAX requirement.

## Still required from the student

- Lecturer's Part 2 feedback (not included in the ZIP). Apply those specific changes and record actual feedback entries; do not invent feedback.
- Live mail-client verification of the configured email recipient.
- Existing repository access/link and a hosting account to publish.
- Live submission verification and URLs. No repository was pushed or site published while preparing this ZIP.
- Genuine backlink/social promotion evidence if required. The SEO plan is provided; no external posts or backlinks have been created.
