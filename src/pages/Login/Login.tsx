import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (username: string, password: string) => {
    if (username === "somrudee.y" && password === "Pass@09032002") {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
