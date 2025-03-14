import Image from "next/image";
import React from "react";
import me from "../assets/IMG-20240117-WA0090.webp";
const Landing = () => {
  return (
    <div className="flex  justify-between  capitalize items-center Container pt-10 sm:pt-0 " id='home'>
      <main className="w-1/2 " data-aos='fade-right' >
        <hgroup>
          <h1 className="gradient sm:text-8xl   text-xl ">
            front-end developer
          </h1>
          <p className="sm:mt-4 mt-3 sm:text-2xl">
            hello, my name is <br />
            <span className="gradient sm:text-4xl text-xl">
              mostafa abas
            </span>
          </p>
        </hgroup>
        <button className=" background   rounded-3xl  sm:w-40 sm:h-12 sm:mt-8 w-32 h-8 mt-3 sm:text-xl ">
          <a href="" className=" ">
            view my work
          </a>
          {/* <a href="https://drive.google.com/file/d/1BZcYJlja-osY5M6z2gItiezAz013dh9c/view?usp=sharing" className='w-full' download='mostafa-abas-cv.pdf' target="_blank"> download cv</a> */}
        </button>
      </main>
      <aside className="w-1/2 " data-aos='zoom-in'>
        <Image src={me} alt="my photo " priority />
      </aside>
    </div>
  );
};

export default Landing;
