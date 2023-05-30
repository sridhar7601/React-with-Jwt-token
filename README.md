## JWT Token-Based Authentication with React and Node.js

This repository demonstrates how to implement JWT token-based authentication in a React and Node.js application. It includes a server-side code (`server.js`) and a client-side code (`App.js`).

### Server-side code (`server.js`)

This code sets up a simple Express.js server with two routes: `/login` for user authentication and `/protected` for accessing protected data.

```javascript
// Server-side code
// ...

// Set up routes
app.post('/login', (req, res) => {
  // User authentication logic
  // ...
});

app.get('/protected', authenticateToken, (req, res) => {
  // Access protected data
  // ...
});

// ...

// Middleware for token authentication
function authenticateToken(req, res, next) {
  // Token verification logic
  // ...
}

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
```
### Client-side code (`App.js`)

This code sets up a React component called `App` that interacts with the server-side API.

- The component uses React's `useState` hook to manage the token state.

- The `handleLogin` function sends a POST request to the server's `/login` endpoint with the username and password. If the login is successful, it stores the received JWT token in the component's state and saves it in the client-side storage (localStorage).

- The `handleProtectedData` function sends a GET request to the server's `/protected` endpoint with the JWT token in the Authorization header. If the request is successful, it displays the protected data; otherwise, it shows an error message.

- The `handleLogout` function clears the token from the component's state and removes it from the client-side storage, effectively logging out the user.

- The `useEffect` hook is used to check if a token exists in the client-side storage when the app loads. If a token is found, it is set in the component's state.

- The component's render function includes buttons for login, accessing protected data, and logout.

### Steps to run the repository locally

1. Clone the repository to your local machine && Navigate to Backend :
```bash
cd backend && npm install
```
2. Start the backend server :
```bash
node server.js
```
3. Go back to main folder :
```bash
cd ..
```
4.Navigate to frontend :
```bash
cd frontend &&  npm install
```
5. Start the frontend server :
```bash
npm start 
```

