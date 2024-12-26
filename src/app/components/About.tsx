"use client";
import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col style={{alignContent: "center"}}>
        <div className="choose-left">
							<h3 style={{color: "#4CAF50", fontSize: 40}}>Qui Sommes Nous</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
							<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
						</div>
        </Col>
        <Col>
        <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/happy/content/video/premium/partners0392/large_watermarked/BB_1bd6ab35-625d-4bad-81cb-83deb29c91fa_preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
