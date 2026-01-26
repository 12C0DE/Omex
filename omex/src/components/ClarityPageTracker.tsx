import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ClarityPageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.clarity || import.meta.env.DEV) return;

    window.clarity("set", "page", location.pathname);
  }, [location]);

  return null;
}