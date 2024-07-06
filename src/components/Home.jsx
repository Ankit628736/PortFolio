import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

import { ReactTyped,Typed } from "react-typed";
import pic from '../../public/photo.avif'




function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
            />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque totam quae, cupiditate, amet eveniet, consequatur modi 
            ullam perferendis eaque qui commodi rem. Dolorum eveniet amet 
             eos optio mollitia animi similique dolor in earum quam molestiae nemo, 
             provident odio illo? Deleniti cum quibusdam quasi architecto minus vero quae 
             necessitatibus exercitationem praesentium?
        </p>
        <br />
        {/* Social media icons */}
        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
        <div className='space-y-2'>
            <h1 className='font-bold'>Avilabe on</h1>
            <ul className='flex space-x-5'>
                <li>
                    <a href="https://www.facebook.com/login/" target='_blank'><FaFacebookSquare className='text-2xl cursor-pointer'/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/login/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer'/></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target='_blank'><FaYoutube className='text-2xl cursor-pointer'/></a>
                </li>
                <li>
                    <a href="https://core.telegram.org/blackberry/login" target='_blank'><BsTelegram className='text-2xl cursor-pointer'/></a>
                </li>
            </ul>
        </div>
        <div className='space-y-2'>
            <h1 className='font-bold'>Currently working on</h1>
            <div className='flex space-x-5'>
            <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <RiReactjsLine className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            </div>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1'>
        <img src={pic} alt=""  className='rounded-full md:w-[450px] md:h-[450px]'/>
      </div>
      </div>
      <br />
      <hr />
    </div>
    </>
  )
}

export default Home
