"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { BookOpen, Award, Briefcase, User, Calendar } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/dialog/dialog"; 

interface SidebarItemProps {
  href: string;
  icon: string;
  children: React.ReactNode;
  isCollapsed?: boolean;
  variant?: "default" | "book-chat";
}

export function SidebarItem({ 
  href, 
  icon, 
  children, 
  isCollapsed = false,
  variant = "default"
}: SidebarItemProps) {
  const [showBookingDialog, setShowBookingDialog] = React.useState(false);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  // Map string icon names to actual components
  const IconMap: Record<string, LucideIcon> = {
    "award": Award,
    "book-open": BookOpen,
    "briefcase": Briefcase,
    "user": User,
    "calendar": Calendar
  };

  const Icon = IconMap[icon] || User; // Default to User if icon not found

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === "default") {
      e.preventDefault();
      
      // Close mobile sidebar first (if we're on mobile)
      if (window.innerWidth < 768) {
        // Dispatch event to close sidebar
        window.dispatchEvent(new CustomEvent("mobile-sidebar-close"));
      }

      // Scroll to section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  const handleBookingConfirm = () => {
    setPopoverOpen(false);
    setShowBookingDialog(true);
  };

  if (variant === "book-chat") {
    return (
      <>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex items-center w-full rounded-md px-3 py-2 text-sm font-medium",
                "transition-colors hover:bg-muted",
                isCollapsed ? "justify-center" : "justify-start"
              )}
            >
              <Icon className="h-4 w-4 mr-2" />
              {!isCollapsed && <span>{children}</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent 
            side={isCollapsed ? "right" : "right"}
            align={isCollapsed ? "start" : "start"}
            className="w-72"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <h4 className="font-medium">Schedule a Meeting</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Would you like to set up a meeting using my calendar?
              </p>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setPopoverOpen(false)}
                >
                  Decline
                </Button>
                <Button 
                  size="sm"
                  onClick={handleBookingConfirm}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <BookingDialog
          open={showBookingDialog}
          onOpenChange={setShowBookingDialog}
          calUsername="dylanprinsloo"
          eventSlug="45min"
        />
      </>
    );
  }

  return (
    <Link 
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium",
        "transition-colors hover:bg-muted",
        isCollapsed ? "justify-center" : "justify-start"
      )}
    >
      <Icon className="h-4 w-4 mr-2" />
      {!isCollapsed && <span>{children}</span>}
    </Link>
  );
}