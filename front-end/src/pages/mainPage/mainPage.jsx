import React from "react";
import "../../css/styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function mainPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid green-container">
          <a className="navbar-brand" href="./mainPage">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThu6AZML7BTauvCrX80L3oxVULvkOVRMu78g&usqp=CAU"
              alt="logo picture"
            />
          </a>
          <div className="navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="./mainPage">
                  Home
                </a>
                <a />
              </li>
              <a></a>
              <li className="nav-item">
                <a />
                <a className="nav-link " href="../parteneri">
                  Parteneri
                </a>
                <a />
              </li>
              <a></a>
              <li className="nav-item">
                <a />
                <a className="nav-link " href="../concurs">
                  Concurs
                </a>
                <a />
              </li>
              <a></a>
            </ul>
            <a></a>
          </div>
          <a></a>
          <a href="../login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              className="logo "
              id="login"
            />
          </a>
        </div>
      </nav>
      <h1> Salveaza mediul!</h1>
      <div className="presentation">
        <p>
          Este foarte usor sa reciclezi toate deseurille cu ajutorul aplicatiei
          in doar cateva minute.
        </p>
        <ul className="list-group">
          <li className="list-group-item first-item-steps">
            Tot ce trebuie sa faci:
          </li>
          <li className="list-group-item item-steps">Creaza un cont</li>
          <li className="list-group-item item-steps">
            Selecteaza tipul deseurilor
          </li>
          <li className="list-group-item item-steps">Plaseaza comanda</li>
        </ul>
      </div>
      <div className="presentation">
        <a href="../comanda" id="comanda">
          <button className="btn btn-lg btn-light">Comanda aici</button>
        </a>
      </div>
    </div>
  );
}

export default mainPage;
