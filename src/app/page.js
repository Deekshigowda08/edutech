import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import FeaturesSection from "./components/features-section";
import Contact from "./components/contact";
import CoursesSection from "./components/CoursesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b w-full border-gray-200 py-4 bg-white z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Menu Button */}
          <button className="text-black">
            <Menu className="h-8 w-8" />
          </button>
          {/* Logo and Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ashwin_logo.jpg"
                alt="EduTech Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold ml-2">EduTech</span>
            </Link>
          </div>
          {/* Spacer for Header Balance */}
          <div className="w-8"></div>
        </div>
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
                elcome to EduTech Online Courses, where learning meets
                convenience! We offer a wide range of engaging and interactive
                courses designed to suit all skill levels and interests. From
                professional development to creative hobbies, our expert-led
                programs ensure practical, real-world knowledge you can apply
                immediately. With flexible schedules, a user-friendly platform,
                and personalized support, we make learning accessible and
                enjoyable. Whether you&apos;re mastering a new skill or exploring a
                passion, EduTech is here to guide you every step of the way. Join
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
      <CoursesSection />
      <FeaturesSection />
      <Contact />
    </div>
  );
}