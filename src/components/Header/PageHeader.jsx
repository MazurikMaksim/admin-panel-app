import { useState } from "react";
import Button from "../Elements/Button";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

const wrapperClass = "page-header";
const headerClass = "page-header__text";
const buttonClass = "page-header__button page-header__button_transparent";

export const PageHeader = () => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className={wrapperClass}>
      <h1 className={headerClass}>Список заказов</h1>
      <Button className={buttonClass} onClick={switchTheme} svgName={theme === "light" ? "sun" : "moon"}>
      {theme === "light" ? 'Светлая тема' : 'Тёмная тема'}
      </Button>
    </div>
    </ThemeProvider>
  );
};
