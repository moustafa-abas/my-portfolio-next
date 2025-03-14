import Image from "next/image";
import React from "react";

import me from "../assets/IMG-20240117-WA0090.webp";
import facebook from "../assets/facebook.webp";
import whats from "../assets/whats.webp";
import linkedin from "../assets/linkedin.webp";

const Landing = () => {
  return (
    <div
      className="flex  justify-between  capitalize items-center Container pt-10 sm:pt-0 "
      id="home"
    >
      <main className="w-1/2 " >
        <hgroup>
          <h1 className="gradient sm:text-8xl   text-xl ">
            front-end developer
          </h1>
          <p className="sm:mt-4 mt-3 sm:text-2xl">
            hello, my name is <br />
            <span className="gradient sm:text-4xl text-xl">mostafa abas</span>
          </p>
        </hgroup>
        <div className="flex gap-5 mt-5 ">
          <button>
            <a
              target="_blank"
              href="https://www.facebook.com/mostafa.abas8?mibextid=ZbWKwL"
            >
              <Image loading="lazy"
                src={facebook}
                alt="what's app icon"
                className="w-7 sm:w-9"
              />
            </a>
          </button>
          <button>
            <a target="_blank" href="https://wa.me/+201280163605?">
              <Image loading="lazy" src={whats} alt="what's app icon" className="w-7 sm:w-9" />
            </a>
          </button>
          <button>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mostafa-abas-989585341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <Image loading="lazy"
                src={linkedin}
                alt="what's app icon"
                className="w-7 sm:w-9"
              />
            </a>
          </button>
        </div>
        <button className=" background   rounded-3xl   w-fit  sm:mt-8  h-10 sm:h-12  mt-5 sm:text-xl ">
          <a
            download="mostafa-abas-cv.pdf"
            href="https://drive.google.com/uc?export=download&id=1BZcYJlja-osY5M6z2gItiezAz013dh9c
"
            className=" capitalize p-4   "
            target="_blank"
          >
            download cv
          </a>
        </button>
      </main>
      <aside className="w-1/2 " data-aos="fade-up">
        <Image src={me} alt="my photo " priority />
      </aside>
    </div>
  );
};

export default Landing;
