// import type { Metadata } from "next"
// import Link from "next/link"
// import {
//   ArrowLeft,
//   Globe,
//   Code,
//   Laptop2,
//   MessageCircle,
//   Search,
//   CheckCircle,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"

// export const metadata: Metadata = {
//   title: "Services - SunRayz Technology",
//   description: "Explore Web Design, Development, Software, SEO, and SMS Services by SunRayz Technology.",
// }

// const services = [
//   {
//     id: "web-design",
//     title: "Web Designing",
//     description:
//       "Design is the process of collecting ideas, and aesthetically arranging and implementing them for a specific purpose. Web design involves layout, color, graphics, fonts, and content to create a satisfying user interface. SunRayz's team delivers client-centric and elegant designs.",
//     image:
//       "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=2048x2048&w=is&k=20&c=k0HGlKZDGIpAIQCx4RUEjdT-KlPoPx5iJyU6QQt9O-8=",
//     icon: Globe,
//     features: [
//       "Simple navigation-friendly pages",
//       "UI Design for smooth experience",
//       "State-of-the-art visual elements",
//       "Creative content & layout planning",
//     ],
//     price: "Starts from $99",
//     clients: "300+ Clients",
//   },
//   {
//     id: "web-development",
//     title: "Web Development",
//     description:
//       "SunRayz offers end-to-end web development including domain registration, hosting, UI/UX, e-commerce integration, SEO, content strategy, and performance optimization. We craft scalable, user-friendly, SEO-optimized websites tailored to your goals.",
//     image:
//       "https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=2048x2048&w=is&k=20&c=Lcx7WupVOFhWObH51TlPlLkyS8yEcVgvCC10CQRSrFk=",
//     icon: Code,
//     features: [
//       "Domain & Hosting Setup",
//       "E-commerce & CMS Integration",
//       "SEO Optimization",
//       "Responsive Design & Maintenance",
//     ],
//     price: "Custom Pricing",
//     clients: "500+ Projects",
//   },
//   {
//     id: "software-development",
//     title: "Software Development",
//     description:
//       "Customized software solutions for intranet, internet, and standalone systems. We offer full-cycle services from analysis to implementation for domains including ERP, accounts, messaging, and more.",
//     image:
//       "https://wallpaperaccess.com/full/1385386.jpg",
//     icon: Laptop2,
//     features: [
//       "Tailor-made applications",
//       "ERP & School Management Software",
//       "Dedicated project teams",
//       "Cost-effective scalable systems",
//     ],
//     price: "Starts from $199",
//     clients: "200+ Clients",
//   },
//   {
//     id: "sms-service",
//     title: "SMS Service",
//     description:
//       "SunRayz SMS service offers powerful communication for schools to connect with parents. From attendance to announcements, deliver instant messages directly to mobile phones.",
//     image:
//       "https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c=",
//     icon: MessageCircle,
//     features: [
//       "Attendance & Admission Alerts",
//       "Circulars & Holiday Notifications",
//       "Two-way Communication",
//       "Secure & Scalable",
//     ],
//     price: "Starts from $49/month",
//     clients: "150+ Schools",
//   },
//   {
//     id: "seo-service",
//     title: "SEO Service",
//     description:
//       "Improve your search engine rankings with our targeted SEO strategies. From keyword research to on/off-page optimization, SunRayz ensures your digital visibility leads to real growth.",
//     image:
//       "https://wallpapercave.com/wp/wp5459880.jpg",
//     icon: Search,
//     features: [
//       "Organic SEO & Keyword Strategy",
//       "Social Media Integration",
//       "Lead-focused Campaigns",
//       "Google, Bing & Yahoo Optimization",
//     ],
//     price: "Custom Packages",
//     clients: "100+ Businesses",
//   },
// ]

// export default function ServicesPage() {
//   return (
//     <>
//     <Navbar/>
   
//     <div className="min-h-screen bg-white">
  
// <div className="relative overflow-hidden py-28 bg-black text-white">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"></div>
//           <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
//           <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-xl"></div>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/"
//             className="inline-flex items-center text-white hover:text-purple-200 transition-colors mb-6 group"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//             Back to Home
//           </Link>
//           <div className="max-w-3xl">
//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//                 Our Professional <span className="text-purple-300">Services</span>
//             </h1>
//             <p className="text-lg text-purple-100">
//               Explore tailored tech solutions including design, development, SEO, and communication to elevate your digital journey.
//             </p>
//           </div>
//         </div>
//       </div>
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-16">
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <div
//                   key={service.id}
//                   id={service.id}
//                   className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
//                 >
//                   <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                     <div className="flex items-center space-x-4 mb-6">
//                       <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                         <IconComponent className="h-8 w-8 text-white" />
//                       </div>
                 
//                     </div>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
//                     <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
//                     <div className="grid md:grid-cols-2 gap-3 mb-8">
//                       {service.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-3">
//                           <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
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

//       <section className="py-20 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-6">Let’s Build Together</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Talk to our experts to create, launch and scale your digital solutions — the SunRayz way.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
//               Talk to Us
//             </Button>
//             <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
//             >
//               View Demos
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//      </>
//   )
// }
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Globe,
  Code,
  Laptop2,
  MessageCircle,
  Search,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Services - SunRayz Technology",
  description: "Explore Web Design, Development, Software, SEO, and SMS Services by SunRayz Technology.",
}

const services = [
  {
    id: "web-design",
    title: "Web Designing",
    description:
      "Design is the process of collecting ideas, and aesthetically arranging and implementing them for a specific purpose. Web design involves layout, color, graphics, fonts, and content to create a satisfying user interface. SunRayz's team delivers client-centric and elegant designs.",
    image:
      "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=2048x2048&w=is&k=20&c=k0HGlKZDGIpAIQCx4RUEjdT-KlPoPx5iJyU6QQt9O-8=",
    icon: Globe,
    features: [
      "Simple navigation-friendly pages",
      "UI Design for smooth experience",
      "State-of-the-art visual elements",
      "Creative content & layout planning",
    ],
    price: "Starts from $99",
    clients: "300+ Clients",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "SunRayz offers end-to-end web development including domain registration, hosting, UI/UX, e-commerce integration, SEO, content strategy, and performance optimization. We craft scalable, user-friendly, SEO-optimized websites tailored to your goals.",
    image:
      "https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=2048x2048&w=is&k=20&c=Lcx7WupVOFhWObH51TlPlLkyS8yEcVgvCC10CQRSrFk=",
    icon: Code,
    features: [
      "Domain & Hosting Setup",
      "E-commerce & CMS Integration",
      "SEO Optimization",
      "Responsive Design & Maintenance",
    ],
    price: "Custom Pricing",
    clients: "500+ Projects",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Customized software solutions for intranet, internet, and standalone systems. We offer full-cycle services from analysis to implementation for domains including ERP, accounts, messaging, and more.",
    image:
      "https://wallpaperaccess.com/full/1385386.jpg",
    icon: Laptop2,
    features: [
      "Tailor-made applications",
      "ERP & School Management Software",
      "Dedicated project teams",
      "Cost-effective scalable systems",
    ],
    price: "Starts from $199",
    clients: "200+ Clients",
  },
  {
    id: "sms-service",
    title: "SMS Service",
    description:
      "SunRayz SMS service offers powerful communication for schools to connect with parents. From attendance to announcements, deliver instant messages directly to mobile phones.",
    image:
      "https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c=",
    icon: MessageCircle,
    features: [
      "Attendance & Admission Alerts",
      "Circulars & Holiday Notifications",
      "Two-way Communication",
      "Secure & Scalable",
    ],
    price: "Starts from $49/month",
    clients: "150+ Schools",
  },
  {
    id: "seo-service",
    title: "SEO Service",
    description:
      "Improve your search engine rankings with our targeted SEO strategies. From keyword research to on/off-page optimization, SunRayz ensures your digital visibility leads to real growth.",
    image:
      "https://wallpapercave.com/wp/wp5459880.jpg",
    icon: Search,
    features: [
      "Organic SEO & Keyword Strategy",
      "Social Media Integration",
      "Lead-focused Campaigns",
      "Google, Bing & Yahoo Optimization",
    ],
    price: "Custom Packages",
    clients: "100+ Businesses",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section with Enhanced Background */}
        <div className="relative overflow-hidden py-28 bg-black text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5 animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-xl animate-pulse delay-700"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-purple-300 transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Our Professional <span className="text-purple-300">Services</span>
              </h1>
              <p className="text-lg text-purple-100/90">
                Explore tailored tech solutions including design, development, SEO, and communication to elevate your digital journey.
              </p>
            </div>
          </div>
          
          {/* Floating navigation dots */}
          <div className="hidden lg:flex flex-col fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
            {services.map((service, index) => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="w-3 h-3 rounded-full border border-purple-300 hover:bg-purple-300 transition-colors relative group"
                aria-label={`Jump to ${service.title}`}
              >
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Services Section with Enhanced Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-24">
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
                        <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <Badge variant="outline" className="border-purple-300 text-purple-300">
                          {service.price}
                        </Badge>
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 group">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-8 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-gray-900">{service.clients}</div>
                          <div className="text-gray-600 text-sm">Happy Clients</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-gray-900">99.9%</div>
                          <div className="text-gray-600 text-sm">Uptime</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-gray-900">24/7</div>
                          <div className="text-gray-600 text-sm">Support</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                          Get Started
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                        >
                          Request Demo
                        </Button>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-purple-300/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-xl relative z-10 group-hover:scale-[1.01] transition-transform"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl z-10"></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section with Enhanced Visuals */}
        <section className="py-20 bg-white text-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-300 rounded-full animate-pulse delay-500"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Talk to our experts to create, launch and scale your digital solutions — the SunRayz way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white border-black text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Talk to Us
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
              >
                View Demos
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}