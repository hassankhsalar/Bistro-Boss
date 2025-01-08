import React from "react";
import MenuItem from "../../components/MenuItem";
import Cover from "../../components/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img}) => {
  return (
    <div className="pt-12">
        {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-slate-300 mt-4">Order Your Favorite Food</button></Link>
    </div>
  );
};

export default MenuCategory;
