/* דסי שטיין – תיק עבודות */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- מעבר בין תצוגות (דף הבית / חבילות) ---------- */
  function showView(id) {
    $$('.view').forEach(function (el) { el.classList.toggle('active', el.id === id); });
  }
  function syncView() { showView(location.hash === '#packages' ? 'packages' : 'home'); }
  window.addEventListener('hashchange', syncView);
  syncView();

  /* ---------- גלילה חלקה לאזורים (כפתורים עם data-scroll) ---------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-scroll]');
    if (!btn) return;
    var target = document.getElementById(btn.getAttribute('data-scroll'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- סרטונים: ניגון אחד בכל פעם ---------- */
  var videos = $$('video');
  function pauseAll(except) {
    videos.forEach(function (v) { if (v !== except) v.pause(); });
  }
  videos.forEach(function (v) {
    v.addEventListener('play', function () { pauseAll(v); });

    // אם סרטון לא נטען – הודעה וקישור לפתיחה בחלון חדש
    v.addEventListener('error', function () {
      if (v.parentNode.querySelector('.verr')) return;
      var box = document.createElement('div');
      box.className = 'verr';
      box.innerHTML = '<span>הסרטון לא נטען</span>' +
        '<a target="_blank" rel="noopener" href="' + v.getAttribute('src') + '">לצפייה בחלון חדש</a>';
      v.parentNode.appendChild(box);
    });
  });

  /* ---------- לשוניות: פרינט / וידאו ---------- */
  var tabs = $$('.tab');
  var panes = { static: document.getElementById('static'), video: document.getElementById('video') };

  function pickTab(key) {
    tabs.forEach(function (t) { t.classList.toggle('on', t.dataset.t === key); });
    Object.keys(panes).forEach(function (id) {
      var on = id === key;
      panes[id].hidden = !on;
      panes[id].style.display = on ? 'block' : 'none';
    });
    pauseAll();
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { pickTab(t.dataset.t); });
  });
  pickTab('static');

  /* ---------- תצוגה מוגדלת למודעות הפרינט ---------- */
  var lightbox = document.getElementById('lb');
  var lightboxImg = $('img', lightbox);

  $$('.shot').forEach(function (shot) {
    shot.addEventListener('click', function () {
      var img = $('img', shot);
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', function () { lightbox.classList.remove('open'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
})();
