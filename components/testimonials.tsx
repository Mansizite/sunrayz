"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Users, TrendingUp, Shield } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    position: "Principal",
    organization: "Delhi Public School, Gurgaon",
    image: "https://tse3.mm.bing.net/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?pid=Api&P=0&h=180",
    rating: 5,
    testimonial:
      "SunRayz Technology has completely transformed our school operations. Their ERP system is intuitive, comprehensive, and has significantly improved our efficiency. The support team is exceptional and always ready to help.",
    project: "School ERP Implementation",
    results: ["50% reduction in administrative time", "99.9% system uptime", "Improved parent satisfaction"],
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    position: "IT Director",
    organization: "Ryan International Schools",
    image: "https://tse1.mm.bing.net/th/id/OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv?pid=Api&P=0&h=180",
    rating: 5,
    testimonial:
      "The mobile application developed by SunRayz has revolutionized how we communicate with parents and students. The real-time notifications and user-friendly interface have made it an essential tool for our institution.",
    project: "Mobile App Development",
    results: ["80% parent engagement increase", "4.8 app store rating", "25% reduction in phone calls"],
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    position: "Vice Chancellor",
    organization: "Amity University",
    image: "https://tse1.mm.bing.net/th/id/OIP.WQvPJdjEpvh8OTXB-NBfJwHaHw?pid=Api&P=0&h=180",
    rating: 5,
    testimonial:
      "Their cloud infrastructure solution has provided us with the scalability and reliability we needed. The migration was seamless, and we've seen significant cost savings while improving performance.",
    project: "Cloud Migration",
    results: ["40% cost reduction", "99.99% uptime", "3x faster performance"],
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gray-900 text-white mb-4 px-6 py-2 rounded-full font-medium">Client Testimonials</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="text-gray-600"> Say About Us</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what educational leaders and administrators have to say about their
            experience with SunRayz Technology.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <Card className="bg-white shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Client Image and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 rounded-full mx-auto md:mx-0 mb-4 border-2 border-gray-300"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 font-medium mb-1">{currentTestimonial.position}</p>
                  <p className="text-gray-500 text-sm mb-3">{currentTestimonial.organization}</p>
                  <div className="flex justify-center md:justify-start space-x-1 mb-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge className="bg-gray-900 text-white">{currentTestimonial.project}</Badge>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-gray-400 mb-4" />
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Results */}
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-3">Key Results:</h5>
                    <div className="space-y-2">
                      {currentTestimonial.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trusted by Leading Institutions */}
        <div className="bg-gray-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Trusted by Leading Institutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "500+", label: "Happy Clients", icon: Users },
              { metric: "4.9/5", label: "Average Rating", icon: Star },
              { metric: "98%", label: "Client Retention", icon: TrendingUp },
              { metric: "24/7", label: "Support Available", icon: Shield },
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
      </div>
    </section>
  )
}
