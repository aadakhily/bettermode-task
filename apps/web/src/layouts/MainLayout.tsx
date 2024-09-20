import { Outlet } from "react-router-dom";

import Header from "../components/layouts/Network/Header";
import SideBar from "../components/layouts/Network/SideBar";

function MainLayout() {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex container py-4">
        <aside className="basis-1/4 bg-blue-400">
          <SideBar />
        </aside>

        <main className="basis-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export { MainLayout as Component };
