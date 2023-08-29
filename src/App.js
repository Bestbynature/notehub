import React from "react";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./pages/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
