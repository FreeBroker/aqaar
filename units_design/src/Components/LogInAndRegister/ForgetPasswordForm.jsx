import React, { useState } from "react";
import { getQuestion, forgotPassword } from "../../api/user"; // Import the API functions
import {  toast } from 'react-toastify';

export default function ForgetPasswordForm({ onClose }) {
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetQuestion = async () => {
    try {
      setLoading(true);
      const response = await getQuestion(phone); // Call the API function to get the question
      setQuestion(response.data.question); // Set the question obtained from the API
      setLoading(false);
    } catch (error) {
      console.error("Error:", error); // Handle error
      setLoading(false);
    }
  };

  const handleForgetPassword = async () => {
    try {
      // Call the API function to reset password
      const response = await forgotPassword({phone,  answer, password});
      if(response.data.message==="password Changed"){
        toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER
          })
          onClose()
      }
      else{
        toast.error(response.data.message, {
            position: toast.POSITION.TOP_CENTER
          })
      }
      
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  return (
    <div className="forget-password-form">
      <h2>Forgot Password</h2>
      <input
        type="number"
        className="form-control"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {question && (
        <div>
          <p>Security Question: {question}</p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="btn w-50"style={{backgroundColor:"#B79763"}} onClick={handleForgetPassword}>Reset Password</button>
        </div>
      )}
      {!question && !loading && (
        <button className="btn w-50"style={{backgroundColor:"#B79763"}} onClick={handleGetQuestion}>Get Security Question</button>
      )}
      {loading && <p>Loading...</p>}
      <button className="btn w-50"style={{backgroundColor:"#B79763"}} type="button"onClick={onClose}>Close</button>
    </div>
  );
}
