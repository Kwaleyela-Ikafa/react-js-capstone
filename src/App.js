import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import CoinDetails from './Components/CoinDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
