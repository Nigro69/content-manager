import { Dropdown, Tabs } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Posts() {

  const navigate = useNavigate();

  const newPost = () => {
    navigate("post");
  };


  const tabs = [
    {
      id: 1,
      tabName: "Published",
      title: "No published post yet",
      caption: "Once you publish posts, you'll see them here.",
    },
    {
      id: 2,
      tabName: "Drafts",
      title: "No drafts yet",
      caption: "Every great post begins with a single word.",
    },
    {
      id: 3,
      tabName: "Pending Review",
      title: "No posts pending review",
      caption: "Create a post and submit it for review by an editor.",
    },
    {
      id: 4,
      tabName: "Scheduled",
      title: "No posts scheduled",
      caption: "You can use scheduling to choose when people see your next post.",
    },
    {
      id: 5,
      tabName: "Trash",
      title: "No posts in trash",
      caption: "Posts that you move to trash will stay here until you permanently delete them.",
    },
  ];

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
          {tabs.map((tab) => (
            <Tabs.Item key={tab.id} title={tab.tabName}>
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
                <div className="w-full h-96 overflow-y-scroll content-center grid place-items-center h-screen ">
                  <div className="max-w-sm items-center">
                    <p className="px-24 font-bold">{tab.title}</p>
                    <p className="px-6">
                      {tab.caption}
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
          ))}

          {/* <Tabs.Item title="Drafts">Dashboard content</Tabs.Item>
          <Tabs.Item title="Pending Review">Settings content</Tabs.Item>
          <Tabs.Item title="Scheduled">Contacts content</Tabs.Item>
          <Tabs.Item title="Trash">Disabled content</Tabs.Item> */}
        </Tabs.Group>
      </div>
    </div>
  );
}
