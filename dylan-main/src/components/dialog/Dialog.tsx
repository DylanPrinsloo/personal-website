"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  dialogTitle = "Schedule a Meeting"
}: BookingDialogProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "sm:max-w-[600px] max-h-[80vh] overflow-y-auto",
        "md:max-w-[700px] lg:max-w-[800px]"
      )}>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 h-[600px] relative">
          {iframeLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
            </div>
          )}
          <iframe
            src={`https://cal.com/${calUsername}/${eventSlug}?embed=true&theme=${theme === 'dark' ? 'dark' : 'light'}&hideBranding=true`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ borderRadius: '8px' }}
            onLoad={() => setIframeLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}