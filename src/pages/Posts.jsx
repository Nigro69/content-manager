import { Dropdown, Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowDropup } from "react-icons/io";
import axios from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import { auth } from "../firebase/config";
import { Button, Modal } from "flowbite-react";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import DataTable from "react-data-table-component";

export default function Posts() {
  const navigate = useNavigate();

  const seeBlog = (id) => {
    navigate("/dashboard/detailed-blog", { state: { id: id } });
  };

  const editBlog = (id,name,host) => {
    navigate("/dashboard/post", { state: { id: id , name:name, host:host} });
  };

  const { profilePopup, setprofilePopup } = useStateContext();
  const [postsData, setpostsData] = useState([]);

  const newPost = () => {
    navigate("post");
  };

  const [tasks, settasks] = useState(0);
  const [tasksData, settasksData] = useState([]);
  const [completed, setcompleted] = useState(false);

  const [wId, setwId] = useState(null);

  const getwriterId = async () => {
    try {
      const res = await axios.get("/api/writers/");
      console.log(res.data);
      let array = res.data;
      {
        array.map((itr) => {
          itr.email == auth.currentUser.email && setwId(itr.id);
        });
      }
      console.log(wId);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMyResult = async () => {
    try {
      const res = await axios.get("/api/tasks/");
      console.log(res.data);
      let array = res.data;
      let resArray = [];
      {
        array.map((itr) => {
          itr.writer == wId && resArray.push(itr);
          itr.writer == wId && setcompleted(itr.completed);
        });
      }
      settasksData(resArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    {
      wId && getMyResult();
    }
    getpostResult();
    getwriterId();
  }, [wId]);

  const [title, settitle] = useState("");
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getmyResult(name, title, bio, auth.currentUser.email, file);
    console.log(name, title, bio, auth.currentUser.email, file);
  };

  const getmyResult = async (name, intrests, bio, email, file) => {
    try {
      const res = await axios.post("/api/writers/", {
        name: name,
        email: email,
        interests: intrests,
        bio: bio,
        profile_pic: file,
      });
      console.log(res.data);
      setprofilePopup(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const columnsofposts = [
    {
      name: "Blog ID",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Publish Date",
      selector: (row) => row.created.slice(0, 9),
    },
    {
      name: "",
      selector: (row) => (
        <AiFillEye
          onClick={() => seeBlog(row.id)}
          className="h-10 w-10 text-gray-500 p-2 rounded-full cursor-pointer hover:bg-bg-gray-300 hover:text-gray-700"
        />
      ),
    },
    {
      name: "",
      selector: (row) => (
        <p
          onClick={() => editBlog(row.id,row.name, row.host)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
        >
          Edit
        </p>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#979797",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const getpostResult = async () => {
    try {
      const res = await axios.get("/api/blogs/");
      let array = res.data;
      let resArray = [];
      {
        array.map((itr) => itr.host === wId && resArray.push(itr));
      }
      console.log(postsData);
      setpostsData(resArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkboxChecked = (id, description, end_date, name, start_date) => {
    setcompleted(true);
    taskCompleted(id, description, end_date, name, start_date);
  };

  const taskCompleted = async (id, description, end_date, name, start_date) => {
    try {
      const res = await axios.put(`/api/task/${id}`, {
        name: name,
        description: description,
        start_date: start_date,
        end_date: end_date,
        completed: true,
        writer: wId,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full p-4 bg-gray-200">
      <div className="flex justify-between mb-6">
        <div className="ml-5">
          <h1 className="text-3xl font-bold p-2">Posts</h1>
        </div>
        <div className="content-center gap-5 flex">
          <button lassName="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full">
            <Dropdown label="More Actions">
              <Dropdown.Item>Set your Writer info</Dropdown.Item>
              <Dropdown.Item>Manage Posts</Dropdown.Item>
            </Dropdown>
          </button>

          <button
            onClick={newPost}
            className="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full"
          >
            + Create New Post
          </button>
        </div>
      </div>

      <div>
        {/*eslint-disable-next-line */}
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Published">
            <div className="bg-white rounded-xl">
              <div className="p-4 ">
                <div className="justify-end">
                  <form>
                    <label
                      for="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="rounded-full block w-sm p-2 pl-10 text-sm text-gray-900 border border-blue-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search ..."
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
              <hr className="mx-auto w-full bg-gray-400 h-px rounded border-0 dark:bg-gray-700" />
              {postsData.length === 0 ? (
                <div className="w-full overflow-y-scroll content-center grid place-items-center h-screen ">
                  <div className="max-w-sm items-center">
                    <p className="px-24 font-bold">Published</p>
                    <p className="px-6">
                      Once you publish posts, you'll see them here.
                    </p>
                    <button
                      onClick={newPost}
                      className="bg-white my-2 mx-24 text-blue-500 font-semibold py-1 px-2 rounded-full"
                    >
                      + Create New Post
                    </button>
                  </div>
                </div>
              ) : (
                <DataTable
                  columns={columnsofposts}
                  data={postsData}
                  fixedHeader
                  fixedHeaderScrollHeight="450px"
                  pagination
                  highlightOnHover
                  customStyles={customStyles}
                />
              )}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Tasks">
            <div className="bg-white rounded-xl grid grid-cols-1 divide-y">
              <div className="flex justify-between">
                <div className="px-10 py-2 font-semibold text-center mx-auto">
                  Title
                </div>
                <div className="flex">
                  <div className="px-5 py-2 font-semibold text-center mx-20">
                    Due Date
                  </div>
                  <div className="px-5 py-2 font-semibold text-center mx-20">
                    Assignee
                  </div>
                </div>
              </div>

              {tasksData.map((task) => (
                <div className="flex justify-between">
                  <div className="px-10 py-2 text-center mx-auto">
                    <div className="font-semibold mb-2">{task.name}</div>
                    {tasks === task.id && (
                      <div className="transition duration-700 ease-in-out">
                        <div className="p-2 text-sm">{task.description}</div>
                        <div className="my-4">
                          <input
                            type="checkbox"
                            className="rounded-full"
                            checked={completed}
                            onChange={() =>
                              checkboxChecked(
                                task.id,
                                task.description,
                                task.end_date,
                                task.name,
                                task.start_date
                              )
                            }
                          />
                          <span className="px-4 py-1">Completed</span>
                          <p className="ml-8 text-sm text-gray-400">
                            Mark as completed if you had completed the task.
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="grid place-items-center">
                      <button className="transition duration-700 ease-in-out">
                        {tasks === 0 && (
                          <div
                            className=" flex place-items-center gap-3 text-blue-500"
                            onClick={() => settasks(task.id)}
                          >
                            <div>Expand</div>
                            <div>
                              <IoIosArrowDown />
                            </div>
                          </div>
                        )}
                        {tasks === task.id && (
                          <div
                            className="flex place-items-center gap-3 text-blue-500"
                            onClick={() => settasks(0)}
                          >
                            <div>Close</div>
                            <div>
                              <IoIosArrowDropup />
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" grid place-items-center font-semibold text-gray-800 text-center mr-20">
                      <div className="place-items-center bg-gray-300 px-2 py-1 rounded-full">
                        {task.end_date}
                      </div>
                    </div>
                    <div className="px-5 py-2 grid place-items-center font-semibold text-center mx-16">
                      {task.writer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Drafts">
            <div></div>
          </Tabs.Item>
          <Tabs.Item title="Pending Review">
            <div></div>
          </Tabs.Item>
          <Tabs.Item title="Trash">
            <div></div>
          </Tabs.Item>
        </Tabs.Group>
      </div>

      <Modal show={profilePopup}>
        <Modal.Header>Please Complete Your Profile First</Modal.Header>
        <Modal.Body>
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
                onChange={(e) => {
                  setbio(e.target.value);
                }}
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
