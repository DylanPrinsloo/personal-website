"use client";

import { useState, useEffect } from "react";
import { 
  PanelLeft,
  PanelRight,
  Award,
  BookOpen,
  Briefcase,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed") === "true";
    setCollapsed(savedState);
  }, []);

  const toggleCollapsed = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    localStorage.setItem("sidebar-collapsed", String(newCollapsedState));
    
    // Dispatch event for other components
    window.dispatchEvent(
      new CustomEvent("sidebar-toggle", {
        detail: { collapsed: newCollapsedState }
      })
    );
  };

  // Navigation items array with standardized icon styles
  const navItems = [
    { 
      href: "/hackathons", 
      icon: <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Award className="h-4 w-4 stroke-[1.25]" />
            </div>, 
      label: "Hackathons" 
    },
    { 
      href: "/academics", 
      icon: <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-4 w-4 stroke-[1.25]" />
            </div>, 
      label: "Academics" 
    },
    { 
      href: "/experience", 
      icon: <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Briefcase className="h-4 w-4 stroke-[1.25]" />
            </div>, 
      label: "Experience" 
    },
    { 
      href: "/about", 
      icon: <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 stroke-[1.25]" />
            </div>, 
      label: "About Me" 
    },
  ];

  // Reusable sidebar navigation content
  const renderNavItems = () => (
    <nav className="flex flex-col space-y-1 px-3 py-4">
      {navItems.map((item, index) => (
        <Link 
          key={item.href}
          href={item.href} 
          className={cn(
            "flex items-center p-2 rounded-md relative",
            "text-gray-600 dark:text-gray-300",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "hover:text-gray-900 dark:hover:text-white",
            "transition-all duration-300 ease-in-out",
            collapsed && "justify-center",
            // First item active for demo
            index === 0 && "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          )}
        >
          {item.icon}
          <span 
            className={cn(
              "ml-3 text-sm whitespace-nowrap",
              "transition-all duration-300 ease-in-out",
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            )}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-40 
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-800
          transition-all duration-300 ease-in-out
          flex flex-col
          hidden md:flex
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ width: collapsed ? '64px' : '240px' }}
      >
        {/* Header with toggle button - desktop only */}
        <div className="h-16 flex items-center border-b border-gray-200 dark:border-gray-800 px-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapsed}
            className="h-8 w-8 rounded-md transition-all duration-300 ease-in-out"
          >
            {collapsed ? 
              <PanelRight className="h-4 w-4 stroke-[1.25] transition-transform duration-300" /> : 
              <PanelLeft className="h-4 w-4 stroke-[1.25] transition-transform duration-300" />
            }
          </Button>
        </div>

        {/* Navigation items */}
        <div className="flex-1">
          {renderNavItems()}
        </div>

        {/* Footer with avatar */}
        <div className="mt-auto border-t border-gray-200 dark:border-gray-800 p-3">
          <div className={cn(
            "flex items-center p-2 rounded-md",
            "transition-all duration-300 ease-in-out",
            collapsed ? "justify-center" : "space-x-3"
          )}>
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src="/android-chrome-512x512.png" alt="DP" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            
            <div 
              className={cn(
                "overflow-hidden",
                "transition-all duration-300 ease-in-out",
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}
            >
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Dylan Prinsloo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Computer Science</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar using Sheet component */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-[240px]">
          {/* Mobile sidebar content */}
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center border-b border-gray-200 dark:border-gray-800 px-3">
              <span className="text-sm font-medium">Navigation</span>
            </div>

            {/* Navigation items - reusing the same component */}
            <div className="flex-1">
              {renderNavItems()}
            </div>

            {/* Footer with avatar */}
            <div className="mt-auto border-t border-gray-200 dark:border-gray-800 p-3">
              <div className="flex items-center p-2 rounded-md space-x-3">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src="/android-chrome-512x512.png" alt="DP" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Dylan Prinsloo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}