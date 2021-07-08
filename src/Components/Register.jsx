import React from "react";
import { useState } from "react";
import "./stylesreg.css";
import axios from "axios";

export default function Register() {
  const [firstname, setFn] = useState("");
  const [lastname, setLn] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [cpswrd, setCpswrd] = useState("");

  const textFn = (e) => {
    setFn(e.target.value);
  };

  const textLn = (e) => {
    setLn(e.target.value);
  };

  const textDob = (e) => {
    setDob(e.target.value);
  };

  const textEmail = (e) => {
    setEmail(e.target.value);
  };

  const textNum = (e) => {
    setNum(e.target.value);
  };

  const textPswrd = (e) => {
    setPswrd(e.target.value);
  };

  const textCpswrd = (e) => {
    setCpswrd(e.target.value);
  };
  const pushItem = () => {
    axios.post("http://localhost:4000/app/signup", {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      email: email,
      number: num,
      pswrd: pswrd,
      cpswrd: cpswrd
    });
  };

  return (
    <div className="regbody">
      <form>
        <h1>Registration Form</h1>
        <div className="Main">
          <p>First Name:</p>
          <input
            type="text"
            name="first"
            placeholder="first name"
            onChange={textFn}
            required
          />
          <p>Last Name:</p>
          <input
            type="text"
            name="last"
            placeholder="last name"
            onChange={textLn}
          />
          <p>Date of Birth:</p>
          <input placeholder="YY-MM-DD" onChange={textDob} />
          <p>Email-Id:</p>
          <input
            name="email"
            type="email"
            placeholder="e-mail"
            onChange={textEmail}
            required
          />
          <p>Contact Number:</p>
          <input
            type="number"
            placeholder="contact number"
            onChange={textNum}
            required
          />
          <p>Password</p>
          <input name="pswrd" type="password" onChange={textPswrd} required />
          <p>Confirm Password</p>
          <input name="cpswrd" type="password" onChange={textCpswrd} required />
          <button onClick={pushItem}>Submit</button>
        </div>
      </form>
    </div>
  );
}
