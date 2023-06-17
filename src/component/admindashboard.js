import React from "react";
const AdminDashboard = () => {
    return (
        <>
            <div className="my-5 temp">
                ..</div>
            <div className="text-light heading-text  my-5">
                Admin Dashboard
            </div>

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
                        <tr>
                            <td>01:01:34 date</td>
                            <td>Harsh</td>
                            <td>minal@78.com</td>
                            <td>8499500405</td>
                            <td>Student</td>
                            <td>
                                <a
                                    className="btn btn-light"
                                    data-bs-toggle="collapse"
                                    href="#row1"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="row1"
                                >
                                    Preview
                                </a>
                                <div className="collapse" id="row1">
                                    <div className="card card-body">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Cupiditate, autem iure! Soluta dolores numquam labore,
                                        fugiat itaque fuga nemo tempora. Incidunt rem cum animi
                                        saepe?
                                        <a href="#">read More</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <select class="form-select form-select-sm mb-3"  aria-label="" name="status" id="status">
                                    <option value="1">Pending</option>
                                    <option value="2">In Process</option>
                                    <option value="3">Success</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className ="ms-auto me-auto" aria-label="page1 Page">
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
export default AdminDashboard;