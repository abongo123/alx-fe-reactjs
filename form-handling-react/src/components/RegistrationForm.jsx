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
    let newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    alert("Registration successful!");
    setFormData({ username: "", email: "", password: "" });
    setErrors({});
  };


  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='Your Username' value={username} onChange={handleChange}/>
        <input type='email' name='email' placeholder='Input Email' value={email} onChange={handleChange}/>
        <input type='password' name='password' placeholder='Your Password' value={password} onChange={handleChange}/>
        <button type='Submit'>Register</button>




    </form>
  )
}

export default RegistrationForm