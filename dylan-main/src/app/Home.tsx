"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
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
      <div className={cn(
        "flex-1 flex flex-col",
        "transition-all duration-300 ease-in-out",
        "md:ml-[70px]", 
        !sidebarCollapsed && "md:ml-[240px]" 
      )}>
        <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full">
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              My name is Dylan Prinsloo, and I am currently a second-year Computer Science student at the University of London.
            </p>
            
            {/* Add images below welcome text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="rounded-xl overflow-hidden group">
                <img 
                  src="/static/IMG_5141.JPG" 
                  alt="Dylan Prinsloo" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
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
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
