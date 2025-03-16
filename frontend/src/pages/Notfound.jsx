/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useEffect, useState } from 'react';

const Notfound = () => {
  const [quest, setQuest] = useState('');

  useEffect(() => {
    const fetchQuest = async () => {
      try {
        const response = await axios.get("https://www.boredapi.com/api/activity");
        setQuest(response.data.activity);
      } catch (error) {
        console.error('Error fetching quest:', error);
      }
    };

    fetchQuest();

  }, []);

  return (
    <>
      <h1>Seems like you're lost; here's a quest for you to do:</h1>
      <p>{quest}</p>
    </>
  );
};

export default Notfound;

