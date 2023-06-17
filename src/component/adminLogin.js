import React from "react";
const AdminLogin = () => {
    return (<>
        <div className="my-5 temp">..</div>
        <div className="text-light heading-text my-5">Admin Log-in</div>
        <div className="card p-3 form-signin text-center w-25 m-auto rounded-4 ">
            <form>
                <img class="mb-4" src={require("../media/img/cdac-logo-sm.png")} alt="" width="72" height="57"/>
                    <h1 class="h3 mb-3 fw-normal">Please Log-in</h1>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                    </div>

                  
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                   
                    
            </form>
        </div>
    </>);
};
export default AdminLogin;