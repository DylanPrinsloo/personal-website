"use client";

import { PageBreadcrumb } from "@/components/breadcrumb/PageBreadcrumb";
import Hack from "./Hack";
import Footer from "@/components/footer/Footer";

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="container mx-auto px-4 py-8 pb-32">
        <Hack />
      </main>

      {/* Breadcrumb above footer */}
      <div className="fixed bottom-16 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/20">
        <PageBreadcrumb />
      </div>

      <Footer />
    </div>
  );
}