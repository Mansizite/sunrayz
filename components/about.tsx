// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Building2, Users, TrendingUp, Shield, BookOpen, Target, Heart, Trophy } from "lucide-react"

// export default function About() {
//   return (
//     <section id="about" className="py-20 relative z-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <Badge className="bg-gray-900 text-white mb-4 px-6 py-2 rounded-full font-medium">
//             About SunRayz Technology
//           </Badge>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Illuminating Education Through
//             <span className="text-gray-600"> Innovation</span>
//           </h2>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
//             Discover our journey, values, and the passionate team behind the technology that's transforming education
//             worldwide.
//           </p>
//         </div>

//         {/* About Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {[
//             {
//               title: "Our Story",
//               desc: "From vision to reality - the journey of SunRayz Technology",
//               icon: BookOpen,
//               link: "/about/story",
//             },
//             {
//               title: "Mission & Vision",
//               desc: "Our purpose and direction in transforming education",
//               icon: Target,
//               link: "/about/mission",
//             },
//             {
//               title: "Company Culture",
//               desc: "Where innovation meets passion in our workplace",
//               icon: Heart,
//               link: "/about/culture",
//             },
//             {
//               title: "Awards",
//               desc: "Recognition and achievements in the EdTech industry",
//               icon: Trophy,
//               link: "/about/awards",
//             },
//           ].map((item, index) => {
//             const IconComponent = item.icon
//             return (
//               <Card
//                 key={index}
//                 className="bg-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
//               >
//                 <CardContent className="p-8 text-center">
//                   <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
//                     <IconComponent className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                   <p className="text-gray-600 mb-6">{item.desc}</p>
//                   <Button
//                     variant="outline"
//                     className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full"
//                   >
//                     Learn More
//                   </Button>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>

//         {/* Stats */}
//         <div className="bg-gray-900 rounded-2xl p-12 text-white">
//           <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: "500+", label: "Schools Served", icon: Building2 },
//               { number: "1M+", label: "Students Managed", icon: Users },
//               { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
//               { number: "99.9%", label: "System Uptime", icon: Shield },
//             ].map((stat, index) => {
//               const IconComponent = stat.icon
//               return (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
//                     <IconComponent className="h-8 w-8" />
//                   </div>
//                   <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
//                   <div className="text-gray-300 font-medium">{stat.label}</div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Users, TrendingUp, Shield, BookOpen, Target, Heart, Trophy } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#1f1f1f] text-white mb-4 px-6 py-2 rounded-full font-medium">
            About SunRayz Technology
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Illuminating Education Through
            <span className="text-gray-600"> Innovation</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our journey, values, and the passionate team behind the technology that's transforming education
            worldwide.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Our Story",
              desc: "From vision to reality - the journey of SunRayz Technology",
              icon: BookOpen,
              link: "/about/story",
            },
            {
              title: "Mission & Vision",
              desc: "Our purpose and direction in transforming education",
              icon: Target,
              link: "/about/mission",
            },
            {
              title: "Company Culture",
              desc: "Where innovation meets passion in our workplace",
              icon: Heart,
              link: "/about/culture",
            },
            {
              title: "Awards",
              desc: "Recognition and achievements in the EdTech industry",
              icon: Trophy,
              link: "/about/awards",
            },
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="bg-[#f9f9f9] shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1f1f1f] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Button
                    variant="outline"
                    className="border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats */}
        <div className="bg-[#1f1f1f] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Schools Served", icon: Building2 },
              { number: "1M+", label: "Students Managed", icon: Users },
              { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
              { number: "99.9%", label: "System Uptime", icon: Shield },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white text-[#1f1f1f] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
