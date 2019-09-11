import React from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import content from "content";

export const TechnologiesSection = () => {
  const { title, technologies } = content.skills;
  technologies.length = 14;

  return (
    <section id="skills" className="section section-lg pt-0">
      <Container>
        <Row className="row-grid justify-content-center">
          <Col className="text-center" lg="8">
            <div className="text-center section-technologies">
              <h4 className="display-4 pb-5 mt-5">{title}</h4>
              <div className="icons-container my-5">
                {technologies.map((technology, i) => {
                  const key = `tooltip-tech-${i}`;
                  return (
                    <div key={key} id={key} className="technology-icon icon">
                      <img
                        alt={technology.description}
                        className="img-fluid"
                        src={technology.image}
                      />
                      <UncontrolledTooltip delay={0} target={key}>
                        {technology.description}
                      </UncontrolledTooltip>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechnologiesSection;
