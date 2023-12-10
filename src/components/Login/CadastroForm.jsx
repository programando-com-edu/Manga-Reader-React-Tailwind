import { useState } from "react";
import { MdVisibilityOff, MdVisibility  } from "react-icons/md";

function CadastroForm(){

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    return (
        <>
            <div className="flex flex-col w-96 justify-start">
                <label htmlFor="email" className="mb-2 text-amethyst-200 font-semibold">Email</label>
                <input id="email" type="email" className="h-12 px-4 rounded-full border border-gray-300" />
                <label htmlFor="username" className="mb-2 mt-4 text-amethyst-200 font-semibold">Username</label>
                <input id="username" type="text" className="h-12 px-4 rounded-full border border-gray-300" />
                <div id="password-div" className="flex flex-col relative">
                    <label htmlFor="password" className="mb-2 mt-4 text-amethyst-200 font-semibold">Senha</label>
                    <input id="password" type={passwordVisibility ? "text" : "password"} className="h-12 px-4 rounded-full border border-gray-300" />
                    <button onClick={() => setPasswordVisibility(!passwordVisibility)} className="absolute bottom-4 right-4">
                        {passwordVisibility ? <MdVisibilityOff/> : <MdVisibility/>}
                    </button>
                </div>
            </div>

            <div className="flex justify-end w-96 mt-8">
                <div className="w-36 h-12 rounded-full bg-amethyst-300 flex items-center justify-center">
                    <p className="font-semibold text-xl text-amethyst-900">
                        Cadastre-se
                    </p>
                </div>
            </div>
        </>
    )
}

export default CadastroForm