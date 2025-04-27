import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "C ++",
      description: "Learn C ++ from scratch",
      image: "/images/file_00000000cbc061f8a7a7441d8a620e7a_conversation_id=68063876-dbc8-8006-85e2-545d5e982bc8&message_id=fb9bc7eb-6d3c-47ac-b394-9253c42a0491.png?height=300&width=300",
      link: "https://bravynex.vercel.app/details/C++",
    },
    {
      id: 2,
      title: "JAVA",
      description: "Learn JAVA from scratch",
      image: "/images/file_0000000008e4622fbf3706bcaf556b16_conversation_id=680644b7-f90c-8006-bb24-d26b133d85ac&message_id=a81eff84-de93-4fce-9f30-55ea6dfdf6dc.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Java",
    },
    {
      id: 3,
      title: "PYTHON",
        description: "Learn PYTHON from scratch",
      image: "/images/6199076_3190343.jpg?height=200&width=200",
      link: "https://bravynex.vercel.app/details/Python",
    },
    {
      id: 4,
      title: "AI DEVOPS",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/11668829_20945391.jpg?height=300&width=300",
      link: "https://bravynex.vercel.app/details/AiDevops",
    },
    {
      id: 5,
      title: "FDP PROGRAM",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/file_00000000158c622fa2a6a8fc591061e5_conversation_id=680644b7-f90c-8006-bb24-d26b133d85ac&message_id=bf72fc03-bb7d-4ed0-bba4-248b0615412f.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/FDPProgram",
    },
    {
      id: 6,
      title: "DESIGN THINKING",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/pic2.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/DesignThinking",
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
      image: "/images/file_00000000db7c622fa751207e560189b8_conversation_id=680644b7-f90c-8006-bb24-d26b133d85ac&message_id=a439cad4-6c9a-4e8e-8f7d-017d116e61b3.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/StartupTraining",
    },
    {
      id: 9,
      title: "TECHNICAL AND NON TECHNICAL",
      description: "welcome you to our training program, where we offer a unique blend of technical and non-technical courses designed to empower individuals with the skills they need to excel in today's competitive job market.",
      image: "/images/file_00000000469c61f8920a65222f5565e9_conversation_id=68063876-dbc8-8006-85e2-545d5e982bc8&message_id=5be18137-c0eb-4f74-871a-8761b81d8ab5.png?height=200&width=200",
      link: "https://bravynex.vercel.app/details/TechnicalandNon-TechnicalSkills",
    },
    {
      id: 10,
      title: "SOFT SKILLS",
      image: "/images/realistic Indian photo of training of communication skills.png",
      description: "A course dedicated to building essential soft skills for professional and personal success.",
      link: "https://bravynex.vercel.app/details/SoftSkills",
    }
  ];

  return (
    <>
    
    <header className="border-b w-full border-gray-200 py-8 bg-white z-50">
    <div className="container mx-auto px-4 flex items-center justify-between">
      
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