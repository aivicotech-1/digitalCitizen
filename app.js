(() => {
  'use strict';
  const activities = window.DIGITAL_CITIZEN_ACTIVITIES || [];
  const $ = selector => document.querySelector(selector);
  const grid = $('#activity-grid');
  const search = $('#activity-search');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gradeCopy = {
    2: ['Grade 2 · The Explorers', 'Big discoveries start with small, everyday choices.'],
    3: ['Grade 3 · The Protectors', 'Get curious about privacy, sharing and your online identity.'],
    4: ['Grade 4 · The Connectors', 'Practise kind connections and build your digital defences.'],
    5: ['Grade 5 · The Detectives', 'Investigate the clues and put your cyber skills into action.']
  };
  const gradeParam = new URLSearchParams(window.location.search).get('grade');
  const requestedGrade = Number(gradeParam);
  const singleGradeMode = Boolean(gradeParam && gradeCopy[requestedGrade]);
  let selectedGrade = gradeCopy[requestedGrade] ? requestedGrade : 2;
  const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const fileUrl = activity => activity.path.split('/').map(encodeURIComponent).join('/');

  // Reveal once, just before entering the viewport. Keep native scrolling responsive.
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) revealElement(entry.target);
    });
  }, { threshold: 0.01, rootMargin: '0px 0px 36px 0px' }) : null;

  function revealElement(element) {
    element.classList.remove('reveal-pending');
    revealObserver?.unobserve(element);
  }

  function watchReveals(elements) {
    elements.forEach(element => {
      element.classList.add('reveal');
      const columns = getComputedStyle(element.parentElement).gridTemplateColumns.split(' ').length;
      const index = Array.prototype.indexOf.call(element.parentElement.children, element);
      element.style.setProperty('--reveal-delay', `${Math.min(index % columns, 3) * 30}ms`);
      if (!revealObserver || motion.matches) return;
      element.classList.add('reveal-pending');
      revealObserver.observe(element);
    });
  }

  document.addEventListener('focusin', event => {
    const element = event.target.closest('.reveal-pending');
    if (element) revealElement(element);
  });
  motion.addEventListener('change', () => {
    if (motion.matches) document.querySelectorAll('.reveal-pending').forEach(revealElement);
  });

  function render() {
    if (!grid || !search) return;
    const query = search.value.trim().toLocaleLowerCase();
    const allInGrade = activities.filter(activity => activity.grade === selectedGrade);
    const matching = allInGrade.filter(activity => `${activity.title} ${activity.topic} ${activity.type} ${activity.description}`.toLocaleLowerCase().includes(query));
    $('#library-eyebrow').textContent = gradeCopy[selectedGrade][0];
    $('#library-title').innerHTML = `Your Grade ${selectedGrade} activities<span class="count-badge" id="result-count">${matching.length}</span>`;
    $('#library-description').textContent = gradeCopy[selectedGrade][1];
    $('#result-status').textContent = query ? `${matching.length} of ${allInGrade.length} activities found` : `Showing ${allInGrade.length} activities`;
    $('#clear-search').hidden = !search.value;
    $('#empty-state').hidden = matching.length > 0;
    search.setAttribute('aria-label', `Search Grade ${selectedGrade} activities`);
    document.title = `Grade ${selectedGrade} Activities — Skill2Success`;
    grid.querySelectorAll('.reveal-pending').forEach(revealElement);
    grid.innerHTML = matching.map(activity => `<article class="activity-card" style="--cover:${esc(activity.color)}">
      <div class="activity-cover"><span class="activity-type">${esc(activity.type)}</span><svg aria-hidden="true" viewBox="0 0 320 220"><use href="#art-${esc(activity.art)}"/></svg></div>
      <div class="activity-content"><span class="activity-topic">${esc(activity.topic)}</span><h3>${esc(activity.title)}</h3><p>${esc(activity.description)}</p><div class="activity-action"><span>Grade ${activity.grade}</span><a class="start-activity" href="${fileUrl(activity)}" target="_blank" rel="noopener" data-activity="${esc(activity.id)}" aria-label="Start ${esc(activity.title)} (opens in new tab)">Start activity <svg class="icon" aria-hidden="true"><use href="#icon-play"/></svg></a></div></div>
    </article>`).join('');
    watchReveals(grid.querySelectorAll('.activity-card'));
  }

  function selectGrade(grade, scroll = false) {
    if (!gradeCopy[grade]) return;
    selectedGrade = grade;
    if (search) search.value = '';
    document.querySelectorAll('[data-grade]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.grade) === grade)));
    const url = new URL(window.location.href);
    url.searchParams.set('grade', String(grade));
    window.history.replaceState({}, '', url);
    render();
    if (scroll && $('#activities')) $('#activities').scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth', block: 'start' });
  }

  if (grid && search) {
    if (singleGradeMode) {
      $('#all-grades-heading')?.setAttribute('hidden', '');
      $('#grade-switcher')?.setAttribute('hidden', '');
      $('#activities')?.classList.add('single-grade');
    }
    document.querySelectorAll('[data-grade]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.grade) === selectedGrade));
      button.addEventListener('click', () => selectGrade(Number(button.dataset.grade)));
    });
    search.addEventListener('input', render);
    function resetSearch() { search.value = ''; render(); search.focus(); }
    $('#clear-search').addEventListener('click', resetSearch);
    $('#reset-search').addEventListener('click', resetSearch);
  }

  document.querySelectorAll('[data-count]').forEach(element => {
    const count = activities.filter(activity => activity.grade === Number(element.dataset.count)).length;
    element.textContent = `${count} ${count === 1 ? 'activity' : 'activities'}`;
  });

  const menuButton = $('.menu-toggle');
  const menu = $('#mobile-nav');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Close menu' : 'Open menu');
    menu.hidden = !opened;
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); } });
  window.matchMedia('(min-width: 561px)').addEventListener('change', closeMenu);

  // Native scrolling stays in charge; motion is only a decorative enhancement.
  const hero = $('.hero');
  const gallery = $('.hero-gallery');
  const header = $('.site-header');
  let scheduled = false;
  function updateScroll() {
    scheduled = false;
    header.classList.toggle('scrolled', window.scrollY > 12);
    if (hero && gallery && !motion.matches && window.innerWidth > 560) {
      const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
      gallery.style.setProperty('--spread', progress.toFixed(3));
      gallery.style.setProperty('--lift', `${(-progress * 24).toFixed(1)}px`);
    }
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, { passive: true });
  if (!document.body.classList.contains('activities-page')) {
    watchReveals(document.querySelectorAll('.reveal, .grade-card, .library-heading, .library-meta, .library-note, .footer-top > *, .footer-bottom'));
  }
  $('#year').textContent = new Date().getFullYear();
  render();
  updateScroll();
})();
