import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Venturis",
  description: "Meet the team behind Venturis Financial - leaders in financial technology innovation",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Venturis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of financial technology experts dedicated to transforming how investment firms operate, 
            making complex financial operations simpler and more efficient.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Alex Gonthier - CEO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Alex's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alex Gonthier</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  As CEO, Alex brings extensive experience in financial technology and leadership. 
                  His vision drives Venturis's mission to revolutionize investment management through 
                  innovative technology solutions. With a background in both finance and technology, 
                  Alex leads the company's strategic direction and growth initiatives.
                </p>
              </div>
            </div>

            {/* Will Rossiter - President */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Will's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Will Rossiter</h3>
                <p className="text-blue-600 font-medium mb-4">President</p>
                <p className="text-gray-600">
                  Will oversees the company's operations and execution of our strategic vision. 
                  His leadership ensures that Venturis delivers exceptional value to our clients 
                  while maintaining operational excellence. Will's expertise in financial markets 
                  and technology implementation guides our product development and client success strategies.
                </p>
              </div>
            </div>

            {/* Steve Buck - Founder & Head of Product Development */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Steve's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Steve Buck</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Head of Product Development</p>
                <p className="text-gray-600">
                  As Founder and Head of Product Development, Steve drives the technical innovation at Venturis. 
                  His deep understanding of both financial markets and software development enables us to create 
                  cutting-edge solutions that address real-world challenges in investment management. Steve's 
                  vision has been instrumental in shaping our product roadmap and technical architecture.
                </p>
              </div>
            </div>

            {/* Julien Salanon - Head of Marketing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Julien's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Julien Salanon</h3>
                <p className="text-blue-600 font-medium mb-4">Head of Marketing</p>
                <p className="text-gray-600">
                  Julien leads our marketing initiatives, focusing on building the Venturis brand and 
                  communicating our value proposition to the market. His expertise in financial technology 
                  marketing helps us connect with our target audience and showcase how our solutions address 
                  the evolving needs of investment firms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            At Venturis, we're committed to empowering investment firms with innovative technology 
            solutions that streamline operations, enhance decision-making, and drive growth. Our 
            platform combines cutting-edge technology with deep industry expertise to deliver 
            exceptional value to our clients.
          </p>
        </div>
      </div>
    </div>
  );
} 