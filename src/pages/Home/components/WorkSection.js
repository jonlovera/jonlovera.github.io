import React from "react";
import classnames from "classnames";
import { Badge, Container, Row, Col } from "reactstrap";

import content from "content";

export const WorkSection = () => {
  return content.why.map(
    ({ icon, style, image, title, content, keypoints = [] }, i) => {
      const isEven = i % 2 === 1;

      const { background, color } = style || {};
      const iconsColor = !style.icons
        ? "bg-gradient-white text-primary"
        : style.icons;
      const iconClass = classnames(
        "icon icon-lg icon-shape shadow rounded-circle mb-5",
        iconsColor
      );

      const floating = typeof image === "object" ? image.floating : false;
      image = typeof image === "object" ? image.src : image;

      return (
        <section
          className={classnames("section section-lg", background, color)}
          key={`work-${i}`}
        >
          <Container>
            <Row className="row-grid align-items-center">
              <Col className={classnames({ "order-md-2": isEven })} md="6">
                {image && (
                  <img
                    alt="..."
                    className={classnames("img-fluid", { floating })}
                    src={image}
                  />
                )}
              </Col>
              <Col className={classnames({ "order-md-1": isEven })} md="6">
                <div className="pr-md-5">
                  {icon && (
                    <div className={iconClass}>
                      <i className={icon} />
                    </div>
                  )}
                  {title && <h3 className={classnames(color)}>{title}</h3>}
                  <p dangerouslySetInnerHTML={{ __html: content }} />
                  {keypoints.length ? (
                    <ul className="list-unstyled mt-5">
                      {keypoints.map(({ icon, name }, i) => (
                        <li className="py-2" key={`work-keypoints-${i}`}>
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className={classnames(
                                  "badge-circle mr-3",
                                  iconsColor
                                )}
                              >
                                <i className={icon} />
                              </Badge>
                            </div>
                            <div>
                              <h6 className={classnames("mb-0", color)}>
                                {name}
                              </h6>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
  );
};

export default WorkSection;
