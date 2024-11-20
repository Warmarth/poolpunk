import Link from "next/link";
import { useState } from "react";
import { adminSideBar } from "./helper";
import Image from "next/image";

function AdminSidebar() {
  const [activeItem, setActiveItem] = useState("add modarator");

  const handleActiveItem = (conntextName) => {
    if (adminSideBar.some((item) => item.name === conntextName)) {
      setActiveItem((prev) => (prev === conntextName ? "" : conntextName));
    }
  };

  return (
    <section className="min-w-fit md:w-1/4 capitalize">
      <header className=" border border-[#02002D] p-4 ">
        <div className="flex items-center">
          <Image
            src="/LandingPage/logo.png"
            alt="Governator Logo"
            width={40}
            height={40}
            // priority={true}
            loading="lazy"
          />
          <span className={`font-bold hidden md:inline text-md uppercase`}>Governator</span>
        </div>
      </header>
      <nav className="border border-[#02002D] min-h-full ">
        <ul className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {adminSideBar.map((content) => (
            <Link key={content.name} href={content.path}>
              <div
                style={{
                  borderRight:
                    activeItem === content.name ? "5px solid #1AC268" : "",
                  pointerEvents: activeItem === content.name ? "none" : "",
                }}
                onClick={() => handleActiveItem(content.name)}
                className={`flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 mb-3 hover:text-white hover:shadow-md hover:px-3
                  ${
                    activeItem === true ? "border-r-[#1AC268]" : ""
                  } transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem] `}
              >
                {content.icon}
                <span className={`text-md hidden md:flex`}>{content.name}</span>
              </div>
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default AdminSidebar;
