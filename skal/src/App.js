import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Preferences from "./components/Preferences";
import Dashboard from "./components/Dashboard";
import Login from './components/Login/Login';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="container">
      <h1>Fruity App</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/preferences" element={<Preferences />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
