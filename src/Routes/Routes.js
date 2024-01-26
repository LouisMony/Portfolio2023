import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Work from "../pages/Work/Work";
import { projectsData } from "../js/worklist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      ...projectsData.map((project) => ({
        path: project.path,
        element: <Work {...project.data} />,
      })),
    ],
  },
]);