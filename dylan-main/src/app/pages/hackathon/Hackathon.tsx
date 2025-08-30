"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";

const Hackathon: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
      setSidebarCollapsed(isCollapsed);
    };

    // initialize
    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);

    const handleSidebarToggle = (e: CustomEvent) => {
      setSidebarCollapsed(e.detail.collapsed);
    };
    // same-window updates
    window.addEventListener("sidebar-toggle", handleSidebarToggle as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sidebar-toggle", handleSidebarToggle as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          "md:ml-[70px]",
          !sidebarCollapsed && "md:ml-[240px]"
        )}
      >
        <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full">
          {/* Main content area - ready for your content */}
          <section className="mb-20">
            {/* Your hackathon content will go here */}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Hackathon;