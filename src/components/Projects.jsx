import React from "react";
import setlistchecklist from "../assets/portfolio/setlistchecklist.png"
import local_Directory_Scraper from "../assets/portfolio/local_Directory_Scraper.png"
import binary_Tree_Database from "../assets/portfolio/binary_Tree_Database.png"
import quizzical from "../assets/portfolio/quizzical.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: setlistchecklist,
      desc: "This project is built with Nextjs using the Setlist.fm database API. It has saved my friends hours trying to get ready for our upcoming concerts",
      link: "https://setlist-checklist.vercel.app/"
    },
    {
      id: 2,
      src: quizzical,
      desc: "This project is made with vinilla JS, CSS, and HTML. A fun quiz app using the open database API",
      link: "https://marsxnow.github.io/349P1/index.html"
    },
    {
      id: 3,
      src: local_Directory_Scraper,
      desc: "This more practical project saved my team countless hours of manually looking through the local chamber listings for contact information for toy drives and donations.",
      link: "https://github.com/jacob-corletto/local_Directory_Scraper"
    }
  ]
  return (
    <div name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, desc, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="object-cover" />

              <div className=" items-center ">
                <p className=" px-6 py-3 m-4">{desc}</p>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noopener noreferrer">Demo / Repo</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;