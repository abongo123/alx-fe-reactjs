import UserContext from "./context/UserContext";

function App() {
  const userData = { name: "John Doe", age: 30, email: "john@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
