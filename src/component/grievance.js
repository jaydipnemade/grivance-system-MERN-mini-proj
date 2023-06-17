import React from "react";

const Grievance = () => {


    return (
        <div className="grievence " >
            <div className="my-5 temp">
                ..</div>
            <div className="text-light heading-text  my-5">
                Grievance Form
            </div>

            <div className="w-75 me-auto ms-auto mb-5 bg-light px-3 py-3 rounded border border-black">
                <form onclick="return formValidation(); name='registration'">

                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Full Name"
                            required />
                    </div>


                    <div className="mb-3">
                        <label for="co_no" className="form-label">Contact No</label>


                        <input type="number" onKeyDown="if(this.value.length==10 && event.keyCode!=8) return false;"
                            placeholder="Enter Your Valid contact Number" maxlength="10" minlength="10" className="form-control"
                            name="co_no" id="co_no" required />
                    </div>

                    <div className="mb-3">
                        <label for="PRN" className="form-label">PRN No</label>


                        <input type="number"
                            placeholder="Enter Your Valid PRN Number" maxlength="12" minlength="12" className="form-control"
                            name="PRN" id="PRN" required />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"
                            required />
                    </div>


                    <label for="wru" className="form-label">You are...</label>
                    <select className="form-select" aria-label="Default select example">


                        <option value="1">Student</option>
                        <option value="2">Faculty</option>
                        <option value="3">Staff</option>
                    </select>

                    <div className="my-3">
                        <label for="grievance" className="form-label">Enter your Grievance</label>
                        <textarea className="form-control" id="grievance" rows="5" required></textarea>
                    </div>


                    <div className="d-grid gap-1 col-3  mx-auto">
                        <input type="submit" className=" btn  btn-sm  btn-primary" value="Submit" />

                    </div>

                </form>
            </div>

        </div>
        );
};
export default Grievance;
