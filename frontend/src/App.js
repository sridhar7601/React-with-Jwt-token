import React, { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'admin', password: 'admin123' }),
    });

    const data = await response.json();

    if (response.ok) {
      setToken(data.token);
      // Save the token in client-side storage (e.g., local storage or a cookie)
      localStorage.setItem('token', data.token);
    } else {
      alert(data.error);
    }
  };

  const handleProtectedData = async () => {
    const response = await fetch('http://localhost:3001/protected', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      alert('Unauthorized');
    }
  };

  const handleLogout = () => {
    setToken('');
    // Remove the token from client-side storage (e.g., local storage or a cookie)
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleProtectedData}>Access Protected Data</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
