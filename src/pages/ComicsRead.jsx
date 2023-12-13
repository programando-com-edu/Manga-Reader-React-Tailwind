import axios from 'axios';
import React , {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import CardComicsRead from "../components/CardComicRead"

function ComicsRead() {
    const [comics, setComics] = useState([]);
    useEffect(() => {
      // Função para fazer a requisição GET
      const fetchComics = async () => {
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
  
          const response = await axios.get('http://localhost:8000/comic-read/', config);
  
          if (response.status === 200) {
            setComics(response.data);
            console.log(comics)
          } else {
            console.error('Erro ao obter os quadrinhos');
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };
  
        fetchComics();
      }, []);
      
    
  
      
    return (
    <>
      <div className='w-full flex justify-center mt-10'>
        <p className='text-3xl text-amethyst-200 font-semibold'>Obras lidas</p>
      </div>
      <div className="grid grid-cols-3 p-20 gap-y-16 justify-items-center">
        {comics.map((comic) => (
          <CardComicsRead mangaData={comic.chapter}/>
        ))}
      </div>
    </>
    );
  }
  
  export default ComicsRead;