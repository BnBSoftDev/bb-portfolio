import React, { useEffect, useState } from "react";
import s1 from "@/app/Images/s1.png";
import s2 from "@/app/Images/s2.png";
import s3 from "@/app/Images/s3.png";
import s4 from "@/app/Images/s4.png";
import s5 from "@/app/Images/s5.png";
import s6 from "@/app/Images/s6.png";
import { getDictionary } from "./dictionaries";
import { useTheme } from "./ui/topnavbar/ThemeProvider";
interface AServiceProps {
    name: string;
    description: string;
    Src:string;
}
const AService: React.FC<AServiceProps> = (props) => {
    return (
        <div className="Service">
            <img src={props.Src}  alt="" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default function Service({lang}: {lang: string}){
    const [dictionary, setDictionary] = useState({ 
        our_services: '',
        cutting_edge: '',
        cutting_edge_p: '',
        user_friendly: '',
        user_friendly_p:'',
        data_management:'',
        data_management_p:'',
        responsive:'',
        responsive_p:'',
        sync:'',
        sync_p:'',
        lightweight:'',
        lightweight_p:'',
        }
    );

  useEffect(() => {
    async function fetchData() {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    }
    fetchData();
  }, [lang]);

  const theme = useTheme();

    useEffect(()=>{
        if (theme.theme == "Light"){
            document.querySelector(".ourServices")?.classList.add("Light");
            document.body.style.backgroundColor = "white";
        }else{
            document.querySelector(".ourServices")?.classList.remove("Light");
            document.body.style.backgroundColor = "black";
        }
    } , [theme]);
    return(
        <>
        <section className="ourServices">
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
            <div className="ServTitleContainer">
                <div className="ServTitle">
                    <div className="ServRect sr1"></div>
                    <h2>{dictionary.our_services}</h2>
                    <div className="ServRect sr2"></div>
                </div>
            </div>
            <section className="ServicesContainer">

                <div className="Services">
                    <AService 
                        name = {dictionary.cutting_edge} 
                        description={dictionary.cutting_edge_p}
                        Src =  {s1.src}
                    />
                    <AService 
                        name = {dictionary.user_friendly}
                        description={dictionary.user_friendly_p}
                        Src = {s2.src}
                    />
                    <AService 
                        name = {dictionary.data_management}
                        description={dictionary.data_management_p}
                        Src = {s3.src}
                    />
                    <AService 
                        name = {dictionary.responsive} 
                        description={dictionary.responsive_p}
                        Src = {s4.src}
                    />
                    <AService 
                        name = {dictionary.sync}
                        description= {dictionary.sync_p}
                        Src = {s5.src}
                    />
                    <AService 
                        name = {dictionary.lightweight}
                        description={dictionary.lightweight_p}
                        Src = {s6.src}
                    />

                </div>
            </section>
        </section>
        </>
    );

}