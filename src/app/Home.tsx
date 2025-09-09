"use client";

import Footer from "@/components/footer/Footer";
import { PageBreadcrumb } from "@/components/breadcrumb/PageBreadcrumb";
import Link from "next/link";
import Image from "next/image"; 

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full pb-32">
          <section id="welcome" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              My name is Dylan Prinsloo, and I am currently a second-year Computer Science student at the University of London.
            </p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="overflow-hidden group">
                <Image 
                  src="/self-portrait.jpg" 
                  alt="Dylan Prinsloo" 
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  unoptimized 
                />
              </div>
            </div>
          </section>

          <section id="about" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About me</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Born and Raised in South Africa, today i live in Stellenbosch, Capetown, South Africa. I brief summary of this webpage.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Each page will have a icon to proceed to the next section if i could say that.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Important info is at the bottom of the page. The footer contains links like booking a chat with me via Google Meet, Getting my Resume is the orange icon below and navigating to code by my GitHub.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-mono">
              Click here to move to{" "}
              <Link 
                href="/pages/academics" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
              >
                Academics
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
        </main>

        {/* Breadcrumb above footer */}
        <div className="fixed bottom-16 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/20">
          <PageBreadcrumb />
        </div>

        <Footer />
      </div>
    </div>
  );
}
