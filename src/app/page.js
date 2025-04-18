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
    <div  onClick={handleOutsideClick} className="min-h-screen bg-white">

      <header id="home" className="border-b w-full border-gray-200 py-4 bg-white z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            className="text-black"
            onClick={(e) => {
              e.stopPropagation();
              handleSidebarToggle(); // Avoid calling setSidebarOpen directly here
            }}
            
          >
            <Menu className="h-8 w-8" />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ashwin_logo.png"
                alt="Bravynex Logo"
                width={100}
                height={100}
              />
              <span className="text-2xl font-bold ml-2">BRAVYNEX</span>
            </Link>
          </div>
          <div className="w-8"></div>
        </div>
        {isSidebarOpen && (
  <div
    className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg z-40"
    onClick={(e) => e.stopPropagation()}
  >
    <nav className="flex flex-col p-4">
     < div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button
          className="text-black"
          onClick={handleSidebarToggle}
        >
          <IoClose />
        </button>
      </div>
      <button
        className="my-2 mt-8 text-left text-lg font-semibold text-black"
        onClick={() => scrollToSection("home")}
      >
        Home
      </button>
      <button
        className="my-2 text-left text-lg font-semibold text-black"
        onClick={() => scrollToSection("courses")}
      >
        Courses
      </button>
      <button
        className="my-2 text-left text-lg font-semibold text-black"
        onClick={() => scrollToSection("features")}
      >
        Explore
      </button>
      <button
        className="my-2 text-left text-lg font-semibold text-black"
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </button>
    </nav>
  </div>
)}

      </header>

      {/* Hero Section */}
      <section className="pt-2">
        <div className="container min-w-full mx-auto">
          <h2 className="text-center text-lg uppercase tracking-wider">
            Empowering the Innovators of Tomorrow with Knowledge and Experience
          </h2>

          {/* Hero Image */}
          <div className="max-w-4xl mb-1.5 mx-auto">
            <Image
              src="/images/8294.jpg"
              alt="Students in a learning environment with presenter"
              width={500}
              height={400}
              className="w-fit justify-center mx-auto"
            />
          </div>

          {/* Inspirational Quote */}
          <div className="bg-black text-white text-center">
            <h2 className="text-2xl md:text-3xl pt-5 font-bold ">
              &quot;Genius is one percent inspiration and ninety-nine percent perspiration.&quot;
            </h2>
            <p className="text-sm pt-2">-Edison</p>
          </div>

          {/* Description */}
          <div className="bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                <span className="text-4xl font-serif leading-none">W</span>
                elcome to Bravynex Online Courses, where learning meets
                convenience! We offer a wide range of engaging and interactive
                courses designed to suit all skill levels and interests. From
                professional development to creative hobbies, our expert-led
                programs ensure practical, real-world knowledge you can apply
                immediately. With flexible schedules, a user-friendly platform,
                and personalized support, we make learning accessible and
                enjoyable. Whether you&apos;re mastering a new skill or exploring a
                passion, Bravynex is here to guide you every step of the way. Join
                our community of learners today and unlock your potential, all
                from the comfort of your home. Let&apos;s grow together!
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="max-w-screen text-center my-2 text-4xl font-bold text-black">
            Courses We Offer
          </h1>
        </div>
      </section>
      <CoursesSection id="courses" />
      <FeaturesSection id="features" />
      <Contact id="contact" />
    </div>
  );
}