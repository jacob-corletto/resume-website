import React from "react"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import nextjs from "../assets/nextjs.png"
import react from "../assets/react.png"
import github from "../assets/github.png"

const Skills = () => {
  let tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
    },
    {
      id: 4,
      src: nextjs,
      title: "Nextjs",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: node,
      title: "Node",
    },
    {
      id: 7,
      src: react,
      title: "React",
    },
    {
      id: 8,
      src: github,
      title: "Github",
    }
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            List of Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title }) => (
            <div key={id}
              className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills