import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";

function concurs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="quick-fix">
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
                <a className="nav-link " href="../parteneri">
                  Parteneri
                </a>
                <a />
              </li>
              <a></a>
              <li className="nav-item">
                <a />
                <a className="nav-link " href="./concurs">
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
        <div className="col card" id="concurs">
          <h2>Participa la concurs!</h2>
          <h3>Numarul de puncte acumulate:</h3>
          <p>32</p>
          <h3>Sponsorul de luna aceasta:</h3>
          <img
            src="https://yt3.ggpht.com/ytc/AMLnZu92Iopa_wHax9p0Rdb7f-UDmAtFeCaiazz9pnrStw=s900-c-k-c0x00ffffff-no-rj"
            alt="sponsor-picture"
            className="sponsor"
          />
          <button className="btn btn-lg btn-light buton"> Participa</button>
        </div>
      </a>
    </div>
  );
}

export default concurs;
