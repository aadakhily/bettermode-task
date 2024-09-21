import { type RouteObject } from "react-router-dom";

// layouts
const MainLayout = () => import("../layouts/MainLayout");

// pages
const PostPage = () => import("../pages/post");
const PostsPage = () => import("../pages/posts");
const NotFoundPage = () => import("../pages/not-found");

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: MainLayout,
    children: [
      {
        index: true,
        lazy: PostsPage,
      },
      {
        path: "post/:postId",
        lazy: PostPage,
      },
    ],
  },
  {
    path: "*",
    lazy: NotFoundPage,
  },
];

export { routes };
