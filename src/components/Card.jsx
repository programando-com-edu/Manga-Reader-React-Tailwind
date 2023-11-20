import React, {useState} from "react";
import Modal from "./Modais/ModalManga";
import SailorMoonImage from '../assets/sailor-moon.jpg';

export default function Card(){
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    return (
        <div>
            <Modal onClose={handleOnClose} img={SailorMoonImage} visible={showModal} />
            <div onClick={()=> setShowModal(true)} className="bg-white h-[480px] w-[360px] rounded-lg overflow-hidden">
                <img src={SailorMoonImage} alt="sailor-moon-card" className="object-cover h-[90%] w-full" />
                <p className="text-center text-xl font-semibold">Sailor Moon</p>
            </div>
        </div>
    )
}