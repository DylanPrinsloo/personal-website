"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      {/* Sidebar component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 md:pl-64 transition-all duration-300">
        {/* Mobile header with menu button */}
        <header className="sticky top-0 z-10 md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12 md:px-8">
          {/* Header Section */}
          <header className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h1>
          </header>

          {/* About Section */}
          <section className="mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a Vim enthusiast and tab advocate. I find unmatched efficiency in Vim's keystroke commands 
              and tab flexibility for personal viewing preferences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a strong supporter of static typing for its early error detection capabilities, leading to cleaner, 
              more maintainable code.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When coding for extended periods, I prefer dark mode to reduce eye strain and create a more 
              comfortable working environment.
            </p>
          </section>

          {/* Blog Posts Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Blog Posts</h2>
            <div className="space-y-6">
              <article>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">April 9, 2024</time>
                <Link href="/blog/embracing-vim" className="text-xl font-medium text-gray-900 dark:text-white hover:underline">
                  Embracing Vim: The Unsung Hero of Code Editors
                </Link>
              </article>
              <article>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">April 8, 2024</time>
                <Link href="/blog/spaces-vs-tabs" className="text-xl font-medium text-gray-900 dark:text-white hover:underline">
                  Spaces vs. Tabs: The Indentation Debate Continues
                </Link>
              </article>
              <article>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">April 7, 2024</time>
                <Link href="/blog/static-typing" className="text-xl font-medium text-gray-900 dark:text-white hover:underline">
                  The Power of Static Typing in Programming
                </Link>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
