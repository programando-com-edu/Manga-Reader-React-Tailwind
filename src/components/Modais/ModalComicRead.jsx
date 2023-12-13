import { Link } from "react-router-dom";
import React from "react"
import "./Modais.css";
export default function ModalComicRead({visible , onClose, mangaData}){
    const handleOnClose = (e) => {
        if (e.target.id === 'modal-blur') onClose();
    };

    if(!visible) return null;

    return (
        <div id="modal-blur" onClick={handleOnClose} className="modal-blur">
            <div className="modal-box">
                <img src={mangaData.comic_data.banner} className="w-80 h-full bg-gray-500 rounded-xl flex-shrink-0"/>
                <div className="h-full flex flex-col">
                    <p className="modal-title">{mangaData.comic_data.title}</p>
                    {/* <p className="modal-subtitle">Naoko Takeuch</p> */}
                    <p className="modal-content"> {mangaData.comic_data.description}</p>
                    {/* <div className="manga-genre-div">
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                    </div> */}
                    {/* <p className="manga-progress-text">Progresso (35 de 50)</p> */}
                    <div className="manga-progress-bar">
                        <div className="h-3 w-[70%] bg-purple-600 rounded-lg"></div>
                    </div>
                    <div className="mt-auto flex justify-end">
                        <Link to={'/chapter/'+mangaData.next_chapter} className="manga-read-button w-60 text-center">Ler próximo capítulo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}