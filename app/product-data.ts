export type Product={handle:string;title:string;collection:"mattresses"|"pillows"|"baby-kids";image:string;price:number;available:boolean;pillowType?:string;template:"mattress"|"pillow"|"baby-kids"};
export const products:Product[]=[
{handle:"100-natural-latex-mattress",title:"100% Natural Latex Mattress",collection:"mattresses",image:"/images/md_latex_natural_latex_mattress_productpicture1_hero.webp",price:0,available:true,template:"mattress"},
{handle:"baby-mattress-set",title:"Baby Mattress Set",collection:"baby-kids",image:"/images/md_latex_baby_mattress_set_productpicture1.webp",price:0,available:true,template:"baby-kids"},
{handle:"bolster-pb",title:"Bolster",collection:"pillows",image:"/images/md_latex_bolster_productpicture1.webp",price:0,available:true,pillowType:"Bolster",template:"pillow"},
{handle:"doll-pillow-pdoll",title:"Doll Pillow (pdoll)",collection:"baby-kids",image:"/images/md_latex_doll_pillow_productpicture1.webp",price:0,available:true,pillowType:"Kids",template:"baby-kids"},
{handle:"height-pillow",title:"Height Pillow",collection:"pillows",image:"/images/md_latex_height_pillow_productpicture1.webp",price:0,available:true,pillowType:"Height",template:"pillow"},
{handle:"high-pillow",title:"High Pillow",collection:"pillows",image:"/images/md_latex_high_pillow_productpicture1.webp",price:0,available:true,pillowType:"High",template:"pillow"},
{handle:"kid-pillow-pkid",title:"Kid Pillow (pkid)",collection:"baby-kids",image:"/images/md_latex_kid_pillow_productpicture1.webp",price:0,available:true,pillowType:"Kids",template:"baby-kids"},
{handle:"shoulder-pillow",title:"Shoulder Pillow",collection:"pillows",image:"/images/md_latex_shoulder_pillow_productpicture1.webp",price:0,available:true,pillowType:"Shoulder",template:"pillow"}
];
export const collectionTitles:Record<string,string>={all:"Shop All",mattresses:"Mattresses",pillows:"Pillows","baby-kids":"Baby & Kids"};
export const productByHandle=(handle:string)=>products.find(product=>product.handle===handle);
