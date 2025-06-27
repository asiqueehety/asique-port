
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Skill_card from './Skill_card'
import {Lexend} from 'next/font/google'
import Project_card from '@/components/Project_card'

const lexend_font = Lexend({ weight: ['600'], subsets: ['latin'] })
const lexend_font2 = Lexend({ weight: ['200'], subsets: ['latin'] })

export default function Skill_section(props) {
  const [readSkills, setReadSkills] = useState(props.skill_read);
  const [hovered, setHovered] = useState(false)
  const [showProjects,setShowProjects] = useState(false)
  const title = props.title;
  const image = props.image;
  const skillCard_props = props.skillCard_props
  const projectCard_props = props.projCard_props

  function handleTitleClick()
  {
    if(readSkills || showProjects) {setReadSkills(false);setShowProjects(false)}
    else
    {
      setReadSkills(true);
    }
  }
  

  return (
    <motion.div
      className={`${lexend_font.className} bg-white/10 border border-none shadow-lg rounded-2xl 2xl:w-300 w-full z-10`}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
    >
      <AnimatePresence>
      {readSkills &&
      <button className={`${lexend_font2.className} bg-black/30 border border-none shadow-lg rounded-2xl w-fit p-1 m-1 text-sm`} onClick={()=>{setShowProjects(true);setReadSkills(false)}}>
        Show Projects
      </button>}
      {showProjects && 
      <button className={`${lexend_font2.className} bg-black/30 border border-none shadow-lg rounded-2xl w-fit p-1 m-1 text-sm`} onClick={()=>{setReadSkills(true);setShowProjects(false)}}>
        Show Skills
      </button>}
      </AnimatePresence>
      <div className='flex flex-col justify-center'>
        <div
        className={`${()=>{readSkills && 'border-t-0 border-r-0 border-l-0'}} cursor-pointer bg-black/50  border-none rounded-2xl m-3 p-2 flex items-center justify-center gap-4 ${hovered? 'shadow-[0px_0px_1px_1px_rgba(34,211,238,0.7)]':''}`}
        onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} onClick={handleTitleClick}
      >
        <Image src={image} alt={`${title} Icon`} width={50} height={50} loading='lazy' />
        <span className='lg:text-4xl text-2xl font-semibold text-white'>{title}</span>
        </div>
        {(readSkills && !showProjects) &&
        <div className={`bg-white/10 rounded-2xl h-fit w-50 m-3 flex justify-center items-center text-xl lg:text-3xl ${lexend_font2.className}`}>
          Skills
        </div>}
        {(!readSkills && showProjects) &&
        <div className={`bg-white/10 rounded-2xl h-fit w-50 m-3 flex justify-center items-center text-xl lg:text-3xl ${lexend_font2.className}`}>
          Projects
        </div>}
      </div>
      

        
      <AnimatePresence initial={false}>
        {readSkills && (
          <motion.div
            key="skill-card"
            initial={{ x:-100, height: 0, opacity: 0 }}
            animate={{ x:0 , height: "auto", opacity: 1 }}
            exit={{ x:100, height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden flex flex-row flex-wrap justify-center"
          >
            {
              Object.entries(skillCard_props).map(([sectionTitle,skills],ind)=>
                {
                  return(
                    <Skill_card key={ind} title={sectionTitle} skills={skills}/>
                  )
                })
            }
          </motion.div>
        )}
        {showProjects && (
          <motion.div
            key="project-card"
            initial={{ x:-100, height: 0, opacity: 0 }}
            animate={{ x:0 , height: "auto", opacity: 1 }}
            exit={{ x:100, height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden flex flex-row flex-wrap justify-center"
          >
            {
              Object.entries(projectCard_props).map((proj,ind)=>
                {
                  return(
                    <Project_card key={ind} project={proj}/>
                  )
                })
            }
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
