import { NavBarIcon } from "./helper";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { HomeScreenMenu } from "./homeFilter";

import Link from "next/link";

export function HomeHeader() {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <section>
      <header className=" flex items-center justify-between rounded-lg   ">
        <Link key="scd" href="/home">
          <div className="flex items-center">
            <Image
              src="/LandingPage/logo.png"
              alt="Governator Logo"
              width={40}
              height={40}
              priority={true}
            />
            <span className={`font-bold  inline text-md uppercase`}>
              Governator
            </span>
          </div>
        </Link>
        <nav>
          <ul className=" flex items-center gap-5">
            <div className="nav">
              <w3m-button
                balance="show"
                label="Get Started"
                loadingLabel="please wait"
              />
            </div>
            <NavBarIcon
              icon={<IoIosNotificationsOutline className="text-3xl" />}
              span={"badge badge-error badge-xs absolute left-3 top-0"}
              className={"relative"}
              // iconName={""}
            />
            <div onClick={handleClick} className="relative">
              <div className="flex items-center gap-2 px-2 py-2">
                <Image
                  src="/dashboard/animoji.svg"
                  alt="avatar"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="rounded-full"
                />
                <span className={`inline text-md`}>cobby</span>
              </div>
              {user && <HomeScreenMenu />}
            </div>
          </ul>
        </nav>
      </header>
    </section>
  );
}
