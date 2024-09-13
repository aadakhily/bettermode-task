import { type RouteObject } from "react-router-dom";

// layouts
const DashboardLayout = () => import("../layouts/Dashboard");

// pages
const LoginPage = () => import("../pages/login/index");
const DashboardPage = () => import("../pages/dashboard/index");

const routes: RouteObject[] = [
  {
    path: "login",
    lazy: LoginPage,
  },

  {
    path: "dashboard",
    lazy: DashboardLayout,
    children: [
      {
        index: true,
        lazy: DashboardPage,
      },
    ],
  },
];

export { routes };
