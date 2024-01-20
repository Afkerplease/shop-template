import React from "react";
const categories = [
  { name: "Chairs", quantity: "16" },
  { name: "Tables", quantity: "16" },
  { name: "Sofas", quantity: "16" },
  { name: "Armchairs", quantity: "16" },
  { name: "Beds", quantity: "16" },
  { name: "Storage", quantity: "16" },
  { name: "Textiles", quantity: "16" },
  { name: "Lighting", quantity: "16" },
  { name: "Toys", quantity: "16" },
  { name: "Decor", quantity: "16" },
];

const OurCategories = () => {
  return (
    <div>
      <h2 className=" text-2xl font-bold mt-8">Our categories</h2>
      <p>Lots of new products and product collections</p>
      <div className=" grid gap-3 grid-cols-2 px-2">
        {categories.map((categorie) => {
          return (
            <div key={categorie.name} className="card w-30     ">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{categorie.name} </h2>

                <div className="card-actions ">
                  <p> {categorie.quantity} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCategories;
