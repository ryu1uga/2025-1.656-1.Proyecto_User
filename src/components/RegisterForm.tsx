import { useState } from "react"
import { Link } from "react-router-dom"

interface RegisterFormProps {
    enviar : (name : string, email : string, password : string, confirmPassword : string, rememberMe : boolean) => void
}

const RegisterForm = (props : RegisterFormProps) =>
{
    const [ name, setName ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ confirmPassword, setConfirmPassword ] = useState<string>("")
    const [ rememberMe, setRememberMe ] = useState<boolean>(false)

    const nameOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const emailOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const passwordOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const confirmPasswordOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }

    const rememberMeOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    return <div>
        <form>
            <div className="row">
                <div className="col-12 mx-auto form-container">
                    <h1>Register</h1>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={ name } onChange={ nameOnChange }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={ email } onChange={ emailOnChange }/>
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={ password } onChange={ passwordOnChange }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm your password</label>
                        <input type="password" className="form-control" value={ confirmPassword } onChange={ confirmPasswordOnChange }/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={ rememberMe } onChange={ rememberMeOnChange }/>
                        <label className="form-check-label">I Agree to the <Link to={ "" }>Term and Condition</Link></label>
                    </div>
                    <div className="col-12 mx-auto form-container mb-3">
                        <span>You're already registered? </span>
                        <Link to={ "../" }>Login here</Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={ () => { props.enviar(name, email, password, confirmPassword, rememberMe) }}>REGISTER</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default RegisterForm