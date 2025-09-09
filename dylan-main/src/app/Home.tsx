"use client";

import Footer from "@/components/footer/Footer";
import { PageBreadcrumb } from "@/components/breadcrumb/PageBreadcrumb";

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
            
            {/* Add images below welcome text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="overflow-hidden group">
                <img 
                  src="/static/self-portrait.JPG" 
                  alt="Dylan Prinsloo" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </section>

          <section id="about" className="mb-16">
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

        {/* Breadcrumb above footer */}
        <div className="fixed bottom-16 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/20">
          <PageBreadcrumb />
        </div>

        <Footer />
      </div>
    </div>
  );
}
