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
        } else {
          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

      fetchComics();
    }, []);

    const comicRead = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
  
        // Certifique-se de que o token está disponível
        if (!accessToken) {
          console.error('Token de acesso não encontrado.');
          return;
        }
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        };
        const data = {
          chapter: chapId
        }
        const response = await axios.post(`http://localhost:8000/comic-read/`, data, config);
  
        if (response.status === 200) {
          console.log('salvo com sucesso')
        } else {
          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };
  
    comicRead();

    const chapterElements = images.map((img) => (
      <img src={img} />
    ));
    const nextChap =  data.next_chap
    const prevChap =  data.prev_chap
    const comicId =  data.comic_id
    console.log(data.comic_id)
  return (
    <div className=" grid w-full p-6 justify-items-center">
      <div className='w-full flex justify-between mb-8'>
        <div>
          <a className='bg-amethyst-700 w-40 h-10 rounded-lg text-amethyst-200 text-lg font-semibold flex items-center justify-center'
           href={'/comic/' + comicId}>Página do capítulo</a>
        </div>
        <div className='flex space-x-8'>

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
      </div>
      {chapterElements} 
    </div>
  );
}

export default Home;
