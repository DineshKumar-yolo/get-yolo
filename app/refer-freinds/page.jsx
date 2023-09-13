import Footer from '@/components/modules/footer/Footer';
import MobileNavbar from '@/components/modules/navbar/MobileNavbar';
import Navbar from '@/components/modules/navbar/Navbar';
import Navtop from '@/components/modules/navtop/Navtop'
import Hero from "@/components/Refer&Earn/Hero"
import Works from "@/components/Refer&Earn/Works"
import ReferFreinds from "@/components/Refer&Earn/ReferFreinds"
import React from 'react'
import Faq from '@/components/modules/Faq';
import AboutYoloApp from '@/components/modules/AboutYoloApp';

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Works />
      <ReferFreinds />
      <Faq />
      <AboutYoloApp />
    </div>
  );
}

export default page
