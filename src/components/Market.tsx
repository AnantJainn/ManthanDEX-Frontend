import React from "react";

type Market = {
  title: string;
  description: string;
  imageUrl: string;
};

const Market: React.FC<Market> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div
        className="w-full h-32 bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="mt-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Market;
