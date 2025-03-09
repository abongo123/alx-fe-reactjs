import useState from 'react'


function RegistrationForm() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
   

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='Your Username' value={FormData.name} onChange={handleSubmit}/>
        <input type='email' name='email' placeholder='Input Email' value={FormData.email} onChange={handleSubmit}/>
        <input type='password' name='password' placeholder='Your Password' value={FormData.password} onChange={handleSubmit}/>
        <button type='Submit'>Register</button>




    </form>
  )
}

export default RegistrationForm