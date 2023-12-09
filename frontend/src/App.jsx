import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ParticipationNFT from './components/ParticipationNFT';
import Home from './components/Home';
import abi from './NFT_ABI/NFTabi.js'
<<<<<<< HEAD
import CreateHack from './components/Create.jsx';
import SubmitHack from './components/Submut.jsx';
=======
import Navbar from './components/Navbar.jsx';
>>>>>>> 1a4e078325c592355fac23a4af3da3a59d0bc43f

function App() {

  

  return (

    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<ParticipationNFT />} />
        <Route path="/new" element={<CreateHack />} />
        <Route path="/submit" element={<SubmitHack/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

