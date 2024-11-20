"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import ThemeButton from "./utils/ThemeButton";
export default function Home() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="h-full  pt-4  space-y-24 ">
      <div
        className={`flex items-center justify-between static font-bold px-3 py-2 shadow-md`}
      >
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

        <div className=" rounded-full border">
          <ThemeButton />
          {/* web3 authenticator handler */}
          <w3m-button label="Get Started" loadingLabel="please wait" />
        </div>
      </div>
      {/*first section*/}
      <div className=" text-center space-y-4 ">
        <h1 className="first-letter:capitalize font-bold text-3xl tracking-wider  ">
          It's not just a decisions
        </h1>
        <p className="capitalize text-2xl line-hieght-4">it's ownership</p>
        <section className=" bg-[url('/LandingPage/Group3.svg')] rounded-2xl mx-auto shadow-lg border relative h-60  w-fit pb-2 md:block duration-500 ease-linea bg-cover bg-center">
          <div className="hidden md:flex flex-row items-center h-full w-full duration-500 ">
            <Image
              width={100}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame109.svg"}
              className="translate-y-5  "
              priority={true}
            />
            <Image
              width={140}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame110.svg"}
              className="self-start -translate-x-5 "
              priority={true}
            />
            <Image
              width={100}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame113.svg"}
              priority={true}
              className=""
            />
            <Image
              width={140}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame112.svg"}
              className="self-start translate-x-5 "
              priority={true}
            />
            <Image
              width={100}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame111.svg"}
              className="translate-y-5 "
              priority={true}
            />
          </div>
          <div className="md:hidden flex flex-row items-center h-full w-full duration-500 ">
            <Image
              width={100}
              alt="icons"
              height={60}
              src={"/LandingPage/Frame113.svg"}
              priority={true}
              className=" m-auto animate animate-bounce "
            />
          </div>
          <p className=" text-center md:text-2xl bottom-0  badge  capitalize m-auto bg-gradient-to-tr from-[#020022] to-black hover:scale-105 -translate-y-9 md:py-4">
            start decentralized decisions
          </p>
        </section>
      </div>
      {/*second section*/}
      <div className=" block md:flex items-start justify-between  mx-auto  md:w-[80vw] w-1/2  ">
        <section className="space-y-3 mb-3">
          <h2 className="capitalize font-bold text-3xl">
            let's talk decentralized decisions
          </h2>
          <p className="text-md line-clamp-5 w-[17rem] text-pretty ">
            With a future of decentralized decision our actions are secure
          </p>
        </section>
        <Image
          width={400}
          height={400}
          alt="Your key"
          src={"/LandingPage/decs2.svg"}
          className=" bg-[url('/LandingPage/Group4.svg')] bg-cover bg-left"
          priority={true}
        />
      </div>
      {/*third section*/}
      <div className="md:w-[80vw] mx-auto text-center py-3 space-y-9 ">
        <h2 className="font-bold text-3xl">
          Its all on-chain, and remains secure and transparent with
        </h2>
        <article className="flex flex-wrap gap-10 justify-around md:h-[30rem] md:bg-[url('/LandingPage/Group5.svg')] bg-contain bg-center bg-no-repeat">
          <p className="border w-[12rem] h-[13rem] text-xs text-left text-pretty p-2 border-error rounded-lg bg-[url('/LandingPage/solar_card-2-line-duotone.svg')] bg-no-repeat bg-right-bottom bg-[length:70px] shadow-lg self-start hover:scale-105 duration-200 bg-[#F8F8FF]">
            Unique <span className="text-red-400 font-bold">NFTs</span> with
            unique <span className="text-red-400 font-bold">ID</span> that gives
            access to different polls
          </p>
          <p className="border w-[12rem] h-[13rem] text-xs text-left text-pretty p-2 border-success rounded-lg bg-[url('/LandingPage/lets-icons_group-share.svg')] bg-no-repeat  bg-right-bottom bg-[length:70px] shadow-lg self-end  bg-[#F8F8FF] hover:scale-105 duration-200">
            Create polls to decide on imoportant matter
            <span className="text-green-400 font-bold"> !</span>
          </p>
          <p className="border  w-[12rem] h-[13rem] text-xs text-left text-pretty p-2 border-warning rounded-lg bg-[url('/LandingPage/lets-icons_time-atack.svg')] bg-no-repeat bg-right-bottom bg-[length:70px] shadow-lg self-start bg-[#F8F8FF] hover:scale-105 duration-200">
            Date back to see what actually happened.Its all
            <span className="text-warning font-bold"> transparent</span> and
            secure
          </p>
        </article>
        <h2 className="font-bold text-3xl">
          Making decisions has never been faster
        </h2>
        <button
          type="button"
          className="btn rounded-[3rem] btn-gradient-to-tr from-[#020022] to-black hover:btn-outline -py-[2rem]"
        >
          Join Now!
        </button>
      </div>
      {/*fourth section*/}
      <div className="bg-gradient-to-tr from-[#090450] to-black md:h-[25rem] space-y-8 pb-2 text-[#fefefe]">
        <footer className=" block md:flex items-start justify-between ">
          <section className=" flex-1 space-y-[1rem] md:space-y-[5rem]  p-4 ">
            <div>
              <div className="flex items-center">
                <Image
                  src="/LandingPage/logo.png"
                  alt="Governator Logo"
                  width={30}
                  height={30}
                  // priority={true}
                  loading="lazy"
                />
                <span className={`font-bold text-md uppercase`}>
                  Governator
                </span>
              </div>

              <p className="text-md ">
                Join now to make decisions faster, fair and open
              </p>
            </div>
            <div>
              <p className="text-md"> Keep up with us for more details </p>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-100 w-7/12 rounded-lg p-3 mr-3 placeholder:text-gray-400 placeholder:text-md text-neutral"
                  placeholder="youremail@gmail.com"
                />
                <span>
                  <button
                    className="btn btn-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </section>

          <section className=" space-y-1 md:space-y-10 md:text-right  p-4">
            <div>
              <h2 className="font-bold text-md uppercase ">know us more</h2>
              <ul className="text-md space-y-2">
                <li>Read the Docs</li>
                <li>Know the team </li>
                <li>our roadmap </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-md uppercase mb-2">socials</h3>
              <ul className="inline-flex gap-1">
                <span>
                  <RiTwitterXFill />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </ul>
            </div>
          </section>
        </footer>
        <hr className="w-9/12 mx-auto" />
        <p className="text-center">all right reseverd @ Govornator, 2024</p>
      </div>
    </div>
  );
}
