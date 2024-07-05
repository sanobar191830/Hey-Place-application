import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/messages`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setConversations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchConversations();
  }, []);

  return (
    <div>
      {conversations.map((conv) => (
        <div key={conv._id}>
          <h2>Conversation with {conv.participants.join(', ')}</h2>
          {conv.messages.map((msg, index) => (
            <div key={index}>
              <p>{msg.sender}: {msg.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Messages;
