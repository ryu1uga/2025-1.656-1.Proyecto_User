import LoginForm from "../components/LoginForm"
import "./LoginPage.css"

const LoginPage = () => {

    const handleLogin = (email: string, password: string, rememberMe: boolean) => {
        
        
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Remember me:", rememberMe)
    }

    return <div className="container">
        <LoginForm enviar={ handleLogin }></LoginForm>
    </div>
}

export default LoginPage