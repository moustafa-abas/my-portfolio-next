"use client";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Services from "./components/Services";
import "aos/dist/aos.css"; // استيراد الأنماط الخاصة بـ AOS
import AOS from "aos"; // استيراد AOS
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  const [End, setEnd] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);
  useEffect(() => {
    window.onscroll = function () {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10
      ) {
        setEnd(true);
      } else setEnd(false);
    };
  }, [window.scrollY]);

  return (
    <main className="sm:pt-5 ">
      <Nav />
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
