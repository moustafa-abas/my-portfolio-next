"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import quiz from "../assets/quiz-app.jpg";
import crud from "../assets/crud.png";
import portfolio from "../assets/old-portfolio.webp";
import atc from "../assets/atc.webp";
import car from "../assets/car rental.webp";
import elipso from "../assets/elipso.webp";
import resturant from "../assets/resturant.webp";
import e_commerce from "../assets/e-commerce.webp";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Projects = () => {
  const Projects = [
    {
      src: crud,
      link: "https://my-crud-system.vercel.app/",
      name: "crud",
      title:
        "students information system to add, update and delete students data in an organization like a school, college...",
      tools: [
        "next",
        "tailwind",
        "localStorage",
        "react hook form",
        "react icons",
        "responsive",
      ],
    },
    {
      src: e_commerce,
      link: "https://e-commerce-git-main-moustafa-abas-projects.vercel.app/",
      name: "e-commerce",
      title:
        "e-commerce To display products that come from API and add them to the cart and provide night mode and authentication...",
      tools: [
        "react",
        "bootstrap",
        "sass",
        "redux toolkit",
        "react hook form",
        "font awesome icons",
        "responsive",
      ],
    },
    {
      src: quiz,
      link: "https://quiz-app-gilt-delta.vercel.app/",
      name: "quiz-app",
      title:
        "quiz-app for trainees that provides a set of questions from an external API and displays them according to the user's choices, with the result given at the end....",
      tools: [
        "next",
        "tailwind",
        "redux toolkit",
        "axios",
        "react icons",
        "responsive",
      ],
    },
    {
      src: portfolio,
      link: "https://my-portfolio-three-peach-38.vercel.app/",
      name: "portfolio",
      title:
        "my old portfolio for To highlight my most important skills and the tools I use....",
      tools: ["react", "bootstrap", "sass", "font awesome icons", "responsive"],
    },
    {
      src: atc,
      link: "https://www.atc4ac.com/",
      name: "atc-carrier",
      title:
        "landing page for One of the most important and largest air conditioning companies....",
      tools: ["next", "tailwind", "responsive"],
    },
    {
      src: car,
      link: "https://car-rental-ashy.vercel.app/",
      name: "car rental",
      title: "it Looks like landing page (not enter active).",
      tools: [
        "html",
        "css",
        "bootstrap",
        "font awesome icons",
        "no responsive",
      ],
    },
    {
      src: elipso,
      link: "https://elipso-project.vercel.app/",
      name: "elipso community",
      title: "it Looks like landing page (not enter active).",
      tools: [
        "html",
        "css",
        "bootstrap",
        "font awesome icons",
        "no responsive",
      ],
    },
    {
      src: resturant,
      link: "https://restaurant-kohl-tau.vercel.app/",
      name: "omani food",
      title: "it Looks like landing page (not enter active).",
      tools: [
        "html",
        "css",
        "bootstrap",
        "font awesome icons",
        "no responsive",
      ],
    },
  ];
  const filters = [
    "all",
    "html",
    "css",
    "sass",
    "bootstrap",
    "tailwind",
    "react",
    "next",
    "responsive",
    "no responsive",
  ];
  const [projects, setProjects] = useState();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    filter === "all"
      ? setProjects(Projects)
      : setProjects(
          Projects.filter((project) => project.tools.includes(filter))
        );
  }, [filter]);
  return (
    <main className="Container " id="projects">
      <Heading name="projects" />
      <section className="flex flex-wrap sm:justify-center gap-3 sm:gap-6 ">
        {filters.map((one, index) => (
          <button
            key={index}
            className={`capitalize ${
              filter === `${one}` ? "" : "background text-white"
            } px-4 py-1 rounded-2xl`}
            onClick={() => setFilter(one)}
          >
            {one}
          </button>
        ))}
      </section>
      {projects?.map((project, index) => (
        <section
          className={`sm:flex items-center ${
            index % 2 == 1 ? "flex-row-reverse" : null
          } gap-6 lg:gap-20   my-16  `}
          key={index}
        >
          <div
            className="lg:w-1/2 relative cursor-pointer"
            data-aos="fade-right"
          >
            <a href={project.link} target="_blank">
              <p className="absolute text-white bg-black w-full h-full opacity-70 rounded-lg md:rounded-2xl flex justify-center gap-3 capitalize  items-center text-lg lg:opacity-0 lg:hover:opacity-70 duration-200">
                view live project <LuSquareArrowOutUpRight color="white" />
              </p>
              <Image
                src={project.src}
                alt="project image"
                className="w-full rounded-lg md:rounded-2xl border   "
              />
            </a>
          </div>

          <aside
            className="capitalize lg:w-1/2 px-2 py-4 lg:p-0"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h1 className="text-5xl gradient mx-auto">{project.name}</h1>
            <p className="my-8 text-lg md:tracking-wider md:leading-7">
              {project.title}
            </p>
            <div className="flex  gap-2 md:gap-4 flex-wrap">
              {project.tools.map((one, index) => (
                <span
                  className="background px-4  rounded-2xl text-xl text-white"
                  key={index}
                >
                  {one}
                </span>
              ))}
            </div>
          </aside>
        </section>
      ))}
    </main>
  );
};

export default Projects;
