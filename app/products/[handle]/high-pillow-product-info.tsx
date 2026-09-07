"use client";

import {useRef,useState} from "react";

const highGallery=[
  "/images/md_latex_high_pillow_productpicture1.webp",
  "/images/md_latex_high_pillow_productpicture2.webp",
  "/images/md_latex_high_pillow_productpicture3.webp",
  "/images/md_latex_high_pillow_productpicture4.webp",
  "/images/md_latex_high_pillow_productpicture5.webp",
  "/images/md_latex_high_pillow_productpicture6.webp",
  "/images/md_latex_high_pillow_productpicture7.webp",
  "/images/md_latex_high_pillow_productpicture8.webp"
];
const heightGallery=Array.from({length:10},(_,index)=>`/images/md_latex_height_pillow_productpicture${index+1}.webp`);
const shoulderGallery=Array.from({length:8},(_,index)=>`/images/md_latex_shoulder_pillow_productpicture${index+1}.webp`);

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

type PillowProduct="high-pillow"|"height-pillow"|"shoulder-pillow";
export default function HighPillowProductInfo({product="high-pillow"}:{product?:PillowProduct}){
  const height=product==="height-pillow";const shoulder=product==="shoulder-pillow";
  const defaultType=height?"Normal PT3":shoulder?"Shoulder PS4":"Normal PIS1";
  const [current,setCurrent]=useState(0);const [type,setType]=useState(defaultType);const [testimonial,setTestimonial]=useState(0);const [slideDirection,setSlideDirection]=useState<"left"|"right">("right");const touchX=useRef(0);const testimonialTouchX=useRef(0);
  const gallery=height?(type==="Children PT11"?["/images/md_latex_height_pillow_productpicture11_children_pt11.webp"]:heightGallery):shoulder?shoulderGallery:highGallery;
  const choose=(next:string,index:number)=>{setType(next);setCurrent(index)};
  const swipe=(end:number)=>{const delta=end-touchX.current;if(Math.abs(delta)>45)setCurrent(value=>(value+(delta<0?1:-1)+gallery.length)%gallery.length)};
  const moveTestimonial=(direction:"left"|"right")=>{setSlideDirection(direction);setTestimonial(value=>(value+(direction==="right"?1:-1)+testimonials.length)%testimonials.length)};
  const swipeTestimonial=(end:number)=>{const delta=end-testimonialTouchX.current;if(Math.abs(delta)>40)moveTestimonial(delta<0?"right":"left")};
  return <section className="hp-product-shell">
    <div className="hp-gallery">
      <div className="hp-mobile-photo" onTouchStart={event=>touchX.current=event.touches[0].clientX} onTouchEnd={event=>swipe(event.changedTouches[0].clientX)}><img src={gallery[current]} alt={`${type} ${height?"Height":shoulder?"Shoulder":"High"} Pillow view ${current+1}`}/></div>
      <div className="hp-gallery-collage">{gallery.map((image,index)=><button type="button" key={image} className={index===current?"is-current":""} onClick={()=>setCurrent(index)} aria-label={`View High Pillow image ${index+1}`}><img src={image} alt={`High Pillow product view ${index+1}`}/></button>)}</div>
      <div className="hp-gallery-dots" aria-label="Choose product image">{gallery.map((_,index)=><button type="button" key={index} className={index===current?"is-current":""} onClick={()=>setCurrent(index)} aria-label={`Image ${index+1}`}/>)}</div>
    </div>
    <div className="hp-product-copy">
      <p className="hp-made-in">Made in Malaysia</p>
      <p className="hp-product-rating"><span>★★★★</span><span className="hp-half-star">★</span> 4.8 From 1367 Reviews</p>
      <h1>{height?"Height Pillow":shoulder?"Shoulder Pillow":"High Pillow"}</h1>
      <p className="hp-product-description">Experience the perfect balance of comfort, support, and durability with our 100% natural latex pillow.</p>
      <ul className="hp-product-benefits"><li><i>✓</i><span><b>100% Natural Latex</b><small>Eco-friendly &amp; Sustainable</small></span></li><li><i>✓</i><span><b>Pressure Relief</b><small>Reduces pressure points and improves sleep</small></span></li><li><i>✓</i><span><b>Breathable &amp; Cool</b><small>Open-cell structure for better airflow</small></span></li><li><i>✓</i><span><b>Durable &amp; Long Lasting</b><small>Built to last 20 years</small></span></li></ul>
      <fieldset className="hp-type-picker"><legend>Type: {type}</legend>{(height?[{name:"Normal PT3",index:0},{name:"Massage PT3",index:9},{name:"Children PT11",index:0}]:shoulder?[{name:"Shoulder PS4",index:0}]:[{name:"Normal PIS1",index:0},{name:"Massage PSC",index:1}]).map(option=><button type="button" key={option.name} className={type===option.name?"is-selected":""} aria-pressed={type===option.name} onClick={()=>{if(option.name==="Children PT11"){setType(option.name);setCurrent(0)}else choose(option.name,option.index)}}>{option.name}</button>)}</fieldset>
      <div className="hp-product-perks"><div><i><PerkIcon type="truck"/></i><span><b>Free Shipping</b><small>On orders over RM300</small></span></div><div><i><PerkIcon type="returns"/></i><span><b>Easy Returns</b><small>30-day return policy</small></span></div><div><i><PerkIcon type="lock"/></i><span><b>Secure Payment</b><small>100% secure checkout</small></span></div></div>
      <div className="hp-faqs" aria-label="High Pillow frequently asked questions">{faqs.map(([question,answer])=><details key={question}><summary><i>✓</i>{question}<span>⌄</span></summary><div className="hp-faq-answer"><p>{answer}</p></div></details>)}</div>
      <section className="hp-testimonials hp-testimonials-inline" aria-label="Customer testimonials" onTouchStart={event=>testimonialTouchX.current=event.touches[0].clientX} onTouchEnd={event=>swipeTestimonial(event.changedTouches[0].clientX)}><div className={`hp-testimonial-slide slide-${slideDirection}`} key={testimonial}><blockquote><div className="hp-testimonial-heading"><h3>{testimonials[testimonial].title}</h3><span><button type="button" onClick={()=>moveTestimonial("left")} aria-label="Previous testimonial">‹</button><button type="button" onClick={()=>moveTestimonial("right")} aria-label="Next testimonial">›</button></span></div><p>{testimonials[testimonial].body}</p><footer>★★★★★</footer></blockquote></div></section>
    </div>
  </section>
}
