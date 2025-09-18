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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {/* Alex Gonthier - Chairman */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Alex's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alex Gonthier</h3>
                <p className="text-blue-600 font-medium mb-4">Chairman</p>
                <p className="text-gray-600">
                  As Chairman, Alex brings extensive experience in financial technology and leadership. 
                  His vision drives Venturis's mission to revolutionize investment management through 
                  innovative technology solutions. With a background in both finance and technology, 
                  Alex leads the company's strategic direction and growth initiatives.
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

            {/* Arash Sorouchyari - EU Director Sales and Strategy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Arash's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Arash Sorouchyari</h3>
                <p className="text-blue-600 font-medium mb-4">EU Director Sales and Strategy</p>
                <p className="text-gray-600">
                  As EU Director Sales and Strategy, Arash leads Venturis's European operations and strategic 
                  initiatives. With extensive experience in financial services and business development across 
                  European markets, Arash drives client relationships and market expansion strategies. His deep 
                  understanding of the European investment landscape enables us to deliver tailored solutions 
                  that meet the unique needs of our European clients.
                </p>
              </div>
            </div>

            {/* David Nemeshazy - Chief Technical Officer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for David's image */}
                  <span className="text-gray-400">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">David Nemeshazy</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Technical Officer</p>
                <p className="text-gray-600">
                  As Chief Technical Officer, David oversees Venturis's technology infrastructure and engineering 
                  excellence. With deep expertise in software architecture and financial systems, David ensures 
                  our platform delivers robust, scalable, and secure solutions. His technical leadership drives 
                  innovation in areas such as machine learning, data analytics, and cloud infrastructure, 
                  enabling us to stay at the forefront of fintech innovation.
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