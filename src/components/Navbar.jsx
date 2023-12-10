import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [entrada, setEntrada] = useState('');
  const handleChange = (event) => {
    setEntrada(event.target.value);
  };

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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
