"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface PageBreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  const [currentSection, setCurrentSection] = useState<string>("welcome");

  // Auto-detect current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setCurrentSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Default breadcrumb structure based on current section
  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...(currentSection === "about" 
      ? [{ label: "About Me", isCurrentPage: true }]
      : currentSection === "welcome"
      ? [{ label: "Welcome", isCurrentPage: true }]
      : [{ label: "Page", isCurrentPage: true }]
    ),
  ];

  const breadcrumbItems = items || defaultItems;

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumb if there's only one item
  }

  return (
    <div className={`flex justify-center py-4 ${className || ""}`}>
      <Breadcrumb className="font-mono">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink 
                    href={item.href || "#"}
                    className="text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="text-muted-foreground mx-2" />
              )}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}