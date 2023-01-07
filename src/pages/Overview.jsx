import { Tabs } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Overview() {

  const navigate = useNavigate();

  const postsOverview = () => {
    navigate("/posts");
  };

  return (
    <div className="w-full p-4 bg-gray-200 ">
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Overview</h1>
          <p className="text-gray-600 p-2">
            The overall performance of article contents based on catagories
            which are on top , top performers and which are the trending tags.
          </p>
        </div>
        <div className=" my-4 gap-5">
          <button onClick={postsOverview} className="bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full">
            Posts Overview
          </button>
        </div>
      </div>
      <div className="p-4 m-2">
        {/*eslint-disable-next-line */}
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Tags">Trending Tags</Tabs.Item>
          <Tabs.Item title="Catagories">
            Top catagories
          </Tabs.Item>
          <Tabs.Item title="Performances">Top performance teams</Tabs.Item>
          <Tabs.Item title="Teams">List of teams</Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
