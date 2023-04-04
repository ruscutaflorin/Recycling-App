import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";

function comanda() {
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
          <a href="./login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              className="logo "
              id="login"
              href="login.html"
            />
          </a>
        </div>
      </nav>
      <h1>Comanda ta</h1>
      <div className="row" style={{ marginBottom: "5rem" }}>
        <div className="col  category">
          <img
            className="categorie_deseu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3rz4oJGrV0NXTNPpLRcTwxzhIyywV-1zXJIQIz6qUgt1TvCm0d7xHAvyftoIODMzVyk&usqp=CAU"
            alt="metal-picture"
          />
          <h2>Metal</h2>
          <form action="post">
            <label htmlFor="input">Cantitate:</label>
            <input type="text" name="MetalQ" className="cantiate" />
            <br />
            <input type="checkbox" />
          </form>
        </div>
        <div className="col  category">
          <img
            className="categorie_deseu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t0O3m4xpjxz-XdSj0LfERipRWZHGGS4iBb4Zv5D_PJFss0LZopcixFt5kaWkd5t5IF8&usqp=CAU"
            alt="plastic-picture"
          />
          <h2>Plastic</h2>
          <form action="post">
            <label htmlFor="input">Cantitate:</label>
            <input type="text" name="PlasticQ" className="cantiate" /> <br />
            <input type="checkbox" />
          </form>
        </div>
        <div className="col  category">
          <img
            className="categorie_deseu"
            src="https://s13emagst.akamaized.net/products/31857/31856969/images/res_e07f810cf41cd83d4b673f3804c71319.jpg?width=450&height=450&hash=4CA22939EAC03D8127698517FF85DAD5"
            alt="hartie-picture"
          />
          <h2>Carton</h2>
          <form action="post">
            <label htmlFor="input">Cantitate:</label>
            <input type="text" name="CartonQ" className="cantiate" />
            <br />
            <input type="checkbox" />
          </form>
        </div>
        <div className="col  category">
          <img
            className="categorie_deseu"
            src="https://www.constructiisecuritatesiprotectie.ro/image/cache/data/-00/23-500x500.png"
            alt="sticla-picture"
          />
          <h2>Sticla</h2>
          <form action="post">
            <label htmlFor="input">Cantitate:</label>
            <input type="text" name="SticlaQ" className="cantiate" />
            <br />
            <input type="checkbox" />
          </form>
        </div>
      </div>
      <div className="presentation">
        <button className="btn btn-lg btn-light">Plaseaza comanda</button>
      </div>
    </div>
  );
}

export default comanda;
