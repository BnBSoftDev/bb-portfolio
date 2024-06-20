'use client';
import Service from "../service";
import { StickyTopNavbar } from "../ui/topnavbar/topnavbar";
import Contact from "../contact";
import Foot from "../foot";
import Home from "@/app/ui/home/home";
import logoW from "/public/logoW-ico.png";
import { ThemeProvider } from "@/app/ui/topnavbar/ThemeProvider";


export default function Page({params}:any) {
    return (
        
        <>
        
        <ThemeProvider>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
                <link rel="icon" href={logoW.src} />
                <meta name="keywords" content="B&B, Tunisian software development, engineering team, native mobile development, native web development, custom software solutions, mobile app development, website development, high-performance software, Tunisian engineers, innovative digital solutions" />
                <meta property="og:title" content="B&B Soft. Solutions" />
                <meta property="og:description" content="B&B Soft. Solutions: Leading Tunisian company specializing in custom websites and mobile apps." />
                <meta property="og:image" content={logoW.src} />
                <meta property="og:url" content="https://www.bnbsoftdev.tech" />

            </head>
                <main className="h-full w-full">
                    <StickyTopNavbar lang={params.lang}/>
                    <Home lang={params.lang}/>
                    <Service lang={params.lang}/>
                    <Contact lang={params.lang}/>
                    <Foot lang={params.lang}/>
                </main>
        </ThemeProvider>
        
        </>
    );
  }
  