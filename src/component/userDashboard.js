import React from "react";
import { useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react";
const UserDashboard = () => {
  const { data } = useParams();
  const [userList, setUserList] = useState([]);

  const [data1, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/getGrivance", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data1) => {
        // console.log(data1.allgrivance);
        setdata(data1.allgrivance);
      });
  }, []);
  return (
    <>
      <div className="my-5 temp">..</div>
      <div className="text-light heading-text  my-5">User Dashboard</div>

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
            {data1.map((i) => {
              console.log(data);
              if (i.email == data) {
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
                      {i.statusofg}
                    </td>
                  </tr>
                );
              }
              return null;
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
  );
};
export default UserDashboard;
