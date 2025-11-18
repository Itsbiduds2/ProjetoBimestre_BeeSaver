import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Jardim from "./pages/jardim/Jardim";
import MapaColaborativo from "./pages/mapaColaborativo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jardim" element={<Jardim />} />
        <Route path="/mapa" element={<MapaColaborativo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
