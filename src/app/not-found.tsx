"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect Home on 404 here
    router.replace("/");
  }, [router]);

  return null;
}