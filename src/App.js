import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Routes, BrowserRouter, Route } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light')
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is on", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is on", "Success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='Text Analyzer' mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/' element={<TextForm mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
