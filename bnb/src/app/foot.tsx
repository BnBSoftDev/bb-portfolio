import so1 from "./Images/instagram.png"
import so2 from "./Images/facebook.png"
import so3 from "./Images/github.png"
import { useEffect, useState } from "react";
import { useTheme } from "./ui/topnavbar/ThemeProvider";
import { getDictionary } from "./dictionaries";
import { Link as ScrollLink } from "react-scroll";
export default function Foot({lang}: {lang: string}){
    const [dictionary, setDictionary] = useState(
        { 
            thanks: '',
             services: '',
              contact: '',
              home: '',
              quick_links: '',
        }
    );

  useEffect(() => {
    async function fetchData() {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    }
    fetchData();
  }, [lang]);


  const theme = useTheme()
    useEffect(()=>{
        if (theme.theme == "Light"){
            document.querySelector("footer")?.classList.add("Light");
        }else{
            document.querySelector("footer")?.classList.remove("Light");
        }
    } , [theme]);

    return(
        <>
            <footer>
                <section>
                    <div>
                        <h1>B&B</h1>
                        <p className="t">{dictionary.thanks}</p>
                    </div>
                    <div>
                        <h2>{dictionary.quick_links}</h2>
                        <ul>
                            <li>
                                <ScrollLink to={'Home'}
                                    smooth={true}
                                    duration={500}
                                    className= {`block max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none`}
                                    offset={-100}>
                                    {dictionary.home}
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={'Services'}
                                    smooth={true}
                                    duration={500}
                                    className= {`block max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none`}
                                    offset={-100}>
                                    {dictionary.services}
                                </ScrollLink> 
                            </li>
                            <li>
                                <ScrollLink to={'Contact'}
                                    smooth={true}
                                    duration={500}
                                    className= {`block max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none`}
                                    offset={-100}>
                                    {dictionary.contact}
                                </ScrollLink> 
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Social Media</h2>
                        <img src={so1.src} alt="" />
                        <img src={so2.src} alt="" />
                        <img src={so3.src} alt="" />
                    </div>
                </section>
                <div className = "footrec"></div><br/>
                <p>&copy;2024 All Rights Reserved - B&B</p>
            </footer>
        </>
    );
}