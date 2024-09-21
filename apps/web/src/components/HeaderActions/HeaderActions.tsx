import ThemeSwitcher from "./ThemeSwitcher";
import UserActions from "./UserActions";

function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:block">
        <ThemeSwitcher />
      </div>

      <UserActions />
    </div>
  );
}

export default HeaderActions;
