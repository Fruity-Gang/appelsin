import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
    const navigate = useNavigate();

    const goHome = async () => {
        navigate('/');
    }

    return (
        <section>
            <h1>Your profile</h1>
            <br />
            <p>Whats up fruity boi!</p>
            <br />
            <div className="flexGrow">
                <button onClick={goHome}>Go back</button>
            </div>
        </section>
    )
}

export default ProfilePage