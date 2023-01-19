import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [show, setshow] = useState(false);

  const navigate = useNavigate();

  

  return (
    <div>
      <button
        onClick={() => setshow(!show)}
        className="focus:ring focus:ring-blue-300 flex place-items-center gap-2 relative px-4 py-1 rounded-full bg-white border border-blue-500 text-blue-500 font-semibold "
      >
        More Actions <IoIosArrowDown />
      </button>
      <div
        className={
          show
            ? "absolute bg-white shadow-lg rounded-lg mt-2 w-32 text-center"
            : "hidden"
        }
      >
        <div onClick={()=>navigate('/writers')} className="text-sm hover:animate-pulse cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          Writer
        </div>
        <div onClick={()=>navigate('/catagories')} className="text-sm hover:animate-pulse cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          Categories
        </div>
        <div onClick={()=>navigate('/manage-blog')} className="text-sm cursor-pointer hover:animate-pulse hover:bg-gray-100 p-2 rounded-lg">
          Manage Blog
        </div>
        <div onClick={()=>navigate('/setting')} className="text-sm hover:animate-pulse cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          Settings
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
