import React from "react";
import { Button } from "flowbite-react";
import MenuIcon from "../components/MenuIcon";
import { useStateContext } from '../contexts/ContextProvider';

export default function Roles() {

  const {admin} = useStateContext();

  return (
    <div className="w-full p-4 bg-gray-200 ">
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Manage Roles</h1>
          <p className="text-gray-600 p-2">
            Create, view and edit roles & permissions for this site.
          </p>
        </div>
        <div className=" my-4 gap-5 flex">
          <button className="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-full">
            + Create New Role
          </button>
          {admin && <button className="bg-red-400 my-4 mx-4 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 rounded-full">
            Transfer Ownership
          </button>}
        </div>
        
      </div>
      <div className="my-5 py-4 mx-4 bg-white rounded-xl grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-semibold  p-4">General Roles</p>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Admin (Co-Owner)</p>
            <p className="text-sm px-2">
              Has full access to manage, edit & publish site, including billing,
              domains and inviting people, but cannot delete or transfer site.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Website Manager</p>
            <p className="text-sm px-2">
              Has access to manage, edit & publish site, but cannot manage
              billing, delete, duplicate or transfer site.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            {admin &&<div className="my-6">
              <MenuIcon />
            </div>}
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Website Designer</p>
            <p className="text-sm px-2">
              Can edit the site, manage settings and apps but cannot access
              Inbox, contacts and other sensitive info.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            {admin &&<div className="my-6">
              <MenuIcon />
            </div>}
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Back Office Manager</p>
            <p className="text-sm px-2">
              Can access the Dashboard to manage site settings and apps but
              cannot edit the site.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            {admin &&<div className="my-6">
              <MenuIcon />
            </div>}
          </div>
        </div>
      </div>
      <div className="my-5 py-4 mx-4 bg-white rounded-xl grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-semibold  p-4">Content Manager Roles</p>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">
              Content Collection Manager
            </p>
            <p className="text-sm px-2">
              Can add and modify content for all collections, but cannot edit
              other areas of your site.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">
              Content Collection Executive
            </p>
            <p className="text-sm px-2">
              Monitors collections activities and provides recommendations for
              improvement.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-4 mx-4 bg-white rounded-xl grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-semibold  p-4">
            Marketing and Customer Management Roles
          </p>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">National Head</p>
            <p className="text-sm px-2">
              Supervises and stirrs all company's operations, people and
              ventures in order to maintain and grow business.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Regional Level Head</p>
            <p className="text-sm px-2">
              Responsible for overseeing operations for several locations,
              branches or sales teams.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Area Level Manager</p>
            <p className="text-sm px-2">
              Responsible for overseeing operations for several locations,
              branches or sales teams.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Executive</p>
            <p className="text-sm px-2">
              Responsible for overseeing operations for several locations,
              branches or sales teams.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Consultant</p>
            <p className="text-sm px-2">
              Sists in creating and implementing the best possible strategies to
              reach their target audience.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-4 mx-4 bg-white rounded-xl grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-semibold  p-4">Articles Roles</p>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Correspondente</p>
            <p className="text-sm px-2">
              Responsible for write, edit, post, and promote the content on
              their web pages or websites.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
      
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Article Managers</p>
            <p className="text-sm px-2">
              Responsible for overseeing technical and content-related matters
              for blogging websites.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Article Editor</p>
            <p className="text-sm px-2">
              Can fully manage the blog but not other areas of your site.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Article Writer</p>
            <p className="text-sm px-2">
              Can write and publish posts. Cannot create or manage categories.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Guest Article Writer</p>
            <p className="text-sm px-2">
              Can write posts but cannot publish them. Posts must be approved
              and published by a Blog Editor or site owner.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>  
      {admin &&<div className="my-5 py-4 mx-4 bg-white rounded-xl grid grid-cols-1 divide-y">
        <div>
          <p className="text-xl font-semibold  p-4">Payments Roles</p>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">Payments Manager</p>
            <p className="text-sm px-2">
              If you unassign all contributors, this role will no longer be
              available. You can assign the same permissions using the new roles
              or create a custom one.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="hover:bg-gray-200 flex flex-wrap justify-between">
          <div className="max-w-2xl p-4">
            <p className="font-medium text-md px-2">
              Regional Payments Manager
            </p>
            <p className="text-sm px-2">
              Responsible for the performance, development and continual
              improvement of the Payment Operations function and the personal
              development of the team.
            </p>
          </div>
          <div className="flex gap-4 content-center mr-4">
            <div className="my-6">
              <Button color="gray" pill={true}>
                View
              </Button>
            </div>
            <div className="my-6">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
