// create your App component here
// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Fetch a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update the state with the fetched image URL
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h2>Random Dog Image</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default App;