import React from "react";
import image from "../Card/images.png";

export default function Card({ images, title, price, text }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div className="w-60 px-6 bg-white rounded py-6">
        <img src={images} />
        <div className="p-2"></div>
        <h2 className="font-bold text-lg ml-10"> {title} </h2>
        <p className="text text-gray-600 text-center ">{text}</p>
        <div className="m-2"></div>
        <span className="flex items-center ml-2 mt-2">
          <img src={image} className="h-3"></img>
          <img src={image} className="h-3"></img>
          <img src={image} className="h-3"></img>
        </span>
        <div className="flex justify-between">
          <button className="bg-blue-300 px-4 py-1 h-30 w-30 text-white rounded mt-3 ml-1 ">
            Add to cart
          </button>
          <p className="px-4 py-2 text-blue-300 rounded mt-3 ml-1">$ {price}</p>
        </div>
      </div>
    </div>
  );
}
