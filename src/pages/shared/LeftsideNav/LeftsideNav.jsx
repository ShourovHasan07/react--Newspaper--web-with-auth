import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4"> All Caterogy </h2>
      {categories.map((category) => (
        <Link
          className="block p-2 ml-4 text-xl font-semibold text-blue-600 hover:text-blue-800 transition"
          key={category.id}
          to={`/category/ ${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftsideNav;
