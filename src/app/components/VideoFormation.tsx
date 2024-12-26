"use client";
import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const VideoFormation = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: 25,
          marginTop: 20,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Quelques Videos et Images de nos Télé-Réalité
      </h3>

      <CardGroup className="container gap-2">
        <Card>
          <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/videos/80f3f4e6-7a9e-4377-a50d-906be70b765c/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
        <Card>
          <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/videos/2fee92d4-d67a-4740-a4ba-a401d3a1421d/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
        <Card>
          <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/videos/d60fc7a4-99df-4cf3-969d-eaf1fb45a2b0/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
        <Card>
          <video
            className="h-full w-full text-smart-video rounded-lg"
            controls
            autoPlay
            loop
          >
            <source src="https://videocdn.cdnpk.net/cdn/content/video/premium/getty_194/large_watermarked/istock-1156241533_preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>
      </CardGroup>
    </>
  );
};

export default VideoFormation;
