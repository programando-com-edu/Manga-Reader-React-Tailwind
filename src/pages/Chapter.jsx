import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import React , {useState, useEffect} from "react";



function Home() {
  const { chapId } = useParams();

  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Função para fazer a requisição GET
    const fetchComics = async () => {
      try {

        const response = await axios.get('http://localhost:8000/chapter/'+chapId);

        if (response.status === 200) {
          setData(response.data);
          setImages(response.data.images);
          console.log(response.data)
        } else {
          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

      fetchComics();
    }, []);

    const chapterElements = images.map((img) => (
      <img src={img} />
    ));
    const nextChap =  data.next_chap
    const prevChap =  data.prev_chap
  return (
    <div className=" grid w-full p-6 justify-items-center">
      <div className='w-full flex justify-end space-x-8 mb-8'>
        {prevChap !== null ? (
          <a
            className='bg-amethyst-700 w-24 h-10 rounded-lg text-amethyst-200 text-lg font-semibold flex items-center justify-center'
            href={'/chapter/' + prevChap}
          >
            Anterior
          </a>
        ) : (
          <span className='bg-gray-400 w-24 h-10 rounded-lg text-gray-600 text-lg font-semibold flex items-center justify-center cursor-not-allowed'>
            Anterior
          </span>
        )}
        {nextChap !== null ? (
          <a
            className='bg-amethyst-700 w-24 h-10 rounded-lg text-amethyst-200 text-lg font-semibold flex items-center justify-center'
            href={'/chapter/' + nextChap}
          >
            Próximo
          </a>
        ) : (
          <span className='bg-gray-400 w-24 h-10 rounded-lg text-gray-600 text-lg font-semibold flex items-center justify-center cursor-not-allowed'>
            Próximo
          </span>
        )}
      </div>
      {chapterElements} 
    </div>
  );
}

export default Home;
