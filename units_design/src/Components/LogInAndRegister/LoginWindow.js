import React from "react";
import LoginForm from "./LoginForm";
import LoginExtension from "./LoginExtensoin";

export default function LoginWindow({
  login,
  toggleModeLogin,
  toggleModelSignup,
  setIsAdmin,
}) {
  return (
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <LoginForm
          login={login}
          toggleModeLogin={toggleModeLogin}
          toggleModelSignup={toggleModelSignup}
          setIsAdmin={setIsAdmin}
        />
      </div>
      <div className="d-none d-lg-block col-lg-5 rounded"style={{backgroundColor:"black"}}>
        <LoginExtension
          login={login}
          toggleModeLogin={toggleModeLogin}
          toggleModelSignup={toggleModelSignup}
        />
      </div>
    </div>
  );
}
