"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/dialog/Dialog"; 

interface SidebarItemProps {
  href: string;
  children: React.ReactNode;
  isCollapsed?: boolean;
  isActive?: boolean;
  variant?: "default" | "book-chat";
  onClick?: () => void;
}

// Use environment variables for Cal.com credentials
var calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;
var calEventSlug = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG;

export function SidebarItem({ 
  href, 
  children, 
  isCollapsed = false,
  isActive = false,
  variant = "default",
  onClick
}: SidebarItemProps) {
  const [showBookingDialog, setShowBookingDialog] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isAnchor = href.startsWith('#') || href.startsWith('/#');
    
    // Close mobile sidebar first (if we're on mobile)
    if (window.innerWidth < 768) {
      window.dispatchEvent(new CustomEvent("mobile-sidebar-close"));
    }
    
    if (isAnchor) {
      e.preventDefault();
      
      // Extract the selector
      const selector = href.startsWith('/#') ? href.substring(1) : href;
      
      // Scroll to section
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    
    // Call the onClick handler if provided
    if (onClick) onClick();
  };

  if (variant === "book-chat") {
    return (
      <>
        <button
          onClick={() => setShowBookingDialog(true)}
          className={cn(
            "flex items-center w-full rounded-md px-3 py-2 text-sm font-medium",
            "transition-colors hover:bg-muted",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          {!isCollapsed && <span>{children}</span>}
        </button>

        <BookingDialog
          open={showBookingDialog}
          onOpenChange={setShowBookingDialog}
          calUsername={calUsername}
          eventSlug={calEventSlug}
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
        isActive && "bg-muted text-foreground font-medium",
        isCollapsed ? "justify-center" : "justify-start"
      )}
    >
      {!isCollapsed && <span>{children}</span>}
    </Link>
  );
}