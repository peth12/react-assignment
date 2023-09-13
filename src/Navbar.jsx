import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center  text-white font-bold gap-8 p-4 pe-10">
      <Link to={"/"}>
        <button className="bg-transparent text-white p-1 px-24 text-[32px]  rounded-xl hover:scale-105 duration-150 hover:bg-indigo-600 ">
          Home
        </button>
      </Link>
      <Link to={"/owner"}>
        <button className="bg-transparent text-white p-1 px-24 text-[32px]  rounded-xl hover:scale-105 duration-150 hover:bg-indigo-600">
          Owner
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
