import React from "react";
import { Card, Container, Row, Col } from "reactstrap";

import content from "content";

export const WorkSection = () => {
  const { header, projects } = content.portfolio;

  return (
    <section id="portfolio" className="section section-lg">
      <Container className="container-lg">
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <h2 className="display-3">{header.title}</h2>
            <p className="lead text-muted">{header.paragraph}</p>
          </Col>
        </Row>
        <Row>
          {projects.map(({ title, preview, link }, i) => {
            const style = {
              minHeight: 290
            };
            const imageStyle = {
              backgroundImage: `url(${preview})`,
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            };

            return preview ? (
              <Col className="mb-5" md="6" key={`projects-${i}`} style={style}>
                <Card
                  tag="a"
                  href={link}
                  target="_BLANK"
                  rel="noopener noreferrer"
                  className="card-lift--hover shadow border-0 h-100"
                  style={imageStyle}
                >
                  {/* <CardImg alt={title} src={preview} /> */}
                </Card>
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default WorkSection;
