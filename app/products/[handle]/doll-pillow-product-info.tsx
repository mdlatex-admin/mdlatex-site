"use client";

import {useRef, useState} from "react";

type BabyProduct = "doll-pillow-pdoll" | "kid-pillow-pkid" | "baby-mattress-set";
const dollGallery = [
  ["/images/md_latex_doll_pillow_productpicture1_collection.webp", "MD Latex Doll Pillow animal collection"],
  ["/images/md_latex_doll_pillow_productpicture2_lion.webp", "Lion Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture3_elephant.webp", "Elephant Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture4_tiger.webp", "Tiger Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture5_panda.webp", "Panda Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture6_rabbit.webp", "Rabbit Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture7_bear.webp", "Bear Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture8_dog.webp", "Dog Doll Pillow"],
  ["/images/md_latex_doll_pillow_productpicture9_monkey.webp", "Monkey Doll Pillow"]
] as const;

const productConfig = {
  "doll-pillow-pdoll": {title: "Doll Pillow (pdoll)", description: "Experience the perfect balance of comfort, support, and durability with our 100% natural latex pillow.", gallery: dollGallery},
  "kid-pillow-pkid": {title: "Kid Pillow (pkid)", description: "Gentle, breathable natural latex support designed for growing children and comfortable everyday sleep.", gallery: [["/images/md_latex_kid_pillow_productpicture1.webp", "MD Latex Kid Pillow"]] as const},
  "baby-mattress-set": {title: "Baby Mattress Set", description: "A pure, breathable natural latex sleep foundation designed to support safe rest and healthy early development.", gallery: [["/images/md_latex_baby_mattress_set_productpicture1.webp", "MD Latex Baby Mattress Set"]] as const}
};

const faqs = [
  ["Is natural latex safe for a newborn's sensitive skin?", "Yes. Our natural latex contains absolutely zero synthetic chemical blends, formaldehydes, or harsh memory foam fire retardants that could trigger rashes. It provides a pure, botanically non-toxic surface that is completely safe for daily contact with delicate baby skin."],
  ["Will this pillow last through my child's entire childhood?", "Absolutely. While standard fiber or synthetic foam pillows flatten out within months, high-quality natural latex maintains its structural height and shape for years, providing consistent support throughout early childhood."],
  ["Will this pillow keep my child cool if they sweat a lot?", "Yes. Natural latex features an open-cell matrix with thousands of molded airflow channels that pull heat away from your child, keeping delicate skin cool, dry, and comfortable."],
  ["How does natural latex support my child’s growing spine and posture?", "Natural latex provides an active, floating counter-lift that conforms to a child's natural skeletal curves while supporting healthy neck and spinal alignment without letting the head sink too deeply."]
];

const reviews = [
  {title: "Absolute Peace of Mind", body: "I was terrified of that toxic chemical smell from standard foam cot pillows. This natural latex one had absolutely zero chemical odor right out of the box. My 6-month-old sleeps so soundly on it, and knowing her lungs are completely safe gives me total peace of mind. Exceptional quality!"},
  {title: "No More Sweaty Wakeups!", body: "My toddler used to wake up multiple times a night drenched in sweat with damp hair, especially in our tropical heat. Since switching to this breathable latex pillow, his head stays completely dry and cool all night long. Highly recommended!"}
];

function PerkIcon({type}: {type: "truck" | "returns" | "lock"}) {
  const common = {viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true};
  if (type === "truck") return <svg {...common}><path d="M3 8h16v14H3zM19 13h5l5 5v4H19z"/><circle cx="9" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/></svg>;
  if (type === "lock") return <svg {...common}><rect x="6" y="14" width="20" height="15" rx="2"/><path d="M10 14V9a6 6 0 0 1 12 0v5"/></svg>;
  return <svg {...common}><path d="M25 10a11 11 0 0 0-18 3M7 13H2V8M7 22a11 11 0 0 0 18-3M25 19h5v5"/></svg>;
}

export default function DollPillowProductInfo({product = "doll-pillow-pdoll"}: {product?: BabyProduct}) {
  const item = productConfig[product];
  const [current, setCurrent] = useState(0);
  const [review, setReview] = useState(0);
  const galleryTouchStart = useRef(0);
  const touchStart = useRef(0);
  const move = (direction: number) => setReview(value => (value + direction + reviews.length) % reviews.length);
  const swipeGallery = (end: number) => {
    const delta = end - galleryTouchStart.current;
    if (Math.abs(delta) > 45) setCurrent(value => (value + (delta < 0 ? 1 : -1) + item.gallery.length) % item.gallery.length);
  };

  return <section className="hp-product-shell doll-product-shell">
    <div className={`hp-gallery doll-gallery ${item.gallery.length > 1 ? "has-many" : "has-one"}`}>
      <div className="hp-mobile-photo" onTouchStart={event => galleryTouchStart.current = event.touches[0].clientX} onTouchEnd={event => swipeGallery(event.changedTouches[0].clientX)}><img src={item.gallery[current][0]} alt={item.gallery[current][1]}/></div>
      <div className="hp-gallery-collage">{item.gallery.map(([src, alt], index) => <button type="button" key={src} className={index === current ? "is-current" : ""} onClick={() => setCurrent(index)} aria-label={`View ${item.title} image ${index + 1}`}><img src={src} alt={alt}/></button>)}</div>
      {item.gallery.length > 1 && <div className="hp-gallery-dots" aria-label={`Choose ${item.title} product image`}>{item.gallery.map(([src], index) => <button type="button" key={src} className={index === current ? "is-current" : ""} onClick={() => setCurrent(index)} aria-label={`Image ${index + 1}`}/>)}</div>}
    </div>
    <div className="hp-product-copy">
      <p className="hp-made-in">Made in Malaysia</p>
      <p className="hp-product-rating"><span>★★★★</span><span className="hp-half-star">★</span> 4.8 From 1367 Reviews</p>
      <h1>{item.title}</h1>
      <p className="hp-product-description">{item.description}</p>
      <ul className="hp-product-benefits">
        <li><i>✓</i><span><b>100% Natural Latex</b><small>Eco-friendly &amp; Sustainable</small></span></li>
        <li><i>✓</i><span><b>Pressure Relief</b><small>Reduces pressure points and improves sleep</small></span></li>
        <li><i>✓</i><span><b>Breathable &amp; Cool</b><small>Open-cell structure for better airflow</small></span></li>
        <li><i>✓</i><span><b>Durable &amp; Long Lasting</b><small>Built to last for years</small></span></li>
      </ul>
      <button type="button" className="product-cta doll-add-to-cart">Add to cart</button>
      <div className="hp-product-perks">
        <div><i><PerkIcon type="truck"/></i><span><b>Free Shipping</b><small>On orders over RM300</small></span></div>
        <div><i><PerkIcon type="returns"/></i><span><b>Easy Returns</b><small>30-day return policy</small></span></div>
        <div><i><PerkIcon type="lock"/></i><span><b>Secure Payment</b><small>100% secure checkout</small></span></div>
      </div>
      <div className="hp-faqs doll-faqs">{faqs.map(([question, answer]) => <details key={question}><summary><i>✓</i>{question}<span>⌃</span></summary><div className="hp-faq-answer"><p>{answer}</p></div></details>)}</div>
      <section className="hp-testimonials hp-testimonials-inline" aria-label="Doll Pillow customer testimonials" onTouchStart={event => touchStart.current = event.touches[0].clientX} onTouchEnd={event => {if (Math.abs(event.changedTouches[0].clientX - touchStart.current) > 40) move(event.changedTouches[0].clientX < touchStart.current ? 1 : -1)}}>
        <blockquote><div className="hp-testimonial-heading"><h3>{reviews[review].title}</h3><span><button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">‹</button><button type="button" onClick={() => move(1)} aria-label="Next testimonial">›</button></span></div><p>{reviews[review].body}</p><footer>★★★★★</footer></blockquote>
      </section>
    </div>
  </section>;
}
