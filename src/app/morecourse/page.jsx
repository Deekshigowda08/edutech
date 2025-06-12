import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "C ++",
      description: "Learn C ++ from scratch",
      image: "/images/code.png",
      link: "https://bravynex.vercel.app/details/Cpp-Programing",
    },
    {
      id: 2,
      title: "JAVA",
      description: "Learn JAVA from scratch",
      image: "/images/java.png",
      link: "https://bravynex.vercel.app/details/Java",
    },
    {
      id: 3,
      title: "PYTHON",
        description: "Learn PYTHON from scratch",
      image: "/images/IMG-20250418-WA0138.jpg",
      link: "https://bravynex.vercel.app/details/Python",
    },
    {
      id: 4,
      title: "AI DEVOPS",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/IMG-20250418-WA0144.jpg",
      link: "https://bravynex.vercel.app/details/Ai-Devops",
    },
    {
      id: 5,
      title: "FDP PROGRAM",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/pic3.png",
      link: "https://bravynex.vercel.app/details/FDP-Program",
    },
    {
      id: 6,
      title: "DESIGN THINKING",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/pic2.png",
      link: "https://bravynex.vercel.app/details/Design-Thinking",
    },
    {
      id: 7,
      title: "ENTREPRENEURSHIP",
      description: "Build and launch successful startups and products using design thinking and lean methodologies...",
      image: "/images/pic.png",
      link: "https://bravynex.vercel.app/details/Entrepreneurship",
    },
    {
      id: 8,
      title: "STARTUP TRAINING",
      description: "Discover innovative solutions and unlock new possibilities across various domains...",
      image: "/images/startup.png",
      link: "https://bravynex.vercel.app/details/Startup-Training",
    },
    {
      id: 9,
      title: "TECHNICAL AND NON TECHNICAL",
      description: "Welcome to our training program! We offer a blend of technical and non-technical courses to equip you with skills to thrive in today's competitive job.",
      image: "/images/pic4.png",
      link: "https://bravynex.vercel.app/details/Technical-and-Non-TechnicalSkills",
    },
    {
      id: 10,
      title: "SOFT SKILLS",
      image: "/images/realistic Indian photo of training of communication skills.png",
      description: "A course dedicated to building essential soft skills for professional and personal success.",
      link: "https://bravynex.vercel.app/details/Soft-Skills",
    }
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 border-b border-gray-200  bg-white z-50 shadow-md">
      <div className="container w-full  flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex w-full py-2 md-py-1 justify-evenly items-center">
            <Link href="/" className="flex w-full justify-around md:pr-30 items-center">
              <Image
                        src="/images/ashiwin_lap_logo.png"
                        alt="Bravynex Logo"
                        width={190}
                        height={190}
                      />
              <span className="md:text-2xl text-lg font-bold ml-2">
                EXPLORE MORE
              </span>
            </Link>
            
          </div>
          {/* Spacer for Header Balance */}
          <div className="w-8"></div>
        </div>
      </header>
  
      {/* Content Section */}
      <section className="w-full pt-28 pb-6 bg-black">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
            key={course.id}
            className={`bg-white rounded-md overflow-hidden p-0 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg sticky md:static`}
            style={{ top: `${100 + course.id * 30}px`, height: '300px' }} // Adjust height if needed
          >
            <div className="h-1/2 w-full">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="w-full  z-0"
                style={{ opacity: 0.9,
                filter: "blur(1px) brightness(0.5)"  // Adjust brightness and blur as needed
                 }} 
              />
            </div>
          
            <div className="p-5 flex flex-col h-1/2 z-50">
              <h3 className="text-xs font-medium uppercase tracking-wider mb-2 text-white">{course.title}</h3>
              <p className="text-xs mb-4 flex-grow text-white">{course.description}</p>
              <div className="mt-auto">
                <Link
                  href={course.link}
                  className="inline-block bg-black text-white text-xs py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </div>
          
          ))}
        </div>
        </div>
      </section>
    </>
  );
}