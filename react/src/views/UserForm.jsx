import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";

export default function UserForm() {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    if (id) {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/users/${id}`)
                .then(({data}) => {
                    setLoading(false)
                    setUser(data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div>
            {user.id && <h1>Update User: {user.name}</h1>}
            {!user.id && <h1>New User</h1>}
            <div className="card animated fadeInDown">
                {loading && (
                    <div className="text-center">Loading...</div>
                )}
                {errors && <div className="alert">{Object.keys(errors).map(key => (<p>{errors[key][0]}</p>))}</div>}
                {!loading &&
                    <form onSubmit={onSubmit}>
                        <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})}
                               placeholder="Name"/>
                        <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})}
                               placeholder="Email"/>
                        <input onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
                        <input onChange={ev => setUser({...user, password_confirmation: ev.target.value})}
                               placeholder="Password Confirmation"/>
                        <button className="btn">Save</button>
                    </form>
                }
            </div>
        </div>
    )

}
