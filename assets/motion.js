/* Calm motion for targetsagency.com. No dependencies. The page is complete without this file,
   and nothing here runs when the visitor prefers reduced motion. */
(function () {
  'use strict';
  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mq || mq.matches) return;

  /* 1. Hero title: words fade in from a soft blur (words, never letters, so Arabic stays joined). */
  function blurTitle() {
    var h = document.querySelector('.hero h1, .phero h1, .post-head h1');
    if (!h) return;
    var k = 0, walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT), nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (t) {
      var parts = t.nodeValue.split(/(\s+)/), frag = document.createDocumentFragment();
      parts.forEach(function (w) {
        if (!w) return;
        if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
        var sp = document.createElement('span');
        sp.className = 'mv-w';
        sp.style.transitionDelay = (0.1 + k++ * 0.08) + 's';
        sp.textContent = w;
        frag.appendChild(sp);
      });
      t.parentNode.replaceChild(frag, t);
    });
    requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.add('mv-words-in'); }); });
  }

  /* 2. The click-to-sale path draws itself once when it scrolls into view. */
  function path() {
    var el = document.querySelector('.targets');
    if (!el || !('IntersectionObserver' in window)) return;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (el.getBoundingClientRect().top < vh * 0.8) return; /* already on screen: leave it as is */
    el.classList.add('mv-path');
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      el.classList.add('is-in');
    }, { rootMargin: '0px 0px -18% 0px' });
    io.observe(el);
  }

  /* 3. Numbers count up once when they come into view (same final value and suffix). */
  function countUp() {
    if (!('IntersectionObserver' in window)) return;
    document.querySelectorAll('.exp .big').forEach(function (el) {
      var m = /^(\D*)(\d+)(\D*)$/.exec(el.textContent.trim());
      if (!m) return;
      var end = +m[2], pre = m[1], suf = m[3];
      el.textContent = pre + '0' + suf;
      var io = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return;
        io.disconnect();
        var t0 = performance.now(), dur = 1200;
        (function step(t) {
          var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + Math.round(end * e) + suf;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      }, { threshold: 0.4 });
      io.observe(el);
    });
  }

  /* 4. Smooth wheel scrolling on desktop (Lenis, loaded only when motion is allowed). */
  function smooth() {
    if (window.matchMedia('(pointer: coarse)').matches) return; /* keep native touch scroll on phones */
    var sc = document.createElement('script');
    sc.src = 'https://cdn.jsdelivr.net/npm/lenis@1.3.23/dist/lenis.min.js';
    sc.async = true;
    sc.onload = function () {
      if (!window.Lenis || mq.matches) return;
      var lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, autoRaf: true, anchors: { offset: -100 } });
      mq.addEventListener && mq.addEventListener('change', function () { if (mq.matches) lenis.destroy(); });
    };
    document.head.appendChild(sc);
  }

  /* 5. The auto-reply example plays itself like a short clip while it is on screen, then loops.
     Without JS, or with reduced motion, the whole conversation is simply shown. */
  function demo() {
    var el = document.querySelector('.demo');
    if (!el || !('IntersectionObserver' in window)) return;
    var parts = el.querySelectorAll('.dm, .demo-alert'), timers = [], playing = false;
    if (parts.length < 4) return;
    el.classList.add('mv-demo');
    function at(ms, fn) { timers.push(setTimeout(fn, ms)); }
    function reset() {
      timers.forEach(clearTimeout); timers = [];
      parts.forEach(function (p) { p.classList.remove('is-on', 'is-typing'); });
    }
    function play() {
      reset();
      at(500, function () { parts[0].classList.add('is-on'); });
      at(1500, function () { parts[1].classList.add('is-on', 'is-typing'); });
      at(2900, function () { parts[1].classList.remove('is-typing'); });
      at(4700, function () { parts[2].classList.add('is-on'); });
      at(5900, function () { parts[3].classList.add('is-on'); });
      at(10500, function () { parts.forEach(function (p) { p.classList.remove('is-on'); }); });
      at(11300, play);
    }
    new IntersectionObserver(function (es) {
      var vis = es[0].isIntersecting;
      if (vis && !playing) { playing = true; play(); }
      else if (!vis && playing) { playing = false; reset(); }
    }, { threshold: 0.35 }).observe(el);
  }

  function start() {
    blurTitle();
    path();
    countUp();
    demo();
    smooth();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

/* Mobile section links: bring the current page's link into view */
document.addEventListener('DOMContentLoaded',function(){var a=document.querySelector('.mnav a[aria-current="page"]');if(a&&a.parentNode.scrollWidth>a.parentNode.clientWidth){a.parentNode.scrollLeft+=a.getBoundingClientRect().left-a.parentNode.getBoundingClientRect().left-16;}});

/* Floating WhatsApp button: step aside while a section with its own WhatsApp buttons is on screen
   (the page hero and the closing band), so it never covers them. Without JS it simply stays visible. */
document.addEventListener('DOMContentLoaded',function(){var f=document.querySelector('.wa-fab');if(!f||!('IntersectionObserver' in window))return;var on=new Set();var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)on.add(e.target);else on.delete(e.target);});f.classList.toggle('is-away',on.size>0);});document.querySelectorAll('.hero,.phero,.post-head,main>section.cta,.post-cta').forEach(function(el){io.observe(el);});});
