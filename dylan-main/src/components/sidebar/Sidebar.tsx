"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarItem } from "./sidebar-item";
import { SidebarSection } from "./sidebar-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PanelLeft, PanelRight } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  // Load collapsed state from localStorage on mount
  React.useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed") === "true";
    setIsCollapsed(savedState);

    // Add event listener for window resize to handle mobile/desktop state
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebar-collapsed", String(newState));
    
    // Notify other components about the change
    window.dispatchEvent(
      new CustomEvent("sidebar-toggle", { detail: { collapsed: newState } })
    );
  };

  // Mobile sidebar using Sheet component
  const mobileSidebar = (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetContent side="left" className="p-0 w-72">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Navigation</h2>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SidebarSection>
              <SidebarItem href="#hackathons" icon="award">Hackathons</SidebarItem>
              <SidebarItem href="#academics" icon="book-open">Academics</SidebarItem>
              <SidebarItem href="#experience" icon="briefcase">Experience</SidebarItem>
              <SidebarItem href="#about" icon="user">About Me</SidebarItem>
              <SidebarItem href="#" icon="calendar" variant="book-chat">Book Chat</SidebarItem>
            </SidebarSection>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/android-chrome-512x512.png" alt="DP" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Dylan Prinsloo</p>
                <p className="text-xs text-muted-foreground">Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  // Desktop sidebar
  const desktopSidebar = (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[70px]" : "w-[240px]",
        "hidden md:flex",
        className
      )}
    >
      <div className="flex h-14 items-center justify-end border-b px-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <PanelRight className="h-4 w-4" />
          ) : (
            <PanelLeft className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          </span>
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <SidebarSection>
          <SidebarItem 
            href="#hackathons" 
            icon="award" 
            isCollapsed={isCollapsed}
          >
            Hackathons
          </SidebarItem>
          <SidebarItem 
            href="#academics" 
            icon="book-open" 
            isCollapsed={isCollapsed}
          >
            Academics
          </SidebarItem>
          <SidebarItem 
            href="#experience" 
            icon="briefcase" 
            isCollapsed={isCollapsed}
          >
            Experience
          </SidebarItem>
          <SidebarItem 
            href="#about" 
            icon="user" 
            isCollapsed={isCollapsed}
          >
            About Me
          </SidebarItem>
          <SidebarItem 
            href="#" 
            icon="calendar" 
            variant="book-chat"
            isCollapsed={isCollapsed}
          >
            Book Chat
          </SidebarItem>
        </SidebarSection>
      </div>

      <div className="mt-auto border-t p-3">
        <div className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "gap-3"
        )}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/android-chrome-512x512.png" alt="DP" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">Dylan Prinsloo</p>
              <p className="text-xs text-muted-foreground truncate">Computer Science</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {mobileSidebar}
      {desktopSidebar}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 left-4 z-30 md:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <PanelRight className="h-4 w-4" />
        <span className="sr-only">Open sidebar</span>
      </Button>
    </>
  );
}