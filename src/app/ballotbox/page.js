"use client";
import BallotBox from "./BallotBox";
import { useRole } from "../context";

const page = () => {
  const { role } = useRole();
  return (
    <div>
      {role === "admin" ? (
        <div>
          <h1></h1>
          <BallotBox />
        </div>
      ) : (
        <div>
          <h1></h1>
          <BallotBox />
        </div>
      )}
    </div>
  );
};

export default page;
