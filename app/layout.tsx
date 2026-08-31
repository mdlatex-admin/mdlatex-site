import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:{default:"MD Latex",template:"%s – MD Latex"},description:"Premium natural latex mattresses and pillows, made in Malaysia.",openGraph:{title:"Premium Latex For Better Living",description:"100% natural Malaysian latex bedding for cooler, healthier sleep.",images:[{url:"/og.png",width:1200,height:630}]},twitter:{card:"summary_large_image",images:["/og.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
