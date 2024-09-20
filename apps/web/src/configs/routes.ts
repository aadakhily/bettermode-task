import { type RouteObject } from "react-router-dom";

// layouts
const MainLayout = () => import("../layouts/MainLayout");

// pages
const LoginPage = () => import("../pages/login");
const PostsPage = () => import("../pages/posts");

const routes: RouteObject[] = [
  {
    path: "login",
    lazy: LoginPage,
  },

  {
    path: "posts",
    lazy: MainLayout,
    children: [
      {
        index: true,
        lazy: PostsPage,
      },
    ],
  },
];

export { routes };
