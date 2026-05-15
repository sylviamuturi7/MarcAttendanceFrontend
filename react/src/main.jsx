// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.css";
import "./styles/variables.css";
import "./styles/dashboard.css";
import "./styles/tables.css";

import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import NotificationProvider from "./context/NotificationContext";
import SidebarProvider from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);