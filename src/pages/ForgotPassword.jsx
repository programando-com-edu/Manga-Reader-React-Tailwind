import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import OnePieceBanner from "../assets/onepiece-banner.webp";

function ForgotPassword() {
  return (
    <div className="flex h-screen">
      <div className="h-full w-[40%] hidden md:block px-8 py-4 rounded-full flex-shrink-0">
        <img
          src={OnePieceBanner}
          className="w-full h-full bg-gray-500 rounded-2xl flex-shrink-0"
          alt="One Piece Banner"
        />
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-amethyst-400 h-14 w-80 mt-32 lg:mt-40 2xl:mt-56 relative flex items-center rounded-full">
          <div 
            className="absolute h-10 w-[304px] rounded-full bg-amethyst-800 transition-all
            duration-700 left-2 flex justify-center items-center space-x-6"
          >
            <Link to="/login"><FaArrowLeft color="#e5e7eb"/> </Link>  
            <p className="text-gray-200 text-xl font-semibold">Esqueceu a senha?</p>
          </div>
          
        </div>
        <p className="text-amethyst-200 my-12">
            Digite seu e-mail e enviaremos um código de recuperação
        </p>
        <div className="flex flex-col w-96 justify-start">
          <label htmlFor="email" className="mb-2 text-amethyst-200 font-semibold">Email</label>
          <input id="email" type="email" className="h-12 px-4 rounded-full border border-gray-300"/>
        </div>
        <div className="flex justify-end w-96 mt-8">
          <div className="w-48 h-12 rounded-full bg-amethyst-300 flex items-center justify-center">
              <p className="font-semibold text-xl text-amethyst-900">
                  Enviar Email
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
