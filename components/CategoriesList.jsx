import React from "react";
import Link from "next/link";
const categories = [
  { name: "Chairs", icon: "🪑" },
  { name: "Tables", icon: "❌" },
  { name: "Armchairs", icon: "💺" },
  { name: "Sofas", icon: "❌" },
  { name: "Beds", icon: "🛌" },
  { name: "Storage", icon: "🪑" },
  { name: "Textiles", icon: "🪑" },
  { name: "Lighting", icon: "💡" },
  { name: "Toys", icon: "🧸" },
  { name: "Decor", icon: "💢" },
];

function CategoriesList() {
  return (
    <div className=" hidden max-w-screen-2xl  items-center  mx-auto mt-4  lg:flex justify-between">
      <div className=" flex gap-6 ">
        {categories.map((categorie) => {
          return (
            <Link
              className=" hover:text-orange-500"
              href={`/product-category/${categorie.name}`}
              key={categorie.name}
            >
              {" "}
              <span>{categorie.icon} </span> {categorie.name}{" "}
            </Link>
          );
        })}
      </div>
      <div className=" bg-base-200 px-4 py-2 rounded-full">
        <p>Free shipping for all orders of $1,300</p>
      </div>
    </div>
  );
}

export default CategoriesList;
