'use client'

import React,{ useRef , useState } from 'react'
import {AnimatePresence, motion, scale, useInView} from 'framer-motion'
import { Lexend, Glory , Rationale, Tomorrow } from 'next/font/google'
import SVG2021 from '@/components/SVG2021';
import SVG2019 from '@/components/SVG2019';
import SVGco2021 from '@/components/SVGco2021'
import Image from 'next/image'
import {Typewriter} from 'react-simple-typewriter'


const font=Lexend({
    subsets:['latin'],
    weight:['800']
})

const font2=Glory({
    subsets:['latin'],
    weight:['400']
})

export default function Academies(props){

    const inst_name= props.name
    const inst_img= props.image
    const inst_link= props.link
    const inst_desc= props.desc
    const inst_current = props.current //if it's my current institute or not
    const degree = props.degree
    const year = props.year;
    const shortName= props.shortName;
    const result = props.result;
    const session = props.session;

    const [hovered,setHovered]=useState(false)
    const [showFull, setShowFull]= useState(false);
    const viewRef = useRef(null)
    const isInView = useInView(viewRef, { once: false, margin: '0px 0px -10% 0px' })
    const vb="140 120 300 130"
  return (
    <AnimatePresence>
        <motion.div className={`rounded-r-2xl rounded-l-4xl grid lg:grid-cols-[1fr_3fr] lg:gap-1 lg:w-300 ${font.className} ${hovered? 'shadow-[0_0_15px_5px_rgba(34,211,238,0.7)]':''} p-1`}
            ref={viewRef}
            initial={{x:-100, opacity:0}}
            animate={isInView? (hovered? {x:0,opacity:1,scale:0.99}:{x:0,opacity:1}):{x:-100,opacity:0}}
            transition={{duration:0.4}}
            onMouseEnter={()=>{setHovered(true)}}
            onMouseLeave={()=>{setHovered(false)}}>
            <motion.div className={`text-xl gap-0 rounded-2xl grid grid-rows-1 grid-cols-[1fr_1fr] ml-3 ${font2.className} w-fit h-fit`}>
                <div className='size-40 flex justify-center items-center'>
                    {year=='2019'? <SVG2019 viewbox={vb}/>: (year=='2021'? <SVG2021 viewbox={vb}/>:<SVGco2021 />)}
                </div>
                <div className='flex justify-start items-center ml-3'>
                    <Typewriter
                    words={[degree]}
                    loop={Infinity}
                    cursor
                    cursorStyle=''
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={10000}
                    />
                </div>
                
            </motion.div>
            <motion.div
            className='backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl w-full grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]'
            >
                <div className='grid grid-rows-[3fr_2fr]' onMouseOver={()=>{setShowFull(true)}} onMouseOut={()=>{setShowFull(false)}}>
                    <Image
                    src={inst_img}
                    alt='pic of school'
                    width={200} height={200}
                    className="m-2 rounded-xl" />
                    {!showFull? 
                    <div className={`${font2.className} ml-4 text-lg w-fit`}>
                        {inst_name}
                    </div>
                    :
                    <div className={`${font2.className} ml-4 text-4xl w-fit`}>
                        {shortName}
                    </div>}
                </div>
                <div className='grid grid-rows-3 items-center ml-10 mt-10'>
                    {inst_current? 
                    <>
                        <></>
                        <div className='rounded-2xl size-fit' >
                            <div className='backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl size-fit'>Semester:</div>{session} | 8
                        </div>
                        <div className='rounded-2xl size-fit' >
                            <div className='backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl size-fit'>CGPA:</div>{result}
                        </div>
                    </>
                    :
                    <>
                        <></>
                        <div className=' rounded-2xl size-fit' >
                            {session}
                        </div>
                        <div className='rounded-2xl size-fit' >
                            <div className='backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl size-fit'>GPA:</div>{result}
                        </div>
                    </>} 
                </div>
                {inst_current && 
                <>
                    <div className="bg-yellow-400 text-white p-1 rounded-xl h-fit w-fit absolute top-1 right-1">
                        CURRENT
                    </div>
                </>
                }
            </motion.div>
        </motion.div>
    </AnimatePresence>


  );
}

