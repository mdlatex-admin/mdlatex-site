"use client";

import {useRef, useState} from "react";

const sizes = ["Single (100 x 200 cm)", "Queen (150 x 200 cm)", "King (180 x 200 cm)", "Super King (200 x 200 cm)"];
const thicknesses = ["5 cm", "7.5 cm", "10 cm", "15 cm"];
const gallery = [
  {src: "/images/md_latex_natural_latex_mattress_productpicture1_hero.webp", alt: "MD Latex 100% natural latex mattress product overview"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture2_malaysian_natural_latex_benefits.webp", alt: "Premium Malaysian natural latex mattress benefits"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture3_spinal_support.webp", alt: "Natural latex mattress supporting proper spinal alignment"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture4_sleeping_positions.webp", alt: "Natural latex mattress support for every sleeping position"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture5_mattress_benefits.webp", alt: "MD Latex natural mattress cooling and hygiene benefits"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture6_chiropractor_recommended.webp", alt: "Chiropractor recommendation for MD Latex natural mattress"},
  {src: "/images/md_latex_natural_latex_mattress_productpicture7_comparison.webp", alt: "MD Latex mattress compared with other mattresses"}
];
const faqs = [
  ["Is natural latex better than memory foam?", "Natural latex provides more responsive support, better airflow, and longer-lasting durability compared to traditional memory foam. Unlike memory foam, latex does not trap as much heat and naturally maintains its shape over time, helping reduce sagging and body impressions."],
  ["How long does a latex mattress last?", "A high-quality natural latex mattress can last 10–20 years with proper care. Latex is known for its resilience and ability to maintain consistent support over time, making it one of the most durable mattress materials available."],
  ["Is a latex mattress suitable for hot sleepers?", "Yes. Natural latex features an open-cell structure with built-in airflow channels that improve breathability and temperature regulation, allowing heat to dissipate more effectively than conventional foam mattresses."],
  ["Does a latex mattress help with back or neck support?", "Natural latex adapts to your body while providing consistent support across the mattress surface. This promotes proper spinal alignment and reduces pressure points around the shoulders, hips, and lower back."]
];
const reviews = [
  {title: "Good Quality", body: "I used to wake up with terrible lower back pain, but since switching to this natural latex mattress, I feel completely refreshed every morning. The support is incredible!"},
  {title: "Nice Product", body: "Supportive, breathable, and exceptionally well made. It made our sleep noticeably more comfortable from the first night."}
];

function PerkIcon({type}: {type: "truck" | "returns" | "lock"}) {
  const common = {viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true};
  if (type === "truck") return <svg {...common}><path d="M3 8h16v14H3zM19 13h5l5 5v4H19z"/><circle cx="9" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/></svg>;
  if (type === "lock") return <svg {...common}><rect x="6" y="14" width="20" height="15" rx="2"/><path d="M10 14V9a6 6 0 0 1 12 0v5"/></svg>;
  return <svg {...common}><path d="M25 10a11 11 0 0 0-18 3M7 13H2V8M7 22a11 11 0 0 0 18-3M25 19h5v5"/></svg>;
}

export default function MattressProductInfo() {
  const [current, setCurrent] = useState(0);
  const [review, setReview] = useState(0);
  const galleryTouchStart = useRef(0);
  const touchStart = useRef(0);
  const move = (direction: number) => setReview(value => (value + direction + reviews.length) % reviews.length);
  const swipeGallery = (end: number) => {
    const delta = end - galleryTouchStart.current;
    if (Math.abs(delta) > 45) setCurrent(value => (value + (delta < 0 ? 1 : -1) + gallery.length) % gallery.length);
  };

  return <section className="hp-product-shell mattress-product-shell">
    <div className="hp-gallery mattress-gallery">
      <div className="hp-mobile-photo" onTouchStart={event => galleryTouchStart.current = event.touches[0].clientX} onTouchEnd={event => swipeGallery(event.changedTouches[0].clientX)}><img src={gallery[current].src} alt={gallery[current].alt}/></div>
      <div className="hp-gallery-collage">{gallery.map((image, index) => <button type="button" key={image.src} className={index === current ? "is-current" : ""} onClick={() => setCurrent(index)} aria-label={`View mattress image ${index + 1}`}><img src={image.src} alt={image.alt}/></button>)}</div>
      <div className="hp-gallery-dots" aria-label="Choose mattress product image">{gallery.map((image, index) => <button type="button" key={image.src} className={index === current ? "is-current" : ""} onClick={() => setCurrent(index)} aria-label={`Mattress image ${index + 1}`}/>)}</div>
    </div>
    <div className="hp-product-copy">
      <p className="hp-made-in">Made in Malaysia</p>
      <p className="hp-product-rating"><span>★★★★</span><span className="hp-half-star">★</span> 4.8 From 1367 Reviews</p>
      <h1>100% Natural Latex Mattress</h1>
      <p className="hp-product-description">Experience the perfect balance of comfort, support, and durability with our 100% natural latex mattress.</p>
      <ul className="hp-product-benefits">
        <li><i>✓</i><span><b>100% Natural Latex</b><small>Eco-friendly &amp; Sustainable</small></span></li>
        <li><i>✓</i><span><b>Pressure Relief</b><small>Reduces pressure points and improves sleep</small></span></li>
        <li><i>✓</i><span><b>Breathable &amp; Cool</b><small>Open-cell structure for better airflow</small></span></li>
        <li><i>✓</i><span><b>Durable &amp; Long Lasting</b><small>Built to last 20 years</small></span></li>
      </ul>
      <div className="mattress-selectors">
        <label>Bedding size<select defaultValue={sizes[0]}>{sizes.map(size => <option key={size}>{size}</option>)}</select></label>
        <label>Thickness<select defaultValue={thicknesses[0]}>{thicknesses.map(thickness => <option key={thickness}>{thickness}</option>)}</select></label>
      </div>
      <div className="hp-product-perks">
        <div><i><PerkIcon type="truck"/></i><span><b>Free Shipping</b><small>On orders over RM300</small></span></div>
        <div><i><PerkIcon type="returns"/></i><span><b>Easy Returns</b><small>30-day return policy</small></span></div>
        <div><i><PerkIcon type="lock"/></i><span><b>Secure Payment</b><small>100% secure checkout</small></span></div>
      </div>
      <div className="hp-faqs mattress-faqs">{faqs.map(([question, answer]) => <details key={question}><summary><i>✓</i>{question}<span>⌃</span></summary><div className="hp-faq-answer"><p>{answer}</p></div></details>)}</div>
      <section className="hp-testimonials hp-testimonials-inline" aria-label="Customer testimonials" onTouchStart={event => touchStart.current = event.touches[0].clientX} onTouchEnd={event => {if (Math.abs(event.changedTouches[0].clientX - touchStart.current) > 40) move(event.changedTouches[0].clientX < touchStart.current ? 1 : -1)}}>
        <blockquote><div className="hp-testimonial-heading"><h3>{reviews[review].title}</h3><span><button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">‹</button><button type="button" onClick={() => move(1)} aria-label="Next testimonial">›</button></span></div><p>{reviews[review].body}</p><footer>★★★★★</footer></blockquote>
      </section>
    </div>
  </section>;
}
