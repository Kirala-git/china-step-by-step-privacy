"use client";

import { useEffect, useState } from "react";

const APP_STORE = "https://apps.apple.com/app/id6795864818";

const features = [
  { n: "01", title: "Arrive ready", text: "Know what to download, set up and save before your flight." },
  { n: "02", title: "Do it confidently", text: "Follow visual, tap-by-tap guides for payments, transport and daily essentials." },
  { n: "03", title: "Stay calm offline", text: "Keep phrases, emergency cards, trip details and practical tools close at hand." },
];

const moments = [
  { place: "THE GREAT WALL · BEIJING", title: "Walk through history", image: "/attractions/great-wall.jpg", className: "tall" },
  { place: "ZHANGJIAJIE · HUNAN", title: "Rise above the clouds", image: "/attractions/zhangjiajie.jpg", className: "wide" },
  { place: "THE BUND · SHANGHAI", title: "Meet tomorrow", image: "/attractions/shanghai.jpg", className: "wide" },
];

function StoreButton({ light = false, label = "Download on the App Store" }: { light?: boolean; label?: string }) {
  return (
    <a className={`store-button ${light ? "light" : ""}`} href={APP_STORE} target="_blank" rel="noreferrer" aria-label={`${label} — opens App Store`}>
      <span className="apple" aria-hidden="true">●</span>
      <span><small>Available now</small><b>{label}</b></span>
      <span className="arrow">↗</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver((items) => {
      items.forEach((item) => item.isIntersecting && item.target.classList.add("visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top"><span>中</span><b>CHINA<br />STEP BY STEP</b></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why it works</a>
          <a href="#inside" onClick={() => setMenuOpen(false)}>Inside the app</a>
          <a href="#discover" onClick={() => setMenuOpen(false)}>Discover China</a>
          <a className="nav-cta" href={APP_STORE} target="_blank" rel="noreferrer">Get the app ↗</a>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
      </nav>

      <header className="hero" id="top">
        <img className="hero-image" src="/attractions/great-wall.jpg" alt="The Great Wall of China winding through green mountains" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> YOUR FIRST CHINA TRIP, MADE CLEAR</div>
          <h1>China is closer<br />than it <em>looks.</em></h1>
          <p>One beautifully simple travel companion for the apps, payments, trains, language and everyday moments that make China feel easy.</p>
          <div className="hero-actions"><StoreButton light /><a className="text-link" href="#inside">See how it helps <span>↓</span></a></div>
        </div>
        <div className="hero-proof">
          <div><b>170</b><span>visual steps</span></div>
          <div><b>39</b><span>essential guides</span></div>
          <div><b>100%</b><span>offline ready</span></div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </header>

      <section className="confidence" id="why">
        <div className="section-intro reveal">
          <p className="kicker">TRAVEL WITH A PLAN, NOT A QUESTION MARK</p>
          <h2>The trip of a lifetime.<br /><i>Without the guesswork.</i></h2>
          <p className="lead">China is unforgettable. The logistics can feel unfamiliar. We turn every essential task into one clear next step—so you spend less time figuring things out and more time being there.</p>
        </div>
        <div className="feature-row reveal">
          {features.map((feature) => <article key={feature.n}><span>{feature.n}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
        </div>
      </section>

      <section className="product" id="inside">
        <div className="product-copy reveal">
          <p className="kicker light-kicker">YOUR LOCAL KNOW-HOW, IN YOUR POCKET</p>
          <h2>From touchdown<br />to takeoff.</h2>
          <p>Clear guidance meets practical travel tools in one calm, private, offline-ready app.</p>
          <ul>
            <li><span>✓</span><div><b>Visual setup guides</b><small>Payments, WeChat, maps, trains, ride-hailing and more.</small></div></li>
            <li><span>✓</span><div><b>Real-world travel tools</b><small>Live translation, phrase cards, checklists and currency conversion.</small></div></li>
            <li><span>✓</span><div><b>Private by design</b><small>Your trip information stays on your device.</small></div></li>
          </ul>
          <StoreButton light label="Get China Step by Step" />
        </div>
        <div className="phones reveal" aria-label="China Step by Step app screenshots">
          <div className="phone phone-left"><img src="/app-guide.png" alt="Step-by-step WeChat setup guide in the app" /></div>
          <div className="phone phone-center"><img src="/app-home.png" alt="China Step by Step home screen" /></div>
          <div className="phone phone-right"><img src="/app-tools.png" alt="Practical travel tools in the app" /></div>
          <div className="float-card card-one"><span>✓</span><b>Know exactly<br />what to tap</b></div>
          <div className="float-card card-two"><b>Works offline</b><span>● READY</span></div>
        </div>
      </section>

      <section className="discover" id="discover">
        <div className="discover-head reveal">
          <div><p className="kicker">ONE COUNTRY. ENDLESS MOMENTS.</p><h2>Go further.<br /><i>Feel more.</i></h2></div>
          <p>Ancient paths, impossible peaks and electric skylines—China rewards the curious. We help you arrive ready for all of it.</p>
        </div>
        <div className="gallery reveal">
          {moments.map((moment) => (
            <figure className={moment.className} key={moment.place}>
              <img src={moment.image} alt={`${moment.title} — ${moment.place}`} />
              <figcaption><small>{moment.place}</small><b>{moment.title}</b></figcaption>
            </figure>
          ))}
        </div>
        <p className="photo-credit">Travel photography: Jamie Street, Yun and The SheStarters Guide / Unsplash.</p>
      </section>

      <section className="quote reveal">
        <span className="quote-mark">“</span>
        <blockquote>Land with the confidence<br />of someone who&apos;s been<br /><i>there before.</i></blockquote>
        <p>Clear steps. Useful tools. More room for wonder.</p>
      </section>

      <section className="final-cta">
        <div className="final-copy reveal">
          <p className="kicker light-kicker">YOUR CHINA STORY STARTS HERE</p>
          <h2>Ready when<br /><i>you are.</i></h2>
          <p>Download your guide before you fly. Your next step is already waiting.</p>
          <StoreButton light />
          <small>Available for iPhone and iPad · English & Chinese · Offline access</small>
        </div>
        <img src="/attractions/shanghai.jpg" alt="Shanghai skyline across the Huangpu River" />
      </section>

      <footer>
        <div className="footer-brand"><span>中</span><b>CHINA<br />STEP BY STEP</b></div>
        <p>Make China feel possible.</p>
        <div><a href={APP_STORE} target="_blank" rel="noreferrer">App Store</a><a href="https://kirala-git.github.io/ChinaStepByStepIOS/privacy.html">Privacy</a><a href="https://kirala-git.github.io/ChinaStepByStepIOS/support.html">Support</a></div>
        <small>© 2026 China Step by Step. Independent travel information service.</small>
      </footer>
    </main>
  );
}
