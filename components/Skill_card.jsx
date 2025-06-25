import { Lexend } from 'next/font/google'
import React from 'react'
import SkillBar from '@/components/SkillBar'


const font2 = Lexend({subsets:['latin'],weight:['200']})

export default function Skill_card(props) {
    const {title,skills}=props

  return (
    <div className='backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl w-fit h-fit m-3'>
        <h1 className='backdrop-blur-md bg-blue-300/40 border border-white/20 shadow-lg rounded-xl m-1 text-2xl text-center'>{title}</h1>
        <div className='flex flex-row justify-evenly'>
            <div className={` ${font2.className} flex flex-col justify-evenly text-sm m-3`}>
                <h2 className='bg-amber-400/30 rounded-lg text-center' >Skill</h2>

                {Object.entries(skills).map((skill,ind)=>
                    {
                        return(
                            <div key={ind} className={`${font2.className} flex flex-col justify-between text-md m-2`}>
                                <h1>{skill[0]}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className={` ${font2.className} flex flex-col justify-evenly text-sm lg:w-60 w-35 m-3`}>
                <h2 className='bg-amber-400/30 rounded-lg text-center' >Proficiency</h2>

                {Object.entries(skills).map(([skill,value],ind)=>
                    {
                        return(
                            <div key={ind} className={`${font2.className} flex flex-row justify-evenly text-md m-2`}>
                                <SkillBar level={value}/>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
    </div>
  )
}
