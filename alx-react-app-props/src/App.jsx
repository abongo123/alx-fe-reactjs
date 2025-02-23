
import { useState } from 'react';
import ProfilePage from './UserProfile';
import WelcomeMessage from "./WelcomeMessage";
import Header from "./Header";
import Footer from "./Footer"

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;