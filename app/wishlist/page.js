import Link from "next/link";
import React from "react";

const WhishlistPage = () => {
  return (
    <div>
      {" "}
      <h1>wishlist</h1>
      <Link className=" text-2xl" href="/">
        go to home page
      </Link>
    </div>
  );
};

export default WhishlistPage;
