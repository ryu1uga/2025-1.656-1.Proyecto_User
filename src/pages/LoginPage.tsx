import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import "./LoginPage.css"

const LoginPage = () => {
<<<<<<< HEAD

=======
>>>>>>> a54b9f8 (home page avance)
    const navigate = useNavigate();
    const login = (email: string, password: string, rememberMe: boolean) => {
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Remember me:", rememberMe)
<<<<<<< HEAD
=======
        
>>>>>>> a54b9f8 (home page avance)
        navigate("/home");
    }

    return <div className="container">
        <LoginForm enviar={ login }></LoginForm>
    </div>
}

export default LoginPage