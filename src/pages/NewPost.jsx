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
import axios from "../axios";
import { HiCheck } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/config";
import { useEffect } from "react";

export default function NewPost() {
  const { manageblog } = useStateContext();
  const location = useLocation();

  const editor = useRef(null);
  const [title, settitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsData, settagsData] = useState([]);
  const [readingTime, setReadingTime] = useState("");
  const [modal, setmodal] = useState(false);
  const [successPost, setsuccessPost] = useState(false);

  const config = {
    placeholder:
      "Please Add a Title from add section first then start writing Article...",
    height: 600,
    width: 1060,
  };

  const [wId, setwId] = useState(null);
  const [wName, setwName] = useState("");
  const getwriterId= async ()=>{
    try {
      const res = await axios.get("/writers/");
      console.log(res.data);
      let array=res.data
      {array.map(itr=>{
        (itr.email == auth.currentUser.email && setwId(itr.id))
      })}
      console.log(wId);
    } catch (error) {
      console.log(error.message);
    }
  }
  const getwriterName= async ()=>{
    try {
      const res = await axios.get("/writers/");
      console.log(res.data);
      let array=res.data
      {array.map(itr=>{
        (itr.email == auth.currentUser.email && setwName(itr.name))
      })}
      console.log(wName);
    } catch (error) {
      console.log(error.message);
    }
  }

  const reset = () => {
    setContent("");
    settitle("");
  };

  function convert() {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  const onclick = () => {
    const body = convert();
    let text = body.props.dangerouslySetInnerHTML.__html;
    let len = title.replace(/<[^>]+>/g, "").length;
    let position1 = text.search("src");
    let position2 = text.search("alt");
    let finalImage = text.slice(position1 + 5, position2 - 2);
    let finalTitle = title.replace(/<[^>]+>/g, "");
    let finalBody = text.replace(/<[^>]+>/g, "").slice(len);
    console.log(finalTitle,finalImage,finalBody,wId,wName);
    // console.log(body.props.dangerouslySetInnerHTML.__html);
    getMyResult(finalTitle,finalImage,finalBody);
    setmodal(false);
    setsuccessPost(true);
  };

    const updateThisArticle=()=>{
      const body = convert();
    let text = body.props.dangerouslySetInnerHTML.__html;
    let len = title.replace(/<[^>]+>/g, '').length;
    let position1 = text.search("src");
    let position2 = text.search("alt");
    let finalImage = text.slice(position1 + 4, position2 - 1);
    let finalTitle = title.replace(/<[^>]+>/g, '');
    let finalBody = text.replace(/<[^>]+>/g, '').slice(len);
    updateArticle(location.state.id,finalTitle,finalImage,finalBody,location.state.name,location.state.host);
    console.log(location.state.id,finalTitle,finalImage,finalBody);
    setmodal(false);
    setsuccessPost(true);
    }

    const updateArticle = async (id,finalTitle, finalImage, finalBody,name,host) => {
      try {
        const res = await axios.put(`/blog/${id}/`, {
          title: finalTitle,
          description: finalBody,
          name:name,
          host:host,
          image: finalImage,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

  useEffect(() => {
    {
      location.state && getmyResult(location.state.id);
    }
    getwriterId();
    getwriterName();
  }, []);

  const getmyResult = async (id) => {
    try {
      const res = await axios.get(`/blog/${id}/`);
      console.log(res.data);
      
      setContent(`<p><strong style="font-size: 48px;">${res.data.title}</strong></p><p><strong style="font-size: 48px;"><img src=${res.data.image} alt="" width="651" height="319"></strong></p><p><strong style="font-size: 14px;"><br></strong></p><p>${res.data.description}</p>`)
      settitle(res.data.title)
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMyResult = async (finalTitle, finalImage, finalBody) => {
    try {
      const res = await axios.post("/blogs/", {
        title: finalTitle,
        description: finalBody,
        name:wName,
        host:wId,
        image: finalImage,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTagsData = (array) => {
    settagsData([...array]);
  };

  const getReadingTime = (time) => {
    setReadingTime(time);
  };

  const getTitle = (title) => {
    settitle(title);
    {!location.state && setContent(title)};
    {location.state && setContent(title+content.slice(title.length))}
  };

  const preview = () => {
    setmodal(true);
  };

  return (
    <div className="w-full h-full bg-gray-200 ">
      <div className="p-3 gap-3 justify-end flex place-items-center">
        <button
          onClick={preview}
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
        <TextEditorSidebar
          getTagsData={getTagsData}
          getReadingTime={getReadingTime}
          getTitle={getTitle}
        />
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
                {manageblog.Tags && (
                  <div className="p-4 bg-gray-200 rounded-lg flex gap-3 my-6">
                    {tagsData.map((data, index) => (
                      <div className="text-sm font-semibold" key={index}>
                        #{data}
                      </div>
                    ))}
                  </div>
                )}
                {/* <p className="tracking-wide font-serif text-4xl font-semibold my-10 p-2">
                  Noteworthy technology acquisitions 2021 React card
                </p> */}
                <p className="tracking-widest p-2">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </p>

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
          {!location.state && <Button onClick={onclick}>Post Article</Button>}
          {location.state && <Button onClick={updateThisArticle}>Update Article</Button>}
          <Button color="gray" onClick={() => setmodal(false)}>
            continue editing
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={successPost}
        size="md"
        popup={true}
        onClose={() => setsuccessPost(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiCheck className="animate-bounce mx-auto p-1 mb-4 h-14 w-14 rounded-full bg-green-300 text-gray-600 dark:text-gray-200" />
            <h3 className="tracking-widest mb-5 text-lg font-normal text-gray-600 dark:text-gray-400">
              Your post has been successfully posted.
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="success" onClick={() => setsuccessPost(false)}>
                Okay
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
