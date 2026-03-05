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
                Greetings! I am a final year student pursuing B.Tech. degree in Computer Science and Engineering (2025 batch) from KIET Group Of Institutions, Ghaziabad (Delhi-NCR). 
                </p>

                <br/>

                <p className="text-xl">
                I've been dedicated to honing my skills in software building and design. I thrive on utilizing technologies like React, Node, Express, MongoDB, and JavaScript to bring ideas to life. My curiosity extends to enhancing my proficiency in data structures and algorithms.
                 </p>
                 <p className="text-xl">
    I have dedicated time to honing my skills in software building and design. I thrive on utilizing technologies like React, Node, Express, MongoDB, and JavaScript to bring ideas to life. My curiosity extends to enhancing my proficiency in data structures and algorithms.
</p>
<p className="text-xl mt-6">
   My journey includes completing over 200 DSA problems on LeetCode and GeeksforGeeks, sharpening my problem-solving skills. Additionally, I gained practical experience during my front-end internship at Oasis Infobyte, where I focused on creating responsive and user-friendly web applications.
</p>

            
        </div>
    </div>
  )
}

export default About