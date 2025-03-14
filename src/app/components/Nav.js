import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const services = document.getElementById("services")?.offsetTop;
    const projects = document.getElementById("projects")?.offsetTop;
    const skills = document.getElementById("skills")?.offsetTop;
    window.onscroll = function () {
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
  }, [window.scrollY]);

  var sections = ["home", "services", "skills", "projects"];

  return (
    <nav className="  sticky z-10 top-0 Container bg-background ">
      <div className="mx-auto  px-2 sm:px-6 lg:px-8 sm:border border-gray-700  rounded-2xl  ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="  p-2 "
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section}`}
                    className={`rounded-lg  px-3 py-1  capitalize ${
                      currentSection == section ? "gradient" : "background"
                    } `}
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="  rounded-full  bg-gray-800 p-2 text-gray-400 hover:text-white"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <MdLightMode size={22} />
              ) : (
                <CiDark size={22} />
              )}
            </button>
          </div>
        </div>
      </div>
      {openMenu ? (
        <div className="sm:hidden " id="mobile-menu">
          <div className="space-y- px-2 pt-2 pb-3 ">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section}`}
                className={`block rounded-md bg-gray-90 ${
                  currentSection == section ? "background" : "gradient"
                }  px-3 py-2 text-base font-medium text-white`}
                onClick={() => setOpenMenu(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
