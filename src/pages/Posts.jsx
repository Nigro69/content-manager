import { Dropdown, Progress, Tabs } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown , IoIosArrowDropup} from "react-icons/io";

export default function Posts() {
  const navigate = useNavigate();

  const newPost = () => {
    navigate("post");
  };

  const [tasks, settasks] = useState(0);

 

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
              <div className="flex justify-between">
                <div className="px-10 py-2 text-center mx-auto">
                  <div className="font-semibold mb-2">CRM DashBoard</div>
                  {tasks===1 && <div className="transition duration-700 ease-in-out">
                    <div className='p-2 text-sm'>
                      <p>1. Invoice template multiple choice.</p>
                      <p>2.team to add n edit invoice permission level.</p>
                      <p>3. Start Sales analytics division.</p>
                    </div>
                    <div className="my-4">
                      <Progress
                      progress={45}
                       label="Progress"
                       labelPosition="outside"
                       labelProgress={true}  
                      />
                    </div>
                  </div>}
                  <div className="grid place-items-center">
                  <button className="transition duration-700 ease-in-out" >
                    {tasks===0 && <div className=" flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(1)}>
                    <div>Expand</div>
                    <div>
                      <IoIosArrowDown />
                    </div>
                    </div>}
                    {tasks===1 && <div className="flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(0)}>
                    <div>Close</div>
                    <div>
                      <IoIosArrowDropup />
                    </div>
                    </div>}
                  </button>
                  </div>
                </div>
                <div className="flex">
                  <div className=" grid place-items-center font-semibold text-gray-800 text-center mr-20">
                    <div className="place-items-center bg-gray-300 px-2 py-1 rounded-full">
                      20 Jan 2023
                    </div>
                  </div>
                  <div className="px-5 py-2 grid place-items-center font-semibold text-center mx-16">
                    Yash Barman
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="px-10 py-2 text-center mx-auto">
                  <div className="font-semibold mb-2">HRM DashBoard</div>
                  {tasks===2 && <div className="transition duration-700 ease-in-out">
                    <div className='p-2 text-sm'>
                      <p>1. Invoice template multiple choice.</p>
                      <p>2.team to add n edit invoice permission level.</p>
                      <p>3. Start Sales analytics division.</p>
                    </div>
                    <div className="my-4">
                      <Progress
                      progress={20}
                       label="Progress"
                       labelPosition="outside"
                       labelProgress={true}  
                      />
                    </div>
                  </div>}
                  <div className="grid place-items-center">
                  <button className="transition duration-700 ease-in-out" >
                    {tasks===0 && <div className=" flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(2)}>
                    <div>Expand</div>
                    <div>
                      <IoIosArrowDown />
                    </div>
                    </div>}
                    {tasks===2 && <div className="flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(0)}>
                    <div>Close</div>
                    <div>
                      <IoIosArrowDropup />
                    </div>
                    </div>}
                  </button>
                  </div>
                </div>
                <div className="flex">
                  <div className=" grid place-items-center font-semibold text-gray-800 text-center mr-20">
                    <div className="place-items-center bg-gray-300 px-2 py-1 rounded-full">
                      20 Jan 2023
                    </div>
                  </div>
                  <div className="px-5 py-2 grid place-items-center font-semibold text-center mx-16">
                    Yash Barman
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="px-10 py-2 text-center mx-auto">
                  <div className="font-semibold mb-2">News Portal</div>
                  {tasks===3 && <div className="transition duration-700 ease-in-out">
                    <div className='p-2 text-sm'>
                      <p>1. Invoice template multiple choice.</p>
                      <p>2.team to add n edit invoice permission level.</p>
                      <p>3. Start Sales analytics division.</p>
                    </div>
                    <div className="my-4">
                      <Progress
                      progress={65}
                       label="Progress"
                       labelPosition="outside"
                       labelProgress={true}  
                      />
                    </div>
                  </div>}
                  <div className="grid place-items-center">
                  <button className="transition duration-700 ease-in-out" >
                    {tasks===0 && <div className=" flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(3)}>
                    <div>Expand</div>
                    <div>
                      <IoIosArrowDown />
                    </div>
                    </div>}
                    {tasks===3 && <div className="flex place-items-center gap-3 text-blue-500" onClick={()=>settasks(0)}>
                    <div>Close</div>
                    <div>
                      <IoIosArrowDropup />
                    </div>
                    </div>}
                  </button>
                  </div>
                </div>
                <div className="flex">
                  <div className=" grid place-items-center font-semibold text-gray-800 text-center mr-20">
                    <div className="place-items-center bg-gray-300 px-2 py-1 rounded-full">
                      20 Jan 2023
                    </div>
                  </div>
                  <div className="px-5 py-2 grid place-items-center font-semibold text-center mx-16">
                    Yash Barman
                  </div>
                </div>
              </div>
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
    </div>
  );
}
