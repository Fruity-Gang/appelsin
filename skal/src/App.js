//import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import ProfilePage from "./components/profile/ProfilePage";
import Unauthorized from "./components/Unauthorized";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
