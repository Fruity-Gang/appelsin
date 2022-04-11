import { useNavigate } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

const ProfilePage = () => {
  const navigate = useNavigate();

  const goHome = async () => {
    navigate("/");
  };

  return (
    <>
      <Topbar />
      <div className="newContainer">
        <Sidebar />
        <div className="others">
          <section>
            <h1>Your profile</h1>
            <br />
            <p>Whats up fruity boi!</p>
            <br />
            <div className="flexGrow">
              <button onClick={goHome}>Go back</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
