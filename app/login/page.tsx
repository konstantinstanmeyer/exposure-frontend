"use client"
import { useEffect, useState, SyntheticEvent } from "react"
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [isLogged, setIsLogged] = useState<Boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        axios.post('http://localhost:3001/login', {
          email: "asdoiajsd",
          password: "iuahhf"
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, [])

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', {
          email: "asdoiajsd",
          password: "iuahhf"
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId', res.data.user._id);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="rounded-md" onChange={e => setEmail(e.target.value)} />
                <input className="rounded-md" onChange={e => setPassword(e.target.value)} />
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    )
}