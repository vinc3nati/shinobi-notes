import React, { useState, createContext, useContext } from "react";

const ShrinkSidebarContext = createContext();

const ShrinkSidebarProvider = ({ children }) => {
  const [shrink, setShrink] = useState(false);

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
