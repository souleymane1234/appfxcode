import React from "react";
import "./styles.css";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonTitle: string;
};

const VasCard: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="sm:w-full md:w-full w-full justify-items-center max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl test">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      {/* <div className="p-4">
        <h3 className="text-2xl font-semibold text-green-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div> */}
      {/* <button className="mt-2 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center">
        {buttonTitle}
      </button> */}
    </div>
  );
};

export default VasCard;
