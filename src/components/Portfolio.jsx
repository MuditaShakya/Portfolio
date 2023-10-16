import React from 'react'
import autotyper from '../assets/portfolio/autotyper.PNG';
import hms from '../assets/portfolio/hms.JPG';
import mongoExpress from '../assets/portfolio/mongoExpress.JPG';
import pyalgo from '../assets/portfolio/pyalgo.JPG';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            name: "Record Keeper",
            src: hms,
            link: "https://github.com/GunjanShakya/Record-Keeper",
        },
        {
            id: 2,
            name: "Amazon Data Scraper API",
            src: autotyper,
            link: "https://rapidapi.com/gunjan1923cs1134/api/demoamazonscraper",
        },
        {
            id: 3,
            name: "Collab Write",
            src: mongoExpress,
            link: "https://github.com/GunjanShakya/CollabWrite",
        },
        {
            id: 4,
            name: "Hackerrank Automation",
            src: pyalgo,
            link: "https://github.com/GunjanShakya/Hackerrank_Automation",
        },
    ]



  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            <div  className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id, name, src, link}) => (
                    
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                    <div className="flex items-center justify-center">
                        <a href={link}
                        target="_blank"
                        rel="noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{name}</button>
                        </a>
                        <a href={link}
                        target="_blank"
                        rel="noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </a>

                    </div>
                </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Portfolio