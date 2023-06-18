import React from "react";
import { useNavigate } from "react-router-dom";
import { Component, useEffect, useState } from "react";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const id = event.target.id;

    // Update the MongoDB data
    fetch("http://localhost:4000/updatestatus", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, selectedValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        window.location.reload();
        console.log("Data updated successfully:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating data:", error);
      });
  };
  const [userList, setUserList] = useState([]);

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/getGrivance", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.allgrivance);
        setdata(data.allgrivance);
      });
  }, []);

  return (
    <>
      <div className="my-5 temp">..</div>
      <div className="text-light heading-text  my-5">Admin Dashboard</div>

      <div className=" w-75 ms-auto me-auto table-responsive">
        <table className="table table-striped table-hover">
          <br />
          <thead>
            <tr>
              <th>TimeStamp</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Identity</th>
              <th>Grievance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i) => {
              return (
                <tr>
                  <td>{i.date}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.cno}</td>
                  <td>{i.who}</td>

                  <td>
                    <a
                      className="btn btn-light"
                      data-bs-toggle="collapse"
                      href={"#row1" + i.prn}
                      role="button"
                      aria-expanded="false"
                      aria-controls={"row1" + i.prn}
                    >
                      Preview
                    </a>
                    <div className="collapse" id={"row1" + i.prn}>
                      <div className="card card-body">
                        {i.textgriv}
                        <a href="#">read More</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm mb-3"
                      aria-label=""
                      name="status"
                      id={i.id}
                      value={selectedValue}
                      value={i.statusofg}
                      onChange={handleSelectChange}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Process">In Process</option>
                      <option value="Success">Success</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="ms-auto me-auto" aria-label="page1 Page">
        <ul className="pagination justify-content-center ">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
    // <>
    //   <h1>Data</h1>
    //   {/* <input type="button" value="get All User" onClick={getAllUserAction} /> */}
    //   {/* map with another element */}
    //   {userList.map((item) => (
    //     <>
    //       <div>
    //         {item.username}
    //         {item.ContactNo} {item.pprn}
    //         {item.emailAddress}
    //         {item.Youare}
    //         {item.Grievance}
    //       </div>
    //     </>
    //   ))}
    // </>
  );
};
export default AdminDashboard;
