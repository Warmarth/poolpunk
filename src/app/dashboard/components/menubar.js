import { NavBarIcon } from "./helper";
import { RiMenuUnfold4Line2 } from "react-icons/ri";

export default function MenuBar() {
  return (
    <section className="p-2 border border-[#02002D] flex items-center justify-between w-full rounded-lg capitalize ">
      <div>
        <NavBarIcon
          icon={<RiMenuUnfold4Line2 />}
          className={
            "text-xl list-none border border-[#cecdd4] p-1 rounded-lg  bg-white  hidden md:flex"
          }
        />
      </div>
      <w3m-button label="Get Started" loadingLabel="please wait" />
    </section>
  );
}
