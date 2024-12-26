import React from "react";
import "./styles.css";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonTitle: string;
};

const FormationCard: React.FC<CardProps> = ({ title, imageUrl, buttonTitle, description }) => {

  return (
    <div className="-mt-24 w-10/12 z-10 w-full justify-items-center  mx-auto overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl test">
      {/* <img className="w-full object-cover testImage" src={imageUrl} alt={title} /> */}
      <div className="back w-full" style={{ backgroundImage:`url(${imageUrl})` }}>
      <span className="badge" style={{margin: "10px", marginLeft: "76%", backgroundColor: "#e0b10b", color: "#fff", fontSize: "16px", fontWeight: "bold"}}>En Cours</span>
        </div>
                  <div className="card-body" style={{padding: "20px"}}>
                    <p className="text-[#946037] text-md font-bold text-center p-2">{title}</p>
                    <p className="text-justify text-md p-2">{description}</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      <div className="p-2">
                        <p style={{fontWeight: "bold", fontSize: "12px"}}>Date: <span style={{color: "#4caf50", fontSize: "12px"}}>15 AVR 2025</span></p>
                        <p style={{fontWeight: "bold", fontSize: "12px"}}>Lieu: <span style={{color: "#4caf50", fontSize: "12px"}}>Faya, Nouveau goudron</span></p>
                      </div>
                      <div className="p-2">
                        <p style={{fontWeight: "bold", fontSize: "12px"}}>Cout: <span style={{color: "#4caf50", fontSize: "12px"}}>60.900 Fcfa</span></p>
                        <p style={{fontWeight: "bold", fontSize: "12px"}}>Inscrits: <span style={{color: "#4caf50", fontSize: "12px"}}>30 prs</span></p>
                      </div>
                    </div>
                
                  </div>

      <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
        {buttonTitle}
      </button>
    </div>

    // <div className="bg-red-500">

    // </div>
  );
};

export default FormationCard;
