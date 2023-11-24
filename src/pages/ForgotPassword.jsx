import React, {useState} from "react";

import LoginForm from "../components/Login/LoginForm"
import CadastroForm from "../components/Login/CadastroForm"
import OnePieceBanner from "../assets/onepiece-banner.webp"

function ForgotPassword() {
    const [changeForm, setChangeForm] = useState(false)
    const handleOnClickLogin = () => setChangeForm(false)
    const handleOnClickCadastro = () => setChangeForm(true)
    let formComponent = changeForm ? <CadastroForm /> : <LoginForm />

  return (
    <div className="bg-gradient-to-tl from-black to-amethyst-800 flex h-screen">
        <div className="h-full w-[40%] px-8 py-4 rounded-full flex-shrink-0">
            <img src={OnePieceBanner} className=" w-full h-full bg-gray-500 rounded-2xl flex-shrink-0"/>
        </div>
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-amethyst-400 h-14 w-80 mt-16 flex items-center rounded-full">
                <div onClick={handleOnClickLogin} className="bg-amethyst-800 flex items-center justify-center h-10 w-36 rounded-full ml-2"> 
                    <p className="text-gray-200 text-center text-xl font-semibold">Login</p> 
                </div>
                <div onClick={handleOnClickCadastro} className="flex items-center justify-center h-10 w-36 rounded-full ml-2"> 
                    <p className="text-center text-xl text-amethyst-900 font-semibold">Cadastro</p> 
                </div>
            </div>
            <p className="text-amethyst-200 my-12">
                Uma biblioteca para suas leituras em mangá!
            </p>
            `{formComponent}`
        </div>
    </div>
  );
}

export default ForgotPassword;