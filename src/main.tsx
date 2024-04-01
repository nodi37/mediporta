// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages

import NotFoundPage from "./pages/NotFound";

// Styles
import "./global.css";

// Routing
import { appRoutes } from "./pages/App/children";
import AppPage from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        errorElement: <NotFoundPage />,
        children: [
          ...appRoutes,
          {
            path: "*",
            loader: () => {
              throw new Response("Not Found", { status: 404 });
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
