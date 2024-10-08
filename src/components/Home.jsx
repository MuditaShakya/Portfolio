import React from 'react'
// import heroImage from "../assets/heroImage.jpg";
import mudita from "../assets/mudita.jpg";
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm a Front-end Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I'm on a journey of continuous growth. My current passion involves creating web applications using MERN stack. As I evolve, I'm constantly adding new layers to my skill set.
                </p>

                <div>
                    <Link 
                        to="projects"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
            <img src={mudita} alt="my profile" className="rounded-2xl mx-auto w-1/2 md:w-3/4" />


            </div>
        </div>
    </div>
   
  )
}

export default Home