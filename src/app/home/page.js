"use client";
import Home from "./Home";
import { useRole } from "../context";

export default function page() {
  const { role } = useRole();

  return <div>{role === "admin" ? <Home /> : <Home />}</div>;
}
