import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Comanda from "./pages/comanda/comanda";
import Inregistrare from "./pages/inregistrare/inregistrare";
import Login from "./pages/login/login";
import MainPage from "./pages/mainPage/mainPage";
import Parteneri from "./pages/parteneri/parteneri";
import Concurs from "./pages/concurs/concurs";
import ParolaUitata from "./pages/parola_uitata/forgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/inregistrare" element={<Inregistrare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parteneri" element={<Parteneri />} />
          <Route path="/comanda" element={<Comanda />} />
          <Route path="/concurs" element={<Concurs />} />
          <Route path="/forgotPassword" element={<ParolaUitata />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
