import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import OnePieceBanner from "../assets/onepiece-banner.webp";

function Comic() {
  const { comicId } = useParams();
  const [comic, setComic] = useState({ chapters: [] });

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/comic-page/${comicId}`);

        if (response.status === 200) {
          setComic(response.data);
        } else {
          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchComics();
  }, []);

  const chapterElements = comic.chapters.map((chapter) => (
    <Link key={chapter.id} to={'/chapter/'+chapter.id} className="w-20 h-10 flex items-center justify-center bg-amethyst-950 rounded-xl text-white">
      {chapter.number}
    </Link>
  ));

  return (
    <div className="grid grid-cols-2 gap-4 items-center h-screen px-[200px] py-4">
      <div className="col-span-2 h-[600px] space-x-6 rounded-full flex">
        <img
          src={comic.banner}
          className="w-[35%] bg-gray-500 rounded-2xl"
        />
        <div className="bg-amethyst-700  w-full p-6 flex flex-col items-center col-span-1 rounded-xl text-amethyst-200">
          <div className="text-3xl ">{comic.title}</div>
          <div className="text-xl mt-10">{comic.description}</div>
        </div>
      </div>
      <div className="grid col-span-2 grid-cols-8 gap-4 w-full bg-amethyst-700 rounded-lg p-8">
        {chapterElements}
      </div>
    </div>
  );
}

export default Comic;
