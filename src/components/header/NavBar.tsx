"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="  bg-gray-400">
      <nav className="container mx-auto flex justify-between items-center h-16 ">
        <Link href="/" className="logo capitalize text-lg">
          <span className="font-bold ">secil</span>
          <span className="font-light "> store</span>
        </Link>
        <Link href="/login" className="">
          login
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
