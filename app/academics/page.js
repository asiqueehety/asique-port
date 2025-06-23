import Academies from "@/components/Academies";
import kuet from '../../public/resources/KUET.jpg';
import drmc from '../../public/resources/DRMC.jpg';
import bnmpc from '../../public/resources/BNMPC.jpg';



export default function Page() {
  return(
    <div className='grid grid-rows-1 gap-10 mb-5'>
      <Academies name='Khulna University of Engineering and Technology' image={kuet} link='https://kuet.ac.bd/' desc='' current={true} degree='BSc in Computer Science and Engineering' year='co2021' shortName='KUET' session='5' result='3.21'/>
      <Academies name='Dhaka Residential model College' image={drmc} link='https://drmc.edu.bd/' desc='' current={false} degree='Higher Secondary Certificate' year='2021' shortName='DRMC' session='2019 - 2021' result='5.00'/>
      <Academies name='Birshreshtha Noor Mohammad Public College' image={bnmpc} link='https://www.noormohammadcollege.ac.bd/' desc='' current={false} degree='Secondary School Certificate' year='2019' shortName='BNMPC' session='2014 - 2019' result='5.00'/>

      
      
    </div>
  )
}