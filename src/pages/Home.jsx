import React from "react";
import Card from "../components/Card";
import DropdownButton from "../components/DropdownButton";
import { horizontalCardsData, toolData } from "../data/dummy";
import Test from "../components/Test";
import ToolCard from "../components/ToolCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full p-2 bg-gray-200 ">
      <div className="flex justify-between">
        <div className="ml-5">
          <h1 className="text-3xl font-bold p-2">Blogs Dashboard</h1>
          <p className="text-gray-600 p-2">
            Track and improve how your blog is performing.
          </p>
        </div>
        <div className="content-center gap-5">
          <DropdownButton />
          <button class="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full">
            + Create New Post
          </button>
        </div>
      </div>
      <p className="text-2xl ml-5 p-2 font-semibold">Latest Posts </p>

      <div class="flex flex-col max-w-screen-lg mt-10">
        <div class="flex overflow-x-scroll pb-10">
          <div class="flex flex-nowrap ml-10 ">
            {horizontalCardsData.map((card) => (
              <div class=" px-3 max-w-lg">
                <Card name={card.cardName} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4 ml-5 mx-auto w-full h-1 bg-gray-600 rounded border-0 md:my-10 dark:bg-gray-700" />
      <p className="text-2xl ml-5 p-2 font-semibold">
        Track your latest posts{" "}
      </p>
      <div className="ml-30 justify-center max-w-screen p-8">
        <Test />
      </div>
      <hr className="my-4 ml-5 mx-auto w-full h-1 bg-gray-600 rounded border-0 md:my-10 dark:bg-gray-700" />
      <p className="text-2xl ml-5 p-2 font-semibold my-4">
        All blogging tools{" "}
      </p>
      <div className="ml-5 p-2 grid grid-cols-3 gap-y-6">
        {toolData.map((data) => (
          <ToolCard key={data.id} tool={data.tool} caption={data.caption} />
        ))}
      </div>
      <hr className="my-4 ml-5 mx-auto w-full h-1 bg-gray-600 rounded border-0 md:my-10 dark:bg-gray-700" />
      <p className="text-2xl ml-5 p-2 font-semibold my-4">
        Learn more about blogging
      </p>
      <div className="flex justify-between">
        <div className="flex ml-6 p-2 max-w-2xl h-60 overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-lg bg-white ">
          <div className=" max-w-md">
            <p className="font-bold p-2 text-xl">
              Check out the Blogging Guide
            </p>
            <p className="p-2">
              Learn everything you need to know about blogging from our
              world-class experts.
            </p>
            <button class="bg-white border border-blue-500  mt-16 mx-4 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-1 px-2 rounded-full">
              Read the Guide
            </button>
          </div>
          <div>
            <img
              className="object-cover w-30 h-30 p-6"
              src="data:image/svg+xml,%3csvg width='120px' height='120px' viewBox='0 0 120 120' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3ctitle%3ePromotional_Promote_Marketing Home_Email Marketing%3c/title%3e %3cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='Promotional_Promote_Marketing-Home_Email-Marketing' fill-rule='nonzero'%3e %3crect id='Rectangle' x='0' y='0' width='120' height='120'%3e%3c/rect%3e %3cpolygon id='Path' fill='%23192C55' points='78 90 42 87 19.86 46.86 68.82 15.49 109.42 59.33'%3e%3c/polygon%3e %3cpolygon id='Path' fill='%23FFFFFF' points='93.74 93.32 28.05 84.17 34.61 21.78 100.29 30.93'%3e%3c/polygon%3e %3cpolygon id='Path' fill='%23FFD527' points='84.88 91.08 37.12 84.43 41.69 40.85 89.46 47.51'%3e%3c/polygon%3e %3cpolygon id='Path' fill='%23C2E2FF' points='109.42 59.33 103.91 111.82 14.34 99.34 19.86 46.86 49.41 76.88 61.12 88.78 74.84 80.42'%3e%3c/polygon%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(63.347473, 65.478835) rotate(-82.070000) translate(-63.347473, -65.478835) ' x='62.8474726' y='54.6038352' width='1' height='21.75'%3e%3c/rect%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(62.813445, 70.426090) rotate(-82.070000) translate(-62.813445, -70.426090) ' x='62.3134445' y='55.3560904' width='1' height='30.14'%3e%3c/rect%3e %3cpolygon id='Path' fill='%23C2E2FF' points='103.91 111.82 14.34 99.34 49.41 76.88 63.31 67.98 74.84 80.42'%3e%3c/polygon%3e %3cline x1='74.84' y1='80.42' x2='101.58' y2='109.31' id='Path' fill='%23C2E2FF'%3e%3c/line%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(88.207511, 94.851766) rotate(-42.800000) translate(-88.207511, -94.851766) ' x='87.7075107' y='75.1667661' width='1' height='39.37'%3e%3c/rect%3e %3cline x1='17.15' y1='97.55' x2='49.41' y2='76.88' id='Path' fill='%23C2E2FF'%3e%3c/line%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(33.267875, 87.223388) rotate(-32.630000) translate(-33.267875, -87.223388) ' x='14.1128755' y='86.7233883' width='38.31' height='1'%3e%3c/rect%3e %3cellipse id='Oval' fill='%23116DFF' transform='translate(65.577034, 44.181207) rotate(-45.500000) translate(-65.577034, -44.181207) ' cx='65.5770344' cy='44.1812068' rx='11.79' ry='12.21'%3e%3c/ellipse%3e %3cpath d='M65.19,50 L60.81,44.44 C59.8248503,43.2184333 60.0126043,41.4302994 61.23,40.44 C62.5130463,39.4938711 64.3170817,39.747147 65.29,41.01 L66.04,42.01 L67,41.2 C68.2830463,40.2538711 70.0870817,40.507147 71.06,41.77 C72.0371468,42.9958474 71.8453667,44.7798478 70.63,45.77 L65.19,50 Z' id='Path' fill='%23FFB6AC'%3e%3c/path%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(30.189400, 12.601000) rotate(-35.272421) translate(-30.189400, -12.601000) ' x='29.6872048' y='4.13398925' width='1.00439036' height='16.9340215'%3e%3c/rect%3e %3crect id='Rectangle' fill='%23192C55' transform='translate(25.824223, 20.587079) rotate(-54.950000) translate(-25.824223, -20.587079) ' x='25.3242233' y='15.3270792' width='1' height='10.52'%3e%3c/rect%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
              alt="image"
            />
          </div>
        </div>
        <div className=" ml-5 mx-10 p-6 w-80 h-60 overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-lg bg-white ">
          <p className="font-semibold text-xl ">We're here for you</p>
          <p className="text-sm my-4">
            Get help with the ins and outs of your blog, or ask our experts in
            the community forum.
          </p>
          <div>
            <Link className="text-blue-500" to="/activity">
              Visite help center
            </Link>
            <br />
            <Link className="text-blue-500" to="/activity">
              Go to blog community
            </Link>
            <br />
            <Link className="text-blue-500" to="/activity">
              Hire a blog writer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
