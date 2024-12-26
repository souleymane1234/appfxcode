import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";

const Homecard = () => {
  return (
    <>
      <CardGroup className="container gap-2" style={{}}>
        <Card
          style={{
            backgroundColor: "transparent",
            border: "none",
            aspectRatio: 3 / 3,
          }}
        >
          <Badge
            bg="success"
            style={{
              width: "30%",
              alignSelf: "end",
              fontSize: 20,
            }}
          >
            RFIP
          </Badge>
          <Card.Img variant="top" src="/images/tele1.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              RENTABILISE AVEC UNE PARCELLE DE 1 HECTARE
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Deviens premium, et tu sera accompagner par nos experts afin de
              rentabiliser ta percelle .
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            Participer
          </button>
        </Card>

        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <Badge
            bg="success"
            style={{
              width: "60%",
              alignSelf: "end",
              fontSize: 20,
            }}
          >
            MARKETPLACE
          </Badge>
          <Card.Img variant="top" src="/images/product.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              ACHETER ET VENDER SUR NOTRE PLATEFORME
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Acheter et vendre des produits issus de l&apos;agropastoral est
              aujourd&apos;hui très simple et accessible grâce à notre plateforme.
              Alors, qu&apos;attends-tu ?
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            S&apos;inscrire
          </button>
        </Card>

        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <Badge
            bg="success"
            style={{
              width: "80%",
              alignSelf: "end",
              fontSize: 20,
            }}
          >
            CONSEILS ET ASTUCES
          </Badge>
          <Card.Img variant="top" src="/images/poulet.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              OBTENER DES POULET DE 3 KILOS EN 45 JOURS
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Nous sommes des experts et nous voulons t&apos;aider a obtenir des
              poulets de 3 kilo en 45 jours. tout ce que tu as a faire c&apos;est de
              passer en premium.
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            En savoir plus
          </button>
        </Card>

        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <Badge
            bg="success"
            style={{
              width: "60%",
              alignSelf: "end",
              fontSize: 20,
            }}
          >
            NOS CONCEPTS
          </Badge>
          <Card.Img variant="top" src="/images/tele2.jpg" />
          <Card.Body>
            <Card.Title
              style={{
                color: "#946037",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              PARTICIPER A NOTRE EMISSION DE TELE-REALITE
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Tente de participer à nos jeux et remporte des super lots allant
              jusqu&apos;à trois mois de course offerte. Deviens premium et entre
              dans la catégorie de gagnants.
            </Card.Text>
          </Card.Body>
          <button className="mt-2 bg-[#2d9838] hover:bg-green-500 text-white font-bold py-2 px-8 mb-2 rounded-full self-center justify-self-center font-serif">
            Participer
          </button>
        </Card>

        {/* <Card>
          <Badge
            bg="warning"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            En Cours
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
              LA CULTURE DE L'HARICOT VERT
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Dans cette téléréalité, des agriculteurs et des éleveurs de toute
              l'Afrique s'affrontent en relevant des défis agricoles et
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
            S'inscrire
          </button>
        </Card>
        <Card>
          <Badge
            bg="warning"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            En Cours
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
              l'Afrique s'affrontent en relevant des défis agricoles et
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
            bg="warning"
            style={{
              width: "30%",
              alignSelf: "end",
            }}
          >
            En Cours
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
              l'Afrique s'affrontent en relevant des défis agricoles et
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
        </Card> */}
      </CardGroup>
    </>
  );
};

export default Homecard;
