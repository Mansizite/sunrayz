// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, Target, Eye, Lightbulb, Star, Shield, Zap } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Mission & Vision - SunRayz Technology",
//   description:
//     "Discover our mission to empower education through technology and our vision for the future of learning.",
// }

// const values = [
//   {
//     name: "Innovation",
//     desc: "Constantly pushing technological boundaries to create cutting-edge solutions",
//     icon: Lightbulb,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     name: "Excellence",
//     desc: "Delivering superior quality in every solution and maintaining the highest standards",
//     icon: Star,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     name: "Integrity",
//     desc: "Building trust through transparency, honesty, and ethical business practices",
//     icon: Shield,
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     name: "Impact",
//     desc: "Creating meaningful change in education that positively affects students and educators",
//     icon: Zap,
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function MissionPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Purpose & Direction</h1>
//           <p className="text-xl text-gray-300 max-w-4xl">
//             Guided by our mission to transform education and driven by our vision of a connected learning ecosystem.
//           </p>
//         </div>
//       </div>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 mb-20">
//             {/* Mission */}
//             <Card className="bg-white border-2 border-gray-200 shadow-xl">
//               <CardContent className="p-12">
//                 <div className="flex items-center space-x-4 mb-8">
//                   <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
//                     <Target className="h-8 w-8 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
//                 </div>
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   To empower educational institutions with innovative technology solutions that enhance learning
//                   experiences, streamline operations, and foster academic excellence.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   We believe that every student deserves access to quality education supported by modern technology. Our
//                   mission drives us to create solutions that break down barriers, improve efficiency, and enable
//                   educators to focus on what they do best - teaching and inspiring the next generation.
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Vision */}
//             <Card className="bg-gray-900 text-white shadow-xl">
//               <CardContent className="p-12">
//                 <div className="flex items-center space-x-4 mb-8">
//                   <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
//                     <Eye className="h-8 w-8 text-gray-900" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-white">Our Vision</h2>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed mb-8">
//                   To be the global leader in educational technology, creating a connected ecosystem where students,
//                   teachers, and administrators thrive in a digital-first environment.
//                 </p>
//                 <p className="text-gray-300 leading-relaxed">
//                   We envision a future where technology seamlessly integrates with education, making learning more
//                   personalized, accessible, and effective. Our vision guides us toward creating solutions that not only
//                   meet today's needs but anticipate tomorrow's challenges.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Values Section */}
//           <div>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 These fundamental principles guide every decision we make and every solution we create.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               {values.map((value, index) => {
//                 const IconComponent = value.icon
//                 return (
//                   <div key={index} className="group">
//                     <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//                       <CardContent className="p-8">
//                         <div className="flex items-start space-x-6">
//                           <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
//                             <IconComponent className="h-8 w-8 text-white" />
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.name}</h3>
//                             <p className="text-gray-600 leading-relaxed">{value.desc}</p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Impact Statement */}
//           <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Education</h2>

'use client'

import Link from "next/link"
import { ArrowLeft, Target, Eye, Lightbulb, Star, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const values = [
  {
    name: "Innovation",
    desc: "Constantly pushing technological boundaries to create cutting-edge solutions",
    icon: Lightbulb,
  },
  {
    name: "Excellence",
    desc: "Delivering superior quality in every solution and maintaining the highest standards",
    icon: Star,
  },
  {
    name: "Integrity",
    desc: "Building trust through transparency, honesty, and ethical business practices",
    icon: Shield,
  },
  {
    name: "Impact",
    desc: "Creating meaningful change in education that positively affects students and educators",
    icon: Zap,
  },
]

export default function MissionPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
              Our Purpose <span className="text-purple-300">& Direction</span>
            </h1>
            <p className="text-lg text-purple-100">
              Guided by our mission to transform education and driven by our vision of a connected learning ecosystem.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Mission */}
            <Card className="bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To empower educational institutions with innovative technology solutions that enhance learning
                  experiences, streamline operations, and foster academic excellence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that every student deserves access to quality education supported by modern technology.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white text-black shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To be the global leader in educational technology, creating a connected ecosystem where students,
                  teachers, and administrators thrive in a digital-first environment.
                </p>
                <p className="text-gray-600  leading-relaxed mb-8">
                  We envision a future where technology seamlessly integrates with education, making learning more
                  personalized, accessible, and effective.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every solution we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="group">
                    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Impact */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Education</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              Every feature we develop is guided by our commitment to improving education. We measure success by the
              impact we have on students and educators.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
                <div className="text-gray-600">Students Empowered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Institutions Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
