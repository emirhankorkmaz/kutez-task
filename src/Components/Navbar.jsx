import React from "react";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [isFilter, setFilter] = useState(true)
  console.log(isFilter);
  return (
    <div className="navBar">
      <h1>MY JEWELRY STORE</h1>
      <div className="basket-search">
        {data.map((img, key) => (
          <img onClick={() => {setFilter(!isFilter)}} key={key} src={img} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
