import React from "react";
import { FaCode } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";
import { CgSupport } from "react-icons/cg";
import Heading from "./Heading";

const Services = () => {
const items = [
{
    icon: <FaCode color="#3e7da7" />,
    title: "clean code",
    content:
    "writing code that is well-structured, readable, and maintainable. it involves following coding best practices.",
    position: "justify-self-start",
    fade: "fade-right",
},
{
    icon: <IoIosLaptop color="#3e7da7" />,
    title: "user interface",
    content:
    "creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.",
    position: "justify-self-end",
    fade: "fade-down",
},
{
    icon: <IoBagCheck color="#3e7da7" />,
    title: "user experience",
    content:
    "understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable to use.",
    position: "justify-self-start",
    fade: "fade-right",
},
{
    icon: <CgSupport color="#3e7da7" />,
    title: "fast support",
    content:
    "addressing and resolving user-reported issues or inquiries related to website.",
    position: "justify-self-end",
    fade: "fade-down",
},
];
return (
<main className=" mt-10 Container " id="services">
    
    <Heading name='my services'/>

    {items?.map((item) => (
    <div
        key={item.title}
        className={`sm:w-1/2 w-full border-gray-700 border rounded-xl p-4 my-14 flex ${item.position}`}
        data-aos={item.fade}
    >
        <hgroup>
        <h1 className="flex items-center gap-4 text-3xl capitalize">
            {item.icon}
            <span className="gradient font-bold">{item.title}</span>
        </h1>
        <p className="mt-4 tracking-wider leading-8 first-letter:capitalize">{item.content}</p>
        </hgroup>
    </div>
    ))}
</main>
);
};

export default Services;
