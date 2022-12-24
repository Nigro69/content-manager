import React from "react";

export default function CardComponent({ name }) {
  return (
      <div className="flex w-128 h-43 overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-lg bg-white ">
        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
          <img
            className="object-cover w-full h-48"
            src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
            alt="image"
          />
        </div>

        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {name} with Image
          </h4>
          <p className="mb-2 leading-normal">
            react tailwind css card with image It is a long established fact
            that a reader will be distracted by the readable content.
          </p>
          <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
            Read more
          </button>
        </div>
      </div>
  );
}
