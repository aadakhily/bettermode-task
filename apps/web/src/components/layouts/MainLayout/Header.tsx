import { Typography } from "@app/ui-kit";
import { Handshake, Search } from "lucide-react";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

import MobileMenu from "./MobileMenu";
import HeaderActions from "../../HeaderActions/HeaderActions";
import { Link } from "react-router-dom";

function Header() {
  const isInMobileScreen = useMediaQuery(`(max-width: 1024px)`);

  return (
    <header className="px-3 py-2  lg:py-3 lg:px-4 bg-base-100 dark:bg-base-100-dark border-b border-b-base-300 dark:border-b-base-300-dark shadow-sm z-10 sticky top-0">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isInMobileScreen && <MobileMenu />}

          <Link to={"/"} className="flex items-center gap-3">
            <Handshake
              size={isInMobileScreen ? 25 : 34}
              className="text-base-content dark:text-base-content-dark"
            />

            <Typography className="text-2xl font-bold hidden lg:block">
              BetterFeel
            </Typography>
          </Link>
        </div>

        <div className="basis-3/5 bg-base-200 dark:bg-base-200-dark py-[6px] px-2 rounded-lg flex items-center gap-3">
          <Search className="text-base-content dark:text-base-content-dark" />

          <input
            type="text"
            placeholder="search ..."
            className="bg-[unset] w-full outline-none py-[2px] text-base-content dark:text-base-100-dark"
          />
        </div>

        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
