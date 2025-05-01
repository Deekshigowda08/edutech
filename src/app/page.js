"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import FeaturesSection from "./components/features-section";
import Contact from "./components/contact";
import CoursesSection from "./components/CoursesSection";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = () => {
    setSidebarOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false); 
  };

  return (
    <div className="relative pt-20">
    <div  onClick={handleOutsideClick} className="min-h-screen bg-[url(/images/freepik__expand__34612.png)] md:bg-[url(/images/firstpage.jpeg)] absolute  bg-fixed w-full h-[90%] bg-cover bg-white bg-border ">

<header id="home" className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white z-50">
  <div className="container mx-auto px-4 flex items-center justify-evenly relative h-20">
    {/* Sidebar Toggle Button */}
    <button
      className="text-black z-50"
      onClick={(e) => {
        e.stopPropagation();
        handleSidebarToggle();
      }}
    >
      <Menu className="h-8 w-8" />
    </button>

    {/* Center Logo */}
    <div className="flex w-full mx-24 justify-between md:justify-around items-center">
      <Link href="/" className="flex w-full justify-center items-center">
        <Image
          src="/images/ashiwin_lap_logo.png"
          alt="Bravynex Logo"
          width={200}
          height={200}
        />
      </Link>
    </div>

    {/* Placeholder to balance space */}
    <div className="w-8"></div>
  </div>

  {/* Sidebar when open */}
  {isSidebarOpen && (
    <div
      className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <nav className="flex flex-col p-4">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between my-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-black" onClick={handleSidebarToggle}>
            <IoClose size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        {["home", "courses", "features", "contact"].map((item) => (
          <button
            key={item}
            className="my-2 text-left text-lg font-semibold text-black"
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  )}
</header>


      <div className="md:h-[55%] h-[45%]"></div>
      {/* Hero Section */}
      <section >
      <div >
          <div className="bg-black text-white text-center">
            <h2 className="text-xl px-2 md:text-3xl pt-5 font-bold ">
              &quot;To be a global leader in delivering innovative products and reliable services that empower businesses and enrich lives..&quot;
            </h2>
            <p className="text-sm pt-2">-Vision</p>
          </div>

          {/* Description */}
          <div className="bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg leading-relaxed ">
                <span className="text-4xl font-serif leading-none">W</span>
                elcome to Bravynex Online Courses,Where learning meets convenience! Explore engaging courses tailored to all skill levels and interests—from professional growth to creative hobbies. Our expert-led programs deliver practical knowledge for immediate use. With flexible schedules, an easy-to-use platform, and personalized support, Bravynex makes learning enjoyable and accessible. Unlock your potential and grow with us, all from the comfort of your home!
              </p>
              <p className="text-lg leading-relaxed mb-6">
              Our mission is to create exceptional value for our customers through high-quality products, personalized services, and cutting-edge solutions. We strive to foster long-term partnerships, drive continuous innovation, and uphold integrity in everything we do.
                </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="max-w-screen text-center  text-4xl bg-black font-bold text-white">
            Courses We Offer
          </h1>
        </div>
      </section>
      <CoursesSection id="courses" />
      <FeaturesSection id="features" />
      <Contact id="contact" />
    </div>
    </div>
  );
}