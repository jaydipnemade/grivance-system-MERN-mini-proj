import React from "react";
const Footer = () => {
    return (
        <div className="footer">
            <div id="carouselExampleAutoplaying" className="carousel slide py-3  me-auto ms-auto bg-dark mt-5"
                data-bs-ride="carousel"   data-interval="2000"  style={{width: "100%"}}>
                <div className="carousel-inner d-flex">

                    <div  className="carousel-item active">



                        <div className="d-flex">

                            <img src={require("../media/img/azadi.png")} className="d-block w-15 " style={{paddingLeft: "10%", paddingRight: "5%" }}alt="..." />
                            <img src={require("../media/img/bhim_upi.png")} className="d-block w-15 "
                               style={{paddingLeft: "5%", paddingRight: "5%" }} alt="..." />
                            <img src={require("../media/img/digitalindia.png")}className="d-block w-15 "
                               style={{paddingLeft: "5%", paddingRight: "5%" }} alt="..." />
                            <img src={require("../media/img/india.gov.png")} className="d-block w-15 "
                                style={{paddingLeft: "5%", paddingRight: "5%" }}alt="..." />

                        </div>
                    </div>
                    <div className="carousel-item">

                        <div className="d-flex">
                            <img src={require("../media/img/india.gov.png")} className="d-block w-15 "
                               style={{paddingLeft: "10%", paddingRight: "5%" }} alt="..." />
                            <img src={require("../media/img/swachh_bharat.png")}  className="d-block w-15 "
                                style={{paddingLeft: "5%", paddingRight: "5%" }} alt="..." />
                            <img src={require("../media/img/g20.png")}  className="d-block w-15 " style={{paddingLeft: "5%", paddingRight: "5%" }}
                                alt="..." />
                            <img src={require("../media/img/ministry.aspx")}  className="d-block w-15 "
                                style={{paddingLeft: "5%", paddingRight: "5%" }} alt="..." />


                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>


            <div className="bg-light">
                <div className="row" style={{marginLeft: "15%", marginRight:"15%"}}>
                    <div className="col-md-4 my-4">
                        CENTERS
                        <hr />
                        <ul>
                            <li>
                                Bengaluru

                            </li>
                            <li>
                                Chennai

                            </li>
                            <li>
                                Delhi

                            </li>
                            <li>
                                Hyderabad

                            </li>
                            <li>
                                Kolkata

                            </li>
                            <li>
                                Mohali

                            </li>
                            <li>
                                Mumbai

                            </li>
                            <li>
                                Noida

                            </li>
                            <li>

                                Patna
                            </li>
                            <li>
                                Pune

                            </li>
                            <li>

                                Silchar
                            </li>
                            <li>
                                Thiruvananthapuram

                            </li>
                        </ul>

                    </div>
                    <div className="col-md-4 my-4">
                        LINKS
                        <hr />
                        <ul>

                            <li>

                                About Us
                            </li>
                            <li>

                                Products & Services
                            </li>
                            <li>

                                R&D
                            </li>
                            <li>

                                Careers
                            </li>
                            <li>

                                Tenders
                            </li>
                            <li>

                                Press Kit
                            </li>
                            <li>

                                Video Gallery
                            </li>
                            <li>

                                Events
                            </li>
                            <li>

                                Awards
                            </li>
                            <li>

                                Downloads
                            </li>
                            <li>

                                Achievements
                            </li>
                            <li>

                                Alliance
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 my-4">
                        CONTACT US
                        <hr />
                        <iframe title="map" className="border border-black rounded"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d945.7164142086793!2d73.8105031!3d18.5349721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0e5dca0f97%3A0xaed6c14da20b1d0f!2sCENTRE%20FOR%20DEVELOPMENT%20OF%20ADVANCED%20COMPUTING%2C%20B%2F1%2C%20Panchawati%20Rd%2C%20Mansarovar%2C%20Panchawati%2C%20Pashan%2C%20Pune%2C%20Maharashtra%20411008!5e0!3m2!1sen!2sin!4v1686241037272!5m2!1sen!2sin"
                            style={{border:"0"}} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe> <br />
                        <strong>
                            Centre for Development of Advanced Computing <br />
                            C-DAC Innovation Park,

                        </strong> <br />
                        Panchavati, Pashan, Pune - 411 008, Maharashtra (India) <br />
                        Phone: +91-20-25503100 <br />
                        Fax: +91-20-25503131 <br />
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    Help | Website Policies | Copyright Policy | Terms & Conditions | Reach Us <br /> <br />
                    Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC) <br />
                    © 2023 C-DAC. All rights reserved, Last Updated: THU, June 08, 2023 <br />

                </div>
            </div>
        </div>
    );
};
export default Footer;
