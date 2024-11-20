import { sideBar } from "./helper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function SideBar() {
  const [isActivated, setIsActivated] = useState("add moderator");

  const handleToggle = (content_name) => {
    if (sideBar.some((item) => item.name === content_name)) {
      setIsActivated((prev) => (prev === content_name ? "" : content_name));
    }
  };

  return (
    <section className="min-w-fit md:w-1/4 capitalize h-screen border">
      <header className=" border border-[#02002D] p-4 ">
        <Link href="/home">
          <div className="flex items-center">
            <Image
              src="/LandingPage/logo.png"
              alt="Governator Logo"
              width={40}
              height={40}
              // priority={true}
              loading="lazy"
            />
            <span className={`font-bold text-md uppercase`}>Governator</span>
          </div>
        </Link>
      </header>
      <nav className="border border-t-0 border-[#02002D] h-full">
        <div className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {sideBar.map((content, idx) => (
            <Link key={idx + content.name} href={content.path}>
              <div
                style={{
                  borderRight:
                    isActivated === content.name ? "5px solid #1AC268" : "",
                  pointerEvents: isActivated === content.name ? "none" : "",
                }}
                onClick={() => handleToggle(content.name)}
                className={`flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem] mb-3  `}
              >
                {content.icon}
                <span className={`text-md hidden md:flex`}>{content.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
export default SideBar;
