import React from "react";
import "./styles.css";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonTitle: string;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, buttonTitle, description }) => {

  return (
    <div className="-mt-24 w-10/12 z-10 w-full justify-items-center bg-white mx-auto overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl test">
      {/* <img className="w-full object-cover testImage" src={imageUrl} alt={title} /> */}
      <div className="back w-full" style={{ backgroundImage:`url(${imageUrl})` }}>
                    {/* <div className="backs">
                      <p className="text-[#feed01] text-lg text-center"> <span className="text-[#feed01] font-bold">{concept}</span></p>
                      <div className="bg-[#e0b10b] h-2"></div>
                    </div> */}
                  </div>
                  <div className="card-body p-4">
                    <p className="text-[#946037] text-lg font-bold text-center p-1">{title}</p>
                    <p className="text-justify text-md p-1">{description}</p>
                
                  </div>

      <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
        {buttonTitle}
      </button>
    </div>

    // <div className="bg-red-500">

    // </div>
  );
};

export default Card;
