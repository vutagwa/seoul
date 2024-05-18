import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/pages/register';
import Bottle from './components/pages/bottle';
import Land from './components/pages/landing';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" index element={<Land />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/bottle" element={<Bottle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
