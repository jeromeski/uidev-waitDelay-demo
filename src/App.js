import { useEffect, useState } from "react";
import "./styles.css";

const Wait = ({delay = 1000, placeholder, ui}) => {
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, delay)
    return () => clearTimeout(timer)
  },[delay])

  return show ? ui : placeholder
}


export default function App() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>} 
        ui={<p>This text should appear after 3 seconds</p>}
      />
    </div>
  );
}
