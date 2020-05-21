import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const width = "100%";

export const Projects = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1>Projects</h1>
      <CardColumns style={{}}>
        <Card
          bg="dark"
          text="light"
          style={{
           
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
};