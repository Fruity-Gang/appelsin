import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const loggedIn = false; 
    console.log(auth);

    const logout = async () => {
        setAuth({});
        navigate('/');
    }

    return (
        <section>
            <>
            {auth.user ? (
                <h1>Looking fruity there {auth.user}</h1> ) : (
            <h1>Not logged in</h1>
            )}
            </>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link>
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
            </>
        </section>
    )
}

export default Home