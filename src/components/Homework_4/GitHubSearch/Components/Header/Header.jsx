import React, { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import style from "./Header.module.scss";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className={style.Header}>
      <p className={style.Header_Title}>Find User</p>
      <div onClick={toggleTheme} className={style.Header_Toggle}>
        <span>{theme}</span>
        {theme === "light" ? (
          <BsSunFill size="16px" />
        ) : (
          <BsMoonStarsFill size="16px" />
        )}
      </div>
    </header>
  );
}
