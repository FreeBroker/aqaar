import React, { useEffect, useState } from "react";
import LogForm from "./LogForm";
import "./lohstyle.css";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export default function Login() {
  const navigate = useNavigate()
  const cookie = new Cookies();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const jobsAuth = cookie.get("jobsAuth")
    if (jobsAuth === "Freelancer") {
      navigate("/jobs/freelancer", { replace: true })
    } else if (jobsAuth === "Company") {
      navigate("/jobs/company", { replace: true })
    }
    setLoading(false)
  }, [])
  return (
    <>{loading ? <div></div> : <div
      className="d-flex flex-wrap  justify-content-center "
      style={{
        width: "100%",
      minHeight: "100vh",
        maxHeight: "fit-content",
        flexShrink: "0",
        alignItems: "center",

        background: "#F5735A",
      }}
    >
      <div
        className="logtext  "
        style={{ width: "32.78945rem" }}
      >
        <div
          className="logtext-div "
          style={{ width: "20.825rem", height: "12.355rem" }}
        >
          {/* <img
            className="login-img"
            src="https://s3-alpha-sig.figma.com/img/4ab1/b5a3/b6aa27374a38b52ecdbe48969061ac43?Expires=1698019200&Signature=oaLAzxLEmKelYJbh9M-wu~xUHpSO0kCtE5dQVBt8KzVU9HrxGBD6KMcX2gOnxiYrff5iuSA~5a3AQnOTDMWiWrWMXFn3xj66m4h284aiFnKc~kVKaccuCJ7DVWvGGd0l2gfL0pX~ZpuJ0DfJRvbq9aVDXWvK1rYyH0zIE1ILU4kCFUphDusg7zbntH7SBUq6dvPEKqmpK8cWLlSujkO3sA2iaQlyAjuNLypEedWqS~x~dM1PL9WLG4EZND-yQBs~iaNzxGdP951nrUghwRVnGb0~oJayp2lQo0R0fH6kuP80HasVwEw9NBaq0VSZMhWMyi5vdERwxjj2OiMp9mq-~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 "
          /> */}

          <div className="d-flex flex-column justifycontent-center ">
            <p className="logtext-p1">welcome back to jobs!</p>
            <p className="logtext-p2">Take a moment to log in</p>
          </div>
        </div>
      </div>
      <div 
      className="d-flex justify-content-center  lo-div "
       style={{
        alignItems: "center",
        // width: "25.4959rem",
        height: "40.75rem",
        backgroundColor:"red"
      }}>
      <div
        className="d-flex w-100 justify-content-center bg-white "
        style={{
          alignItems: "center",
          // width: "30.9959rem",
          height: "40.75rem",
          
        }}
      >
        <LogForm></LogForm>
      </div>
      </div>
    </div>}</>
  );
}
