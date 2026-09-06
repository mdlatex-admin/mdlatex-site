import type {Metadata} from "next";
import {Footer,Header} from "../../site-components";
import AboutContent from "./about-content";
export const metadata:Metadata={title:"About Us"};
export default function About(){return <><Header/><AboutContent/><Footer/></>}
