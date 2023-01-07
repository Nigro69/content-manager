import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiPencilAlt } from "react-icons/hi";
import { MdOutlineDashboard, MdLocalActivity } from "react-icons/md";
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

  const [menus, setmenus] = useState([]);

  useEffect(() => {
    if (admin) {
      setmenus([
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "Activity", link: "/activity", icon: MdLocalActivity },
        { name: "Site & App", link: "/site", icon: SiSitepoint },
        {
          name: "Overview",
          link: "/overview",
          icon: TbReportAnalytics,
          margin: true,
        },
        { name: "Posts", link: "/posts", icon: BsFillFileEarmarkPostFill },
        { name: "Catagories", link: "/catagories", icon: FiFolder },
        { name: "Writers", link: "/writers", icon: HiPencilAlt, margin: true },
        { name: "Setting", link: "/setting", icon: RiSettings4Line },
      ]);
    }

    if (manager) {
      setmenus([
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        {
          name: "Overview",
          link: "/overview",
          icon: TbReportAnalytics,
          margin: true,
        },
        { name: "Posts", link: "/posts", icon: BsFillFileEarmarkPostFill },
        { name: "Catagories", link: "/catagories", icon: FiFolder },
        { name: "Writers", link: "/writers", icon: HiPencilAlt, margin: true },
        { name: "Setting", link: "/setting", icon: RiSettings4Line },
      ]);
    }

    if (guestWriter) {
      setmenus([{ name: "Posts", link: "/", icon: BsFillFileEarmarkPostFill }]);
    }
    if (editor) {
      setmenus([
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "Posts", link: "/posts", icon: BsFillFileEarmarkPostFill },
        { name: "Catagories", link: "/catagories", icon: FiFolder },
        { name: "Writers", link: "/writers", icon: HiPencilAlt },
      ]);
    }
  }, [admin, editor, guestWriter,manager]);

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
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#3d3d3d" : "",
              })}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  activeMenu && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
