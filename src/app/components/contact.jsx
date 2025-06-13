"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact({ id }) {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const [segment, setsegment] = useState("");
  const [nameofin, setnameofin] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const courses = [
    "VLSI",
    "Basic C++ Programming Language",
    "Introduction to Python",
    "Embedded Software",
    "Design Thinking and Innovation",
    "Data Science",
    "DevOps",
    "Cybersecurity",
    "Front End Development",
    "Full Stack Development",
    "Faculty Development Program (FDP)",
    "Boot Camp (Technical and Non-technical)",
    "Microsoft Certification Course",
    "Innovation and Entrepreneurship (Startup) Training",
  ];

  function sendEmail(formData) {
    const serviceId = "service_3u9meos";
    const templateId = "template_xr75hbg";
    const userId = "RB2SELaSlhZIBBaI9";

    emailjs
      .sendForm(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast("Message sent successfully. We will get back to you soon!", {
          type: "success",
        });

        // Reset fields
        setEmail("");
        setMessage("");
        setname("");
        setcourse("");
        setsegment("");
        setnameofin("");
        setphone("");
      })
      .catch((error) => {
        toast("Failed to send message. Please try again.", { type: "error" });
        console.error("Failed to send email.", error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    sendEmail(formRef.current);
  };

  return (
    <section id={id}>
      <div className="flex flex-col min-h-screen">
        <ToastContainer />
        <main className="flex-1">
          <section className="w-full py-10">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Contact Us</h1>
                <p className="max-w-[700px] text-lg md:text-xl mt-4">
                  Have questions? The quickest way to get in touch with us is using the contact information below.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-12 bg-black text-white">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Send an Email</h2>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full max-w-md space-y-6"
                >
                  <div className="flex justify-between">
                    <input
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                    <select
                      name="course"
                      value={course}
                      onChange={(e) => setcourse(e.target.value)}
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      required
                    >
                      <option value="" disabled>
                        Select the course
                      </option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-between">
                    <input
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      placeholder="Phone Number"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <select
                      name="segment"
                      value={segment}
                      onChange={(e) => setsegment(e.target.value)}
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      required
                    >
                      <option value="" disabled>
                        Select the segment
                      </option>
                      <option value="Student">Student</option>
                      <option value="College">College</option>
                      <option value="Industry">Industry</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      className="w-[48%] px-4 py-3 rounded-lg bg-white text-black"
                      placeholder="Name of the Institution"
                      name="nameofin"
                      type="text"
                      value={nameofin}
                      onChange={(e) => setnameofin(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      className="w-full px-4 py-3 rounded-2xl bg-white text-black min-h-[100px]"
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium"
                      type="submit"
                    >
                      Submit <span className="ml-2">→</span>
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-center space-x-6 mt-2">
                  <a
                    href="https://www.instagram.com/bravynexengineering/profilecard/?igsh=MTdnbmVyaGR0amExcA=="
                    className="text-white hover:text-gray-200"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/+919019659246"
                    className="text-white hover:text-gray-200"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bravynex-engineering-a8211836b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="text-white hover:text-gray-200"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-6 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-center">
              <p className="text-sm">
                Address : Mangalore, Dakshina Kannada, Karnataka, India.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
