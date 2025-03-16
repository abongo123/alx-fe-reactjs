function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-6 max-w-sm mx-auto rounded-lg shadow-lg">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" className="rounded-full w-36 h-36 mx-auto" />
        <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;