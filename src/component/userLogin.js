import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let haddSignupAction = async (e) => {
    e.preventDefault();

    try {
      //   alert(email + pass);
      const response = await fetch("http://localhost:4000/ulogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });
      //   console.log(response);
      if (response.ok) {
        console.log("Login successful");
        // After successful login

        navigate("/userdashboard/" + encodeURIComponent(email));

        // Perform any additional actions after successful login
      } else {
        console.error("Invalid credentials");
        alert(
          "Incorrect Email" +
            " " +
            email +
            " " +
            "or password" +
            "" +
            "or try to add new USER"
        );
        // Display an error message or perform any additional actions for failed login
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="my-5 temp">..</div>
      <div className="text-light heading-text my-5">User Log-in</div>
      <div className="card p-3 form-signin text-center  m-auto rounded-4 widthform">
        <form onSubmit={haddSignupAction}>
          <img
            class="mb-4"
            src={require("../media/img/cdac-logo-sm.png")}
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please Log-in</h1>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          New user <Link to="/signup">Sign_Up</Link>
        </form>
      </div>
    </>
  );
};
export default UserLogin;
