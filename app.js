/* =================================================================
   SMG — Bertazzoni Pro Series LCD landing page
   Vanilla JS. No dependencies, no build step.

   ▸ TO REUSE THIS TEMPLATE FOR ANOTHER PRODUCT:
     edit the PRODUCT object below. Everything data-driven on the
     page (gallery, price, finishes, functions, specs, included,
     FAQs) renders from it. Section copy lives in index.html.
   ================================================================= */

const PRODUCT = {
  brand: "SMG",
  name: "Bertazzoni Professional Series 60cm Built-In Pyrolytic Oven",
  series: "Professional Series",
  phone: "+440000000000",            // <- tel: link (placeholder)
  currency: "£",

  // Finishes. Each finish carries its own price, model code and gallery.
  // Images are self-hosted in /images (sourced from the product listings).
  // Swap these files for your own product photography to reuse the template.
  finishes: [
    {
      id: "stainless",
      label: "Stainless Steel",
      model: "F6011PROPLX",
      price: 845.06,
      swatch: "linear-gradient(135deg,#e9e9ea,#b9bbbd 55%,#8f9193)",
      images: [
        { src: "images/oven-stainless.jpg", alt: "Bertazzoni Pro Series stainless steel oven, front view" },
        { src: "images/oven-detail.jpg", alt: "Close-up of the oven door, handle and LCD display" },
        { src: "images/oven-builtin.jpg", alt: "Oven built into a fitted kitchen run" },
        { src: "images/oven-stainless-angle.jpg", alt: "Bertazzoni Pro Series stainless oven, angled view" }
      ]
    },
    {
      id: "carbonio",
      label: "Carbonio (Matt Black)",
      model: "F6011PROPLN",
      price: 939.06,
      swatch: "linear-gradient(135deg,#3a3a3c,#222224 55%,#161617)",
      images: [
        { src: "images/oven-carbonio.jpg", alt: "Bertazzoni Pro Series Carbonio matt black oven, front view" },
        { src: "images/oven-detail.jpg", alt: "Close-up of the oven door, handle and LCD display" },
        { src: "images/oven-builtin.jpg", alt: "Oven built into a fitted kitchen run" }
      ]
    }
  ],

  // Shared images referenced by [data-img] slots around the page.
  images: {
    lifestyle: "images/oven-builtin.jpg",
    builtin:   "images/oven-stainless.jpg",
    detail:    "images/oven-detail.jpg"
  },

  // Interactive LCD preview. Names are the real function set; temps are
  // typical illustrative starting points (clearly labelled on the page).
  functions: [
    { name: "Convection Bake", temp: 180, hint: "Fan-assisted, even heat on every shelf" },
    { name: "Bake",            temp: 200, hint: "Classic top + bottom heat" },
    { name: "Turbo",           temp: 190, hint: "Fast, all-round roasting heat" },
    { name: "Convection Grill", temp: 220, hint: "Fan + grill for crisp finishes" },
    { name: "Grill",           temp: 240, hint: "Infrared electric grill element" },
    { name: "Fast Preheat",    temp: 200, hint: "Brings the cavity up to temperature quickly" },
    { name: "Upper Bake",      temp: 170, hint: "Top element for browning and gratins" },
    { name: "Bottom Bake",     temp: 160, hint: "Base heat for pastry and pizza" },
    { name: "Convection",      temp: 175, hint: "Pure fan circulation" },
    { name: "Defrost",         temp: 40,  hint: "Gentle thawing, no cooking" },
    { name: "Proofing",        temp: 35,  hint: "Warm, steady environment for dough" }
  ],

  // What's included (editable).
  included: [
    { item: "Pro Series LCD 60cm oven", note: "Single built-in unit" },
    { item: "Heavy-duty flat shelf", note: "1 × standard rack" },
    { item: "Heavy-duty shaped shelf", note: "1 × roasting rack" },
    { item: "Enamelled tray", note: "1 × bake / drip tray" },
    { item: "Food temperature probe", note: "Cook to a target temp" },
    { item: "Double oven lights", note: "Fitted as standard" },
    { item: "Removable inner door glass", note: "For easy cleaning" },
    { item: "User manual & documents", note: "Install + manufacturer docs" }
  ],

  // Specification accordion groups. Use "req:true" for "on request"
  // values so we never invent figures.
  specs: [
    { group: "Main features", open: true, rows: [
      ["Cooking functions", "11 + special menu"],
      ["Oven type", "Electric, built-in single"],
      ["Display", "LCD"],
      ["Shelf levels", "5"],
      ["Interior lights", "Double"]
    ]},
    { group: "Performance", rows: [
      ["Usable capacity", "76 litres"],
      ["Grill", "Electric infrared"],
      ["Food probe", "Included"],
      ["Special functions", "Eco · Sabbath · Proofing · Defrost · Keep warm · Dehydrate"]
    ]},
    { group: "Cleaning & safety", rows: [
      ["Cleaning system", "Pyrolytic self-clean"],
      ["Door", "Quadruple-glazed, cool-touch"],
      ["Door action", "Soft open-and-close"],
      ["Inner glass", "Removable for cleaning"]
    ]},
    { group: "Dimensions", rows: [
      ["Appliance (H×W×D)", "597 × 595 × 550 mm"],
      ["Built-in housing", "Standard 60cm tall unit"],
      ["Cabinet cut-out", "__REQ__"],
      ["Net weight", "__REQ__"]
    ]},
    { group: "Power & energy", rows: [
      ["Energy class", "A"],
      ["Connected load", "2,800 W (2.8 kW)"],
      ["Voltage / frequency", "220–240 V · 50/60 Hz"],
      ["Supply", "Hardwired — fitting by a qualified electrician"]
    ]},
    { group: "Warranty & support", rows: [
      ["Warranty", "2 years parts & labour"],
      ["Before you buy", "Call-to-order fit & spec advice"],
      ["Aftercare", "UK support — details on request"]
    ]}
  ],

  faqs: [
    ["Will this fit a standard 60cm built-in unit?",
     "Yes — it's built for a standard 60cm tall housing and measures 597 × 595 × 550 mm (H×W×D). If you're replacing an existing oven, send us your cut-out measurements and we'll confirm the fit before you order."],
    ["Can I call before placing an order?",
     "Absolutely, and we'd encourage it for a built-in appliance. Call us and we'll check the finish, fit and power supply with you so there are no surprises on delivery."],
    ["Do you offer delivery?",
     "Yes, UK delivery is available and booked around you. Exact lead times and any installation options are shown at checkout — or just ask when you call."],
    ["Can I order online?",
     "Yes. Choose your finish, add it to the cart and check out securely. Prefer to talk it through first? Call to order and we'll place it for you."],
    ["What finishes are available?",
     "Two: Stainless Steel (F6011PROPLX) and Carbonio matt black (F6011PROPLN). The oven is identical inside — only the front finish changes."],
    ["Does it have pyrolytic self-cleaning?",
     "Yes. The pyrolytic cycle heats the cavity to break down grease and food residue into a fine ash you simply wipe away — no chemical oven cleaners needed."],
    ["What is the oven capacity?",
     "76 litres of usable space across 5 shelf levels — enough to cook several dishes at once or fit a large roasting tray comfortably."],
    ["What if I need help choosing?",
     "That's what we're here for. Tell us about your kitchen and how you cook, and we'll help you decide whether this is the right oven — no pressure to buy."],
    ["What should I check before ordering?",
     "Three things: your cabinet cut-out size, that you have (or can arrange) a suitable hardwired electrical supply, and which finish suits your kitchen. We'll happily run through all three with you on the phone."]
  ]
};

/* ============================================================= */
/* Helpers                                                       */
/* ============================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Swap a broken external image for a tasteful labelled placeholder.
function attachFallback(img, label) {
  img.addEventListener("error", () => {
    if (img.dataset.fellback) return;
    img.dataset.fellback = "1";
    const ph = document.createElement("div");
    ph.className = "img-ph";
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", img.alt || label || "Product image placeholder");
    ph.textContent = "Add product image";
    ph.style.cssText = "width:100%;height:100%;min-height:120px;display:flex;align-items:center;justify-content:center;background:repeating-linear-gradient(135deg,#26221a,#26221a 12px,#211d15 12px,#211d15 24px);color:#b7b0a2;font-family:var(--ff-mono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;";
    img.replaceWith(ph);
  }, { once: true });
}

let state = { finish: PRODUCT.finishes[0], thumb: 0 };

/* ============================================================= */
/* Gallery + price + finish (the buy panel)                      */
/* ============================================================= */
function renderFinishMeta() {
  const f = state.finish;
  $$("[data-price]").forEach(el => el.textContent = fmt(f.price));
  $$("[data-model]").forEach(el => el.textContent = f.model);
  $("[data-finish-label]").textContent = f.label;
  const min = Math.min(...PRODUCT.finishes.map(x => x.price));
  $("[data-price-min]").textContent = Math.round(min);
}

function renderGallery() {
  const f = state.finish;
  const main = $("[data-gallery-main]");
  const img = f.images[state.thumb] || f.images[0];
  main.src = img.src; main.alt = img.alt;
  attachFallback(main);

  const wrap = $("[data-gallery-thumbs]");
  wrap.innerHTML = "";
  f.images.forEach((im, i) => {
    const b = document.createElement("button");
    b.className = "gallery__thumb";
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === state.thumb ? "true" : "false");
    b.setAttribute("aria-label", `View image ${i + 1}: ${im.alt}`);
    const t = document.createElement("img");
    t.src = im.src; t.alt = ""; t.loading = "lazy"; t.decoding = "async";
    attachFallback(t);
    b.appendChild(t);
    b.addEventListener("click", () => { state.thumb = i; renderGallery(); });
    wrap.appendChild(b);
  });
}

function renderSwatches() {
  const wrap = $("[data-finish-swatches]");
  wrap.innerHTML = "";
  PRODUCT.finishes.forEach(f => {
    const b = document.createElement("button");
    b.className = "swatch";
    b.type = "button";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", f.id === state.finish.id ? "true" : "false");
    b.innerHTML = `<span class="swatch__dot" style="background:${f.swatch}"></span><span class="swatch__name">${f.label}</span>`;
    b.addEventListener("click", () => selectFinish(f.id));
    wrap.appendChild(b);
  });
}

function renderFinishCards() {
  const wrap = $("[data-finish-cards]");
  if (!wrap) return;
  wrap.innerHTML = "";
  PRODUCT.finishes.forEach(f => {
    const card = document.createElement("button");
    card.className = "fcard";
    card.type = "button";
    card.setAttribute("aria-pressed", f.id === state.finish.id ? "true" : "false");
    card.innerHTML = `
      <span class="fcard__check" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4.5 4.5L19 7"/></svg>
      </span>
      <span class="fcard__img"><img src="${f.images[0].src}" alt="${f.images[0].alt}" loading="lazy" decoding="async"></span>
      <span class="fcard__body">
        <span class="fcard__dot" style="background:${f.swatch}"></span>
        <span class="fcard__meta">
          <span class="fcard__name">${f.label}</span>
          <span class="fcard__model">${f.model}</span>
        </span>
        <span class="fcard__price">${PRODUCT.currency}${fmt(f.price)}</span>
      </span>`;
    attachFallback(card.querySelector("img"));
    card.addEventListener("click", () => {
      selectFinish(f.id);
      $("#overview")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
    wrap.appendChild(card);
  });
}

function selectFinish(id) {
  const f = PRODUCT.finishes.find(x => x.id === id);
  if (!f || f.id === state.finish.id) {
    // still sync card highlight if same
  }
  state.finish = f;
  state.thumb = 0;
  renderFinishMeta();
  renderGallery();
  renderSwatches();
  renderFinishCards();
}

/* ============================================================= */
/* Static-image slots ([data-img])                               */
/* ============================================================= */
function renderImgSlots() {
  $$("[data-img]").forEach(img => {
    const key = img.dataset.img;
    if (PRODUCT.images[key]) { img.src = PRODUCT.images[key]; attachFallback(img); }
  });
}

/* ============================================================= */
/* Interactive function panel (LCD)                              */
/* ============================================================= */
function renderFunctions() {
  const list = $("[data-fn-list]");
  if (!list) return;
  const nameEl = $("[data-fn-name]"), tempEl = $("[data-fn-temp]"), hintEl = $("[data-fn-hint]");
  list.innerHTML = "";
  PRODUCT.functions.forEach((fn, i) => {
    const b = document.createElement("button");
    b.className = "fnchip";
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.textContent = fn.name;
    const set = () => {
      $$(".fnchip", list).forEach(c => c.setAttribute("aria-selected", "false"));
      b.setAttribute("aria-selected", "true");
      nameEl.textContent = fn.name;
      hintEl.textContent = fn.hint;
      // count up to the target temp for a control-panel feel
      animateTemp(tempEl, fn.temp);
    };
    b.addEventListener("click", set);
    b.addEventListener("mouseenter", () => { if (!reduceMotion) set(); });
    list.appendChild(b);
  });
}
let tempRAF;
function animateTemp(el, target) {
  if (reduceMotion) { el.textContent = target; return; }
  cancelAnimationFrame(tempRAF);
  const start = parseInt(el.textContent, 10) || 0;
  const t0 = performance.now(), dur = 420;
  const step = now => {
    const p = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(start + (target - start) * e);
    if (p < 1) tempRAF = requestAnimationFrame(step);
  };
  tempRAF = requestAnimationFrame(step);
}

/* ============================================================= */
/* Included checklist                                            */
/* ============================================================= */
function renderIncluded() {
  const ul = $("[data-included]");
  if (!ul) return;
  ul.innerHTML = "";
  PRODUCT.included.forEach(it => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="checklist__ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4.5 4.5L19 7"/></svg></span>
      <span><b>${it.item}</b><small>${it.note}</small></span>`;
    ul.appendChild(li);
  });
}

/* ============================================================= */
/* Accordions (specs + faq) — shared builder                     */
/* ============================================================= */
function buildAccordion(container, items) {
  container.innerHTML = "";
  items.forEach((it, i) => {
    const acc = document.createElement("div");
    acc.className = "acc" + (it.open ? " open" : "");
    const pid = `${container.dataset.accId || "acc"}-${i}`;
    acc.innerHTML = `
      <h3 style="margin:0">
        <button class="acc__btn" aria-expanded="${it.open ? "true" : "false"}" aria-controls="${pid}">
          <span>${it.title}</span><span class="acc__sign" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="acc__panel" id="${pid}" role="region"><div><div class="acc__inner">${it.body}</div></div></div>`;
    container.appendChild(acc);
    acc.querySelector(".acc__btn").addEventListener("click", e => {
      const open = acc.classList.toggle("open");
      e.currentTarget.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function renderSpecs() {
  const c = $("[data-specs]");
  if (!c) return;
  c.dataset.accId = "spec";
  const items = PRODUCT.specs.map(g => ({
    title: g.group,
    open: !!g.open,
    body: `<dl style="margin:0">${g.rows.map(([k, v]) => {
      const req = v === "__REQ__";
      return `<div class="specrow"><dt>${k}</dt><dd class="${req ? "is-req" : ""}">${req ? "On request" : v}</dd></div>`;
    }).join("")}</dl>`
  }));
  buildAccordion(c, items);
}

function renderFaqs() {
  const c = $("[data-faqs]");
  if (!c) return;
  c.dataset.accId = "faq";
  buildAccordion(c, PRODUCT.faqs.map(([q, a]) => ({ title: q, open: false, body: `<p>${a}</p>` })));
}

/* ============================================================= */
/* Add to cart (placeholder integration point)                   */
/* ============================================================= */
let cart = 0;
function addToCart(e) {
  e.preventDefault();
  /* TODO: connect to your store platform here, e.g.
     fetch('/cart/add.js', { method:'POST', body: JSON.stringify({ id: variantId, quantity: 1 }) })
     using state.finish.model to pick the variant. */
  cart++;
  $$("[data-cart-count]").forEach(el => el.textContent = cart);
  const btn = e.currentTarget;
  if (btn.classList.contains("btn")) {
    const label = btn.textContent;
    btn.classList.add("is-added");
    btn.textContent = "Added ✓";
    setTimeout(() => { btn.classList.remove("is-added"); btn.textContent = label; }, 1600);
  }
  showToast(`Added — ${state.finish.label} (${PRODUCT.currency}${fmt(state.finish.price)})`);
}
let toastT;
function showToast(msg) {
  const t = $("[data-toast]");
  t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastT);
  toastT = setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => (t.hidden = true), 300);
  }, 2600);
}

/* ============================================================= */
/* Scroll reveal (IntersectionObserver)                          */
/* ============================================================= */
function initReveal() {
  const els = $$("[data-reveal],[data-stagger]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  $$("[data-stagger]").forEach(s =>
    [...s.children].forEach((c, i) => (c.style.transitionDelay = `${Math.min(i * 80, 480)}ms`))
  );
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));
  // Safety sweep: reveal anything in or above the fold once layout/viewport
  // are final. Robust to any initial scroll position and to innerHeight not
  // being settled when init first runs.
  const sweep = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(el => {
      if (!el.classList.contains("in") && el.getBoundingClientRect().top < vh * 0.9) {
        el.classList.add("in"); io.unobserve(el);
      }
    });
  };
  setTimeout(sweep, 300);
  window.addEventListener("load", () => { sweep(); setTimeout(sweep, 400); });
}

/* ============================================================= */
/* Mouse-follow glow on dark sections                            */
/* ============================================================= */
function initGlow() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
  $$("[data-glow]").forEach(sec => {
    let raf;
    sec.addEventListener("pointermove", e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = sec.getBoundingClientRect();
        sec.style.setProperty("--mx", `${e.clientX - r.left}px`);
        sec.style.setProperty("--my", `${e.clientY - r.top}px`);
        raf = null;
      });
    });
  });
}

/* ============================================================= */
/* Soft parallax on the lifestyle image                          */
/* ============================================================= */
function initParallax() {
  if (reduceMotion) return;
  const el = $("[data-parallax]");
  if (!el) return;
  let raf;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom > 0 && r.top < vh) {
        const prog = (r.top + r.height / 2 - vh / 2) / vh; // -~1..1
        el.style.transform = `translateY(${(-prog * 40).toFixed(1)}px)`;
      }
      raf = null;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ============================================================= */
/* Sticky mobile CTA — show after hero scrolls past              */
/* ============================================================= */
function initSticky() {
  const bar = $("[data-sticky]");
  const hero = $("#overview");
  if (!bar || !hero) return;
  bar.hidden = false;
  if (!("IntersectionObserver" in window)) { bar.classList.add("show"); return; }
  const io = new IntersectionObserver(([en]) => {
    bar.classList.toggle("show", !en.isIntersecting);
  }, { threshold: 0, rootMargin: "-40% 0px 0px 0px" });
  io.observe(hero);
}

/* ============================================================= */
/* Mobile menu                                                   */
/* ============================================================= */
function initMenu() {
  const btn = $(".hamburger"), menu = $("#m-menu");
  if (!btn || !menu) return;
  const toggle = open => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  btn.addEventListener("click", () => toggle(menu.hidden));
  menu.addEventListener("click", e => { if (e.target.closest("a")) toggle(false); });
}

/* ============================================================= */
/* Boot                                                          */
/* ============================================================= */
function init() {
  // phone links from data (keep any placeholders in HTML in sync)
  $$('a[href^="tel:"]').forEach(a => (a.href = `tel:${PRODUCT.phone}`));
  $("[data-year]") && ($("[data-year]").textContent = new Date().getFullYear());

  renderFinishMeta();
  renderGallery();
  renderSwatches();
  renderFinishCards();
  renderImgSlots();
  renderFunctions();
  renderIncluded();
  renderSpecs();
  renderFaqs();

  $$("[data-add-to-cart]").forEach(b => b.addEventListener("click", addToCart));

  initReveal();
  initGlow();
  initParallax();
  initSticky();
  initMenu();
  initContactForm();
}

/* ============================================================= */
/* Contact form (no backend — validate + confirm)               */
/* ============================================================= */
function initContactForm() {
  const form = $("[data-contact-form]");
  if (!form) return;
  const note = $("[data-form-note]");
  const defaultNote = note.textContent;
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      note.textContent = "Please fill in the required fields.";
      note.className = "contact__formnote is-err";
      return;
    }
    /* TODO: connect to your backend / form service, e.g.
       - Netlify: add `data-netlify="true"` + a hidden `form-name` field and remove this preventDefault
       - Formspree: set form action="https://formspree.io/f/XXXX" method="POST"
       - or POST the FormData below to your own endpoint. */
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Enquiry (wire up a backend to send):", data);
    form.reset();
    note.textContent = `Thanks ${data.name.split(" ")[0] || ""} — we've got your enquiry and will be in touch soon.`.trim();
    note.className = "contact__formnote is-ok";
    showToast("Enquiry sent — we'll be in touch");
    setTimeout(() => { note.textContent = defaultNote; note.className = "contact__formnote"; }, 8000);
  });
}

document.addEventListener("DOMContentLoaded", init);
