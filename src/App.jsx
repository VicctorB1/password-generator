import { useState } from "react";
import CustomButton from "./components/Button";
import Footer from "./components/Footer";
import CopyButton from "./components/ButtonCopy";

export default function App() {

  const [password, setPassword] = useState("")

  function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = '';
  
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }
  
    setPassword(newPassword);
  }

  function copyText(){
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }


  return(
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <CopyButton onClick={copyText}>{password}</CopyButton>
        <span>Clique para copiar</span>
        <CustomButton onClick={generatePassword}>Generate 🔐</CustomButton>
      </div>
      <Footer />
    </>
  )
}