import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Footer,Header} from "../../site-components";
import {CollectionCatalogue} from "./collection-catalogue";
import {collectionTitles,products} from "../../product-data";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;return{title:collectionTitles[slug]||"Products"}}
const collectionOrder:Record<string,string[]>={pillows:["bolster-pb","shoulder-pillow","height-pillow","high-pillow"],"baby-kids":["doll-pillow-pdoll","kid-pillow-pkid","baby-mattress-set"]};
export default async function Collection({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(!collectionTitles[slug])notFound();const shown=slug==="all"?products:products.filter(product=>product.collection===slug).sort((a,b)=>(collectionOrder[slug]?.indexOf(a.handle)??0)-(collectionOrder[slug]?.indexOf(b.handle)??0));return <><Header/><CollectionCatalogue title={collectionTitles[slug]} products={shown}/><Footer/></>}
