import { useState } from "react";
import "./App.css";
import LogInForm from "./LogInForm";
import RegistrationForm from "./RegistrationForm";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <LogInForm />
      <RegistrationForm />
    </>
  );
}

export default App;
