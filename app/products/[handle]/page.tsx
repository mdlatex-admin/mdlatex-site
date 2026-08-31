import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {Footer,Header} from "../../site-components";
import {productByHandle} from "../../product-data";
import HighPillowDetails from "./high-pillow-details";

export async function generateMetadata({params}:{params:Promise<{handle:string}>}):Promise<Metadata>{const{handle}=await params;return{title:productByHandle(handle)?.title||"Product"}}

export default async function ProductPage({params}:{params:Promise<{handle:string}>}){
  const{handle}=await params;const product=productByHandle(handle);if(!product)notFound();
  return <><Header/><main className={`basic-product template-${product.template} ${product.handle==="high-pillow"?"high-pillow-product":""}`} data-template={product.template}>
    <div className="product-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/collections/${product.collection}`}>{product.collection==="baby-kids"?"Baby & Kids":product.collection[0].toUpperCase()+product.collection.slice(1)}</Link></div>
    <section className="basic-product-grid"><div className="basic-product-media"><img src={product.image} alt={product.title}/></div><div className="basic-product-info"><p className="product-origin">Made in Malaysia</p><p className="product-rating">★★★★★ <u>4.8 From 1367 Reviews</u></p><h1>{product.title}</h1><p className="basic-price">RM{product.price.toFixed(2)} MYR</p><p>Experience the perfect balance of comfort, support, and durability with our 100% natural latex products.</p><ul><li><b>100% Natural Latex</b><span>Eco-friendly &amp; sustainable</span></li><li><b>Pressure Relief</b><span>Reduces pressure points and improves sleep</span></li><li><b>Breathable &amp; Cool</b><span>Open-cell structure for better airflow</span></li><li><b>Durable &amp; Long Lasting</b><span>Made for years of comfortable sleep</span></li></ul><button className="product-cta">Add to cart</button><div className="product-perks"><span>Free Shipping<small>On orders over RM300</small></span><span>Easy Returns<small>30-day return policy</small></span><span>Secure Payment<small>100% secure checkout</small></span></div></div></section>
    {product.handle==="high-pillow"&&<HighPillowDetails/>}
    {product.template==="baby-kids"&&<section className="shared-template-note"><p>Baby &amp; Kids Collection</p><h2>Pure botanical comfort for growing bodies</h2><p>This shared Baby &amp; Kids template adapts to each product&apos;s own imagery and details.</p></section>}
  </main><Footer/></>
}
