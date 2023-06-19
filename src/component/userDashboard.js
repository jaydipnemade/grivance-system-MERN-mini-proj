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

  // const deletedataaction = async () => {
  //   try {
  //     let res = await fetch("http://localhost:4000/DeleteData");
  //     if (res.status === 500) {
  //       let errorMessage = await res.text();
  //       throw new Error(errorMessage);
  //     }
  //     alert("Success");
  //     // Refresh the page or perform any other necessary actions
  //     // getAllUserAction();
  //   } catch (error) {
  //     alert(`Error: ${error.message}`);
  //   }
  // };

  // function deleteGrivance() {
  //   const id = id; // Replace with the actual ID of the grievance you want to delete

  //   fetch("http://localhost:4000/deleteGrivance", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response
  //       console.log(data.message); // Log the response message
  //       // Refresh the page or update the UI as needed
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error(error);
  //     });

  // function deleteGrivance() {
  // const idInput = document.getElementById(data1);
  // const id = idInput.value.trim();

  // if (id === "") {
  //   alert("Please enter a valid Grievance ID.");
  //   return;
  // }

  // fetch("http://localhost:4000/deleteGrivance", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ id }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Handle the response
  //     console.log(data.message); // Log the response message
  //     // Refresh the page or update the UI as needed
  //   })
  //   .catch((error) => {
  //     // Handle any errors
  //     console.error(error);
  //   });

  // }

  function deleteGrivance(id) {
    if (!id) {
      alert("Please enter a valid Grievance ID.");
      return;
    }

    fetch("http://localhost:4000/deleteGrivance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response
        // console.log(data.message);
        window.location.reload();
        // alert("entry has been deleted");
        // Log the response message
        // Refresh the page or update the UI as needed
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

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

              <th>Grievance</th>
              <th>Status</th>
              <th></th>
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
                    <td>{i.statusofg}</td>
                    <td>
                      <input
                        type="submit"
                        value="delete"
                        className="btn btn-danger"
                        onClick={() => deleteGrivance(i.id)} // Pass the ID to the delete function
                      ></input>
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
