"use client";
import React from "react";
import "./styles.css";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonTitle: string;
};

const TeleCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonTitle,
}) => {
  return (
    <div className="w-full justify-items-center max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl test">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <div className="flex">
          <h3 className="text-2xl font-semibold text-green-800">{title}</h3>
          <button
            // onClick={() => setOpenPopup(true)}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-6 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>

        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <button className="mt-2 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center">
        {buttonTitle}
      </button>
    </div>
  );
};

export default TeleCard;
