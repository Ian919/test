import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { SignIn } from "./common/signIn";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
