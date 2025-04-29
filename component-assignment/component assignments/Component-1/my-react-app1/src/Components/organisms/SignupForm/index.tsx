import React, { useState } from "react";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "./index.css";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) => password.length >= 6;

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters.");
      return;
    }
    alert(`${email} signed up successfully!`);
  };

  return (
    <div className="signupForm">
      <h2>Signup Page</h2>
      <p>Enter your mail id and password to signup</p>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="forgot-password">Forgot Password?</div>
      <Button onClick={handleSubmit}>Continue</Button>
    </div>
  );
};

export default SignupForm;
