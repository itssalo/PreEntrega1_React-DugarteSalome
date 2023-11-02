import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <NavBarComponent />
  </div>
}

export default App
