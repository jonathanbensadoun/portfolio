import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Encode() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const { isLightMode } = useSelector((state) => state.project);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const sessionId = '1704';
    const message = inputValue;

    const requestBody = {
      sessionId: sessionId,
      message: message,
    };
    setInputValue('');

    try {
      const options = {
        method: 'POST',
        headers: {
          cookie:
            'connect.sid=s%253AMsYyGtbcg0b7UT-bmm4rtLm37_gLqmQv.AyPxaeI5TO5Gr3F4mXHFIj8pFcOXdkgJwqrTeH5%252BG6A',
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.3.1',
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(
        'http://localhost:3000/api/chatbot',
        options
      );
      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la requête:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center p-40">
      <form onSubmit={handleSubmit}>
        <p>{response.response}</p>
        <input
          className={`${
            isLightMode
              ? 'bg-secondary bg-opacity-25'
              : 'bg-secondaryDark bg-opacity-75'
          }`}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Encode;
