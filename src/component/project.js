import React, { useState, useEffect } from 'react'
import projects from 'data'
import Image from 'next/image'
import Link from 'next/link'
import {HiBadgeCheck} from 'react-icons/hi'


const project = ({}) => {

  return (
    <div className=' p-10 flex flex-col space-y-10 justify-center items-center' >
        {projects.map((el,index) => {
         return (
          <div key={el.id} className={`flex ${index % 2 ? 'xl:flex-row-reverse' :'xl:flex-row' }  xl:gap-[6rem]  flex-col space-y-8  xl:w-[70%]`}  >
            <div className='md:block shadow-lg shadow-yellow-300  h-fit w-fit rounded-xl' >
              <div  className='relative overflow-hidden container xl:h-auto xl:w-auto hover:opacity-[0.8] rounded-xl'  >
                <Image className=' xl:w-auto xl:h-auto h-40 w-25' src={el.image} alt='image' objectFit='cover' height={500} width={500} />
                <Link href={el.link} target='_blank' >
                 <span className="overlay dark:bg-gray-900 dark:opacity-95 ">
                   <span className="text hover:opacity-1 text-2xl md:text-3xl">
                    {`Click to Preview`}
                   </span>
                </span>
                </Link>
              </div>
            </div>
            <div className='flex space-y-5 flex-col flex-1  xl:w-[70%]' >
              <Link href={el.github} target='_blank' className='group relative text-2xl font-bold text-green-600' >{el.title}
              <span className=" text-sm opacity-0 group-hover:opacity-100 absolute bottom-10 left-0 bg-yellow-200 text-teal-600 p-2 rounded-md tracking-wide dark:bg-gray-900 ">
               Preview-CodeBase
              </span>
              </Link>
              <span className='bg-yellow-200 max-w-lg p-3 leading-6 tracking-wide h-fit rounded-lg dark:bg-gray-900 text-justify' >{el.desc}</span>
              <ul className='flex flex-start gap-3 text-xl max-w-lg flex-wrap' >
                {el.tech.map((number) => {
                  return(<li key={number} className='flex justify-center items-center gap-[4px]' ><HiBadgeCheck/>{number}</li>)
                })}
              </ul>
              <span className='bg-yellow-600 w-full h-1 block overflow-visible '/>
            </div>
          </div>          
          )
        })}
        
    </div>
  )
}

export default project