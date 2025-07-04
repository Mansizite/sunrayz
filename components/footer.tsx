import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Building2 } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black-700 border-t border-gray-800" style={{backgroundColor:'black'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            
                <Image
                  src="/sunrayzlogo.png" // Make sure this file exists in /public
                  alt="SunRayz Logo"
                  width={100}
                  height={80}
                  className="object-contain"
                />
            
              <div>
                <h3 className="text-xl font-bold text-white">SunRayz Technology</h3>
                <p className="text-xs text-gray-400">Rayz of Innovation</p>
              </div>
            </div>
            <p className="text-gray-400">
              Empowering educational institutions with cutting-edge software solutions that transform learning
              experiences and streamline operations.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  School ERP System
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  RFID Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm"> Rajyog Apt.

Alandi Road, Shastri Chowk,

Bhosari Pune-411039.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+91 9881262642 / 8177877784</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">sunrayztechnology1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SunRayz Technology. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ for Educational Excellence</p>
        </div>
      </div>
    </footer>
  )
}
