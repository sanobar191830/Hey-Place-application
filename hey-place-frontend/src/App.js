import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import AddPlace from './pages/AddPlace';
import MyPlaces from './pages/MyPlaces';
import Messages from './pages/Messages';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Slider />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-place" element={<AddPlace />} />
      <Route path="/my-places" element={<MyPlaces />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
    <Footer />
  </>
);

export default App;
