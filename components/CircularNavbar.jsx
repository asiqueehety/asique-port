'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {IBM_Plex_Sans_Condensed} from 'next/font/google';
import { Menu } from 'lucide-react';

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
      if (window.innerWidth < 1024) {
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
    if(window.innerWidth < 1024) setViewNav(false)
  }

  return(
    <div className={`${font.className}`}>
      <AnimatePresence mode='wait'>
        <div className='bg-none fixed top-0 left-0 lg:h-full lg:w-60 h-0 w-0' onMouseOver={()=>{window.innerWidth>1024 && setViewNav(true)}} onMouseOut={()=>{window.innerWidth>1024 && setViewNav(false)}}></div>
        {viewNav && <motion.nav
        key='navbar'
        initial={{x:-100,opacity: 0}}
        animate={{x:0,opacity: 1}}
        exit={{ x: -1000, opacity: 1 }}
        transition={{ duration: 0.1 , ease: 'easeInOut' }}
        onMouseOver={()=>
          {setNavHover(true);setViewNav(true)}}
        onMouseOut={()=>
          {setNavHover(false)}}
        
        className={`${navHover==true? 'lg:bg-col5':'lg:bg-col0'} bg-col0 justify-right lg:text-2xl md:text-md text-yell fixed left-2 lg:rounded-r-3xl rounded-3xl p-4 lg:p-0 mt-2 mb-2 lg:pr-2 top-1/2 -translate-y-1/2 h-fit w-fit transition-all duration-300 border-white lg:pl-2 z-50 ml-8 lg:ml-0 `}>
          <ul className='flex flex-col h-full *:hover:bg-col4 *:hover:text-col2 *:transition-all *:duration-300 *:mt-3 *:mb-3 *:w-fit'>
            <li><Link id='home' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/' className={`${curHov=='home' || cur=='home'? 'opacity-150':'opacity-15'}`}>Meet me!</Link></li>
            <li><Link id='academics' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/academics' className={`${curHov=='academics' || cur=='academics'? 'opacity-150':'opacity-15'}`}>Academics</Link></li>
            <li><Link id='skills' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/skills' className={`${curHov=='skills' || cur=='skills'? 'opacity-150':'opacity-15'}`}>Skills & Projects</Link></li>
            {/* <li><Link id='achievements' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/achievements' className={`${curHov=='achievements' || cur=='achievements'? 'opacity-150':'opacity-15'}`}>Achievements</Link></li> */}
            {/* <li><Link id='extras' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/extras' className={`${curHov=='extras' || cur=='extras'? 'opacity-150':'opacity-15'}`}>extras</Link></li> */}
          </ul>
          
        </motion.nav>}
        {viewNav && window.innerWidth < 1024 && (
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
      {/* <motion.button className='bg-col4 text-col0 rounded-2xl p-2 mt-3 hover:bg-white hover:text-col5 transition-all duration-300 fixed z-50' 
        onClick={()=>{setViewNav(!viewNav)}}
        initial={{x:-7, y: -62, rotate: 0}}
        animate={{rotate: viewNav? 180: 0}}
        transition={{duration: 0.1}}
        >
          <Menu 
            className="w-8 h-8 text-black hover:text-emerald-400 hover:scale-110 transition-transform duration-300"
          />
      </motion.button> */}
      {/* <motion.button 
  className='bg-col4 text-col0 rounded-2xl p-2 mt-3 hover:bg-white hover:text-col5 transition-all duration-300 fixed z-50 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
  onClick={()=>{setViewNav(!viewNav)}}
  initial={{x:-7, y: -62, rotate: 0}}
  animate={{rotate: viewNav ? 180 : 0}}
  transition={{duration: 0.1}}
>
  <Menu 
    className="w-8 h-8 text-black hover:text-emerald-400 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
  />
</motion.button> */}
{/* <motion.button 
  className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-3 mt-3 
  fixed z-50 
  hover:scale-110 hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 
  shadow-[0_0_20px_rgba(255,0,150,0.6)] animate-pulse'
  
  onClick={() => setViewNav(!viewNav)}
  initial={{ x: -7, y: -62, rotate: 0 }}
  animate={{ rotate: viewNav ? 180 : 0 }}
  transition={{ duration: 0.1 }}
>
  <Menu 
    className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
  />
</motion.button> */}
<motion.button 
  className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white rounded-2xl p-3 mt-3 
  fixed z-50 transition-transform duration-300 shadow-xl animate-gradient-shift'
  onClick={() => setViewNav(!viewNav)}
  initial={{ x: -7, y: -62, rotate: 0 }}
  animate={{ rotate: viewNav ? 180 : 0 }}
  transition={{ duration: 0.1 }}
>
  <Menu 
    className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
  />
</motion.button>

    </div>
   )     
}