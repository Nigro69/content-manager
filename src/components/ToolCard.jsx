import React from "react";
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function ToolCard({tool, caption}) {
    const navigate = useNavigate();
    const handelclick =() =>(
        navigate('activity')
    )
  return (
<div onClick={handelclick} className="cursor-pointer p-4 w-60 h-40 overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-lg bg-white ">

    <div className="flex">
  <h5 className=" my-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
    {tool}
  </h5>

  <IoIosArrowForward className="my-3 ml-2"/>

    </div>
  <p className="my-2 text-sm font-normal text-gray-700 dark:text-gray-400">
   {caption}
  </p>
</div>
    
  );
}
