"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
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
  eventSlug,
  dialogTitle = "Schedule a Meeting with Dylan" 
}: BookingDialogProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { theme, resolvedTheme } = useTheme();

  // Simulate loading progress for better UX
  useEffect(() => {
    if (open) {
      setIframeLoading(true);
      setLoadingProgress(0);
      
      // Immediate progress simulation
      const progressTimer = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressTimer);
            return prev;
          }
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(progressTimer);
    }
  }, [open]);

  // Actual theme to use (with fallback)
  const calTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light';

  const handleIframeLoad = () => {
    setLoadingProgress(100);
    // Small delay to show 100% before hiding
    setTimeout(() => {
      setIframeLoading(false);
    }, 300);
  };

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
          // Always visible - no opacity transitions
          "transition-transform duration-300",
          // JetBrains Mono font
          "font-mono"
        )}
      >
        {/* Add accessible DialogTitle that's visually hidden */}
        <DialogTitle className="sr-only font-mono">
          {dialogTitle}
        </DialogTitle>

        <div className="h-[80vh] relative font-mono">
          {/* Enhanced Loading overlay with Skeleton */}
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm gap-6 z-10 rounded-xl p-8 font-mono">
              
              {/* Calendar skeleton mockup */}
              <div className="w-full max-w-md space-y-4">
                {/* Header skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-8 w-3/4 mx-auto" />
                  <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
                
                {/* Calendar grid skeleton */}
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 21 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8" />
                  ))}
                </div>
                
                {/* Time slots skeleton */}
                <div className="space-y-2 mt-6">
                  <Skeleton className="h-6 w-24" />
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Progress information */}
              <div className="text-center space-y-3 mt-8 font-mono">
                <p className="text-sm font-medium text-foreground font-mono">Loading calendar...</p>
                
                {/* Progress bar */}
                <div className="w-64 bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                  />
                </div>
                
                {/* Progress percentage */}
                <p className="text-xs text-muted-foreground font-mono">
                  {Math.round(loadingProgress)}% complete
                </p>
                
                {/* Helpful tip */}
                {loadingProgress > 50 && (
                  <p className="text-xs text-muted-foreground animate-pulse font-mono">
                    Setting up your booking experience...
                  </p>
                )}
              </div>
            </div>
          )}
          
          {/* Cal.com iframe */}
          <iframe
            src={`https://cal.com/${calUsername}/${eventSlug}?embed=true&theme=${calTheme}&hideBranding=true`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ 
              borderRadius: '12px',
              backgroundColor: 'transparent',
              fontFamily: "'JetBrains Mono', 'Courier New', monospace"
            }}
            onLoad={handleIframeLoad}
            title={`${dialogTitle} - Cal.com`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}