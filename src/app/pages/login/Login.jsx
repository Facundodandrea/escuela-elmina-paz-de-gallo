import { useState } from "react"
import useAuthRedirect from '../../../core/middleware/authService'
import supabase from '../../../supabase/Client'

import './login.css'

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await supabase.auth.signInWithPassword({
                    email,
                    password
                });
            } catch (error) {
                console.error("Error al iniciar sesión:", error.message);
            }
        };

        useAuthRedirect('/dashboard');

    return (
        <div className="loginComponent">
            <form className="loginContent" onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='youremail@site.com' 
                    onChange={e => setEmail(e.target.value)}
                    className="loginContent-input"
                />
                <label>Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder='**********' 
                    onChange={e => setPassword(e.target.value)}
                    className="loginContent-input"
                />
                <button type="submit" className="loginContent-btn">
                    Ingresar
                </button>
            </form>
        </div>
    );
}

export default Login;
