import { NavLink } from "react-router-dom";
import { Typography } from "@app/ui-kit";

import {
  Bell,
  House,
  Users,
  Search,
  Calendar,
  MessagesSquare,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Home",
    link: "/",
    icon: House,
  },
  {
    name: "Discussion",
    link: "/discussion",
    icon: MessagesSquare,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: Search,
  },
  {
    name: "Events",
    link: "/events",
    icon: Calendar,
  },
  {
    name: "Members",
    link: "/members",
    icon: Users,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: Bell,
  },
];

function SideBar() {
  return (
    <div className="flex flex-col items-start gap-2 md:py-2 md:px-3">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            to={item.link}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center w-full gap-3 md:gap-4 p-2 md:p-3 hover:bg-base-200 hover:dark:bg-base-200-dark rounded-lg ${isActive ? "bg-base-300 dark:bg-base-300-dark" : ""}`
            }
          >
            <Icon
              size={22}
              className="text-base-content dark:text-base-content-dark"
            />

            <Typography variant={"caption"} className="text-base">
              {item.name}
            </Typography>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBar;
