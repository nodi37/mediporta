// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import HomePage, { HomePageChildren } from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

// Styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        errorElement: <NotFoundPage />,
        children: HomePageChildren,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
