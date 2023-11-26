import React from "react"
import "./Modais.css";
export default function Modal({visible , onClose, img}){
    const handleOnClose = (e) => {
        if (e.target.id === 'modal-blur') onClose();
    };

    if(!visible) return null;

    return (
        <div id="modal-blur" onClick={handleOnClose} className="modal-blur">
            <div className="modal-box">
                <img src={img} className="w-80 h-full bg-gray-500 rounded-xl flex-shrink-0"/>
                <div className="h-full flex flex-col">
                    <p className="modal-title">Sailor Moon</p>
                    <p className="modal-subtitle">Naoko Takeuch</p>
                    <p className="modal-content"> Sailor Moon conta a história de Usagi Tsukino, uma garota normal e inocente de 14 anos — pelo menos, é isso que ela pensa — que um dia encontra Luna, uma gata falante que revela a identidade de Usagi como "Sailor Moon", uma guerreira mágica destinada a salvar a Terra das forças do mal.</p>
                    <div className="manga-genre-div">
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                        <div className="button-manga-genre">Drama</div>
                    </div>
                    <p className="manga-progress-text">Progresso (35 de 50)</p>
                    <div className="manga-progress-bar">
                        <div className="h-3 w-[70%] bg-purple-600 rounded-lg"></div>
                    </div>
                    <div className="mt-auto flex justify-end">
                        <button className="manga-read-button">Ler</button>
                    </div>
                </div>
            </div>
        </div>
    )
}