import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";

const FormationPrevue = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center font-serif self-center text-green-500">
        Formations en prévue
      </h2>
      <CardGroup className="container gap-2">
        <Card>
          <Badge
            bg="success"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            Prévue
          </Badge>
          <Card.Img variant="top" src="/images/formation1.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              MAITRISER LA CUNICULTURE
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Dans cette téléréalité, des agriculteurs et des éleveurs de toute
              l&apos;Afrique s&apos;affrontent en relevant des défis agricoles et
              pastoraux.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="p-2">
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Date:{" "}
                      <span style={{ color: "#4caf50", fontSize: "12px" }}>
                        15 AVR 2025
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Cout:{" "}
                    <span style={{ color: "#4caf50", fontSize: "12px" }}>
                      60.900 Fcfa
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center -space-x-4"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="user 1"
                    src="/images/profil/1.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 2"
                    src="/images/profil/2.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 3"
                    src="/images/profil/3.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 4"
                    src="/images/profil/4.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 5"
                    src="/images/profil/5.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 6"
                    src="/images/profil/6.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                </div>
                <p style={{ textAlign: "center" }}>6 Candidats</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Lieu:{" "}
                  <span style={{ color: "#4caf50", fontSize: "12px" }}>
                    Faya, Nouveau goudron
                  </span>
                </p>
              </div>
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            Participer
          </button>
        </Card>
        <Card>
          <Badge
            bg="success"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            Prévue
          </Badge>
          <Card.Img variant="top" src="/images/formation2.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              LA CULTURE DE L&apos;HARICOT VERT
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Dans cette téléréalité, des agriculteurs et des éleveurs de toute
              l&apos;Afrique s&apos;affrontent en relevant des défis agricoles et
              pastoraux.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="p-2">
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Date:{" "}
                      <span style={{ color: "#4caf50", fontSize: "12px" }}>
                        15 AVR 2025
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Cout:{" "}
                    <span style={{ color: "#4caf50", fontSize: "12px" }}>
                      60.900 Fcfa
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center -space-x-4"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="user 1"
                    src="/images/profil/1.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 2"
                    src="/images/profil/2.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 3"
                    src="/images/profil/3.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 4"
                    src="/images/profil/4.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 5"
                    src="/images/profil/5.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 4"
                    src="/images/profil/6.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 5"
                    src="/images/profil/7.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                </div>
                <p style={{ textAlign: "center" }}>7 Candidats</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Lieu:{" "}
                  <span style={{ color: "#4caf50", fontSize: "12px" }}>
                    Faya, Nouveau goudron
                  </span>
                </p>
              </div>
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            S&apos;inscrire
          </button>
        </Card>
        <Card>
          <Badge
            bg="success"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            Prévue
          </Badge>
          <Card.Img variant="top" src="/images/formation3.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              LA CULTURE MARAICHERE
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Dans cette téléréalité, des agriculteurs et des éleveurs de toute
              l&apos;Afrique s&apos;affrontent en relevant des défis agricoles et
              pastoraux.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="p-2">
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Date:{" "}
                      <span style={{ color: "#4caf50", fontSize: "12px" }}>
                        15 AVR 2025
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Cout:{" "}
                    <span style={{ color: "#4caf50", fontSize: "12px" }}>
                      60.900 Fcfa
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center -space-x-4"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="user 1"
                    src="/images/profil/1.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 2"
                    src="/images/profil/2.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 3"
                    src="/images/profil/3.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 4"
                    src="/images/profil/4.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 5"
                    src="/images/profil/5.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                </div>
                <p style={{ textAlign: "center" }}>5 Candidats</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Lieu:{" "}
                  <span style={{ color: "#4caf50", fontSize: "12px" }}>
                    Faya, Nouveau goudron
                  </span>
                </p>
              </div>
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            En savoir plus
          </button>
        </Card>
        <Card>
          <Badge
            bg="success"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            Prévue
          </Badge>
          <Card.Img variant="top" src="/images/formation4.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              LA PISCICULTURE
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Dans cette téléréalité, des agriculteurs et des éleveurs de toute
              l&apos;Afrique s&apos;affrontent en relevant des défis agricoles et
              pastoraux.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="p-2">
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Date:{" "}
                      <span style={{ color: "#4caf50", fontSize: "12px" }}>
                        15 AVR 2025
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Cout:{" "}
                    <span style={{ color: "#4caf50", fontSize: "12px" }}>
                      60.900 Fcfa
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center -space-x-4"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="user 1"
                    src="/images/profil/1.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 2"
                    src="/images/profil/2.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 3"
                    src="/images/profil/3.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 4"
                    src="/images/profil/4.jpeg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                  <img
                    alt="user 5"
                    src="/images/profil/5.jpg"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                  />
                </div>
                <p style={{ textAlign: "center" }}>5 Candidats</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Lieu:{" "}
                  <span style={{ color: "#4caf50", fontSize: "12px" }}>
                    Faya, Nouveau goudron
                  </span>
                </p>
              </div>
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            Participer
          </button>
        </Card>
      </CardGroup>
    </>
  );
};

export default FormationPrevue;
