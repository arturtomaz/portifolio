import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesProjeto from "./pages/DetalhesProjeto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<DetalhesProjeto />} />
      </Routes>
    </Router>
  );
}

export default App;
