import React, { useEffect } from "react";
import axios from "axios";
import MenuIcon from '../components/MenuIcon'



export default function Activity() {



  const getMyResult = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/blogs/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    
    getMyResult();
    
  }, )
  

  return (
    <div className="bg-gray-200 w-full p-4">
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Here’s your latest site and business activity</h1>
          <p className="text-gray-600 p-2">
            Manage writers for your blog, create and customize their public
            profiles. Everyone here has permission to write posts.
          </p>
        </div>
        <div className=" my-4 gap-5">
          <MenuIcon/>
          <button className="bg-white my-4 mx-4 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-1 px-2 rounded-full">
            Track your Activity
          </button>
        </div>
      </div>
    </div>
  );
}
