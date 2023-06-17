import React, { useState } from 'react';
import "./home.css";


function Home() {
    const [activeSection, setActiveSection] = useState('VISION');

    const handleButtonClick = (sectionId) => {
        setActiveSection(sectionId);
    };


    return (
        <div className="home">
         <div className="my-4 temp">
                ..</div>
            <div className="text-light  heading-text  my-5 ">
                C-DAC Home
            </div>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" data-bs-interval="100">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                        aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                        aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
                        aria-label="Slide 9"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../media/img/modi.jpeg')} className="d-block w-100" alt="param" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/admition.jpeg')} className="d-block w-100" alt="admintion" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/agnipath.jpeg')} className="d-block w-100" alt="agnipath" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/AI.jpeg')} className="d-block w-100" alt="AI" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/cdac noida.jpeg')} className="d-block w-100" alt="cdac noida" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/cyber.jpeg')} className="d-block w-100" alt="cyber" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/highprfo.jpeg')} className="d-block w-100" alt="hi perfo" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/incsa.jpeg')} className="d-block w-100" alt="isecst" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../media/img/mtechadmi.jpeg')} className="d-block w-100" alt="mtech" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container togglebar">
                <div className="row btn_grp">
                    <button
                        autoFocus
                        style={{ backgroundColor: activeSection === 'VISION' ? 'blanchedalmond' : '' }}
                        className="btn btn-lg  btn_style col-sm"
                        id="btn_vision"
                        type="button"
                        onClick={() => handleButtonClick('VISION')}
                    >
                        <h4>VISION</h4>
                    </button>
                    <button
                        style={{ backgroundColor: activeSection === 'MISSION' ? 'blanchedalmond' : '' }}
                        className="btn btn-lg  btn_style col-sm"
                        type="button"
                        onClick={() => handleButtonClick('MISSION')}
                    >
                        <h4>MISSION</h4>
                    </button>
                    <button
                        style={{ backgroundColor: activeSection === 'ABOUTUS' ? 'blanchedalmond' : '' }}
                        className="btn btn-lg  btn_style col-sm"
                        type="button"
                        onClick={() => handleButtonClick('ABOUTUS')}
                    >
                        <h4>ABOUT US</h4>
                    </button>
                </div>
            </div>
            <div className="roww">
                <div className="col content-section content-section-active" style={{ display: activeSection === 'VISION' ? 'block' : 'none' }} id="VISION">
                    <div className="">
                        <div className="card card-body">


                            <h3>Our Vision &amp; Core Values</h3>
                            <hr />

                            <h4> Our Vision</h4>
                            <p>To emerge as the premier R&amp;D institution for the design, development and deployment of
                                world className
                                electronic and IT solutions for economic and human advancement.</p>


                            <ul>
                                <li>Expand the frontiers of Electronics and Information Technology.</li>
                                <li>Evolve technology solutions - architectures, systems and standards for nationally
                                    important problems.
                                </li>
                                <li>Achieve rapid and effective spread of knowledge by overcoming language barriers through
                                    application of
                                    technologies.</li>
                                <li>Share experience and know-how to help build advanced competence in the areas of
                                    Electronics and
                                    Information Technology.</li>
                                <li>Bring benefits of Electronics and Information Technology to society.</li>
                                <li>Utilize the Intellectual Property generated by converting it to business opportunity.
                                </li>
                            </ul>
                            <br />

                            <h4> Our Core Values</h4>
                            <hr />
                            <p>The essence of C-DAC's philosophy and the bed rock of our Corporate Culture...</p>
                            <ul>
                                <li>Innovation and pursuit of excellence in 'Applications', 'Research' and 'Technology'
                                    (ART).</li>
                                <li>Integrity, transparency and openness in all our actions.</li>
                                <li>Working with and through the 'Teams' is our way of life.</li>
                                <li>Distributed Leadership across the organization at various levels.</li>
                                <li>Strive to continuously improve our processes and quality.</li>
                                <li>Address the needs of the society through user centric initiatives.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col content-section"  style={{ display: activeSection === 'MISSION' ? 'block' : 'none' }} id="MISSION">
                    <div className="">
                        <div className="card card-body">
                            <h3> Our Mission</h3>
                            <hr />
                            <p>Our MissionC-DAC's Mission statement has evolved after deep thought and in consultation with
                                the members of
                                C-DAC. The Mission Statement as defined below, reflects the fabric and character of C-DAC
                                and integrates in
                                the fulfillment of C-DAC's Vision.</p> <br />
                            <h4>Mission Mode Programme</h4>
                            <hr />
                            <p>C-DAC with its focus in Advanced Computing is uniquely positioned to establish dependable and
                                secure Exascale
                                Ecosystem offering services in various domains. C-DAC has crafted its strategic practical
                                roadmap keeping in
                                perspective the paradigm shift in the global technological ecosystem and ever-dynamic area
                                of national ICT
                                scenario. Accordingly, the roadmap has been devised with four-pronged approach based on the
                                Core as HPC
                                &amp; Cloud., viz. Futuristic Research, Applied R&amp;D, Applications and Services covering
                                28 thrust areas.
                                Towards realisation of the roadmap, mission mode programmes were evolved to research,
                                develop and deliver
                                the futuristic technologies/solutions. </p>

                            <p className="pb-3">C-DAC has crafted its strategic practical roadmap keeping in perspective the
                                paradigm shift in
                                the global technological ecosystem and ever-dynamic area of national ICT scenario. The
                                technological
                                advancements in high-speed communication, intense computation, storage, and infrastructure
                                coupled with
                                mobility and accessibility has impacted the modalities of conducting business in a
                                revolutionary manner.
                            </p>

                            <div className="row">
                                <div className="col-md-3 col-sm-12 text-center">
                                    <img src="./images/exascale.png" alt="Exascale"
                                        className="border border-5 shadow rounded-circle border-white" /><br />
                                    <h6 className="my-3">Exascale Computing Mission</h6>
                                </div>

                                <div className="col-md-3 col-sm-12 text-center">
                                    <img src="./images/quantom.png" alt="Quantum Computing"
                                        className="border border-5 shadow rounded-circle border-white" /><br />
                                    <h6 className="my-3">Quantum Computing Mission</h6>
                                </div>

                                <div className="col-md-3 col-sm-12 text-center">
                                    <img src="./images/micro.png" alt="Microprocessor"
                                        className="border border-5 shadow rounded-circle border-white" /><br />
                                    <h6 className="my-3">Microprocessor and Strategic Electronics Mission</h6>
                                </div>

                                <div className="col-md-3 col-sm-12 text-center">
                                    <img src="./images/micro.png" alt="IoE, Dependable" className="border border-5 shadow rounded-circle border-white" /><br />
                                    <h6 className="my-3">IoE, Dependable and Secure Computing Mission</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col content-section" style={{ display: activeSection === 'ABOUTUS' ? 'block' : 'none' }} id="ABOUTUS">
                    <div className="">
                        <div className="card card-body">
                            <h3>About Us</h3>
                            <hr />

                            <p>Centre for Development of Advanced Computing (C-DAC) is the premier R&amp;D organization of
                                the
                                Ministry of
                                Electronics and Information Technology (MeitY) for carrying out R&amp;D in IT, Electronics
                                and
                                associated areas.
                                Different areas of C-DAC, had originated at different times, many of which came out as a
                                result
                                of identification of
                                opportunities.</p>

                            <ul style={{ fontsize: "medium" }}>
                                <li>The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial
                                    of
                                    import of
                                    Supercomputers by USA. Since then C-DAC has been undertaking building of multiple
                                    generations of Supercomputer
                                    starting from PARAM with 1 GF in 1988.</li>
                                <li>Almost at the same time, C-DAC started building Indian Language Computing Solutions with
                                    setting up of GIST
                                    group (Graphics and Intelligence based Script Technology); National Centre for Software
                                    Technology (NCST) set up
                                    in 1985 had also initiated work in Indian Language Computing around the same period.
                                </li>
                                <li>Electronic Research and Development Centre of India (ER&amp;DCI) with various
                                    constituents
                                    starting as adjunct
                                    entities of various State Electronic Corporations, had been brought under the hold of
                                    Department of Electronics
                                    and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects
                                    of
                                    applied electronics,
                                    technology and applications.</li>
                                <li>With the passage of time as a result of creative ecosystem that got set up in C-DAC,
                                    more
                                    areas such as Health
                                    Informatics, etc., got created; while right from the beginning the focus of NCST was on
                                    Software Technologies;
                                    similarly C-DAC started its education &amp; training activities in 1994 as a spin-off
                                    with
                                    the passage of time,
                                    it grew to a large efforts to meet the growing needs of Indian Industry for finishing
                                    schools.</li>
                            </ul>

                            <p>C-DAC has today emerged as a premier R&amp;D organization in IT&amp;E (Information
                                Technologies
                                and Electronics) in
                                the country working on strengthening national technological capabilities in the context of
                                global developments in
                                the field and responding to change in the market need in selected foundation areas. In that
                                process, C-DAC
                                represents a unique facet working in close junction with MeitY to realize nation’s policy
                                and
                                pragmatic
                                interventions and initiatives in Information Technology. As an institution for high-end
                                Research
                                and Development
                                (R&amp;D), C-DAC has been at the forefront of the Information Technology (IT) revolution,
                                constantly building
                                capacities in emerging/enabling technologies and innovating and leveraging its expertise,
                                caliber, skill sets to
                                develop and deploy IT products and solutions for different sectors of the economy, as per
                                the
                                mandate of its parent,
                                the Ministry of Electronics and Information Technology, Ministry of Communications and
                                Information Technology,
                                Government of India and other stakeholders including funding agencies, collaborators, users
                                and
                                the market-place.
                            </p>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
