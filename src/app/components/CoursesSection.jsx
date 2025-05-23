import Link from "next/link";
import Image from "next/image";

export default function CoursesSection({ id }) {
  const courses = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/IMG-20250418-WA0138.jpg",
      link: "details/Web-Development",
    },
    {
      id: 2,
      title: "GRAPHIC DESIGNING",
      description: "Craft visually compelling designs blending creativity with modern digital tools and techniques...",
      image: "/images/random.png",
      link: "details/Graphic-Designing",
    },
    {
      id: 3,
      title: "C PROGRAMMING",
      description: "Create efficient, scalable software using C for critical applications and system-level programming...",
      image: "/images/IMG-20250418-WA0139.jpg",
      link: "details/C-Programming",
    },
    {
      id: 4,
      title: "EMBEDDED TRAINING",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/IMG-20250418-WA0142.jpg",
      link: "details/Embedded-Training",
    },
    {
      id: 5,
      title: "AI DATA ENGINEERING",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/IMG-20250418-WA0144.jpg",
      link: "details/AI-Data-Engineering",
    },
    {
      id: 6,
      title: "EXPLORE MORE",
      description: "Discover innovative solutions and unlock new possibilities across various domains...",
      image: "/images/IMG-20250418-WA0154.jpg",
      link: "/morecourse",
    },
   
  ];

  return (
    
    <section id={id} className="w-full py-6 bg-black">
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
                              className="w-full z-0"
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
  );
}