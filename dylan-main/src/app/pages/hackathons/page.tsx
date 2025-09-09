"use client";

import Footer from "@/components/footer/Footer";
import { PageBreadcrumb } from "@/components/breadcrumb/PageBreadcrumb";
import Hack from "./Hack";

export default function HackathonsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Hackathons", isCurrentPage: true }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <main className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full pb-32">
          <Hack />
        </main>

        {/* Breadcrumb above footer */}
        <div className="fixed bottom-16 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/20">
          <PageBreadcrumb items={breadcrumbItems} />
        </div>

        <Footer />
      </div>
    </div>
  );
}