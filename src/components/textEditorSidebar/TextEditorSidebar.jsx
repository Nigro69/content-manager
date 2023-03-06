import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { BiCategoryAlt, BiDollarCircle } from "react-icons/bi";
import {IoMdCloseCircle } from "react-icons/io";
import { BsPlusCircle, BsSearch, BsTag, BsTranslate } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import {  FcCheckmark } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { categoryData } from "../../data/dummy";
import { nanoid } from "nanoid";
import { useStateContext } from "../../contexts/ContextProvider";

const TextEditorSidebar = ({getTagsData , getReadingTime , getTitle}) => {

  const {setmanageblog, manageblog } = useStateContext();

  const [showAdd, setshowAdd] = useState(false);
  const [settings, setsettings] = useState(false);
  const [seo, setseo] = useState(false);
  const [categories, setcategories] = useState(false);
  const [tags, settags] = useState(false);
  const [monetize, setmonetize] = useState(false);
  const [translate, settranslate] = useState(false);
  const [newCategory, setnewCategory] = useState("");
  const [categoriesData, setcategoriesData] = useState(categoryData);
  const [taggs, setTags] = useState([]);
  

  const [title, settitle] = useState("");
  const [time, settime] = useState("");
  const [file, setFile] = useState();
  const [role, setrole] = useState('')

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newTitle = { title,time };
    getTitle(`<p><strong style="font-size: 48px;">${title}</strong></p>`);
    setshowAdd(false);
    console.log(newTitle);
    settitle("")
    settime("")
    getReadingTime(newTitle.time);
  };
  const addCategory = (e) => {
    e.preventDefault();
    const newTitle = { id: nanoid(), title: newCategory, postCount: 0 };
    setcategoriesData([...categoriesData, newTitle]);
    setnewCategory("");
  };

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...taggs, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = (index) => {
    setTags([...taggs.filter((tag) => taggs.indexOf(tag) !== index)]);
  };

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    setmanageblog({ ...manageblog, [value]: checked });
  };


  return (
    <div className="w-16 h-full bg-white">
      <div className="grid place-items-center py-4 mt-14 h-full">
        <div onClick={() => setshowAdd(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BsPlusCircle className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">Add</p>
        <div onClick={() => setsettings(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <FiSettings className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">Settings</p>
        <div onClick={() => setseo(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BsSearch className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">SEO</p>
        <div onClick={() => setcategories(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BiCategoryAlt className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">Categories</p>
        <div onClick={() => settags(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BsTag className="h-15 w-15 " />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">Tags</p>
        <div onClick={() => setmonetize(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BiDollarCircle className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-4">Monetize</p>
        <div onClick={() => settranslate(true)}>
          <div className="rounded-full border p-2 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
            <BsTranslate className="h-15 w-15" />
          </div>
        </div>
        <p className="text-xs p-1 mb-2">Translate</p>
      </div>
      <Modal
        show={showAdd}
        onClose={() => {
          setshowAdd(false);
        }}
      >
        <Modal.Header>Add</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 ">
            <form onSubmit={handleAddSubmit}>
              <p className="p-4 font-semibold tracking-wide">
                Add a SEO friendly Title
              </p>
              <input
                className="border-b focus:border-b-2 border-blue-500 border-t-0 border-l-0 border-r-0 focus:ring-0 w-full"
                placeholder="Write your title here..."
                value={title}
                onChange={(e) => settitle(e.target.value)}
                type="text"
                required
              />
              <p className="p-4 font-semibold tracking-wide">
                Add Read time
              </p>
              <input
                className="border-b focus:border-b-2 border-blue-500 border-t-0 border-l-0 border-r-0 focus:ring-0 w-full"
                placeholder="X min read"
                value={time}
                onChange={(e) => settime(e.target.value)}
                type="text"
                required
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!title} onClick={handleAddSubmit}>
            Save
          </Button>
          <Button
            color="gray"
            onClick={() => {
              setshowAdd(false);
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* settings modal */}
      <Modal show={settings} onClose={() => setsettings(false)}>
        <Modal.Header>Post Settings</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="border-b">Add Cover Image</p>
            {!file && (
              <div class="max-w-xs my-4">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <GrAdd />
                    <span className="font-medium text-blue-500">Add Image</span>
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
            <p className="border-b">Publish Date</p>
            <input
              className="border border-blue-500 rounded-full"
              type="date"
            />
            <div className="flex gap-4 place-items-center">
              <input className="rounded-full" type="checkbox" checked={manageblog.WriterName } value='WriterName' onChange={handleChange}/>
              <div>Display Writers Name</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setsettings(false)}>Save</Button>
          <Button color="gray" onClick={() => setsettings(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* categories modal */}
      <Modal show={categories} onClose={() => setcategories(false)}>
        <Modal.Header>Categories</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 max-h-96 overflow-y-scroll">
            <p className="font-semibold">
              Let readers browse your posts by topic, e.g. food, lifestyle &
              travel.
            </p>
            <p className="tracking-widest border-2 p-2">Assign a category</p>
            <form className="grid grid-cols-4">
              {categoriesData.map((data) => (
                <div
                  key={data.id}
                  className="flex place-items-center gap-3 p-2"
                >
                  <input className="rounded-xl" type="checkbox" checked={role === data.title} onChange={() => setrole(data.title)}/>
                  <div className="font-semibold p-1">{data.title}</div>
                </div>
              ))}
            </form>
            <form onSubmit={addCategory} className="">
              <input
                className="p-2 w-60 rounded-t-md focus:ring-0 mr-3 border-b-2 border-b-blue-500 border-l-0 border-r-0 border-t-0 "
                placeholder="Add your custom category"
                onChange={(e) => setnewCategory(e.target.value)}
                value={newCategory}
                type="text"
                required
              />
              <button className="rounded-full px-2 py-1 bg-blue-500 text-white hover:bg-blue-700">
                + Add
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setcategories(false)}>Save</Button>
          <Button color="gray" onClick={() => setcategories(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* tags modal */}
      <Modal show={tags} onClose={() => settags(false)}>
        <Modal.Header>Tags</Modal.Header>
        <Modal.Body>
          <div className="">
            {/* tags input */}
            <div className="flex justify-between">
              <div className="tracking-widest font-semibold">Tags:</div>
              <div className="p-2 border rounded-md">0{taggs.length}</div>
            </div>
            <div className="border border-blue-500 p-6 rounded-lg">
              <div className="grid grid-cols-3 gap-3">
                {taggs.map((tag, index) => (
                  <div className="grid place-items-center bg-blue-300 rounded-full" key={index}>
                    <div className="flex place-items-center gap-2 p-1">
                    <p className="font-semibold tracking-wider ">#{tag}</p>
                    <IoMdCloseCircle onClick={() => removeTags(index)} />
                    </div>
                  </div>
                ))}
                <input
                className="rounded-full focus:ring-0 border-0 w-48 py-0 "
                tabIndex={0}
                type="text"
                placeholder="Add tags and enter"
                onKeyUp={(event) => addTags(event)}
              />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {getTagsData(taggs)}}>Save</Button>
          <Button color="gray" onClick={() => settags(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* monetize modal */}
      <Modal show={monetize} onClose={() => setmonetize(false)}>
        <Modal.Header>Subscription Plans</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 grid place-items-center"> 
            <img src="https://static.parastorage.com/services/communities-blog-bm/01e9fa8e6741e44e75c3d116bc4c50601ecf6fa47f361ec4ea8435f7/media/paid-plans.52079778.svg" alt="" />
            <p className="font-bold ">Earn money from your blog</p>
            <p>Offer readers subscriptions to your exclusive content.</p>
            <div className="gap-1 text-sm">
              <p className="flex"><FcCheckmark/> Add paywalls to selected posts</p>
              <p className="flex"><FcCheckmark/> Set up payment schedules</p>
              <p className="flex"><FcCheckmark/> Turn readers into subscribers</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setmonetize(false)}>Get Started</Button>
          <Button color="gray" onClick={() => setmonetize(false)}>
            Learn More
          </Button>
        </Modal.Footer>
      </Modal>
      {/* translate modal */}
      <Modal show={translate} onClose={() => settranslate(false)}>
        <Modal.Header>Translate</Modal.Header>
        <Modal.Body>
        <div className="space-y-6 grid place-items-center"> 
            <img className="h-52 w-96 object-cover" src="https://static.parastorage.com/services/communities-blog-bm/01e9fa8e6741e44e75c3d116bc4c50601ecf6fa47f361ec4ea8435f7/media/multilingual-empty-state.278bbd8e.png" alt="" />
            <p className="font-bold ">Translate your blog with Wix Multilingual</p>
            <div className="gap-1 text-sm">
              <p className="flex"><FcCheckmark/> Add a language menu to your site</p>
              <p className="flex"><FcCheckmark/> Translate posts into 180+ languages</p>
              <p className="flex"><FcCheckmark/> Optimize your SEO for each language</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => settranslate(false)}>Get started</Button>
          <Button color="gray" onClick={() => settranslate(false)}>
            Learn more
          </Button>
        </Modal.Footer>
      </Modal>
      {/* seo modal */}
      <Modal show={seo} onClose={() => setseo(false)}>
        <Modal.Header>SEO Settings</Modal.Header>
        <Modal.Body>
        <div className="space-y-6 grid place-items-center"> 
            <img className="h-52 w-96 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNCpsqp4omMAqLu5aDDRx3b4efE-RMFXGCg&usqp=CAU" alt="" />
            <p className="font-bold ">Want to customize the SEO settings of all your blog posts in one go</p>
            <div className="gap-1 text-sm">
              <p className="flex"><FcCheckmark/> Structured data markup</p>
              <p className="flex"><FcCheckmark/> Robots meta tag</p>
              <p className="flex"><FcCheckmark/> Additional tags</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setseo(false)}>Get started</Button>
          <Button color="gray" onClick={() => setseo(false)}>
            Learn more
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TextEditorSidebar;
