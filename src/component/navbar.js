import React from "react";
// import banner2 from "../media/img/int-banner2.jpg"
import logo from "../media/img/cdac-logo.png"
import Home from "./home";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Grievance from "./grievance";
import AboutUS from "./aboutus";
import Signup from "./signup";
import UserLogin from "./userLogin";
import AdminLogin from "./adminLogin";
import AdminDashboard from "./admindashboard";
import UserDashboard from "./userDashboard";

const Navbar = () => {
    return (
        <div className="mynavbar">

            <div className=" fixed-top">
                <div className="bg-dark">

                    .. <br /> <br />
                </div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="inline">

                            <a className="navbar-brand" href="./home.html">


                                <div style={{ display: "inline" }}>
                                    <img src={logo} className="img-banner"
                                        alt="no img found" /></div>
                            </a>
                            <button className="navbar-toggler  ms-5" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0 ">

                                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>

                                <li className="nav-item"><Link className="nav-link active" to="/grievance">Add your Grievance</Link>
                                </li>


                                <li className="nav-item"><Link className="nav-link active" to="/aboutus">About us</Link></li>


                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle active" href="./" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Login/Sign up
                                    </a>
                                    <ul className="dropdown-menu">

                                        <li><Link className="nav-link active" to="/userlogin">User </Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link className="nav-link active" to="/adminlogin">Admin </Link></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/grievance" element={<Grievance/>} />
                    <Route path="/aboutus" element={<AboutUS/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/userlogin" element={<UserLogin/>} />
                    <Route path="/adminlogin" element={<AdminLogin/>} />
                    <Route path="/admindashboard" element={<AdminDashboard/>} />
                    <Route path="/userdashboard" element={<UserDashboard/>} />
                    
        

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
           
        </div>


    );
};
export default Navbar;
