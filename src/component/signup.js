import React from "react";
const Signup = () => {
    return (<>
        <div className="my-5 temp">..</div>
        <div className="text-light heading-text my-5">User Sign-up</div>
        <div className="card p-3 form-signin text-center w-25 m-auto rounded-4 ">
            <form>
                <img className="mb-4" src={require("../media/img/cdac-logo-sm.png")} alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please Sign-up</h1>

                    <div className="form-floating mb-3">
                    <input type="text"  className="form-control" id="name" placeholder="Name" />
                            <label for="name">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="cno" maxlength="10" minlength="10" placeholder="Contact number" />
                            <label for="cno">Contact Number</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input  type="number" className="form-control" id="prn"  maxlength="12" minlength="12" placeholder="PRN" />
                            <label for="prn">PRN</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                            <label for="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="pass" placeholder="Password"/>
                            <label for="pass">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="cnfpass" placeholder="Password"/>
                            <label for="cnfpass">Confirm Password</label>
                    </div>

                  
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                  
                    
            </form>
        </div>
    </>);
};
export default Signup;