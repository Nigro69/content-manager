import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ name, image, description, id }) {

  const navigate = useNavigate();
  const detailedView=(id)=>{
    navigate('detailed-blog', {state:{id:id}});
  }

  return (
    <div onClick={()=>{detailedView(id)}} className="className='w-[220px] inline-block rounded-md p-2 cursor-pointer">
      <div className="max-w-lg flex bg-gray-white rounded-md shadow-lg">
        <div >
          <img className="h-52 w-52 object-cover rounded-l-md" src={image} alt="" />
        </div>
        <div className="whitespace-pre-line w-[250px]">
          <div className="text-xl font-bold p-2">{name}</div>
          <div className="text-sm tracking-widest p-2"><p>{description.slice(0,100)}</p></div>
        </div>
        {/* <Card
          horizontal={true}
          imgSrc={image}
        >
          <div className="whitespace-pre-line">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          </div>
          
        </Card> */}
      </div>
    </div>
  );
}
