import React, { useState } from "react";
import { HiMenuAlt3, HiPencilAlt } from "react-icons/hi";
import { MdOutlineDashboard, MdLocalActivity,MdOutlineCategory } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { SiSitepoint } from "react-icons/si";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, guestWriter, admin, editor, manager } =
    useStateContext();

  const [dd1, setdd1] = useState(false);
  const [dd2, setdd2] = useState(false);
  const [dd3, setdd3] = useState(false);

  const clickeddd1=()=>{
    setdd1(!dd1);
    setdd2(false);
    setdd3(false);
  }
  const clickeddd2=()=>{
    setdd2(!dd2);
    setdd1(false);
    setdd3(false);
  }
  const clickeddd3=()=>{
    setdd3(!dd3);
    setdd1(false);
    setdd2(false);
  }

  return (
    <section className=" flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          activeMenu ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setActiveMenu(!activeMenu)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {(admin || manager) && <NavLink
            to="/"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#3d3d3d" : "",
            })}
            className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div>{React.createElement(MdOutlineDashboard, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${1 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Home
            </h2>
            <h2
              className={`${
                activeMenu && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Home
            </h2>
          </NavLink>}
          {(admin) && <NavLink
            to="/activity"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#3d3d3d" : "",
            })}
            className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div>{React.createElement(MdLocalActivity, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${2 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Activity
            </h2>
            <h2
              className={`${
                activeMenu && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Activity
            </h2>
          </NavLink>}
          {(admin) && <NavLink
            to="/site"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#3d3d3d" : "",
            })}
            className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div>{React.createElement(SiSitepoint, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${3 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Site and App
            </h2>
            <h2
              className={`${
                activeMenu && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Site and App
            </h2>
          </NavLink>}
          <div>
            <button
              onClick={clickeddd1}
              className="w-full group flex items-center text-sm  justify-between font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              Blog <IoIosArrowDown />
            </button>
            {dd1 && (
              <div className="mt-4 flex flex-col gap-4 relative">
                {(admin || editor || manager) && <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>{React.createElement(FiFolder, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${4 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Blog Dashboard
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Blog Dashboard
                  </h2>
                </NavLink>}
                {(admin || editor || manager) && <NavLink
                  to="/overview"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(TbReportAnalytics, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${5 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Overview
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Overview
                  </h2>
                </NavLink>}
                {(admin || manager) && <NavLink
                  to="/catagories"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(MdOutlineCategory, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${5 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Categories
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Categories
                  </h2>
                </NavLink>}
                {(guestWriter || manager || editor || admin) && <NavLink
                  to="/posts"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(BsFillFileEarmarkPostFill, {
                      size: "20",
                    })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${6 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Posts
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Posts
                  </h2>
                </NavLink>}
                {(admin || editor || manager) && <NavLink
                  to="/writers"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>{React.createElement(HiPencilAlt, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${7 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Writers
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Writers
                  </h2>
                </NavLink>}
              </div>
            )}
          </div>
          {(admin) && <div>
            <button
              onClick={clickeddd2}
              className="w-full group flex items-center text-sm  justify-between font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              Analytics and Reports <IoIosArrowDown />
            </button>
            {dd2 && (
              <div className="mt-4 flex flex-col gap-4 relative">
                {(admin) && <NavLink
                  to="/sales"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>{React.createElement(FiFolder, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${4 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Sales Overview
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Sales Overview
                  </h2>
                </NavLink>}
                {(admin) && <NavLink
                  to="/reports"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(TbReportAnalytics, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${5 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Reports
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Reports
                  </h2>
                </NavLink>}
              </div>
            )}
          </div>}
          {(admin) && <div>
            <button
              onClick={clickeddd3}
              className="w-full group flex items-center text-sm  justify-between font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              Finances <IoIosArrowDown />
            </button>
            {dd3 && (
              <div className="mt-4 flex flex-col gap-4 relative">
                {(admin) && <NavLink
                  to="/payments"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>{React.createElement(FiFolder, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${4 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Payments
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Payments
                  </h2>
                </NavLink>}
                {(admin) && <NavLink
                  to="/invoices"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#3d3d3d" : "",
                  })}
                  className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                >
                  <div>
                    {React.createElement(TbReportAnalytics, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${5 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Invoices
                  </h2>
                  <h2
                    className={`${
                      activeMenu && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    Invoices
                  </h2>
                </NavLink>}
              </div>
            )}
          </div>}
          {(admin || manager) && <NavLink
            to="/setting"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#3d3d3d" : "",
            })}
            className=" group flex items-center text-xs  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
          >
            <div>{React.createElement(RiSettings4Line, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${8 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Settings
            </h2>
            <h2
              className={`${
                activeMenu && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Writers
            </h2>
          </NavLink>}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
