import React from "react";
import html from "../assets/HTML5.webp";
import css from "../assets/CSS3.webp";
import js from "../assets/JavaScript.png";
import bootstrap from "../assets/Bootstrap.webp";
import Tailwind from "../assets/Tailwind CSS.png";
import sass from "../assets/Sass.png";
import react from "../assets/React.png";
import Vite from "../assets/Vite.js.webp";
import next from "../assets/Next.js.png";
import Axios from "../assets/Axios.png";
import Figma from "../assets/Figma.webp";
import NPM from "../assets/NPM.png";
import Postman from "../assets/Postman.png";
import Redux from "../assets/Redux.png";
import Image from "next/image";
import Heading from "./Heading";

const Skills = () => {
  const all = [
    {
      name: html,
      time: "100",
    },
    {
      name: css,
      time: "300",
    },
    {
      name: js,
      time: "500",
    },
    {
      name: bootstrap,
      time: "700",
    },
    {
      name: Tailwind,
      time: "900",
    },
    {
      name: sass,
      time: "1100",
    },
    {
      name: next,
      time: "1500",
    },
    {
      name: react,
      time: "1300",
    },
    {
      name: Vite,
      time: "1700",
    },
    {
      name: Axios,
      time: "1900",
    },
    {
      name: Figma,
      time: "2100",
    },
    {
      name: NPM,
      time: "2300",
    },
    {
      name: Postman,
      time: "2500",
    },
    {
      name: Redux,
      time: "2700",
    },
  ];
  return (
    <main className="  sm:border-y mt-12 pb-10 text-center" data-aos="fade-up" id="skills">
    <Heading name='skills'/>

      <p className="my-10 capitalize sm:text-3xl ">
        the skills, tools and technologies i use :
      </p>
      <section className="flex items-center justify-center sm:w-3/4 mx-auto flex-wrap gap-8">
        {all.map((skill, index) => (
          <Image key={index}
            src={skill.name}
            alt="skill"
            className="w-1/4 sm:w-24"
            data-aos-duration="1000"
            data-aos-delay={skill.time}
            data-aos="zoom-out"
            loading="lazy"
          />
        ))}
      </section>
    </main>
  );
};

export default Skills;
