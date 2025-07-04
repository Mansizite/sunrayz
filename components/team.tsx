// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Linkedin, Twitter, Github, Mail, Users, Award, TrendingUp, Globe } from "lucide-react"

// const teamMembers = [
//   {
//     id: 1,
//     name: "Sachin Deo",
//     position: "Marketing Head & Co-founder",
//     department: "Sales",
//     image: "/placeholder.svg?height=300&width=300",
//     bio: "Marketing strategist and co-founder driving brand growth with a decade of experience in digital education campaigns and customer relations.",
//     expertise: ["Brand Strategy", "Digital Marketing", "Lead Generation"],
//     experience: "10+ years",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "sachin@sunrayztech.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Sambhaji Pawar",
//     position: "Sr. Software Engineer & Founder",
//     department: "Engineering",
//     image: "/placeholder.svg?height=300&width=300",
//     bio: "Founder and senior engineer leading technical architecture with a passion for full-stack development and scalable web solutions.",
//     expertise: ["Full Stack Development", "System Design", "DevOps"],
//     experience: "10+ years",
//     social: {
//       linkedin: "#",
//       github: "#",
//       email: "sambhaji@sunrayztech.com",
//     },
//   },
//   {
//     id: 3,
//     name: "Preeti Sawant",
//     position: "Sr. Software Engineer",
//     department: "Engineering",
//     image: "/images/preeti.jpg",
//     bio: "Experienced software engineer with a strong background in backend systems, APIs, and agile team collaboration.",
//     expertise: ["Backend Development", "API Design", "Agile Practices"],
//     experience: "9+ years",
//     social: {
//       linkedin: "#",
//       github: "#",
//       email: "preeti@sunrayztech.com",
//     },
//   },
// ]


// export default function Team() {
//   return (
//     <section id="team" className="py-20 relative z-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <Badge className="bg-gray-900 text-white mb-4 px-6 py-2 rounded-full font-medium">Our Team</Badge>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Meet the Brilliant Minds
//             <span className="text-gray-600"> Behind SunRayz</span>
//           </h2>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
//             Our diverse team of experts combines deep technical knowledge with educational expertise to create solutions
//             that truly make a difference in the lives of students and educators.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

//           {teamMembers.map((member) => (
//             <Card
//               key={member.id}
//               className="bg-white shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-4 right-4">
//                   <Badge className="bg-gray-900 text-white border-none">{member.department}</Badge>
//                 </div>
//                 <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="flex space-x-2 justify-center">
//                     {member.social.linkedin && (
//                       <Button
//                         size="sm"
//                         className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
//                       >
//                         <Linkedin className="h-4 w-4" />
//                       </Button>
//                     )}
//                     {member.social.twitter && (
//                       <Button
//                         size="sm"
//                         className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
//                       >
//                         <Twitter className="h-4 w-4" />
//                       </Button>
//                     )}
//                     {member.social.github && (
//                       <Button
//                         size="sm"
//                         className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
//                       >
//                         <Github className="h-4 w-4" />
//                       </Button>
//                     )}
//                     {member.social.email && (
//                       <Button
//                         size="sm"
//                         className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
//                       >
//                         <Mail className="h-4 w-4" />
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                 <p className="text-gray-600 font-medium mb-3">{member.position}</p>
//                 <p className="text-gray-500 text-sm mb-4 line-clamp-3">{member.bio}</p>

//                 {/* Expertise Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {member.expertise.slice(0, 2).map((skill, index) => (
//                     <Badge key={index} className="bg-gray-100 text-gray-700 border border-gray-300 text-xs">
//                       {skill}
//                     </Badge>
//                   ))}
//                   {member.expertise.length > 2 && (
//                     <Badge className="bg-gray-100 text-gray-700 border border-gray-300 text-xs">
//                       +{member.expertise.length - 2}
//                     </Badge>
//                   )}
//                 </div>

//                 {/* Experience */}
//                 <div className="text-center">
//                   <div className="text-gray-900 font-bold">{member.experience}</div>
//                   <div className="text-gray-500 text-xs">Experience</div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Team Excellence */}
//         <div className="bg-gray-900 rounded-2xl p-8 text-white mb-16">
//           <h3 className="text-3xl font-bold text-white text-center mb-12">Team Excellence</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { metric: "50+", label: "Team Members", icon: Users },
//               { metric: "15+", label: "Years Avg Experience", icon: TrendingUp },
//               { metric: "25+", label: "Certifications", icon: Award },
//               { metric: "10+", label: "Countries Represented", icon: Globe },
//             ].map((item, index) => {
//               const IconComponent = item.icon
//               return (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
//                     <IconComponent className="h-8 w-8" />
//                   </div>
//                   <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
//                   <div className="text-gray-300 font-medium">{item.label}</div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Join Our Team CTA */}
//         <div className="text-center bg-white rounded-2xl p-12 shadow-xl">
//           <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Mission?</h3>
//           <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
//             We're always looking for passionate individuals who want to make a difference in education through
//             technology.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
//               View Open Positions
//             </Button>
//             <Button
//               variant="outline"
//               className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold"
//             >
//               Learn About Our Culture
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Users,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sachin Deo",
    position: "Marketing Head & Co-founder",
    department: "Sales",
    image: "/images/sachin.jpg",
    bio: "Marketing strategist and co-founder driving brand growth with a decade of experience in digital education campaigns and customer relations.",
    expertise: ["Brand Strategy", "Digital Marketing", "Lead Generation"],
    experience: "10+ years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sachin@sunrayztech.com",
    },
  },
  {
    id: 2,
    name: "Sambhaji Pawar",
    position: "Sr. Software Engineer & Founder",
    department: "Engineering",
    image: "/images/sambhaji.jpg",
    bio: "Founder and senior engineer leading technical architecture with a passion for full-stack development and scalable web solutions.",
    expertise: ["Full Stack Development", "System Design", "DevOps"],
    experience: "10+ years",
    social: {
      linkedin: "#",
      github: "#",
      email: "sambhaji@sunrayztech.com",
    },
  },
  {
    id: 3,
    name: "Preeti Sawant",
    position: "Sr. Software Engineer",
    department: "Engineering",
    image: "/images/preeti.jpg",
    bio: "Experienced software engineer with a strong background in backend systems, APIs, and agile team collaboration.",
    expertise: ["Backend Development", "API Design", "Agile Practices"],
    experience: "9+ years",
    social: {
      linkedin: "#",
      github: "#",
      email: "preeti@sunrayztech.com",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gray-900 text-white mb-4 px-6 py-2 rounded-full font-medium">Our Team</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the Brilliant Minds <span className="text-gray-600">Behind SunRayz</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts combines deep technical knowledge with educational expertise to create solutions
            that truly make a difference in the lives of students and educators.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-white shadow-lg transition duration-300 hover:shadow-2xl group overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
              <div className="relative w-full h-72 bg-white flex items-center justify-center">
  <Image
    src={member.image}
    alt={member.name}
    width={200}
    height={200}
    className="object-contain rounded-full border border-gray-200 shadow-sm"
  />
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-900 text-white">{member.department}</Badge>
                </div>
                <div className="absolute bottom-4 w-full px-4 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center gap-2">
                  {member.social.linkedin && (
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.email && (
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.position}</p>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">{member.bio}</p>

                {/* Expertise */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map((skill, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-700 border border-gray-300 text-xs">{skill}</Badge>
                  ))}
                  {member.expertise.length > 2 && (
                    <Badge className="bg-gray-100 text-gray-700 border border-gray-300 text-xs">
                      +{member.expertise.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="text-center">
                  <div className="text-gray-900 font-bold">{member.experience}</div>
                  <div className="text-gray-500 text-xs">Experience</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Excellence */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Team Excellence</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "Team Members", icon: Users },
              { metric: "15+", label: "Years Avg Experience", icon: TrendingUp },
              { metric: "25+", label: "Certifications", icon: Award },
              { metric: "10+", label: "Countries Represented", icon: Globe },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold">{item.metric}</div>
                  <div className="text-gray-300">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl text-center p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Mission?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in education through
            technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
              View Open Positions
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
