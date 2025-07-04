import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Play, Users, TrendingUp, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio - SunRayz Technology",
  description: "Explore our successful projects and case studies across various educational institutions.",
}

const portfolioItems = [
  {
    id: 1,
    title: "Delhi Public School ERP",
    category: "ERP System",
    description: "Complete school management system serving 15,000+ students across 25 branches",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: ["Student Management", "Fee Processing", "Academic Records", "Parent Portal"],
    stats: { students: "15,000+", schools: "25", years: "3" },
    results: [
      "50% reduction in administrative time",
      "99.9% system uptime achieved",
      "Improved parent satisfaction by 40%",
      "Streamlined fee collection process",
    ],
  },
  {
    id: 2,
    title: "Ryan International Mobile App",
    category: "Mobile App",
    description: "Cross-platform mobile application for students, parents, and teachers",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    features: ["Real-time Notifications", "Attendance Tracking", "Assignment Submission", "Parent Communication"],
    stats: { downloads: "50K+", rating: "4.8", schools: "12" },
    results: [
      "80% increase in parent engagement",
      "4.8 star rating on app stores",
      "25% reduction in phone calls to school",
      "Real-time communication established",
    ],
  },
  {
    id: 3,
    title: "Kendriya Vidyalaya Portal",
    category: "Web Portal",
    description: "Comprehensive web portal for government school network",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: ["Multi-school Management", "Centralized Reporting", "Teacher Training", "Resource Sharing"],
    stats: { schools: "100+", users: "25K+", uptime: "99.9%" },
    results: [
      "Unified platform for 100+ schools",
      "Centralized data management",
      "Improved resource sharing",
      "Enhanced teacher collaboration",
    ],
  },
  {
    id: 4,
    title: "Smart Campus RFID System",
    category: "RFID Solution",
    description: "Advanced RFID-based campus management for premium institutions",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["IoT", "Python", "React", "MySQL"],
    features: ["Student Tracking", "Access Control", "Attendance Automation", "Parent Alerts"],
    stats: { cards: "10K+", readers: "200+", accuracy: "99.8%" },
    results: [
      "100% automated attendance tracking",
      "Enhanced campus security",
      "Real-time parent notifications",
      "Reduced manual errors by 95%",
    ],
  },
  {
    id: 5,
    title: "University Cloud Infrastructure",
    category: "Cloud Services",
    description: "Scalable cloud infrastructure for large university system",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    features: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
    stats: { servers: "50+", uptime: "99.99%", cost_saved: "40%" },
    results: [
      "40% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "Scalable architecture implemented",
      "Disaster recovery plan established",
    ],
  },
  {
    id: 6,
    title: "AI-Powered Learning Analytics",
    category: "AI Integration",
    description: "Machine learning system for personalized student learning paths",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    features: ["Performance Prediction", "Learning Recommendations", "Risk Assessment", "Progress Tracking"],
    stats: { students: "5K+", accuracy: "92%", improvement: "35%" },
    results: [
      "35% improvement in student outcomes",
      "Early identification of at-risk students",
      "Personalized learning paths created",
      "Data-driven decision making enabled",
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Successful Projects &<span className="text-gray-300"> Case Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            Explore our portfolio of successful implementations across various educational institutions, showcasing our
            expertise in delivering cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Portfolio Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className="bg-gray-900 text-white mb-4 px-4 py-2">{item.category}</Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{item.description}</p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <Badge key={idx} className="bg-gray-100 text-gray-700 border border-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(item.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-900">{value}</div>
                        <div className="text-gray-600 text-sm capitalize">{key.replace("_", " ")}</div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h3>
                    <div className="space-y-2">
                      {item.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-4">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-lg"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Project Success Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Client Satisfaction", icon: Users },
              { metric: "45%", label: "Efficiency Improvement", icon: TrendingUp },
              { metric: "99.8%", label: "System Reliability", icon: Shield },
              { metric: "30%", label: "Cost Reduction", icon: Database },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-gray-300 font-medium">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
