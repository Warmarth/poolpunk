"use client";

import MenuBar from "./components/menubar";
import SideBar from "./components/sideBar";

export default function DashboardLayout({ children }) {

  return (
    <main className="relative w-full h-screen overflow-hidden flex py-2 px-1  gap-2">
      <SideBar />
      <div className=" w-full h-full ">
        <MenuBar />
        <h1 className="text-2xl font-bold"></h1>
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </main>
  );
}
