import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import TopSeries from './components/TopSeries';
import Navbar from './components/Navbar';
import SeriesDetails from './components/SeriesDetails';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
           <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/top-series" element={<TopSeries />} />
          {<Route path="/top-series/:rank" element={<SeriesDetails />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
