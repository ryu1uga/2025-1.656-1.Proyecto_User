import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import "./LoginPage.css"

const LoginPage = () => {

    const navigate = useNavigate();
    const login = (email: string, password: string, rememberMe: boolean) => {
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Remember me:", rememberMe)
        navigate("/home");
    }

    return <div className="container">
        <LoginForm enviar={ login }></LoginForm>
    </div>
}

export default LoginPage