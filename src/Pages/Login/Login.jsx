import axios from "axios";
import React, { useState } from "react";

const Login = ({ token ,setToken }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandelar= () => {
    axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data:{
            username: userName,
            password,
        },
    })
    .then((res) =>{
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", token);
    })
    .catch((err) =>{
        console.log(err.response);
        setError(err.response.data);
    })
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="bg-light p-4 rounded shadow-sm h-50 w-50">
        <div className="mt-5">
          <input
            type="text"
            placeholder="Enter Your UserName"
            className="form-control mb-3"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
          {error && <p className="text-danger fs-5">{error}</p>}
          </div>
          <div>
            <button onClick={loginHandelar} type="button" className="btn btn-primary w-100 fs-6 mt-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
