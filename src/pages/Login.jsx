import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {

    if(email && password){
      dispatch(login());
      navigate("/");
    } else {
      alert("Enter email and password");
    }

  };

  return (
    <div className="loginContainer">

      <div className="loginBox">

        <h2>Sign in</h2>

        <label>Email or mobile phone number</label>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="loginBtn">
          Sign-In
        </button>

        <p className="terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button className="createBtn">
          Create your Amazon account
        </button>

      </div>

    </div>
  );
};

export default Login;