"use client";

import Link from "next/link";

export default function Hack() {
  return (
    <>
      <section id="hackathons-intro" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hackathons</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          My participation in hackathons and competitive programming events, where I've collaborated with teams to build innovative solutions.
        </p>
        
        {/* Hackathon image placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="overflow-hidden group">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <p className="text-gray-500 dark:text-gray-400 font-mono">Hackathon Photo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Events Participated</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Hack Week</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Virtual Event • 2024</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Participated in a week-long virtual hackathon focusing on sustainability solutions. Worked with a team to develop a web application for carbon footprint tracking.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">University Tech Challenge</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">University of London • 2023</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My first hackathon experience where I collaborated with fellow students to create a mobile app prototype for campus navigation.
            </p>
          </div>
        </div>
      </section>

      <section id="skills-learned" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Learning</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hackathons have been incredible learning experiences, pushing me to work under pressure and think creatively about problem-solving.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          These events have taught me the importance of teamwork, rapid prototyping, and presenting ideas effectively to judges and peers.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-mono">
          Each hackathon has expanded my technical skills and introduced me to new technologies and frameworks I might not have explored otherwise.
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
            href="/pages/academics" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
          >
            Academics
          </Link>
        </p>
      </section>
    </>
  );
}