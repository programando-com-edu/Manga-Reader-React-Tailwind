import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import CadastroForm from "../components/Login/CadastroForm";
import OnePieceBanner from "../assets/onepiece-banner.webp";

function Login() {
  const [isCadastroForm, setIsCadastroForm] = useState(false);

  const handleFormChange = (isCadastro) => {
    setIsCadastroForm(isCadastro);
  };

  const renderForm = () => {
    return isCadastroForm ? <CadastroForm /> : <LoginForm />;
  };

  return (
    <div className="bg-gradient-to-tl from-black to-amethyst-800 flex h-screen">
      <div className="h-full w-[40%] hidden md:block px-8 py-4 rounded-full flex-shrink-0">
        <img
          src={OnePieceBanner}
          className="w-full h-full bg-gray-500 rounded-2xl flex-shrink-0"
          alt="One Piece Banner"
        />
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-amethyst-400 h-14 w-80 mt-32 lg:mt-40 2xl:mt-56 relative flex items-center rounded-full">
          <div className={`absolute h-10 w-36 rounded-full bg-amethyst-800 transition-all duration-700 ${
            isCadastroForm ? "left-40" : "left-2"
          }`}
          ></div>
          <button
            onClick={() => handleFormChange(false)}
            className="flex items-center justify-center h-10 w-36  ml-2 z-10"
          >
            <p className="text-gray-200 text-center text-xl font-semibold">
              Login
            </p>
          </button>
          <button
            onClick={() => handleFormChange(true)}
            className="flex items-center justify-center h-10 w-36 ml-2 z-10"
          >
            <p className="text-center text-xl text-gray-200 font-semibold">
              Cadastro
            </p>
          </button>
        </div>
        <p className="text-amethyst-200 my-12">
          Uma biblioteca para suas leituras em mangá!
        </p>
        {renderForm()}
      </div>
    </div>
  );
}

export default Login;
