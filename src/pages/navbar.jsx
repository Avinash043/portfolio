import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div className="h-16  flex flex-row sticky-top-0 justify-start items-center ">
      <div className=" basis-3/4 pl-20 text-xl font-black tracking-wide">
        <p className="">Avinash Raj</p>
      </div>
      <div className=" flex text-lg flex-row basis-1/4 justify-evenly mx-8 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Me</NavLink>
        <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")}>Project</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </div>
    </div>
  );
}
