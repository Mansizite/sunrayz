
// import type { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeft, MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import Footer from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Contact Us - SunRayz Technology",
//   description: "Get in touch with our experts to discuss your educational technology needs.",
// }

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Ready to Transform Your
//             <span className="text-gray-300"> Institution?</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-4xl">
//             Get in touch with our experts to discuss your requirements and discover how SunRayz Technology can
//             illuminate your path to digital excellence in education.
//           </p>
//         </div>
//       </div>

//       {/* Contact Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Contact Information */}
//             <div className="space-y-8">
//               {/* Office Locations */}
//               <Card className="bg-white border border-gray-200 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-gray-900 flex items-center">
//                     <MapPin className="h-5 w-5 text-gray-600 mr-2" />
//                     Our Locations
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="border-l-4 border-gray-900 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Head Office - Pune</h4>
//                     <p className="text-gray-600 text-sm">
//                       Rajyog Apt., Alandi Road, Shastri Chowk,<br />
//                       Bhosari Pune-411039.<br />
//                       Website: www.sunrayztechnology.com<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Contact: +91 9881262642, +91 8177877784
//                     </p>
//                   </div>

//                   <div className="border-l-4 border-gray-700 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Nagpur Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       684, Chitnis Park, Ruikar Road, Mahal,<br />
//                       Nagpur - 440032.<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Phone: 8888830949, 9158656565
//                     </p>
//                   </div>

//                   <div className="border-l-4 border-gray-700 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Nashik Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Opp Ambika Mahila Vikas Bank,<br />
//                       Pavan Nagar, Nashik<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Phone: 8087899308
//                     </p>
//                   </div>

//                   <div className="border-l-4 border-gray-700 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Madhya Pradesh Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Nare Vidyabhumi School,<br />
//                       Chhindwara, Madhya Pradesh<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Phone: 7276187285
//                     </p>
//                   </div>

//                   <div className="border-l-4 border-gray-700 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Mumbai Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Pach Pandav Nagar,<br />
//                       Ulhas Nagar(E)<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Phone: 9822334863
//                     </p>
//                   </div>

//                   <div className="border-l-4 border-gray-700 pl-4">
//                     <h4 className="text-gray-900 font-semibold">Dhule Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       44, Vikas Colony, Sakri Road,<br />
//                       Dhule - 424001.<br />
//                       Email: sunrayztechnology1@gmail.com<br />
//                       Phone: 9822334863
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Contact Methods and Hours (remain unchanged) */}
//               <Card className="bg-white border border-gray-200 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-gray-900 flex items-center">
//                     <Phone className="h-5 w-5 text-gray-600 mr-2" />
//                     Contact Methods
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <Phone className="h-4 w-4 text-gray-600" />
//                     <div>
//                       <p className="text-gray-900 font-medium">Sales</p>
//                       <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Headphones className="h-4 w-4 text-gray-600" />
//                     <div>
//                       <p className="text-gray-900 font-medium">Support</p>
//                       <p className="text-gray-600 text-sm">+1 (555) 987-6543</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Mail className="h-4 w-4 text-gray-600" />
//                     <div>
//                       <p className="text-gray-900 font-medium">General</p>
//                       <p className="text-gray-600 text-sm">info@sunrayztech.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Globe className="h-4 w-4 text-gray-600" />
//                     <div>
//                       <p className="text-gray-900 font-medium">International</p>
//                       <p className="text-gray-600 text-sm">global@sunrayztech.com</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               {/* ... */}
//               <Card className="bg-white border border-gray-200 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-gray-900 flex items-center">
//                     <Clock className="h-5 w-5 text-gray-600 mr-2" />
//                     Business Hours
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Friday</span>
//                     <span className="text-gray-900">9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Saturday</span>
//                     <span className="text-gray-900">10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="text-gray-600">Closed</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-3 mt-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Emergency Support</span>
//                       <span className="text-green-600">24/7 Available</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form (unchanged) */}
//             {/* ... */}
//              <Card className="bg-white border border-gray-200 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-gray-900 text-2xl">Get Your Free Consultation</CardTitle>
//                   <p className="text-gray-600">
//                     Fill out the form below and we'll get back to you within 24 hours with a customized solution
//                     proposal.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <form className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Full Name *</label>
//                         <Input
//                           placeholder="Enter your full name"
//                           className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Email Address *</label>
//                         <Input
//                           type="email"
//                           placeholder="Enter your email"
//                           className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Phone Number</label>
//                         <Input
//                           placeholder="Enter your phone number"
//                           className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Organization</label>
//                         <Input
//                           placeholder="School/College name"
//                           className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Service Interest</label>
//                         <select className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900">
//                           <option value="">Select a service</option>
//                           <option value="erp">School ERP System</option>
//                           <option value="mobile">Mobile Applications</option>
//                           <option value="web">Web Development</option>
//                           <option value="rfid">RFID Solutions</option>
//                           <option value="cloud">Cloud Services</option>
//                           <option value="ai">AI Integration</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="text-gray-900 text-sm font-medium mb-2 block">Budget Range</label>
//                         <select className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900">
//                           <option value="">Select budget range</option>
//                           <option value="under-10k">Under $10,000</option>
//                           <option value="10k-50k">$10,000 - $50,000</option>
//                           <option value="50k-100k">$50,000 - $100,000</option>
//                           <option value="100k-plus">$100,000+</option>
//                           <option value="custom">Custom Quote</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="text-gray-900 text-sm font-medium mb-2 block">Project Details *</label>
//                       <textarea
//                         placeholder="Tell us about your requirements, current challenges, and what you hope to achieve..."
//                         rows={5}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-500 resize-none"
//                         required
//                       />
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold">
//                         Send Message & Get Free Consultation
//                       </Button>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 px-6 rounded-lg font-semibold"
//                       >
//                         Schedule Call
//                       </Button>
//                     </div>
//                   </form>
//                 </CardContent>
//               </Card>
            
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
// "use client"


// import Link from "next/link"
// import { ArrowLeft, MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import Footer from "@/components/footer"



// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Header */}
//       <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-5">
//           <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
//           <div className="absolute bottom-10 right-20 w-40 h-40 border border-white rounded-full"></div>
//           <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white rotate-45"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors group">
//             <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//             Back to Home
//           </Link>
          
//           <div className="max-w-3xl">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Ready to Transform <span className="text-blue-400">Your Institution?</span>
//             </h1>
//             <p className="text-xl text-gray-300">
//               Connect with our experts to discover how SunRayz Technology can illuminate your path to digital excellence in education.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Contact Information Sidebar */}
//             <div className="space-y-6">
//               {/* Contact Card */}
//               <Card className="bg-white border-0 shadow-lg rounded-xl">
//                 <CardHeader>
//                   <CardTitle className="text-xl flex items-center">
//                     <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                       <Phone className="h-5 w-5 text-blue-600" />
//                     </div>
//                     Contact Methods
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="p-2 bg-blue-50 rounded-lg">
//                       <Phone className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Sales Inquiries</p>
//                       <p className="text-gray-600 text-sm">+91 9881262642</p>
//                       <p className="text-gray-600 text-sm">+91 8177877784</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="p-2 bg-green-50 rounded-lg">
//                       <Headphones className="h-5 w-5 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Support</p>
//                       <p className="text-gray-600 text-sm">+91 8888830949</p>
//                       <p className="text-gray-600 text-sm">+91 9158656565</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="p-2 bg-purple-50 rounded-lg">
//                       <Mail className="h-5 w-5 text-purple-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Email Us</p>
//                       <p className="text-gray-600 text-sm">sunrayztechnology1@gmail.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                     <div className="p-2 bg-orange-50 rounded-lg">
//                       <Globe className="h-5 w-5 text-orange-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Website</p>
//                       <p className="text-gray-600 text-sm">www.sunrayztechnology.com</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Hours Card */}
//               <Card className="bg-white border-0 shadow-lg rounded-xl">
//                 <CardHeader>
//                   <CardTitle className="text-xl flex items-center">
//                     <div className="p-2 bg-indigo-100 rounded-lg mr-3">
//                       <Clock className="h-5 w-5 text-indigo-600" />
//                     </div>
//                     Business Hours
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                       <span className="text-gray-600">Monday - Friday</span>
//                       <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                       <span className="text-gray-600">Saturday</span>
//                       <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                       <span className="text-gray-600">Sunday</span>
//                       <span className="text-gray-500">Closed</span>
//                     </div>
//                     <div className="border-t border-gray-200 pt-3 mt-3">
//                       <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
//                         <span className="text-gray-700">Emergency Support</span>
//                         <span className="font-medium text-blue-600">24/7 Available</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Locations Card */}
//               <Card className="bg-white border-0 shadow-lg rounded-xl">
//                 <CardHeader>
//                   <CardTitle className="text-xl flex items-center">
//                     <div className="p-2 bg-red-100 rounded-lg mr-3">
//                       <MapPin className="h-5 w-5 text-red-600" />
//                     </div>
//                     Our Locations
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Head Office - Pune</h4>
//                     <p className="text-gray-600 text-sm">
//                       Rajyog Apt., Alandi Road, Shastri Chowk,<br />
//                       Bhosari Pune-411039.
//                     </p>
//                   </div>
                  
//                   <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Nagpur Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       684, Chitnis Park, Ruikar Road, Mahal,<br />
//                       Nagpur - 440032.
//                     </p>
//                   </div>
                  
//                   <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Nashik Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Opp Ambika Mahila Vikas Bank,<br />
//                       Pavan Nagar, Nashik
//                     </p>
//                   </div>
                  
//                   <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Madhya Pradesh Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Nare Vidyabhumi School,<br />
//                       Chhindwara, Madhya Pradesh
//                     </p>
//                   </div>
                  
//                   <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Mumbai Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       Pach Pandav Nagar,<br />
//                       Ulhas Nagar(E)
//                     </p>
//                   </div>
                  
//                   <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
//                     <h4 className="font-semibold text-gray-900 mb-1">Dhule Branch</h4>
//                     <p className="text-gray-600 text-sm">
//                       44, Vikas Colony, Sakri Road,<br />
//                       Dhule - 424001.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card className="bg-white border-0 shadow-lg rounded-xl overflow-hidden">
//                 <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
//                   <CardTitle className="text-3xl">Get Your Free Consultation</CardTitle>
//                   <p className="text-blue-100">
//                     Fill out the form below and we'll get back to you within 24 hours with a customized solution proposal.
//                   </p>
//                 </CardHeader>
//                 <CardContent className="p-8">
//                   <form className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
//                         <Input
//                           placeholder="Enter your full name"
//                           className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
//                         <Input
//                           type="email"
//                           placeholder="Enter your email"
//                           className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                         <Input
//                           placeholder="Enter your phone number"
//                           className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Organization</label>
//                         <Input
//                           placeholder="School/College name"
//                           className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Service Interest</label>
//                         <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
//                           <option value="">Select a service</option>
//                           <option value="erp">School ERP System</option>
//                           <option value="mobile">Mobile Applications</option>
//                           <option value="web">Web Development</option>
//                           <option value="rfid">RFID Solutions</option>
//                           <option value="cloud">Cloud Services</option>
//                           <option value="ai">AI Integration</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
//                         <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
//                           <option value="">Select budget range</option>
//                           <option value="under-10k">Under ₹10,00,000</option>
//                           <option value="10k-50k">₹10,00,000 - ₹50,00,000</option>
//                           <option value="50k-100k">₹50,00,000 - ₹1,00,00,000</option>
//                           <option value="100k-plus">₹1,00,00,000+</option>
//                           <option value="custom">Custom Quote</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Project Details <span className="text-red-500">*</span></label>
//                       <textarea
//                         placeholder="Tell us about your requirements, current challenges, and what you hope to achieve..."
//                         rows={5}
//                         className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
//                         required
//                       />
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                       <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
//                         Send Message & Get Free Consultation
//                       </Button>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 px-6 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
//                       >
//                         Schedule Call
//                       </Button>
//                     </div>
//                   </form>
//                 </CardContent>
//               </Card>

//               {/* Map Section */}
//               <div className="mt-8 bg-white shadow-lg rounded-xl overflow-hidden">
//                 <div className="h-64 bg-gray-200 flex items-center justify-center">
//                   <div className="text-center p-6">
//                     <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                     <h3 className="text-xl font-semibold text-gray-700">Our Headquarters</h3>
//                     <p className="text-gray-500 mt-2">Interactive map would display here</p>
//                   </div>
//                 </div>
//                 <div className="p-6 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-900 mb-2">SunRayz Technology HQ</h4>
//                   <p className="text-gray-600 text-sm">
//                     Rajyog Apt., Alandi Road, Shastri Chowk, Bhosari Pune-411039, Maharashtra, India
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// "use client"

// import Link from "next/link"
// import { ArrowLeft, MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import Footer from "@/components/footer"

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Hero Header */}
//       <div className="relative bg-white text-black py-24">
//         <div className="absolute top-0 left-0 w-full h-full opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
//           <div className="absolute bottom-10 right-20 w-40 h-40 border border-white rounded-full"></div>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="inline-flex items-center text-dark-300 hover:text-white mb-6">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Home
//           </Link>
//           <div className="max-w-3xl">
//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//               Ready to Transform <span className="text-purple-400">Your Institution?</span>
//             </h1>
//             <p className="text-lg text-gray-400">
//               Connect with our experts to discover how SunRayz Technology can illuminate your path to digital excellence in education.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Contact Methods */}
//             <Card className="bg-neutral-900 border border-neutral-800 text-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <Phone className="h-5 w-5 text-green-400" />
//                   Contact Methods
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4 text-sm">
//                 <div>
//                   <p className="font-semibold">Sales</p>
//                   <p className="text-gray-400">+91 9881262642, +91 8177877784</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Support</p>
//                   <p className="text-gray-400">+91 8888830949, +91 9158656565</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Email</p>
//                   <p className="text-gray-400">sunrayztechnology1@gmail.com</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Website</p>
//                   <p className="text-gray-400">www.sunrayztechnology.com</p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Business Hours */}
//             <Card className="bg-neutral-900 border border-neutral-800 text-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <Clock className="h-5 w-5 text-orange-400" />
//                   Business Hours
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-sm space-y-2">
//                 <p>Mon - Fri: <span className="text-gray-400">9:00 AM - 6:00 PM</span></p>
//                 <p>Saturday: <span className="text-gray-400">10:00 AM - 4:00 PM</span></p>
//                 <p>Sunday: <span className="text-gray-400">Closed</span></p>
//                 <p className="mt-2 border-t border-gray-700 pt-2">
//                   Emergency Support: <span className="text-green-400">24/7 Available</span>
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Locations */}
//             <Card className="bg-neutral-900 border border-neutral-800 text-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3">
//                   <MapPin className="h-5 w-5 text-blue-400" />
//                   Our Locations
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4 text-sm">
//                 <div>
//                   <p className="font-semibold">Head Office - Pune</p>
//                   <p className="text-gray-400">
//                     Rajyog Apt., Alandi Road, Shastri Chowk, Bhosari Pune-411039.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Nagpur</p>
//                   <p className="text-gray-400">684, Chitnis Park, Ruikar Road, Mahal</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Nashik</p>
//                   <p className="text-gray-400">Pavan Nagar, Opp Ambika Mahila Vikas Bank</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">MP</p>
//                   <p className="text-gray-400">Chhindwara, Nare Vidyabhumi School</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Mumbai</p>
//                   <p className="text-gray-400">Pach Pandav Nagar, Ulhas Nagar(E)</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Dhule</p>
//                   <p className="text-gray-400">44, Vikas Colony, Sakri Road</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <Card className="bg-neutral-900 border border-neutral-800 text-white">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
//                 <p className="text-gray-400">
//                   Fill out the form and we’ll contact you shortly with a customized solution.
//                 </p>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium">Full Name</label>
//                       <Input className="bg-black border-gray-700 text-white" required />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Email</label>
//                       <Input type="email" className="bg-black border-gray-700 text-white" required />
//                     </div>
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium">Phone</label>
//                       <Input className="bg-black border-gray-700 text-white" />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Organization</label>
//                       <Input className="bg-black border-gray-700 text-white" />
//                     </div>
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium">Service Interest</label>
//                       <select className="w-full p-2 bg-black border border-gray-700 rounded-md text-white">
//                         <option>Select</option>
//                         <option>School ERP</option>
//                         <option>Web Development</option>
//                         <option>Mobile App</option>
//                         <option>AI Integration</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Budget</label>
//                       <select className="w-full p-2 bg-black border border-gray-700 rounded-md text-white">
//                         <option>Select</option>
//                         <option>Under ₹10L</option>
//                         <option>₹10L - ₹50L</option>
//                         <option>₹50L - ₹1Cr</option>
//                         <option>₹1Cr+</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium">Project Details</label>
//                     <textarea
//                       className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
//                       rows={5}
//                       placeholder="Tell us about your project..."
//                       required
//                     />
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full">
//                       Send Message
//                     </Button>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       className="border-white text-white hover:bg-white hover:text-black font-semibold w-full"
//                     >
//                       Schedule Call
//                     </Button>
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Headphones, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
        {/* Hero Header */}
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
                Ready to Transform <span className="text-purple-300">Your Institution?</span>
              </h1>
              <p className="text-lg text-purple-100">
                Connect with our experts to discover how SunRayz Technology can illuminate your path to digital excellence in education.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    Contact Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Headphones className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Sales</p>
                      <p className="text-gray-500">+91 9881262642, +91 8177877784</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Headphones className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Support</p>
                      <p className="text-gray-500">+91 8888830949, +91 9158656565</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <p className="text-gray-500">sunrayztechnology1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Globe className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Website</p>
                      <p className="text-gray-500">www.sunrayztechnology.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-700">Mon - Fri</p>
                    <p className="text-gray-500">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-700">Saturday</p>
                    <p className="text-gray-500">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-700">Sunday</p>
                    <p className="text-gray-500">Closed</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-sm">
                      <span className="font-medium text-gray-700">Emergency Support:</span>{' '}
                      <span className="text-green-600">24/7 Available</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Locations */}
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">Head Office - Pune</p>
                    <p className="text-gray-600 mt-1">
                      Rajyog Apt., Alandi Road, Shastri Chowk, Bhosari Pune-411039.
                    </p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700">Nagpur</p>
                    <p className="text-gray-500 mt-1">684, Chitnis Park, Ruikar Road, Mahal</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700">Nashik</p>
                    <p className="text-gray-500 mt-1">Pavan Nagar, Opp Ambika Mahila Vikas Bank</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700">MP</p>
                    <p className="text-gray-500 mt-1">Chhindwara, Nare Vidyabhumi School</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700">Mumbai</p>
                    <p className="text-gray-500 mt-1">Pach Pandav Nagar, Ulhas Nagar(E)</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-700">Dhule</p>
                    <p className="text-gray-500 mt-1">44, Vikas Colony, Sakri Road</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form and we'll contact you shortly with a customized solution.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input 
                          className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-gray-900" 
                          placeholder="John Doe"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input 
                          type="email" 
                          className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-gray-900" 
                          placeholder="john@example.com"
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <Input 
                          className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-gray-900" 
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Organization</label>
                        <Input 
                          className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-gray-900" 
                          placeholder="Your school/institution"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Service Interest</label>
                        <select className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-purple-500 focus:ring-purple-500">
                          <option>Select service</option>
                          <option>School ERP</option>
                          <option>Web Development</option>
                          <option>Mobile App</option>
                          <option>AI Integration</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Budget</label>
                        <select className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-purple-500 focus:ring-purple-500">
                          <option>Select budget range</option>
                          <option>Under ₹10L</option>
                          <option>₹10L - ₹50L</option>
                          <option>₹50L - ₹1Cr</option>
                          <option>₹1Cr+</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Project Details</label>
                      <textarea
                        className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                        rows={5}
                        placeholder="Tell us about your project requirements, challenges, and goals..."
                        required
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="bg-black text-white font-semibold w-full py-6 transition-all hover:shadow-lg"
                      >
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 font-semibold w-full py-6 transition-all"
                      >
                        Schedule Call
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Success Message (hidden by default) */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg hidden">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800">Thank you for your message!</h3>
                    <p className="text-sm text-green-600">We've received your inquiry and will contact you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}