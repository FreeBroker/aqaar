import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon
import Logo from "./images/logo.png";
import footerBg from "./images/footerbg.png"; // Import the background image

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-muted p-1"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <section className="mx-3">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6
                style={{
                  fontSize: "22px",
                  color: "transparent",
                  backgroundImage: "linear-gradient(to bottom, #eaaf3f, #fc842b)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="fw-bold mb-4 text-danger"
              >
                Contact us
              </h6>
              <h6 className="text-uppercase fw-bold mb-3 text-light">aqar@info</h6>
              <a href="tel:+201122664147" onClick={() => { window.location='whatsapp://send?phone=+201122664147' }}>
                <h6 className="fw-bold mb-3 text-light">201122664147+</h6>
              </a>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-light mb-3" size={24} /> {/* Facebook icon */}
              </a>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                style={{
                  fontSize: "22px",
                  color: "transparent",
                  backgroundImage: "linear-gradient(to bottom, #eaaf3f, #fc842b)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="fw-bold mb-4 text-danger"
              >
                For Companies
              </h6>
              <>
                <Link to={"/postAd"}>
                  <h6 className="text-uppercase fw-bold mb-4 text-light">Posting Ad</h6>
                </Link>
              </>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex align-items-center justify-content-center">
              <h2
                style={{
                  fontSize: "22px",
                  color: "transparent",
                  backgroundImage: "linear-gradient(to bottom, #eaaf3f, #fc842b)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="fw-bold mb-4 text-danger"
              >
                About us
              </h2>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex align-items-center justify-content-center">
              <img src={Logo} alt="Logo" style={{ maxWidth: "140%", maxHeight: "140%" }} />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
