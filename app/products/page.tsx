// // import type { Metadata } from "next"
// // import Link from "next/link"
// // import { ArrowLeft, Database, Smartphone, Globe, CreditCard, Cloud, Bot, CheckCircle } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import Footer from "@/components/footer"

// // export const metadata: Metadata = {
// //   title: "Services - SunRayz Technology",
// //   description: "Comprehensive educational technology solutions including ERP systems, mobile apps, and AI integration.",
// // }

// // const services = [
// //   {
// //     id: "erp",
// //     title: "School ERP System",
// //     description:
// //       "Comprehensive Enterprise Resource Planning solution designed specifically for educational institutions",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: Database,
// //     features: [
// //       "Student Information Management",
// //       "Academic Records & Transcripts",
// //       "Fee Management & Payments",
// //       "Staff Management & Payroll",
// //       "Automated Timetable Generation",
// //       "Examination Management",
// //       "Library Management System",
// //       "Transport Management",
// //     ],
// //     price: "Starting at $299/month",
// //     clients: "500+ Schools",
// //   },
// //   {
// //     id: "mobile",
// //     title: "Mobile Applications",
// //     description: "Native and cross-platform mobile applications for seamless educational experience",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: Smartphone,
// //     features: [
// //       "Student Mobile Dashboard",
// //       "Parent Communication App",
// //       "Teacher Management Tools",
// //       "Real-time Attendance Tracking",
// //       "Push Notifications",
// //       "Offline Capability",
// //       "Multi-language Support",
// //       "GPS-based Bus Tracking",
// //     ],
// //     price: "Starting at $199/month",
// //     clients: "300+ Schools",
// //   },
// //   {
// //     id: "web",
// //     title: "Web Development",
// //     description: "Modern, responsive websites and web applications for educational institutions",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: Globe,
// //     features: [
// //       "Responsive Website Design",
// //       "Content Management System",
// //       "SEO Optimization",
// //       "Online Admission Portal",
// //       "Event Management System",
// //       "News & Announcements",
// //       "Photo & Video Gallery",
// //       "Social Media Integration",
// //     ],
// //     price: "Starting at $149/month",
// //     clients: "400+ Websites",
// //   },
// //   {
// //     id: "rfid",
// //     title: "RFID Solutions",
// //     description: "Advanced RFID-based identification and tracking systems for enhanced security",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: CreditCard,
// //     features: [
// //       "Smart RFID ID Cards",
// //       "Automated Attendance System",
// //       "Access Control Systems",
// //       "Library Book Tracking",
// //       "Cafeteria Payment System",
// //       "School Bus Tracking",
// //       "Parent SMS Notifications",
// //       "Real-time Location Monitoring",
// //     ],
// //     price: "Starting at $399/month",
// //     clients: "200+ Installations",
// //   },
// //   {
// //     id: "cloud",
// //     title: "Cloud Services",
// //     description: "Scalable cloud infrastructure and services for educational institutions",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: Cloud,
// //     features: [
// //       "Cloud Infrastructure Setup",
// //       "Data Migration & Backup",
// //       "Scalable Server Architecture",
// //       "Database Management",
// //       "Security & Compliance",
// //       "24/7 Monitoring & Support",
// //       "Disaster Recovery Planning",
// //       "Cost Optimization",
// //     ],
// //     price: "Starting at $99/month",
// //     clients: "300+ Clients",
// //   },
// //   {
// //     id: "ai",
// //     title: "AI Integration",
// //     description: "Artificial Intelligence and Machine Learning solutions for smart educational systems",
// //     image: "/placeholder.svg?height=400&width=600",
// //     icon: Bot,
// //     features: [
// //       "AI-Powered Analytics",
// //       "Intelligent Chatbot Support",
// //       "Automated Grading Systems",
// //       "Predictive Analytics",
// //       "Natural Language Processing",
// //       "Computer Vision Solutions",
// //       "Personalized Learning Paths",
// //       "Behavioral Pattern Analysis",
// //     ],
// //     price: "Starting at $499/month",
// //     clients: "100+ Implementations",
// //   },
// // ]

// // export default function ServicesPage() {
// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Header */}
// //       <div className="bg-gray-900 text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
// //             <ArrowLeft className="h-4 w-4 mr-2" />
// //             Back to Home
// //           </Link>
// //           <h1 className="text-5xl md:text-7xl font-bold mb-6">
// //             Comprehensive Solutions for
// //             <span className="text-gray-300"> Educational Excellence</span>
// //           </h1>
// //           <p className="text-xl text-gray-300 max-w-4xl">
// //             From AI-powered ERP systems to advanced RFID solutions, we provide cutting-edge technology that transforms
// //             how educational institutions operate and engage with their communities.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Services Grid */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid gap-16">
// //             {services.map((service, index) => {
// //               const IconComponent = service.icon
// //               return (
// //                 <div
// //                   key={service.id}
// //                   id={service.id}
// //                   className={`grid lg:grid-cols-2 gap-12 items-center ${
// //                     index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
// //                   }`}
// //                 >
// //                   {/* Content */}
// //                   <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
// //                     <div className="flex items-center space-x-4 mb-6">
// //                       <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
// //                         <IconComponent className="h-8 w-8 text-white" />
// //                       </div>
// //                       <Badge className="bg-gray-900 text-white px-4 py-2">{service.price}</Badge>
// //                     </div>
// //                     <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
// //                     <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

// //                     {/* Features */}
// //                     <div className="grid md:grid-cols-2 gap-3 mb-8">
// //                       {service.features.map((feature, idx) => (
// //                         <div key={idx} className="flex items-center space-x-3">
// //                           <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
// //                           <span className="text-gray-700">{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     {/* Stats */}
// //                     <div className="flex items-center space-x-8 mb-8">
// //                       <div>
// //                         <div className="text-2xl font-bold text-gray-900">{service.clients}</div>
// //                         <div className="text-gray-600 text-sm">Happy Clients</div>
// //                       </div>
// //                       <div>
// //                         <div className="text-2xl font-bold text-gray-900">99.9%</div>
// //                         <div className="text-gray-600 text-sm">Uptime</div>
// //                       </div>
// //                       <div>
// //                         <div className="text-2xl font-bold text-gray-900">24/7</div>
// //                         <div className="text-gray-600 text-sm">Support</div>
// //                       </div>
// //                     </div>

// //                     {/* CTA Buttons */}
// //                     <div className="flex space-x-4">
// //                       <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg">
// //                         Get Started
// //                       </Button>
// //                       <Button
// //                         variant="outline"
// //                         className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg"
// //                       >
// //                         Request Demo
// //                       </Button>
// //                     </div>
// //                   </div>

// //                   {/* Image */}
// //                   <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
// //                     <div className="relative">
// //                       <img
// //                         src={service.image || "/placeholder.svg"}
// //                         alt={service.title}
// //                         className="w-full h-96 object-cover rounded-2xl shadow-2xl"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 bg-gray-900 text-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
// //           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
// //             Get in touch with our experts to discuss your requirements and discover how we can help you achieve your
// //             educational goals.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
// //               Schedule Consultation
// //             </Button>
// //             <Button
// //               variant="outline"
// //               className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
// //             >
// //               View Portfolio
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   )
// // }
// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Database, Smartphone, Globe, CreditCard, Cloud, Bot, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Services - SunRayz Technology",
//   description: "Comprehensive educational technology solutions including ERP systems, mobile apps, and AI integration.",
// }

// const services = [
//   {
//     id: "erp",
//     title: "School ERP System",
//     description:
//       "SunRayz ERP is a web-based School ERP Solution enabling institutions to manage and automate administrative tasks like admissions, class management, payroll, library, logistics, hostel, and fees. Features include virtual campus, role-based access, scalability, and budget-friendly deployment.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Database,
//     features: [
//       "Pre Registration",
//       "HR Staff Management",
//       "Student Management",
//       "Payroll Management",
//       "Library & Hostel Management",
//       "Accounts & Alumni Portal",
//       "Fee Collection System",
//       "Role-based Access Rights",
//     ],
//     price: "Starting at $299/month",
//     clients: "500+ Schools",
//   },
//   {
//     id: "gps",
//     title: "GPS & GPRS Vehicle Tracking",
//     description:
//       "RFID integrated GPS vehicle tracking for real-time monitoring of school buses with parent notifications, speed logs, fuel tracking, and geofencing.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Smartphone,
//     features: [
//       "SMS Alerts for Pick & Drop",
//       "Speed & Fuel Tracking",
//       "Area-Based Alerts",
//       "Parent Notifications",
//       "Real-time Bus Monitoring",
//       "Integrated with RFID System",
//     ],
//     price: "Custom Pricing",
//     clients: "200+ Schools",
//   },
//   {
//     id: "biometric",
//     title: "Biometric System",
//     description:
//       "Biometric identification using fingerprint and eye recognition for student attendance and access control. Enhances security through unique human characteristics.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: CreditCard,
//     features: [
//       "Fingerprint Recognition",
//       "Thumb-Based Attendance",
//       "Iris & Retina Scanning",
//       "Secure Access Control",
//       "Behavioral Biometrics",
//     ],
//     price: "Starting at $249/month",
//     clients: "150+ Implementations",
//   },
//   {
//     id: "chitfund",
//     title: "Chit Fund Management",
//     description:
//       "Digital platform for managing chit fund schemes with online auctions, EMI payments, and transparent member accounts.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Globe,
//     features: [
//       "Online Chit Auctions",
//       "Monthly EMI Payments",
//       "Automated Prize Distribution",
//       "Subscriber Account Dashboard",
//       "Transparent Reporting",
//     ],
//     price: "Starting at $99/month",
//     clients: "100+ Groups",
//   },
//   {
//     id: "ebilling",
//     title: "E-Billing System",
//     description:
//       "Efficient digital invoicing solution with summary reports, real-time tracking, and customizable analytics for educational institutes.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Cloud,
//     features: [
//       "Faster Invoice Processing",
//       "Detailed Cost Analysis",
//       "Automated Report Generation",
//       "Eco-friendly Digital Billing",
//       "Improved Cash Flow Visibility",
//     ],
//     price: "Starting at $79/month",
//     clients: "250+ Clients",
//   },
//   {
//     id: "eclass",
//     title: "E-Class Smart Content",
//     description:
//       "2D/3D animated lessons mapped to Maharashtra State Board guidelines. Features virtual classrooms, real teachers, and interactive modules.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Bot,
//     features: [
//       "Audio-Visual Lessons",
//       "2D/3D Chapter-Wise Videos",
//       "Mapped to Maharashtra Syllabus",
//       "Mind Maps & Revision Tools",
//       "Boosts SSC Success Rate",
//       "Interactive Real-Teacher Modules",
//     ],
//     price: "Custom Pricing",
//     clients: "300+ Schools",
//   },
//   {
//     id: "stock",
//     title: "Stock Management",
//     description:
//       "End-to-end inventory and merchandise tracking system for schools, retail stores, or e-commerce sites. Helps prevent overstocking or shortage.",
//     image: "/placeholder.svg?height=400&width=600",
//     icon: Database,
//     features: [
//       "Track Inventory Movement",
//       "Forecast Stock Needs",
//       "Maintain Balance of Inventory",
//       "Reduce Dead Stock",
//       "Automated Stock Reports",
//       "Supports Multi-location Tracking",
//     ],
//     price: "Starting at $89/month",
//     clients: "180+ Businesses",
//   },
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Comprehensive Solutions for
//             <span className="text-gray-300"> Educational Excellence</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-4xl">
//             From AI-powered ERP systems to smart biometric attendance, we provide tailored technology that modernizes how schools operate and communicate.
//           </p>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-16">
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <div
//                   key={service.id}
//                   id={service.id}
//                   className={`grid lg:grid-cols-2 gap-12 items-center ${
//                     index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
//                   }`}
//                 >
//                   {/* Content */}
//                   <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                     <div className="flex items-center space-x-4 mb-6">
//                       <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                         <IconComponent className="h-8 w-8 text-white" />
//                       </div>
//                       <Badge className="bg-gray-900 text-white px-4 py-2">{service.price}</Badge>
//                     </div>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
//                     <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

//                     {/* Features */}
//                     <div className="grid md:grid-cols-2 gap-3 mb-8">
//                       {service.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-3">
//                           <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Stats */}
//                     <div className="flex items-center space-x-8 mb-8">
//                       <div>
//                         <div className="text-2xl font-bold text-gray-900">{service.clients}</div>
//                         <div className="text-gray-600 text-sm">Happy Clients</div>
//                       </div>
//                       <div>
//                         <div className="text-2xl font-bold text-gray-900">99.9%</div>
//                         <div className="text-gray-600 text-sm">Uptime</div>
//                       </div>
//                       <div>
//                         <div className="text-2xl font-bold text-gray-900">24/7</div>
//                         <div className="text-gray-600 text-sm">Support</div>
//                       </div>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="flex space-x-4">
//                       <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg">
//                         Get Started
//                       </Button>
//                       <Button
//                         variant="outline"
//                         className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg"
//                       >
//                         Request Demo
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
//                     <div className="relative">
//                       <img
//                         src={service.image || "/placeholder.svg"}
//                         alt={service.title}
//                         className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Get in touch with our experts to discuss your requirements and discover how we can help you achieve your
//             educational goals.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
//               Schedule Consultation
//             </Button>
//             <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
//             >
//               View Portfolio
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

import Link from "next/link"
import { ArrowLeft, Database, Smartphone, Globe, CreditCard, Cloud, Bot, CheckCircle, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"



const services = [
  {
    id: "erp",
    title: "ERP Software",
    description:
      "SunRayz ERP is a web-based School ERP Solution that enables institutes to use integrated modules for efficient administration. It automates admissions, class and library management, logistics, hostel, fee, alumni, and account operations. With virtual campus, role-based access, and browser-based interface, SunRayz ERP is budget-friendly and accessible from intranet or internet.",
    image: "https://img.freepik.com/premium-photo/enterprise-resource-management-erp-software-system-business-resources-plan_31965-6886.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Database,
    features: [
      "Pre Registration",
      "HR Staff Management",
      "Student Management",
      "Payroll Management",
      "Library, Hostel & Accounts",
      "Virtual Campus & Role Based Access",
    ],
    price: "Custom Pricing",
    clients: "500+ Schools",
  },
  {
    id: "gps",
    title: "GPS and GPRS System",
    description:
      "Integrated RFID with GPS-based Vehicle Tracking System. Sends SMS about bus number, fuel logs, speed logs, pick and drop of students, and alerts when vehicles enter specific areas.",
    image: "https://media.istockphoto.com/id/2167849497/photo/satellite-in-space-station-orbiting-earth.webp?a=1&b=1&s=612x612&w=0&k=20&c=o5Wu-imKlu62FhsFlaZyZJpwwvuaaiFA-ioT2-OavXI=",
    icon: Smartphone,
    features: [
      "Bus Number Notifications",
      "Fuel & Speed Records",
      "Pick/Drop SMS to Parents",
      "Area Entry Alerts",
    ],
    price: "Custom Pricing",
    clients: "200+ Buses Tracked",
  },
  {
    id: "school-mgmt",
    title: "School Management Software",
    description:
      "Large database system to manage school operations. Stores all data about students, staff, and materials. Enables quick record search, automated reports, and parent notifications via SMS or email. Supports LAN/WAN and internet-based access.",
    image: "https://img.freepik.com/free-vector/flat-design-minimal-international-school-landing-page_23-2149250560.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Bot,
    features: [
      "Record Search in Seconds",
      "Semester Statement in Minutes",
      "SMS & Email Alerts",
      "Supports LAN & Public Server",
      "Used by 100+ Schools",
    ],
    price: "Starts from $149/month",
    clients: "100+ Institutions",
  },
  {
    id: "biometric",
    title: "Biometric System",
    description:
      "Advanced biometric systems for secure attendance and access. Uses thumb, iris, retina, and finger geometry for identity verification. Enhances security through unique physical characteristics.",
    image: "https://img.freepik.com/free-vector/biometric-security-concept_53876-91629.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: CreditCard,
    features: [
      "Fingerprint & Thumb Attendance",
      "Iris & Retina Recognition",
      "Finger Geometry Biometrics",
      "Secure Student Identification",
    ],
    price: "Custom Pricing",
    clients: "150+ Schools",
  },
  {
    id: "chitfund",
    title: "Chit Fund",
    description:
      "Online chit fund system combining savings and borrowing in one scheme. Conducts online auctions, EMI payments, and prize disbursement. Provides subscriber dashboards and secure fund transfers.",
    image: "https://media.istockphoto.com/id/2164352488/photo/close-up-of-womans-hand-filling-piggy-bank-with-banknotes-saving-financial-concept.jpg?s=2048x2048&w=is&k=20&c=dNWKtgptSx_741fyMWoj_zJ13qn3HujvEPwvWojsf1I=",
    icon: Globe,
    features: [
      "Online Auctions",
      "Monthly Contributions",
      "Secure Transfers",
      "Subscriber Portal",
    ],
    price: "Custom Pricing",
    clients: "100+ Groups",
  },
  {
    id: "ebilling",
    title: "E-Billing Software",
    description:
      "Web-based invoicing system for students and parents. Includes detailed reporting, invoice approval, and customizable billing analytics. Reduces paper usage and improves transparency.",
    image: "https://img.freepik.com/free-photo/spreadsheet-analysis-laptop_23-2151953973.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Cloud,
    features: [
      "Fast Invoice Delivery",
      "Billing Report Customization",
      "Cash Flow Visibility",
      "Paperless Process",
    ],
    price: "Starts from $79/month",
    clients: "200+ Schools",
  },
  {
    id: "eclass",
    title: "e-Class",
    description:
      "Multimedia learning content mapped to Maharashtra State Board. Includes 2D/3D videos, question-answers, mind maps, and virtual teachers to make learning fun and effective.",
    image: "https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Bot,
    features: [
      "2D & 3D Audio Visual Lessons",
      "Mapped to State Syllabus",
      "Question-Answer & Mind Map",
      "Loadable on School Servers",
    ],
    price: "Custom Pricing",
    clients: "300+ Institutions",
  },
  {
    id: "rfid-reader",
    title: "RFID Reader",
    description:
      "RFID solutions for asset tracking, library, school management, fleet services, and more. Offers LF, HF, UHF, Gen2 readers and antennas with end-to-end implementation.",
    image: "https://img.freepik.com/free-photo/paying-public-transport-by-card-public-transport-contactless-fare-payment_169016-67277.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Rss,
    features: [
      "LF, HF, UHF RFID Readers",
      "Gen2 Tags & Antennas",
      "Tracking & Security",
      "Fleet & Library Integration",
    ],
    price: "Custom Pricing",
    clients: "100+ Schools",
  },
  {
    id: "stock",
    title: "Stock Management",
    description:
      "Comprehensive inventory system for schools and retail businesses. Tracks item movement across locations and helps maintain optimal inventory levels. Prevents overstock and dead stock losses.",
    image: "https://img.freepik.com/premium-photo/warehouse-management-innovative-software-computer-real-time-monitoring_31965-18514.jpg?ga=GA1.1.500025587.1734678899&semt=ais_items_boosted&w=740",
    icon: Database,
    features: [
      "Inventory Tracking",
      "Stock Rotation Management",
      "Location-based Control",
      "Demand Forecasting",
    ],
    price: "Custom Pricing",
    clients: "180+ Businesses",
  }
]

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    
    
   
      <div className="relative overflow-hidden py-28 bg-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-purple-200 transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
                 All-in-One <span className="text-purple-300">School Tech Solutions</span>
            </h1>
            <p className="text-lg text-purple-100">
              Discover our complete suite of tools to run your school smarter — from ERP to eClass to Stock & Billing.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="bg-gray-900 text-white px-4 py-2">{service.price}</Badge>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-8 mb-8">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{service.clients}</div>
                        <div className="text-gray-600 text-sm">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">99.9%</div>
                        <div className="text-gray-600 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-gray-600 text-sm">Support</div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg">
                        Get Started
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg"
                      >
                        Request Demo
                      </Button>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="relative">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Selecting a Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We’ll guide you through our features and help you get started with the perfect technology for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Talk to Us
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
            >
              View Demos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    
    </>
  )
}