import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "C ++",
      description: "Learn C ++ from scratch",
      image: "/images/21864184_6502423.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 2,
      title: "JAVA",
      description: "Learn JAVA from scratch",
      image: "/images/82452846_9947632.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 3,
      title: "PYTHON",
        description: "Learn PYTHON from scratch",
      image: "/images/6199076_3190343.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 4,
      title: "AI DEVOPS",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/11668829_20945391.jpg?height=300&width=300",
      link: "/pagenotfound",
    },
    {
      id: 5,
      title: "FDP PROGRAM",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/8449769_3911318.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 6,
      title: "DESIGN THINKING",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/5568501_2909849.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 7,
      title: "ENTREPRENEURSHIP",
      description: "Build and launch successful startups and products using design thinking and lean methodologies...",
      image: "/images/12083689_Wavy_Bus-33_Single-06.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
    {
      id: 8,
      title: "STARTUP TRAINING",
      description: "Discover innovative solutions and unlock new possibilities across various domains...",
      image: "/images/7117747_3343150.jpg?height=200&width=200",
      link: "/pagenotfound",
    },
  ];

  return (
    <>
    
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
            src="/images/ashwin_logo.png"
            alt="bravynex Logo"
            width={100}
            height={100}
          />
          <span className="text-2xl font-bold ml-2">BRAVYNEX</span>
        </Link>
      </div>
      {/* Spacer for Header Balance */}
      <div className="w-8"></div>
    </div>
  </header>
    <section className="w-full py-6 bg-black">
        
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-md overflow-hidden p-5 flex flex-col">
              <div className="mb-3 flex justify-center">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={150} // Reduced image width
                  height={150} // Reduced image height
                  className="object-contain"
                />
              </div>

              <h3 className="text-xs font-medium uppercase tracking-wider mb-2">{course.title}</h3>

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