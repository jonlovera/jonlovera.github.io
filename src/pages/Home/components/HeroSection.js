import React from "react";
import { Jumbotron, Row, Col, Button } from "reactstrap";
import content from "content";

export const HeroSection = () => (
  <Jumbotron tag="section" id="about" className="bg-transparent">
    <Row>
      <Col xs="11" sm="10" lg="8" xl="6" className="mx-auto text-center">
        <h1 className="display-1">{content.title}</h1>
        <p
          className="lead"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
        <p className="lead">
          <Button tag="a" href="#skills" color="primary">
            Learn more
          </Button>
        </p>
      </Col>
    </Row>
  </Jumbotron>
);

export default HeroSection;
