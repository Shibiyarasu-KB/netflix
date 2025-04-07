import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import TVShows from './TVShows';
import Movies from './pages/Movies';
import MyList from './pages/MyList';

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
