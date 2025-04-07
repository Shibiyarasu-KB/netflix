import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import TVShows from './pages/TVShows.jsx';
import Movies from './pages/Movies.jsx';
import MyList from './pages/MyList.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/my-list" element={<MyList />} />
      </Routes>
    </>
  );
};

export default App;
