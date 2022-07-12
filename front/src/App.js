import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BotonInicial from './components/BotonInicial';
import Travel from './components/Travel';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<BotonInicial />} />
          <Route path='/:name' exact element={<Travel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
