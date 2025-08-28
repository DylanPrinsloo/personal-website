"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {  ChevronLeft, ChevronRight,Menu } from "lucide-react";

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isCollapsed?: boolean;
  isActive?: boolean;
}

function SidebarItem({ href, children, isCollapsed, isActive }: SidebarItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300 ease-out",
        !isCollapsed && "hover:bg-accent hover:text-accent-foreground",
        !isCollapsed && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        !isCollapsed && isActive && "bg-accent text-accent-foreground",
        isCollapsed ? "justify-center px-2 pointer-events-none" : "justify-start"
      )}
    >
      <div className={cn(
        "flex-shrink-0 transition-transform duration-300",
        !isCollapsed && "group-hover:scale-110"
      )}>
      </div>
      
      <span
        className={cn(
          "transition-all duration-300 ease-out whitespace-nowrap",
          isCollapsed 
            ? "opacity-0 scale-95 translate-x-2 pointer-events-none" 
            : "opacity-100 scale-100 translate-x-0"
        )}
      >
        {children}
      </span>
    </a>
  );
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("#hackathons");

  // Load collapsed state from localStorage on mount
  React.useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed") === "true";
    setIsCollapsed(savedState);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebar-collapsed", String(newState));
    
    window.dispatchEvent(
      new CustomEvent("sidebar-toggle", { detail: { collapsed: newState } })
    );
  };

  const navigationItems = [
    { href: "#hackathons",label: "Hackathons" },
    { href: "#academics", label: "Academics" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About Me" },
    { href: "#chat", label: "Book Chat" },
  ];

  // Mobile sidebar
  const mobileSidebar = (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetContent side="left" className="p-0 w-80 bg-card border-border/40">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border/40">
            <h2 className="text-lg font-semibold tracking-tight">Navigate</h2>
          </div>
          
          <div className="flex-1 overflow-auto py-6">
            <nav className="space-y-1 px-4">
              {navigationItems.map((item) => (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  isActive={activeItem === item.href}
                  onClick={() => setActiveItem(item.href)}
                >
                  {item.label}
                </SidebarItem>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  // Desktop sidebar
  const desktopSidebar = (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col bg-card/50 backdrop-blur-sm border-r border-border/40 transition-all duration-500 ease-out",
        isCollapsed ? "w-16" : "w-64",
        "hidden md:flex",
        className
      )}
    >
      {/* Header with toggle button */}
      <div className="flex items-center justify-start p-4 h-16">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-accent transition-colors duration-200"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" strokeWidth={3} />
          ) : (
            <ChevronLeft className="h-4 w-4" strokeWidth={3} />
          )}
          <span className="sr-only">
            {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          </span>
        </Button>
      </div>

      {/* Navigation - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <nav className="space-y-1 px-3 w-full">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              isCollapsed={isCollapsed}
              isActive={activeItem === item.href}
              onClick={() => setActiveItem(item.href)} // <- set active on click
            >
              {item.label}
            </SidebarItem>
          ))}
        </nav>
      </div>
    </aside>
  );

  return (
    <>
      {mobileSidebar}
      {desktopSidebar}
      
      {/* Mobile toggle button */}
      <Button
        variant="outline"
        className="fixed bottom-6 left-6 z-30 md:hidden h-12 w-12 rounded-full shadow-lg border-border/40 bg-background/80 backdrop-blur-sm hover:bg-accent transition-all duration-200"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="h-5 w-5" strokeWidth={1.5} />
        <span className="sr-only">Open sidebar</span>
      </Button>
    </>
  );
}