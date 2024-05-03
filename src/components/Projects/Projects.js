import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/researchppr.png";
import chatify from "../../Assets/Projects/ihelp.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/sqleditor.png";
import content from "../../Assets/Projects/content1.jpeg";
import ui from "../../Assets/Projects/ui.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="iHelp"
              description="This platform’s aim is to Providing Guidance to Students in all Sectors followed by the current challenges faced by students in accessing reliable and personalized guidance by offering a range of features such as interactive tools, resources and support networks. "
              ghLink="https://github.com/theleocodes/iHelp"
              demoLink="https://ihelp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SQL Query Editor"
              description="A web-based application capable of running SQL queries and displaying the results of them. Crafted an intuitive and responsive SQL query editor interface leveraging front-end technologies, enhancing user experience and query interaction."
              ghLink="https://github.com/theleocodes/atlanfront"
              demoLink="https://atlanfront.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Security Breaches of Remote Working"
              description="This is my research paper. It tells the global human impact on human kind for working remotely in both positive and negative aspects. Also describes how to secure data from threatning from the unauthorized sources and security measure for the companies providing work from home."
              ghLink="https://github.com/theleocodes/Research-paper-"
              demoLink="https://github.com/theleocodes/Research-paper-"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui}
              isBlog={false}
              title="UI Design"
              description="This is a UI Design for Signup Page using Figma."
              ghLink="https://drive.google.com/drive/folders/12kWh8g3Z8vWIE-w_0c_HG8NxJyr5oAyt?usp=sharing"
              demoLink="https://drive.google.com/drive/folders/12kWh8g3Z8vWIE-w_0c_HG8NxJyr5oAyt?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={content}
              isBlog={false}
              title="Content"
              description="This the content which I've created for Topmate's Topbot using Canva and its graphics."
              ghLink="https://drive.google.com/file/d/1KKyIumh19Y9QbJbnkWpPtWjnJzlWJxZD/view?usp=sharing"
              demoLink="https://drive.google.com/file/d/1KKyIumh19Y9QbJbnkWpPtWjnJzlWJxZD/view?usp=sharing"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
