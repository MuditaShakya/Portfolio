import React from 'react'
import spotify from '../assets/portfolio/spotify.png';
import hms from '../assets/portfolio/hms.JPG';
import fitness from '../assets/portfolio/fitness.jpg';
import inshorts from '../assets/portfolio/inshorts.jpg';

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
            name: "Spotify Clone",
            src: spotify,
            link: "https://github.com/MuditaShakya/SpotifyClone",
        },
        {
            id: 3,
            name: "ThriveFitness",
            src: fitness,
            link: "https://github.com/GunjanShakya/CollabWrite",
        },
        {
            id: 4,
            name: "InshortsClone",
            src: inshorts,
            link: "https://github.com/GunjanShakya/Hackerrank_Automation",
        },
    ]



  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
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