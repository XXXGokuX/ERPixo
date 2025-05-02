"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useInView } from "framer-motion"
import { useRef } from "react"
import teamCollaboration from "@/assets/about-banner.jpg"
import erpSolution from "@/assets/service-1.png"
import analytics from "@/assets/service-2.png"
import cloudServices from "@/assets/service-3.png"


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Custom component for animated sections
function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden mb-12"
          >
            <Image
              src={teamCollaboration}
              alt="Team collaboration"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* About Us Section */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">About Us</h1>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              At ERPixo, we’re on a mission to revolutionize how businesses manage operations—making it smarter, simpler, and mobile-first.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/contact" className="text-primary hover:underline text-sm">
                Email Us
              </Link>
              <Link href="#" className="text-primary hover:underline text-sm">
                LinkedIn
              </Link>
            </div>
          </AnimatedSection>

          {/* Who We Are Section */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Who We Are?</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              We’re not just software developers—we’re business problem-solvers with a passion for smart technology. Our team blends expertise in enterprise resource planning, AI/ML, UX design, and mobile app development, all under one roof.
            </p>
          </AnimatedSection>

          {/* Meet Our Team Section */}
          <motion.div
            ref={useRef(null)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-8 text-center dark:text-white">
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "CEO & Founder",
                  description: "A visionary leader with 15+ years of experience in software development.",
                },
                {
                  title: "Co-founder & Product Owner",
                  description: "10+ yrs solving business pain points and streamlining ops.",
                },
                {
                  title: "UI/UX Designer",
                  description: "Ensures that every screen is intuitive, clean, and a joy to use.",
                },
                {
                  title: "AI & Machine Learning Experts",
                  description: "Power predictive analytics, smart reports, and automation.",
                },
                {
                  title: "Full Stack Developers",
                  description: "Build reliable, scalable, and secure software from front end to backend.",
                },
                {
                  title: "Mobile App Developers",
                  description: "Ensure seamless performance across devices—even without internet connectivity.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-black"
                >
                  <h3 className="text-primary font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company History Section */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Company History</h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Founded in 2005, ERPixo has been at the forefront of ERP solutions, helping businesses streamline
              operations and achieve their goals. Our journey is marked by innovation, growth, and a commitment to
              excellence.
            </p>
            <motion.button
              className="bg-primary text-white text-sm px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </AnimatedSection>

          {/* Mission Statement */}
          <AnimatedSection className="text-center mb-16">
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Our mission is to empower businesses with innovative ERP solutions that drive efficiency and growth. Our
              vision is to be the leading provider of ERP solutions, recognized for our commitment to quality and
              customer satisfaction.
            </p>
            <p className="font-medium dark:text-white">Abhishek Sinha</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">CEO & Founder</p>
          </AnimatedSection>

          {/* Our Services Section */}
          <motion.div
            ref={useRef(null)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-8 text-center dark:text-white">
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "ERP Solutions",
                  description: "Comprehensive ERP solutions tailored to your business.",
                  img: erpSolution
                },
                {
                  title: "Analytics",
                  description: "Advanced analytics to drive better decisions.",
                  img: analytics
                },
                {
                  title: "Cloud Services",
                  description: "Secure and reliable cloud-based infrastructure.",
                  img: cloudServices
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                      },
                    },
                  }}
                  className="rounded-lg overflow-hidden"
                >
                  <div className="w-[416px] h-[420px] bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={416}
                      height={420}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 dark:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <motion.button
                      className="bg-primary text-white text-xs px-3 py-1.5 rounded"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
