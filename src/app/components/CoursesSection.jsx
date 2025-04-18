import Link from "next/link";
import Image from "next/image";

export default function CoursesSection({ id }) {
  const courses = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "Build responsive, dynamic websites using the latest front-end and back-end technologies...",
      image: "/images/IMG-20250418-WA0138.jpg?height=200&width=200",
      link: "/pagenotupdated",
    },
    {
      id: 2,
      title: "GRAPHIC DESIGNING",
      description: "Craft visually compelling designs blending creativity with modern digital tools and techniques...",
      image: "/images/random.png?height=200&width=200",
      link: "/pagenotupdated",
    },
    {
      id: 3,
      title: "C PROGRAMMING",
      description: "Create efficient, scalable software using C for critical applications and system-level programming...",
      image: "/images/IMG-20250418-WA0139.jpg?height=200&width=200",
      link: "/pagenotupdated",
    },
    {
      id: 4,
      title: "EMBEDDED TRAINING",
      description: "Develop robust real-time systems and firmware optimized for embedded hardware platforms...",
      image: "/images/IMG-20250418-WA0142.jpg?height=300&width=300",
      link: "/pagenotupdated",
    },
    {
      id: 5,
      title: "AI DATA ENGINEERING",
      description: "Design intelligent data pipelines and solutions leveraging cutting-edge AI and analytics technologies....",
      image: "/images/IMG-20250418-WA0144.jpg?height=200&width=200",
      link: "/pagenotupdated",
    },
    {
      id: 6,
      title: "EXPLORE MORE",
      description: "Discover innovative solutions and unlock new possibilities across various domains...",
      image: "/images/IMG-20250418-WA0154.jpg?height=200&width=200",
      link: "/morecourse",
    },
  ];

  return (
    
    <section id={id} className="w-full py-6 bg-black">
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
  );
}