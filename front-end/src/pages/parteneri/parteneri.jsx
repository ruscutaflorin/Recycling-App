import React from "react";
import "../../css/styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function parteneri() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid green-container">
          <a className="navbar-brand" href="../mainPage">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThu6AZML7BTauvCrX80L3oxVULvkOVRMu78g&usqp=CAU"
              alt="logo picture"
            />
          </a>
          <div className="navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="../mainPage">
                  Home
                </a>
                <a />
              </li>
              <a></a>
              <li className="nav-item">
                <a />
                <a className="nav-link " href="./parteneri">
                  Partneri
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
        </div>
        <a></a>
      </nav>
      <a>
        <h1>Despre parteneri</h1>
        <div className="row">
          <div className="col card box">
            <h3 className="card-title">Eco Clean</h3>
            <p className="card-text">
              {" "}
              Una dintre cele mai bune firme de recilcat din tara care te poate
              ajuta in orice moment.
            </p>
          </div>
          <div className="col card box">
            <h3 className="card-title">CleanCity</h3>
            <p className="card-text">
              {" "}
              Cu o expeirenta de peste 16 ani oferim cea mai rapida livrare a
              desurilor si produselor la centrele de colectare.{" "}
            </p>
          </div>
          <div className="col card box">
            <h3 className="card-title">FastClean</h3>
            <p className="card-text">
              {" "}
              Cu puternice cunostinte in industrie, pregǎtire profesionalǎ, am
              devenit un operator de referinţǎ ce oferă servicii de calitate, pe
              care te poți baza.{" "}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default parteneri;
