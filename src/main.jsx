import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { HomePage } from "./pages/home/HomePage.jsx";
import { ServicesPage } from "./pages/services/ServicesPage";
import { WorkoutsPage } from "./pages/workouts/WorkoutsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/workouts",
    element: <WorkoutsPage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
