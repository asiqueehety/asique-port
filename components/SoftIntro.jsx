'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Lexend } from 'next/font/google'
import {Typewriter} from 'react-simple-typewriter'
import Tree_webdev from './Tree_webdev'
import Tree_appdev from './Tree_appdev'
import Tree_compdev from './Tree_compdev'
import Tree_uiux from './Tree_uiux'
import Tree_aiml from './Tree_aiml'
import Tree_webthree from './Tree_webthree'
import Connect from './Connect'
import CV_download from './CV_download'

const lexend_font = Lexend({ weight: ['800'], subsets: ['latin'] })
const lexend_font2 = Lexend({ weight: ['500'], subsets: ['latin'] })



export default function SoftIntro() {
  const [locHover, setLocHover] = useState(false)
  const [readBio, setReadBio] = useState(false)
  const glowRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  function handleMouseMove(e) {
    const bounds = glowRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    })
  }

  return (
    <section>
      <motion.h1
      className={`${lexend_font.className} text-4xl lg:text-8xl mb-5 text-black bg-white w-fit`}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      >
        <Typewriter
        words={['<Hey, Asique here./']}
        loop={Infinity}
        cursor
        cursorStyle='>'
        typeSpeed={150}
        deleteSpeed={100}
        delaySpeed={10000}
        />
      </motion.h1>
      <motion.p className={`${lexend_font2.className} text-lg mb-10`}>
        based in
        <motion.a
        className={`${locHover ? 'text-black' : 'text-white'} text-2xl lg:text-4xl text-center`}
        href="https://maps.app.goo.gl/jKMY1u6kdcymD1XW6"
        target="_blank"
        onMouseOver={() => setLocHover(true)}
        onMouseOut={() => setLocHover(false)}
        animate={locHover ? { background: '#ffffff', scale: 1.2 } : { background: '#000000' }}
        >
          {window.innerWidth<640? <br/>:' '}Dhaka, Bangladesh
        </motion.a>.
        <br />Building, solving, and designing with code
      </motion.p>
      
      <div className='flex flex-row flex-wrap flex-1/5 gap-6'>
        <Tree_webdev/>
        <Tree_appdev/>
        <Tree_compdev/>
        <Tree_uiux/>
        <Tree_aiml/>
        <Tree_webthree/>
      </div>
      <div>
        <CV_download/>
        <Connect/>
      </div>

 

      <motion.div
      ref={glowRef}
      className="relative backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl shadow-lg p-6 max-w-5xl text-white h-fit justify-center mr-5 w-fit overflow-hidden cursor-pointer mt-3 mb-3"
      onClick={() => setReadBio(!readBio)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      >
        {hovering && (
          <motion.div
            className="absolute bg-cyan-300/30 rounded-full pointer-events-none blur-2xl opacity-80"
            style={{ top: mousePos.y - 80, left: mousePos.x - 80 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        {!readBio ? (
          <motion.h2
          className="text-lg relative z-10 animate-bounce text-blue-200 p-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
            more about me
          </motion.h2>
        ) : (
          <motion.p
          className="relative z-10 text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
            I’m a <span className="text-3xl">full-stack web developer</span>, a <span className="text-3xl">competitive programmer</span>, <span className="text-3xl">UI/UX designer</span>, and an <span className="text-3xl">app developer</span>—committed to crafting seamless digital experiences that don’t just look good but feel right. With a strong foundation in clean code and creative thinking, I love turning abstract ideas into intuitive interfaces and scalable applications.
            <br />
            Beyond the web, I dive deep into the logic that powers machines. I'm fascinated by <span className="text-3xl">operating systems</span>, <span className="text-3xl">computer architecture</span>, and how hardware and software coalesce to create efficient, intelligent systems. My curiosity doesn't stop there—I’m also drawn to the world of data science, always exploring how raw data can tell stories, reveal insights, and drive smarter decisions.
            <br />
            Whether I’m debugging a tricky algorithm, sketching the wireframe of a new interface, building cross-platform apps, or studying the anatomy of a CPU instruction cycle—I’m always driven by the same goal: to understand deeply and create meaningfully.
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
