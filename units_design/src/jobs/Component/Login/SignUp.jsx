import React, { useState } from "react";
import "./lohstyle.css";
import * as Company from "../../network/api/company";
import * as Freelance from "../../network/api/freelance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [emailFree, setEmailFree] = useState("");
  const [username, setusername] = useState("");
  const [usernameFree, setusernameFree] = useState("");
  const [password, setPassword] = useState("");
  const [passwordFree, setPasswordFree] = useState("");
  const [telephone, settelephone] = useState("");
  const [YearsOfExp, setYearsOfExp] = useState("");
  const [estableshed, setestableshed] = useState("");
  const [address, setaddress] = useState("");
  const [taxNum, settaxNum] = useState("");
  const [ComReg, setComReg] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCompanySubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("estableshedAt", estableshed);
    formData.append("address", address);
    formData.append("commercialRegestration", ComReg);
    formData.append("taxNumber", taxNum);
    formData.append("image", selectedImage);

    Company.signupapi(formData).then(response => {
      if (response.data.message === "Signed up successfuly.\n Awaiting review") {
        props.reg()
        toast.warn("Awaiting review", {
          position: toast.POSITION.TOP_LEFT
        })
      } else if (response.data.message === "This email is already in use") {
        toast.error("This email is already in use", {
          position: toast.POSITION.TOP_LEFT
        })
      }
    })
  };

  const handleFreeSubmit = (event) => {
    event.preventDefault();
    Freelance.signupapi({
      name: usernameFree,
      email: emailFree,
      password: passwordFree,
      yearsOfExp: YearsOfExp,

    }).then(response => {
      if (response.data.message === "Signed up successfuly.\n Awaiting review") {
        props.reg()
        toast.warn("Awaiting review", {
          position: toast.POSITION.TOP_LEFT
        })
      } else if (response.data.message === "This email is already in use") {
        toast.error("This email is already in use", {
          position: toast.POSITION.TOP_LEFT
        })
      }
    })
  };

  const handleImageChange = (event) => {

    const selectedFile = event.target.files[0];

    setSelectedImage(selectedFile);
  };

  const [positions, setPositions] = useState({
    l: { left: "7px" },
    r: { left: "59rem" },
    b: { left: "180px" },
    con: { height: "7rem" },
    conbtn: { width: "23.9rem" },
    m: { marginTop: ".5rem", marginButtom: ".5rem" },

  });

  const Comp = () => {
    setPositions({
      l: { left: "-59rem" },
      r: { left: "7px" },
      b: { left: "10px" },
      f: { height: "40rem", marginTop: "0rem" },

      bttn1: { color: "#807D7E" },
      bttn2: { color: "#F6F6F6" },
      con: { height: "3.37rem", },
      conbtn: { width: "11rem" }
    });
  };

  const free = () => {
    setPositions({
      l: { left: "7px" },
      r: { left: "59rem" },
      b: { left: "180px" },
      f: { height: "33rem", marginTop: "2rem" },

      bttn1: { color: "#F6F6F6" },
      bttn2: { color: "#807D7E " },
      con: { height: "7rem" },
      conbtn: { width: "23.9rem" }
    });
  };

  return (
    <div>
      <div
        className="form-box2 "
        style={{ minHeight: "33rem", ...positions.f }}
      >
        <div
          className="button-box "
          style={{ marginTop: ".5rem", marginBottom: ".5rem", ...positions.m }}
        >
          <div id="bttn" style={{ position: "absolute", ...positions.b }}></div>
          <button
            onClick={Comp}
            type="button"
            className="toggle-btn2 "
            style={{ ...positions.bttn2 }}
          >
            Company
          </button>
          <button
            onClick={free}
            type="button"
            className="toggle-btn2 "
            style={{ color: "#F6F6F6", ...positions.bttn1 }}
          >
            Freelance
          </button>
        </div>

        <form
          id="comp"
          style={{ position: "absolute", ...positions.r }}
          className="forms  "
          onSubmit={handleCompanySubmit}
        >

          {/* <div
            className="d-flex justify-content-between"
            style={{ width: " 100%" }}
          > */}
          <input
            placeholder="  User name"
            type="text"
            className="my-1   bg-white logininput "
            id="username"
            value={username}
            onChange={(event) => setusername(event.target.value)}
            required
          />

          <input
            placeholder="  Email"
            type="email"
            className="my-1  bg-white logininput "
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            placeholder="  Password"
            type="password"
            className="my-1  bg-white  logininput "
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            placeholder="  Address"
            type="text"
            className="my-1  bg-white logininput "
            id="address"
            value={address}
            onChange={(event) => setaddress(event.target.value)}
            required
          />

          {/* </div> */}
          <div
            className="d-flex justify-content-between"
            style={{ width: " 99%" }}
          >


            <input
              placeholder=" Commercial Regestration"
              type="text"
              className="my-1  bg-white  logininput reginput  "
              id="ComReg"
              value={ComReg}
              onChange={(event) => setComReg(event.target.value)}
              required
            />

            <input

              type="text"
              placeholder="  Estableshed At"

              className="my-1  reginput  logininput  bg-white  "
              id="estableshed"
              value={estableshed}
              onFocus={(event) => {
                event.target.type = 'date';
              }}
              onChange={(event) => setestableshed(event.target.value)}
              required
              onBlur={(event) => {
                event.target.type = 'text';
              }}
            />

          </div>

          <div
            className="d-flex justify-content-between"
            style={{ width: " 99%" }}
          >
            <input
              placeholder="  Tax Number"
              type="text"
              className="my-1  bg-white logininput reginput  "
              id="taxNum"
              value={taxNum}
              onChange={(event) => settaxNum(event.target.value)}
              required
            />


            <label

              className="my-1  logininput  bg-white  reginput  "
              onChange={handleImageChange}

            >
              <input
                placeholder=" Uploud Image"
                type="file"
                id="imge"
                className="d-none"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage ? (
                <div className=" reginput  h-100 d-flex justify-content-start" style={{ alignItems: "center", color: "gray" }}><span className="mx-2"> Image Uplouded successfuly </span></div>
              ) : <div className=" reginput  d-flex h-100 justify-content-start" style={{ alignItems: "center", color: "gray" }}><span className="mx-2">  Uploud Image </span></div>}
            </label>


          </div>



          <button type="submit" className="text-light loginbtn ">

            <b>Sign up</b>
          </button>
        </form>

        <form
          id="free"
          style={{ position: "absolute", ...positions.l }}
          className=" forms "
          onSubmit={handleFreeSubmit}
        >

          <input
            placeholder="  User name"
            type="text"
            className="my-1   bg-white logininput "
            id="username"
            value={usernameFree}
            onChange={(event) => setusernameFree(event.target.value)}
            required
          />


          <input
            placeholder=" Years Of Experience"
            type="text"
            className="my-1  logininput  bg-white  "
            id="YearsOfExp"
            value={YearsOfExp}
            onChange={(event) => setYearsOfExp(event.target.value)}
            required
          />

          <input
            className="my-1 bg-white logininput "
            type="email"
            id="email"
            value={emailFree}
            placeholder="  Email"
            onChange={(event) => setEmailFree(event.target.value)}
            required
          />
          <input
            className="my-1  bg-white logininput "
            type="text"
            id="telephone"
            value={telephone}
            placeholder="  Phone Number"
            onChange={(event) => settelephone(event.target.value)}
            required
          />
          <input
            className="my-1  bg-white logininput"
            type="password"
            id="password"
            placeholder="Password"
            value={passwordFree}
            onChange={(event) => setPasswordFree(event.target.value)}
            required
          />

          <button className="text-light loginbtn " type="submit">
            <b>Sign up</b>
          </button>



        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
