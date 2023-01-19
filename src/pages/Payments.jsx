import React from "react";

const Payments = () => {
  return (
    <div className="w-full p-4 bg-gray-200">
      <div className="flex justify-between">
        <div className="ml-5  max-w-2xl">
          <h1 className="text-3xl font-bold p-2">Payments</h1>
          <p className="text-gray-600 p-2">
            Keep track of payments from your customers.
          </p>
        </div>
      </div>
      <div className="p-5 m-6 bg-white rounded-xl">
        <div className="grid place-items-center h-96">
          
            <img
              className="object-cover w-60 h-50 p-6"
              src="https://www.clio.com/wp-content/uploads/2021/10/lawyer-payment-methods-750x422.webp"
              alt="card"
            />
          
          <p className="font-bold text-xl">Make sure customers can pay you online</p>
          <p>Add payment methods to your site so customers can pay you online.</p>
          <button
            className="bg-blue-500 my-4 mx-4 hover:bg-blue-200 text-white hover:text-blue-500 font-semibold py-1 px-2 rounded-full"
          >
            Manage Payment Methods
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;
