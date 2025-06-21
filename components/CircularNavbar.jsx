'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {IBM_Plex_Sans_Condensed} from 'next/font/google';

const font = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['500'],
})

export default function CircularNavbar()
{
  const path = usePathname();
  const [navHover, setNavHover] = useState(false);
  const [curHov, setCurHov] = useState('');
  const [cur, setCur] = useState(path.split('/')[1] || 'home'); // Default to 'home' if path is empty
  const [viewNav, setViewNav] = useState(true);
  const [isMounted, setIsMounted] = useState(false) //used to prevent hydration mismatch

  //Run once after mount to detect mobile width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setViewNav(false) //hiding nav on small screens
      }
      setIsMounted(true) //marking client render complete
    }
  }, [])

  //Preventing hydration mismatch by rendering nothing until mounted
  if (!isMounted) return null



  function hoverFunc(e)
  {
    const id = e.target.id;
    setCurHov(id);
  }
  function hoverOut()
  {
    setCurHov('');
  }

  function linkClicked(e)
  {
    setCur(e.target.id);
    if(window.innerWidth < 640) setViewNav(false)
  }

  return(
    <div className={`${font.className}`}>
      <AnimatePresence mode='wait'>
        {viewNav && <motion.nav
        key='navbar'
        initial={{x:-100,opacity: 0}}
        animate={{x:0,opacity: 1}}
        exit={{ x: -1000, opacity: 1 }}
        transition={{ duration: 0.1 , ease: 'easeInOut' }}
        onMouseOver={()=>
          {setNavHover(true)}}
        onMouseOut={()=>
          {setNavHover(false)}}
        
        className={`${navHover==true? 'lg:bg-col5':'lg:bg-col0'} bg-col5 justify-right lg:text-2xl md:text-md text-yell fixed left-2 rounded-r-3xl mt-2 mb-2 pr-2 top-1/2 -translate-y-1/2 h-fit w-fit transition-all duration-300 border-white lg:pl-2 z-50 ml-20 lg:ml-0 `}>
          <ul className='flex flex-col h-full *:hover:bg-col4 *:hover:text-col2 *:transition-all *:duration-300 *:mt-3 *:mb-3 *:w-fit'>
            <li><Link id='home' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/' className={`${curHov=='home' || cur=='home'? 'opacity-150':'opacity-15'}`}>Meet me!</Link></li>
            <li><Link id='academics' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/academics' className={`${curHov=='academics' || cur=='academics'? 'opacity-150':'opacity-15'}`}>Academics</Link></li>
            <li><Link id='skills' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/skills' className={`${curHov=='skills' || cur=='skills'? 'opacity-150':'opacity-15'}`}>Skills</Link></li>
            <li><Link id='projects' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/projects' className={`${curHov=='projects' || cur=='projects'? 'opacity-150':'opacity-15'}`}>Projects</Link></li>
            <li><Link id='achievements' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/achievements' className={`${curHov=='achievements' || cur=='achievements'? 'opacity-150':'opacity-15'}`}>Achievements</Link></li>
            <li><Link id='extras' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/extras' className={`${curHov=='extras' || cur=='extras'? 'opacity-150':'opacity-15'}`}>extras</Link></li>
          </ul>
          
        </motion.nav>}
        {viewNav && window.innerWidth < 640 && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-2xl z-40 pointer-events-auto"
          />
        )}
      </AnimatePresence>
      
      <motion.button className='bg-col4 text-col0 rounded-full p-2 mt-3 hover:bg-white hover:text-col5 transition-all duration-300 fixed z-50' 
        onClick={()=>{setViewNav(!viewNav)}}
        initial={{x:10, y: -30, rotate: 0}}
        animate={{rotate: viewNav? 180: 0}}
        transition={{duration: 0.1}}
        >
        <Image src='/resources/next.png' alt='Show Navigation Bar' width={15} height={15} className='rounded-full'/>
      </motion.button>
    </div>
   )     
}