/* Le Delicate Part 3 — plain JavaScript, no build dependency. */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const config = window.LE_DELICATE_CONFIG || {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduceMotion ? 'auto' : 'smooth';
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const active = link.getAttribute('href') === currentPage;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const topButton = document.querySelector('.back-to-top');
  if (topButton) {
    const updateTop = () => { topButton.classList.toggle('visible', scrollY > 500); topButton.tabIndex = scrollY > 500 ? 0 : -1; };
    addEventListener('scroll', updateTop, { passive: true }); updateTop();
    topButton.addEventListener('click', () => scrollTo({ top: 0, behavior }));
  }
  // Native <details> keeps the FAQ operable even if JavaScript is disabled.
  document.querySelectorAll('.faq details').forEach(item => item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.faq details').forEach(other => { if (other !== item) other.open = false; });
  }));
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.section-heading').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
  }
  const lightbox = document.querySelector('#lightbox');
  let galleryTrigger;
  if (lightbox) {
    document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
      galleryTrigger = button;
      const image = document.querySelector('#lightbox-image');
      image.src = button.dataset.lightbox; image.alt = button.dataset.caption;
      document.querySelector('#lightbox-caption').textContent = button.dataset.caption;
      lightbox.showModal();
    }));
    document.querySelector('#close-lightbox').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) {
      const rect = lightbox.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
    }});
    lightbox.addEventListener('close', () => galleryTrigger?.focus());
  }
  let catalogue = window.LE_DELICATE_SERVICES || [];
  const results = document.querySelector('#service-results');
  function renderServices() {
    if (!results) return;
    const query = document.querySelector('#service-search').value.trim().toLowerCase();
    const category = document.querySelector('#category-filter').value;
    const sort = document.querySelector('#service-sort').value;
    const matches = catalogue.filter(item => (category === 'all' || item.category === category) && `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query));
    matches.sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : a.name.localeCompare(b.name));
    results.replaceChildren();
    for (const item of matches) {
      const card = document.createElement('article'); card.className = 'card';
      const image = document.createElement('img'); image.src = item.image; image.alt = `${item.name} concept illustration`; image.loading = 'lazy'; image.width = 1600; image.height = 1200;
      const content = document.createElement('div'); content.className = 'card-content';
      const heading = document.createElement('h3'); heading.textContent = item.name;
      const description = document.createElement('p'); description.textContent = item.description;
      const price = document.createElement('p'); price.className = 'price'; price.textContent = `From R${item.price}`;
      const link = document.createElement('a'); link.className = 'btn secondary'; link.textContent = `Enquire: ${item.name}`; link.href = `enquiry.html?service=${encodeURIComponent(item.name)}`;
      content.append(heading, description, price, link); card.append(image, content); results.append(card);
    }
    document.querySelector('#result-count').textContent = matches.length ? `${matches.length} service${matches.length === 1 ? '' : 's'} found.` : 'No matching services. Try another search or category.';
  }
  if (results) {
    ['service-search', 'category-filter', 'service-sort'].forEach(id => document.getElementById(id).addEventListener('input', renderServices));
    renderServices();
    // Retain the original static menu for no-script readers; avoid showing it twice.
    document.querySelectorAll('.service-section').forEach(section => { section.hidden = true; });
    function filterFromAnchor() {
      const category = location.hash.slice(1);
      if (['nails', 'lashes', 'hair'].includes(category)) {
        document.querySelector('#category-filter').value = category;
        document.querySelector('#service-search').value = '';
        renderServices(); document.querySelector('#finder-title').scrollIntoView({ behavior });
      }
    }
    addEventListener('hashchange', filterFromAnchor); filterFromAnchor();
    if (location.protocol !== 'file:') fetch('data/services.json').then(response => {
      if (!response.ok) throw new Error('Catalogue unavailable');
      return response.json();
    }).then(data => { if (Array.isArray(data)) { catalogue = data; renderServices(); } }).catch(() => {
      // The bundled copy keeps the search functional when offline.
    });
  }
  function notify(element, text, error = false) {
    element.hidden = false; element.textContent = text; element.classList.toggle('error-message', error);
  }
  function validate(form) {
    let firstInvalid;
    form.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(field => {
      if (field.name === 'bot-field') return;
      field.setCustomValidity('');
      const value = field.value.trim();
      if (field.required && !value) field.setCustomValidity('Please complete this field.');
      else if (value && field.minLength > 0 && value.length < field.minLength) field.setCustomValidity(`Please enter at least ${field.minLength} characters.`);
      else if (field.type === 'tel' && value && (!/^[+\d\s()-]+$/.test(value) || value.replace(/\D/g, '').length < 10 || value.replace(/\D/g, '').length > 15)) field.setCustomValidity('Enter a phone number with 10–15 digits, for example 083 123 4567.');
      else if (field.type === 'date' && value) {
        const today = new Date(); today.setHours(0,0,0,0);
        const chosen = new Date(value + 'T00:00:00');
        if (!Number.isFinite(chosen.getTime()) || chosen < today) field.setCustomValidity('Choose today or a future date.');
      }
      else if (field.id === 'time' && value) {
        const date = form.elements.date.value;
        if (date && new Date(`${date}T${value}`) < new Date()) field.setCustomValidity('Choose a future appointment time.');
      }
      const valid = field.checkValidity();
      field.setAttribute('aria-invalid', String(!valid));
      const errorId = `${field.id}-error`;
      let error = document.getElementById(errorId);
      if (!error) { error = document.createElement('span'); error.id = errorId; error.className = 'field-error'; field.after(error); field.setAttribute('aria-describedby', errorId); }
      error.textContent = valid ? '' : field.validationMessage;
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    firstInvalid?.focus(); return !firstInvalid;
  }
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('input', event => {
      if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
      event.target.removeAttribute('aria-invalid');
      const error = document.getElementById(`${event.target.id}-error`); if (error) error.textContent = '';
      // Invalidate a prepared email or old estimate whenever the inputs change.
      document.querySelector(form.id === 'bookingForm' ? '#formMessage' : '#contact-status').hidden = true;
      if (form.id === 'bookingForm') document.querySelector('#send-enquiry').hidden = true;
      else document.querySelector('#email-draft').hidden = true;
    });
    form.addEventListener('reset', () => {
      form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
      form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
      form.querySelectorAll('input,select,textarea').forEach(el => el.setCustomValidity(''));
      const message = document.querySelector('#formMessage'); if (message) message.hidden = true;
      const send = document.querySelector('#send-enquiry'); if (send) send.hidden = true;
    });
  });
  async function submitOnline(form, status, button) {
    if (!validate(form)) return;
    if (!config.netlifyForms) { notify(status, 'Online submission is not enabled in this preview. Your details have not been sent. Use the email option on Contact, or try again after the Netlify setup is complete.', true); return; }
    button.disabled = true;
    notify(status, 'Submitting your request…');
    try {
      const response = await fetch(form.getAttribute('action'), {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(), signal: AbortSignal.timeout(15000)
      });
      if (!response.ok) throw new Error('Submission failed');
      notify(status, 'Your request was submitted for review. This does not confirm a booking or guarantee availability.');
    } catch { notify(status, 'We could not submit your request. Your entries are still here. Check your connection and try again, or use the contact email option.', true); }
    finally { button.disabled = false; }
  }
  const booking = document.querySelector('#bookingForm');
  if (booking) {
    const date = booking.elements.date;
    const today = new Date();
    date.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    const requested = new URLSearchParams(location.search).get('service');
    if (requested && [...booking.elements.service.options].some(option => option.value === requested)) booking.elements.service.value = requested;
    const status = document.querySelector('#formMessage');
    booking.addEventListener('submit', event => {
      event.preventDefault(); if (!validate(booking)) return;
      const service = catalogue.find(item => item.name === booking.elements.service.value);
      const cost = service ? `Indicative starting price for ${service.name}: R${service.price}. Final pricing depends on your requirements.` : `A tailored quote is required for ${booking.elements.service.value}; training fees and intake dates must be confirmed by the studio.`;
      notify(status, `${cost} Requested: ${date.value} at ${booking.elements.time.value}, ${booking.elements.location.value}. Availability has not been checked; this is not a reservation. Your details have not been sent.`);
      document.querySelector('#send-enquiry').hidden = false;
    });
    document.querySelector('#send-enquiry').addEventListener('click', event => submitOnline(booking, status, event.currentTarget));
  }
  const contact = document.querySelector('#contactForm');
  if (contact) {
    const status = document.querySelector('#contact-status');
    contact.addEventListener('submit', event => {
      event.preventDefault(); if (!validate(contact)) return;
      const data = new FormData(contact);
      const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nType: ${data.get('type')}\n\n${data.get('message')}`;
      const link = document.querySelector('#email-draft');
      link.href = `mailto:${encodeURIComponent(config.email || 'phillimonkatlego272@gmail.com')}?subject=${encodeURIComponent('Le Delicate: ' + data.get('type'))}&body=${encodeURIComponent(body)}`;
      link.hidden = false;
      notify(status, config.email?.endsWith('.example') ? 'Email draft prepared with a placeholder recipient. Replace the recipient with a real email address before sending. Nothing has been sent.' : 'Your email draft is ready. Open it below, review it in your email app and press Send. Nothing has been sent yet.');
    });
    document.querySelector('#send-contact').addEventListener('click', event => submitOnline(contact, status, event.currentTarget));
  }
  if (document.querySelector('#studio-map') && window.L) {
    const cities = { jhb: [-26.2041, 28.0473], plk: [-23.9045, 29.4689] };
    const map = L.map('studio-map', { scrollWheelZoom: false }).fitBounds(Object.values(cities), { padding: [35,35] });
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    for (const [key, coordinates] of Object.entries(cities)) L.marker(coordinates).addTo(map).bindPopup(`${key === 'jhb' ? 'Johannesburg' : 'Polokwane'} — proposed service area (city centre, not a studio address).`);
    document.querySelectorAll('[data-city]').forEach(button => button.addEventListener('click', () => map.setView(cities[button.dataset.city], 12, { animate: !reduceMotion })));
    tiles.on('tileerror', () => { document.querySelector('#map-status').classList.add('error-message'); });
  }
});
