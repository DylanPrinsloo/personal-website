"use client";

import Link from "next/link";
import { Github, Code, Sun, Moon, Linkedin, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BookingDialog } from "@/components/dialog/Dialog";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;
  const eventSlug = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG;
  
  // Add mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleBookingClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <footer 
        className="fixed bottom-0 left-0 right-0 z-30 py-4 px-4 md:px-8 bg-background/95 backdrop-blur-sm border-t border-border/40"
        style={{ 
          borderTop: "1px solid hsl(var(--border))",
        }}
      >
        <div className="flex items-center justify-center w-full">
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

            <button
              onClick={handleBookingClick}
              className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Book a chat"
            >
              <Calendar className="h-4 w-4" />
              <span className="sr-only">Book a chat</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <span className="h-4 w-4 block opacity-0" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <BookingDialog
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        calUsername={calUsername}
        eventSlug={eventSlug}
        dialogTitle="Book a Chat with Dylan"
      />
    </>
  );
}