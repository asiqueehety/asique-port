'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function CircularNavbar()
{
  const path = usePathname();
  const [navHover, setNavHover] = useState(false);
  const [curHov, setCurHov] = useState('');
  const [cur, setCur] = useState(path.split('/')[1] || 'home'); // Default to 'home' if path is empty



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
  }
  return(
    <nav
    onMouseOver={()=>
      {setNavHover(true)}}
    onMouseOut={()=>
      {setNavHover(false)}}
    
    className={`${navHover==true? 'bg-col5':'bg-col0'} lg:text-2xl md:text-md text-yell fixed left-2 rounded-r-3xl mt-2 mb-2 pr-2 top-1/2 -translate-y-1/2 h-90 transition-all duration-300 border-white lg:pl-2`}>
      <ul className='flex flex-col h-full *:hover:bg-col4 *:hover:text-col2 *:transition-all *:duration-300 *:mt-3 *:mb-3 *:w-fit'>
        <li><Link id='home' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/' className={`${curHov=='home' || cur=='home'? 'opacity-150':'opacity-15'}`}>Home</Link></li>
        <li><Link id='aboutme' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/aboutme' className={`${curHov=='aboutme' || cur=='aboutme'? 'opacity-150':'opacity-15'}`}>About Me</Link></li>
        <li><Link id='academics' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/academics' className={`${curHov=='academics' || cur=='academics'? 'opacity-150':'opacity-15'}`}>Academics</Link></li>
        <li><Link id='skills' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/skills' className={`${curHov=='skills' || cur=='skills'? 'opacity-150':'opacity-15'}`}>Skills</Link></li>
        <li><Link id='projects' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/projects' className={`${curHov=='projects' || cur=='projects'? 'opacity-150':'opacity-15'}`}>Projects</Link></li>
        <li><Link id='extras' onMouseOver={hoverFunc} onMouseOut={hoverOut} onClick={linkClicked} href='/extras' className={`${curHov=='extras' || cur=='extras'? 'opacity-150':'opacity-15'}`}>Extras...</Link></li>
      </ul>
    </nav>
  )
}