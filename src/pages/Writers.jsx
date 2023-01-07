import React from "react";
import { Card, Table } from "flowbite-react";
import { writerData } from "../data/dummy";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function Writers() {
  const navigate = useNavigate();

  const rolesAndPermissions = () => {
    navigate("/setting/permissions");
  };

  const { manager,editor } =
    useStateContext();

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
          {(!manager && !editor)  && <button
            onClick={rolesAndPermissions}
            className="bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
          >
            Roles and Permissions
          </button>}
          <button className="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full">
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
            <button class="w-40 my-14 bg-blue-500 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full">
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
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
