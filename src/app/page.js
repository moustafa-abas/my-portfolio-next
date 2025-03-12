"use client"
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import {  FaArrowDown } from "react-icons/fa";

export default function Home() {
  // console.log(window.innerHeight)
  // console.log(document.documentElement.scrollHeight)
  return (

 <main className="mx-3 sm:mx-10 lg:mx-24 " >
<Nav/>
<Landing/>
<FaArrowDown className="animate-bounce sticky bottom-7 mx-auto  "/>

 </main>
  );
}
