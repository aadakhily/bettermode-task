import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App/App.tsx";
import { routes } from "./configs/routes.ts";

import "./index.css";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
