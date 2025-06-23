// // app/loading.js


// import { Caprasimo, Caveat, Exo_2, Gravitas_One, Inconsolata, Playfair_Display, Sevillana } from 'next/font/google';

//   const font0 = Caveat({subsets:['latin'], weight:['500']})
//   const font1 = Exo_2({subsets:['latin'], weight:['500']})
//   const font2 = Sevillana({subsets:['latin'], weight:['400']})
//   const font3 = Playfair_Display({subsets:['latin'], weight:['500']})
//   const font4 = Caprasimo({subsets:['latin'], weight:['400']})
//   const font5 = Inconsolata({subsets:['latin'], weight:['500']})
//   const font6 = Gravitas_One({subsets:['latin'], weight:['400']})

// export default function Loading() {


//   const fonts=[font0,font1,font2,font3,font4,font5,font6]
//   var ind=[0,1,2,3,4,5,6]

//   setTimeout(()=>{
//     for(var i=0;i<1;i++)
//     {
//       ind[i]=(ind[i]+1)%7
//     }
//   },100)

//   return (
//   <div className="flex items-center justify-center h-screen">
//     <p className={`${()=>{const font=fonts[ind[0]];return font.className}}text-6xl text-white`}>L</p>
//     <p className={`${()=>{const font=fonts[ind[1]];return font.className}}text-6xl text-white`}>O</p>
//     <p className={`${()=>{const font=fonts[ind[2]];return font.className}}text-6xl text-white`}>A</p>
//     <p className={`${()=>{const font=fonts[ind[3]];return font.className}}text-6xl text-white`}>D</p>
//     <p className={`${()=>{const font=fonts[ind[4]];return font.className}}text-6xl text-white`}>I</p>
//     <p className={`${()=>{const font=fonts[ind[5]];return font.className}}text-6xl text-white`}>N</p>
//     <p className={`${()=>{const font=fonts[ind[6]];return font.className}}text-6xl text-white`}>G</p>
//   </div>
//   )
// }

//proof that I tried my best and used my wit but Im just tired

'use client'

import { useEffect, useState } from 'react'
import { Caprasimo, Caveat, Exo_2, Gravitas_One, Inconsolata, Playfair_Display, Sevillana } from 'next/font/google'

// Load all fonts
const font0 = Caveat({ subsets: ['latin'], weight: ['500'] })
const font1 = Exo_2({ subsets: ['latin'], weight: ['500'] })
const font2 = Sevillana({ subsets: ['latin'], weight: ['400'] })
const font3 = Playfair_Display({ subsets: ['latin'], weight: ['500'] })
const font4 = Caprasimo({ subsets: ['latin'], weight: ['400'] })
const font5 = Inconsolata({ subsets: ['latin'], weight: ['500'] })
const font6 = Gravitas_One({ subsets: ['latin'], weight: ['400'] })

const fonts = [font0, font1, font2, font3, font4, font5, font6]

export default function Loading() {
  const [indices, setIndices] = useState([0, 1, 2, 3, 4, 5, 6])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((i) => (i + 1) % fonts.length)
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G']

  return (
    <div className="flex items-center justify-center h-screen gap-1">
      {letters.map((char, idx) => (
        <p
          key={idx}
          className={`${fonts[indices[idx]].className} text-6xl text-white`}
        >
          {char}
        </p>
      ))}
    </div>
  )
}
