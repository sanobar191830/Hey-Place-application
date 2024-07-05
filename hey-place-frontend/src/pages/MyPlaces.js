import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPlaces = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/places/my`, {
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
          <div>
            <span>{place.likes.length} Likes</span>
            <span>{place.comments.length} Comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPlaces;
