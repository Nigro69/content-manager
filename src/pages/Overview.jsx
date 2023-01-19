import { Tabs } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CatagoryTableComponent from "../components/CatagoryTableComponent";
import HashtagTableComponent from "../components/HashtagTableComponent";
import MenuIcon from "../components/MenuIcon";
import PerformanceTableComponent from "../components/PerformanceTableComponent";
import { HashTagData, catagoryData, performanceData } from "../data/dummy";

export default function Overview() {


  const columnsofhashtag = [
    {
      name: "RANK",
      selector: (row) => row.id,
    },
    {
      name: "HASHTAG",
      selector: (row) => row.hashtag,
      style: {
        fontWeight: "bold",
        color: "rgb(59 130 246)",
      },
    },
    {
      name: "CATAGORY",
      selector: (row) => row.catagory,
    },
    {
      name: "POST COUNT",
      selector: (row) => row.postCount,
    },
    {
      name: "",
      cell: (row) => <MenuIcon />,
    },
  ];
  const columnsofcatagory = [
    {
      name: "RANKS",
      selector: (row) => row.rank,
    },
    {
      name: "CATAGORY",
      selector: (row) => row.catagory,
      style: {
        fontWeight: "bold",
        color: "rgb(59 130 246)",
      },
    },
    {
      name: "NO. OF TEAMS",
      selector: (row) => row.noOfTeams,
    },
    {
      name: "POST COUNT",
      selector: (row) => row.postCount,
    },
    {
      name: "",
      cell: (row) => <MenuIcon />,
    },
  ];

  const columnsofperformance = [
    {
      name: "RANK",
      selector: (row) => row.id,
    },
    {
      name: "TEAM",
      selector: (row) => row.team,
      style: {
        fontWeight: "bold",
        color: "rgb(59 130 246)",
      },
    },
    {
      name: "SIZE",
      selector: (row) => row.size,
    },
    {
      name: "POST COUNT",
      selector: (row) => row.postCount,
    },
    {
      name: "",
      cell: (row) => <MenuIcon />,
    },
  ];

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
          <button
            onClick={postsOverview}
            className="bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
          >
            Posts Overview
          </button>
        </div>
      </div>
      <div className="p-4 m-2">
        {/*eslint-disable-next-line */}
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Tags">
            <p className="bg-gray-900 rounded-lg font-bold text-4xl p-2 text-blue-500 mb-5">Trending #Hashtags</p>
          <HashtagTableComponent dataIn={HashTagData} columns={columnsofhashtag}/>
          </Tabs.Item>
          <Tabs.Item title="Catagories">
          <p className="bg-gray-900 rounded-lg font-bold text-4xl p-2 text-blue-500 mb-5">Top Catagories</p>
          <CatagoryTableComponent dataIn={catagoryData} columns={columnsofcatagory} />
          </Tabs.Item>
          <Tabs.Item title="Performances">
          <p className="bg-gray-900 rounded-lg font-bold text-4xl p-2 text-blue-500 mb-5">Top Performers</p>
          <PerformanceTableComponent dataIn={performanceData} columns={columnsofperformance}/>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
