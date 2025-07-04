import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
// import Services from "@/components/services"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <TechStack />
      <Testimonials />
      <Team />
      <Footer />
      <Chatbot />
    </div>
  )
}
