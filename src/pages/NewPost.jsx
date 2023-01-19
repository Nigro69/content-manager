import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button, Modal } from "flowbite-react";
import TextEditorSidebar from "../components/textEditorSidebar/TextEditorSidebar";
import { useStateContext } from "../contexts/ContextProvider";
import { FaCrown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { FcLike } from "react-icons/fc";

export default function NewPost() {
  const { manageblog } = useStateContext();

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [tagsData, settagsData] = useState([]);
  const [readingTime, setReadingTime] = useState('')
  const [modal, setmodal] = useState(false);
  const config = {
    placeholder: "Start Writing Article...",
    height: 600,
    width: 1060,
  };

  const reset = () => {
    setContent("");
  };
  const onclick = () => {
    setmodal(true);
  };

  const getTagsData=(array)=>{
   settagsData([...array]);
  }

  const getReadingTime=(time)=>{
    setReadingTime(time);
  }

  

  
  return (
    <div className="w-full h-full bg-gray-200 ">
      <div className="p-3 gap-3 justify-end flex place-items-center">
        <button
          onClick={onclick}
          className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
        >
          Preview and Next
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full"
        >
          Reset
        </button>
      </div>
      <div className="flex">
        <TextEditorSidebar getTagsData={getTagsData} getReadingTime={getReadingTime}/>
        <JoditEditor
          id="editor"
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea
          config={config}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />
      </div>
      <Modal
        size="5xl"
        show={modal}
        onClose={() => {
          setmodal(false);
        }}
      >
        <Modal.Header>Preview</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 max-h-96 overflow-y-scroll">
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
                    {manageblog.Badge && manageblog.WriterName && (
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
                        {readingTime} read
                      </div>
                    )}
                  </div>
                  {manageblog.MoreActionMenu && (
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  )}
                </div>
                {manageblog.Tags && (<div className="p-4 bg-gray-200 rounded-lg flex gap-3 my-6">
                  {tagsData.map((data,index)=>(
                    <div className="text-sm font-semibold" key={index} >#{data}</div>
                  ))}
                </div>)}
                {/* <p className="tracking-wide font-serif text-4xl font-semibold my-10 p-2">
                  Noteworthy technology acquisitions 2021 React card
                </p> */}
                <p className="tracking-widest p-2">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </p>
                {/* <img
                  className="object-cover w-full h-96 p-6"
                  src="https://c1.wallpaperflare.com/preview/413/702/499/caucasian-girl-person-woman.jpg"
                  alt="cover"
                /> */}
                {/* {manageblog.Description && (
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
                )} */}
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onclick}>Post Article</Button>
          <Button color="gray" onClick={() => setmodal(false)}>
            continue editing
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
