import { useState } from "react"
import "./LoginPage.css"

const LoginPage = () => {

    return
    <div className="container">
        <form>
            <div className="row">
                <div className="col-12 mx-auto form-container">
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1">
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1">
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div className="col-12 mx-auto form-container mb-3">
                        <span>Forgot your password? </span>
                        <a href="">Click here</a>
                    </div>
                    <div className="col-12 mx-auto form-container mb-3">
                        <span>You're not our member yet? </span>
                        <a href="../UserRegisterPage/UserRegisterPage.html">Register here</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary">LOGIN</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default LoginPage