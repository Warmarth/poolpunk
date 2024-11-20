"use client";
import { useState } from "react";
import { LuContact } from "react-icons/lu";
import { NavBarIcon } from "./helper";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";

export function HomeFilter() {
  const [selectValue, setSelectValue] = useState("trending_votes");

  const option = (
    <select
      className="w-[8rem] px-2 rounded-md py-1 outline-none"
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value)}
    >
      <option className=" mb-2 text-xs hover:bg-green-500" value="ended_votes">
        ended Votes
      </option>
      <option className=" text-xs hover:bg-green-500" value="trending_votes">
        Trending Votes
      </option>
    </select>
  );

  return (
    <section className=" flex items-center  w-full justify-between ">
      <article className=" border py-2 px-2 w-2/3 rounded-lg">
        <div className=" flex items-center justify-between">
          <p className=" px-1 inline-flex rounded-md">
            <small className=" ">
              sort by:
              <span className="text-green-400"> {option}</span>
            </small>
          </p>

          <p>
            <small className=" ">
              Ongoing Voting: <span className="text-green-400">{`24`}</span>
            </small>
          </p>
        </div>
      </article>
    </section>
  );
}

export const HomeScreenMenu = () => {
  return (
    <div className=" w-fit h-[6rem] absolute right-0 shadow-lg rounded-lg text-xs p-1 ">
      <Link href="/dashboard">
        <NavBarIcon
          iconName={"my profile"}
          className={
            "list-none top-0 px-2 py-2 border-b-[0.1rem] flex flex-row-reverse items-center justify-between gap-12  hover:bg-slate-500 hover:rounded "
          }
          span={" text-nowrap"}
          icon={<LuContact />}
        />
      </Link>
      <NavBarIcon
        iconName={"sign out"}
        className={
          "list-none absolute bottom-0 px-2 py-2 pb-1 border-t-[0.1rem] flex flex-row-reverse  items-center justify-between gap-16 hover:bg-slate-500 hover:rounded "
        }
        span={"text-nowrap"}
        icon={<HiOutlineLogout />}
      />
    </div>
  );
};
