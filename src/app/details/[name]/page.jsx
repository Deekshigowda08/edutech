import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const coursesData = [
  
  {
    "id": 1,
    "title": "WebDevelopment",
    "description": "A comprehensive course to equip you with the skills required to build modern, responsive, and dynamic websites.",
    "imageUrl": "/images/IMG-20250418-WA0138.jpg?height=200&width=200",
    "topics": [
      "Start by understanding web fundamentals, including how the internet works, client-server architecture, HTTP/HTTPS protocols, and the role of browsers.",
      "Learn HTML5 for structuring web content effectively, including semantic tags, forms, multimedia integration, and accessibility principles for inclusive design.",
      "Master CSS3 to create visually appealing websites, focusing on layouts (Grid, Flexbox), responsive design, animations, and advanced styling techniques.",
      "Dive into Java to add interactivity, covering DOM manipulation, event handling, and API integration for dynamic content.",
      "Explore front-end frameworks like React.js and Angular to build scalable and modern web applications with reusable components.",
      "Understand backend technologies like Node.js and Python (Django/Flask) to handle server-side logic and create RESTful APIs.",
      "Work with databases like MongoDB (NoSQL) and MySQL (relational) for data storage, retrieval, and management.",
      "Get hands-on experience deploying web applications on cloud platforms such as AWS, Heroku, or Azure, and utilize Git/GitHub for version control and collaboration.",
      "Work on capstone projects such as portfolio websites, e-commerce platforms, and blog systems to consolidate your skills.",
      "Explore advanced topics like Progressive Web Apps (PWAs), SEO optimization, security best practices, and web performance enhancements."
    ]
  },
  {
    "id": 2,
    "title": "GraphicDesigning",
    "description": "A creative course covering essential graphic design principles, tools, and real-world applications.",
    "imageUrl": "/images/random.png?height=200&width=200",
    "topics": [
      "Learn the foundational principles of graphic design, including color theory, typography, grid systems, and layout composition for impactful visuals.",
      "Gain proficiency in industry-standard tools such as Adobe Photoshop, Illustrator, and Canva through hands-on projects.",
      "Create engaging designs for social media graphics, advertisements, banners, brochures, posters, and print media.",
      "Understand visual storytelling techniques to effectively communicate ideas and create compelling narratives through design.",
      "Explore branding and identity design, focusing on creating logos, packaging, and marketing materials that align with a brand’s vision.",
      "Learn to enhance user experiences (UX) by applying design principles strategically in websites, apps, and interactive media.",
      "Master the art of presenting your work professionally, including preparing portfolios and mockups to showcase your skills."
    ]
  },
  {
    "id": 3,
    "title": "CProgramming",
    "description": "A technical course introducing the foundations of programming with C language.",
    "imageUrl": "/images/IMG-20250418-WA0139.jpg?height=200&width=200",
    "topics": [
      "Begin with an introduction to C programming, setting up the environment, and writing your first basic program.",
      "Learn the syntax and fundamentals, including data types, variables, constants, and operators, to build a strong coding foundation.",
      "Master control structures like conditional statements (if-else) and loops (for, while, do-while) to control program flow dynamically.",
      "Delve into arrays and pointers, learning their powerful applications in memory management and data manipulation.",
      "Explore functions for modular programming, including recursion for solving complex problems effectively.",
      "Understand file handling to read from and write to external files, enabling data persistence in programs.",
      "Work on practical exercises and mini-projects to apply the concepts, such as creating calculators or games."
    ]
  },
  {
    "id": 4,
    "title": "EmbeddedTraining",
    "description": "A specialized course focused on embedded systems and real-time programming.",
    "imageUrl": "/images/IMG-20250418-WA0142.jpg?height=300&width=300",
    "topics": [
      "Get introduced to embedded systems, their applications, and their critical role in modern devices and technologies.",
      "Learn to program microcontrollers such as Arduino or STM32 and interface them with sensors and actuators for real-world applications.",
      "Develop firmware and gain insights into debugging techniques to optimize performance and reliability.",
      "Understand real-time operating systems (RTOS) and their role in executing time-critical tasks in embedded environments.",
      "Build projects such as robotics, home automation systems, and IoT devices to apply your learning practically.",
      "Explore emerging trends in embedded systems, including edge computing and low-power optimization."
    ]
  },
  {
    "id": 5,
    "title": "AIDataEngineering",
    "description": "An advanced course on data engineering techniques for AI applications.",
    "imageUrl": "/images/IMG-20250418-WA0144.jpg?height=200&width=200",
    "topics": [
      "Understand the critical role of data engineering in enabling AI workflows and managing large-scale datasets effectively.",
      "Learn to preprocess data through techniques like cleaning, transformation, and feature selection, ensuring high-quality inputs for AI models.",
      "Build and automate robust data pipelines using tools like Apache Spark, Kafka, and cloud services such as AWS or Google Cloud.",
      "Integrate machine learning workflows by combining data engineering tools with popular frameworks such as TensorFlow and PyTorch.",
      "Work on real-world projects that involve data wrangling, AI pipeline design, and scalable data management solutions."
    ]
  },
  {
    "id": 6,
    "title": "C++",
    "imageUrl": "/images/file_00000000c4a4622f8a7a7441d8a620e7a_conversation_id=68063876-dbc8-8006-85e2-545d5e982bc8&message_id=fb9bc7eb-6d3c-47ac-b394-9253c42a0491.png?height=300&width=300",
    "description": "A foundational course focusing on essential C++ programming concepts and application development.",
    "topics": [
      "Start by setting up your development environment with tools like MSYS2 and Visual Studio Code for seamless C++ programming.",
      "Learn the syntax, data types, and control structures (if-else, loops) to build logically sound programs.",
      "Master advanced concepts such as object-oriented programming (OOP) with classes, inheritance, encapsulation, and polymorphism.",
      "Explore templates, the Standard Template Library (STL), and exception handling for creating efficient and flexible applications.",
      "Engage in hands-on projects such as creating basic games, inventory systems, or file parsers."
    ]
  },
      {
        "id": 7,
        "title": "Java",
        "imageUrl": "/images/file_00000000c4a4622f8a7a7441d8a620e7a_conversation_id=68063876-dbc8-8006-85e2-545d5e982bc8&message_id=fb9bc7eb-6d3c-47ac-b394-9253c42a0491.png?height=300&width=300",
        "description": "An introductory course covering essential Java programming concepts and web development.",
        "topics": [
          "Java serves as the backbone for creating interactive and dynamic web experiences. The course begins with setting up the development environment, including tools such as Node.js and VS Code, enabling participants to write their first Java program.",
          "Fundamental programming concepts such as data types, variables, and operators are explored to help learners manage data effectively. Emphasis is placed on handling user inputs and outputs efficiently.",
          "Control structures, including conditional statements, loops, and switch cases, are introduced to provide participants with the tools needed to create logic-driven programs.",
          "Functions are covered in-depth, including concepts like anonymous functions, arrow functions, and callback functions. Participants learn to structure code for reusability and optimization.",
          "The course introduces Java's Document Object Model (DOM) manipulation capabilities, enabling learners to dynamically update and modify web content.",
          "Asynchronous programming concepts, including promises, async/await, and APIs, are covered, preparing participants to handle real-world scenarios in web development.",
          "Participants will also be introduced to modern Java frameworks like React or Vue.js to build interactive single-page applications (SPAs)."
        ]
      },
      {
        "id": 8,
        "title": "Python",
        "imageUrl": "/images/6199076_3190343.jpg?height=200&width=200",
        "description": "An introductory course covering foundational Python programming concepts and practical applications.",
        "topics": [
          "Python is one of the most versatile and user-friendly programming languages, making it ideal for beginners and professionals alike. The course starts with installing Python and setting up tools like Jupyter Notebook or PyCharm.",
          "Participants will write their first Python program, learning its syntax, indentation rules, and basic structure, which serve as the building blocks of programming.",
          "The course covers Python's powerful data structures, including lists, tuples, dictionaries, and sets, providing learners with tools to organize and manipulate data.",
          "Control structures like conditional statements (if-else) and looping constructs (for, while) are studied in detail to enable participants to write dynamic programs.",
          "Functions are introduced, covering parameterized functions, lambda expressions, and recursion. Learners understand how to break down problems into manageable components.",
          "Object-oriented programming (OOP) principles, including classes, objects, inheritance, and polymorphism, are covered to prepare learners for advanced development.",
          "Participants are introduced to Python libraries like Pandas, NumPy, and Matplotlib for data manipulation, analysis, and visualization."
        ]
      },
      {
        "id": 9,
        "title": "AiDevOps",
        "imageUrl": "/images/11668829_20945391.jpg?height=300&width=300",
        "description": "A course detailing the integration of AI techniques into DevOps workflows for enhanced automation and efficiency.",
        "topics": [
          "The course begins with an introduction to DevOps principles, focusing on practices like continuous integration, continuous delivery, and infrastructure as code.",
          "AI's role in DevOps is explored, including automation for software testing, deployment, and performance monitoring.",
          "Participants will learn to integrate machine learning models into DevOps pipelines for tasks such as predictive analytics, anomaly detection, and resource optimization.",
          "Practical tools like Kubernetes, Docker, Jenkins, and TensorFlow are introduced, showcasing how AI can be leveraged within containerized environments.",
          "Error prediction models and self-healing systems are discussed, providing insights into using AI for real-time issue resolution.",
          "The course covers AI-powered configuration management and deployment strategies to streamline operations and improve efficiency.",
          "Participants engage in real-world projects to automate DevOps workflows with AI, enhancing their practical understanding of this cutting-edge integration."
        ]
      },
      {
        "id": 10,
        "title": "FDPProgram",
        "imageUrl": "/images/file_00000000158c622fa2a6a8fc591061e5_conversation_id=680644b7-f90c-8006-bb24-d26b133d85ac&message_id=bf72fc03-bb7d-4ed0-bba4-248b0615412f.png?height=200&width=200",
        "description": "A Faculty Development Program aimed at enhancing teaching techniques and professional growth.",
        "topics": [
          "The program starts with modern pedagogical approaches, helping educators create engaging and effective learning experiences.",
          "Advanced classroom management strategies are introduced, enabling educators to foster positive and productive environments.",
          "Digital tools such as Learning Management Systems (LMS), virtual classrooms, and interactive apps are explored to enhance teaching efficacy.",
          "Techniques for fair and comprehensive student assessment are covered, including the use of rubrics, formative assessments, and technology-driven evaluation tools.",
          "Leadership, networking, and collaboration skills are emphasized, preparing educators for roles in academic administration and research initiatives.",
          "Workshops focus on lifelong learning and professional development strategies, helping participants keep pace with emerging trends in education."
        ]
      },
      {
        "id": 11,
        "title": "DesignThinking",
        "imageUrl": "/images/pic2.png?height=200&width=200",
        "description": "A course focused on fostering innovation and problem-solving using the Design Thinking methodology.",
        "topics": [
          "The course begins by introducing the five core stages of Design Thinking: Empathize, Define, Ideate, Prototype, and Test, ensuring a structured framework.",
          "Participants learn to identify user needs through research, interviews, and observation, cultivating empathy for stakeholders.",
          "Creative techniques for brainstorming and idea generation are explored, helping participants unleash their creativity to develop innovative solutions.",
          "The course emphasizes prototyping, enabling participants to quickly transform ideas into tangible models for testing and iteration.",
          "Techniques for gathering and analyzing user feedback are covered, ensuring solutions are refined to meet user needs effectively.",
          "Real-world case studies are incorporated to demonstrate how Design Thinking drives innovation across industries such as technology, healthcare, and education."
        ]
      },
      {
        "id": 12,
        "title": "Entrepreneurship",
        "imageUrl": "/images/pic.png?height=200&width=200",
        "description": "A course empowering individuals with the knowledge and skills to start and run successful businesses.",
        "topics": [
          "The course starts with an introduction to entrepreneurship, focusing on core principles like risk management, innovation, and business ethics.",
          "Participants learn to develop detailed business plans that include market analysis, financial forecasts, and operational strategies.",
          "The course provides insights into funding options, including bootstrapping, venture capital, and crowdfunding, equipping participants to secure resources effectively.",
          "Participants develop leadership skills, focusing on decision-making, conflict resolution, and team management to navigate entrepreneurial challenges.",
          "Marketing strategies such as brand positioning, digital marketing, and customer relationship management (CRM) are explored to build visibility and trust.",
          "Workshops and role-playing activities simulate entrepreneurial scenarios, helping participants apply theoretical knowledge to practical situations."
        ]
      },
      {
        "id": 13,
        "title": "StartupTraining",
        "imageUrl":"/images/file_00000000db7c622fa751207e560189b8_conversation_id=680644b7-f90c-8006-bb24-d26b133d85ac&message_id=a439cad4-6c9a-4e8e-8f7d-017d116e61b3.png?height=200&width=200",
        "description": "A specialized course for aspiring entrepreneurs focusing on the essentials of launching a startup.",
        "topics": [
          "The course begins with ideation, guiding participants through validating ideas using market research and feasibility analysis.",
          "Participants gain an understanding of legal and regulatory requirements, including business registration, intellectual property protection, and compliance.",
          "The course dives into the fundamentals of pitching to investors, with practical tips for crafting compelling presentations and negotiating terms.",
          "Participants learn to design go-to-market strategies, focusing on product launches, initial sales, and customer feedback collection.",
          "Scaling strategies are introduced, covering team expansion, operational optimization, and long-term growth planning.",
          "Participants engage in hands-on activities like pitching mock ideas, drafting business proposals, and creating MVPs (Minimum Viable Products)."
        ]
      },
          {
            "id": 14,
            "title": "TechnicalandNon-TechnicalSkills",
            "imageUrl": "/images/file_00000000469c61f8920a65222f5565e9_conversation_id=68063876-dbc8-8006-85e2-545d5e982bc8&message_id=5be18137-c0eb-4f74-871a-8761b81d8ab5.png?height=200&width=200",
            "description": "A comprehensive course designed to enhance both technical and interpersonal skills for well-rounded professional development and career growth.",
            "topics": [
              "This course provides a balanced approach to developing both technical and non-technical skills. Participants gain expertise in coding, data analysis, and mastering software tools critical to modern workplaces. Topics covered include programming languages, database management, and data visualization techniques.",
              "Interpersonal skill development is a core focus. Participants engage in activities to enhance communication, teamwork, and collaborative problem-solving techniques. The course includes sessions on active listening, persuasive communication, and effective presentation strategies to foster professional interactions.",
              "The program underscores the importance of collaboration between technical and non-technical roles. It delves into bridging communication gaps and creating synergy between diverse teams, ensuring seamless workflows and mutual understanding in multidisciplinary settings.",
              "Workshops focus on cultivating leadership skills, adaptability, and project management capabilities. This includes exposure to tools like Agile methodologies, Gantt charts, and Kanban boards to help participants excel in dynamic and challenging professional environments.",
              "Participants will develop their emotional intelligence (EI) through exercises that promote self-awareness, empathy, and relationship management. Emotional intelligence is integrated with technical expertise to build well-rounded professionals equipped to navigate interpersonal complexities in the workplace.",
              "Conflict resolution and negotiation techniques are explored to enable participants to handle disagreements constructively. Real-world case studies and role-playing scenarios provide hands-on learning for resolving workplace conflicts.",
              "Critical thinking and decision-making skills are fostered to enhance the participants’ ability to solve complex problems effectively. The course includes frameworks such as root-cause analysis, SWOT analysis, and decision trees for structured problem-solving.",
              "Stress and time management strategies are emphasized to help participants balance workloads and improve productivity. Techniques like the Eisenhower Matrix, time-blocking, and mindfulness practices are introduced to enhance personal and professional efficiency.",
              "The program equips participants with tools for continuous self-improvement, including goal setting, feedback analysis, and lifelong learning strategies. This ensures participants stay relevant and adaptable in an evolving job market.",
              "The course concludes with interactive projects that combine technical expertise and soft skills. Participants collaborate on capstone projects, simulating real-world challenges to demonstrate and apply their learnings effectively."
            ]
          },
          {
            "id": 15,
            "title": "SoftSkills",
            "imageUrl": "/images/realistic Indian photo of training of communication skills.png",
            "description": "A course dedicated to building essential soft skills for professional and personal success.",
            "topics": [
              "Soft skills are indispensable for fostering effective communication, building meaningful relationships, and unlocking personal growth. This course delves deeply into the essential skills needed to navigate and excel in both professional and personal environments.",
              "The program begins with an exploration of verbal and written communication techniques. Participants will learn how to articulate ideas clearly, confidently, and persuasively across a range of platforms and diverse audiences. Emphasis is placed on tailoring messages to different cultural and professional contexts, ensuring inclusivity and understanding. Active listening and non-verbal communication skills, such as body language and tone, are highlighted to further enhance interaction.",
              "To build relationships that thrive on trust and collaboration, participants will develop key interpersonal skills. These include empathy, emotional intelligence, and conflict management. Practical exercises will help attendees learn to navigate difficult conversations gracefully, handle feedback constructively, and foster teamwork in high-pressure or dynamic environments.",
              "In an ever-changing world, resilience and adaptability are critical traits. This course emphasizes confidence-building activities and provides tools for managing stress and uncertainty effectively. Participants will learn to embrace change, bounce back from setbacks, and maintain a growth mindset to excel in both predictable and unpredictable scenarios.",
              "Conflict is a natural part of human interactions, but managing disagreements constructively is an art. Through practical frameworks, participants will understand how to identify root causes of conflict, mediate disputes, and turn challenges into opportunities for growth. These techniques will be valuable in preventing misunderstandings and fostering harmonious relationships.",
              "Time is a finite resource, and managing it well can be the difference between success and burnout. The course covers strategies to prioritize tasks, set achievable goals, and organize workloads efficiently. Participants will gain insights into techniques like the Eisenhower Matrix and Pomodoro Technique, helping them work smarter, not harder, and achieve their goals with clarity and focus.",
              "By the end of the program, participants will emerge as well-rounded individuals equipped with a robust toolkit of soft skills. These abilities will empower them to communicate effectively, build strong and lasting relationships, navigate complex challenges with resilience, and maximize their productivity in any professional or personal endeavor."
            ]
          }
        
    ];
    
    export default async function CourseDetailsPage({ params }) {
      const { name } = params;
      const selectedCourse = coursesData.find((course) => course.title === name);
    
      return (
        <>
          {/* Fixed Header Section */}
          <header className="fixed top-0 left-0 right-0 border-b border-gray-200 py-10 bg-white z-50 shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between">
    
              {/* Logo and Title */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/ashwin_logo.png"
                    alt="Bravynex Logo"
                    width={90}
                    height={90}
                    priority
                  />
                  <span className="text-xl font-bold ml-2 text-black">BRAVYNEX</span>
                </Link>
              </div>
    
              {/* Spacer */}
              <div className="w-7"></div>
            </div>
          </header>
    
          {/* Scrollable Content Section */}
          <div
            className="bg-black text-white px-5 pt-24 pb-8"
            style={{
              minHeight: "100vh",
              overflowY: "auto",
            }}
          >
            {selectedCourse ? (
              <div className="text-center">
                {/* Title */}
                <h1 className="text-2xl font-bold uppercase mb-6">
                  {selectedCourse.title}
                </h1>
    
                {/* Image */}
                <Image
                  className="mx-auto rounded-md"
                  src={selectedCourse.imageUrl}
                  alt={selectedCourse.title}
                  width={220}
                  height={220}
                />
    
                {/* Description */}
                <p className="text-xl font-bold mt-6 leading-relaxed max-w-6xl mx-auto">
                  {selectedCourse.description}
                </p>
    
                {/* Topics */}
                <div className="mt-8 text-left max-w-5xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">Topics Covered:</h2>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    {selectedCourse.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-lg text-center mt-10">No course selected.</p>
            )}
          </div>
        </>
      );
    }
    