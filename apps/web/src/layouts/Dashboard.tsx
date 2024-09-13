import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      DashboardLayout
      <Outlet />
    </div>
  );
}

export { DashboardLayout as Component };
