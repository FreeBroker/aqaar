import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted p-1">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
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
                className="fw-bold mb-4 text-danger">For Companies</h6>
              <>
                <Link to={"/postAd"}>
                  <h6 className="text-uppercase fw-bold mb-4 text-light">Posting Ad</h6>
                </Link>
              </>
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
                className="fw-bold mb-4 text-danger">About us</h6>
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                aqar@info
              </h6>
            </div>
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
                className="fw-bold mb-4 text-danger">Contact us</h6>
              <a href="tel:+201122664147" onClick={() => { window.location='whatsapp://send?phone=+201122664147' }}>
                <h6 class="fw-bold text-light">201122664147+</h6>
              </a>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <div style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", padding: "5px", display: "inline-block" }}>
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaFacebook size={24} /> {/* Facebook icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
