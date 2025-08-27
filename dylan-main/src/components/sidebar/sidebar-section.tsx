import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SidebarSection({ 
  title, 
  children, 
  className 
}: SidebarSectionProps) {
  return (
    <div className={cn("py-2", className)}>
      {title && (
        <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">
          {title}
        </h3>
      )}
      <div className="space-y-1 px-1">
        {children}
      </div>
    </div>
  );
}