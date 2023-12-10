import axios from 'axios';
import React , {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import Card from "../components/Card"

function Home() {
  const [comics, setComics] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  useEffect(() => {
    // Função para fazer a requisição GET
    const fetchComics = async () => {
      try {

        const response = await axios.get('http://localhost:8000/comics/?title='+title);

        if (response.status === 200) {
          setComics(response.data);
        } else {
          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

      fetchComics();
    }, []);
  console.log(comics)
  return (
    <div className="grid grid-cols-3 p-20 gap-y-16 justify-items-center">
      {comics.map((comic) => (
        <Card mangaData={comic}/>
      ))}
    </div>
  );
}

export default Home;
