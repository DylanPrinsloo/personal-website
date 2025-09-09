"use client";

import Link from "next/link";

export default function Aca() {
  return (
    <>
      <section id="academics-intro" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Academics</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          My academic journey at the University of London, focusing on Computer Science and the knowledge I've gained along the way.
        </p>
        
        {/* Academic image placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="overflow-hidden group">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <p className="text-gray-500 dark:text-gray-400 font-mono">Academic Photo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">BSc Computer Science</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">University of London • 2023 - Present</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently in my second year, studying core computer science subjects including algorithms, data structures, software engineering, and mathematics.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">High School Diploma</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Local High School, South Africa • 2022</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Graduated with distinction in Mathematics and Physical Sciences, which laid the foundation for my computer science studies.
            </p>
          </div>
        </div>
      </section>

      <section id="coursework" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Coursework</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          My studies cover a broad range of computer science topics, from theoretical foundations to practical applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Core subjects include Programming, Algorithms & Data Structures, Database Systems, Software Engineering, and Computer Networks.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-mono">
          Each course builds upon the previous, creating a comprehensive understanding of computer science principles and practices.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-mono">
          Click here to navigate to{" "}
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
          >
            Home
          </Link>
          {" "}or{" "}
          <Link 
            href="/pages/hackathons" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
          >
            Hackathons
          </Link>
        </p>
      </section>
    </>
  );
}