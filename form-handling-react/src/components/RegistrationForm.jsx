import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    console.log("Form submitted:", formData);
  };
   

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='Your Username' value={FormData.username} onChange={handleChange}/>
        <input type='email' name='email' placeholder='Input Email' value={FormData.email} onChange={handleChange}/>
        <input type='password' name='password' placeholder='Your Password' value={FormData.password} onChange={handleChange}/>
        <button type='Submit'>Register</button>




    </form>
  )
}

export default RegistrationForm