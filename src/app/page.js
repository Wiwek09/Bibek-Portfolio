'use client'
import {BsMoonStarsFill,BsSunFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiTwotoneMail,AiOutlineGithub} from 'react-icons/ai'
import Image from 'next/legacy/image'
import Link from 'next/link'; 
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import Project from '../component/project';
import {BiUpArrow} from 'react-icons/bi';
import { skills } from 'data';


export default function Home() {
  

  //For Dark Mode
  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
      },[])

  const renderThemeChanger= () => {

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <BsSunFill className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <BsMoonStarsFill className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
 };

 //For routing email
 const handleClick = () => {
   const emailSubject = encodeURIComponent('');
   const emailBody = encodeURIComponent('');
   const emailUrl = `https://mail.google.com/mail/?view=cm&to=kcbibekmail@gmail.com&su=${emailSubject}&body=${emailBody}`;

   window.open(emailUrl, '_blank');
 };

  return (
    <div className=''> 
      <section  className= '' > {/*Section from main heading to image container */}
        <div className=' bg-yellow-200 dark:bg-gray-950 dark:bg-opacity-50  rounded-b-3xl' >
         <nav className='py-10 p-10 mb-10 flex justify-between '>
          <Link href='.' ><h1 className='text-xl font-burtons tracking-wide hover:text-teal-600  transition ease-in-out delay-130  duration-300 hover:scale-110 '>Wiwek</h1></Link>
          <ul className='flex justify-center items-center'>
            <li className='transition ease-in-out  hover:scale-105 duration-700' >
            {renderThemeChanger()}
            </li>
            <li className='transition ease-in-out  hover:scale-105 duration-700' >
              <Link className= 'bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold tracking-widest text-black dark:text-white px-4 py-2 rounded-lg ml-8' href='Bibek-kc.pdf' target='_blank' >Resume</Link>
            </li>
          </ul>
         </nav>
         <div className='text-center md:p-10 flex flex-col'>
          <h2 className='xl:text-9xl text-7xl py-2 text-teal-600 font-extrabold'>Bibek_K.C.</h2>
          <h3 className='xl:text-4xl text-xl py-2 tracking-widest p-8 '>Software Developer</h3>
          <p className='xl:text-xl dark:text-gray-100 py-5 leading-8 text-gray-800 font-serif tracking-wide p-2 ' >
            This is me a software developer who is interested in technology and its impacts on business corporates industry and in consumer level.
          </p>
         </div>
        </div>
         <div className='md:text-5xl mt-6 text-4xl flex justify-center md:gap-16 gap-10 py-1 text-gray-700 dark:text-white '>
          <Link className='icons' href='https://twitter.com/wastedman01' target='_blank' ><AiFillTwitterCircle /></Link>
          <Link className='icons' href='https://www.linkedin.com/in/bibek-k-c-b209b01aa/' target='_blank' ><AiFillLinkedin/></Link>
          <Link href={'/'} className=' cursor-pointer icons' onClick={handleClick} ><AiTwotoneMail/></Link>
          <Link className='icons'  href='https://github.com/Wiwek09' target='_blank' ><AiOutlineGithub/></Link>
         </div>
         <div className=' dark:bg-gray-900 container relative bg-gradient-to-b from-teal-500 rounded-lg md:w-96 md:h-96 w-64 h-64 mt-6 mx-auto  overflow-hidden mb-6 '>
          <Image src='/profile.jpg' layout='fill' objectFit='cover' alt='profile-image'  />
          <div className="overlay dark:bg-gray-900 dark:opacity-95 ">
           <div className="text md:text-3xl text-2xl ">{`<Hello World />`}</div>
          </div>
         </div>
      </section>
      <section className='dark:bg-gray-950 dark:bg-opacity-50 md:pl-10 md:pr-10 xl:px-20 p-10 md:px-18 bg-yellow-200 flex flex-col md:flex-row gap-6 min-h-fit rounded-3xl '> {/*Section of about me and skills*/}
        <div className='w-full md:w-[50%] tracking-widest '>
           <h3 className='text-3xl text-center md:text-left font-extrabold text-teal-700 uppercase'>About Me</h3>
           <p className='text-md leading-9 xl:text-xl text-gray-800 text-justify mt-2 dark:text-white '>
              I am a <span className='text-teal-500'> full stack web developer </span> who loves to try new tech stack. Getting hands on experience on projects regarding<span className='text-teal-500'> desktop</span> and <span className='text-teal-500'>web application</span>, I have a passion for working in web technology, solving problems and thrive in a team environment.
           </p>
           <p className='text-md leading-9 xl:text-xl text-gray-800 pt-6 dark:text-white '>
              I&apos;m open to <span className='text-teal-500'> Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <span className='text-teal-500'>contact</span> me.
           </p>
        </div>
        <div className='w-full md:ml-12 md:w-[50%] tracking-wide'>
          <h3 className='md:text-3xl text-2xl text-center md:text-left font-extrabold text-teal-700 uppercase'>Technology I have worked with</h3>
          <div className='mt-4 pl-[-2px]'  >
          <ul className='grid md:grid-cols-3 xl:grid-cols-4 xl:gap-y-4 md:gap-x-12 md:gap-y-2 mt-1 grid-cols-3 gap-4 font-normal grid-flow-row-dense'>
           {skills.map((item) => 
           <li className='list' key={item} >{item}</li>)
           }
          </ul>
          </div>
        </div>
      </section>    
      <section className='align-middle my-20 '> {/* Section for my project */}
       <main className='w-full space-y-4' >
        <h1 className='text-3xl xl:text-4xl font-extrabold text-teal-700 text-center uppercase' >My Works</h1>
        <div className=' bg-teal-700 h-1 w-28 rounded-full m-auto text-center' ></div>
        <div className='flex justify-center'>
        <p className='px-4 w-full m-auto xl:text-xl  text-center text-lg tracking-wide font-serif'>Here you will find some of the personal projects that I created, with each project containing all of the tech stacks used</p>
        </div>
        <section>
          <div>
            <Project />
          </div>
        </section>
        <footer className='flex flex-col justify-center items-center' >
          <div>
            <button  className=' text-2xl md:text-3xl cursor-pointer md:mb-3  hover:text-teal-600 border rounded-full p-2 flex items-center justify-center hover:bg-yellow-300 transition duration-300 ease-out delay-150' 
            onClick={() => {window.scrollTo({top:0, behavior:"smooth"})
            }} >
             <BiUpArrow className=' transition duration-300 ease-out hover:scale-110 delay-130' />
            </button>
          </div>
          <div className='md:p-5 pt-4 pb-4 font-serif tracking-widest text-teal-800 font-extrabold' >
            <span className='text-xs md:text-base' >Designed By : Bibek K.C. || Wiwek K.C.</span>
          </div>
        </footer>
       </main>
      </section>  
    </div>
  )
}