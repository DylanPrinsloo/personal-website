"use client";

import Link from "next/link";
import { Github, Rss, Code, Sun, Moon, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Listen for sidebar collapse state via localStorage or custom event
  useEffect(() => {
    // Check initial state
    const storedState = localStorage.getItem("sidebar-collapsed");
    setIsSidebarCollapsed(storedState === "true");
    
    // Listen for changes
    const handleStorageChange = () => {
      const currentState = localStorage.getItem("sidebar-collapsed");
      setIsSidebarCollapsed(currentState === "true");
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    // Custom event listener for same-window changes
    const handleSidebarToggle = (e) => {
      setIsSidebarCollapsed(e.detail.collapsed);
    };
    
    window.addEventListener("sidebar-toggle", handleSidebarToggle);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sidebar-toggle", handleSidebarToggle);
    };
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer 
      className="relative py-6 px-4 md:px-8 "
      style={{ 
        borderTop: "none",
      }}
    >
      {/* Full-width border line that extends under the sidebar */}
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800"
        style={{ 
          left: "-100vw",
          width: "200vw", // Full viewport width
          zIndex: 0, // Ensure sidebar appears above this line
          marginTop: "2.5px"
        }}
      />
      
      {/* Rest of your footer content */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex space-x-6">
              
              <Link 
                href="https://www.linkedin.com/in/dylan-prinsloo-b3480b208" 
                className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              
              <Link 
                href="https://github.com/dylanprinsloo" 
                className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              
              <Link 
                href="https://github.com/dylanprinsloo/personal-website" 
                className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="h-4 w-4" />
                <span className="sr-only">View Source</span>
              </Link>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 rounded-md p-0 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 MIT Licensed</p>
        </div>
      </div>
    </footer>
  );
}