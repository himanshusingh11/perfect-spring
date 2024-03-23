import React from "react";
import image from "../images/Picture1.jpg";

const Home = () => {
  const serifFont = {
    fontFamily: "serif",
    fontWeight: "600",
    fontSize: "30px",
  };
  const serifFont2 = {
    fontFamily: "serif",
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <div>
              <h1 style={serifFont2}>
                A manufacture of Springs, wire forming & sheet metals parts for
                automotive and engineering industries.
              </h1>
              <h4 style={serifFont2}>
                Our commitment to excellence and customer satisfaction drives
                everything we do. With decades of experience and a skilled team
                of professionals, we deliver precision-engineered solutions
                tailored to meet your specific needs. Explore our website to
                learn more about our products, services, and capabilities.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* <img src={image} className="img-fluid" alt="Sample" /> */}
          <img
            src={image}
            className="img-fluid rounded shadow"
            alt="Sample"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
