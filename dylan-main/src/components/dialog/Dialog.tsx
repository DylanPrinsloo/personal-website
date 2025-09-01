"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calUsername: string;
  eventSlug: string;
  dialogTitle?: string;
}

export function BookingDialog({
  open,
  onOpenChange,
  calUsername,
  eventSlug
}: BookingDialogProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Separate loading state for the initial theme detection
  const [themeReady, setThemeReady] = useState(false);
  
  // When open changes, manage loading states
  useEffect(() => {
    if (open) {
      // Reset loading state when dialog opens
      setIframeLoading(true);
      
      // Give time for theme to be properly detected
      const themeTimer = setTimeout(() => {
        setThemeReady(true);
      }, 300);
      
      return () => clearTimeout(themeTimer);
    } else {
      // Reset states when dialog closes
      setShowDialog(false);
      setThemeReady(false);
    }
  }, [open]);
  
  // Only show dialog when iframe is loaded and theme is ready
  useEffect(() => {
    if (open && !iframeLoading && themeReady) {
      // Add a small delay for smoother transition
      const showTimer = setTimeout(() => {
        setShowDialog(true);
      }, 200);
      
      return () => clearTimeout(showTimer);
    }
  }, [open, iframeLoading, themeReady]);

  // Actual theme to use (with fallback)
  const calTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={cn(
          // Base sizing
          "sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1300px]",
          "max-h-[90vh] overflow-y-auto",
          // Visual styling - transparent with blur
          "bg-transparent backdrop-blur-xl",
          "border-none shadow-none",
          "p-0",
          // Transition effects
          "transition-opacity duration-300",
          showDialog ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="h-[80vh] relative">
          {/* Loading spinner shown only while loading */}
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-muted border-t-primary"></div>
              <p className="text-sm text-muted-foreground">Loading calendar...</p>
            </div>
          )}
          
          {/* Cal.com iframe - always render but it's hidden by parent opacity */}
          <iframe
            src={`https://cal.com/${calUsername}/${eventSlug}?embed=true&theme=${calTheme}&hideBranding=true`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ 
              borderRadius: '12px',
              backgroundColor: 'transparent'
            }}
            onLoad={() => setIframeLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}