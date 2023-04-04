import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/stylesForms.css";
import axios from "axios";

function login() {
  // const logIn = () => {
  //   axios
  //     .post("http://localhost:8080/api/login", {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       data: {
  //         email: document.querySelector(".inputText").value,
  //         password: document.querySelector(".inputPassword").value,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data);
  //     });
  // };

  const details = {
    email: document.querySelector(".inputText").value,
    password: document.querySelector(".inputPassword").value,
  };

  const getLogInData = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/api/login`, details);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="container-login">
      <h1 className="login-text">Login</h1>
      <input
        type="text"
        className="form-control-lg inputs inputText"
        placeholder="Utilizator"
      />
      <input
        type="password"
        className=" form-control-lg inputs inputPassword"
        placeholder="Parola"
      />
      <a href="../forgotPassword" className="link-parola-uitata">
        <p className="forget-password">Ti-ai uitat parola?</p>
      </a>
      <div className="row">
        <div className="col-6">
          <a href className="a-logIn">
            <button
              type="button"
              className="btn1 btn-logIn"
              onClick={getLogInData}
            >
              Log in
            </button>
          </a>
        </div>
        <div className="col-6">
          <a href="../inregistrare" className="a-signUp">
            <button type="button" className="btn2 btn-signUp">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default login;
