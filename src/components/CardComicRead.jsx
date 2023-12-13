import {useState} from "react";
import ModalComicRead from "./Modais/ModalComicRead";

export default function CardComicsRead({mangaData}){
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    return (
        <>
            <ModalComicRead onClose={handleOnClose} mangaData={mangaData} visible={showModal} />
            <div onClick={()=> setShowModal(true)} className="bg-amethyst-900 h-[480px] w-[360px] rounded-lg overflow-hidden">
                <img src={mangaData.comic_data.banner} alt="sailor-moon-card" className="object-cover h-[90%] w-full" />
                <p className="flex items-center justify-center mt-2  text-xl text-white font-semibold">{mangaData.comic_data.title}</p>
            </div>
        </>
    )
}