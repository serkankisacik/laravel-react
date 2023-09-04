import {Link} from "react-router-dom";

export default function Signup() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }
    return (

        <form onSubmit={onSubmit}>
            <h1 className="title">Signup or free</h1>
            <input type={"text"} placeholder="Full Name"/>
            <input type={"email"} placeholder="Email Address"/>
            <input type={"password"} placeholder="Password"/>
            <input type={"password"} placeholder="Password Confirmation"/>
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered? <Link to={"/login"}>Sign in</Link>
            </p>
        </form>
    )
}
