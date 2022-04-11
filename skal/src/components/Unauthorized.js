import { useNavigate } from "react-router-dom";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <Topbar />
      <div className="newContainer">
        <Sidebar />
        <div className="others">
          <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You need to be logged in to access this page</p>
            <div className="flexGrow">
              <button onClick={goBack}>Go Back</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
