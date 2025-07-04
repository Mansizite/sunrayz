import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us - SunRayz Technology",
  description:
    "Learn about SunRayz Technology's journey, mission, and the team behind innovative educational solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About SunRayz Technology</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Illuminating the future of education through innovative technology solutions since 2015.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gray-900 text-white mb-4 px-4 py-2 rounded-full">Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">From Vision to Reality</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Founded in 2015 by a team of passionate educators and technologists, SunRayz Technology emerged from a
                simple yet powerful vision: to bridge the gap between traditional education and modern technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                What started as a small team of 3 developers has grown into a global company serving over 500
                educational institutions worldwide, managing more than 1 million students across our platforms.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Learn More</Button>
            </div>
            <div>
              {/* You can add an image or other content here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
