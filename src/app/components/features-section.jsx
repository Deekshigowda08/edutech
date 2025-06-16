import Image from "next/image"

export default function FeaturesSection({ id }) {
  return (
    <section id={id} className="features-section">
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/colabration1.png?height=300&width=300"
            alt="Trainer teaching a student"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Registered under<strong> MICRO, SMALL AND MEDIUM ENTERPRISES (MSME) and National Skill Development Corporation (NSDC)</strong>,we design impactful courses that blend industry expertise with innovation to empower learners. Our content remains relevant and insightful, helping individuals achieve their goals, make meaningful progress in their careers, and contribute to a skilled workforce. Additionally, we provide internship opportunities that offer hands-on experience, bridging the gap between theory and practice to prepare learners for real-world challenges.
          </p>
          
        </div>
      </div>

      {/* Feature 2: Collaboration */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-black text-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/pic4.png?height=250&width=250"
            alt="Collaboration illustration"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our trainers are industry experts with <strong>over 15 years of practical experience</strong> and a passion for teaching. They bring in-depth knowledge, real-world insights, and engaging teaching methods to every course. Dedicated to your success, they provide guidance, support, and inspiration, ensuring a fulfilling and effective learning experience for all our students.          </p>
         
        </div>
      </div>

      {/* Feature 3: Students */}
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/pic2.png?height=250&width=250"
            alt="Students with questions"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our students love the flexibility, expert-led courses, and practical knowledge they gain. They appreciate the interactive learning experience and the personalized support they receive. Many have shared how our courses helped them achieve their goals, boost their careers, or explore new passions. Their success stories inspire us to keep delivering excellence! With pride, <strong>we can say that we have successfully trained over 500 students</strong>, empowering them to make meaningful progress in their journeys.
          </p>
         
        </div>
      </div>

      {/* Feature 4: Programs */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-black text-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/pic5.png?height=250&width=250"
            alt="Digital learning illustration"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          We offer a variety of services to support growth and success. Our Product Development brings innovative ideas to life,
           while Soft Skill Training enhances communication and leadership abilities. With IT Training, we ensure you're equipped with the latest tech knowledge. 
           Our focus on Innovation and Entrepreneurship empowers creative ventures, and <strong>our Consultancy provides expert advice to help you achieve your goals</strong>.


          </p>
          
        </div>
      </div>
    </section>
  )
}

