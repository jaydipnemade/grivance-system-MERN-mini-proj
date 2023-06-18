import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Grievance = () => {
  const navigate = useNavigate();

  const [inputError, setInputError] = useState(false);
  const inputStyle = {
    border: inputError ? "2px solid red" : "",
  };

  let [grivence, setgrivence] = useState({
    name: "",
    cno: "",
    prn: "",
    email: "",
    who: "",
    textgriv: "",
  });
  // uname
  let handlename = (e) => {
    let newname = { ...grivence, uname: e.target.value };
    setgrivence(newname);
  };

  // cno
  let handlecno = (e) => {
    let newcno = { ...grivence, cno: e.target.value };
    setgrivence(newcno);
  };

  // prn
  let handleprn = (e) => {
    let newprn = { ...grivence, prn: e.target.value };
    // alert(e.target.value);
    setgrivence(newprn);
  };

  // email
  let handleemail = (e) => {
    let newemail = { ...grivence, email: e.target.value };
    setgrivence(newemail);
  };

  // who
  let handlewho = (e) => {
    let newwho = { ...grivence, who: e.target.value };
    setgrivence(newwho);
  };

  // cnfpass
  let handleTextGrivChange = (e) => {
    let newtextgriv = { ...grivence, textgriv: e.target.value };
    setgrivence(newtextgriv);
  };
  // button

  let addSignupAction = (event) => {
    event.preventDefault();

    if (grivence.email !== null) {
      setInputError(false);

      let url = `http://localhost:4000/addgriv?name=${grivence.uname}&cno=${grivence.cno}&prn=${grivence.prn}&email=${grivence.email}&who=${grivence.who}&text=${grivence.textgriv}`;
      //   alert(url);
        fetch(url);
        alert("Grivance submited plz refresh the page")
       navigate("/userLogin");
    } else {
      alert("enter email atlest");
    }
  };

  return (
    <>
      <div>
        <div className="my-5 temp">..</div>
        <div className="text-light heading-text  my-5">Grievance Form</div>

        <div className="w-75 me-auto ms-auto mb-5 bg-light px-3 py-3 rounded border border-black">
          <form
            //   onclick="return formValidation(); name='registration'"
            onSubmit={addSignupAction}
          >
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                required
                value={grivence.uname}
                onChange={handlename}
              />
            </div>

            <div className="mb-3">
              <label for="co_no" className="form-label">
                Contact No
              </label>

              <input
                type="number"
                //   onKeyDown="if(this.value.length==10 && event.keyCode!=8) return false;"
                placeholder="Enter Your Valid contact Number"
                maxlength="10"
                minlength="10"
                className="form-control"
                name="co_no"
                id="co_no"
                required
                value={grivence.cno}
                onChange={handlecno}
              />
            </div>

            <div className="mb-3">
              <label for="PRN" className="form-label">
                PRN No
              </label>

              <input
                type="number"
                placeholder="Enter Your Valid PRN Number"
                maxlength="12"
                minlength="12"
                className="form-control"
                name="PRN"
                id="PRN"
                required
                value={grivence.prn}
                onChange={handleprn}
              />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
                value={grivence.email}
                onChange={handleemail}
              />
            </div>
            <div>
              <label for="wru" className="form-label">
                You are...
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="wru"
                onChange={handlewho}
                value={grivence.who}
              >
                <option>Student</option>
                <option>Faculty</option>
                <option>Staff</option>
              </select>
            </div>

            <div className="my-3">
              <label htmlfor="grievance" className="form-label">
                Enter your Grievance
              </label>
              <textarea
                className="form-control"
                id="grievance"
                rows="5"
                placeholder="enter your Grievance here"
                required
                value={grivence.textgriv}
                onChange={handleTextGrivChange}
              ></textarea>
            </div>

            <div className="d-grid gap-1 col-3  mx-auto">
              <input
                type="submit"
                className=" btn  btn-sm  btn-primary"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Grievance;
