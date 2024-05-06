import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi Raj </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently 8th semester student at Manipal University Jaipur, who is looking for opportunity.
            <br />
            I'm pursing B.Tech in Computer Science and Engineering with minor specialization in cloud computing.
            <p>Designing is my favourite part, its my passion.</p>
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Try to find love in what you do !"{" "}
          </p>
          <footer className="blockquote-footer">Tanvi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
