"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import comingSoon from "@/assets/ReportingCS.jpg"
import reportingIcon from "@/assets/AutomatedReporting.png"
import salesReportLight from "@/assets/Group 1.png"
import salesReportDark from "@/assets/Group 2.png"
import salesAndMarketing from "@/assets/Sales & Marketing.jpg"
import hrManagement from "@/assets/HRManagement.jpg"
import productionReporting from "@/assets/ProductionReporting.jpg"


import { useTheme } from "next-themes"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

// FAQ Item component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800 dark:border-gray-700">
      <button className="flex w-full justify-between items-center py-4 text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-gray-800 dark:text-white font-medium">{question}</span>
        <ChevronDown
          className={`text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          size={20}
        />
      </button>
      {isOpen && <div className="pb-4 text-gray-600 dark:text-gray-300 text-sm">{answer}</div>}
    </div>
  )
}

export default function ReportingPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={comingSoon}
            alt="Coming Soon Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Coming Soon!
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-lg mb-2">
                <span className="font-medium">Your Future in </span>
                <span className="text-primary font-medium">Automation</span>
                <span className="font-medium"> Awaits</span>
              </p>
              <p className="text-sm md:text-base">
                Get ready to transform your business operations with our cutting-edge automation solutions. Stay tuned
                for a seamless experience that will elevate your productivity and efficiency.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Reporting Sections */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Automated Reporting Section */}
            <AnimatedSection>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={reportingIcon}
                      alt="Reporting icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Automated
                    <br />
                    Reporting
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-200 dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                    Real Time Report
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                    Daily Sales Report
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                    Production Report
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Production Reporting Section */}
            <AnimatedSection>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Production Reporting</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay in control of daily output with clear, real-time production reports.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Analytics Dashboard Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Data-Driven Decisions</h2>
                <p className="text-gray-600 dark:text-gray-300">Gain insights with real-time data analytics.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <Image
                src={theme === 'dark' ? salesReportDark:salesReportLight}
                alt="Analytics graph"
                width={256}
                height={128}
                className="w-full h-full object-cover"
              />
            </AnimatedSection>
          </div>

          {/* Explore More Services */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">Explore More Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden">
                <div className="h-48 md:w-[416px] md:h-[420px] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={salesAndMarketing}
                    alt="Sales & Marketing Automation"
                    width={416}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 dark:text-white">Sales & Marketing Automation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Turn leads into loyal customers with smart tools.
                  </p>
                  <button className="bg-primary text-white text-xs px-3 py-1.5 rounded">Learn More</button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="h-48 md:w-[416px] md:h-[420px] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={hrManagement}
                    alt="HR Management"
                    width={416}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 dark:text-white">HR Management</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Streamline HR in one dashboard.</p>
                  <button className="bg-primary text-white text-xs px-3 py-1.5 rounded">Learn More</button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="h-48 md:w-[416px] md:h-[420px] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={productionReporting}
                    alt="Production Reporting"
                    width={416}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 dark:text-white">Production Reporting</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Track daily output with real-time reports.
                  </p>
                  <button className="bg-primary text-white text-xs px-3 py-1.5 rounded">Learn More</button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Section */}
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
              </div>
              <div className="lg:col-span-2">
                <FAQItem
                  question="What is ERP?"
                  answer="Enterprise Resource Planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back-office functions related to technology, services, and human resources."
                />
                <FAQItem
                  question="How can ERPixo help my business?"
                  answer="ERPixo helps streamline your business operations by automating routine tasks, providing real-time analytics, and integrating various business functions into a single system, resulting in improved efficiency and productivity."
                />
                <FAQItem
                  question="What industries do you serve?"
                  answer="We serve a wide range of industries including manufacturing, retail, healthcare, finance, education, and more. Our solutions are customizable to meet the specific needs of your industry."
                />
                <FAQItem
                  question="Can ERPixo integrate with my existing systems?"
                  answer="Yes, ERPixo is designed to integrate seamlessly with most existing business systems and software. Our team will work with you to ensure smooth integration with your current infrastructure."
                />
                <FAQItem
                  question="Do you offer customer support?"
                  answer="We provide comprehensive customer support including implementation assistance, training, and ongoing technical support to ensure you get the most out of our solutions."
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}
