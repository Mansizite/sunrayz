// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Our Story - SunRayz Technology",
//   description: "Learn about the journey of SunRayz Technology from a small startup to a leading EdTech company.",
// }

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">From Vision to Reality</h1>
//           <p className="text-xl text-gray-300 max-w-4xl">
//             The journey of SunRayz Technology began with a simple belief: that technology could transform education and
//             make learning more accessible, engaging, and effective for everyone.
//           </p>
//         </div>
//       </div>

//       {/* Story Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 In 2015, three passionate individuals - an educator, a technologist, and a visionary entrepreneur - came
//                 together with a shared dream. They witnessed firsthand the challenges faced by educational institutions
//                 in managing their operations efficiently while providing quality education.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Traditional methods were time-consuming, error-prone, and often created barriers between schools,
//                 students, and parents. They knew technology could bridge these gaps and create a more connected
//                 educational ecosystem.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 With limited resources but unlimited determination, they started SunRayz Technology in a small office,
//                 working day and night to build solutions that would make a real difference in the education sector.
//               </p>
//             </div>
//             <div>
//               <img
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="SunRayz Technology founders"
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Timeline */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey Through the Years</h2>
//             <div className="space-y-12">
//               {timeline.map((item, index) => {
//                 const IconComponent = item.icon
//                 return (
//                   <div
//                     key={index}
//                     className={`grid lg:grid-cols-2 gap-12 items-center ${
//                       index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
//                     }`}
//                   >
//                     <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                       <div className="flex items-center space-x-4 mb-6">
//                         <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-white" />
//                         </div>
//                         <div className="text-3xl font-bold text-gray-900">{item.year}</div>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.event}</h3>
//                       <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
//                     </div>
//                     <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.event}
//                         className="w-full h-64 object-cover rounded-2xl shadow-xl"
//                       />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Current Stats */}
//           <div className="bg-gray-900 rounded-2xl p-12 text-white text-center">
//             <h2 className="text-3xl font-bold mb-12">Where We Stand Today</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-gray-300">Educational Institutions</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">1M+</div>
//                 <div className="text-gray-300">Students Managed</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">50+</div>
//                 <div className="text-gray-300">Team Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-gray-300">Countries Served</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Our Story - SunRayz Technology",
//   description: "Learn about the journey of SunRayz Technology from a small startup to a leading EdTech company.",
// }

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">From Vision to Reality</h1>
//           <p className="text-xl text-gray-300 max-w-4xl">
//             The journey of SunRayz Technology began with a simple belief: that technology could transform education and
//             make learning more accessible, engaging, and effective for everyone.
//           </p>
//         </div>
//       </div>

//       {/* Story Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 In 2015, three passionate individuals - an educator, a technologist, and a visionary entrepreneur - came
//                 together with a shared dream. They witnessed firsthand the challenges faced by educational institutions
//                 in managing their operations efficiently while providing quality education.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Traditional methods were time-consuming, error-prone, and often created barriers between schools,
//                 students, and parents. They knew technology could bridge these gaps and create a more connected
//                 educational ecosystem.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 With limited resources but unlimited determination, they started SunRayz Technology in a small office,
//                 working day and night to build solutions that would make a real difference in the education sector.
//               </p>

//               {/* About the Company Section */}
//               <div className="mt-10 space-y-6 text-gray-600 text-lg leading-relaxed">
//                 <p>
//                   SunRayz Technology provides services in software applications, extensively used in different kinds of business processes.
//                   Our professionals help create interactive websites and software applications, as well as multimedia presentations using the latest technology.
//                   We have developed numerous attractive web applications and software, and have invested substantially in people, processes, research, and support 
//                   to ensure our customers stay ahead of the competition. Our commitment to quality and service has earned us recognition from our clients.
//                 </p>
//                 <p>
//                   We always work with the customers' best interests in mind, believing that if we take care of our customers' goals, they will take care of ours.
//                 </p>
//                 <p>
//                   SunRayz Technology is engaged in the design, development, production, and marketing of hi-tech products in the field of Electronics & IT.
//                   With a world-class working environment and more than 5 years of track record, we continue to push the boundaries of innovation.
//                 </p>
//                 <p>
//                   Our unique methodology and process help transform clients’ businesses to remain competitive and gain maximum benefits.
//                   We provide client-centric, cost-effective solutions across domains such as ERP, e-Billing, stock management, and e-learning.
//                 </p>
//                 <p>
//                   We specialize in custom software development, mobile application development, .NET solutions, and website design and development.
//                   Our clients span global markets and multiple sectors, including education and enterprise resource planning.
//                 </p>
//                 <p>
//                   SunRayz Technology believes the true worth of technology lies in improving lives.
//                   Our solutions are crafted to deliver high reliability and top-notch quality, and we take pride in playing a small but meaningful role in making the world a better, happier place.
//                 </p>
//               </div>
//             </div>

//             <div>
//               <img
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="SunRayz Technology founders"
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Timeline */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey Through the Years</h2>
//             <div className="space-y-12">
//               {timeline.map((item, index) => {
//                 const IconComponent = item.icon
//                 return (
//                   <div
//                     key={index}
//                     className={`grid lg:grid-cols-2 gap-12 items-center ${
//                       index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
//                     }`}
//                   >
//                     <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                       <div className="flex items-center space-x-4 mb-6">
//                         <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-white" />
//                         </div>
//                         <div className="text-3xl font-bold text-gray-900">{item.year}</div>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.event}</h3>
//                       <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
//                     </div>
//                     <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.event}
//                         className="w-full h-64 object-cover rounded-2xl shadow-xl"
//                       />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Current Stats */}
//           <div className="bg-gray-900 rounded-2xl p-12 text-white text-center">
//             <h2 className="text-3xl font-bold mb-12">Where We Stand Today</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-gray-300">Educational Institutions</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">1M+</div>
//                 <div className="text-gray-300">Students Managed</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">50+</div>
//                 <div className="text-gray-300">Team Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-gray-300">Countries Served</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar" // Add Navbar import

// export const metadata: Metadata = {
//   title: "Our Story - SunRayz Technology",
//   description: "Learn about the journey of SunRayz Technology from a small startup to a leading EdTech company.",
// }

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Header */}
//       <div className="relative overflow-hidden py-28 bg-black text-white">
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
//               From Vision to Reality <span className="text-purple-300">& Beyond</span>
//             </h1>
//             <p className="text-lg text-purple-100">
//               Discover the journey of SunRayz Technology from a small startup to a global leader in EdTech solutions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Our Story Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 mb-20">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 In 2015, three passionate individuals - an educator, a technologist, and a visionary entrepreneur -
//                 came together to transform education with technology. With limited resources but an unlimited drive, they started SunRayz Technology.
//               </p>
//             </div>

//             <div>
//               <img
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="SunRayz Technology founders"
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <div>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey Through the Years</h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {timeline.map((item, index) => {
//                 const IconComponent = item.icon
//                 return (
//                   <div
//                     key={index}
//                     className="group transition-transform transform hover:scale-105"
//                   >
//                     <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 rounded-xl">
//                       <div className="flex items-center space-x-6 mb-6">
//                         <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-white" />
//                         </div>
//                         <div className="text-2xl font-bold text-gray-900">{item.year}</div>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.event}</h3>
//                       <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Current Stats */}
//           <div className="mt-20 bg-gray-50 p-12 rounded-2xl text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Where We Stand Today</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-gray-600">Educational Institutions</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">1M+</div>
//                 <div className="text-gray-600">Students Empowered</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">50+</div>
//                 <div className="text-gray-600">Team Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-gray-600">Countries Served</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }
// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"
// import Image from "next/image" // Importing the Image component

// export const metadata: Metadata = {
//   title: "Our Story - SunRayz Technology",
//   description: "Learn about the journey of SunRayz Technology from a small startup to a leading EdTech company.",
// }

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/images/2015-foundation.jpg", // Add relative image path or URL
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/images/first-client.jpg", // Add relative image path or URL
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/images/mobile-revolution.jpg", // Add relative image path or URL
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/images/ai-integration.jpg", // Add relative image path or URL
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/images/global-expansion.jpg", // Add relative image path or URL
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/images/next-generation.jpg", // Add relative image path or URL
//   },
// ]

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Header */}
//       <div className="relative overflow-hidden py-28 bg-black text-white">
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
//               From Vision to Reality <span className="text-purple-300">& Beyond</span>
//             </h1>
//             <p className="text-lg text-purple-100">
//               Discover the journey of SunRayz Technology from a small startup to a global leader in EdTech solutions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Our Story Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 mb-20">
//             {/* About SunRayz Technology */}
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">About SunRayz Technology</h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 At **SunRayz Technology**, we specialize in providing cutting-edge **software applications** extensively used in various business processes. Our professional team is dedicated to creating interactive **websites**, **software applications**, and **multimedia presentations** that leverage the latest technologies to meet our clients' needs.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Over the years, we have successfully developed numerous **web applications** and **software solutions**, investing heavily in our team, processes, research, and support. This continuous investment ensures that our clients stay ahead of the competition and continue to lead in their respective industries. Our commitment to **quality** and **service excellence** has earned us recognition and trust from our clients, reinforcing our reputation as a reliable and innovative partner.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 We believe in the principle of working closely with our clients and always keeping their best interests and objectives at the forefront. Our approach is simple: if we take care of the client's interests, they will naturally take care of ours. This philosophy has allowed us to build lasting relationships with our clients, empowering them to reach new heights of success.
//               </p>
//             </div>

//             <div>
//               <Image
//                 src="/images/founders.jpg" // Use a relative path or an external URL
//                 alt="SunRayz Technology founders"
//                 width={600} // Set image width
//                 height={500} // Set image height
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <div>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey Through the Years</h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {timeline.map((item, index) => {
//                 const IconComponent = item.icon
//                 return (
//                   <div
//                     key={index}
//                     className="group transition-transform transform hover:scale-105"
//                   >
//                     <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 rounded-xl">
//                       <div className="flex items-center space-x-6 mb-6">
//                         <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-white" />
//                         </div>
//                         <div className="text-2xl font-bold text-gray-900">{item.year}</div>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.event}</h3>
//                       <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>

//                       {/* Timeline Image */}
//                       <Image
//                         src={item.image} // Relative image path or URL
//                         alt={item.event}
//                         width={600} // Set image width
//                         height={400} // Set image height
//                         className="w-full h-72 object-cover rounded-lg mt-6"
//                       />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Current Stats */}
//           <div className="mt-20 bg-gray-50 p-12 rounded-2xl text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Where We Stand Today</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-gray-600">Educational Institutions</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">1M+</div>
//                 <div className="text-gray-600">Students Empowered</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">50+</div>
//                 <div className="text-gray-600">Team Members</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-gray-600">Countries Served</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }
// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"
// import Image from "next/image"

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/images/2015-foundation.jpg",
//     color: "bg-gray-800"
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/images/first-client.jpg",
//     color: "bg-gray-700"
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/images/mobile-revolution.jpg",
//     color: "bg-gray-600"
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/images/ai-integration.jpg",
//     color: "bg-gray-500"
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/images/global-expansion.jpg",
//     color: "bg-gray-400"
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/images/next-generation.jpg",
//     color: "bg-gray-300"
//   },
// ]

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen ">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative overflow-hidden py-32 bg-gradient-to-br from-black to-gray-800 text-white">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"></div>
//           <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
//           <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-300 rounded-full opacity-10 blur-xl"></div>
//         </div>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <Link
//             href="/"
//             className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-6 group"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//             Back to Home
//           </Link>
          
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Journey</span>
//             </h1>
//             <p className="text-xl text-gray-100 max-w-2xl">
//               From humble beginnings to becoming a leader in EdTech innovation - this is our story.
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* About Section */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-gray-100 mb-8">
//                 Pioneering <span className="text-gray-500">EdTech</span> Solutions
//               </h2>
              
//               <div className="space-y-6">
//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   At <span className="font-semibold text-gray-200">SunRayz Technology</span>, we specialize in creating transformative digital experiences for the education sector. Our journey began with a simple mission: to bridge the gap between technology and education.
//                 </p>
                
//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   What started as a small team of passionate developers has grown into an industry leader, serving hundreds of institutions worldwide. Our commitment to innovation and excellence has been the cornerstone of our success.
//                 </p>
                
//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   We believe in the power of technology to democratize education and create opportunities for learners everywhere. This belief drives every solution we create.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   SunRayz Technology provides services in software applications, extensively used in different kinds of business processes. Our professionals help in creating interactive Websites, Software Applications, and Multimedia Presentations using the latest technology. We have developed numerous attractive web applications and software solutions, having invested substantially in people, processes, research, and support to ensure that our customers stay ahead of the competition and lead in their respective industries.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   Our commitment to quality and service has earned us the recognition and trust of our customers. We, at SunRayz Technology, always work with the customer's best interests and objectives in mind. We believe that if we take care of the customers' interests, the customers will automatically take care of ours.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   SunRayz Technology is also engaged in the design, development, production, and marketing of hi-tech products in the field of Electronics & IT, with world-class products and a working environment, boasting more than 5 years of enviable track record.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   Our unique methodology and process help transform our clients' businesses to stay competitive and attain maximum benefits. Our foremost priority is to serve our clients' needs and keep them absolutely satisfied with our services, products, and consultation. We provide client-centric and cost-effective solutions tailored to the specific needs of their businesses.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   We provide high-quality and cost-effective Custom Software Development for our global clients. We have extensive experience in Mobile Application Development, .Net development, Website Design & Development. Some of our focus industries include ERP, e-Billing, Stock Management, e-Class, and the Education Sector.
//                 </p>

//                 <p className="text-gray-400 text-lg leading-relaxed">
//                   SunRayz Technology believes that the real worth of technology lies in making a difference in the lives of people. Our solutions are in tune with this objective and are characterized by top-notch quality and high reliability. We pride ourselves on the fact that our quality technology is playing a small but important role in making this world a better and happier place.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/founders.jpg"
//                   alt="SunRayz Technology team"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
//                 <div className="text-gray-600 font-bold text-xl">2015</div>
//                 <div className="text-gray-400">Our founding team</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Timeline Section */}
//           <div className="mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-gray-100 mb-4">Milestones in Innovation</h2>
//               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                 Key moments that shaped our journey and the EdTech landscape
//               </p>
//             </motion.div>

//             <div className="relative">
//               {/* Timeline line */}
//               <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-gray-700 to-gray-500 -ml-0.5"></div>
              
//               <div className="space-y-16 lg:space-y-32">
//                 {timeline.map((item, index) => {
//                   const IconComponent = item.icon
//                   const isEven = index % 2 === 0
                  
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className={`relative lg:flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
//                     >
//                       {/* Year marker for desktop */}
//                       <div className="hidden lg:flex w-1/2 justify-center">
//                         <div className={`${isEven ? 'lg:mr-8 text-right' : 'lg:ml-8 text-left'} w-full max-w-md`}>
//                           <div className="inline-block">
//                             <div className="text-5xl font-bold text-gray-300">{item.year}</div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Timeline dot */}
//                       <div className="hidden lg:block absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-white border-4 border-gray-500 z-10"></div>
                      
//                       {/* Content card */}
//                       <div className={`${isEven ? 'lg:ml-8' : 'lg:mr-8'} w-full lg:w-1/2`}>
//                         <div className={`p-1 rounded-2xl ${item.color} bg-opacity-50 hover:bg-opacity-70 transition-all duration-300`}>
//                           <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
//                             <div className="flex items-center gap-4 mb-6">
//                               <div className={`p-3 rounded-lg ${item.color}`}>
//                                 <IconComponent className="h-6 w-6 text-gray-800" />
//                               </div>
//                               <div className="lg:hidden text-2xl font-bold text-gray-700">{item.year}</div>
//                             </div>
                            
//                             <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.event}</h3>
//                             <p className="text-gray-600 mb-6">{item.desc}</p>
                            
//                             <div className="relative aspect-video w-full rounded-lg overflow-hidden">
//                               <Image
//                                 src={item.image}
//                                 alt={item.event}
//                                 fill
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-3xl text-center text-white"
//           >
//             <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
            
//             <div className="grid md:grid-cols-4 gap-8">
//               {[{ value: "500+", label: "Educational Institutions" },
//                 { value: "1M+", label: "Students Empowered" },
//                 { value: "50+", label: "Team Members" },
//                 { value: "15+", label: "Countries Served" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
//                 >
//                   <div className="text-5xl font-bold mb-2">{stat.value}</div>
//                   <div className="text-gray-300">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Call to Action */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mt-24 text-center"
//           >
//             <h2 className="text-3xl font-bold text-gray-100 mb-6">Join Us on This Journey</h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
//               Interested in being part of our story? Explore career opportunities or partner with us to shape the future of education technology.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link href="/careers" className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all">
//                 Career Opportunities
//               </Link>
//               <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-300 rounded-lg transition-all">
//                 Partner With Us
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"
// import Image from "next/image"

// const timeline = [
//   {
//     year: "2015",
//     event: "Company Founded",
//     desc: "Started with 3 developers in a small office with a vision to transform education through technology",
//     icon: Building2,
//     image: "/images/2015-foundation.jpg",
//     color: "bg-gray-900"
//   },
//   {
//     year: "2017",
//     event: "First Major Client",
//     desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
//     icon: Users,
//     image: "/images/first-client.jpg",
//     color: "bg-gray-900"
//   },
//   {
//     year: "2019",
//     event: "Mobile Revolution",
//     desc: "Launched mobile applications for students and parents, revolutionizing school communication",
//     icon: Zap,
//     image: "/images/mobile-revolution.jpg",
//     color: "bg-gray-900"
//   },
//   {
//     year: "2021",
//     event: "AI Integration",
//     desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
//     icon: Lightbulb,
//     image: "/images/ai-integration.jpg",
//     color: "bg-gray-900"
//   },
//   {
//     year: "2023",
//     event: "Global Expansion",
//     desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
//     icon: Trophy,
//     image: "/images/global-expansion.jpg",
//     color: "bg-gray-900"
//   },
//   {
//     year: "2025",
//     event: "Next Generation",
//     desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
//     icon: Star,
//     image: "/images/next-generation.jpg",
//     color: "bg-gray-900"
//   },
// ]

// export default function OurStoryPage() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <Navbar />

//       {/* Hero */}
//       <div className="relative overflow-hidden py-28 bg-black text-white">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"></div>
//           <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
//           <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-300 rounded-full opacity-10 blur-xl"></div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <Link
//             href="/"
//             className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-6 group"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//             Back to Home
//           </Link>

//           <div className="max-w-3xl">
//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//               Our Story <span className="text-gray-300">Through Time</span>
//             </h1>
//             <p className="text-lg text-gray-100">
//               A journey of innovation and growth that transformed how education connects with technology.
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Timeline Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Milestones</h2>
//             <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//               Each year brought new innovations and partnerships that shaped our path forward.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {timeline.map((item, index) => {
//               const IconComponent = item.icon
//               return (
//                 <div key={index} className="group">
//                   <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl">
//                     <div className="p-8">
//                       <div className="flex items-start space-x-6 mb-6">
//                         <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
//                           <IconComponent className="h-8 w-8 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.event}</h3>
//                           <p className="text-sm text-gray-500">{item.year}</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
//                       <div className="relative aspect-video w-full rounded-lg overflow-hidden">
//                         <Image
//                           src={item.image}
//                           alt={item.event}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Stats */}
//           <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">By the Numbers</h2>
//             <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
//               A quick glance at the impact we've made across the world.
//             </p>
//             <div className="grid md:grid-cols-3 gap-8 mt-12">
//               <div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
//                 <div className="text-gray-600">Students Empowered</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
//                 <div className="text-gray-600">Institutions Transformed</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
//                 <div className="text-gray-600">Countries Reached</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Building2, Users, Zap, Lightbulb, Trophy, Star } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"

const timeline = [
  {
    year: "2015",
    event: "Company Founded",
    desc: "Started with 3 developers in a small office with a vision to transform education through technology",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-gray-900"
  },
  {
    year: "2017",
    event: "First Major Client",
    desc: "Deployed our first ERP system for 50+ schools, marking our entry into the education sector",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-gray-900"
  },
  {
    year: "2019",
    event: "Mobile Revolution",
    desc: "Launched mobile applications for students and parents, revolutionizing school communication",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-gray-900"
  },
  {
    year: "2021",
    event: "AI Integration",
    desc: "Introduced AI-powered analytics and machine learning capabilities to our platform",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
    color: "bg-gray-900"
  },
  {
    year: "2023",
    event: "Global Expansion",
    desc: "Expanded operations globally, now serving 500+ institutions across multiple countries",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-gray-900"
  },
  {
    year: "2025",
    event: "Next Generation",
    desc: "Leading EdTech innovation with cutting-edge solutions and emerging technologies",
    icon: Star,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "bg-gray-900"
  },
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section with Enhanced Background */}
      <div className="relative overflow-hidden py-28 bg-black text-white">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full opacity-5"
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-300 rounded-full opacity-10 blur-xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-6 group">
            <motion.div whileHover={{ x: -5 }} className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </motion.div>
          </Link>

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Our Story <span className="text-gray-300">Through Time</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-100/90 leading-relaxed"
            >
              A journey of innovation and growth that transformed how education connects with technology.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Company Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Company</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <p>
                SunRayz Technology provides services in software applications, extensively used in different kinds of business processes.
                Our professionals help in creating interactive websites, software applications, and multimedia presentations using the latest technology.
              </p>
              <p>
                We have delivered many attractive web applications and software, having invested substantially in people, processes, research,
                and support to ensure our customers stay ahead of the competition.
              </p>
              <p>
                Our commitment to quality and service has earned us recognition from our customers.
                At SunRayz Technology, we always work with the customers' best interests and objectives in mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <p>
                SunRayz Technology is engaged in the design, development, production, and marketing of hi-tech products in the field of Electronics & IT,
                with world-class products, a dynamic working environment, and more than 5 years of enviable track record.
              </p>
              <p>
                We specialize in high-quality and cost-effective custom software development for global clients.
                Our extensive experience includes mobile application development, .NET development, website design & development.
              </p>
              <p>
                SunRayz Technology believes the real worth of technology lies in making a difference in people's lives.
                Our solutions are driven by this purpose, marked by top-notch quality and high reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Each year brought new innovations and partnerships that shaped our path forward.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group ${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:mt-20'}`}
                  >
                    <div className="relative">
                      {/* Timeline dot for desktop */}
                      <div className="hidden lg:block absolute top-8 w-5 h-5 rounded-full bg-gray-900 border-4 border-white transform -translate-y-1/2 z-10"
                        style={{ 
                          left: isEven ? 'calc(100% - 10px)' : 'auto',
                          right: isEven ? 'auto' : 'calc(100% - 10px)'
                        }}
                      ></div>
                      
                      <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl overflow-hidden h-full flex flex-col">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.event}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            quality={90}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 flex-grow">
                          <div className="flex items-start space-x-6 mb-6">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                              <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.event}</h3>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                                <p className="text-sm text-gray-500">Milestone</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white rounded-full opacity-5"></div>
              <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-white rounded-full opacity-5"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">By the Numbers</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                A quick glance at the impact we've made across the world.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: "1M+", label: "Students Empowered" },
                  { value: "500+", label: "Institutions Transformed" },
                  { value: "15+", label: "Countries Reached" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Be part of the next chapter in our story as we continue to innovate and transform education technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
              >
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium shadow-sm transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}