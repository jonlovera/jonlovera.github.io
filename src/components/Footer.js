import React from "react";
// import Link from "next/link";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import content from "content";

export const Footer = () => {
  const { footer } = content;

  return (
    <footer className="footer bg-transparent">
      <Container>
        <Row className="row-grid align-items-center mb-5">
          <Col lg="6">
            <h3 className="text-primary font-weight-light mb-2">
              {footer.social.title}
            </h3>
            <h4 className="mb-0 font-weight-light">{footer.social.subtitle}</h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            {/* <Button
              className="btn-neutral btn-icon-only btn-round ml-1"
              color="dribbble"
              href="https://dribbble.com/jonlov"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-dribbble" />
            </Button> */}
            {content.social.map(({ name, link }, i) => (
              <Button
                key={`footer-social-${i}`}
                className="btn-neutral btn-icon-only btn-round ml-1"
                color={name}
                href={link}
                size="lg"
                target="_blank"
              >
                <i className={`fab fa-${name}`} />
              </Button>
            ))}
          </Col>
        </Row>
        <hr />
        <div className="copyright text-center">
          {footer.copyright} - Designed & Coded by{" "}
          <a
            href="https://www.jonlovera.com?ref=jonlovera-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonathan Lovera
          </a>
          .
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
