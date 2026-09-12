"use client";

import {useEffect, useRef, useState} from "react";

const mechanisms = [
  {tab: "Zero Motion", title: "TrueRest™ Core", sub: "Sleep through your partner's every move.", body: "Our pure natural latex absorbs and isolates motion at its source — so when your partner gets up, rolls over, or shifts in the night, you barely feel a thing. Wake up rested, even when they don't.", image: "/images/md_latex_mattress_mechanism_zero_motion.webp", alt: "Zero motion transfer demonstration"},
  {tab: "Shape Recovery", title: "Elastic Memory™", sub: "Always firm. Never sagging.", body: "Unlike memory foam that flattens and dents over time, our natural latex springs back to its original shape — night after night, year after year. The support you felt on day one is the support you'll feel a decade later.", image: "/images/md_latex_mattress_mechanism_shape_recovery.webp", alt: "Natural latex mattress springing back to its original shape"},
  {tab: "Hygienic Cover", title: "FreshGuard™ Cover", sub: "Unzip. Wash. Repeat.", body: "Our latex mattress comes with a fully removable, machine-washable cover that zips off in seconds. Keep your bed hygienically clean — no more trapped dust, sweat, or allergens building up over the years.", image: "/images/md_latex_mattress_mechanism_hygienic_cover.webp", alt: "Removable washable mattress cover"},
  {tab: "Stays Cool", title: "AirFlow Pinhole™", sub: "Engineered for Malaysia's heat.", body: "Thousands of pinholes run through our latex core, allowing heat and humidity to escape throughout the night. Even in tropical weather, you stay cool from the moment you lie down until morning.", image: "/images/md_latex_mattress_mechanism_stays_cool.webp", alt: "Pinhole airflow natural latex mattress design"}
];

const results = [
  [87, "Fall Asleep Faster", "Customers report drifting off within 15 minutes — most felt the difference on night one."],
  [92, "Wake Up Pain-Free", "Say goodbye to morning back and neck stiffness — latex contours to your spine, not against it."],
  [89, "Sleep Cooler All Night", "Open-cell latex breathes naturally, helping you stay comfortable from dusk till dawn."]
] as const;

const comparisonRows = [
  "Naturally breathable & cooler sleep",
  "Support without sinking",
  "Maintains better spinal alignment",
  "Long-lasting durability (10–20 years)",
  "Pressure relief for shoulders & hips"
];

const sleepers = [
  ["Back Sleepers", "Keeps your spine aligned and reduces lower back pain.", "/images/md_latex_mattress_sleeper_back.webp", "Back sleeper supported by a natural latex mattress"],
  ["Side Sleepers", "Contours to your curves and relieves pressure on shoulders and hips.", "/images/md_latex_mattress_sleeper_side.webp", "Side sleeper supported by a natural latex mattress"],
  ["Stomach Sleepers", "Firm yet comfortable support to prevent strain.", "/images/md_latex_mattress_sleeper_stomach.webp", "Stomach sleeper supported by a natural latex mattress"]
] as const;

export default function MattressDetails() {
  const [active, setActive] = useState(0);
  const trusted = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = trusted.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.disconnect();
      }
    }, {threshold: .25});
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <>
    <section className="hp-support-section mattress-trusted-section">
      <div className="mdl-trusted" ref={trusted}>
        <div className="mdl-trusted-wrap">
          <div className="mdl-trusted-content">
            <div className="mdl-trusted-rating"><span className="mdl-trusted-stars">★★★★★</span><span>Excellent <strong>4.8/5 Rated</strong></span></div>
            <h2 className="mdl-trusted-headline">Sleep Better.<br/>Wake Up Different.</h2>
            <p className="mdl-trusted-subhead">Real customers are falling asleep faster, sleeping deeper, and waking up without the aches — all on natural latex.</p>
            <div className="mdl-trusted-stats">{results.map(([percent, title, description]) => <div className="mdl-trusted-stat" key={title}>
              <div className="mdl-trusted-circle"><svg viewBox="0 0 64 64" aria-hidden="true"><circle className="mdl-trusted-circle-bg" cx="32" cy="32" r="27"/><circle className="mdl-trusted-circle-fg" cx="32" cy="32" r="27" style={{"--percent": percent} as React.CSSProperties}/></svg><span>{percent}%</span></div>
              <div><h3>{title}</h3><p>{description}</p></div>
            </div>)}</div>
          </div>
          <div className="mdl-trusted-image"><img src="/images/md_latex_mattress_trusted_results.webp" alt="MD Latex natural mattress trusted by customers"/></div>
        </div>
      </div>
    </section>

    <section className="mdl-tabs mattress-tabs" id="mdl-mattress-tabs-section">
      <div className="mdl-tabs-wrap">
        <div className="mdl-tabs-nav" role="tablist" aria-label="Natural latex mattress mechanisms">{mechanisms.map((item, index) => <button key={item.tab} className={`mdl-tab-btn ${active === index ? "is-active" : ""}`} role="tab" aria-selected={active === index} aria-controls={`mattress-mechanism-${index}`} onClick={() => setActive(index)}>{item.tab}</button>)}</div>
        <div className="mdl-tabs-content">{mechanisms.map((item, index) => <div key={item.tab} id={`mattress-mechanism-${index}`} className={`mdl-tab-panel ${active === index ? "is-active" : ""}`} role="tabpanel" hidden={active !== index}>
          <div className="mdl-tab-text"><h3 className="mdl-tab-headline">{item.title}</h3><p className="mdl-tab-subhead">{item.sub}</p><p className="mdl-tab-body">{item.body}</p></div>
          <div className="mdl-tab-image"><img src={item.image} alt={item.alt}/></div>
        </div>)}</div>
      </div>
    </section>

    <section className="hp-comparison mattress-comparison">
      <div className="hp-comparison-wrap">
        <div className="hp-comparison-copy"><h2>Why Choose MD<br/>Latex Instead?</h2><p>Real comfort. Real support. Long-lasting sleep quality.</p></div>
        <div className="hp-table" role="table" aria-label="MD Latex compared with other mattresses"><div className="hp-row hp-head" role="row"><span></span><b>MD<br/>Latex</b><strong>Others</strong></div>{comparisonRows.map(label => <div className="hp-row" role="row" key={label}><span>{label}</span><b aria-label="Included">✓</b><strong aria-label="Not included">×</strong></div>)}</div>
      </div>
    </section>

    <section className="hp-features mattress-features">
      <div className="hp-features-card"><h2>Why Choose Natural Latex</h2><div className="hp-features-grid">
        <article><i aria-hidden="true">✓</i><h3>Safe &amp; Certified</h3><p>Certified safe for your family</p></article>
        <article><i aria-hidden="true">≋</i><h3>Breathable &amp; Cool</h3><p>Natural ventilation for cool and comfortable sleep</p></article>
        <article><i aria-hidden="true">↕</i><h3>Durable &amp; Supportive</h3><p>Built to last with excellent elasticity and support</p></article>
        <article><i aria-hidden="true">＋</i><h3>Hypoallergenic</h3><p>Naturally resistant to dust mites and allergens</p></article>
      </div></div>
    </section>

    <section className="mattress-sleepers">
      <div className="mattress-sleepers-wrap">
        <div className="mattress-sleepers-header"><h2>Ideal for Every Sleeper</h2><p>Whether you sleep on your back, side, or stomach, our latex mattress provides the right support for you.</p></div>
        <div className="mattress-sleepers-grid">{sleepers.map(([title, description, image, alt]) => <article key={title}><img src={image} alt={alt}/><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div>
    </section>

    <section className="mattress-matrix">
      <div className="mattress-matrix-wrap">
        <div className="mattress-matrix-copy"><h2>US vs THEM:<br/>The Performance Benchmark</h2><p>Traditional multi-layered generic foam setups lose structural strength rapidly. See how MD Latex&apos;s clean organic core outperforms across vital metrics.</p>
          <div><span>✓</span><p><strong>Made For All Positions:</strong> Complete multi-zone shoulder correction for side, back, and stomach rest.</p></div>
          <div><span>✓</span><p><strong>Adjustable Core Height:</strong> Tailor the sleep density loft profile seamlessly to individual preferences.</p></div>
          <div><span>✓</span><p><strong>Tropical Heat Defense:</strong> Continuous open-pore matrices push body moisture away instantly.</p></div>
        </div>
        <div className="mattress-matrix-image"><img src="/images/md_latex_mattress_performance_benchmark.webp" alt="MD Latex versus competitor mattress performance comparison"/></div>
      </div>
    </section>
  </>;
}
