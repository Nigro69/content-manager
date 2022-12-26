import React from "react";
import { Card } from "flowbite-react";

export default function CardComponent({ name }) {
  return (
    <div className="className='w-[220px] inline-block p-2 cursor-pointer">
      <div className="max-w-lg">
        <Card
          horizontal={true}
          imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
        >
          <div className="whitespace-pre-line">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021 {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          </div>
          
        </Card>
      </div>
    </div>
  );
}
