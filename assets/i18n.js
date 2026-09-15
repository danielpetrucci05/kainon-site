(() => {
  const nodes = {
    '#servicos .eyebrow span': 'services_eyebrow',
    '#servicos .card:nth-child(1) h3': 'systems',
    '#servicos .card:nth-child(1) p': 'systems_copy',
    '#servicos .card:nth-child(2) h3': 'apps',
    '#servicos .card:nth-child(2) p': 'apps_copy',
    '#servicos .card:nth-child(3) h3': 'sites',
    '#servicos .card:nth-child(3) p': 'sites_copy',
    '#servicos .card:nth-child(4) h3': 'automation',
    '#servicos .card:nth-child(4) p': 'automation_copy',
    '#servicos .services-cta a': 'services_link',
    '#processo .eyebrow span': 'process_eyebrow',
    '#processo .step:nth-child(1) h3': 'step_1',
    '#processo .step:nth-child(2) h3': 'step_2',
    '#processo .step:nth-child(3) h3': 'step_3',
    '#processo .step:nth-child(4) h3': 'step_4',
    '#sobre .eyebrow span': 'about_eyebrow',
    '#sobre .about-grid > div:nth-child(1) p': 'about_origin',
    '#sobre .about-grid > div:nth-child(2) p': 'about_today',
    '#sobre .about-grid > div:nth-child(2) a': 'about_link',
    '#valores .eyebrow span': 'values_eyebrow',
    '#valores .value:nth-child(1) h3': 'innovation',
    '#valores .value:nth-child(1) p': 'innovation_copy',
    '#valores .value:nth-child(2) h3': 'clarity',
    '#valores .value:nth-child(2) p': 'clarity_copy',
    '#valores .value:nth-child(3) h3': 'responsibility',
    '#valores .value:nth-child(3) p': 'responsibility_copy',
    '#valores .value:nth-child(4) h3': 'results',
    '#valores .value:nth-child(4) p': 'results_copy',
    '#contato .eyebrow span': 'contact_eyebrow',
    '#contato p': 'contact_copy',
    '#contato a': 'contact_link',
    '.footer > .micro': 'footer_slogan',
    '.footer .foot-grid > div:nth-child(1) p': 'footer_intro',
    '.footer .foot-grid > div:nth-child(2) h4': 'footer_nav_title',
    '.footer .foot-grid > div:nth-child(2) a:nth-of-type(2)': 'nav_products',
    '.footer .foot-grid > div:nth-child(2) a:nth-of-type(3)': 'nav_services',
    '.footer .foot-grid > div:nth-child(2) a:nth-of-type(4)': 'nav_contact',
    '.footer .foot-grid > div:nth-child(3) h4:nth-of-type(1)': 'footer_contact_title',
    '.footer .foot-grid > div:nth-child(3) h4:nth-of-type(2)': 'footer_follow_title',
    '.social-dropdown a:nth-child(1)': 'tiktok_brazil',
    '.social-dropdown a:nth-child(2)': 'tiktok_north_america',
    '.social-dropdown a:nth-child(3)': 'tiktok_europe'
  };
  const htmlNodes = {
    '#servicos .services-cta a': 'services_link',
    '#processo .step:nth-child(1) p': 'step_1_copy',
    '#processo .step:nth-child(2) p': 'step_2_copy',
    '#processo .step:nth-child(3) p': 'step_3_copy',
    '#processo .step:nth-child(4) p': 'step_4_copy',
    '#sobre .about-grid > div:nth-child(1) h2': 'about_title',
    '#sobre .keyword': 'about_keywords',
    '#contato h2': 'contact_title',
    '.footer .foot-grid > div:nth-child(4)': 'footer_keywords'
  };
  const labels = {
    '.menu-btn': 'menu_open',
    '#servicos .card:nth-child(2) .iconbox': 'phone_icon',
    '#servicos .card:nth-child(3) .iconbox': 'globe_icon',
    '#servicos .card:nth-child(4) .iconbox': 'gear_icon',
    '#processo .step:nth-child(1) .step-icon': 'first_step',
    '#processo .step:nth-child(2) .step-icon': 'second_step',
    '#processo .step:nth-child(3) .step-icon': 'third_step',
    '#processo .step:nth-child(4) .step-icon': 'fourth_step',
    '.footer .brandmark': 'brand_symbol',
    '.footer .socials': 'social_links',
    '.social-toggle': 'tiktok_region'
  };
  const altLabels = {
    '#valores .value:nth-child(1) img': 'innovation_icon',
    '#valores .value:nth-child(2) img': 'clarity_icon',
    '#valores .value:nth-child(3) img': 'responsibility_icon',
    '#valores .value:nth-child(4) img': 'results_icon'
  };
  for (const [selector, key] of Object.entries(nodes)) {
    const el = document.querySelector(selector);
    if (el && !htmlNodes[selector]) el.dataset.i18n = key;
  }
  for (const [selector, key] of Object.entries(htmlNodes)) {
    const el = document.querySelector(selector);
    if (el) el.dataset.i18nHtml = key;
  }
  for (const [selector, key] of Object.entries(labels)) {
    const el = document.querySelector(selector);
    if (el) el.dataset.i18nAria = key;
  }
  for (const [selector, key] of Object.entries(altLabels)) {
    const el = document.querySelector(selector);
    if (el) el.dataset.i18nAlt = key;
  }

  const en = {
    brand_home: 'KAINON - home', brand_symbol: 'KAINON K symbol', main_nav: 'Main navigation', language: 'Language', menu_open: 'Open menu', menu_close: 'Close menu', social_links: 'Social media',
    tiktok_region: 'TikTok — choose a region', tiktok_brazil: 'Brazil', tiktok_north_america: 'North America', tiktok_europe: 'Europe',
    nav_products: 'Products', nav_services: 'Services', nav_process: 'How it works', nav_contact: 'Contact', nav_talk: 'Talk to us <span>→</span>',
    hero_micro: 'Software development', hero_sub: 'Technology for an organized future',
    hero_title: 'We create solutions that help businesses stay organized,<br>turn ideas into reality and build new products.',
    hero_lead: 'At KAINON, possibilities take shape, projects become reality and the future begins with code.',
    hero_products: 'Explore our products →', hero_idea: 'Tell us about your idea',
    hero_aside_title: 'IDEAS<br>TODAY.<br>IMPACT<br>TOMORROW.',
    hero_aside_copy: 'From small workflows to large systems, we turn real challenges into everyday practicality.',
    hero_aside_micro: 'Kainon // organized future',
    products_eyebrow: 'Our products', products_title: 'Technology that creates <span class="gradient">real impact.</span>',
    clinic_logo: 'Clinic Hand logo — Healthcare closer to you', clinic_micro: 'Kainon product · Healthcare', clinic_subtitle: 'Healthcare closer to you.',
    clinic_copy: 'A platform connecting professionals, clinics and patients through a more organized experience.',
    clinic_feature_1: 'Clinical workflow management', clinic_feature_2: 'An integrated patient journey', clinic_feature_3: 'Technology for healthcare professionals', clinic_link: 'Explore Clinic Hand →',
    services_eyebrow: 'What we build for you', systems: 'Systems', systems_copy: 'Platforms and tools built to support your business operations.',
    apps: 'Apps', apps_copy: 'Digital products for iOS, Android and the web, from concept to launch.',
    sites: 'Websites', sites_copy: 'Digital experiences that showcase brands, products and services.',
    automation: 'Automation & Integration', automation_copy: 'We connect systems, automate processes and improve efficiency.', services_link: 'Learn more <span>→</span>',
    process_eyebrow: 'How we work', step_1: 'Understand', step_1_copy: 'The challenge, idea<br>and goal.',
    step_2: 'Structure', step_2_copy: 'Product, experience<br>and technology.',
    step_3: 'Develop', step_3_copy: 'Building, testing<br>and improving.',
    step_4: 'Deliver', step_4_copy: 'A solution ready<br>to grow.',
    about_eyebrow: 'About Kainon', about_title: 'More than technology.<br><span class="gradient">A purpose.</span>',
    about_origin: 'KAINON was born from the needs of professionals working in fields where organization, precision and efficiency are essential. That challenge inspired a broader vision: to develop technologies that simplify processes, connect people and turn complexity into organized solutions.',
    about_today: 'Today, KAINON develops its own products and projects for companies seeking to improve their processes, increase operational efficiency and build more organized, consistent structures ready to grow.',
    about_link: 'Discover Kainon　→', about_keywords: 'IDEA<br>PRODUCT<br>ORGANIZATION<br>IMPACT',
    values_eyebrow: 'Our values', innovation: 'INNOVATION', innovation_copy: 'We question the ordinary.',
    clarity: 'CLARITY', clarity_copy: 'Simple, honest communication.',
    responsibility: 'RESPONSIBILITY', responsibility_copy: 'Commitment in every delivery.',
    results: 'RESULTS', results_copy: 'Focus on what truly matters.',
    contact_eyebrow: 'Shall we build together?',
    contact_title: 'Have an idea?<br><span class="gradient">Let’s turn it</span> into technology.',
    contact_copy: 'Whether it is a new product, a system, an app or a custom project, we are ready to listen and build with you.',
    contact_link: 'Tell us about your idea　→',
    footer_slogan: 'Ideas today. Impact tomorrow.',
    footer_intro: 'Turning ideas into real solutions for a simpler, more efficient and more human world.',
    footer_nav_title: 'NAVIGATION', footer_contact_title: 'CONTACT', footer_follow_title: 'FOLLOW KAINON',
    footer_keywords: 'TECHNOLOGY<br>PEOPLE<br>SOLUTIONS<br>IMPACT',
    phone_icon: 'Phone', globe_icon: 'Globe', gear_icon: 'Gear',
    first_step: 'First step', second_step: 'Second step', third_step: 'Third step', fourth_step: 'Fourth step',
    innovation_icon: 'Light bulb with sprout and gear', clarity_icon: 'Speech bubbles with a checkmark',
    responsibility_icon: 'Hand holding a globe', results_icon: 'Hand with bars and an upward arrow'
  };

  const elements = [...document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-aria], [data-i18n-alt]')];
  const original = new Map(elements.map(el => [el, {
    text: el.textContent, html: el.innerHTML, aria: el.getAttribute('aria-label'), alt: el.getAttribute('alt')
  }]));
  const initialTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const initialDescription = description?.content;
  const buttons = [...document.querySelectorAll('.lang-switch button')];
  const menu = document.querySelector('.menu-btn');
  let current = 'pt';
  function setLanguage(lang, updateAddress = false) {
    current = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = current === 'en' ? 'en' : 'pt-BR';
    for (const el of elements) {
      const saved = original.get(el);
      if (el.dataset.i18nHtml) el.innerHTML = current === 'en' ? en[el.dataset.i18nHtml] : saved.html;
      else if (el.dataset.i18n) el.textContent = current === 'en' ? en[el.dataset.i18n] : saved.text;
      if (el.dataset.i18nAria) el.setAttribute('aria-label', current === 'en' ? en[el.dataset.i18nAria] : saved.aria);
      if (el.dataset.i18nAlt) el.setAttribute('alt', current === 'en' ? en[el.dataset.i18nAlt] : saved.alt);
    }
    document.title = current === 'en' ? 'KAINON — Technology for an organized future' : initialTitle;
    if (description) description.content = current === 'en' ? 'KAINON — technology for an organized future.' : initialDescription;
    if (menu) menu.setAttribute('aria-label', menu.getAttribute('aria-expanded') === 'true' ? (current === 'en' ? en.menu_close : 'Fechar menu') : (current === 'en' ? en.menu_open : 'Abrir menu'));
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === current)));
    try { localStorage.setItem('kainon-language', current); } catch (_) {}
    if (updateAddress) {
      const url = new URL(location.href);
      url.searchParams.set('lang', current);
      history.replaceState(null, '', url);
    }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang, true)));
  menu?.addEventListener('click', () => queueMicrotask(() => menu.setAttribute('aria-label', menu.getAttribute('aria-expanded') === 'true' ? (current === 'en' ? en.menu_close : 'Fechar menu') : (current === 'en' ? en.menu_open : 'Abrir menu'))));
  let savedLanguage = 'pt';
  try { savedLanguage = localStorage.getItem('kainon-language') || 'pt'; } catch (_) {}
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(requestedLanguage === 'en' || requestedLanguage === 'pt' ? requestedLanguage : savedLanguage);
})();
