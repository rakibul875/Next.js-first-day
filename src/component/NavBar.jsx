"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";



const NavBar = () => {
  const pathName=usePathname()
  const links = (
    <>
      <li className={`${pathName==="/"? "text-green-400 border border-green-400":''}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`${pathName==="/about"? "text-green-400 border border-green-400":''}`}>
        <Link href="/about">About</Link>
      </li>
      <li className={`${pathName==="/contact"? "text-green-400 border border-green-400":''}`}>
        <Link href="/contact">Contact</Link>
      </li>
      <li className={`${pathName==="/userData"? "text-green-400 border border-green-400":''}`}>
        <Link href="/userData">User Data</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:flex">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
