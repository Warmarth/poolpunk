"use client";

import AdminMenu from "./components/adminmenu";
import AdminSidebar from "./components/Adminside";
export default function AdminLayout({ children }) {
  return (
    <main className=" min-w-full h-screen overflow-hidden flex p-4  gap-2">
      <AdminSidebar />
      <div className="relative w-full ">
        <AdminMenu />
        <div className="w-full flex items-center px-4"></div>
        <div className="min-w-fit h-full">{children}</div>
      </div>
    </main>
  );
}
