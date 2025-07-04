
// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import {
//   Menu,
//   ChevronDown,
//   ArrowRight,
//   Database,
//   Smartphone,
//   Globe,
//   CreditCard,
//   Cloud,
//   Bot,
//   BookOpen,
//   Target,
//   Heart,
//   Users,
//   Briefcase,
//   Trophy,
//   Rss,
//   MonitorSmartphone,
//   Code2,
//   Cpu,
//   MessageSquareText,
//   Search
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// const products = [
//   { name: "School ERP System", href: "/products#erp", icon: Database },
//   { name: "GPS and GPRS System", href: "/products#gps", icon: Smartphone },
//   { name: "School Management Software", href: "/products#school-mgmt", icon: Bot },
//   { name: "Biometric System", href: "/products#biometric", icon: CreditCard },
//   { name: "Chit Fund", href: "/products#chitfund", icon: Globe },
//   { name: "E-Billing Software", href: "/products#ebilling", icon: Cloud },
//   { name: "e-Class", href: "/products#eclass", icon: Bot },
//   { name: "RFID Reader", href: "/products#rfid-reader", icon: Rss },
//   { name: "Stock Management", href: "/products#stock", icon: Database }
// ]

// const services = [
//   { name: "Web Designing", href: "/services#web-design", icon: MonitorSmartphone },
//   { name: "Web Development", href: "/services#web-development", icon: Code2 },
//   { name: "Software Development", href: "/services#software", icon: Cpu },
//   { name: "SMS Service", href: "/services#sms", icon: MessageSquareText },
//   { name: "SEO Service", href: "/services#seo", icon: Search }
// ]

// const aboutPages = [
//   { name: "Our Story", href: "/about/story", icon: BookOpen },
//   { name: "Mission & Vision", href: "/about/mission", icon: Target },
//   { name: "Company Culture", href: "/about/culture", icon: Heart },
//   { name: "Leadership", href: "/about/leadership", icon: Users },
//   { name: "Careers", href: "/about/careers", icon: Briefcase },
//   { name: "Awards", href: "/about/awards", icon: Trophy },
// ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <Link href="/" className="flex items-center space-x-3 group">
//             <img
//               src="sunrayzlogo.png"
//               alt="SunRayz Technology Logo"
//               className="w-13 h-14 object-contain"
//             />
//           </Link>

//           <div className="hidden lg:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group">
//               Home
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium">
//                 About <ChevronDown className="ml-1 h-4 w-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border-gray-100 shadow-xl min-w-[200px] rounded-lg">
//                 {aboutPages.map((page) => {
//                   const IconComponent = page.icon
//                   return (
//                     <DropdownMenuItem key={page.name} className="text-gray-700 hover:bg-gray-50 focus:bg-gray-50 rounded-md">
//                       <Link href={page.href} className="w-full flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{page.name}</span>
//                       </Link>
//                     </DropdownMenuItem>
//                   )
//                 })}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium">
//                 Products <ChevronDown className="ml-1 h-4 w-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border-gray-100 shadow-xl min-w-[220px] rounded-lg">
//                 {products.map((product) => {
//                   const IconComponent = product.icon
//                   return (
//                     <DropdownMenuItem key={product.name} className="text-gray-700 hover:bg-gray-50 focus:bg-gray-50 rounded-md">
//                       <Link href={product.href} className="w-full flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{product.name}</span>
//                       </Link>
//                     </DropdownMenuItem>
//                   )
//                 })}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium">
//                 Services <ChevronDown className="ml-1 h-4 w-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border-gray-100 shadow-xl min-w-[220px] rounded-lg">
//                 {services.map((service) => {
//                   const IconComponent = service.icon
//                   return (
//                     <DropdownMenuItem key={service.name} className="text-gray-700 hover:bg-gray-50 focus:bg-gray-50 rounded-md">
//                       <Link href={service.href} className="w-full flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{service.name}</span>
//                       </Link>
//                     </DropdownMenuItem>
//                   )
//                 })}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group">
//               Portfolio
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group">
//               Contact
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link href="/login" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group">
//               Log In
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               <ArrowRight className="mr-2 h-4 w-4" />
//               Get Quote
//             </Button>
//           </div>

//           <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-white/95 backdrop-blur-lg border-gray-100 w-80">
//               <div className="flex flex-col space-y-6 mt-8">
//                 <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
//                   Home
//                 </Link>

//                 <div className="space-y-3">
//                   <p className="text-gray-900 font-semibold text-lg">About</p>
//                   {aboutPages.map((page) => {
//                     const IconComponent = page.icon
//                     return (
//                       <Link key={page.name} href={page.href} className="block text-gray-600 hover:text-gray-900 transition-colors pl-4 flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{page.name}</span>
//                       </Link>
//                     )
//                   })}
//                 </div>

//                 <div className="space-y-3">
//                   <p className="text-gray-900 font-semibold text-lg">Products</p>
//                   {products.map((product) => {
//                     const IconComponent = product.icon
//                     return (
//                       <Link key={product.name} href={product.href} className="block text-gray-600 hover:text-gray-900 transition-colors pl-4 flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{product.name}</span>
//                       </Link>
//                     )
//                   })}
//                 </div>

//                 <div className="space-y-3">
//                   <p className="text-gray-900 font-semibold text-lg">Services</p>
//                   {services.map((service) => {
//                     const IconComponent = service.icon
//                     return (
//                       <Link key={service.name} href={service.href} className="block text-gray-600 hover:text-gray-900 transition-colors pl-4 flex items-center space-x-2">
//                         <IconComponent className="h-4 w-4" />
//                         <span>{service.name}</span>
//                       </Link>
//                     )
//                   })}
//                 </div>

//                 <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
//                   Portfolio
//                 </Link>
//                 <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
//                   Contact
//                 </Link>
//                 <Link href="/login" className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium">
//                   Log In
//                 </Link>

//                 <Button className="bg-gray-900 hover:bg-gray-800 text-white w-full rounded-lg font-semibold">
//                   <ArrowRight className="mr-2 h-4 w-4" />
//                   Get Quote
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Database,
  Smartphone,
  Globe,
  CreditCard,
  Cloud,
  Bot,
  BookOpen,
  Target,
  Heart,
  Users,
  Briefcase,
  Trophy,
  Rss,
  MonitorSmartphone,
  Code2,
  Cpu,
  MessageSquareText,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const products = [
  { name: "School ERP System", href: "/products#erp", icon: Database },
  { name: "GPS and GPRS System", href: "/products#gps", icon: Smartphone },
  { name: "School Management Software", href: "/products#school-mgmt", icon: Bot },
  { name: "Biometric System", href: "/products#biometric", icon: CreditCard },
  { name: "Chit Fund", href: "/products#chitfund", icon: Globe },
  { name: "E-Billing Software", href: "/products#ebilling", icon: Cloud },
  { name: "e-Class", href: "/products#eclass", icon: Bot },
  { name: "RFID Reader", href: "/products#rfid-reader", icon: Rss },
  { name: "Stock Management", href: "/products#stock", icon: Database }
]

const services = [
  { name: "Web Designing", href: "/services#web-design", icon: MonitorSmartphone },
  { name: "Web Development", href: "/services#web-development", icon: Code2 },
  { name: "Software Development", href: "/services#software", icon: Cpu },
  { name: "SMS Service", href: "/services#sms", icon: MessageSquareText },
  { name: "SEO Service", href: "/services#seo", icon: Search }
]

const aboutPages = [
  { name: "Our Story", href: "/about/story", icon: BookOpen },
  { name: "Mission & Vision", href: "/about/mission", icon: Target },
  // { name: "Company Culture", href: "/about/culture", icon: Heart },
  // { name: "Leadership", href: "/about/leadership", icon: Users },
  // { name: "Careers", href: "/about/careers", icon: Briefcase },
  // { name: "Awards", href: "/about/awards", icon: Trophy },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-gradient-to-r from-[#f5f3f8] via-white to-[#f5f3f8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/sunrayzlogo.png"
              alt="SunRayz Technology Logo"
              className="w-15 h-12 object-contain"
            />
          
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/" label="Home" />

            <DropdownMenuWrapper label="About" items={aboutPages} />
            <DropdownMenuWrapper label="Products" items={products} />
            <DropdownMenuWrapper label="Services" items={services} />

            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/login" label="Log In" />

                <Button className="bg-black hover:bg-black text-white px-6 py-2 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
  <ArrowRight className="mr-2 h-4 w-4" />
  Get Quote
</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#6a1b9a] hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-lg border-gray-100 w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <MobileNavLink label="Home" href="/" />
                <MobileNavGroup title="About" items={aboutPages} />
                <MobileNavGroup title="Products" items={products} />
                <MobileNavGroup title="Services" items={services} />
                <MobileNavLink label="Portfolio" href="/portfolio" />
                <MobileNavLink label="Contact" href="/contact" />
                <MobileNavLink label="Log In" href="/login" />

          

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#2E2E2E] hover:text-[#6a1b9a] transition-all duration-300 font-medium relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a1b9a] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function DropdownMenuWrapper({ label, items }: { label: string, items: any[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-[#2E2E2E] hover:text-[#6a1b9a] transition-all duration-300 font-medium">
        {label} <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border-gray-100 shadow-xl min-w-[220px] rounded-lg">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <DropdownMenuItem key={item.name} className="text-[#2E2E2E] hover:bg-gray-50 focus:bg-gray-50 rounded-md">
              <Link href={item.href} className="w-full flex items-center space-x-2">
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#2E2E2E] hover:text-[#6a1b9a] transition-colors text-lg font-medium">
      {label}
    </Link>
  )
}

function MobileNavGroup({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="space-y-3">
      <p className="text-[#2E2E2E] font-semibold text-lg">{title}</p>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Link key={item.name} href={item.href} className="block text-gray-600 hover:text-[#6a1b9a] transition-colors pl-4 flex items-center space-x-2">
            <Icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
