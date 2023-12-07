import { Link,  useParams } from "react-router-dom";
import axios from 'axios';
import OnePieceBanner from "../assets/onepiece-banner.webp";

function Comic() {
  const {comicId} = useParams()
  return (
    <div className="flex flex-col items-center h-screen px-[200px] py-4 space-y-4 ">
        <div className="w-full h-[600px] space-x-6  rounded-full flex ">
            <img
            src={OnePieceBanner}
            className="w-[35%] bg-gray-500 rounded-2xl"
            alt="One Piece Banner"
            />
            <div className="bg-amethyst-700 w-full rounded-xl">
            </div>
        </div>
        <div className="w-full h-full bg-amethyst-700 rounded-lg p-8 flex space-x-6 space-y-4 flex-wrap">
          <a href="#" className="w-20 h-10 flex items-center justify-center bg-amethyst-950 rounded-xl text-white">cap 44</a>
        </div>
    </div>
  );
}

export default Comic;
