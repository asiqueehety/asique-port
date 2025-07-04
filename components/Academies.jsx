'use client'

import React,{ useRef , useState } from 'react'
import { Lexend, Glory } from 'next/font/google'
import SVG2021 from '@/components/SVG2021';
import SVG2019 from '@/components/SVG2019';
import SVGco2026 from '@/components/SVGco2026'
import SVG2016 from '@/components/SVG2016';
import SVG2013 from '@/components/SVG2013';
import Image from 'next/image'
import {Typewriter} from 'react-simple-typewriter'
import location_tag from '../public/resources/location.png'
import { motion } from 'framer-motion';


const font=Lexend({
    subsets:['latin'],
    weight:['800']
})

const font2=Glory({
    subsets:['latin'],
    weight:['700']
})

export default function Academies(props){

    const inst_name= props.name
    const inst_img= props.image
    const inst_link= props.link
    const inst_desc= props.desc
    const inst_current = props.current //if it's my current institute or not
    const inst_location = props.location
    const inst_short_location = props.location_short
    const degree = props.degree
    const year = props.year;
    const shortName= props.shortName;
    const result = props.result;
    const session = props.session;

    const [hovered,setHovered]=useState(false)
    const [showFull, setShowFull]= useState(false);
    // const viewRef = useRef(null)
    // const isInView = useInView(viewRef, { once: false, margin: '0px 0px -10% 0px',threshold: 0.1 })
    const vb="140 120 300 130"
  return (
        <motion.div className={` backdrop-blur-md rounded-r-2xl rounded-l-4xl grid lg:grid-cols-[1fr_3fr] lg:gap-1 lg:w-300 ${font2.className} ${hovered? 'shadow-[0_0_1px_1px_rgba(34,211,238,0.7)]':''} p-1`}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            onMouseEnter={()=>{setHovered(true)}}
            onMouseLeave={()=>{setHovered(false)}}>
            <div className={`text-xl gap-0 rounded-2xl grid grid-rows-1 grid-cols-[1fr_1fr] ml-3 ${font2.className} w-fit h-fit`}>
                <div className='size-40 flex justify-center items-center'>
                    {year=='2019'? <SVG2019 viewbox={vb}/>: (year=='2021'? <SVG2021 viewbox={vb}/>:(year=='2016'? <SVG2016 viewbox={vb}/>:(year=='2013'? <SVG2013 viewbox={vb}/>:<SVGco2026 />)))}
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
            </div>
            <div
            className='bg-white/10 border border-none shadow-lg rounded-2xl w-full h-fit grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]'
            >
                <div className='grid xl:grid-rows-[3fr_1fr_1fr] grid-rows-[1fr_0.2fr_0.1fr]' onMouseOver={()=>{setShowFull(true)}} onMouseOut={()=>{setShowFull(false)}}>
                    <Image loading="lazy"
                    src={inst_img}
                    alt='pic of school'
                    width={200} height={200}
                    className="m-2 rounded-xl" />
                    {!showFull? 
                    <div className={`${font2.className} bg-white/10 border border-none shadow-lg rounded-2xl ml-2 text-lg lg:w-fit h-fit w-full p-1`}>
                        {inst_name}
                    </div>
                    :
                    <div className={`${font2.className} bg-white/10 border border-none shadow-lg rounded-2xl ml-2 text-4xl lg:w-fit h-fit w-full p-1`}>
                        <a href={inst_link} target='_blank'>{shortName}</a>
                    </div>}
                    <div className='bg-white/10 border border-none shadow-lg rounded-2xl lg:w-fit p-2 m-2 hover:scale-95 transition-all h-fit w-full'>
                        <a href={inst_location} target='_blank'>
                        <div className='flex lg:flex-row flex-col gap-2 h-fit w-fit'><Image loading="lazy" src={location_tag} alt='Location tag' width={25} height={25}/><div className='w-fit'>{inst_short_location}</div></div>
                        </a>
                    </div>
                </div>
                <div className='grid grid-rows-3 items-center ml-10 mt-10'>
                    {inst_current? 
                    <>
                        <></>
                        <div className='rounded-2xl size-fit flex flex-row gap-1' >
                            <div className='border border-none shadow-lg rounded-xl size-fit p-1'>Semester:</div><div className='flex items-center'>{session}th / 8</div>
                        </div>
                        <div className='rounded-2xl size-fit  flex flex-row gap-1' >
                            <div className='bg-white/10 border border-none shadow-lg rounded-xl size-fit p-1'>CGPA:</div><div className='flex items-center'>{result}</div>
                        </div>
                    </>
                    :
                    <>
                        <></>
                        <div className=' rounded-xl size-fit' >
                            {session}
                        </div>
                        <div className='rounded-lg size-fit flex flex-row gap-1' >
                            <div className='bg-white/10 border border-none shadow-lg rounded-xl size-fit p-1'>GPA:</div><div className='flex items-center'>{result}</div>
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
            </div>
        </motion.div>


  );
}

