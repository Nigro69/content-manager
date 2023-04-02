import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { MdChevronLeft, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase/config'
import axios from '../axios'

const WriterProfile = () => {
  const [title, settitle] = useState("");
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    getMyResult(name,title,bio,auth.currentUser.email)
  };

  const getMyResult = async (name,intrests,bio,email) => {
    try {
      const res = await axios.post("/writers/",{
        "name": name,
        "email": email,
        "interests": intrests,
        "bio": bio,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate();

  const back = () => {
    navigate("/writers");
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
            <h1 className="text-3xl font-bold p-2">Writer Profile</h1>
            <p className="text-gray-600 p-2">
              Manage what info is shown on your writers' public profile.
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
            disabled={!name}
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl mx-4 grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-bold px-4"> Profile Info</p>
          <div className="px-4 py-1">
            Give your writer a name and a profile picture.
          </div>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <p className="p-1 m-1 font-semibold ">Name:</p>
            <input
              className="border border-blue-500 rounded-full w-96"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Add name here"
              required
            />
            <p className="p-1 m-1 font-semibold ">Interests:</p>
            <input
              className="border border-blue-500 rounded-full w-96"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="e.g Food Bloger, Guest Author"
              required
            />
            <p className="p-1 m-1 font-semibold ">Bio:</p>
            <input
              className="border border-blue-500 rounded-full w-96"
              type="text"
              value={bio}
              onChange={(e) => setbio(e.target.value)}
              placeholder="e.g loves to write article"
              required
            />
            {!file && (
              <div class="max-w-xs my-4">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <GrAdd />
                    <span className="font-medium text-blue-500">
                      Add Writers Image
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

export default WriterProfile;
