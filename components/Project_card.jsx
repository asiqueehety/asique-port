
'use client'

import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import { Lexend } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import githubIcon from '../public/resources/github-mark-white.png'



const font2 = Lexend({subsets:['latin'],weight:['200']})
const font = Lexend({subsets:['latin'],weight:['500']})

export default function Skill_card(props) {

    const [hoveredTitle, setHoveredTitle] = useState(false)

    const proj=props.project

    const title = Object.entries(proj)[0][1]
    const shortDesc = Object.entries(proj)[1][1].shortDesc
    const repoLink = Object.entries(proj)[1][1].githubRepoLink
    const skills = Object.entries(proj)[1][1].skillsUsed
    const img = Object.entries(proj)[1][1].image

  return (
    <AnimatePresence>
    <div className={`bg-white/10 border border-none  rounded-2xl h-fit w-100 m-3 flex flex-col ${font2.className}`}>
        <motion.div className='flex flex-row bg-cyan-600 border-none  rounded-2xl m-3'
        onMouseOver={()=>{setHoveredTitle(true)}}
        onMouseOut={()=>{setHoveredTitle(false)}}
        onClick={()=>{setHoveredTitle(!hoveredTitle)}}
        transition={{duration:0.5}}
        exit={{opacity:0}}>
            <Image loading="lazy" src={img} alt={`${title} image`} width={120} height={120} className='m-1 rounded-2xl'/>
            <h1 className={`${font.className} m-1 text-2xl flex justify-center items-center`}>{title}</h1>
            {hoveredTitle &&
            <motion.div className='bg-black w-30 h-10 rounded-full flex m-auto justify-center items-center'
            initial={{width:0}}
            animate={{width:'auto'}}
            exit={{width:0}}>
                <a href={repoLink} target='_blank'><Image loading="lazy" src={githubIcon} alt='Github Icon' width={32} height={32}/></a>
            </motion.div>}
        </motion.div>
        <div className='bg-black/1 border border-none rounded-2xl m-3 mt-0 mb-0 h-fit w-fit'><p className=' m-3 flex justify-center'>{shortDesc}</p></div>
        
        <div className={`bg-white/10 border border-none  rounded-2xl h-fit w-fit m-3 flex flex-row flex-wrap text-sm ${font2.className}`} >
        {
            skills.map((skill,ind)=>{
                return (
                <div key={ind} className={`bg-neutral-800 border border-none  rounded-2xl h-fit w-fit m-1 flex flex-row flex-wrap`}>
                    <p className='m-1'>{skill}</p>
                </div>)
            })
        }
        </div>
    </div>
    </AnimatePresence>
  )
}
