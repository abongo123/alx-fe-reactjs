import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm'
import FormikForm from "./components/formikForm";

function App() {

  return (
  
  <BrowserRouter>
  <Routes>
   <Route path="/register" element={<FormikForm />} />
  </Routes>
  

  
  </BrowserRouter>
  )
}

export default App
