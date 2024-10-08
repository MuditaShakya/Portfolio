import React from 'react'

// import python from '../assets/python.png';
// import django from '../assets/django.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
// import css from '../assets/css.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
// import tailwind from '../assets/tailwind.png';
// import github from '../assets/github.png';
// import aws from '../assets/aws.png';
import mysql from '../assets/mysql.jpg';
import javascript from '../assets/javascript.png';


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        // {
        //     id: 2,
        //     src: css,
        //     title: 'CSS',
        //     style: 'shadow-blue-500'
        // },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        // {
        //     id: 5,
        //     src: tailwind,
        //     title: 'Tailwind',
        //     style: 'shadow-sky-400'
        // },
        // {
        //     id: 6,
        //     src: python,
        //     title: 'Python',
        //     style: 'shadow-yellow-500'
        // },
        // {
        //     id: 7,
        //     src: django,
        //     title: 'Django',
        //     style: 'shadow-green-800'
        // },
        {
            id: 8,
            src: mysql,
            title: 'C++',
            style: 'shadow-blue-400'
        },
        {
            id: 9,
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        // {
        //     id: 11,
        //     src: aws,
        //     title: 'AWS',
        //     style: 'shadow-white'
        // },
        // {
        //     id: 12,
        //     src: github,
        //     title: 'Github',
        //     style: 'shadow-gray-400'
        // },

    ]


  return (
    <div
     name="technical skills"
     className="w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Technical Skills</p>
                <p className="py-6">Tech Stack I've worked upon</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                    
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience