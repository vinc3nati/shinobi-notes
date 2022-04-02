import React, { useState, createContext, useContext, useEffect } from "react";
import { useWindowSize } from "../hooks/WindowSize";

const ShrinkSidebarContext = createContext();

const ShrinkSidebarProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    if (width <= 768) setShrink(true);
    else setShrink(false);
  }, [width]);

  const toggleShrink = () => setShrink((prev) => !prev);

  return (
    <ShrinkSidebarContext.Provider value={{ shrink, toggleShrink }}>
      {children}
    </ShrinkSidebarContext.Provider>
  );
};

const useShrinkSidebar = () => {
  const context = useContext(ShrinkSidebarContext);

  if (!context) throw new Error("Shrink Sidebar Context was not created");

  return context;
};

export { useShrinkSidebar, ShrinkSidebarProvider };
