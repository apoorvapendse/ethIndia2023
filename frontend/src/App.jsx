import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ParticipationNFT from './components/ParticipationNFT';
import Home from './components/Home';
import abi from './NFT_ABI/NFTabi.js'
import Navbar from './components/Navbar.jsx';
import ParticipateInHackathon from './components/ParticipateInHackathon.jsx';
import ListHackathons from './components/ListHackathons.jsx';
import Register from './components/Register.jsx';
import CreateHackathon from './components/CreateHackathon.jsx';
import Detail from './components/Detail.jsx';
import Submit from './components/Submit.jsx';


function App() {

  

  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/mint" element={<ParticipationNFT />} />
        <Route path="/participate/:hackathon_id" element={<ParticipateInHackathon />} />
        <Route path="/list" element={<ListHackathons />} />
        <Route path="/register/:hackathon_id" element={<Register />} />
        <Route path="/create-hackathon" element={<CreateHackathon />} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/submit" element={<Submit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

