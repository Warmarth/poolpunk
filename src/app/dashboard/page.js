"use client";
import { useRole } from "../context";
import Dashboard from "./Dashboard";

const page = () => {

  const { role } = useRole();
  return (
    <div>
      {role === "admin" && (
        <div>
          <Dashboard />
        </div>
      )}
      {role === "guest" && (
        <div>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default page;
