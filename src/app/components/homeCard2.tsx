import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { TfiBlackboard } from "react-icons/tfi";
import { IoLogoAndroid } from "react-icons/io";
import { GiFruitBowl } from "react-icons/gi";

const Homecard2 = () => {
  return (
    <>
    <CardGroup className="container gap-2">
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <div className="imageDivv" style={{}}>
          <TfiBlackboard style={{ margin: "auto", width: 50, height: 50}}/>
        </div>
      
        <Card.Body>
          <Card.Title style={{fontSize: 20, textAlign: "center"}}>Formation RFIP</Card.Title>
          <Card.Text style={{fontSize: 14, textAlign: "center"}}>
          Participer a nos formations.
          </Card.Text>
        </Card.Body>
        <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            En savoir plus
          </button>
      </Card>
      <Card style={{border: "none",  backgroundColor: "transparent"}}>
        <div className="imageDivv" style={{}}>
          <GiFruitBowl style={{ margin: "auto", width: 50, height: 50}}/>
        </div>
      
        <Card.Body>
          <Card.Title style={{fontSize: 20, textAlign: "center"}}>Produit du Mois</Card.Title>
          <Card.Text style={{fontSize: 14, textAlign: "center"}}>
          Vous voulez acceder a notre liste de produit du Mois, alors cliquez sur le bouton.
          </Card.Text>
        </Card.Body>
        <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
           En savoir plus
          </button>
      </Card>
      <Card style={{border: "none",  backgroundColor: "transparent"}}>
        <div className="imageDivv" style={{}}>
          <IoLogoAndroid style={{ margin: "auto", width: 50, height: 50}}/>
        </div>
      
        <Card.Body>
          <Card.Title style={{fontSize: 20, textAlign: "center"}}>Actualité de l&apos;AgroTech</Card.Title>
          <Card.Text style={{fontSize: 14, textAlign: "center"}}>
          Vous voulez voir les dernière actualité technologique dans le domaine de l&apos;agriculture, alors cliquez sur le bouton.
          </Card.Text>
        </Card.Body>
        <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            S&apos;inscrire
          </button>
      </Card>
    </CardGroup>
    </>
  );
};

export default Homecard2;
