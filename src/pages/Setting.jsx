import React from "react";
import { BiInfoCircle, BiMailSend, BiCrown } from "react-icons/bi";
import {
  MdOutlineLanguage,
  MdOutlinePayments,
  MdDomainVerification,
} from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { BsPeople, BsPerson, BsInbox } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function Setting() {

  const {manager} = useStateContext();
  const navigate = useNavigate();

  const rolesAndPermissions = () => {
    navigate("permissions");
  };
  return (
    <div className="w-full p-4 bg-gray-200 ">
      <div className="ml-5  max-w-full mr-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold p-2">Settings</h1>

          <div>
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
                  className="rounded-full block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search settings..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg my-6 mx-6">
        <p className="uppercase text-gray-500 text-sm font-semibold">general</p>
        <div className="mx-4 my-6 p-2 grid grid-cols-3 gap-10">
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BiInfoCircle className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Business info</p>
              <p className="text-sm py-2">
                Set your business name, logo, location and contact info.
              </p>
            </div>
          </div>
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <MdOutlineLanguage className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Language & region</p>
              <p className="text-sm py-2">
                Set your language, region & currency, and translate your site.
              </p>
            </div>
          </div>
          {(!manager) && <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <MdOutlinePayments className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Accept payments</p>
              <p className="text-sm py-2">
                Choose the way you get paid by customers.
              </p>
            </div>
          </div>}
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <TbFileInvoice className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Invoices & quotes</p>
              <p className="text-sm py-2">
                Customize your invoices and quotes.
              </p>
            </div>
          </div>
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BiCrown className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Manage plan</p>
              <p className="text-sm py-2">
                Compare website plans and upgrade your subscription.
              </p>
            </div>
          </div>
          {(!manager) && <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <MdDomainVerification className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Domains</p>
              <p className="text-sm py-2">
                Connect, manage and edit your website's address.
              </p>
            </div>
          </div>}
          {(!manager) && <div onClick={rolesAndPermissions} className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BsPeople className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Roles & permissions</p>
              <p className="text-sm py-2">
                Invite people to work on this site and set their permissions.
              </p>
            </div>
          </div>}
          {(!manager) && <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BsPerson className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Site member settings</p>
              <p className="text-sm py-2">
                Manage site members’ login, signup, profiles and security.
              </p>
            </div>
          </div>}
        </div>
        <hr className="my-4 w-full h-1 bg-gray-200 rounded border-0 md:my-10 dark:bg-gray-700" />
        <p className="uppercase text-gray-500 text-sm font-semibold">
          COMMUNICATIONS
        </p>
        <div className="mx-4 my-6 p-2 grid grid-cols-3 gap-10">
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BsInbox className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Inbox settings</p>
              <p className="text-sm py-2">
                Customize your outbound emails, chat and inbox integrations.
              </p>
            </div>
          </div>
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <IoMdNotificationsOutline className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Notifications you get</p>
              <p className="text-sm py-2">
                Choose which notifications you get from Wix.
              </p>
            </div>
          </div>
          <div className="flex max-w-xs bg-white rounded-lg hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <BiMailSend className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold text-lg pt-2">Notifications you send</p>
              <p className="text-sm py-2">
                Manage the notifications & reminders you send out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
