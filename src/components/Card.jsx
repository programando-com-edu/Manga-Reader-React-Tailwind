import {useState} from "react";
import Modal from "./Modais/ModalManga";
import SailorMoonImage from '../assets/sailor-moon.jpg';

export default function Card({mangaData}){
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    return (
        <>
            <Modal onClose={handleOnClose} mangaData={mangaData} visible={showModal} />
            <div onClick={()=> setShowModal(true)} className="bg-amethyst-900 h-[480px] w-[360px] rounded-lg overflow-hidden">
                <img src={mangaData.banner} alt="sailor-moon-card" className="object-cover h-[90%] w-full" />
                <p className="flex items-center justify-center mt-2  text-xl text-white font-semibold">{mangaData.title}</p>
            </div>
        </>
    )
}