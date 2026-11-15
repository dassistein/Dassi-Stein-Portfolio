# דסי שטיין – תיק עבודות

אתר סטטי (HTML + CSS + JS), בלי תלות בשרת מיוחד.

## מבנה התיקייה
- `index.html` – מבנה הדף
- `css/style.css` – העיצוב
- `js/script.js` – לשוניות, תצוגה מוגדלת, ניגון סרטונים
- `images/dassi.png` – "דסי" בכתב היד
- `images/works/` – מודעות הפרינט (`print-01.jpg` …)
- `images/posters/` – תמונות פתיחה לסרטונים
- `videos/` – הסרטונים (`video-01.mp4` …)

## הרצה
פשוט לפתוח את `index.html` בדפדפן. כדי לפרסם – להעלות את כל התיקייה כמו שהיא
(Netlify, Vercel, GitHub Pages, או אחסון רגיל). הפונטים נטענים מ-Google Fonts, ולכן נדרש חיבור לאינטרנט.

## הוספת עבודה
- **פרינט:** להעתיק את התמונה ל-`images/works/` ולהוסיף ב-`index.html`, בתוך `<div id="static">`:
  `<button class="work shot" aria-label="שם"><img src="images/works/NAME.jpg" alt="שם" width="W" height="H" loading="lazy"></button>`
- **וידאו:** להעתיק את הקובץ ל-`videos/` ותמונת פתיחה ל-`images/posters/`, ולהוסיף בתוך `<div id="video">`:
  `<figure class="work vid"><video controls preload="none" playsinline poster="images/posters/NAME.jpg" src="videos/NAME.mp4" aria-label="שם" style="aspect-ratio:W/H"></video></figure>`
