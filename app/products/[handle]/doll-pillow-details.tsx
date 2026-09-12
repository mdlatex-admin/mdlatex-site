"use client";

import {useEffect, useRef, useState} from "react";

const mechanisms = [
  {tab: "Growth Support", title: "SpineAlign™ Kids", sub: "Orthopedic bone development support.", body: "Growing bodies require precise support. Our natural latex layer distributes physical pressure uniformly, ensuring a child's delicate spine remains straight and tension-free throughout critical overnight growth spurts.", image: "/images/md_latex_doll_pillow_growth_support.webp", alt: "Spinal development support for children"},
  {tab: "Pure Safety", title: "EcoShield™ Bio", sub: "Hypoallergenic barrier for sensitive skin.", body: "Infant skin reacts quickly to synthetics. Made directly from natural plant latex, this structure contains zero polyurethane foams or toxic chemical additives, providing an inherently clean, rash-free resting space.", image: "/images/md_latex_doll_pillow_pure_safety.webp", alt: "Pure natural hypoallergenic latex core"},
  {tab: "Easy Cleaning", title: "SpillGuard™ Cover", sub: "Fast unzipping for unexpected spills.", body: "Accidents happen frequently with children. Our fully removable protective casing unzips smoothly for quick machine washing. Keep bedding hygienically refreshed and free from stale stains, trapped sweat, or lingering milk odors.", image: "/images/md_latex_doll_pillow_easy_cleaning.webp", alt: "Removable washable protective pillow cover"},
  {tab: "Cool & Dry", title: "BreatheChannels™", sub: "No more heat rashes or night sweating.", body: "Children regulate body temperature less efficiently than adults. Molded with continuous micro-pinholes, the open-cell core disperses ambient warmth rapidly, keeping kids beautifully cool and sweat-free through muggy tropical nights.", image: "/images/md_latex_doll_pillow_cool_dry.webp", alt: "Airflow pinholes for heat dispersion"}
];

const stages = [
  ["Infant Cradles (0–12M)", "Firm, highly resilient support built safely to keep sensitive newborn respiratory pathways clear.", "/images/md_latex_doll_pillow_infant_stage.webp", "Infant sleep collection stage"],
  ["Toddler Beds (1–3Y)", "Responsive pressure relief that adapts dynamically as young toddlers toss, turn, and discover comfort.", "/images/md_latex_doll_pillow_toddler_stage.webp", "Toddler sleep collection stage"],
  ["Growing Kids (4Y+)", "Targeted skeletal positioning engineered to cushion expanding bone frames through nightly growth spurts.", "/images/md_latex_doll_pillow_growing_kids_stage.webp", "Growing kids sleep collection stage"]
] as const;

export default function DollPillowDetails() {
  const [active, setActive] = useState(0);
  const trusted = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = trusted.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {node.classList.add("is-visible"); observer.disconnect();}
    }, {threshold: .25});
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <>
    <section className="hp-support-section doll-trusted-section"><div className="mdl-trusted" ref={trusted}><div className="mdl-trusted-wrap">
      <div className="mdl-trusted-content"><div className="mdl-trusted-rating"><span className="mdl-trusted-stars">★★★★★</span><span>Pediatric Safe <strong>4.9/5 Rated</strong></span></div><h2 className="mdl-trusted-headline">Pure Botanical Care.<br/>Safe Infant Sleep.</h2><p className="mdl-trusted-subhead">Parents are experiencing fewer middle-of-the-night wakeups and total allergen peace of mind by choosing hypoallergenic natural latex for their little ones.</p><div className="mdl-trusted-stats">{[[96,"Chemical-Free Pure Construction","Crafted completely without toxic polyurethane off-gassing, keeping sensitive infant lungs entirely safe."],[91,"Breezy Heat-Venting Matrix","Open-cell air channels rapidly push head heat outward, preventing damp hair and fussy sweat wakeups."],[88,"Inherent Allergen Shield","Natural botanical properties actively shield the pillow from dust mites, bacteria, and skin irritants."]].map(([percent,title,description]) => <div className="mdl-trusted-stat" key={String(title)}><div className="mdl-trusted-circle"><svg viewBox="0 0 64 64" aria-hidden="true"><circle className="mdl-trusted-circle-bg" cx="32" cy="32" r="27"/><circle className="mdl-trusted-circle-fg" cx="32" cy="32" r="27" style={{"--percent": percent} as React.CSSProperties}/></svg><span>{percent}%</span></div><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div>
      <div className="mdl-trusted-image"><img src="/images/md_latex_doll_pillow_trusted_baby_sleep.webp" alt="MD Latex gentle natural support for children"/></div>
    </div></div></section>

    <section className="mdl-tabs doll-tabs"><div className="mdl-tabs-wrap"><div className="mdl-tabs-nav" role="tablist" aria-label="Doll Pillow mechanisms">{mechanisms.map((item,index) => <button type="button" key={item.tab} className={`mdl-tab-btn ${active===index?"is-active":""}`} role="tab" aria-selected={active===index} onClick={() => setActive(index)}>{item.tab}</button>)}</div><div className="mdl-tabs-content">{mechanisms.map((item,index) => <div key={item.tab} className={`mdl-tab-panel ${active===index?"is-active":""}`} role="tabpanel" hidden={active!==index}><div className="mdl-tab-text"><h3 className="mdl-tab-headline">{item.title}</h3><p className="mdl-tab-subhead">{item.sub}</p><p className="mdl-tab-body">{item.body}</p></div><div className="mdl-tab-image"><img src={item.image} alt={item.alt}/></div></div>)}</div></div></section>

    <section className="hp-comparison doll-comparison"><div className="hp-comparison-wrap"><div className="hp-comparison-copy"><h2>Why Choose MD<br/>Latex Instead?</h2><p>Pure botanical care. Certified safe support. Healthier sleep for growing bodies.</p></div><div className="hp-table" role="table" aria-label="MD Latex Doll Pillow compared with other children's pillows"><div className="hp-row hp-head"><span></span><b>MD<br/>Latex</b><strong>Others</strong></div>{["Pediatric Neck Support","Chemical Off-gassing Safety","Tropical Heat & Sweat Defense","Allergy & Respiratory Shield","Easy-Clean Hygiene"].map(label => <div className="hp-row" key={label}><span>{label}</span><b>✓</b><strong>×</strong></div>)}</div></div></section>

    <section className="hp-features doll-features"><div className="hp-features-card"><h2>The Purest Sleep Environment</h2><div className="hp-features-grid"><article><i>✓</i><h3>Pediatric Certified</h3><p>100% toxic-free and completely tested for fragile infant respiratory systems</p></article><article><i>≋</i><h3>Anti-Rash Ventilation</h3><p>Continuous air circulation prevents body moisture and clammy heat friction</p></article><article><i>↕</i><h3>Skeletal Growth Care</h3><p>Resilient botanical lift aligns and cushions developing bones night after night</p></article><article><i>＋</i><h3>Hypoallergenic Shield</h3><p>Naturally resistant to dust mites, mold, and bacteria to protect delicate skin</p></article></div></div></section>

    <section className="doll-stages"><div className="doll-stages-wrap"><div className="doll-stages-header"><h2>Designed for Every Growing Stage</h2><p>From safe infant nurseries to energetic toddler playrooms, our natural latex configurations support healthy development journeys.</p></div><div className="doll-stages-grid">{stages.map(([title,description,image,alt]) => <article key={title}><div><img src={image} alt={alt}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="doll-split"><div className="doll-split-wrap"><div><h2>The Safest Foundation for Their First Years</h2><p>Infants spend up to 16 hours a day sleeping. During this critical development phase, their tiny lungs and sensitive skin are highly vulnerable to the harsh chemicals, glues, and synthetic off-gassing found in standard polyurethane foam.</p><p>MD Latex Baby &amp; Kids products are poured exclusively from pure, locally sourced Malaysian botanical latex, providing a hypoallergenic and deeply breathable microclimate for safe rest and healthy growth.</p></div><figure><img src="/images/md_latex_doll_pillow_safe_foundation.webp" alt="Safe and breathable natural latex baby sleep environment"/></figure></div></section>

    <section className="doll-pillars"><div className="doll-pillars-wrap"><h2>Engineered for Infant Protection</h2><div className="doll-pillars-grid"><article><i>≋</i><h3>Anti-Suffocation Airflow</h3><p>Our biconical pinhole matrix ensures constant air circulation, allowing heat and exhaled air to pass through the pillow.</p></article><article><i>◇</i><h3>Inherent Allergen Barrier</h3><p>Natural rubber inherently resists dust mites, bacteria, and mold, reducing common triggers for sensitive skin and congestion.</p></article><article><i>♢</i><h3>Easy-Wash Hygiene</h3><p>The ultra-soft zip-off cover is machine washable, helping parents maintain a fresh and hygienic sleep space.</p></article></div><figure><img src="/images/md_latex_doll_pillow_infant_protection.webp" alt="Breathable natural latex infant protection engineering"/></figure></div></section>

    <section className="doll-split doll-split-reverse"><div className="doll-split-wrap"><figure><img src="/images/md_latex_doll_pillow_spinal_support.webp" alt="Proper spinal alignment for toddlers and children"/></figure><div><h2>Firm Support for Rapidly Growing Bones</h2><p>Ultra-plush memory foam lets a child&apos;s head sink too deeply and can fail to support a developing skeletal structure.</p><p>MD Latex balances gentle contouring with responsive push-back resistance, helping keep your child&apos;s neck and spine in a neutral alignment from their earliest naps through the toddler years.</p></div></div></section>
  </>;
}
