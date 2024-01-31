"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const WhishlistPage = () => {
  const wishes = useSelector((store) => store.wishlist);
  console.log(wishes);
  return (
    <div className="">
      <h1>wishlist is empty</h1>
    </div>
  );
};

export default WhishlistPage;
