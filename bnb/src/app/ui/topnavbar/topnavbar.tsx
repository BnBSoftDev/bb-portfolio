'use client';
import Logo from '@/app/ui/topnavbar/logo';
import { useEffect, useRef, useState } from 'react';
import { getDictionary } from "@/app/dictionaries";
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from "@/app/ui/topnavbar/ThemeProvider";
export function StickyTopNavbar({ lang }: { lang: string }) {
  const [isSticky, setSticky] = useState(false);
  const [dictionary, setDictionary] = useState({ home: '', services: '', contact: '' });
  useEffect(() => {
    async function fetchData() {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    }
    fetchData();
  }, [lang]);
  const { theme, toggleTheme } = useTheme();
  const changeTheme = () => {
    document.querySelectorAll(".themeCircle")?.forEach((el) => {
      el.classList.toggle("moveCircle");
    });
    toggleTheme()
  }
  useEffect(() => {
    if (theme == "Light") {
      document.querySelector(".theme")?.classList.add("Light");
    } else {
      document.querySelector(".theme")?.classList.remove("Light");
    }
  }, [ theme, toggleTheme])
  function handleScroll() {
    if (window.scrollY) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener('scroll', () => {
    if (isClient) {
      handleScroll();
      
    }
  });
  const options = [
    { value: 'tn', label: 'TN' },
    { value: 'en', label: 'EN' },
    { value: 'fr', label: 'FR' },
  ];
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  });
  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    if (isClient) {
      window.location.href = `/${selectedValue}`;
    }
  };
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const flexMenuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideMenuClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideMenuClick);
    };
  });
  const handleOutsideMenuClick = (e: MouseEvent) => {
    if (flexMenuRef.current && !flexMenuRef.current.contains(e.target as Node) && menuBtnRef.current && !menuBtnRef.current.contains(e.target as Node)) {
      setIsMobileMenuHidden(true);
    
    }
  }
  return (
    <div className={`top-0 z-10 relative container mx-auto px-4 md:flex items-center gap-6 md:${isSticky ? " sticky" : ''}`}
      style={{ backgroundColor: theme === "Dark" ? "black" : "#fafafa" }}>
      <div className="flex items-center justify-between md:w-auto w-full">
        <Logo />
        <div className="md:hidden absolute items-center inset-x-1/2">
          <button ref={menuBtnRef} type="button" onClick={
            () => {
              setIsMobileMenuHidden(!isMobileMenuHidden);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={theme === "Dark" ? "white" : "black"} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div ref={flexMenuRef} className={`${isMobileMenuHidden ? 'hidden' : ''} md:flex md:flex-row flex-col items-center  justify-start md:justify-center md:space-x-1 pb-3 md:pb-0 absolute w-fit md:w-screen inset-x-1/2 md:inset-x-0 -ml-9 md:ml-0
        mt-44 md:mt-0 h-fit flexMenu`}
        style={{
          color: theme === "Dark" ? "white" : "black",
        }}>
                    
          <ScrollLink to={'Home'}
            smooth={true}
            duration={500}
            className= {`block py-1 px-3 max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none`}
            offset={-100}>
            {dictionary.home}
          </ScrollLink>
          <ScrollLink to={'Services'}
            smooth={true}
            duration={500}
            className='block py-1 px-3 max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none'
            offset={-100}>{dictionary.services}
          </ScrollLink>
          <ScrollLink to={'Contact'}
            smooth={true}
            duration={500}
            className='block py-1 px-3 max-w-xs transition duration-300 ease-in-out hover:scale-110 select-none'
            offset={-100}>{dictionary.contact}
          </ScrollLink>
          <div className="md:hidden items-center cursor-pointer block py-1 px-3  max-w-xs transition duration-300 ease-in-out hover:scale-110">
            <input type="checkbox" value="" className="sr-only peer">
            </input>
            <div className='theme' onClick={changeTheme}>
              <div className="themeBox">
                <div className="themeCircle"></div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className='absolute right-2 inline-flex'>
          <div className="md:inline-flex hidden items-center cursor-pointer mr-6">
            <input type="checkbox" value="" className="sr-only peer">
            </input>
            <div className='theme' onClick={changeTheme}>
              <div className="themeBox">
                <div className="themeCircle"></div>
              </div>
            </div>
          </div>
          <div>
            <select style={{ backgroundColor: theme === "Dark" ? "black" : "white", color: theme === "Dark" ? "white" : "black" }} onChange={handleChange} value={lang}>
              {options.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}