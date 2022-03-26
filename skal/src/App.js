import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const fruityUser = {
    email: "1337@fruity.com",
    password: "getfruity",
  };

  const [user, setUser] = useState({
    email: "",
  });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === fruityUser.email &&
      details.password === fruityUser.password
    ) {
      console.log("Bonjour fruity boy ");
      setUser({
        email: details.email,
      });
    } else {
      console.log("you are not fruity :(");
      setError("you are not fruity :(");
    }
  };

  const Logout = () => {
    setUser({
      email: "",
    });
  };

  return (
    <div className="container">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.email}</span>
          </h2>
          <button onClick={Logout} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
        <h3>Lets get fruity</h3>
        <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default App;
