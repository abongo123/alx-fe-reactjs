import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <p>{JSON.stringify(["UserProfile"])}</p>
    </div>
  );
}

export default App;

