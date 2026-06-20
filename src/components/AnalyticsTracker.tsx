"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize visitorId and sessionId
    let visitorId = localStorage.getItem("sunlynk_visitor_id");
    if (!visitorId) {
      visitorId = "usr_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
      localStorage.setItem("sunlynk_visitor_id", visitorId);
    }

    let sessionId = sessionStorage.getItem("sunlynk_session_id");
    if (!sessionId) {
      sessionId = "ses_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
      sessionStorage.setItem("sunlynk_session_id", sessionId);
    }

    // 2. Track pageview
    const isAdminPage = pathname === "/admin" || pathname?.startsWith("/admin/");
    if (isAdminPage) return;

    const trackPageview = async () => {
      try {
        await fetch(`${API_URL}/api/analytics/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventType: "pageview",
            eventName: pathname || "/",
            visitorId,
            sessionId,
          }),
        });
      } catch (error) {
        console.error("Failed to track pageview:", error);
      }
    };

    trackPageview();
  }, [pathname]);

  useEffect(() => {
    // 3. Track clicks (like WhatsApp clicks) using global click event listener
    const handleDocumentClick = async (event: MouseEvent) => {
      try {
        const isAdminPage = window.location.pathname === "/admin" || window.location.pathname.startsWith("/admin/");
        if (isAdminPage) return;

        const target = event.target as HTMLElement;
        const anchor = target.closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href") || "";
        const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp");

        if (isWhatsApp) {
          const visitorId = localStorage.getItem("sunlynk_visitor_id") || "Unknown";
          const sessionId = sessionStorage.getItem("sunlynk_session_id") || "Unknown";

          await fetch(`${API_URL}/api/analytics/track`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              eventType: "click",
              eventName: "whatsapp",
              visitorId,
              sessionId,
              metadata: {
                pagePath: window.location.pathname,
                href,
              },
            }),
          });
        }
      } catch (error) {
        console.error("Failed to track click event:", error);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
