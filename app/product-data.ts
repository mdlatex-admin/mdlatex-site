export type Product={handle:string;title:string;collection:"mattresses"|"pillows"|"baby-kids";image:string;price:number;available:boolean;pillowType?:string;template:"mattress"|"pillow"|"baby-kids"};
export const products:Product[]=[
{handle:"100-natural-latex-mattress",title:"100% Natural Latex Mattress",collection:"mattresses",image:"https://mdlatex.com.my/cdn/shop/files/1_6b128501-8c47-4fba-82b2-2d566c805a77.png?v=1783250421&width=900",price:0,available:true,template:"mattress"},
{handle:"baby-mattress-set",title:"Baby Mattress Set",collection:"baby-kids",image:"https://mdlatex.com.my/cdn/shop/files/Baby_Mattress_Set.png?v=1779266652&width=900",price:0,available:true,template:"baby-kids"},
{handle:"bolster-pb",title:"Bolster",collection:"pillows",image:"https://mdlatex.com.my/cdn/shop/files/30.png?v=1785149841&width=900",price:0,available:true,pillowType:"Bolster",template:"pillow"},
{handle:"doll-pillow-pdoll",title:"Doll Pillow (pdoll)",collection:"baby-kids",image:"https://mdlatex.com.my/cdn/shop/files/Doll_Pillow_pdoll.png?v=1779266652&width=900",price:0,available:true,pillowType:"Kids",template:"baby-kids"},
{handle:"height-pillow",title:"Height Pillow",collection:"pillows",image:"https://mdlatex.com.my/cdn/shop/files/MD_Latex_Pillow_1.png?v=1783246220&width=900",price:0,available:true,pillowType:"Height",template:"pillow"},
{handle:"high-pillow",title:"High Pillow",collection:"pillows",image:"https://mdlatex.com.my/cdn/shop/files/13_64249f19-3ab4-4b0f-9376-945a7ac9384b.png?v=1785149119&width=900",price:0,available:true,pillowType:"High",template:"pillow"},
{handle:"kid-pillow-pkid",title:"Kid Pillow (pkid)",collection:"baby-kids",image:"https://mdlatex.com.my/cdn/shop/files/Kid_Pillow_pkid.png?v=1779266652&width=900",price:0,available:true,pillowType:"Kids",template:"baby-kids"},
{handle:"shoulder-pillow",title:"Shoulder Pillow",collection:"pillows",image:"https://mdlatex.com.my/cdn/shop/files/23_2effdd24-4edc-407b-9468-5f5f2904b7fd.png?v=1785149614&width=900",price:0,available:true,pillowType:"Shoulder",template:"pillow"}
];
export const collectionTitles:Record<string,string>={all:"Shop All",mattresses:"Mattresses",pillows:"Pillows","baby-kids":"Baby & Kids"};
export const productByHandle=(handle:string)=>products.find(product=>product.handle===handle);
