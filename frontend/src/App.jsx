import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ParticipationNFT from './components/ParticipationNFT';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<ParticipationNFT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

