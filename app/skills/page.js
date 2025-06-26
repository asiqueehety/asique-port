import Skill_section from "@/components/Skill_section";
import webdev from '../../public/resources/webdev.png'
import appdev from '../../public/resources/appdev.png'
import prog from '../../public/resources/programming.png'
import uiux from '../../public/resources/uiux.png'
import dereld from '../../public/resources/dereld-logo.png'
import cooktwah from '../../public/resources/cooktwah-logo.png'
import os from '../../public/resources/os.png'
import portfolio from '../../public/resources/portfolio-ss.png'




export default function Page() {

//SKILLS

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
        'Mysql':85,
        'Firebase':90,
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
      'Mysql':85,
      'Firebase':90
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

//PROJECTS

  const proj_webdev = 
  {
    'DeRel\'d':
    {
      'shortDesc':'A social media platform built and optimized for debating and critical thinking about the world\'s recent and historical issues.',
      'githubRepoLink':'https://github.com/asiqueehety/DeRel-d',
      'skillsUsed':['HTML','CSS','Javascript','Embedded Javascript','React','Nodejs','Express','Postgresql'],
      'link':'...',
      'image':'/resources/dereld-logo.png'
    },
    'This portfolio':
    {
      'shortDesc':'my personal portfolio',
      'githubRepoLink':'https://github.com/asiqueehety/asique-port',
      'skillsUsed':['React','Nextjs','Tailwind CSS','Framer motion','Threejs'],
      'link':'https://asiqueehety.vercel.app/',
      'image':'/resources/portfolio-ss.png'
    }      
  }

  const proj_appdev = 
  {
    'CookTwah':
    {
      'shortDesc':'A cooking recipe finder app, which will allow users to search for recipes based on ingredients they have at home.',
      'githubRepoLink':'https://github.com/asiqueehety/Cook-Twah',
      'skillsUsed':['Java','XML','Android Studio','Firebase'],
      'link':'...',
      'image':'/resources/cooktwah-logo.png'
    }
  }
  const proj_softdev = 
  {
    'EhtOS':
    {
      'shortDesc':'(WORK IN PROGRESS) A simple operating system built from scratch.',
      'githubRepoLink':'https://github.com/asiqueehety/Numerical-Codeworks',
      'skillsUsed':['C','x86 Assembly','Kernel development'],
      'link':'...',
      'image':'/resources/os.png'
    }
  }
  const proj_uiux = 
  {}
  return(
    <div className='*:mb-3'>
      <Skill_section title='Web Development' image={webdev} skillCard_props={skill_section_webdev} skill_read={true} projCard_props={proj_webdev}/>
      <Skill_section title='App Development' image={appdev} skillCard_props={skill_section_appdev} skill_read={false} projCard_props={proj_appdev}/>
      <Skill_section title='Software Development' image={prog} skillCard_props={skill_section_softdev} skill_read={false} projCard_props={proj_softdev}/>
      <Skill_section title='UI/UX Design' image={uiux} skillCard_props={skill_section_uiux} skill_read={false} projCard_props={proj_uiux}/>
      
    </div>
  )
}