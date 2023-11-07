import { useState } from "react";
import CustomButton from "./components/Button";
import Footer from "./components/Footer";

export default function App() {

  const [password, setPassword] = useState("")

  function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = '';
  
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }
  
    setPassword(newPassword);
  }

  return(
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <p>Password: <span>{password}</span></p>
        <CustomButton onClick={generatePassword}>Generate 🔐</CustomButton>
      </div>
      <Footer />
    </>
  )
}