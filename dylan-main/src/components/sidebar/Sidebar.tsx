"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  // Theme (mounted guard to avoid hydration mismatch)
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const navigationItems = React.useMemo(() => [
    { href: "/#hackathons", label: "Hackathons" },
    { href: "/#academics", label: "Academics" },
    { href: "/#about", label: "About Me" },
    { href: "/#chat", label: "Book Chat", variant: "book-chat" }, 
  ], []); 

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

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
                  variant={item.variant as "default" | "book-chat" | undefined}
                  isCollapsed={false}
                  onClick={() => setIsMobileOpen(false)}
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
      {/* Header with collapse + theme toggle */}
      <div className="flex flex-col items-start justify-center p-4 h-20 gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-accent transition-colors duration-200"
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
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

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-accent transition-colors duration-200"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )
          ) : (
            <span className="h-4 w-4 block opacity-0" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Navigation - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <nav className="space-y-1 px-3 w-full">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              variant={item.variant as "default" | "book-chat" | undefined}
              isCollapsed={isCollapsed}
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