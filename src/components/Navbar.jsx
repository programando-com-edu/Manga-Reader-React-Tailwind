import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";
import axios from 'axios';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(false);
  const [entrada, setEntrada] = useState('');
  const showSidebar = () => setSidebar(!sidebar);
  const handleChange = (event) => {
    setEntrada(event.target.value);
  };
  useEffect(() => {
    // Função para fazer a requisição GET com token de acesso
    const getUser = async () => {
      try {
        // Obtenha o token de acesso do localStorage
        const accessToken = localStorage.getItem('access_token');

        // Certifique-se de que o token está disponível
        if (!accessToken) {
          console.error('Token de acesso não encontrado.');
          return;
        }

        // Configuração do cabeçalho com o token de acesso
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        };
        // Realize a requisição GET usando o Axios com o token de acesso
        const response_me = await axios.get('http://localhost:8000/me/', config);

        if (response_me.status === 200) {
          setUser(response_me.data);
        } else {

          console.error('Erro ao obter os quadrinhos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    getUser();
  }, []);
  const userComics = user ? (
    
    <li className="nav-text">
      <Link to="/comics-read">
        <AiIcons.AiOutlineUser />
        <span className="ml-6">My comics</span>
      </Link>
    </li>
  ) : null
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <div className="flex items-center w-full justify-center">
            <input id="search-input" value={entrada} onChange={handleChange}
             className="h-12 w-[480px] rounded-full p-3 focus:outline-none focus:border-2 focus:border-amethyst-800 " type="text" />
            <a href={'/?title='+entrada}>
              <label ><FaSearch  className="text-white text-xl ml-4"/></label>
            </a>
          </div>
          <Link to="#" className="menu-bars">
            <CgProfile className={sidebar ? "invisible" : ""} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="ml-2" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="ml-6">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {userComics}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
