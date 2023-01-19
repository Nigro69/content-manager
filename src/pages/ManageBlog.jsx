import { Button, Modal, Tabs } from "flowbite-react";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import blocks from "../data/images/blocks.png";
import grid from "../data/images/grid.png";
import layout from "../data/images/layout.png";
import menu from "../data/images/menu.png";
import { useStateContext } from "../contexts/ContextProvider";
import { HiCheck } from "react-icons/hi";

const ManageBlog = () => {
  const { setmanageblog, manageblog } = useStateContext();

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    setmanageblog({ ...manageblog, [value]: checked });
  };

  const [changed, setchanged] = useState(false);

  return (
    <div className="bg-gray-200 p-4 w-full h-full">
        <Modal show={changed} size="md" popup={true} onClose={()=>setchanged(false)}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiCheck className="animate-bounce mx-auto p-1 mb-4 h-14 w-14 rounded-full bg-green-300 text-gray-600 dark:text-gray-200" />
              <h3 className="tracking-widest mb-5 text-lg font-normal text-gray-600 dark:text-gray-400">
                Changes saved Successfully
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="success" onClick={()=>setchanged(false)}>
                  Okay
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Manage Blog</h1>
          <p className="text-gray-600 p-2">
            You can manage your blog content here and other attributes related
            to blog like display, design and layout.
          </p>
        </div>
      </div>
      <div className="p-4">
        {/* eslint-disable-next-line */}
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Display">
            <div>
              <div className="mb-6 flex justify-between border-b-2 border-gray-400">
                <p className="text-2xl font-bold p-2 my-2">
                  What shows on your feed
                </p>
                <button
                  onClick={() => {
                    setchanged(!changed);
                  }}
                  className="border border-blue-800 bg-blue-500 my-4 mx-4 hover:bg-white text-white hover:text-blue-500 font-semibold py-1 px-2 rounded-full"
                >
                  Save Changes
                </button>
              </div>
              <form className="grid grid-cols-2">
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.WriterName}
                    value="WriterName"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Writer name
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.Image}
                    value="Image"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">Image</span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    value="Badge"
                    checked={manageblog.Badge}
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">Badge</span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.ReadingTime}
                    value="ReadingTime"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Reading Time
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.PublishDate}
                    value="PublishDate"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Publish Date
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.CategoryLabel}
                    value="CategoryLabel"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Category Label
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.MoreActionMenu}
                    value="MoreActionMenu"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    More Action Menu
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.CommentsCounter}
                    value="CommentsCounter"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Comments Counter
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.Description}
                    value="Description"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Description
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.ViewCounter}
                    value="ViewCounter"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    View Counter
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.LikesCounter}
                    value="LikesCounter"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Likes Counter
                  </span>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="rounded-lg"
                    checked={manageblog.Tags}
                    value="Tags"
                    onChange={handleChange}
                  />
                  <span className="px-4 py-1 text-md font-semibold">
                    Tags
                  </span>
                </div>
              </form>
            </div>
            <div className="my-10 bg-white p-5 max-w-5xl">
              <div className="h-full  w-full max-w-5xl border border-black px-28 py-16">
                <div className="flex justify-between place-items-center">
                  <div className="flex gap-3 p-2">
                    {manageblog.WriterName && manageblog.Image && (
                      <div className="font-semibold p-1 rounded-full text-white bg-gray-400 h-7 w-7 text-center">
                        Y
                      </div>
                    )}
                    {manageblog.WriterName && (
                      <div className="text-sm grid place-items-center">
                        Yash Barman
                      </div>
                    )}
                    {(manageblog.Badge && manageblog.WriterName) && (
                      <div className="grid place-items-center">
                        <FaCrown />
                      </div>
                    )}
                    {manageblog.PublishDate && (
                      <div className="text-sm grid place-items-center">
                        Dec 2, 2022
                      </div>
                    )}
                    {manageblog.ReadingTime && (
                      <div className="text-sm grid place-items-center">
                        1 min read
                      </div>
                    )}
                  </div>
                  {manageblog.MoreActionMenu && (
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  )}
                </div>
                <p className="tracking-wide font-serif text-4xl font-semibold my-10 p-2">
                  Noteworthy technology acquisitions 2021 React card
                </p>
                <p className="tracking-widest p-2">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <img
                  className="object-cover w-full h-96 p-6"
                  src="https://c1.wallpaperflare.com/preview/413/702/499/caucasian-girl-person-woman.jpg"
                  alt="cover"
                />
                {manageblog.Description && (
                  <p className="tracking-widest p-2">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                )}
                <hr className="mt-8 w-full h-px bg-gray-400 rounded border-0  dark:bg-gray-700" />
                <div className="gap-3 flex place-items-center p-2 text-sm">
                  share
                  <IoIosShareAlt />
                </div>
                <hr className="mb-6 w-full h-px bg-gray-400 rounded border-0  dark:bg-gray-700" />
                <div className="flex justify-between p-2 text-sm">
                  <div className="flex gap-3">
                    {manageblog.ViewCounter && (
                      <div className="tracking-widest">0 Views</div>
                    )}
                    {manageblog.CommentsCounter && (
                      <div className="tracking-widest">0 Comments</div>
                    )}
                  </div>
                  {manageblog.LikesCounter && (
                    <div className="gap-3 flex place-items-center tracking-widest">
                      <FcLike />
                      Likes
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Layout">
            <div>
              <div className="mb-6 flex justify-between border-b-2 border-gray-400">
                <p className="text-2xl font-bold p-2 my-2">Choose A Layout</p>
                <button className="border border-blue-800 bg-blue-500 my-4 mx-4 hover:bg-white text-white hover:text-blue-500 font-semibold py-1 px-2 rounded-full">
                  Save Changes
                </button>
              </div>
              <div className="grid grid-cols-3 p-4 gap-y-10 justify-between place-items-center bg-gray-200">
                <button className="focus:outline-none focus:ring focus:ring-blue-500 rounded-xl p-2">
                  <div>
                    <div className="transition ease-in-out delay-150 bg-gray-300 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 p-6 rounded-xl m-2">
                      <img
                        className="h-24 w-24 transition ease-in-out hover:translate-y-1 delay-150"
                        src={grid}
                        alt="grid"
                      />
                    </div>
                    <p className=" text-center font-semibold">Side By Side</p>
                  </div>
                </button>
                <button className="focus:outline-none focus:ring focus:ring-blue-500 rounded-xl p-2">
                  <div>
                    <div className="transition ease-in-out delay-150 bg-gray-300 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 p-6 rounded-xl m-2">
                      <img
                        className="h-24 w-24 transition ease-in-out hover:translate-y-1 delay-150"
                        src={blocks}
                        alt="grid"
                      />
                    </div>
                    <p className=" text-center font-semibold">Magazine</p>
                  </div>
                </button>
                <button className="focus:outline-none focus:ring focus:ring-blue-500 rounded-xl p-2">
                  <div>
                    <div className="transition ease-in-out delay-150 bg-gray-300 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 p-6 rounded-xl m-2">
                      <img
                        className="h-24 w-24 transition ease-in-out hover:translate-y-1 delay-150"
                        src={layout}
                        alt="grid"
                      />
                    </div>
                    <p className=" text-center font-semibold">Tiled</p>
                  </div>
                </button>
                <button className="focus:outline-none focus:ring focus:ring-blue-500 rounded-xl p-2">
                  <div>
                    <div className="transition ease-in-out delay-150 bg-gray-300 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 p-6 rounded-xl m-2">
                      <img
                        className="h-24 w-24 transition ease-in-out hover:translate-y-1 delay-150"
                        src={menu}
                        alt="grid"
                      />
                    </div>
                    <p className=" text-center font-semibold">Editorial</p>
                  </div>
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Design">Design</Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default ManageBlog;
