import React, { useState } from "react";
import { Card, Table } from "flowbite-react";
import { writerData } from "../data/dummy";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { nanoid } from "nanoid";

export default function Writers() {
  const navigate = useNavigate();

  const rolesAndPermissions = () => {
    navigate("/setting/permissions");
  };
  const newProfile=()=>{
    navigate("new-profile");
  }

  const inviteWriter = () => {
    setmodal(false);
    setinviteWriterModal(true);
  };

  

  const { manager, editor } = useStateContext();

  const [modal, setmodal] = useState(false);
  const [inviteWriterModal, setinviteWriterModal] = useState(false);

  const [role, setrole] = useState('Blog editor')
  const [mail, setmail] = useState('')

  const handelSubmit=(e)=>{
    e.preventDefault();
    const id = nanoid();
    const newMember = { id, mail, role };
    console.log(newMember);
  }

;
  const gotoWriterInfo=(id)=>{
    navigate("writer-info", {state:{id:id }});
  };



  return (
    <div className="w-full p-4 bg-gray-200 ">
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Writers</h1>
          <p className="text-gray-600 p-2">
            Manage writers for your blog, create and customize their public
            profiles. Everyone here has permission to write posts.
          </p>
        </div>
        <div className=" my-4 gap-5">
          {!manager && !editor && (
            <button
              onClick={rolesAndPermissions}
              className="bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
            >
              Roles and Permissions
            </button>
          )}
          <button
            onClick={() => setmodal(true)}
            className="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full"
          >
            + Add Writer
          </button>
        </div>
      </div>
      <Card className="m-6 p-2 justify-between">
        <div className="flex">
          <div className="max-w-2xl gap-y-2">
            <h5 className="text-2xl p-2  font-bold tracking-tight text-gray-900 dark:text-white">
              Add a Members Area to display writer profiles
            </h5>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              Give writers their own profile page so they can show off their
              posts and bio.
            </p>
            <button className="w-40 my-14 bg-blue-500 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full">
              Add Members Area
            </button>
          </div>
          <div className="mx-auto">
            <img
              className="object-cover w-60 h-60 p-6"
              src="https://si-interactive.s3.amazonaws.com/prod/planadviser-com/wp-content/uploads/2022/09/30113941/PA-092922-Wells-Fargo-GreatBanc-Trust-ERISA-complaint-1388107868-web.jpg"
              alt="cover"
            />
          </div>
        </div>
      </Card>
      <div className="mt-10 p-6 w-full rounded-lg">
        <Table hoverable={true}>
          <Table.Head className="bg-gray-400">
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Post Count</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {writerData.map((itr) => (
              <Table.Row
                key={itr.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {itr.name}
                </Table.Cell>
                <Table.Cell>{itr.role}</Table.Cell>
                <Table.Cell>{itr.postCount}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={()=>gotoWriterInfo(itr.id)}
                    className="font-semibold text-sm tracking-widest bg-gray-200 p-2 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
                  >
                    View
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {modal && (
        <div className="fixed grid place-items-center inset-0 bg-gray-700 bg-opacity-50 z-50  w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
          <div className="w-full max-w-3xl h-4/5">
            {/* <!-- Modal content --> */}
            <div className="relative p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setmodal(false)}
                className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="grid place-items-center p-4 gap-4">
                <p className="font-bold text-xl ">
                  Add a writer to your blog
                </p>
                <p>
                  Invite writers to work on your blog, or create a profile to
                  display on posts.
                </p>
              </div>
              <div className="grid place-items-center">
                <div className="flex gap-4 m-8 p-4">
                  <div
                    onClick={inviteWriter}
                    className="hover:scale-105 drop-shadow-lg grid place-items-center p-4  bg-white rounded-lg cursor-pointer"
                  >
                    <img
                      className="object-cover w-40 h-40 p-6"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CdZ_SQZx8LzljZOf499Lfe9LjRTY5p_bbg&usqp=CAU"
                      alt="cover"
                    />
                    <p className="p-2 font-bold">Invite an new Writer</p>
                    <p className="text-center p-2 text-sm">
                      Can log in and contribute to your blog. you can set each
                      writer's role.
                    </p>
                  </div>
                  <div onClick={newProfile} className="hover:scale-105 cursor-pointer drop-shadow-lg bg-white grid place-items-center p-4  rounded-lg">
                    <img
                      className="object-cover w-40 h-40 p-4"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAmLRpf7qYvrp4ZWuyYN5MNClkruhe6b5gEUTcxLxOuDS2G-P4zHdhuP9sst0zcJnsIk&usqp=CAU"
                      alt="cover"
                    />
                    <p className="p-2 font-bold">Create a writer profile</p>
                    <p className="text-center p-2 text-sm">
                      Can be credited as the writer of posts but has no access
                      to your blog.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-200 text-center text-sm">
                What kind of writer do you want to add to your blog?
              </div>
            </div>
          </div>
        </div>
      )}
      {inviteWriterModal && (
        <div className="fixed grid place-items-center inset-0 bg-gray-700 bg-opacity-50 z-50  w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
          <div className="w-full max-w-3xl h-4/5">
            {/* <!-- Modal content --> */}
            <div className="relative p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setinviteWriterModal(false)}
                className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="p-4">
                <p className="font-bold text-xl my-4">
                  Invite people to your blog
                </p>
                <div className="">
                  Give writers and editors access to your blog and assign them a
                  role. If you want to create more
                </div>
                <div className="flex gap-2">
                  <div>roles, go to </div>{" "}
                  <div onClick={rolesAndPermissions} className="cursor-pointer text-blue-500"> Roles and Permissions</div>
                </div>
                <form onSubmit={handelSubmit}>
                  <p className="mt-5 mb-2 font-semibold ">Email:</p>
                  <input className="border border-blue-500 rounded-xl w-full" placeholder="name@mail.com" type="email" value={mail} onChange={(e)=>setmail(e.target.value)} required/>
                  <p className="font-semibold my-4 ">Blog Role</p>
                  <div className="my-2">
                    <input
                      type="checkbox"
                      className="rounded-full"
                      checked={role === "Blog Editor"}
                      onChange={() => setrole("Blog Editor")}
                    />
                    <span className="px-4 py-1">Blog Editor</span>
                    <p className="ml-8 text-sm">Can fully manage the blog but not the other areas of your site.</p>
                  </div>
                  <div className="my-2">
                    <input
                      type="checkbox"
                      className="rounded-full"
                      checked={role === "Blog Writer"}
                      onChange={() => setrole("Blog Writer")}
                    />
                    <span className="px-4 py-1">Blog Writer</span>
                    <p className="ml-8 text-sm">Can write and publish posts. Cannot create or manage categories.</p>
                  </div>
                  <div className="my-2">
                    <input
                      type="checkbox"
                      className="rounded-full"
                      checked={role === "Guest Writer"}
                      onChange={() => setrole("Guest Writer")}
                    />
                    <span className="px-4 py-1">Guest Writer</span>
                    <p className="ml-8 text-sm">Can write posts but cannot publish them. Posts must be approved and published by a Blog Editor or site owner.</p>
                  </div>
                  <div className="grid justify-items-end">
                  <button className=" bg-blue-500 rounded-full px-4 py-2 text-white hover:bg-blue-700">Send Invite</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
