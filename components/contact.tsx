// //  "use client"

// //  import type React from "react"

// //  import { useState } from "react"
// //  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// //  import { Input } from "@/components/ui/input"
// //  import { Badge } from "@/components/ui/badge"
// // import { MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     organization: "",
// //     service: "",
// //     budget: "",
// //     timeline: "",
// //     message: "",
// //   })

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     console.log("Form submitted:", formData)
// //   }

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     })
// //   }

// //   return (
// //     <section id="contact" className="py-20 relative z-10">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4 px-4 py-2">Contact Us</Badge>
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //             Ready to Transform Your
// //             <span className="text-orange-400"> Institution?</span>
// //           </h2>
// //           <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
// //             Get in touch with our experts to discuss your requirements and discover how SunRayz Technology can
// //             illuminate your path to digital excellence in education.
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-3 gap-8 mb-16">
// //           {/* Contact Information */}
// //           <div className="space-y-6">
// //             {/* Office Locations */}
// //             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
// //               <CardHeader>
// //                 <CardTitle className="text-white flex items-center">
// //                   <MapPin className="h-5 w-5 text-orange-400 mr-2" />
// //                   Our Locations
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent className="space-y-4">
// //                 <div className="border-l-2 border-orange-400 pl-4">
// //                   <h4 className="text-white font-semibold">Headquarters</h4>
// //                   <p className="text-gray-300 text-sm">
// //                     123 Innovation Drive
// //                     <br />
// //                     Tech Park, Silicon Valley
// //                     <br />
// //                     California, USA 94025
// //                   </p>
// //                 </div>
// //                 <div className="border-l-2 border-blue-400 pl-4">
// //                   <h4 className="text-white font-semibold">India Office</h4>
// //                   <p className="text-gray-300 text-sm">
// //                     456 Cyber City
// //                     <br />
// //                     Gurgaon, Haryana
// //                     <br />
// //                     India 122002
// //                   </p>
// //                 </div>
// //                 <div className="border-l-2 border-green-400 pl-4">
// //                   <h4 className="text-white font-semibold">UK Office</h4>
// //                   <p className="text-gray-300 text-sm">
// //                     789 Tech Square
// //                     <br />
// //                     London, England
// //                     <br />
// //                     UK EC2A 4BX
// //                   </p>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Contact Methods */}
// //             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
// //               <CardHeader>
// //                 <CardTitle className="text-white flex items-center">
// //                   <Phone className="h-5 w-5 text-orange-400 mr-2" />
// //                   Contact Methods
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent className="space-y-4">
// //                 <div className="flex items-center space-x-3">
// //                   <Phone className="h-4 w-4 text-orange-400" />
// //                   <div>
// //                     <p className="text-white font-medium">Sales</p>
// //                     <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-3">
// //                   <Headphones className="h-4 w-4 text-blue-400" />
// //                   <div>
// //                     <p className="text-white font-medium">Support</p>
// //                     <p className="text-gray-300 text-sm">+1 (555) 987-6543</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-3">
// //                   <Mail className="h-4 w-4 text-green-400" />
// //                   <div>
// //                     <p className="text-white font-medium">General</p>
// //                     <p className="text-gray-300 text-sm">info@sunrayztech.com</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-3">
// //                   <Globe className="h-4 w-4 text-purple-400" />
// //                   <div>
// //                     <p className="text-white font-medium">International</p>
// //                     <p className="text-gray-300 text-sm">global@sunrayztech.com</p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Business Hours */}
// //             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
// //               <CardHeader>
// //                 <CardTitle className="text-white flex items-center">
// //                   <Clock className="h-5 w-5 text-orange-400 mr-2" />
// //                   Business Hours
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent className="space-y-3">
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-300">Monday - Friday</span>
// //                   <span className="text-white">9:00 AM - 6:00 PM</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-300">Saturday</span>
// //                   <span className="text-white">10:00 AM - 4:00 PM</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-300">Sunday</span>
// //                   <span className="text-orange-400">Closed</span>
// //                 </div>
// //                 <div className="border-t border-slate-600 pt-3 mt-3">
// //                   <div className="flex justify-between">
// //                     <span className="text-gray-300">Emergency Support</span>
// //                     <span className="text-green-400">24/7 Available</span>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Enhanced Contact Form */}
// //           <div className="lg:col-span-2">
// //             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
// //               <CardHeader>
// //                 <CardTitle className="text-white text-2xl">Get Your Free Consultation</CardTitle>
// //                 <p className="text-gray-400">
// //                   Fill out the form below and we'll get back to you within 24 hours with a customized solution proposal.
// //                 </p>
// //               </CardHeader>
// //               <CardContent>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
// //                       <Input
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Enter your full name"
// //                         className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
// //                         required
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Email Address *</label>
// //                       <Input
// //                         name="email"
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         placeholder="Enter your email"
// //                         className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="grid md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Phone Number</label>
// //                       <Input
// //                         name="phone"
// //                         value={formData.phone}
// //                         onChange={handleChange}
// //                         placeholder="Enter your phone number"
// //                         className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Organization</label>
// //                       <Input
// //                         name="organization"
// //                         value={formData.organization}
// //                         onChange={handleChange}
// //                         placeholder="School/College name"
// //                         className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="grid md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Service Interest</label>
// //                       <select
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
// //                       >
// //                         <option value="">Select a service</option>
// //                         <option value="erp">School ERP System</option>
// //                         <option value="mobile">Mobile Applications</option>
// //                         <option value="web">Web Development</option>
// //                         <option value="rfid">RFID Solutions</option>
// //                         <option value="cloud">Cloud Services</option>
// //                         <option value="ai">AI Integration</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="text-white text-sm font-medium mb-2 block">Budget Range</label>
// //                       <select
// //                         name="budget"
// //                         value={formData.budget}
// //                         onChange={handleChange}
// //                         className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
// //                       >
// //                         <option value="">Select budget range</option>
// //                         <option value="under-10k">Under $10,000</option>
// //                         <option value="10k-50k">$10,000 - $50,000</option>
// //                         <option value="50k-100k">$50,000 - $100,000</option>
// //                         <option value="100k-plus">$100,000+</option>
// //                         <option value="custom">Custom Quote</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="text-white text-sm font-medium mb-2 block">Project Timeline</label>
// //                     <select
// //                       name="timeline"
// //                       value={formData.timeline}
// //                       onChange={handleChange}
// //                       className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
// //                     >
// //                       <option value="">Select timeline</option>
// //                       <option value="immediate">Immediate (Within 1 month)</option>
// //                       <option value="short">Short-term (1-3 months)</option>
// //                       <option value="medium">Medium-term (3-6 months)</option>
// //                       <option value="long">Long-term (6+ months)</option>
// //                       <option value="planning">Just planning</option>
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label className="text-white text-sm font-medium mb-2 block">Project Details *</label>
// //                     <textarea
// //                       name="message"
// //                       value={formData.message}
// //                       onChange={handleChange}
// //                       placeholder="Tell us about your requirements, current challenges, and what you hope to achieve..."
// //                       rows={5}
// //                       className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 resize-none"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="flex flex-col sm:flex-row gap-4">
// //                     <button
// //                       type="submit"
// //                       className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
// //                     >
// //                       Send Message & Get Free Consultation
// //                     </button>
// //                     <button
// //                       type="button"
// //                       className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
// //                     >
// //                       Schedule Call
// //                     </button>
// //                   </div>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>

// //         {/* Support Options */}
// //         <div>
// //           <h3 className="text-2xl font-bold text-white text-center mb-8">Multiple Ways to Reach Us</h3>
// //           <div className="grid md:grid-cols-4 gap-6">
// //             {[
// //               {
// //                 title: "Live Chat",
// //                 description: "Chat with our support team in real-time",
// //                 icon: "💬",
// //                 action: "Start Chat",
// //                 available: "Available Now",
// //               },
// //               {
// //                 title: "Video Call",
// //                 description: "Schedule a personalized product demonstration",
// //                 icon: "📹",
// //                 action: "Book Demo",
// //                 available: "Next Available: Today 3 PM",
// //               },
// //               {
// //                 title: "Phone Support",
// //                 description: "Speak directly with our technical experts",
// //                 icon: "📞",
// //                 action: "Call Now",
// //                 available: "24/7 Emergency Support",
// //               },
// //               {
// //                 title: "Email Support",
// //                 description: "Get detailed responses to complex queries",
// //                 icon: "📧",
// //                 action: "Send Email",
// //                 available: "Response within 4 hours",
// //               },
// //             ].map((option, index) => (
// //               <Card
// //                 key={index}
// //                 className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
// //               >
// //                 <CardContent className="p-6 text-center">
// //                   <div className="text-4xl mb-4">{option.icon}</div>
// //                   <h4 className="text-white font-semibold text-lg mb-2">{option.title}</h4>
// //                   <p className="text-gray-400 text-sm mb-4">{option.description}</p>
// //                   <div className="mb-4">
// //                     <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
// //                       {option.available}
// //                     </Badge>
// //                   </div>
// //                   <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 px-4 rounded-full font-medium transition-all duration-300">
// //                     {option.action}
// //                   </button>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* FAQ Section */}
// //         <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
// //           <h3 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {[
// //               {
// //                 question: "How long does implementation typically take?",
// //                 answer:
// //                   "Implementation time varies by solution complexity, typically ranging from 2-12 weeks for most projects.",
// //               },
// //               {
// //                 question: "Do you provide training for our staff?",
// //                 answer:
// //                   "Yes, we provide comprehensive training programs including on-site training, online sessions, and documentation.",
// //               },
// //               {
// //                 question: "What kind of support do you offer post-implementation?",
// //                 answer: "We offer 24/7 technical support, regular system updates, and dedicated account management.",
// //               },
// //               {
// //                 question: "Can you integrate with our existing systems?",
// //                 answer:
// //                   "Absolutely! We specialize in seamless integration with existing educational management systems.",
// //               },
// //               {
// //                 question: "Do you offer custom development?",
// //                 answer:
// //                   "Yes, we provide fully customized solutions tailored to your institution's specific requirements.",
// //               },
// //               {
// //                 question: "What are your pricing models?",
// //                 answer:
// //                   "We offer flexible pricing including subscription-based, one-time licensing, and custom enterprise packages.",
// //               },
// //             ].map((faq, index) => (
// //               <div key={index} className="space-y-3">
// //                 <h4 className="text-white font-semibold text-lg">{faq.question}</h4>
// //                 <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     service: "",
//     budget: "",
//     timeline: "",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <section id="contact" className="py-20 relative z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4 px-4 py-2">Contact Us</Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Transform Your
//             <span className="text-orange-400"> Institution?</span>
//           </h2>
//           <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
//             Get in touch with our experts to discuss your requirements and discover how SunRayz Technology can
//             illuminate your path to digital excellence in education.
//           </p>
//         </div>

//         {/* SunRayz Locations Section */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {[
//             {
//               title: "Head Office",
//               location: "Rajyog Apt., Alandi Road, Shastri Chowk, Bhosari Pune-411039",
//               phone: ["+91 9881262642", "+91 8177877784"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//             {
//               title: "Nagpur Branch",
//               location: "684, Chitnis park, Ruikar Road, Mahal, Nagpur - 440032",
//               phone: ["8888830949", "9158656565"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//             {
//               title: "Nashik Branch",
//               location: "Opp Ambika Mahila Vikas Bank, Pavan Nagar, Nashik",
//               phone: ["8087899308"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//             {
//               title: "Madhya Pradesh Branch",
//               location: "Nare Vidyabhumi School, Chhindwara, Madhya Pradesh",
//               phone: ["7276187285"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//             {
//               title: "Mumbai Branch",
//               location: "Pach Pandav Nagar, Ulhas Nagar(E)",
//               phone: ["9822334863"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//             {
//               title: "Dhule Branch",
//               location: "44, Vikas Colony, Sakri Road, Dhule - 424001",
//               phone: ["9822334863"],
//               email: "sunrayztechnology1@gmail.com",
//             },
//           ].map((branch, index) => (
//             <Card
//               key={index}
//               className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
//             >
//               <CardHeader>
//                 <CardTitle className="text-white flex items-center gap-2">
//                   <MapPin className="h-5 w-5 text-orange-400" />
//                   {branch.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-300 text-sm mb-2">{branch.location}</p>
//                 <p className="text-gray-300 text-sm mb-2 font-medium">Email: <a href={`mailto:${branch.email}`} className="text-orange-400 underline">{branch.email}</a></p>
//                 {branch.phone.map((num, i) => (
//                   <p key={i} className="text-gray-300 text-sm">Phone: <span className="text-white font-semibold">{num}</span></p>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* You can keep the rest of your contact form, support options, and FAQ below this block */}
//           {/* Enhanced Contact Form */}
//            <div className="lg:col-span-2">
//              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
//                <CardHeader>
//                  <CardTitle className="text-white text-2xl">Get Your Free Consultation</CardTitle>
//                  <p className="text-gray-400">
//                    Fill out the form below and we'll get back to you within 24 hours with a customized solution proposal.
//                  </p>
//                </CardHeader>
//                <CardContent>
//                  <form onSubmit={handleSubmit} className="space-y-6">
//                    <div className="grid md:grid-cols-2 gap-4">
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
//                        <Input
//                          name="name"
//                          value={formData.name}
//                          onChange={handleChange}
//                          placeholder="Enter your full name"
//                          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
//                          required
//                        />
//                      </div>
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Email Address *</label>
//                        <Input
//                          name="email"
//                          type="email"
//                          value={formData.email}
//                          onChange={handleChange}
//                          placeholder="Enter your email"
//                          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
//                          required
//                        />
//                      </div>
//                    </div>

//                    <div className="grid md:grid-cols-2 gap-4">
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Phone Number</label>
//                        <Input
//                          name="phone"
//                          value={formData.phone}
//                          onChange={handleChange}
//                          placeholder="Enter your phone number"
//                          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
//                        />
//                      </div>
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Organization</label>
//                        <Input
//                          name="organization"
//                          value={formData.organization}
//                          onChange={handleChange}
//                          placeholder="School/College name"
//                          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
//                        />
//                      </div>
//                    </div>

//                    <div className="grid md:grid-cols-2 gap-4">
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Service Interest</label>
//                        <select
//                          name="service"
//                          value={formData.service}
//                          onChange={handleChange}
//                          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
//                        >
//                          <option value="">Select a service</option>
//                          <option value="erp">School ERP System</option>
//                          <option value="mobile">Mobile Applications</option>
//                          <option value="web">Web Development</option>
//                          <option value="rfid">RFID Solutions</option>
//                          <option value="cloud">Cloud Services</option>
//                          <option value="ai">AI Integration</option>
//                        </select>
//                      </div>
//                      <div>
//                        <label className="text-white text-sm font-medium mb-2 block">Budget Range</label>
//                        <select
//                          name="budget"
//                          value={formData.budget}
//                          onChange={handleChange}
//                          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
//                        >
//                          <option value="">Select budget range</option>
//                          <option value="under-10k">Under $10,000</option>
//                          <option value="10k-50k">$10,000 - $50,000</option>
//                          <option value="50k-100k">$50,000 - $100,000</option>
//                          <option value="100k-plus">$100,000+</option>
//                          <option value="custom">Custom Quote</option>
//                        </select>
//                      </div>
//                    </div>

//                    <div>
//                      <label className="text-white text-sm font-medium mb-2 block">Project Timeline</label>
//                      <select
//                        name="timeline"
//                        value={formData.timeline}
//                        onChange={handleChange}
//                        className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
//                      >
//                        <option value="">Select timeline</option>
//                        <option value="immediate">Immediate (Within 1 month)</option>
//                        <option value="short">Short-term (1-3 months)</option>
//                        <option value="medium">Medium-term (3-6 months)</option>
//                        <option value="long">Long-term (6+ months)</option>
//                        <option value="planning">Just planning</option>
//                      </select>
//                    </div>

//                    <div>
//                      <label className="text-white text-sm font-medium mb-2 block">Project Details *</label>
//                      <textarea
//                        name="message"
//                        value={formData.message}
//                        onChange={handleChange}
//                        placeholder="Tell us about your requirements, current challenges, and what you hope to achieve..."
//                        rows={5}
//                        className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 resize-none"
//                        required
//                      />
//                    </div>

//                    <div className="flex flex-col sm:flex-row gap-4">
//                      <button
//                        type="submit"
//                        className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//                      >
//                        Send Message & Get Free Consultation
//                      </button>
//                      <button
//                        type="button"
//                        className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
//                      >
//                        Schedule Call
//                      </button>
//                    </div>
//                  </form>
//                </CardContent>
//              </Card>
//            </div>
//          </div>

//          {/* Support Options */}
//          <div>
//            <h3 className="text-2xl font-bold text-white text-center mb-8">Multiple Ways to Reach Us</h3>
//            <div className="grid md:grid-cols-4 gap-6">
//              {[
//                {
//                  title: "Live Chat",
//                  description: "Chat with our support team in real-time",
//                  icon: "💬",
//                  action: "Start Chat",
//                  available: "Available Now",
//                },
//                {
//                  title: "Video Call",
//                  description: "Schedule a personalized product demonstration",
//                  icon: "📹",
//                  action: "Book Demo",
//                  available: "Next Available: Today 3 PM",
//                },
//                {
//                  title: "Phone Support",
//                  description: "Speak directly with our technical experts",
//                  icon: "📞",
//                  action: "Call Now",
//                  available: "24/7 Emergency Support",
//                },
//                {
//                  title: "Email Support",
//                  description: "Get detailed responses to complex queries",
//                  icon: "📧",
//                  action: "Send Email",
//                  available: "Response within 4 hours",
//                },
//              ].map((option, index) => (
//                <Card
//                  key={index}
//                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
//                >
//                  <CardContent className="p-6 text-center">
//                    <div className="text-4xl mb-4">{option.icon}</div>
//                    <h4 className="text-white font-semibold text-lg mb-2">{option.title}</h4>
//                    <p className="text-gray-400 text-sm mb-4">{option.description}</p>
//                    <div className="mb-4">
//                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
//                        {option.available}
//                      </Badge>
//                    </div>
//                    <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 px-4 rounded-full font-medium transition-all duration-300">
//                      {option.action}
//                    </button>
//                  </CardContent>
//                </Card>
//              ))}
//            </div>
//          </div>

//          {/* FAQ Section */}
//          <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
//            <h3 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
//            <div className="grid md:grid-cols-2 gap-8">
//              {[
//                {
//                  question: "How long does implementation typically take?",
//                  answer:
//                    "Implementation time varies by solution complexity, typically ranging from 2-12 weeks for most projects.",
//                },
//                {
//                  question: "Do you provide training for our staff?",
//                  answer:
//                    "Yes, we provide comprehensive training programs including on-site training, online sessions, and documentation.",
//                },
//                {
//                  question: "What kind of support do you offer post-implementation?",
//                  answer: "We offer 24/7 technical support, regular system updates, and dedicated account management.",
//                },
//                {
//                  question: "Can you integrate with our existing systems?",
//                  answer:
//                    "Absolutely! We specialize in seamless integration with existing educational management systems.",
//                },
//                {
//                  question: "Do you offer custom development?",
//                  answer:
//                    "Yes, we provide fully customized solutions tailored to your institution's specific requirements.",
//                },
//                {
//                  question: "What are your pricing models?",
//                  answer:
//                    "We offer flexible pricing including subscription-based, one-time licensing, and custom enterprise packages.",
//                },
//              ].map((faq, index) => (
//                <div key={index} className="space-y-3">
//                  <h4 className="text-white font-semibold text-lg">{faq.question}</h4>
//                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
//                </div>
//              ))}
//            </div>
//          </div>
     
   
    
//     </section>
//   )
// }
"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"
import Navbar from "./navbar"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
  <Navbar/>
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4 px-4 py-2">Contact Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in touch!
            <span className="text-orange-400"> Reach us</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Reach us on any of our locations given below for quick expertise on software product development and together a strong market hold on a global platform.
          </p>
        </div>

        {/* Office Locations Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Head Office - Pune",
              address: [
                "Rajyog Apt.",
                "Alandi Road, Shastri Chowk,",
                "Bhosari Pune - 411039",
              ],
              email: "sunrayztechnology1@gmail.com",
              phones: ["+91 9881262642", "+91 8177877784"],
              website: "www.sunrayztechnology.com",
            },
            {
              title: "Nagpur Branch",
              address: [
                "684, Chitnis park, Ruikar Road, Mahal,",
                "Nagpur - 440032",
              ],
              email: "sunrayztechnology1@gmail.com",
              phones: ["8888830949", "9158656565"],
            },
            {
              title: "Nashik Branch",
              address: [
                "Opp Ambika Mahila Vikas Bank,",
                "Pavan Nagar, Nashik",
              ],
              email: "sunrayztechnology1@gmail.com",
              phones: ["8087899308"],
            },
            {
              title: "Madhya Pradesh Branch",
              address: [
                "Nare Vidyabhumi School,",
                "Chhindwara, Madhya Pradesh",
              ],
              email: "sunrayztechnology1@gmail.com",
              phones: ["7276187285"],
            },
            {
              title: "Mumbai Branch",
              address: ["Pach Pandav Nagar", "Ulhas Nagar(E)"],
              email: "sunrayztechnology1@gmail.com",
              phones: ["9822334863"],
            },
            {
              title: "Dhule Branch",
              address: [
                "44, Vikas Colony, Sakri Road",
                "Dhule - 424001",
              ],
              email: "sunrayztechnology1@gmail.com",
              phones: ["9822334863"],
            },
          ].map((branch, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center">
                  <MapPin className="h-5 w-5 text-orange-400 mr-2" />
                  {branch.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 text-sm space-y-1 mb-2">
                  {branch.address.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <p className="text-sm text-white font-medium mt-2">Email:</p>
                <p className="text-gray-300 text-sm">{branch.email}</p>
                <p className="text-sm text-white font-medium mt-2">Phone:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  {branch.phones.map((phone, i) => (
                    <li key={i}>{phone}</li>
                  ))}
                </ul>
                {branch.website && (
                  <>
                    <p className="text-sm text-white font-medium mt-2">Website:</p>
                    <p className="text-gray-300 text-sm">{branch.website}</p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </> 
  )
}