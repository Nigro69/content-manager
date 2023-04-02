import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { Modal } from "flowbite-react";
import { formatDistanceToNow } from 'date-fns'

const DetailedBlog = () => {
  const { manageblog } = useStateContext();

  const date= new Date();
  console.log(date.toLocaleDateString())

  const blogComments=[
    {
      id:1,
      user:"Yash Barman",
      body:"Winning doesn't always mean being first.",
      created:date,
    },
    {
      id:2,
      user:"Mridul Singhal",
      body:"You are never too old to set another goal or dream a new dream.",
      created:date,
    },
    {
      id:3,
      user:"Vishal Jaiswal",
      body:"Every day may not be good",
      created:date,
    }
  ]

  const [array, setarray] = useState({});
  const [likes, setlikes] = useState([]);
  const [image, setimage] = useState("");
  const [comments, setcomments] = useState(false);

  const location = useLocation();

  const getMyResult = async () => {
    try {
        const res = await axios.get(`/blog/${location.state.id}/`);
      setarray(res.data);
      setlikes(res.data.upvotes[0]);
      setimage(res.data.image); 
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMyResult();
  }, []);

  useEffect(() => {
    console.log(location.state.id);
  }, [location]);

  return (
    <div className="p-2 bg-gray-200">
      <div>
        <p className="my-4 mx-2 font-bold text-3xl p-2 ">
          Detailed View of the Blog {location.state.id}
        </p>
      </div>
      <div className="mx-auto my-10 bg-white p-5 max-w-5xl">
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
              {manageblog.Badge && manageblog.WriterName && (
                <div className="grid place-items-center">
                  <FaCrown />
                </div>
              )}
              {manageblog.PublishDate && (
                <div className="text-sm grid place-items-center">
                  {array.created && array.created.slice(0,9)}
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
            {array.title}
          </p>
          <p className="tracking-widest p-2">{array.title}</p>
          <img
            className="object-cover w-full h-96 p-6"
            src={image}
            alt="cover"
          />
          {manageblog.Description && (
            <p className="tracking-widest p-2">{array.description}</p>
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
                <div
                  className="tracking-widest cursor-pointer"
                  onClick={() => setcomments(true)}
                >
                  {blogComments.length} Comments
                </div>
              )}
            </div>
            {manageblog.LikesCounter && (
              <div className="gap-3 flex place-items-center tracking-widest">
                <FcLike />
                {likes} Likes
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal show={comments} onClose={()=>setcomments(false)}>
        <Modal.Header>Comments</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 divide-y gap-2">
            {blogComments.map(com=>(
              <div key={com.id}>
              <div className="flex justify-between">
                <div className="font-semibold  tracking-widest text-gray-600">
                  {com.user} 
                </div>
                <div className="text-gray-500 italic font-mono font-semibold">
                 - {formatDistanceToNow(new Date(2023, 0, 20), {addSuffix:true})}
                </div>
              </div>
              <div className="text-sm">
              {com.body}
              </div>
            </div>
              ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailedBlog;
