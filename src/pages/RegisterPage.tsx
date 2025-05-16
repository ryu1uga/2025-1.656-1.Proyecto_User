import { useState } from "react"
import "./RegisterPage.css"

const RegisterPage = () => {

    return
    <div class="container">
        <form>
            <div class="row">
                <div class="col-12 mx-auto form-container">
                    <h1>Register</h1>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="col-12 mx-auto form-container mb-3">
                        <span>You're already registered? </span>
                        <a href="../UserLoginPage/UserLoginPage.html">Login here</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">REGISTER</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default RegisterPage