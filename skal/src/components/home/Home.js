import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/");
  };

  return (
    <>
      <Topbar />
      <div className="newContainer">
        <Sidebar />
        <div className="others">
          {auth.user ? (
            <h1>Looking fruity there {auth.user}</h1>
          ) : (
            <h1>Not logged in</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
