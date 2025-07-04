"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Delhi Public School ERP",
    category: "ERP System",
    description: "Complete school management system serving 15,000+ students across 25 branches",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: ["Student Management", "Fee Processing", "Academic Records", "Parent Portal"],
    stats: { students: "15,000+", schools: "25", years: "3" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 2,
    title: "Ryan International Mobile App",
    category: "Mobile App",
    description: "Cross-platform mobile application for students, parents, and teachers",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    features: ["Real-time Notifications", "Attendance Tracking", "Assignment Submission", "Parent Communication"],
    stats: { downloads: "50K+", rating: "4.8", schools: "12" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 3,
    title: "Kendriya Vidyalaya Portal",
    category: "Web Portal",
    description: "Comprehensive web portal for government school network",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: ["Multi-school Management", "Centralized Reporting", "Teacher Training", "Resource Sharing"],
    stats: { schools: "100+", users: "25K+", uptime: "99.9%" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 4,
    title: "Smart Campus RFID System",
    category: "RFID Solution",
    description: "Advanced RFID-based campus management for premium institutions",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["IoT", "Python", "React", "MySQL"],
    features: ["Student Tracking", "Access Control", "Attendance Automation", "Parent Alerts"],
    stats: { cards: "10K+", readers: "200+", accuracy: "99.8%" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 5,
    title: "University Cloud Infrastructure",
    category: "Cloud Services",
    description: "Scalable cloud infrastructure for large university system",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    features: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
    stats: { servers: "50+", uptime: "99.99%", cost_saved: "40%" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 6,
    title: "AI-Powered Learning Analytics",
    category: "AI Integration",
    description: "Machine learning system for personalized student learning paths",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    features: ["Performance Prediction", "Learning Recommendations", "Risk Assessment", "Progress Tracking"],
    stats: { students: "5K+", accuracy: "92%", improvement: "35%" },
    liveUrl: "#",
    caseStudyUrl: "#",
  },
]

const categories = [
  "All",
  "ERP System",
  "Mobile App",
  "Web Portal",
  "RFID Solution",
  "Cloud Services",
  "AI Integration",
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4 px-4 py-2">Our Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Successful Projects &<span className="text-orange-400"> Case Studies</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful implementations across various educational institutions, showcasing our
            expertise in delivering cutting-edge technology solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                  : "border-slate-600 text-gray-300 hover:border-orange-500 hover:text-orange-400"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500/90 text-white border-none">{item.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{item.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} className="bg-slate-700/50 text-gray-300 border-slate-600 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies.length > 3 && (
                    <Badge className="bg-slate-700/50 text-gray-300 border-slate-600 text-xs">
                      +{item.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {Object.entries(item.stats).map(([key, value], index) => (
                    <div key={index} className="bg-slate-700/30 rounded-lg p-2">
                      <div className="text-orange-400 font-bold text-sm">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key.replace("_", " ")}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-none"
                  >
                    View Case Study
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Project Success Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Client Satisfaction", icon: "😊" },
              { metric: "45%", label: "Efficiency Improvement", icon: "📈" },
              { metric: "99.8%", label: "System Reliability", icon: "🛡️" },
              { metric: "30%", label: "Cost Reduction", icon: "💰" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <div className="text-gray-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
