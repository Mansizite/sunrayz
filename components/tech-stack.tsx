"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Server, Shield, Zap, Award, Building2 } from "lucide-react"

const techCategories = {
  frontend: {
    title: "Frontend Technologies",
    icon: Code,
    technologies: [
      { name: "React", level: 95, description: "Modern UI development" },
      { name: "Next.js", level: 90, description: "Full-stack React framework" },
      { name: "TypeScript", level: 88, description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework" },
    ],
  },
  backend: {
    title: "Backend Technologies",
    icon: Server,
    technologies: [
      { name: "Node.js", level: 93, description: "JavaScript runtime" },
      { name: "Python", level: 88, description: "Versatile programming language" },
      { name: "Java", level: 85, description: "Enterprise-grade applications" },
      { name: "PHP", level: 82, description: "Web development" },
    ],
  },
  database: {
    title: "Database Systems",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", level: 90, description: "Advanced relational database" },
      { name: "MongoDB", level: 87, description: "NoSQL document database" },
      { name: "MySQL", level: 85, description: "Popular relational database" },
      { name: "Redis", level: 83, description: "In-memory data structure store" },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      { name: "AWS", level: 92, description: "Amazon Web Services" },
      { name: "Docker", level: 88, description: "Containerization platform" },
      { name: "Kubernetes", level: 85, description: "Container orchestration" },
      { name: "Google Cloud", level: 82, description: "Google's cloud platform" },
    ],
  },
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative z-10  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
        <Badge className="bg-[#1f1f1f] text-white mb-4 px-6 py-2 rounded-full font-medium">
  Our Tech Arsenal
</Badge>
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
  Empowering Growth with <span className="text-gray-500">Next-Gen Tech</span>
</h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We leverage the latest and most reliable technologies to build robust, scalable, and future-proof solutions
            for educational institutions.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(techCategories).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <Card
                key={key}
                className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                      <IconComponent className="h-8 w-8 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-white font-medium">{tech.name}</span>
                            <p className="text-gray-400 text-sm">{tech.description}</p>
                          </div>
                          <span className="text-gray-300 font-semibold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-white transition-all duration-1000 ease-out"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Certifications & Partnerships */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Certifications & Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "AWS Certified", level: "Advanced", icon: Award },
              { name: "Google Cloud Partner", level: "Premier", icon: Cloud },
              { name: "Microsoft Gold Partner", level: "Gold", icon: Building2 },
              { name: "ISO 27001 Certified", level: "Security", icon: Shield },
            ].map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div
                  key={index}
                  className="text-center bg-gray-700 rounded-2xl p-6 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{cert.name}</h4>
                  <Badge className="bg-gray-900 text-white">{cert.level}</Badge>
                </div>
              )
            })}
          </div>
        </div>

        {/* Development Methodology */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Development Methodology</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agile Development",
                description: "Iterative development with continuous feedback and improvement",
                icon: Zap,
                features: ["Sprint Planning", "Daily Standups", "Code Reviews", "Continuous Integration"],
              },
              {
                title: "DevOps Culture",
                description: "Seamless integration between development and operations",
                icon: Server,
                features: ["CI/CD Pipelines", "Automated Testing", "Infrastructure as Code", "Monitoring & Logging"],
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive testing and quality control processes",
                icon: Shield,
                features: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audits"],
              },
            ].map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white text-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{method.title}</h4>
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
