import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { nanoid } from "nanoid";
import { MdChevronLeft, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { categoryData } from "../data/dummy";

const NewCategory = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState();
  const [openTab, setOpenTab] = useState(1);
  const [role, setrole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    const newCategory = { id, title, description };
    console.log(newCategory);
  };

  const navigate = useNavigate();

  const back = () => {
    navigate("/catagories");
  };

  return (
    <div className="w-full bg-gray-200 p-4">
      <div className="flex justify-between mb-6">
        <div className="ml-5 flex">
          <div className="grid place-items-center">
            <MdChevronLeft
              onClick={back}
              className="h-10 w-10 p-2 hover:bg-white rounded-full bg-gray-100 cursor-pointer"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold p-2">
              Add new Category
              {/* {title ? title : "Untitled Category"} */}
            </h1>
            <p className="text-gray-600 p-2">
              Set the SEO and social sharing images and help readers navigate
              your blog.
            </p>
          </div>
        </div>
        <div className="gap-5 flex place-items-center">
          <button
            onClick={back}
            className="bg-white px-4 py-2 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold rounded-full"
          >
            Cancel
          </button>
          <button
            disabled={!title}
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl mx-4 grid grid-cols-1 divide-y">
        <div className="flex">
          <button
            onClick={() => setOpenTab(1)}
            className="text-xl font-bold p-4 focus:border-b-4 border-blue-500"
          >
            Main Category
          </button>
          <button
            onClick={() => setOpenTab(2)}
            className="text-xl font-bold p-4 focus:border-b-4 border-blue-500"
          >
            Sub Category
          </button>
        </div>
        <div className={openTab === 1 ? "p-4" : "hidden"}>
          <form onSubmit={handleSubmit}>
            <p className="p-1 m-1 font-semibold ">Title:</p>
            <input
              className="border border-blue-500 rounded-full w-96"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
            <p className="p-1 m-1 font-semibold ">Description:</p>
            <textarea
              className="border border-blue-500 rounded-lg "
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              rows="3"
              cols="80"
            />
            {!file && (
              <div class="max-w-xs my-4">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <GrAdd />
                    <span className="font-medium text-blue-500">
                      Add category Image
                    </span>
                  </span>
                  <input
                    type="file"
                    onChange={(e) => {
                      setFile(URL.createObjectURL(e.target.files[0]));
                    }}
                    name="file_upload"
                    className="hidden"
                    alt="cover"
                  />
                </label>
              </div>
            )}
            {file && (
              <div className="flex gap-4 place-items-center p-2">
                <img className="h-28 w-28 object-cover" src={file} alt="" />
                <button
                  className="px-2 py-2 rounded-full bg-gray-200 hover:bg-gray-300 hover:text-blue-500"
                  onClick={() => setFile()}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </form>
        </div>
        <div className={openTab === 2 ? "p-4" : "hidden"}>
          <form onSubmit={handleSubmit}>
            <p className="font-semibold text-lg p-2">Select the Main category</p>
            <div className="grid grid-cols-4">
              {categoryData.map((data) => (
                <div
                  key={data.id}
                  className="flex place-items-center gap-3 p-2"
                >
                  <input className="rounded-xl" type="checkbox" checked={role === data.title} onChange={() => setrole(data.title)}/>
                  <div className="font-semibold p-1">{data.title}</div>
                </div>
              ))}
            </div>
            <p className="p-1 m-1 font-semibold ">Title:</p>
            <input
              className="border border-blue-500 rounded-full w-96"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
            <p className="p-1 m-1 font-semibold ">Description:</p>
            <textarea
              className="border border-blue-500 rounded-lg "
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              rows="3"
              cols="80"
            />
            {!file && (
              <div class="max-w-xs my-4">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <GrAdd />
                    <span className="font-medium text-blue-500">
                      Add category Image
                    </span>
                  </span>
                  <input
                    type="file"
                    onChange={(e) => {
                      setFile(URL.createObjectURL(e.target.files[0]));
                    }}
                    name="file_upload"
                    className="hidden"
                    alt="cover"
                  />
                </label>
              </div>
            )}
            {file && (
              <div className="flex gap-4 place-items-center p-2">
                <img className="h-28 w-28 object-cover" src={file} alt="" />
                <button
                  className="px-2 py-2 rounded-full bg-gray-200 hover:bg-gray-300 hover:text-blue-500"
                  onClick={() => setFile()}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
