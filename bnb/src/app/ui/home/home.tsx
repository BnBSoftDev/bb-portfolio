import { Jost } from "next/font/google";
import Image from "next/image";
import bgImg from "/public/homebg.png";
import bgImg1 from "/public/homebg1.png";
import React, { use, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { fetchDict } from "@/app/lib/utils";
import { useTheme } from "../topnavbar/ThemeProvider";

const jost = Jost({ subsets: ["latin"] });

export default function Home({ lang }: { lang: string }) {
  const [isMobile, setIsMobile] = useState(false);
  
  const handleResize = () => {
    console.log(window.innerWidth);
    if(window.innerWidth < 768){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  }



  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener('resize',handleResize);}}
  , []);
  const  theme  = useTheme();
  const [content, setContent] = useState({
    h1_loula: "",
    h1_thenia: "",
    p_home: "",
    get_started: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDict(lang);
      setContent(data);
    };

    fetchData();
  }, [lang]);

  return (
    <section className="pt-28 h-fit mb-30 flex w-screen justify-between" id="Home">
      <div className="md:pl-40 md:w-1/2 container mx-auto homeContainer relative">
        <h1
          className={`${jost.className} md:text-7xl text-5xl text-center md:text-left`} style = {{color:lang=== "tn"? "rgba(40,132,248,1)": theme.theme === "Dark"? "white" : "black"}}
          
        >
          {content.h1_loula}
        </h1>
        <h1
          className={`${jost.className} text-7xl text-center md:text-left`} style = {{color:lang!== "tn"? "rgba(40,132,248,1)": theme.theme === "Dark"? "white" : "black"}} 
          
        >
          {content.h1_thenia}
        </h1>
        <p
          className={`text-xl text-gray-900 text-${
            theme.theme === "Dark" ? "white" : "black"
          } pt-4`}
        >
          {isMobile?'':content.p_home}
        </p><ScrollLink
            to="Contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
        <button
          style={{
            boxShadow:
              theme.theme === "Dark" ? "-1px 1px 0 1px white" : "-1px 1px 0 1px black",
          }}
          className="bg-blue-primary text-white rounded text-xl py-2 px-8 mt-4 shadow-white shadow hover:shadow-indigo-500/40 homeBt"
        >
          
            {content.get_started}
          
        </button></ScrollLink>
      </div>
      <Image
        className="hidden md:block w-1/2 h-fit object-cover -mt-14"
        src={theme.theme === "Dark" ? bgImg : bgImg1}
        alt="colorful background"
        priority={true}
        sizes="(min-width: 808px) 50vw, fit"
      />
    </section>
  );
}
