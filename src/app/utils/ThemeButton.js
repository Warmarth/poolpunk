"use client";
import { useTheme } from "../context/index";
import { MdLightMode, MdDarkMode } from "react-icons/md";

// This function is a button that toggles the theme between light and dark mode.
export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className=" m-4 p-2  rounded-lg shadow-lg">
      {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

export const Logout = () => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
      className="m-4 p-2 rounded-lg shadow-lg"
    >
      Logout
    </button>
  );
};

export const Login = () => {
  return (
    <button
      onClick={() => {
        window.location.href = "/login";
      }}
      className="m-4 p-2 rounded-lg shadow-lg"
    >
      Login
    </button>
  );
}