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
        navigate('/');
    }

    return (
        <>
        <Topbar />
        <div className="newContainer">
            <Sidebar />
            <div className="others">
            {auth.user ? (
                <h1>Looking fruity there {auth.user}</h1> ) : (
            <h1>Not logged in</h1>
            )}
            {/* <br />
            <h2>Public</h2>
            <Link className="link" to="/login">Login</Link>
            <br />
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/profile">Profile</Link>
            <>
            {auth.user ? (
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
            ) : (
                null
            )}
            </> */}
        </div>
        </div>
        </>
    )
}

export default Home