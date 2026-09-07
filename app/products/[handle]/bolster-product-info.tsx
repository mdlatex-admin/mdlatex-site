"use client";

import {useRef,useState} from "react";

const faqs=[
  ["Is a natural latex pillow better than memory foam?","Yes, especially for your neck. Natural latex offers an instant, buoyant response that lifts your head rather than letting it sink in like memory foam. It also features superior open-cell breathability, so it doesn't trap facial heat or create that claustrophobic, ‘stuck’ feeling."],
  ["How long does a natural latex pillow last?","While standard fiber or down pillows flatten out within a year, a high-quality natural latex pillow easily maintains its spring, height, and shape for 3 to 5 years. It is highly resilient and completely immune to clumping or sagging."],
  ["Is a latex pillow suitable for hot sleepers or tropical weather?","Absolutely. Our latex pillows are engineered with an advanced AirFlow pinhole matrix. This structural design allows fresh air to circulate constantly underneath your head, pushing out hot ambient air and moisture so you stay crisp all night."],
  ["Does a latex pillow help with neck pain and cervical support?","Yes. It provides proactive cervical support by filling the natural gap between your neck and the mattress. By keeping your spine in a straight, neutral line, it unloads pressure from your upper shoulders and stops morning stiffness before it starts."]
];

const testimonials=[
  {title:"No More Neck Knots",body:"I used to wake up every single morning with a stiff neck and tight shoulders. Switching to this latex pillow changed everything on night one. It lifts my head perfectly and never goes flat."},
  {title:"Stays Amazingly Cool",body:"Living in Malaysia, regular pillows always turn into hot sponges by midnight. This latex one stays incredibly breezy. No sweat, no constant pillow-flipping. Absolutely worth every cent."}
];

function PerkIcon({type}:{type:"truck"|"returns"|"lock"}){
  const common={viewBox:"0 0 32 32",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  if(type==="truck")return <svg {...common}><path d="M3 8h16v14H3zM19 13h5l5 5v4H19z"/><circle cx="9" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/><path d="M19 18h10"/></svg>;
  if(type==="lock")return <svg {...common}><rect x="6" y="14" width="20" height="15" rx="2"/><path d="M10 14V9a6 6 0 0 1 12 0v5"/><path d="M16 20v4"/></svg>;
  return <svg {...common}><path d="M25 10a11 11 0 0 0-18 3M7 13H2V8M7 22a11 11 0 0 0 18-3M25 19h5v5"/></svg>;
}

export default function BolsterProductInfo(){
  const [testimonial,setTestimonial]=useState(0);const touchX=useRef(0);
  const move=(amount:number)=>setTestimonial(value=>(value+amount+testimonials.length)%testimonials.length);
  return <section className="hp-product-shell">
    <div className="hp-gallery"><div className="hp-mobile-photo"><img src="/images/md_latex_bolster_productpicture1.webp" alt="MD Latex natural latex bolster"/></div><div className="hp-gallery-collage"><button type="button" className="is-current"><img src="/images/md_latex_bolster_productpicture1.webp" alt="MD Latex natural latex bolster product view"/></button></div><div className="hp-gallery-dots"><button type="button" className="is-current" aria-label="Bolster image 1"/></div></div>
    <div className="hp-product-copy">
      <p className="hp-made-in">Made in Malaysia</p><p className="hp-product-rating"><span>★★★★</span><span className="hp-half-star">★</span> 4.8 From 1367 Reviews</p><h1>Bolster</h1><p className="hp-product-description">Experience the perfect balance of comfort, support, and durability with our 100% natural latex bolster.</p>
      <ul className="hp-product-benefits"><li><i>✓</i><span><b>100% Natural Latex</b><small>Eco-friendly &amp; Sustainable</small></span></li><li><i>✓</i><span><b>Pressure Relief</b><small>Reduces pressure points and improves sleep</small></span></li><li><i>✓</i><span><b>Breathable &amp; Cool</b><small>Open-cell structure for better airflow</small></span></li><li><i>✓</i><span><b>Durable &amp; Long Lasting</b><small>Built to last 20 years</small></span></li></ul>
      <div className="hp-product-perks"><div><i><PerkIcon type="truck"/></i><span><b>Free Shipping</b><small>On orders over RM300</small></span></div><div><i><PerkIcon type="returns"/></i><span><b>Easy Returns</b><small>30-day return policy</small></span></div><div><i><PerkIcon type="lock"/></i><span><b>Secure Payment</b><small>100% secure checkout</small></span></div></div>
      <div className="hp-faqs" aria-label="Bolster frequently asked questions">{faqs.map(([question,answer])=><details key={question}><summary><i>✓</i>{question}<span>⌄</span></summary><div className="hp-faq-answer"><p>{answer}</p></div></details>)}</div>
      <section className="hp-testimonials hp-testimonials-inline" aria-label="Customer testimonials" onTouchStart={event=>touchX.current=event.touches[0].clientX} onTouchEnd={event=>{const delta=event.changedTouches[0].clientX-touchX.current;if(Math.abs(delta)>40)move(delta<0?1:-1)}}><div className="hp-testimonial-slide" key={testimonial}><blockquote><div className="hp-testimonial-heading"><h3>{testimonials[testimonial].title}</h3><span><button type="button" onClick={()=>move(-1)} aria-label="Previous testimonial">‹</button><button type="button" onClick={()=>move(1)} aria-label="Next testimonial">›</button></span></div><p>{testimonials[testimonial].body}</p><footer>★★★★★</footer></blockquote></div></section>
    </div>
  </section>;
}
