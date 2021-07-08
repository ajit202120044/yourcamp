import React from "react";
import "./styleslogin.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [pswrd, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [loginstatus, setLoginStatus] = React.useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/app/signin", {
        email: email,
        pswrd: pswrd,
        acceptedterms: acceptedTerms
      })
      .then((res) => {
        console.log(res.msg);
        if (res.data.responsecode === "200") {
          history.push("/info");
        } else {
          setLoginStatus(res.data.msg);
        }
      });
  };

  return (
    <div className="loginbody">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            name="password"
            type="password"
            value={pswrd}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            name="acceptedTerms"
            type="checkbox"
            onChange={(e) => setAcceptedTerms(e.target.value)}
            required
          />
          I accept the terms of service
        </label>
        <button>Submit</button>
      </form>
      <h2> {loginstatus}</h2>
    </div>
  );
}
