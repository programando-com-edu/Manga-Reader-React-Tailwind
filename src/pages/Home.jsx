import React, {useState} from "react";
import Modal from "../components/Modais/ModalManga"

function Home() {
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)
  return (
    <div className="home">
      <Modal onClose={handleOnClose} visible={showModal} />
      <button onClick={()=> setShowModal(true)}>Home</button>
    </div>
  );
}

export default Home;
