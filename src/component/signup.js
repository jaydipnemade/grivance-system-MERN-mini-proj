import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(false);
  const inputStyle = {
    border: inputError ? "2px solid red" : "",
  };

  let [signup, setsignup] = useState({
    uname: "",
    cno: "",
    prn: "",
    email: "",
    pass: "",
    cnfpass: "",
  });
  // uname
  let handleUname = (e) => {
    let newSignup = { ...signup, uname: e.target.value };
    setsignup(newSignup);
  };

  // cno
  let handlecno = (e) => {
    let newcno = { ...signup, cno: e.target.value };
    setsignup(newcno);
  };

  // prn
  let handleprn = (e) => {
    let newprn = { ...signup, prn: e.target.value };
    // alert(e.target.value);
    setsignup(newprn);
  };

  // email
  let handleemail = (e) => {
    let newemail = { ...signup, email: e.target.value };
    setsignup(newemail);
  };

  // pass
  let handlepass = (e) => {
    let newpass = { ...signup, pass: e.target.value };
    setsignup(newpass);
  };

  // cnfpass
  let handlecnfpass = (e) => {
    let newcnfpass = { ...signup, cnfpass: e.target.value };
    setsignup(newcnfpass);
  };
  // button

  let addSignupAction = (event) => {
    event.preventDefault();
    const encodedPassword = btoa(signup.pass);
    const encodedcnfPassword = btoa(signup.cnfpass);
    if (encodedPassword === encodedcnfPassword) {
      setInputError(false);
      let url = `http://localhost:4000/addsignup?username=${signup.uname}&ContactNo=${signup.cno}&PRN=${signup.prn}&Email=${signup.email}&pass=${encodedPassword}`;
      fetch(url);
      navigate("/userLogin");
    } else {
      setInputError(true);
    }
  };

  return (
    <>
      <div className="my-5 temp">..</div>
      <div className="text-light heading-text my-5">User Sign-up</div>
      <div className="card p-3 form-signin text-center m-auto rounded-4  widthform">
        <form onSubmit={addSignupAction}>
          <img
            className="mb-4"
            src={require("../media/img/cdac-logo-sm.png")}
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please Sign-up</h1>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={signup.uname}
              onChange={handleUname}
              required
            />
            <label for="name">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="cno"
              maxlength="10"
              minlength="10"
              placeholder="Contact number"
              value={signup.cno}
              onChange={handlecno}
              required
            />
            <label for="cno">Contact Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="prn"
              maxlength="12"
              minlength="12"
              placeholder="PRN"
              value={signup.prn}
              onChange={handleprn}
              required
            />
            <label for="prn">PRN</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={signup.email}
              onChange={handleemail}
              required
            />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password"
              value={signup.pass}
              onChange={handlepass}
              style={inputStyle}
              required
            />
            <label for="pass">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="cnfpass"
              placeholder="cnfirm Password"
              value={signup.cnfpass}
              onChange={handlecnfpass}
              style={inputStyle}
              required
            />
            <label for="cnfpass">Confirm Password</label>
          </div>
          {inputError && (
            <p style={{ color: "red" }}>
              Confirm Password and Password should same !!!
            </p>
          )}
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};
export default Signup;
