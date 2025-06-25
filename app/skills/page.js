import Skill_section from "@/components/Skill_section";
import webdev from '../../public/resources/webdev.png'
import appdev from '../../public/resources/appdev.png'
import prog from '../../public/resources/programming.png'
import uiux from '../../public/resources/uiux.png'


export default function Page() {

  const skill_section_webdev = 
  {
    'Frontend':
    {
        'CSS':95,
        'TailwindCSS':90,
        'React':80,
        'Framer Motion':85,
        'ThreeJS':30
    },
    'Backend':
    {
        'NodeJS':80,
        'ExpressJS':85,
        'Laravel':70
    },
    'Full-Stack':
    {
        'NextJS':85
    },
    'Database':
      {
        'Postgresql':95,
        'MongoDB':80,
        'Mysql':85
      }
  }

  const skill_section_appdev = 
  {
    'App Development':
    {
        'Flutter':65,
        'Android Studio':90,
        'React Native':70,
    },
    'Database':
    {
      'Postgresql':95,
      'MongoDB':80,
      'Mysql':85
    }
  }
  const skill_section_uiux = 
  {
    '2D':
    {
      'Canva':85,
      'Figma':80,
      'Adobe Illustrator':70
    },
    '3D':
    {
      'Blender':70
    }
  }

  const skill_section_softdev =
  {
    'Problem Solving':
    {
      'C':90,
      'C++':95,
      'Java':90,
      'Python':80
    },
    'Operating System':
    {
      'x86 Assembly':90,
      'C':90,
      'Kernel development':75,
    },
    'Version Control':
    {
      'Git & GitHub': 90
    }
  }
  


  return(
    <div className='*:mb-3'>
      <Skill_section title='Web Development' image={webdev} skillCard_props={skill_section_webdev}/>
      <Skill_section title='App Development' image={appdev} skillCard_props={skill_section_appdev}/>
      <Skill_section title='Software Development' image={prog} skillCard_props={skill_section_softdev}/>
      <Skill_section title='UI/UX Design' image={uiux} skillCard_props={skill_section_uiux}/>
      
    </div>
  )
}