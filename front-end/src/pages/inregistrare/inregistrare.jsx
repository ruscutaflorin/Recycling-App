import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/stylesForms.css";

import axios from "axios";
function inregistrare() {
  // function signIn() {
  //   const signIn = () => {
  //     axios
  //       .post("http://localhost:8080/api/sign", {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json;charset=UTF-8",
  //         },
  //         data: {
  //           email: document.querySelector(".inputEmail").value,
  //           password: document.querySelector(".inputPassword").value,
  //           firstName: document.querySelector(".inputFirstName").value,
  //           lastName: document.querySelector(".inputLastName").value,
  //         },
  //       })
  //       .then(({ data }) => {
  //         console.log(data);
  //       });
  //   };
  // }

  const details = {
    email: document.querySelector(".inputEmail").value,
    password: document.querySelector(".inputPassword").value,
    firstName: document.querySelector(".inputFirstName").value,
    lastName: document.querySelector(".inputLastName").value,
  };

  const signInDetails = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/api/sign`, details);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="container-login">
      <h1 className="reset-text">Sign Up</h1>
      <input
        type="text"
        className=" form-control-lg inputs inputEmail"
        placeholder="Utilizator"
      />
      <input
        type="password"
        className=" form-control-lg inputs inputPassword"
        placeholder="Parola"
      />
      <input
        type="password"
        className=" form-control-lg inputs"
        placeholder="Repeta Parola"
      />
      <div className="row">
        <div className="col-12">
          <a href className="creazaCont">
            <button type="button" className="btn2" onClick={signInDetails}>
              Creaza Cont
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default inregistrare;
