import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  Typography,
} from "@app/ui-kit";
import ThemeSwitcher from "../../HeaderActions/ThemeSwitcher";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-base-content dark:text-base-content-dark" />
      </SheetTrigger>

      <SheetContent side="left" className="pt-12 px-3 ">
        <SheetTitle asChild>
          <div className="p-4 flex items-center justify-between">
            <Typography variant={"h3"} className="font-semibold">
              Menu
            </Typography>

            <ThemeSwitcher />
          </div>
        </SheetTitle>

        <SideBar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
