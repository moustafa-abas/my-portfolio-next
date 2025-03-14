"use client";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Services from "./components/Services";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  const [End, setEnd] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);

  useEffect(() => {
    const services = document.getElementById("services")?.offsetTop;
    const projects = document.getElementById("projects")?.offsetTop;
    const skills = document.getElementById("skills")?.offsetTop;
    window.onscroll = function () {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10
      ) {
        setEnd(true);
      } else setEnd(false);

      if (window.scrollY >= projects - 200) {
        setCurrentSection("projects");
      } else if (window.scrollY >= skills - 200) {
        setCurrentSection("skills");
      } else if (window.scrollY >= services - 200) {
        setCurrentSection("services");
      } else {
        setCurrentSection("home");
      }
    };
  });
  return (
    <main className="sm:pt-5 ">
      <Nav currentSection={currentSection} />
      <Landing />
      <Services />
      <Skills />
      <Projects />
      {End ? (
        <FaArrowUp className="animate-bounce sticky bottom-7 mx-auto  " />
      ) : (
        <FaArrowDown className="animate-bounce sticky bottom-7 mx-auto  " />
      )}
    </main>
  );
}
