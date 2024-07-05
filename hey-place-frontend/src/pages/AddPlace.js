import React, { useState } from 'react';
import axios from 'axios';

const AddPlace = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cost: '',
    suggestions: '',
    media: [],
  });

  const { name, location, cost, suggestions, media } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (e) => {
    setFormData({ ...formData, media: [...e.target.files] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('name', name);
    formDataObj.append('location', location);
    formDataObj.append('cost', cost);
    formDataObj.append('suggestions', suggestions);
    media.forEach((file) => formDataObj.append('media', file));
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/places`, formDataObj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      history.push('/home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Place Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={location}
        onChange={onChange}
        required
      />
      <input
        type="number"
        placeholder="Cost"
        name="cost"
        value={cost}
        onChange={onChange}
        required
      />
      <textarea
        placeholder="Suggestions"
        name="suggestions"
        value={suggestions}
        onChange={onChange}
      ></textarea>
      <input type="file" multiple onChange={onFileChange} />
      <button type="submit">Add Place</button>
    </form>
  );
};

export default AddPlace;
