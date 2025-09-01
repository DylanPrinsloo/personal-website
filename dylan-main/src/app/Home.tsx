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
          {/* About Me Section 1: Introduction */}
          <section id="about" className="mb-20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">About Me</h2>
            
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My name is Dylan Prinsloo, and I am currently pursuing a degree in Computer Science at the University of London, with a focus on theoretical computing. Alongside this, I am planning to take a minor in Generative AI and Machine Learning, areas that deeply inspire me.
            </p>
            
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I have a particular interest in computer vision, especially projects that involve analyzing and transforming video data into meaningful, real-world applications. One example is StadPrin, a startup I co-founded with a team of peers, where we developed a system that converts bodycam footage into completed police reports.
            </p>
          </section>

          {/* Image 1: Two images side by side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl overflow-hidden">
              {/* First image */}
              <div className="h-72 overflow-hidden rounded-xl">
                <img 
                  src="/static/f1e3048f-7ee2-40eb-b6f1-1b779f4c12ac.png"
                  alt="Project visualization" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Second image */}
              <div className="h-72 overflow-hidden rounded-xl">
                <img 
                  src="/static/7ac80eee-bfa7-4465-a35e-70bae764811a.png"
                  alt="Project visualization" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Privacy caption */}
            <p className="text-xs italic text-center text-gray-400 dark:text-gray-500 mt-3">
              I have converted my experiences and events by converting people to Studio Ghibli inspired characters to ensure these people's privacy
            </p>
          </div>

          {/* About Me Section 2: Experience */}
          <section id="experience" className="mb-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience & Projects</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Beyond startups, I have actively participated in hackathons and other side projects, often exploring creative ways to apply computer science in practice. At university, I have been challenged with a wide range of projects—spanning data visualization, web development, APIs, compiler design, and algorithm analysis—which has helped me develop both theoretical and applied skills.
            </p>
          </section>

          {/* Image 2: Project visualization */}
          <div className="mb-24">
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/static/8f8109d0-c69e-416c-a13d-c13bbed1160b.png"
                alt="Project visualization" 
                className="w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            </div>
          </div>

          {/* About Me Section 3: Vision */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vision & Current Work</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In recent years, I have become increasingly passionate about Generative AI, which I believe is one of the defining technologies of the 21st century. My long-term vision is to work on scalable AI pipelines and contribute to the pursuit of Artificial General Intelligence (AGI), drawing inspiration from the ambitious goals of leading tech companies.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am also deeply engaged in the startup ecosystem, having worked on and contributed to several ventures. I value innovation, collaboration, and the process of building impactful solutions from the ground up.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I am working with Cidak, a computer science society founded by members of my university. Our mission is to tackle global challenges with an open-source mindset and create technology that advances humanity.
            </p>
          </section>

          {/* Academics Section*/}
          <section id="academics" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Academic Background</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">BSc Computer Science (Theoretical Computing and AI)</h3>
                <p className="text-gray-600 dark:text-gray-400">University of London, Feb 2025 - Present</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="hackathons" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects & Hackathons</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hero Card (Left Side) - Takes up 2/3 width */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden relative h-[400px] group">
                
                <img 
                  src="/static/d3d2af3e-403e-43a9-8e5f-f66fe4393b78.png"
                  alt="Cidak Computer Science Society" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                
                {/* External link with proper aria labels */}
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
              
              {/* Right Sidebar Cards - Stacked vertically */}
              <div className="space-y-6">
                {/* Top card - Hackathon */}
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <img 
                    src="/static/01ef61fe-6d2d-4f7e-a972-ae838c19badb.png" 
                    alt="SU Ambient Hackathon Project" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                  
                  {/* Internal link with proper aria labels */}
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
                
                {/* Bottom card - LeetCode */}
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <img 
                    src="/static/6f354b11-51f6-4200-b351-74d0ba16066b.png"
                    alt="LeetCode Profile" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                  
                  {/* Internal link with proper aria labels */}
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
            
            {/* Call to action */}
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
