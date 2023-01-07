import React from "react";
import {postTableData} from '../data/dummy';

export default function test() {
  return (
    
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-l text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Project Title
                </th>
                <th scope="col" className="py-3 px-6">
                    publish Date
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {postTableData.map(row=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.title}
                </th>
                <td className="py-4 px-6">
                    {row.date}
                </td>
                <td className="py-4 px-6 text-right">
                    <a href="/activity" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
</div>


  );
}
