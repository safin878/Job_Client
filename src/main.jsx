import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./Routes/routes.jsx"; // Imported router
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
