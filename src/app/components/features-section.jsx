import Image from "next/image"

export default function FeaturesSection({ id }) {
  return (
    <section id={id} className="features-section">
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/8449776_3907915.jpg?height=250&width=250"
            alt="Trainer teaching a student"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our trainers are industry experts with over 15 years of practical experience and a passion for teaching. They bring in-depth knowledge, real-world insights, and engaging teaching methods to every course. Dedicated to your success, they provide guidance, support, and inspiration, ensuring a fulfilling and effective learning experience for all our students.
          </p>
          
        </div>
      </div>

      {/* Feature 2: Collaboration */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-black text-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/partnership-concept-illustration.png?height=250&width=250"
            alt="Collaboration illustration"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Collaboration is at the heart of our success. We work closely with industry leaders, educators, and organizations to design impactful courses. Through partnerships, we ensure our content stays relevant and insightful, blending expertise and innovation. Together, we empower learners to achieve their goals and make meaningful progress in their journeys. Additionally, we provide internship opportunities to give learners hands-on experience, bridging the gap between theory and practice and preparing them for real-world challenges.
          </p>
         
        </div>
      </div>

      {/* Feature 3: Students */}
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/137951224_10308906.jpg?height=250&width=250"
            alt="Students with questions"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our students love the flexibility, expert-led courses, and practical knowledge they gain. They appreciate the interactive learning experience and the personalized support they receive. Many have shared how our courses helped them achieve their goals, boost their careers, or explore new passions. Their success stories inspire us to keep delivering excellence! With pride, we can say that we have successfully trained over 500 students, empowering them to make meaningful progress in their journeys.
          </p>
         
        </div>
      </div>

      {/* Feature 4: Programs */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-black text-white py-12 px-6 md:px-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/hand-drawn-online-tutor-illustration.png?height=250&width=250"
            alt="Digital learning illustration"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Our recent programs focused on delivering cutting-edge knowledge and practical skills. From advanced digital
            marketing to AI and data analytics, students gained insights from experts and real-world applications.
            Engaging workshops, live Q&A sessions, and hands-on projects made learning interactive and impactful,
            empowering students to excel in their chosen fields
          </p>
          
        </div>
      </div>
    </section>
  )
}

