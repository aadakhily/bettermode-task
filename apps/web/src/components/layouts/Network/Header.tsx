import React from "react";

function Header() {
  return (
    <header className="p-4 border-b border-b-base-300 dark:border-b-base-300-dark shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="font-bold font-sans">BetterMode</div>

        <input type="text" />

        <div>AmirAbbas</div>
      </div>
    </header>
  );
}

export default Header;
