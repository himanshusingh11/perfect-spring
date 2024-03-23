import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Picture3 from "../images/Picture3.png";
import Picture4 from "../images/Picture4.jpg";

const About = () => {
  const serifFont2 = {
    fontFamily: "serif",
  };

  return (
    <div className="p-3 mt-2">
      <div style={{ height: "40px" }}></div>
      <h1 style={serifFont2}>About Us</h1>
      <h4 className="mb-4" style={serifFont2}>
        Welcome to Perfect Spring Industries, the leading provider of
        precision-engineered springs. At Perfect, we pride ourselves on
        delivering superior products tailored to your unique requirements. Our
        dedicated team utilizes state-of-the-art technology to ensure the utmost
        precision and reliability in every spring we produce. From compression
        to torsion springs, we offer a comprehensive range of solutions to meet
        your needs. Whether you're in the automotive, industrial you can trust
        us to provide the perfect spring solution for your application.
      </h4>

      <h2 style={serifFont2}>Certifications and Recognition</h2>

      <Row className="gx-4 gy-5">
        <Col xs={12} md={6}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={Picture3}
              className="img-fluid rounded shadow"
              alt="Sample"
              style={{ borderRadius: "10px" }}
            />
            <Card.Body>
              <h3 style={serifFont2} className="text-center">
                BMS Certification
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="h-100">
            <Card.Img
              className="img-fluid rounded shadow"
              alt="Sample"
              style={{ borderRadius: "10px" }}
              variant="top"
              src={Picture4}
            />
            <Card.Body>
              <h3 style={serifFont2} className="text-center">
                MSME Certification
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
