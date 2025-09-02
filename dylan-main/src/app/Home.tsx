"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Sidebar } from "@/components/sidebar/Sidebar"; 
import { cn } from "@/lib/utils";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Listen for sidebar collapse state
  useEffect(() => {
    const handleStorageChange = () => {
      const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
      setSidebarCollapsed(isCollapsed);
    };
    
    // Initialize from localStorage
    handleStorageChange();
    
    // Listen for changes
    window.addEventListener("storage", handleStorageChange);
    
    // Custom event for same-window updates
    const handleSidebarToggle = (e: CustomEvent) => {
      setSidebarCollapsed(e.detail.collapsed);
    };
    
    window.addEventListener("sidebar-toggle", handleSidebarToggle as EventListener);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sidebar-toggle", handleSidebarToggle as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className={cn(
        "flex-1 flex flex-col",
        "transition-all duration-300 ease-in-out",
        "md:ml-[70px]", 
        !sidebarCollapsed && "md:ml-[240px]" 
      )}>
        <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full">
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My name is Dylan Prinsloo, and I am currently a second-year Computer Science student at the University of London.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About me</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Born and raised by humans. It's pretty mind blowing to take the opportunity to create not only a webpage, but a sort of biography on myself. 
              So I'm taking this opportunity to show you around this webpage.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I have laid out the page to accommodate technical and non-technical "humans". The sidebar will help you navigate. All the best.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-900 leading-relaxed mb-4">
             ~ Dylan
            </p>
          </section>

          <section id="academics" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Academic Background</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              During my studies, I have worked on a wide range of projects and modules, giving me a strong foundation in both the theoretical and practical aspects of computer science.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Here is my module outline.
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Level 4 (Year 1)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Area</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Module</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Mathematics & Theory</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Computational Mathematics (CM1015‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Discrete Mathematics (CM1020‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Programming & Systems</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Introduction to Programming I (CM1005‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Introduction to Programming II (CM1010‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Fundamentals of Computer Science (CM1025‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">How Computers Work (CM1030‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Algorithms & Data Structures I (CM1035‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Applications & Visualization</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Web Development (CM1040‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Level 5 (Year 2)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Area</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Module</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Mathematics & Theory</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Data Science (CM2015‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Programming & Systems</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Algorithms & Data Structures II (CM2010‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Databases, Networks, and the Web (CM2020‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Professional Practice for Computer Scientists (CM2030‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Systems Engineering (CM2035‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Artificial Intelligence & Machine Learning</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Artificial Intelligence (CM2040‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Machine Learning & Neural Networks (CM2050‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Level 6 - Electives (Year 3)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Area</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Module</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Level</th>
                      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-white">Notes / Specialism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Artificial Intelligence & Machine Learning</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Machine Learning & Neural Networks (CM2050‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">6</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Core AI/ML</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">AI & Data Science Elective (CM3060‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">6</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Elective for AI/ML</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Cybersecurity in AI (CM3060‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">6</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Elective for AI/ML</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">Final Project (CM3090‑01)</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">6</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">AI/ML-focused project recommended</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="hackathons" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects & Hackathons</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-xl overflow-hidden relative h-[400px] group">       
                <img 
                  src="/static/d3d2af3e-403e-43a9-8e5f-f66fe4393b78.png"
                  alt="Cidak Computer Science Society" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                <a 
                  href="https://cidak.co" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
                  aria-label="Visit Cidak Computer Science Society website"
                >
                  <span className="sr-only">Visit Cidak.co</span>
                </a>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                    University Society
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Cidak Computer Science Society</h3>
                  <p className="text-gray-200">Building open-source tools for global challenges</p>
                  <div className="mt-3 text-sm text-gray-300 flex items-center">
                    <span className="inline-block">cidak.co</span>
                    <span className="mx-2">•</span>
                    <span>Member</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <img 
                    src="/static/01ef61fe-6d2d-4f7e-a972-ae838c19badb.png" 
                    alt="SU Ambient Hackathon Project" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                  
                  <Link 
                    href="/pages/hackathon" 
                    className="absolute inset-0 z-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
                    aria-label="Learn more about SU Ambient Hackathon project"
                  >
                    <span className="sr-only">Open Hackathon page</span>
                  </Link>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                      Hackathon
                    </div>
                    <h3 className="text-xl font-bold text-white">First Hackathon</h3>
                    <div className="mt-1 text-sm text-gray-300 flex items-center">
                      <span>Hosted in Stellenbosch</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <img 
                    src="/static/6f354b11-51f6-4200-b351-74d0ba16066b.png"
                    alt="LeetCode Profile" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                  <Link 
                    href="/pages/problem" 
                    className="absolute inset-0 z-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
                    aria-label="View problem solving and LeetCode projects"
                  >
                    <span className="sr-only">Open Problems page</span>
                  </Link>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                      C++
                    </div>
                    <h3 className="text-xl font-bold text-white">Output, Centric</h3>
                    <div className="mt-1 text-sm text-gray-300">Competitive Programming</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link href="/projects" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center">
                View all projects
                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
