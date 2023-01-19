import React from "react";
import MenuIcon from "../components/MenuIcon";
import Search from "../components/Search";

const Reports = () => {
  return (
    <div className="w-full p-4 bg-gray-200">
      <div className="flex justify-between mb-6">
        <div className="ml-5">
          <h1 className="text-3xl font-bold p-2">Reports</h1>
        </div>
        <div className="content-center gap-5 flex p-4">
          <MenuIcon />
        </div>
      </div>
      <hr className=" w-full bg-gray-400 h-px rounded border-0 dark:bg-gray-700" />
      <div className="p-4">
        <Search change={() => {}} value="" />
        <div className="m-4 bg-white p-4 rounded-xl grid grid-cols-2 divide-x">
            <div className="p-2">
                <p className="p-2 text-lg font-bold">Sales</p>
                <p className="p-2">Analyze payments on your site and look for new ways to boost sales.</p>
            </div>
            <div className="p-2 grid grid-cols-1 divide-y">
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Sales over time</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Sales by item</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Item sales over time</p>
                    <MenuIcon/>
                </div>
                <p className="text-blue-500 p-2 cursor-pointer">Show more reports</p>
            </div>
        </div>
        <div className="m-4 bg-white p-4 rounded-xl grid grid-cols-2 divide-x">
            <div className="p-2">
                <p className="p-2 text-lg font-bold">People</p>
                <p className="p-2">Improve your reach by understanding more about your visitors, members and customers.</p>
            </div>
            <div className="p-2 grid grid-cols-1 divide-y">
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Top paying customers</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Customers over time</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>New vs returning customers</p>
                    <MenuIcon/>
                </div>
                <p className="text-blue-500 p-2 cursor-pointer">Show more reports</p>
            </div>
        </div>
        <div className="m-4 bg-white p-4 rounded-xl grid grid-cols-2 divide-x">
            <div className="p-2">
                <p className="p-2 text-lg font-bold">Accounting</p>
                <p className="p-2">View all financial figures you need for your bookkeeping.</p>
            </div>
            <div className="p-2 grid grid-cols-1 divide-y">
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Transactions summary</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Clients with overdue payments</p>
                    <MenuIcon/>
                </div>
                <p className="text-blue-500 p-2 cursor-pointer">Show more reports</p>
            </div>
        </div>
        <div className="m-4 bg-white p-4 rounded-xl grid grid-cols-2 divide-x">
            <div className="p-2">
                <p className="p-2 text-lg font-bold">Marketing</p>
                <p className="p-2">See which traffic sources work best for you, and analyze the impact of your outreach campaigns.</p>
            </div>
            <div className="p-2 grid grid-cols-1 divide-y">
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Top traffic sources</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Order conversion by traffic source</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Rate by traffic source</p>
                    <MenuIcon/>
                </div>
                <p className="text-blue-500 p-2 cursor-pointer">Show more reports</p>
            </div>
        </div>
        <div className="m-4 bg-white p-4 rounded-xl grid grid-cols-2 divide-x">
            <div className="p-2">
                <p className="p-2 text-lg font-bold">Blog</p>
                <p className="p-2">See how visitors are engaging with your blog.</p>
            </div>
            <div className="p-2 grid grid-cols-1 divide-y">
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Blog activity over time</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Top Blog posts</p>
                    <MenuIcon/>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-200 cursor-pointer">
                    <p>Blog activity by the time of day</p>
                    <MenuIcon/>
                </div>
                <p className="text-blue-500 p-2 cursor-pointer">Show more reports</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
