"use client"
import so1 from "./Images/instagram.png"
import so2 from "./Images/facebook.png"
import so3 from "./Images/github.png"
import bg1 from "./Images/bg1.png"
import { getDictionary } from "@/app/dictionaries";
import { useEffect, useState } from "react";
import { useTheme } from "./ui/topnavbar/ThemeProvider"
import { useRef } from "react"
import sendReq from "./lib/sendReq";
import type { UserContactInfo } from '@/app/lib/definitions/UserContactInfo';


export default function Contact({lang}: {lang: string}){
    const [dictionary, setDictionary] = useState({ contact: '',
        contact_p: '',
        contact_h2: '',
        reach_out: '',
        follow_us: '',
        mail_h1: '',
        mail_placeholder: "",
        phone_placeholder: "",
        message_placeholder: "",
        send: "",
        msg_sent: "",
        fill_form: "",
    });

    const theme = useTheme();
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const [Note , setNote] = useState("");
    const haveSusCaracters = (ch: string | undefined) =>{
        return ch != undefined && (ch.includes("'") || ch.includes('"') || ch.includes("<") ||ch.includes(">"))
    }
    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            desc : descRef.current?.value
        }
        if (haveSusCaracters(data.email) || haveSusCaracters(data.phone) ||haveSusCaracters(data.desc)){
            setNote("No special caracters")
            return
        }else if (data.phone != undefined && isNaN(Number(data.phone))){
            setNote("Invalid Phone")
            return
        }else if (data.phone == "" || data.email == "" ||data.desc == ""){
            setNote(dictionary.fill_form)
            return
        }else{
            setNote(dictionary.msg_sent)
            
            const response = await sendReq(data.phone,data.email, data.desc);

        }
        
    }
    useEffect(()=>{
        if (theme.theme == "Light"){
            document.querySelector(".Contact")?.classList.add("Light");
        }else{
            document.querySelector(".Contact")?.classList.remove("Light");
        }
    } , [theme])

    useEffect(() => {
        async function fetchData() {
          const dict = await getDictionary(lang);
          setDictionary(dict);
        }
        fetchData();
      });
    return(
        <>
            <section className="Contact">
            <span className="sAn sAn1"></span>
            <span className="sAn sAn2"></span>
            <span className="sAn sAn3"></span>
            <span className="sAn sAn4"></span>
            <span className="sAn sAn5"></span>
            <span className="sAn sAn6"></span>
            <span className="sAn sAn7"></span>
            <span className="sAn sAn8"></span>
            <span className="sAn sAn9"></span>
            <span className="sAn sAn10"></span>
                <section className="ContContainer">
                    <div className="ContLeft">
                        <h2>{dictionary.contact_h2}</h2>
                        <h1>{dictionary.reach_out}</h1>
                        <p>{dictionary.contact_p}</p>
                        <div className="conrect"></div>
                        <h3>{dictionary.follow_us}</h3>
                        <img src={so1.src} alt="" />
                        <img src={so2.src} alt="" />
                        <img src={so3.src} alt="" />
                    </div>
                    <div className="ContRight">
                        <div className="ContBox">
                            <img src={bg1.src} alt="" />
                            <h1>{dictionary.mail_h1}</h1>
                            <form onSubmit={sendMessage}>
                                <div>
                                    <input type="email" placeholder={dictionary.mail_placeholder}  ref = {emailRef}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={dictionary.phone_placeholder} ref = {phoneRef}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={dictionary.message_placeholder} ref = {descRef}/>
                                </div>
                                <div className="botCont">
                                    <button type = "submit">{dictionary.send}</button>
                                    <span>{Note}</span>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}