import { Outlet } from "react-router-dom";
import Header from "../components/layouts/MainLayout/Header";
import SideBar from "../components/layouts/MainLayout/SideBar";

import { useMediaQuery } from "../hooks/useMediaQuery";

function MainLayout() {
  const isInDesktopScreen = useMediaQuery(`(min-width: 1024px)`);

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-100-dark">
      <Header />

      <div className="flex container py-4">
        {isInDesktopScreen && (
          <aside className="basis-1/4 bg-blue-400">
            <SideBar />
          </aside>
        )}

        <main className="basis-full lg:basis-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export { MainLayout as Component };
