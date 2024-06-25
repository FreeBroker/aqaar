import React, { useState } from "react";
import { signupaqar, loginaqar } from "../../api/user";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPasswordForm from "./ForgetPasswordForm"; // Import the forget password component
import { useTranslation } from "react-i18next";


const cookie = new Cookies();

export default function LoginForm({
  login,
  toggleModeLogin,
  toggleModelSignup,
  setIsAdmin,
}) {
  const { t } = useTranslation();
  const type = login ? `${t('login')}` : `${t('sign_up')}`;
  const welcome = login ? `${t('welcome_back')}!` : `${t('welcome')}!`;

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const toggleForgetPassword = () => {
    setShowForgetPassword((prevState) => !prevState);
  };

  const closeForgetPassword = () => {
    setShowForgetPassword(false);
  };
  const securityQuestions = [
    "What was the name of your first childhood friend?",
    "What is your brightest childhood dream?",
    "What is your child’s nickname?",
    "What is the manufacturer of your first car?"
  ];
  const [loginValid, setLoginValid] = useState(true);

  useState(() => {
    setPhone("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setAnswer("")
    setQuestion("")
  }, [toggleModeLogin, toggleModelSignup]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 7);
    if (confirmPassword !== newPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };
  const handleSecurityQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSecurityAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const LOGINaction = async () => {

    if (passwordValid) {
      var res = await loginaqar(phone, password);
      if (cookie.get("user") !== undefined) {
        console.log("success");
        window.location.replace("/"); //to be changed
        //    window.location.reload(false);
        setIsAdmin(res.info.admin);
        cookie.set("admin", res.info.admin);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT
        })
        setLoginValid(false);
      }

    }
  };
  const SignUPaction = async () => {
    if (passwordsMatch && passwordValid) {
      var data = await signupaqar(phone, name, password, question, answer);
      if (data.data.message === "Signed up  successfully") {
        toggleModelSignup();
        toggleModeLogin();
      } else {
        toast.error(data.data.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    }
  };
  return (
    <form
      className="w-75 m-auto py-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (login) LOGINaction();
        else SignUPaction();
      }}
    >
      {!showForgetPassword && <><h3 className={`text-center fw-bold ${login ? "mb-4" : "mb-1"}`}>
        {type}
      </h3>
        <h3 className="text-center fw-bold mb-4" style={{ color: "#B79763" }}>{welcome}</h3>
        <div className={`${login ? "mb-3" : "mb-1"}`}>
          <label className="mb-1">{t('phone_number')}</label>
          <input
            type="number"
            className="form-control"
            placeholder={t('write_phone_number')}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        {!login && (
          <div className="mb-4">
            <label className="mb-1">{t('full_name')}</label>
            <input
              type="text"
              className="form-control"
              placeholder={t('enter_full_name')}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
        )}

        <div className="mb-2">
          <label className="mb-1">{t('password')}</label>
          <input
            type="password"
            className={`form-control ${passwordValid ? "" : "is-invalid"}`}
            placeholder={t('enter_password')}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {!passwordValid && (
            <div className="invalid-feedback">
              Password must be at least 7 characters long.
            </div>
          )}
        </div>

        {!login && (
          <div className="mb-4">
            <label className="mb-1">{t('confirm_passsword')}</label>
            <input
              type="password"
              className={`form-control  ${passwordsMatch ? "" : "is-invalid"}`}
              placeholder={t('confirm_passsword')}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {!passwordsMatch && (
              <div className="invalid-feedback">Passwords do not match.</div>
            )}
          </div>
        )}
        {!login && (
          <>
            <div className="mb-4">
              <label className="mb-1">{t('security_question')}</label>
              <select
                className="form-control"
                value={question}
                onChange={handleSecurityQuestionChange}
                required
              >
                <option value="">{t('select_question')}</option>
                {securityQuestions.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="mb-1">{t('answer')}</label>
              <input
                type="text"
                className="form-control"
                placeholder={t('enter_your_answer')}
                value={answer}
                onChange={handleSecurityAnswerChange}
                required
              />
            </div>
          </>
        )}

        {login && (
          <div className="forgot-password text-center mb-4">
            <h6 className="text-dark" onClick={toggleForgetPassword}>
              {t('forget_password')}
            </h6>
          </div>
        )}
        {!loginValid && (
          <h6 style={{ color: "red" }}>phone number or password is wrong </h6>
        )}</>}

      {!showForgetPassword && <div className="w-75 m-auto">
        <button className="btn  w-100" style={{
          color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763"
        }}>{type}</button>
      </div>}
      {showForgetPassword && (
        <ForgetPasswordForm onClose={closeForgetPassword} />
      )}
      {/* <h5 className="text-center my-3">OR</h5>

      <div className="w-75 m-auto mb-2 ">
        <button
          href="#"
          class="fb btn btn-primary w-100 text-light"
          type="button"
        >
          <i
            className="fa-brands fa-facebook fa-xl m-2"
            style={{ color: "#017ecb;" }}
          ></i>{" "}
          Continue with Facebook
        </button>
      </div>

      <div className="w-75 m-auto mb-2">
        <button
          href="#"
          class="fb btn btn-light w-100 text-dark border shadow"
          type="button"
        >
          <i
            className="fa-brands fa-google fa-xl m-2"
            style={{ color: "#017ecb;" }}
          ></i>{" "}
          Continue With Google
        </button>
      </div> */}
      <ToastContainer />
    </form>
  );
}
