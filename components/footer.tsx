import Link from "next/link"
import { Facebook, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/logo.png"
export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-800 py-8 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
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
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <Youtube size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Sales & Marketing Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  HR Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Production Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Inventory & Supply Chain Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 dark:text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Project & Task Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Customer Support & CRM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Procurement & Vendor Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
