"use client"
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import {  FaArrowDown } from "react-icons/fa";
import Services from "./components/Services";
import 'aos/dist/aos.css';  // استيراد الأنماط الخاصة بـ AOS
import AOS from 'aos';  // استيراد AOS
import { useEffect } from "react";
export default function Home() {

    useEffect(() => {
      AOS.init({
        duration: 1000,  // مدة الأنيميشن (بالملي ثانية)
        easing: 'ease',  // نوع التسهيل
        once: false,      // جعل الأنيميشن يحدث مرة واحدة فقط عند التمرير
      });
    }, []);
  return (

 <main className="mx-3 sm:mx-10 lg:mx-24 sm:pt-5 " >
<Nav/>
<Landing/>
<Services/>
<FaArrowDown className="animate-bounce sticky bottom-7 mx-auto  "/>

 </main>
  );
}
