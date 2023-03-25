import {useNavigate} from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <form onSubmit={login}>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button type="submit">Log in</button>
        </form>
    )
}