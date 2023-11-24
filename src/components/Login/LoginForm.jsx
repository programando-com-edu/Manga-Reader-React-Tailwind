import React from "react";
import { Link } from "react-router-dom";


function LoginForm(){
    return (
        <>
        <div className="flex flex-col w-96 justify-start">
                <label htmlFor="username" className="mb-2 text-amethyst-200 font-semibold">Username</label>
                <input id="username" type="text" className="h-12 px-4 rounded-full border border-gray-300" />
                <label htmlFor="password" className="mb-2 mt-4 text-amethyst-200 font-semibold">Senha</label>
                <input id="password" type="password" className="h-12 px-4 rounded-full border border-gray-300" />
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
                <div className="w-36 h-12 rounded-full bg-amethyst-300 flex items-center justify-center">
                    <p className="font-semibold text-xl text-amethyst-900">
                        Login
                    </p>
                </div>
            </div>
            </>
    )
}

export default LoginForm