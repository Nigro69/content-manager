import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { categoryData } from "../data/dummy";
import { IoIosArrowDown } from "react-icons/io";

export default function Catagories() {
  // eslint-disable-next-line
  const [categories, setcategories] = useState(categoryData);
  const [openTab, setOpenTab] = useState(1);

  const navigate = useNavigate();

  const newCategory = () => {
    navigate("new-category");
  };
  console.log(openTab);
  return (
    <div className="w-full h-full p-4 bg-gray-200">
      <div className="flex justify-between place-items-center">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-4xl font-bold p-2">Categories</h1>
        </div>
        <div className=" my-4 gap-5">
          <button
            onClick={newCategory}
            className="flex place-items-center gap-2 bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
          >
            <GrAdd />
            New Category
          </button>
        </div>
      </div>
      <hr className="my-4 mx-auto w-full h-px bg-gray-400 rounded border-0 dark:bg-gray-700" />

      <div className="grid grid-cols-5 relative place-items-center gap-y-3">
        {categories.map((data, index) => (
          <div key={data.id} className="group">
            <button
              onClick={() => setOpenTab(index + 1)}
              className="flex gap-2 place-items-center hover:bg-gray-300 p-2 font-semibold focus:bg-blue-500 focus:text-white rounded-xl"
            >
              <div>{data.title}</div>
              <div>
                <IoIosArrowDown />
              </div>
            </button>
            <div className="collapse absolute group-hover:visible bg-white rounded-md shadow-lg p-4 ">
              {data.subCategories.map((sub) => (
                <div className="text-sm tracking-widest cursor-pointer hover:bg-gray-100 hover:scale-105 p-2">
                  {sub.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-4 mx-auto w-full h-px bg-gray-400 rounded border-0 dark:bg-gray-700" />
      <div className="mx-6 mt-10">
        {categories.map((data, index) => (
          <div
            className={
              openTab === index + 1
                ? " bg-gray-100 rounded-xl p-4 grid grid-cols-1 divide-y"
                : "hidden"
            }
          >
            <div className="flex p-4 justify-between">
              <div>
                <p className="text-xl my-2 font-bold">
                  {data.title}: Sub Categories
                </p>
                <p className="text-sm tracking-wider">
                  Edit your categories to set the URL, SEO and social sharing
                  image.
                </p>
              </div>
              <div className="grid place-items-center border px-2">
                {data.subCategories.length}
              </div>
            </div>
            {data.subCategories.map((category) => (
              <div className="p-4 flex justify-between place-items-center">
                <p>{category.name}</p>
                <p>{category.postCount} posts</p>
                <div className="flex gap-4 place-items-center">
                  <button className="px-3 py-1 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
