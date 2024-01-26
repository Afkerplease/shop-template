import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* mobile menu */}
      <div className=" md:hidden navbar flex justify-between px-4 bg-base-300">
        <div className="">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <h1 className=" ">Logo</h1>
        <div className="">
          <div className="">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* desktop menu */}
      <div className=" hidden md:flex navbar justify-around  px-4 bg-base-300">
        <h1>Logo</h1>
        <input placeholder="Search for products..." type="text" />
        <Link href="/wishlist" className="btn btn-circle btn-outline">
          wishlist
        </Link>
        <Link href="/compare" className="btn btn-circle btn-outline">
          compare
        </Link>
        <Link href="/">Login/Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
