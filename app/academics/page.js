'use client'

import Academies from "@/components/Academies";
import kuet from '../../public/resources/KUET.jpg';
import drmc from '../../public/resources/DRMC.jpg';
import bnmpc from '../../public/resources/BNMPC.jpg';
import fgis from '../../public/resources/FGIS.jpg';
import showmore from '../../public/resources/showmore.png';
import showless from '../../public/resources/showless.png';
import Image from 'next/image'
import {useState} from 'react'



export default function Page() {

  const [btnClicked,setBtnClicked] = useState(false);
  return(
    <div className='grid grid-rows-1 gap-10 mb-5'>
      <Academies name='Khulna University of Engineering and Technology' image={kuet} link='https://kuet.ac.bd/' desc='' current={true} degree='BSc in Computer Science and Engineering' year='co2021' shortName='KUET' session='5' result='3.21'/>
      <Academies name='Dhaka Residential model College' image={drmc} link='https://drmc.edu.bd/' desc='' current={false} degree='Higher Secondary Certificate' year='2021' shortName='DRMC' session='2019 - 2021' result='5.00'/>
      <Academies name='Birshreshtha Noor Mohammad Public College' image={bnmpc} link='https://www.noormohammadcollege.ac.bd/' desc='' current={false} degree='Secondary School Certificate' year='2019' shortName='BNMPC' session='2014 - 2019' result='5.00'/>

      {btnClicked &&
      <>
      <Academies name='Birshreshtha Noor Mohammad Public College' image={bnmpc} link='https://www.noormohammadcollege.ac.bd/' desc='' current={false} degree='Junior School Certificate' year='2016' shortName='BNMPC' session='2014 - 2019' result='5.00'/>      
      <Academies name='Future Gen International School' image={fgis} link='https://www.facebook.com/FutureGenInternationalSchool' desc='' current={false} degree='Primary Education Completion' year='2013' shortName='FGIS' session='2012 - 2013' result='5.00'/>
      </>
      }

      <button onClick={()=>{setBtnClicked(!btnClicked)}} className='backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-fit h-fit flex justify-center items-center text-black bg-white/50 p-1 transition-all duration-0.5 hover:scale-95 bottom-5 right-5'>
        {!btnClicked? 
        <><Image src={showmore} alt='Show more' width={30} height={30}/>Expand</>
        :
        <><Image src={showless} alt='Show less' width={30} height={30}/>Collapse</>}
      </button> 
    </div>
  )
}