import React from "react";
import Register from "./pages/Register/Register";
import Catagories from "./pages/Catagories/Catagories";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/select-genre" element={<Catagories/>}/>
      </Routes>
    </main>
  );
}

export default App;
