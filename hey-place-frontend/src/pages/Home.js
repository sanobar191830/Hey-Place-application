import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/places`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPlaces(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {places.map((place) => (
          <div key={place._id}>
            <h2>{place.name}</h2>
            <p>{place.location}</p>
            <p>{place.cost}</p>
            <p>{place.suggestions}</p>
            {place.media.map((url, index) => (
              <img key={index} src={url} alt={place.name} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
