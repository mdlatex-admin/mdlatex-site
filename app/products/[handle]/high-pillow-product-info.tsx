"use client";

import {useRef,useState} from "react";

const gallery=[
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/13_64249f19-3ab4-4b0f-9376-945a7ac9384b.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/16_d8651bab-2c35-49bd-bc79-f18790b11e89.png?v=1785149120",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/11_577563aa-a613-4ec3-b987-35d868ef26bf.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/12.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/18_2929e286-cf73-4681-91a4-2b1eb83f04fe.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/15_07cc5c0c-a747-44fb-ac15-dc3e23cbc6c7.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/14_6c9d9dd2-bd42-46a4-b638-0a3771488615.png?v=1785149119",
  "https://cdn.shopify.com/s/files/1/0832/5038/1050/files/19_93eed49e-963c-474b-bd29-a6dd2b709e27.png?v=1785149119"
];

export default function HighPillowProductInfo(){
  const [current,setCurrent]=useState(0);const [type,setType]=useState<"Normal PIS1"|"Massage PSC">("Normal PIS1");const touchX=useRef(0);
  const choose=(next:"Normal PIS1"|"Massage PSC")=>{setType(next);setCurrent(next==="Normal PIS1"?0:1)};
  const swipe=(end:number)=>{const delta=end-touchX.current;if(Math.abs(delta)>45)setCurrent(value=>(value+(delta<0?1:-1)+gallery.length)%gallery.length)};
  return <section className="hp-product-shell">
    <div className="hp-gallery">
      <div className="hp-mobile-photo" onTouchStart={event=>touchX.current=event.touches[0].clientX} onTouchEnd={event=>swipe(event.changedTouches[0].clientX)}><img src={gallery[current]} alt={`${type} High Pillow view ${current+1}`}/></div>
      <div className="hp-gallery-collage">{gallery.map((image,index)=><button type="button" key={image} className={index===current?"is-current":""} onClick={()=>setCurrent(index)} aria-label={`View High Pillow image ${index+1}`}><img src={image} alt={`High Pillow product view ${index+1}`}/></button>)}</div>
      <div className="hp-gallery-dots" aria-label="Choose product image">{gallery.map((_,index)=><button type="button" key={index} className={index===current?"is-current":""} onClick={()=>setCurrent(index)} aria-label={`Image ${index+1}`}/>)}</div>
    </div>
    <div className="hp-product-copy">
      <p className="hp-product-rating"><span>★★★★</span><span className="hp-half-star">★</span> 4.8 From 1367 Reviews</p>
      <h1>High Pillow</h1>
      <p className="hp-product-description">Experience the perfect balance of comfort, support, and durability with our 100% natural latex pillow.</p>
      <ul className="hp-product-benefits"><li><i>✓</i><span><b>100% Natural Latex</b><small>Eco-friendly &amp; Sustainable</small></span></li><li><i>✓</i><span><b>Pressure Relief</b><small>Reduces pressure points and improves sleep</small></span></li><li><i>✓</i><span><b>Breathable &amp; Cool</b><small>Open-cell structure for better airflow</small></span></li><li><i>✓</i><span><b>Durable &amp; Long Lasting</b><small>Built to last 20 years</small></span></li></ul>
      <fieldset className="hp-type-picker"><legend>Type: {type}</legend><button type="button" className={type==="Normal PIS1"?"is-selected":""} aria-pressed={type==="Normal PIS1"} onClick={()=>choose("Normal PIS1")}>Normal PIS1</button><button type="button" className={type==="Massage PSC"?"is-selected":""} aria-pressed={type==="Massage PSC"} onClick={()=>choose("Massage PSC")}>Massage PSC</button></fieldset>
      <div className="hp-product-perks"><div><i>▣</i><span><b>Free Shipping</b><small>On orders over RM300</small></span></div><div><i>↻</i><span><b>Easy Returns</b><small>30-day return policy</small></span></div><div><i>♙</i><span><b>Secure Payment</b><small>100% secure checkout</small></span></div></div>
    </div>
  </section>
}
