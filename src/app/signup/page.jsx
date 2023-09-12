"use client"
import { supabaseClient } from "@/lib/supabaseClient"
import { useState } from "react"

function Page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignUp = async (e) => {
        e.preventDefault()
        try { 
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
            })
            console.log(data)
            if(error) throw Error(`${error.name}: ${error.message}`)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    return (
        <form onSubmit={handleSignUp}
            className="flex flex-col max-w-lg mx-auto mt-10"
        >
            <input 
                type="email" 
                name="Email" 
                placeholder="Enter your email" 
                aria-label="Email"
                value={email}
                onChange={handleEmail}
                className="p-4 mb-4 bg-transparent border"
            />
            <input 
                type="password" 
                name="Password" 
                placeholder="Enter your password" 
                aria-label="Password"
                value={password}
                onChange={handlePassword}
                className="p-4 mb-4 bg-transparent border"
            />
            <button type="Submit" className="p-4 mt-4 bg-purple-400 ">Sign Up With Email</button>
        </form>
    )
}

export default Page