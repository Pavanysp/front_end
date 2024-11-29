import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import LoginUI from "./LoginUi";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem("token", response.token); // Save JWT token to local storage
      navigate("/courses"); // Redirect to courses page
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials. Please try again.");
      navigate("/");
    }
  };

  return (
    <LoginUI
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}

export default Login;
