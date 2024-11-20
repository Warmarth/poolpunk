"use client";
import { HomeTracker, HomeVoteCard } from "./components/helper";
import { HomeFilter } from "./components/homeFilter";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="lg:w-4/6 space-y-2">
        <HomeFilter />
        <div className="text-left">
          <section className="  px-4 space-y-4 py-3 transition">
            <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')] duration-300 rounded-lg px-1">
              <HomeTracker tracker={"ongoing"} />
              <HomeVoteCard trend={true} />
            </div>
            <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')] duration-300 rounded-lg  px-1">
              <HomeTracker tracker={"trending"} />
              <HomeVoteCard trend={false} />
            </div>
            <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')] duration-300 rounded-lg px-1">
              <HomeTracker tracker={null} />
              <HomeVoteCard trend={true} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
