/* ============================================================
   EDIT ONLY THIS BLOCK to personalise the website.
   Keep the quote marks and commas. Each "" is one paragraph.
   ============================================================ */
const CONFIG = {
  herName: "Vaishnavi",          // her name as you want it shown
  herEmoji: "🐼",                // emoji shown beside her name everywhere ("" for none)
  yourName: "Sahil",             // your name (signature)
  yourEmoji: "😝",               // emoji shown beside your name everywhere ("" for none)
  birthday: "A DAY THAT BELONGS TO YOU.", // small label on the first screen (you can put her date, e.g. "14 FEBRUARY")
  year: "2026",
  // Songs: add, remove or rename lines. Files go in the "audio" folder. Use [] for no music.
 songs: [
  { title: "Till The End",   file: "audio/song-1.mp3" },
  { title: "Tum Se Hi",   file: "audio/song-2.mp3" },
  { title: "A Thousand Year", file: "audio/song-3.mp3" },
  { title: "Senorita",  file: "audio/song-4.mp3" },
  { title: "Raabta",  file: "audio/song-5.mp3" }
],
  // Video captions, for videos/video-1.mp4, video-2.mp4, video-3.mp4
  videoCaptions: ["a little moving moment", "another one I love", "a small piece of happiness"],
  accent: { gold: "#D8B98A", rose: "#D9A0A7", wine: "#541C2B" }, // optional colours

  wishParagraphs: [
    "Happy Birthday, {HER} ♡",
    "I hope today reminds you of how special you are, not just because it's your birthday, but because of the person you are every single day.",
    "I hope this new chapter brings you the kind of happiness that stays, the kind of peace that makes everything feel lighter, and the kind of moments you'll remember with a smile long after they've passed.",
    "May you find beautiful reasons to laugh, people who make you feel understood, dreams that excite you, and little unexpected moments that make an ordinary day feel magical.",
    "Even from a distance, I hope this little corner of the internet can bring a smile to your face.",
    "You deserve a birthday as lovely as the happiness you bring into the world.",
    "Happy Birthday, once again. Keep being wonderfully, unapologetically you. ♡"
  ],

  // Photo captions, in order photo-1 ... photo-6
  captions: [
    "a moment worth keeping",
    "one of my favourite little memories",
    "some things deserve to be remembered",
    "a little piece of happiness",
    "a small thing worth smiling about",
    "something beautiful",
    "a memory in the making",
    "just because",
    "a little bit of sunshine",
    "one more for the collection",
    "happy in this moment",
    "a favourite"
  ],
  // Focal point per photo (CSS object-position): "50% 30%" keeps faces higher in the crop
  focus: ["50% 40%", "50% 40%", "50% 35%", "50% 50%", "50% 40%", "50% 35%", "50% 40%", "50% 40%", "50% 35%", "50% 40%", "50% 40%", "50% 35%"],

  // Per-photo tweaks, in order photo-1 ... photo-12.
  //   zoom   : 1 = normal, 1.3 = zoomed in 30%, 1.6 = closer still. With fit: true you can also go below 1 (e.g. 0.8)
  //   fit    : true = show the WHOLE photo (zoomed out, nothing cropped); false = fill the frame
  //   height : 0 = keep the default shape. 125 = tall portrait, 100 = square, 75 = wider, 56 = widescreen
  //   rotate : degrees. 0 = straight, -3 = tilts left, 4 = tilts right
  photoStyle: [
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: true },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false },
    { zoom: 1, height: 0, rotate: 0, fit: false }
  ],

  // Replace these with things that are genuinely true about her
  compliments: [
    { title: "Your smile",          text: "the kind that makes a moment feel lighter." },
    { title: "Your presence",       text: "a little reminder that ordinary days can be beautiful." },
    { title: "Your own little world", text: "the things that make you uniquely you." },
    { title: "Your happiness",      text: "something I genuinely hope you get more of this year." }
  ],

  letterParagraphs: [
    "Hey {HER},",
    "I don't know if words can ever fully capture how much someone can brighten your thoughts just by being themselves, but I wanted to try.",
    "On your birthday, I don't want to make this about anything complicated. I simply want to wish you more happiness than you can count, more opportunities than you expect, and more reasons to feel proud of the person you're becoming.",
    "I hope this year is gentle with you when life gets difficult and exciting when new possibilities come your way.",
    "I hope you never forget that your dreams matter, your happiness matters, and the little things that make you who you are deserve to be celebrated.",
    "And if this small website manages to make you smile, even for a moment, then I'm genuinely glad I made it.",
    "Have the most beautiful birthday."
  ],
  letterSignoff: "With lots of good wishes,",
  wishNote: "Whatever you wished for, I hope it finds you. ♡"
};
/* ================= END OF EDITABLE BLOCK ================= */

(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const herFull = CONFIG.herName + (CONFIG.herEmoji ? " " + CONFIG.herEmoji : "");
  const yourFull = CONFIG.yourName + (CONFIG.yourEmoji ? " " + CONFIG.yourEmoji : "");
  const fill = t => t.replace(/\{HER\}/g, herFull).replace(/\{ME\}/g, yourFull);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = matchMedia("(max-width: 700px)").matches;
  const root = document.documentElement.style;
  root.setProperty("--gold", CONFIG.accent.gold);
  root.setProperty("--rose", CONFIG.accent.rose);
  root.setProperty("--wine", CONFIG.accent.wine);
  document.title = "For " + herFull + " ♡";

  /* ---------- Fill content from CONFIG ---------- */
  $("#herNameBig").textContent = herFull;
  $("#dateLabel").textContent = CONFIG.birthday;
  const ft = $("#finTitle"); ft.textContent = "HAPPY BIRTHDAY,";
  const fn = document.createElement("span"); fn.className = "fin-name"; fn.textContent = herFull + " ♡"; ft.appendChild(fn);
  $("#madeBy").textContent = yourFull + " · " + CONFIG.year;
  $("#wishText").innerHTML = CONFIG.wishParagraphs.map(p => "<p>" + fill(p) + "</p>").join("") +
    '<p class="sig">' + yourFull + " ♡</p>";
  $("#letterText").innerHTML = CONFIG.letterParagraphs.map(p => "<p>" + fill(p) + "</p>").join("") +
    "<p>" + CONFIG.letterSignoff + "</p>";
  $("#letterSig").textContent = yourFull + " ♡";

  const icons = [
    '<path d="M12 36c4 6 16 6 20 0M14 20h2M28 20h2" />',
    '<path d="M22 8c3 8 12 8 12 18 0 8-6 12-12 12S10 34 10 26C10 16 19 16 22 8z"/>',
    '<circle cx="22" cy="22" r="5"/><path d="M22 4v8M22 32v8M4 22h8M32 22h8"/>',
    '<path d="M22 6l4 12 12 4-12 4-4 12-4-12-12-4 12-4z"/>'
  ];
  $("#cards").innerHTML = CONFIG.compliments.map((c, i) =>
    '<article class="card"><svg viewBox="0 0 44 44" fill="none" stroke="#D8B98A" stroke-width="1.2" stroke-linecap="round" aria-hidden="true">' +
    icons[i % icons.length] + "</svg><h3>" + c.title + "</h3><p>" + c.text + "</p></article>").join("");

  /* ---------- Photos: captions, focus, missing fallback ---------- */
  $$(".ph").forEach((fig, i) => {
    const img = $("img", fig);
    $(".frame", fig).dataset.n = i + 1;
    fig.style.setProperty("--focus", CONFIG.focus[i] || "50% 50%");
    const ps = (CONFIG.photoStyle || [])[i] || {};
    if (ps.fit) { const fr = $(".frame", fig); fr.classList.add("fit"); fr.style.setProperty("--bg", 'url("images/photo-' + (i + 1) + '.jpg")'); }
    if (ps.zoom > 0 && ps.zoom !== 1) fig.style.setProperty("--zoom", ps.zoom);
    if (ps.height > 0) fig.style.setProperty("--ar", "100/" + ps.height);
    if (ps.rotate) fig.style.rotate = ps.rotate + "deg";
    $("figcaption", fig).textContent = CONFIG.captions[i] || "";
    img.alt = CONFIG.captions[i] || "Photograph " + (i + 1);
    const miss = () => fig.classList.add("missing");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener("load", () => window.ScrollTrigger && ScrollTrigger.refresh());
  });

  /* ---------- Particles (DOM, counts reduced on mobile) ---------- */
  function stars(el, n, size) {
    for (let i = 0; i < n; i++) {
      const s = document.createElement("i");
      const d = Math.random() * size + 1;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${d}px;height:${d}px;opacity:${Math.random() * .7 + .2}`;
      el.appendChild(s);
    }
    return $$("i", el);
  }
  const openStars = stars($("#openStars"), small ? 35 : 80, 2.5);
  const skyStars = stars($("#skyStars"), small ? 45 : 110, 2.8);
  const petalBox = $("#petals");
  for (let i = 0; i < (small ? 9 : 18); i++) petalBox.appendChild(document.createElement("i"));

  /* ---------- Envelopes: tap to open a letter ---------- */
  function openEnv(w) {
    if (w.classList.contains("open")) return;
    w.classList.add("open");
    const btn = $(".envelope", w), letter = $(".env-letter", w), flap = $(".env-flap", w);
    btn.setAttribute("aria-expanded", "true");
    const done = () => { btn.hidden = true; letter.hidden = false; letter.style.height = "auto"; letter.style.overflow = "visible"; if (window.ScrollTrigger) ScrollTrigger.refresh(); };
    if (typeof gsap === "undefined" || reduce) { done(); return; }
    gsap.timeline()
      .to(flap, { rotateX: 180, duration: .9, ease: "power2.inOut" })
      .to(btn, { y: 20, opacity: 0, duration: .6, ease: "power1.in" }, "+=.15")
      .add(() => { btn.hidden = true; letter.hidden = false; letter.style.overflow = "hidden"; })
      .fromTo(letter, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 1.1, ease: "power2.out", onComplete: done })
      .from($$("p,h2", letter), { opacity: 0, y: 14, stagger: .16, duration: .8 }, "-=.7");
  }
  function wrapEnv(el, seal, wax) {
    const w = document.createElement("div"); w.className = "env-wrap" + (wax ? " wax" : "");
    const b = document.createElement("button"); b.type = "button"; b.className = "envelope";
    b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-label", "Open the letter");
    b.innerHTML = '<span class="env-back"></span><span class="env-front"></span><span class="env-flap"></span><span class="seal">' + seal + '</span><span class="env-to"></span><span class="env-hint">tap to open</span>';
    $(".env-to", b).textContent = "for " + herFull;
    const l = document.createElement("div"); l.className = "env-letter"; l.hidden = true;
    el.parentNode.insertBefore(w, el); l.appendChild(el); w.append(b, l);
    b.addEventListener("click", () => openEnv(w));
  }
  wrapEnv($("#wishText"), "♡", false);
  wrapEnv($(".paper"), "♡", true);

  /* ---------- Album tabs ---------- */
  const tabs = $$(".tabs button"), panels = { tabPhotos: $("#panelPhotos"), tabVideos: $("#panelVideos") };
  tabs.forEach(t => t.addEventListener("click", () => {
    tabs.forEach(x => { const on = x === t; x.setAttribute("aria-selected", on); panels[x.id].hidden = !on; });
    if (t.id === "tabPhotos") $$("video").forEach(v => v.pause());
    if (typeof gsap !== "undefined" && !reduce) gsap.from(panels[t.id], { opacity: 0, y: 18, duration: .6 });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }));

  /* ---------- Photo viewer (lightbox) ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let lbList = [], lbI = 0, lastFocus = null;
  const lbShow = i => {
    lbI = (i + lbList.length) % lbList.length;
    const im = $("img", lbList[lbI]);
    lbImg.src = im.src; lbImg.alt = im.alt; lbCap.textContent = $("figcaption", lbList[lbI]).textContent;
  };
  const lbClose = () => { lb.hidden = true; if (lastFocus) lastFocus.focus(); };
  $$(".ph").forEach(fig => {
    fig.tabIndex = 0; fig.setAttribute("role", "button"); fig.setAttribute("aria-label", "View photo larger");
    const go = () => {
      if (fig.classList.contains("missing")) return;
      lbList = $$(".ph").filter(f => !f.classList.contains("missing"));
      lastFocus = document.activeElement; lbShow(lbList.indexOf(fig)); lb.hidden = false; $(".lb-close").focus();
    };
    fig.addEventListener("click", go);
    fig.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
  });
  $(".lb-close").addEventListener("click", lbClose);
  $(".lb-prev").addEventListener("click", () => lbShow(lbI - 1));
  $(".lb-next").addEventListener("click", () => lbShow(lbI + 1));
  lb.addEventListener("click", e => { if (e.target === lb) lbClose(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") lbClose(); else if (e.key === "ArrowLeft") lbShow(lbI - 1); else if (e.key === "ArrowRight") lbShow(lbI + 1);
  });

  /* ---------- Videos: captions + missing fallback ---------- */
  $$(".vid").forEach((fig, i) => {
    const v = $("video", fig);
    $(".vframe", fig).dataset.n = i + 1;
    $("figcaption", fig).textContent = CONFIG.videoCaptions[i] || "";
    const miss = () => fig.classList.add("missing");
    v.addEventListener("error", miss);
    v.addEventListener("loadedmetadata", () => window.ScrollTrigger && ScrollTrigger.refresh());
  });

  /* ---------- Music: play/pause, prev/next, song list, mute, volume (starts at 50%) ---------- */
  const mBox = $("#musicBox"), mToggle = $("#musicToggle"), mPanel = $("#musicPanel"), mBtn = $("#music");
  const mPrev = $("#prevBtn"), mNext = $("#nextBtn"), mMute = $("#muteBtn"), vol = $("#volume");
  const nowEl = $("#songName"), listEl = $("#songList");
  if (CONFIG.songs.length) {
    const many = CONFIG.songs.length > 1;
    const audio = new Audio();
    audio.volume = 0.5;
    audio.loop = !many;
    let cur = 0;
    const items = CONFIG.songs.map((sg, i) => {
      const li = document.createElement("li"), b = document.createElement("button");
      b.type = "button"; b.textContent = sg.title;
      b.addEventListener("click", () => pick(i, true));
      li.appendChild(b); listEl.appendChild(li); return b;
    });
    const state = on => {
      mBtn.setAttribute("aria-pressed", on); mBtn.setAttribute("aria-label", on ? "Pause music" : "Play music");
      mBtn.textContent = on ? "❚❚" : "▶"; mToggle.classList.toggle("playing", on);
    };
    const muteUi = () => {
      const m = audio.muted || audio.volume === 0;
      mMute.textContent = m ? "🔇" : "🔊"; mMute.setAttribute("aria-pressed", m); mMute.setAttribute("aria-label", m ? "Unmute" : "Mute");
    };
    const play = () => audio.play().then(() => state(true)).catch(() => state(false));
    function pick(i, shouldPlay) {
      cur = (i + CONFIG.songs.length) % CONFIG.songs.length;
      audio.src = CONFIG.songs[cur].file;
      nowEl.textContent = CONFIG.songs[cur].title;
      items.forEach((b, k) => b.classList.toggle("active", k === cur));
      if (shouldPlay) play(); else state(false);
    }
    pick(0, false);
    mPrev.hidden = mNext.hidden = listEl.hidden = !many;
    mBox.hidden = false;
    mToggle.addEventListener("click", () => { mPanel.hidden = !mPanel.hidden; mToggle.setAttribute("aria-expanded", String(!mPanel.hidden)); });
    document.addEventListener("click", e => { if (!mBox.contains(e.target)) { mPanel.hidden = true; mToggle.setAttribute("aria-expanded", "false"); } });
    mBtn.addEventListener("click", () => { if (audio.paused) play(); else { audio.pause(); state(false); } });
    mPrev.addEventListener("click", () => pick(cur - 1, !audio.paused));
    mNext.addEventListener("click", () => pick(cur + 1, !audio.paused));
    mMute.addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (!audio.muted && audio.volume === 0) { audio.volume = 0.5; vol.value = 50; }
      muteUi();
    });
    vol.addEventListener("input", () => { audio.volume = vol.value / 100; if (audio.volume > 0) audio.muted = false; muteUi(); });
    audio.addEventListener("ended", () => { if (many) pick(cur + 1, true); });
    audio.addEventListener("error", () => { state(false); nowEl.textContent = CONFIG.songs[cur].title + " (file not found)"; });
    $$("video").forEach(v => v.addEventListener("play", () => { audio.pause(); state(false); }));
    muteUi();
  }

  /* ---------- GSAP ---------- */
  const hasGsap = typeof gsap !== "undefined";
  if (!hasGsap) { // graceful fallback: just open
    $("#openBtn").addEventListener("click", () => { $("#opening").remove(); document.body.classList.remove("locked"); if (CONFIG.songs.length) mBox.hidden = false; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Opening timeline
  gsap.set(".open-inner > *", { opacity: 0 });
  const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
  intro.from("#opening", { opacity: 0, duration: 1.2 })
    .to(openStars, { opacity: () => Math.random() * .8 + .2, duration: 1.5, stagger: { amount: 1.2, from: "random" } }, 0)
    .fromTo(".o-line", { y: 14 }, { opacity: 1, y: 0, duration: 1.2 }, .6)
    .fromTo(".o-name", { y: 30, scale: 1.06, filter: "blur(10px)" }, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 2.2, ease: "power3.out" }, 1.3)
    .fromTo(".o-sub", { y: 12 }, { opacity: 1, y: 0, duration: 1.2 }, 2.8)
    .to(".o-date", { opacity: 1, duration: 1.2 }, 3.3)
    .fromTo("#openBtn", { y: 10 }, { opacity: 1, y: 0, duration: 1 }, 3.8);
  if (reduce) intro.progress(1);
  else {
    gsap.to(".flora", { y: -14, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    openStars.slice(0, 20).forEach(s => gsap.to(s, { opacity: .15, duration: 1.5 + Math.random() * 2, yoyo: true, repeat: -1, delay: 4 + Math.random() * 2 }));
  }

  // Open button -> main experience
  $("#openBtn").addEventListener("click", () => {
    $("#openBtn").disabled = true;
    const out = gsap.timeline({ onComplete() {
      $("#opening").remove(); document.body.classList.remove("locked");
      window.scrollTo(0, 0); ScrollTrigger.refresh();
      if (CONFIG.songs.length) mBox.hidden = false;
    } });
    out.to(".open-inner", { scale: reduce ? 1 : 1.12, opacity: 0, duration: reduce ? .3 : 1.1, ease: "power2.in" })
      .to("#opening", { opacity: 0, duration: reduce ? .3 : 1.0 }, "-=.4");
  });

  if (reduce) return; // all content is visible by default

  // Scroll reveals
  const reveal = (targets, vars = {}, trig) => {
    $$(targets).forEach((el, i) => gsap.from(el, Object.assign({
      opacity: 0, y: 28, duration: 1.1, ease: "power2.out",
      scrollTrigger: { trigger: trig ? $(trig) : el, start: "top 85%", toggleActions: "play none none none" }
    }, vars)));
  };
  reveal("#wish .display", { y: 36, duration: 1.4 });
  $$(".env-wrap").forEach(w => gsap.from(w, { opacity: 0, y: 36, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: w, start: "top 88%", toggleActions: "play none none none" } }));
  reveal("#gallery .display");
  $$(".ph").forEach((fig, i) => {
    gsap.from($(".frame", fig), { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 1.4, ease: "power3.out",
      scrollTrigger: { trigger: fig, start: "top 88%", toggleActions: "play none none none" } });
    gsap.from($("figcaption", fig), { opacity: 0, y: 10, delay: .5, duration: 1,
      scrollTrigger: { trigger: fig, start: "top 85%", toggleActions: "play none none none" } });
  });
  reveal("#things .display");
  gsap.from(".card", { opacity: 0, y: 40, duration: 1, stagger: .18, ease: "power2.out",
    scrollTrigger: { trigger: "#cards", start: "top 82%", toggleActions: "play none none none" } });

  // Sky parallax (scrub used only here)
  if (!small) {
    gsap.to("#moon", { y: 120, ease: "none", scrollTrigger: { trigger: "#sky", start: "top bottom", end: "bottom top", scrub: .6 } });
    gsap.to("#skyStars", { y: -60, ease: "none", scrollTrigger: { trigger: "#sky", start: "top bottom", end: "bottom top", scrub: .6 } });
  }
  gsap.from("#const polyline", { strokeDashoffset: 200, duration: 2.5, scrollTrigger: { trigger: "#sky", start: "top 60%" } });
  skyStars.slice(0, 25).forEach(s => gsap.to(s, { opacity: .1, duration: 1.2 + Math.random() * 2, yoyo: true, repeat: -1, ease: "sine.inOut" }));
  reveal(".sky-text .display", { duration: 1.6 });
  reveal(".sky-text p");

  // Letter

  // Finale
  gsap.from(".fin-quote", { opacity: 0, y: 24, duration: 1.4, scrollTrigger: { trigger: "#finale", start: "top 65%" } });
  gsap.from(".fin-title", { opacity: 0, scale: .94, filter: "blur(8px)", duration: 1.8, delay: .6, scrollTrigger: { trigger: "#finale", start: "top 55%" } });
  gsap.from([".fin-sub", ".cake", "#wishBtn", ".made"], { opacity: 0, y: 20, duration: 1, stagger: .25, delay: 1.2, scrollTrigger: { trigger: "#finale", start: "top 45%" } });
  $$("#petals i").forEach(p => {
    gsap.set(p, { x: Math.random() * innerWidth, rotation: Math.random() * 360, scale: .6 + Math.random() * .8 });
    gsap.to(p, { y: () => document.getElementById("finale").offsetHeight + 60, x: "+=" + (Math.random() * 120 - 60), rotation: "+=360",
      duration: 9 + Math.random() * 8, repeat: -1, delay: -Math.random() * 12, ease: "none" });
  });
  gsap.to(".cake", { y: -6, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" });

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();

/* ---------- Make a little wish ---------- */
(function () {
  const btn = document.getElementById("wishBtn");
  if (!btn) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const n = matchMedia("(max-width: 700px)").matches ? 26 : 46;
  const colors = ["#D9A0A7", "#D8B98A", "#541C2B", "#FFF7EF", "#F4DDE1"];
  btn.addEventListener("click", () => {
    document.getElementById("cake").classList.add("out");
    document.getElementById("wishNote").textContent = CONFIG.wishNote;
    if (reduce || typeof gsap === "undefined") return;
    const host = document.getElementById("finale"), r = btn.getBoundingClientRect(), h = host.getBoundingClientRect();
    const ox = r.left + r.width / 2 - h.left, oy = r.top - h.top;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("i");
      s.className = "spark";
      const d = 5 + Math.random() * 7, glow = i % 3 === 0;
      s.style.cssText = `left:${ox}px;top:${oy}px;width:${d}px;height:${glow ? d : d * 1.6}px;background:${glow ? "#D8B98A" : colors[i % 5]};${glow ? "box-shadow:0 0 12px 4px rgba(216,185,138,.8);" : "border-radius:2px;"}`;
      host.appendChild(s);
      gsap.to(s, { x: (Math.random() - .5) * 420, y: -140 - Math.random() * 260, rotation: Math.random() * 540, duration: 1.1, ease: "power2.out" });
      gsap.to(s, { y: "+=380", opacity: 0, duration: 1.8, delay: 1, ease: "power1.in", onComplete: () => s.remove() });
    }
  });
})();
