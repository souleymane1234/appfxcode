"use client";
import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ValeurAjouter = () => {
  return (
    <Container>
      <h3
        style={{
          textAlign: "center",
          fontSize: 25,
          marginTop: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Présentation du Service a Valeur a Ajouté
      </h3>
      <Row>
        <Col>
          <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/videos/48014f02-5886-4186-8ff3-49fd603ae3e8/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col>
          {" "}
          <div
            className="card content-center m-2"
            style={{
              backgroundColor: "#e5e7eb",
              border: "none",
              height: 400,
            }}
          >
            <div className="card-body" style={{ alignContent: "center" }}>
              <p
                className="card-text"
                style={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "16px",
                }}
              >
                Chez{" "}
                <strong style={{ fontWeight: "bold", color: "#4CAF50" }}>
                  AGROPLAYCE
                </strong>
                , notre valeur ajoutée repose sur plusieurs piliers : <br />
                <strong>Expertise spécialisée </strong>: Nous maîtrise de
                l&apos;Agropastorale nous permet d&apos;offrir des solutions adaptées aux
                défis uniques de nos clients. <br />
                <strong>Innovation </strong>: Nous intégrons des technologies de
                pointe et des méthodologies agiles pour anticiper les besoins et
                apporter des résultats novateurs. <br />
                <strong>Approche client-centric </strong>: Nous travaillons main
                dans la main avec nos partenaires pour garantir que chaque
                solution est personnalisée, pertinente et efficace. <br />
                <strong>Engagement durable </strong>: Nous privilégions des
                stratégies éthiques et responsables qui contribuent au
                développement durable et à la satisfaction de toutes les parties
                prenantes.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ValeurAjouter;
