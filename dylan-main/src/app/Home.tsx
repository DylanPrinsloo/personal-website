"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      {/* Sidebar component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content - dynamically adjust based on sidebar state */}
      <div 
        className="flex-1 transition-all duration-300 flex flex-col"
        style={{
          marginLeft: sidebarCollapsed ? '64px' : '256px',
          width: `calc(100% - ${sidebarCollapsed ? '64px' : '256px'})`,
          paddingLeft: '0',
        }}
      >
        {/* Mobile header with menu button */}
        <header className="sticky top-0 z-10 md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </header>

        {/* Center the content within the remaining space */}
        <main className="max-w-4xl mx-auto px-4 py-12 md:px-8 w-full">
          {/* Header Section */}
          <header className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h1>
          </header>

          {/* About Me Section 1: Introduction */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My name is Dylan Prinsloo, and I am currently pursuing a degree in Computer Science at the University of London, with a focus on theoretical computing. Alongside this, I am planning to take a minor in Generative AI and Machine Learning, areas that deeply inspire me.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I have a particular interest in computer vision, especially projects that involve analyzing and transforming video data into meaningful, real-world applications. One example is StadPrin, a startup I co-founded with a team of peers, where we developed a system that converts bodycam footage into completed police reports.
            </p>
          </section>

          {/* Image 1 would go here */}
          <div className="mb-24 rounded-xl overflow-hidden relative">
            {/* Placeholder for large image */}
            <div className="h-80 w-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
              <span className="text-lg text-gray-500 dark:text-gray-400">Image: Computer Vision Project</span>
            </div>
          </div>

          {/* About Me Section 2: Experience */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience & Projects</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Beyond startups, I have actively participated in hackathons and other side projects, often exploring creative ways to apply computer science in practice. At university, I have been challenged with a wide range of projects—spanning data visualization, web development, APIs, compiler design, and algorithm analysis—which has helped me develop both theoretical and applied skills.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I also have a growing interest in virtual reality and its potential to reshape how we interact with technology. This has led me to explore various immersive technologies and their applications in different domains.
            </p>
          </section>

          {/* Image 2 would go here */}
          <div className="mb-24 rounded-xl overflow-hidden relative">
            {/* Placeholder for large image */}
            <div className="h-80 w-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 flex items-center justify-center">
              <span className="text-lg text-gray-500 dark:text-gray-400">Image: Hackathon Project</span>
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
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Academic Background</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">BSc Computer Science (Theoretical Computing and AI)</h3>
                <p className="text-gray-600 dark:text-gray-400">University of London, Feb 2025 - Present</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects & Hackathons</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hero Card (Left Side) - Takes up 2/3 width */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden relative h-[400px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/hackathon-main.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                    Hackathon Winner
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">AI-Powered Medical Diagnosis</h3>
                  <p className="text-gray-200">Our smartest, fastest diagnostic tool yet</p>
                  <div className="mt-3 text-sm text-gray-300">
                    <span className="inline-block">Techfest 2023</span>
                    <span className="mx-2">•</span>
                    <span>1st Place</span>
                  </div>
                </div>
              </div>
              
              {/* Right Sidebar Cards - Stacked vertically */}
              <div className="space-y-6">
                {/* Top card */}
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
                  <div className="absolute inset-0 bg-[url('/project-open.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                      Open Models
                    </div>
                    <h3 className="text-xl font-bold text-white">Code Generation Engine</h3>
                    <div className="mt-1 text-sm text-gray-300">GitHub • 280+ Stars</div>
                  </div>
                </div>
                
                {/* Bottom card */}
                <div className="rounded-xl overflow-hidden relative h-[190px] group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-90"></div>
                  <div className="absolute inset-0 bg-[url('/project-study.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2">
                      Study
                    </div>
                    <h3 className="text-xl font-bold text-white">Smart Learning Platform</h3>
                    <div className="mt-1 text-sm text-gray-300">Web App • React & Firebase</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-6 flex justify-end">
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
