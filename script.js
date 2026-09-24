/* Dillo's Pizza — site behaviour (vanilla JS, no dependencies) */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* year */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* header shadow on scroll */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* mobile navigation */
  var toggle = document.querySelector('[data-nav-toggle]');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    var close = function () { toggle.setAttribute('aria-expanded', 'false'); list.classList.remove('is-open'); };
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      list.classList.toggle('is-open', !open);
    });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); toggle.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 1080) close(); });
  }

  /* hero slider: subtle fade, slow image drift, dots + arrows, pauses on hover/focus */
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var texts = slider.querySelectorAll('.slide-text');
    var medias = slider.querySelectorAll('.slide-media');
    var dots = slider.querySelectorAll('[data-dot]');
    var i = 0, timer = null, DELAY = 7000;
    var go = function (n) {
      i = (n + medias.length) % medias.length;
      [texts, medias].forEach(function (set) {
        set.forEach(function (el, k) {
          var on = k === i;
          el.classList.toggle('is-active', on);
          if (on) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden', 'true');
        });
      });
      dots.forEach(function (d, k) {
        d.classList.toggle('is-active', k === i);
        if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
    };
    var play = function () { if (!reduce) { stop(); timer = setInterval(function () { go(i + 1); }, DELAY); } };
    var stop = function () { if (timer) clearInterval(timer); timer = null; };
    dots.forEach(function (d) { d.addEventListener('click', function () { go(+d.dataset.dot); play(); }); });
    var prev = slider.querySelector('[data-prev]'), next = slider.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { go(i - 1); play(); });
    if (next) next.addEventListener('click', function () { go(i + 1); play(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', play);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', play);
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : play(); });
    play();
  }

  /* menu page: highlight current category in the sticky bar */
  var nav = document.querySelector('[data-menu-nav]');
  if (nav && 'IntersectionObserver' in window) {
    var links = {};
    nav.querySelectorAll('[data-spy]').forEach(function (a) { links[a.dataset.spy] = a; });
    var setActive = function (id) {
      Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === id); });
      var a = links[id];
      if (a) {
        var ul = a.parentNode.parentNode;
        var left = a.offsetLeft - ul.clientWidth / 2 + a.clientWidth / 2;
        ul.scrollTo({ left: left, behavior: reduce ? 'auto' : 'smooth' });
      }
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
})();
