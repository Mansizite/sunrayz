"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Smartphone, Globe, CreditCard, Cloud, Bot, Users, Building2, Zap, Shield } from "lucide-react"

const services = [
  {
    title: "School ERP System",
    description:
      "Comprehensive Enterprise Resource Planning solution designed specifically for educational institutions",
    image: "/placeholder.svg?height=300&width=400",
    icon: Database,
    price: "Starting at $299/month",
    features: ["Student Management", "Fee Processing", "Academic Records", "Staff Management"],
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications for seamless educational experience",
    image: "/placeholder.svg?height=300&width=400",
    icon: Smartphone,
    price: "Starting at $199/month",
    features: ["Student App", "Parent Communication", "Teacher Tools", "Real-time Tracking"],
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications for educational institutions",
    image: "/placeholder.svg?height=300&width=400",
    icon: Globe,
    price: "Starting at $149/month",
    features: ["Responsive Design", "CMS Integration", "SEO Optimization", "Online Portals"],
  },
  {
    title: "RFID Solutions",
    description: "Advanced RFID-based identification and tracking systems for enhanced security",
    image: "/placeholder.svg?height=300&width=400",
    icon: CreditCard,
    price: "Starting at $399/month",
    features: ["Smart ID Cards", "Attendance Tracking", "Access Control", "Parent Alerts"],
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and services for educational institutions",
    image: "/placeholder.svg?height=300&width=400",
    icon: Cloud,
    price: "Starting at $99/month",
    features: ["Cloud Setup", "Data Migration", "24/7 Support", "Cost Optimization"],
  },
  {
    title: "AI Integration",
    description: "Artificial Intelligence and Machine Learning solutions for smart educational systems",
    image: "/placeholder.svg?height=300&width=400",
    icon: Bot,
    price: "Starting at $499/month",
    features: ["AI Analytics", "Chatbot Support", "Predictive Systems", "Smart Recommendations"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gray-900 text-white mb-4 px-6 py-2 rounded-full font-medium">Our Services</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for
            <span className="text-gray-600"> Educational Excellence</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
            From AI-powered ERP systems to advanced RFID solutions, we provide cutting-edge technology that transforms
            how educational institutions operate and engage with their communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-white shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gray-900 text-white border-none">{service.price}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-gray-900 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium">
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Our Development Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your unique requirements", icon: Users },
              { step: "02", title: "Design", desc: "Creating intuitive user experiences", icon: Building2 },
              { step: "03", title: "Development", desc: "Building robust, scalable solutions", icon: Zap },
              { step: "04", title: "Support", desc: "Ongoing maintenance & optimization", icon: Shield },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white shadow-lg rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-gray-900" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
