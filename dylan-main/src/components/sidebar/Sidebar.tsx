"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  PanelLeft,
  PanelRight,
  Home, 
  BookOpen, 
  User, 
  FlaskConical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    
    // Store in localStorage for persistence and cross-tab sync
    localStorage.setItem("sidebar-collapsed", String(newCollapsedState));
    
    // Dispatch custom event for same-window components
    window.dispatchEvent(
      new CustomEvent("sidebar-toggle", {
        detail: { collapsed: newCollapsedState }
      })
    );
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          style={{ backdropFilter: 'blur(2px)' }}
        />
      )}

      {/* Fixed position collapse/expand button with sidebar icons */}
      <Button 
        variant="ghost" 
        size="sm"
        className="fixed top-4 left-4 z-40 rounded-full p-2 h-8 w-8 bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
        onClick={toggleCollapsed}
      >
        {collapsed ? 
          <PanelRight className="h-4 w-4 stroke-[1.25]" /> : 
          <PanelLeft className="h-4 w-4 stroke-[1.25]" />
        }
      </Button>

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 left-0 h-full z-30 
          bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ width: collapsed ? '64px' : '256px' }}
      >
        <div className="flex flex-col h-full relative">
          {/* Empty space at top for button spacing */}
          <div className="p-4 h-16"></div>

          {/* Navigation - now in the middle with aligned icons */}
          <nav className="flex flex-col space-y-1 flex-1">
            <Link 
              href="/" 
              className={`
                flex items-center text-sm font-medium transition-all duration-200
                ${collapsed ? "justify-center py-3" : "pl-4 py-3"}
                bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
              `}
            >
              <div className={collapsed ? "mx-auto" : "ml-4"}>  {/* Changed ml-0 to ml-4 */}
                <Home className="h-4 w-4 stroke-[1.25]" />
              </div>
              <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Home
              </span>
            </Link>
            
            <Link 
              href="/academics" 
              className={`
                flex items-center text-sm font-medium transition-all duration-200
                ${collapsed ? "justify-center py-3" : "pl-4 py-3"}
                hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300
              `}
            >
              <div className={collapsed ? "mx-auto" : "ml-4"}>  {/* Changed ml-0 to ml-4 */}
                <BookOpen className="h-4 w-4 stroke-[1.25]" />
              </div>
              <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Academics
              </span>
            </Link>
            
            <Link 
              href="/about" 
              className={`
                flex items-center text-sm font-medium transition-all duration-200
                ${collapsed ? "justify-center py-3" : "pl-4 py-3"}
                hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300
              `}
            >
              <div className={collapsed ? "mx-auto" : "ml-4"}>  {/* Changed ml-0 to ml-4 */}
                <User className="h-4 w-4 stroke-[1.25]" />
              </div>
              <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                About
              </span>
            </Link>
          </nav>

          {/* Header with avatar moved to bottom */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800 overflow-hidden mt-auto">
            <div className={`flex items-center ${collapsed ? "justify-center" : "space-x-3"}`}>
              <Avatar className={collapsed ? "size-10" : "size-8"}>
                <AvatarImage src="/android-chrome-512x512.png" alt="Dylan Prinsloo" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              
              {!collapsed && (
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    Dylan Prinsloo
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    Computer Science
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}