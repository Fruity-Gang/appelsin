import { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please add your credentials");
      return;
    }

    Login({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        {error !== "" ? <div className="error">{error}</div> : ""}
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" value="Login" className="btn" />
    </form>
  );
};

export default LoginForm;
