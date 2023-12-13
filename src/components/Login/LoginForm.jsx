import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility  } from "react-icons/md";
import axios from "axios";


function LoginForm(){
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await axios.post("http://localhost:8000/token/", {
          username,
          password,
        });
  
        if (response.status === 200) {
          // Salva o token no armazenamento local
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
  
          // Redireciona para a página inicial
          navigate("/");
        } else {
          console.error("Falha na autenticação");
        }
      } catch (error) {
        console.error("Erro ao fazer login", error);
      }
    };
    return (
        <>
        <div className="flex flex-col w-96 justify-start">
                <label htmlFor="username" className="mb-2 text-amethyst-200 font-semibold"
                >Username</label>
                <input id="username" type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 px-4 rounded-full border border-gray-300" />
                <div id="password-div" className="flex flex-col relative">
                    <label htmlFor="password" className="mb-2 mt-4 text-amethyst-200 font-semibold">Senha</label>
                    <input id="password" 
                    type={passwordVisibility ? "text" : "password"} 
                    className="h-12 px-4 rounded-full border border-gray-300" 
                    value={password} // Valor do estado
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={() => setPasswordVisibility(!passwordVisibility)} className="absolute bottom-4 right-4">
                        {passwordVisibility ? <MdVisibilityOff/> : <MdVisibility/>}
                    </button>
                </div>
            </div>
            <div className="flex text-white text-sm mt-1 space-x-32">
                <div className="flex justify-between">
                    <input type="checkbox" /> 
                    <p className="ml-2 text-amethyst-200">Lembrar de mim</p>
                </div>
                <Link to="/forgot-password">
                <span className="text-amethyst-200">Esqueceu a senha ?</span>            
                </Link>
            </div>
            <div className="flex justify-end w-96 mt-8">
                <button 
                 onClick={handleLogin}
                 className="w-36 h-12 rounded-full bg-amethyst-300 flex items-center justify-center">
                    <p className="font-semibold text-xl text-amethyst-900">
                        Login
                    </p>
                </button>
            </div>
            </>
    )
}

export default LoginForm