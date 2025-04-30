import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "C ++",
      description: "Learn C ++ from scratch",
      image: "/images/code.png?height=300&width=300",
      link: "https://bravynex.vercel.app/details/Cpp-Programing",
    },
    {
      id: 2,
      title: "JAVA",
      description: "Learn JAVA from scratch",
      image: "/images/java.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Java",
    },
    {
      id: 3,
      title: "PYTHON",
        description: "Learn PYTHON from scratch",
      image: "/images/IMG-20250418-WA0138.jpg?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Python",
    },
    {
      id: 4,
      title: "AI DEVOPS",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/IMG-20250418-WA0144.jpg?height=300&width=300",
      link: "https://bravynex.vercel.app/details/Ai-Devops",
    },
    {
      id: 5,
      title: "FDP PROGRAM",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/pic3.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/FDP-Program",
    },
    {
      id: 6,
      title: "DESIGN THINKING",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/pic2.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Design-Thinking",
    },
    {
      id: 7,
      title: "ENTREPRENEURSHIP",
      description: "Build and launch successful startups and products using design thinking and lean methodologies...",
      image: "/images/pic.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Entrepreneurship",
    },
    {
      id: 8,
      title: "STARTUP TRAINING",
      description: "Discover innovative solutions and unlock new possibilities across various domains...",
      image: "/images/startup.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Startup-Training",
    },
    {
      id: 9,
      title: "TECHNICAL AND NON TECHNICAL",
      description: "welcome you to our training program, where we offer a unique blend of technical and non-technical courses designed to empower individuals with the skills they need to excel in today's competitive job market.",
      image: "/images/pic4.png?height=200&width=200",
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
      <header className="border-b w-full border-gray-200 py-2 bg-white z-50 sticky top-0">
        <div className="container mx-auto  flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex w-full justify-center ">
            <Link href="/" className="flex items-center">
              <Image
                        src="/images/Ashwin_logo.png"
                        alt="Bravynex Logo"
                        width={110}
                        height={110}
                      />
              <span className="text-2xl font-bold ml-2">
                BRAVYNEX ENGINEERING
              </span>
            </Link>
          </div>
          {/* Spacer for Header Balance */}
          <div className="w-8"></div>
        </div>
      </header>
  
      {/* Content Section */}
      <section className="w-full py-6 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-md overflow-hidden p-5 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg sticky md:static"
                style={{ top: `${70 + course.id * 30}px` }}
              >
                <div className="mb-3 flex justify-center">
                  <Image
                    src={course.image || '/placeholder.svg'}
                    alt={course.title}
                    width={150} // Reduced image width
                    height={150} // Reduced image height
                    className="object-contain"
                  />
                </div>
  
                <h3 className="text-xs font-medium uppercase tracking-wider mb-2">
                  {course.title}
                </h3>
  
                <p className="text-xs mb-4 flex-grow">{course.description}</p>
  
                <div className="mt-auto">
                  <Link
                    href={course.link}
                    className="inline-block bg-black text-white text-xs py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}