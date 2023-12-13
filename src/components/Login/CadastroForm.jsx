import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility  } from "react-icons/md";
import axios from "axios";

function CadastroForm(){

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const createUser = async () => {
        try {
          const response_user_created = await axios.post("http://localhost:8000/create-user/", {
            email,
            username,
            password,
          });
    
          if (response_user_created.status === 200) {
            alert("User created successfully");
          } else {
            console.error("Falha na criação de usuário");
          }
        } catch (error) {
          console.error("Erro ao fazer login", error);
        }
      };

    return (
        <>
            <div className="flex flex-col w-96 justify-start">
                <label htmlFor="email" className="mb-2 text-amethyst-200 font-semibold">Email</label>
                <input id="email" type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 rounded-full border border-gray-300" />
                <label htmlFor="username" className="mb-2 mt-4 text-amethyst-200 font-semibold">Username</label>
                <input id="username" type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 px-4 rounded-full border border-gray-300" />
                <div id="password-div" className="flex flex-col relative">
                    <label htmlFor="password" className="mb-2 mt-4 text-amethyst-200 font-semibold">Senha</label>
                    <input id="password" type={passwordVisibility ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 px-4 rounded-full border border-gray-300" />
                    <button onClick={() => setPasswordVisibility(!passwordVisibility)} className="absolute bottom-4 right-4">
                        {passwordVisibility ? <MdVisibilityOff/> : <MdVisibility/>}
                    </button>
                </div>
            </div>

            <div className="flex justify-end w-96 mt-8">
                <button
                onClick={createUser}
                className="w-36 h-12 rounded-full bg-amethyst-300 flex items-center justify-center">
                    
                    <p className="font-semibold text-xl text-amethyst-900">
                        Cadastre-se
                    </p>
                </button>
            </div>
        </>
    )
}

export default CadastroForm