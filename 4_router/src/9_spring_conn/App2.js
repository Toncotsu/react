import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MemberList from './components/Memberlist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/viewAllMember" element={<MemberList />} />
      </Routes>
    </Router>
  )

}

export default App;
