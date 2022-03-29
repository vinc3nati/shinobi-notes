import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, DataProvider, ThemeProvider } from "./contexts/index";
import { ShrinkSidebarProvider } from "./contexts/shrink-sidebar-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <DataProvider>
            <ShrinkSidebarProvider>
              <App />
            </ShrinkSidebarProvider>
          </DataProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
