import React from "react";
import "./styleabout.css";
const About = () => {
  return (
    <>
      <h1 className="about">About yourcamp</h1>
      <h2>what is yourcamp</h2>
      <div>
        <p>
          <strong> yourcamp</strong> is a campground reviewing website. in which
          users can create their own campground or review other campground.
        </p>{" "}
      </div>
      <hr />
      <p>
        <strong>note:-</strong>we are working on it so that any users after
        login can <li>add own campground</li>
        <li>can review others camp</li>
        <li>can like button</li>
        <li>search through location </li>
        <li>sort the campground</li>
        <hr />
        <h3> recent features</h3>
        <ul>
          <li>users can register easily</li>
          <li>after registrtion login</li>
          <li> after login users can view some top campground given by me </li>
          <li>
            all users information are stored in our database after users
            registrtion
          </li>
          <li>
            if login credetial is right they can login otherwise its show error
          </li>
          <li>
            after clicking on campground they can see the details of campground
          </li>
        </ul>
      </p>
    </>
  );
};

export default About;
