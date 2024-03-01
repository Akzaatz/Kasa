import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./Logement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [listeDeployee, setListeDeployee] = useState(false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/logement/:id"
          element={<Logement setListeDeployee={setListeDeployee} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer listeDeployee={listeDeployee} />
    </BrowserRouter>
  );
};

export default App;
