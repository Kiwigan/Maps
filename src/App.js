import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Maps from './components/Maps';
import Form from "./components/Form";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="container my-3">
        <Form/>
      </div>
      </BrowserRouter>

  </div>
  );
}

export default App;
