"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import logo from "@/assets/logo.png"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      <header className="border-b dark:border-gray-800 bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-8">
              <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center mr-2">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={42}
                  height={38}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg dark:text-white">ERPixo</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/about"
                className={`text-sm font-medium ${isActive("/about") ? "dark:text-white text-gray-900" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                About us
              </Link>
              <Link
                href="/services"
                className={`text-sm font-medium ${isActive("/services") ? "dark:text-white text-gray-900" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className={`text-sm font-medium ${isActive("/pricing") ? "dark:text-white text-gray-900" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                Pricing
              </Link>
              <Link
                href="/reporting"
                className={`text-sm font-medium ${isActive("/reporting") ? "dark:text-white text-gray-900" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                Reporting
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium ${isActive("/contact") ? "dark:text-white text-gray-900" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-primary text-white text-sm px-4 py-1.5 rounded-full hidden sm:block">
              Download App
            </button>
            <ThemeToggle />
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-black z-50 flex flex-col shadow-xl"
            >
              <div className="container px-4 py-3 flex items-center justify-between border-b dark:border-gray-800">
                <Link href="/" className="flex items-center">
                  <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="font-bold text-lg dark:text-white">ERPixo</span>
                </Link>
                <button className="text-gray-700 dark:text-gray-300" onClick={toggleMenu} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <motion.div
                className="flex flex-col items-center justify-center flex-1 space-y-6 p-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <Link
                    href="/about"
                    className="text-xl font-medium text-gray-800 dark:text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    About us
                  </Link>
                </motion.div>
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <Link
                    href="/services"
                    className="text-xl font-medium text-gray-800 dark:text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <Link
                    href="/pricing"
                    className="text-xl font-medium text-gray-800 dark:text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    Pricing
                  </Link>
                </motion.div>
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <Link
                    href="/reporting"
                    className="text-xl font-medium text-gray-800 dark:text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    Reporting
                  </Link>
                </motion.div>
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <Link
                    href="/contact"
                    className="text-xl font-medium text-gray-800 dark:text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <button className="bg-primary text-white px-6 py-2 rounded-full mt-4">Download App</button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
