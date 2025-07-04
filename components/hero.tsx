// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   ArrowRight,
//   Play,
//   Sparkles,
//   Rocket,
//   Building2,
//   Users,
//   TrendingUp,
//   Shield,
//   Database,
//   Globe,
//   Smartphone,
//   Bot,
// } from "lucide-react"

// export default function Hero() {
//   const [displayedText, setDisplayedText] = useState("")
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isDeleting, setIsDeleting] = useState(false)
//   const fullText = "SunRayz Technology"

//   useEffect(() => {
//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting && currentIndex < fullText.length) {
//           // Typing forward
//           setDisplayedText((prev) => prev + fullText[currentIndex])
//           setCurrentIndex((prev) => prev + 1)
//         } else if (!isDeleting && currentIndex === fullText.length) {
//           // Pause at end before deleting
//           setTimeout(() => setIsDeleting(true), 2000)
//         } else if (isDeleting && displayedText.length > 0) {
//           // Deleting backward
//           setDisplayedText((prev) => prev.slice(0, -1))
//         } else if (isDeleting && displayedText.length === 0) {
//           // Reset for next cycle
//           setIsDeleting(false)
//           setCurrentIndex(0)
//         }
//       },
//       isDeleting ? 100 : 150,
//     ) // Faster deletion, slower typing

//     return () => clearTimeout(timeout)
//   }, [currentIndex, displayedText, isDeleting, fullText])

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
//     >
//       {/* IT Solution Background Images */}
//       <div className="absolute inset-0 overflow-hidden opacity-10">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-12 animate-pulse" style={{marginTop:'100px'}}></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl rotate-45 animate-ping"></div>
//         <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -rotate-12 animate-pulse" style={{marginLeft:'500px'}}></div>
//       </div>

//       {/* Floating IT Icons */}
//       <div className="absolute inset-0 overflow-hidden  " >
//         <div className="absolute top-20 left-20 animate-float ">
//           <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center" style={{marginTop:'100px'}}>
//             <Database className="h-8 w-8 text-blue-600" style={{marginTop:'10px'}}/>
//           </div>
//         </div>
//         <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
//           <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
//             <Globe className="h-8 w-8 text-green-600" />
//           </div>
//         </div>
//         <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "2s" }}>
//           <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
//             <Smartphone className="h-8 w-8 text-purple-600" />
//           </div>
//         </div>
//         <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: "3s" }}>
//           <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
//             <Bot className="h-8 w-8 text-orange-600" />
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-fade-in-up">
//           {/* Badge */}
//           <div className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//             <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
//             <span className="font-medium">Leading IT Solutions Provider 2025</span>
//           </div>

//           {/* Main Heading with Continuous Typing Animation */}
//           <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent min-h-[1.2em]">
//               {displayedText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h1>

//           <div className="mb-8">
//             <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-4 tracking-wide">RAYZ OF INNOVATION</p>
//             <div className="w-32 h-1 bg-gradient-to-r from-gray-700 to-gray-900 mx-auto rounded-full"></div>
//           </div>

//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
//             Transforming Educational Institutions with
//             <span className="text-gray-900 font-semibold"> Next-Generation Software Solutions</span>. From AI-Powered
//             ERP Systems to Advanced RFID Technology.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//             <Button
//               size="lg"
//               className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//             >
//               <Rocket className="mr-2 h-5 w-5" />
//               Explore Solutions
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold rounded-full bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               <Play className="mr-2 h-5 w-5" />
//               Watch Demo
//             </Button>
//           </div>

//           {/* IT Solutions Showcase */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300 mb-12">
//             {[
//               { number: "500+", label: "Schools Served", icon: Building2, color: "from-blue-500 to-blue-600" },
//               { number: "50+", label: "Colleges Connected", icon: Users, color: "from-green-500 to-green-600" },
//               { number: "1M+", label: "Students Managed", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
//               { number: "99.9%", label: "System Uptime", icon: Shield, color: "from-red-500 to-red-600" },
//             ].map((stat, index) => {
//               const IconComponent = stat.icon
//               return (
//                 <div key={index} className="group cursor-pointer">
//                   <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group-hover:bg-gray-50">
//                     <div
//                       className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
//                     >
//                       <IconComponent className="h-6 w-6 text-white" />
//                     </div>
//                     <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
//                       {stat.number}
//                     </h3>
//                     <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* IT Solutions Visual Grid */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//               <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
//                 <div className="text-white text-center">
//                   <Database className="h-16 w-16 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">ERP Systems</h3>
//                   <p className="text-sm opacity-90">Complete School Management</p>
//                 </div>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">School ERP Solutions</h4>
//               <p className="text-gray-600 text-sm">Comprehensive management system for educational institutions</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//               <div className="w-full h-48 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
//                 <div className="text-white text-center">
//                   <Smartphone className="h-16 w-16 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">Mobile Apps</h3>
//                   <p className="text-sm opacity-90">Student & Parent Portals</p>
//                 </div>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Mobile Applications</h4>
//               <p className="text-gray-600 text-sm">Native apps for seamless communication and management</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//               <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center">
//                 <div className="text-white text-center">
//                   <Bot className="h-16 w-16 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">AI Integration</h3>
//                   <p className="text-sm opacity-90">Smart Analytics & Automation</p>
//                 </div>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Solutions</h4>
//               <p className="text-gray-600 text-sm">Machine learning for personalized education experiences</p>
//             </div>
//           </div>

//           {/* Technology Stack Icons */}
//           <div className="flex justify-center items-center space-x-8 opacity-60">
//             {[
//               { icon: Database, label: "Database", color: "text-blue-600" },
//               { icon: Globe, label: "Web", color: "text-green-600" },
//               { icon: Smartphone, label: "Mobile", color: "text-purple-600" },
//               { icon: Bot, label: "AI", color: "text-orange-600" },
//             ].map((tech, index) => (
//               <div key={index} className="group cursor-pointer transition-all duration-300 transform hover:scale-110">
//                 <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-300">
//                   <tech.icon className={`h-6 w-6 ${tech.color} group-hover:scale-110 transition-transform`} />
//                 </div>
//                 <p className="text-xs text-gray-500 mt-2 text-center">{tech.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Play,
  Sparkles,
  Rocket,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Database,
  Globe,
  Smartphone,
  Bot,
} from "lucide-react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = "SunRayz Technology"

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < fullText.length) {
          setDisplayedText((prev) => prev + fullText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        } else if (!isDeleting && currentIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1))
        } else if (isDeleting && displayedText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex(0)
        }
      },
      isDeleting ? 100 : 150
    )

    return () => clearTimeout(timeout)
  }, [currentIndex, displayedText, isDeleting, fullText])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gray-300 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-gray-300 rounded-xl rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 border-2 border-gray-300 rounded-2xl -rotate-12"></div>
      </div>

      {/* Floating IT Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
            <Database className="h-8 w-8 text-gray-800" />
          </div>
        </div>
        <div className="absolute top-40 right-32 animate-float-delay">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
            <Globe className="h-8 w-8 text-gray-800" />
          </div>
        </div>
        <div className="absolute bottom-40 left-32 animate-float-delay-2">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
            <Smartphone className="h-8 w-8 text-gray-800" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delay-3">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
            <Bot className="h-8 w-8 text-gray-800" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full mb-8 shadow-md hover:shadow-lg transition-all duration-300">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="font-medium">Leading IT Solutions Provider 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block min-h-[1.2em]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <div className="mb-10">
            <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-4 tracking-wide">RAYZ OF INNOVATION</p>
            <div className="w-32 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming educational institutions with <span className="font-semibold text-gray-900">next-generation software solutions</span>. 
            From AI-powered ERP systems to advanced RFID technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-full bg-white hover:shadow-md transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Schools Served", icon: Building2 },
              { number: "50+", label: "Colleges Connected", icon: Users },
              { number: "1M+", label: "Students Managed", icon: TrendingUp },
              { number: "99.9%", label: "System Uptime", icon: Shield },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-all">
                      <IconComponent className="h-6 w-6 text-gray-800" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solutions Showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {[
              { 
                title: "ERP Systems", 
                subtitle: "Complete School Management", 
                icon: Database,
                heading: "School ERP Solutions",
                description: "Comprehensive management system for educational institutions"
              },
              { 
                title: "Mobile Apps", 
                subtitle: "Student & Parent Portals", 
                icon: Smartphone,
                heading: "Mobile Applications",
                description: "Native apps for seamless communication and management"
              },
              { 
                title: "AI Integration", 
                subtitle: "Smart Analytics & Automation", 
                icon: Bot,
                heading: "AI-Powered Solutions",
                description: "Machine learning for personalized education experiences"
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center p-4">
                    <solution.icon className="h-12 w-12 mx-auto mb-4 text-gray-800" />
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-sm text-gray-600">{solution.subtitle}</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.heading}</h4>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="text-gray-500 text-sm font-medium mb-4">TRUSTED TECHNOLOGIES</p>
            <div className="flex justify-center items-center space-x-6">
              {[
                { icon: Database, label: "Database" },
                { icon: Globe, label: "Web" },
                { icon: Smartphone, label: "Mobile" },
                { icon: Bot, label: "AI" },
              ].map((tech, index) => (
                <div key={index} className="cursor-pointer transition-all duration-300">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-xs hover:shadow-sm">
                    <tech.icon className="h-6 w-6 text-gray-800 hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-delay-3 {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </section>
  )
}