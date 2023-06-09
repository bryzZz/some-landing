import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
