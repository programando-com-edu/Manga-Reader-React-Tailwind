import React from "react";

import Card from "../components/Card"
import OnePieceBanner from "../assets/onepiece-banner.webp"
function Login() {

  return (
    <div className="bg-pallete-100 flex h-screen">
        <div className="h-full w-[40%] px-8 py-4 rounded-full flex-shrink-0">
            <img src={OnePieceBanner} className=" w-full h-full bg-gray-500 rounded-2xl flex-shrink-0"/>
        </div>
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-slate-400 h-14 w-80 mt-40 flex items-center rounded-full">
                <div className="bg-gray-700 flex items-center justify-center h-10 w-36 rounded-full ml-2"> 
                    <p className="text-gray-100 text-center text-xl font-semibold">Login</p> 
                </div>
                <div className="flex items-center justify-center h-10 w-36 rounded-full ml-2"> 
                    <p className="text-black text-center text-xl font-semibold">Cadastro</p> 
                </div>
            </div>
            <p className="text-gray-500 my-12">
                Uma biblioteca para suas leituras em mangá!
            </p>
            <div className="flex flex-col w-96 justify-start">
                <label htmlFor="username" className="mb-2 text-gray-800 font-semibold">Username</label>
                <input id="username" type="text" className="h-12 rounded-full border border-gray-300" />
                <label htmlFor="password" className="mb-2 mt-4 text-gray-800 font-semibold">Senha</label>
                <input id="password" type="text" className="h-12 rounded-full border border-gray-300" />
            </div>
        </div>
    </div>
  );
}

export default Login;