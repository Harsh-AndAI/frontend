import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
};