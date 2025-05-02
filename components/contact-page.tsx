"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Contact Form Section */}
          <AnimatedSection className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Contact Us</h1>
            <p className="text-gray-600 dark:text-gray-300">
              We'd love to hear from you! Please fill out the form below to get in touch.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.form
              onSubmit={handleSubmit}
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone No."
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                className="mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300"
                  required
                />
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 resize-none"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </AnimatedSection>

          {/* Alternative Contact Section */}
          <AnimatedSection className="mb-20">
            <motion.div
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">Or</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">write a mail on below mail id</p>
              <motion.div className="flex items-center justify-center mb-8" whileHover={{ scale: 1.05 }}>
                <Mail className="text-gray-800 dark:text-white mr-2" size={24} />
                <span className="text-gray-800 dark:text-white text-lg font-medium">admin@erpixo.com</span>
              </motion.div>
              <div className="flex justify-center space-x-6">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="text-gray-800 dark:text-white" size={24} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" aria-label="YouTube">
                    <Youtube className="text-gray-800 dark:text-white" size={24} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="text-gray-800 dark:text-white" size={24} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Trusted Partner Section */}
          <AnimatedSection className="mb-16">
            <div className="text-center py-16 border-t border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Your Trusted Business Partner</h2>
              <p className="text-gray-800 dark:text-white text-lg">admin@erpixo.com</p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}
