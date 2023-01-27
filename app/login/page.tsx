"use client"
import { useEffect, useState, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const isLogged = useSelector((state) => state.status)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:3001/login', {
          email: "asdoiajsd",
          password: "iuahhf"
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          setIsLoading(false);
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