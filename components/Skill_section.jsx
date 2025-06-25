
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Skill_card from './Skill_card'
import {Lexend} from 'next/font/google'

const lexend_font = Lexend({ weight: ['600'], subsets: ['latin'] })

export default function Skill_section(props) {
  const [readSkills, setReadSkills] = useState(false);
  const title = props.title;
  const image = props.image;
  const skillCard_props = props.skillCard_props
  

  return (
    <motion.div
      className={`${lexend_font.className} backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl w-full`} onClick={() => setReadSkills(prev=>!prev)}
    >
      <div
        className={`${()=>{readSkills && 'border-t-0 border-s-0'}}cursor-pointer backdrop-blur-md bg-black/50  border-white/20 shadow-lg rounded-2xl m-3 p-2 flex items-center justify-center gap-4`}
        
      >
        <Image src={image} alt={`${title} Icon`} width={50} height={50} loading='lazy' />
        <span className='lg:text-4xl text-2xl font-semibold text-white'>{title}</span>
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
      </AnimatePresence>
    </motion.div>
  )
}
