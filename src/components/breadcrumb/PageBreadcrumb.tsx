"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function PageBreadcrumb() {
  const pathname = usePathname();

  // Simple breadcrumb logic based on pathname only
  const getBreadcrumbs = () => {
    switch (pathname) {
      case "/":
      case "":
        return null; 

      case "/pages/academics":
      case "/pages/academics/": 
        return [
          { label: "Home", href: "/" },
          { label: "Academics", isCurrentPage: true },
        ];

      case "/pages/hackathons":
      case "/pages/hackathons/": 
        return [
          { label: "Home", href: "/" },
          { label: "Academics", href: "/pages/academics" },
          { label: "Hackathons", isCurrentPage: true },
        ];

      default:
        return [{ label: "Home", href: "/" }];
    }
  };

  const breadcrumbItems = getBreadcrumbs();

  // Don't render if no breadcrumbs
  if (!breadcrumbItems) {
    return null;
  }

  return (
    <div className="flex justify-center py-4">
      <Breadcrumb className="font-mono">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="text-muted-foreground mx-2" />
              )}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}