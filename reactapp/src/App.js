import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'; // Import the Home component
import DonorRegistrationForm from './DonorRegistrationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import BuyerRegistrationForm from './BuyerRegistrationForm';
import Login from './Login';
import AdminHome from './AdminHome';
import DonorHome from './DonorHome';
import BuyerHome from './BuyerHome';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       
          <Route path="/donoreg" element={<DonorRegistrationForm />} />
          <Route path="/buyereg" element={<BuyerRegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/donor" element={<DonorHome />} />
          <Route path="/buyer" element={<BuyerHome />} />

         
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
