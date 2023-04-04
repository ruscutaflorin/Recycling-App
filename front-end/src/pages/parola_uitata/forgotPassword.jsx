import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/stylesForms.css";

function forgotPassword() {
  return (
    <div className="container-login">
      <h1 className="reset-text">Reseteaza Parola</h1>
      <input
        type="password"
        className=" form-control-lg inputs"
        placeholder="Parola Noua"
      />
      <input
        type="password"
        className=" form-control-lg inputs"
        placeholder="Repeta Parola Noua"
      />
      <div className="row">
        <div className="col-12">
          <a href>
            <button type="button" className="btn2">
              Reseteaza Parola
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default forgotPassword;
