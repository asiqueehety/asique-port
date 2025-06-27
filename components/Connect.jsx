'use client'

import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { Lexend } from 'next/font/google'
import linkedin from '@/public/resources/linkedin.png'
import github from '@/public/resources/github-mark-white.png'
import gmail from '@/public/resources/gmail.png'
import phone from '@/public/resources/phone-call.png'
import facebook from '@/public/resources/facebook.png'
import twitter from '@/public/resources/twitter.png'
import instagram from '@/public/resources/instagram.png'


import Image from 'next/image'
import {useState} from 'react'

const font = Lexend({ weight: ['800'], subsets: ['latin'] })

export default function Connect() {
  const [hoveredLinkedin, setHoveredLI] = useState(false)
  const [hoveredGithub, setHoveredGH] = useState(false)
  const [hoveredGmail, setHoveredGM] = useState(false)
  const [hoveredPhone, setHoveredP] = useState(false)
  const [viewCon, setViewCon] = useState(false)
  
  
  
  return (
    <motion.div className='relative backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl shadow-lg p-6 max-w-5xl text-white h-fit justify-center mr-5 w-fit overflow-hidden cursor-pointer mt-3 mb-3 flex lg:flex-row flex-col flex-1/2'>
      <motion.h1
      className={`${font.className} text-3xl`}>
          Get in touch!
          <motion.div
          className='mt-5 flex flex-row flex-1/4 *:hover:scale-90 *:transition-all'>
            <a href='https://www.linkedin.com/in/asique96' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
              <Image src={linkedin} alt='linkedin icon' height={40} width={40}/>
            </a>
            <a href='https://www.github.com/asiqueehety' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
              <Image src={github} alt='github icon' height={40} width={40}/>
            </a>
            <a href='mailto:asique228@gmail.com' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
              <Image src={gmail} alt='gmail icon' height={40} width={40}/>
            </a>
            
            <a href='tel:+8801896121096' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'
            onMouseOver={()=>{setHoveredP(true)}}
            onMouseOut={()=>{setHoveredP(false)}}
            >
                <Image src={phone} alt='phone icon' height={40} width={40}/>
                <AnimatePresence>
                {hoveredPhone && 
                
                  <motion.div
                  className='text-2xl'
                  key="phoneNumber"
                  initial={{width:0, opacity:0}}
                  animate={{width:'auto',opacity:1}}
                  exit={{width:0,opacity:0}}
                  transition={{duration:0.3}}>
                    +8801896121096
                  </motion.div>}
                </AnimatePresence>
            </a>
            
            
          </motion.div>
      </motion.h1>
      <motion.button className='absolute top-0 right-0 p-1 h-full bg-gray-500 rounded-r-xl'
      onClick={()=>{setViewCon(!viewCon)}}
      initial={{x:0, y: 0, rotate: 0}}
      animate={{}}
      transition={{duration: 0.1}}
      >
      <motion.img src='/resources/next.png' alt='Expand contacts' width={15} height={15} className='rounded-full'
      initial={{x:0, y: 0, rotate: 0}}
      animate={{rotate: viewCon? 180: 0}}
      transition={{duration: 0.5}}
      />
      </motion.button>
      <AnimatePresence>
        {viewCon &&
          <motion.div
          key="expandedContacts"
          initial={{ width: 0,x:-10, opacity: 0 }}
          animate={{ width: 'auto',x:0, opacity: 1 }}
          exit={{ width: 0,x:-10, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden w-full">  
            <motion.h1
            className={`${font.className} text-3xl lg:ml-10 ml-0`}>
              ...
              <motion.div
              className='mt-5 flex flex-row flex-1/4 *:hover:scale-90 *:transition-all'>
                <a href='https://www.facebook.com/sal.a.zar.eht/' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
                  <Image src={facebook} alt='facebook icon' height={40} width={40}/>
                </a>
                <a href='https://x.com/imposteht' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
                  <Image src={twitter} alt='x icon' height={40} width={40}/>
                </a>
                <a href='https://www.instagram.com/salzareht/' target='_blank' rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-xl h-fit w-fit mr-2 text-sm px-2 py-1 transition-all'>
                  <Image src={instagram} alt='x icon' height={40} width={40}/>
                </a>
              </motion.div>
            </motion.h1>
          </motion.div>
        }
      </AnimatePresence>
      
    </motion.div>
  )
}
