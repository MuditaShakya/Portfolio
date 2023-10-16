import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
                <p className="text-xl mt-20">
                Greetings! I am a recent graduate with a B.Tech. degree in Computer Science and Engineering (2023 batch) from KIET Group Of Institutions, Ghaziabad (Delhi-NCR). 
                </p>

                <br/>

                <p className="text-xl">
                I've spent a year as an intern, honing my skills in software building and design. I thrive on utilizing technologies like React, Node, Express, MongoDB, and Javascript to bring ideas to life. My curiosity extends to enhancing my proficiency in data structures and algorithms.
                </p>

                <p className="text-xl mt-6">
                My journey includes successfully contributing to secure payment systems at Thales, where I played a pivotal role in enhancing the payShield 10K application. Additionally, my time at IBM allowed me to refine my skills in web application development and user-centric design.
                </p>
            
        </div>
    </div>
  )
}

export default About