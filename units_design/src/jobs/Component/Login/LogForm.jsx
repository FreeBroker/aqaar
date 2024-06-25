import React, { useState } from "react";
import "./lohstyle.css";
import ForgitPassPop from "./ForgitPassPop";
import { Cookies } from "react-cookie";
import SignUp from './SignUp'
import * as Login from "../../network/api/loginjobs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cookie = new Cookies();

function LogForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [positions, setPositions] = useState({
    l: { left: "57px" },
    r: { left: "31rem" },
    b: { left: "180px" },
  });

  const log = () => {
    setPositions({
      l: { left: "-31rem" },
      r: { left: "57px" },
      b: { left: "10px" },
      f: { height: "38.5rem" },
      bttn1: { color: "#807D7E" },
      bttn2: { color: "#F6F6F6" },
    });
  };

  const reg = () => {
    setPositions({
      l: { left: "57px" },
      r: { left: "31rem" },
      b: { left: "180px" },
      f: { height: "27rem" },
      bttn1: { color: "#F6F6F6" },
      bttn2: { color: "#807D7E " },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await Login.loginjobs(email, password);
    if (cookie.get("jobsUser") !== undefined) {
      if (!(user.freelancer)) {
        console.log("success");
        navigate("/jobs/company", { replace: true });
      } else if (user.freelancer) {
        navigate("/jobs/freelancer", { replace: true });
      }
    } else {
      if ((user.message === "Email or password is invalid") || (user.message === "Your account is Banned")) {
        toast.error(user.message, {
          position: toast.POSITION.TOP_LEFT
        })
      } else if (user.message === "Please wait for account review and activation") {
        toast.warn("Please wait for account review and activation", {
          position: toast.POSITION.TOP_LEFT
        })
      }
    }
  }

  return (
    <div>
      <button id="dismissModalButton" style={{ display: "none" }} data-bs-dismiss="modal"></button>
      <div
        className="form-box "
        style={{ minHeight: "27rem", ...positions.f, ...positions.m }}
      >
        <div
          className="button-box "
          style={{ marginTop: "0rem", ...positions.m }}
        >
          <div id="bttn" style={{ position: "absolute", ...positions.b }}></div>
          <button
            onClick={log}
            type="button"
            className="toggle-btn2 "
            style={{ ...positions.bttn2 }}
          >
            Sign up
          </button>
          <button
            onClick={reg}
            type="button"
            className="toggle-btn "
            style={{ color: "#F6F6F6", ...positions.bttn1 }}
          >
            Log in
          </button>
        </div>

        <div
          id="reg"
          style={{ position: "absolute", ...positions.r }}
          className="forms "
        >

          <SignUp reg={reg}></SignUp>
        </div>
        <div className="log">
          <form
            id="log"
            style={{ position: "absolute", ...positions.l }}
            className="forms2 forms  "
            onSubmit={handleSubmit}
          >
            <input
              className="my-1  bg-white logininput "
              type="email"
              id="email"
              value={email}
              placeholder="  Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              className="my-1  bg-white logininput"
              type="password"
              placeholder=" Password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <div className="my-4">
              <button className="text-light loginbtn " type="submit">
                <b>Login</b>
              </button>

              <button

                className=" w-100  bg-white forgetpass"
                style={{ border: "none", fontSize: "0.9rem", textAlign: "left" }}
                data-bs-target="#Forgot"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Forgot your password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <>

        <div
          style={{ direction: "ltr" }}
          className="modal fade"
          id="Forgot"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className=' d-flex'>
                <button
                  style={{ position: "relative", left: "1rem", top: "1rem" }}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ForgitPassPop></ForgitPassPop>
              </div>
            </div>
          </div>
        </div>
      </>
      <ToastContainer />
    </div>

  );
}

export default LogForm;
