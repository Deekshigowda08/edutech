import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const coursesData = [
  
  {
    "id": 1,
    "title": "Web-Development",
    "description": "A comprehensive course to equip you with the skills required to build modern, responsive, and dynamic websites.",
    "imageUrl": "/images/IMG-20250418-WA0138.jpg",
    "topics": [
      "Understand web fundamentals",
      "Learn HTML5 basics",
      "Master CSS3 styling",
      "Add interactivity with Java",
      "Front-end frameworks: React, Angular",
      "Backend technologies: Node.js, Python",
      "Databases: MongoDB, MySQL",
      "Deploy apps on cloud",
      "Capstone projects: portfolio websites",
      "Explore advanced web topics"
    ]

  },
  {
    "id": 2,
    "title": "Graphic-Designing",
    "description": "A creative course covering essential graphic design principles, tools, and real-world applications.",
    "imageUrl": "/images/random.png",
    "topics": [
      "Understand design principles",
      "Learn Adobe Photoshop basics",
      "Master Illustrator for vector graphics",
      "Create layouts with InDesign",
      "Explore typography and color theory",
      "Design logos and branding materials",
      "Develop web and mobile UI/UX",
      "Create marketing materials: posters, flyers",
      "Build a portfolio of design projects"
    ]

  },
  {
    "id": 3,
    "title": "C-Programming",
    "description": "A technical course introducing the foundations of programming with C language.",
    "imageUrl": "/images/IMG-20250418-WA0139.jpg",
   "topics": [
      "Intro to C programming",
      "Syntax, data types, operators",
      "Master control structures",
      "Work with arrays, pointers",
      "Functions and recursion",
      "File handling concepts",
      "Mini-projects: calculators, games"
    ]


  },
  {
    "id": 4,
    "title": "Embedded-Training",
    "description": "A specialized course focused on embedded systems and real-time programming.",
    "imageUrl": "/images/IMG-20250418-WA0142.jpg",
    "topics":[
      "Intro to embedded systems",
      "Program microcontrollers",
      "Develop firmware debugging",
      "Learn real-time operating systems",
      "Build projects: robotics, IoT",
      "Emerging trends: edge computing"
    ]
  },
  {
    "id": 5,
    "title": "AI-Data-Engineering",
    "description": "An advanced course on data engineering techniques for AI applications.",
    "imageUrl": "/images/IMG-20250418-WA0144.jpg",
    "topics": [
      "Data engineering for AI",
      "Preprocess data effectively",
      "Build automated pipelines",
      "Integrate ML workflows",
      "Real-world projects: AI pipelines"
    ]

  },
  {
    "id": 6,
    "title": "Cpp-Programing",
    "imageUrl": "/images/code.png",
    "description": "A foundational course focusing on essential C++ programming concepts and application development.",
    "topics": [
      "C++ programming fundamentals",
      "Object-oriented programming concepts",
      "Control structures: loops, switch",
      "Functions: parameterized, default",
      "Pointers and memory management",
      "File handling in C++"
    ]

  },
      {
        "id": 7,
        "title": "Java",
        "imageUrl": "/images/java.png",
        "description": "An introductory course covering essential Java programming concepts and web development.",
        "topics": [
      "Setup Java environment",
      "Fundamental programming concepts",
      "Control structures: loops, switch",
      "Functions: anonymous, callbacks",
      "DOM manipulation in Java",
      "Asynchronous programming concepts",
      "Java frameworks: React, Vue.js"
    ]
  },
      {
        "id": 8,
        "title": "Python",
        "imageUrl": "/images/IMG-20250418-WA0138.jpg",
        "description": "An introductory course covering foundational Python programming concepts and practical applications.",
        "topics": [
      "Install Python, setup tools",
      "Write first program",
      "Learn syntax, structure",
      "Explore data structures",
      "Master control structures",
      "Functions: lambdas, recursion",
      "Object-oriented programming (OOP)",
      "Python libraries: Pandas, NumPy"
    ]

      },
      {
        "id": 9,
        "title": "Ai-Devops",
        "imageUrl": "/images/IMG-20250418-WA0144.jpg",
        "description": "A course detailing the integration of AI techniques into DevOps workflows for enhanced automation and efficiency.",
        "topics": [
      "Intro to DevOps principles",
      "AI for automation",
      "Integrate ML models",
      "Tools: Kubernetes, Docker",
      "Error prediction models",
      "AI-powered deployment",
      "Real-world projects"
    ]

      },
      {
        "id": 10,
        "title": "FDP-Program",
        "imageUrl": "/images/pic3.png",
        "description": "A Faculty Development Program aimed at enhancing teaching techniques and professional growth.",
        "topics": [
      "Modern pedagogical approaches",
      "Advanced classroom management",
      "Digital tools for teaching",
      "Fair student assessment",
      "Leadership and networking",
      "Lifelong professional development"
    ]

      },
      {
        "id": 11,
        "title": "Design-Thinking",
        "imageUrl": "/images/pic2.png",
        "description": "A course focused on fostering innovation and problem-solving using the Design Thinking methodology.",
        "topics": [
      "Five stages: Empathize, Define",
      "Identify user needs",
      "Brainstorm creative ideas",
      "Build and test prototypes",
      "Analyze user feedback",
      "Real-world case studies"
    ]

      },
      {
        "id": 12,
        "title": "Entrepreneurship",
        "imageUrl": "/images/pic.png",
        "description": "A course empowering individuals with the knowledge and skills to start and run successful businesses.",
        "topics": [
          "Intro to entrepreneurship",
          "Develop business plans",
          "Secure funding options",
          "Build leadership skills",
          "Marketing strategies",
          "Workshops and simulations"
        ]
    
      },
      {
        "id": 13,
        "title": "Startup-Training",
        "imageUrl":"/images/startup.png",
        "description": "A specialized course for aspiring entrepreneurs focusing on the essentials of launching a startup.",
        "topics": [
          "Ideation and market research",
          "Legal, regulatory knowledge",
          "Pitching fundamentals",
          "Go-to-market strategies",
          "Scaling and optimization",
          "Create MVPs and proposals"
        ]
    
      },
          {
            "id": 14,
            "title": "Technical-and-Non-TechnicalSkills",
            "imageUrl": "/images/pic4.png",
            "description": "A comprehensive course designed to enhance both technical and interpersonal skills for well-rounded professional development and career growth.",
            "topics": [
      "Balance technical, soft skills",
      "Expertise in coding, data tools",
      "Enhance communication, teamwork",
      "Bridge diverse team gaps",
      "Leadership, project management",
      "Emotional intelligence (EI)",
      "Conflict resolution techniques",
      "Critical thinking frameworks",
      "Stress, time management skills",
      "Capstone projects: real-world tasks"
    ]

          },
          {
            "id": 15,
            "title": "Soft-Skills",
            "imageUrl": "/images/realistic Indian photo of training of communication skills.png",
            "description": "A course dedicated to building essential soft skills for professional and personal success.",
            "topics": [
      "Foster communication, relationships",
      "Verbal, written techniques",
      "Develop interpersonal skills",
      "Build resilience, adaptability",
      "Manage conflict constructively",
      "Time management strategies",
      "Well-rounded skill toolkit"
    ]

          }
        
    ];
    
    export default async function CourseDetailsPage({ params }) {
      const { name } = await params;
    
      const selectedCourse = coursesData.find((course) => course.title === name);
    
      return (
        <>
          {/* Fixed Header Section */}
          <header className="fixed top-0 left-0 right-0 border-b border-gray-200  bg-white z-50 shadow-md">
      <div className="container w-full  flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex w-full py-1 justify-evenly items-center">
            <Link href="/" className="flex w-full justify-around md:pr-56 items-center">
              <Image
                        src="/images/ashiwin_lap_logo.png"
                        alt="Bravynex Logo"
                        width={170}
                        height={170}
                      />
              <span className="text-2xl font-bold ml-2">
               COURSE DETAILS
              </span>
            </Link>
            
          </div>
          {/* Spacer for Header Balance */}
          <div className="w-8"></div>
        </div>
      </header>
    
          {/* Split Layout Section */}
          <div className="pt-24 h-fit bg-white lg:h-screen lg:overflow-hidden overflow-auto">
  {selectedCourse ? (
    <div className="flex flex-col-reverse lg:flex-row">
      {/* Left Section: Description & Topics */}
      <div className="lg:w-2/3 bg-white text-black pt-20">
        <h1 className="text-3xl font-bold mb-4 px-6 max-w-3xl">
          A creative course covering essential {selectedCourse.title.toLowerCase().replace("-"," ")} principles, tools, and real-world applications
        </h1>

        <div className="mt-8 bg-black w-screen px-14 pt-2 pb-10 h-[100%] text-white">
          <h2 className="text-2xl font-bold mb-2">Topics Covered:</h2>
          <ul className="list-disc list-inside space-y-1 text-md">
            {selectedCourse.topics.map((topic, index) => (
              <li key={index} className="italic">{topic}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section: Card */}
      <div className="md:bg-gray-100 lg:bg-gray-100 bg-gray-300 h-[40%] rounded-2xl shadow-3xl p-6 w-full max-w-xs text-center mt-10 mx-auto lg:mx-0">
        <Image
          src={selectedCourse.imageUrl}
          alt={selectedCourse.title}
          width={300}
          height={200}
          className="mx-auto mb-4 rounded-md"
        />
        <h3 className="text-lg font-bold text-black mb-4">{selectedCourse.title.replace("-"," ")}</h3>
        <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Contact
        </button>
      </div>
    </div>
  ) : (
    <p className="text-lg text-center mt-10 text-black">No course selected.</p>
  )}
</div>
        </>
      );
    }
    
    
    