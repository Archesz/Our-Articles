import React from 'react'
import './Menu.scss'
import { AiOutlineHome, AiOutlineSearch, AiOutlineFileAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="menu-container">

        <div className="logo"></div>

        <div className="menu-items">
          <Link to="/">
            <AiOutlineHome className="menu-icon" size={24}/>
          </Link>
          <Link to="/search">
            <AiOutlineSearch className="menu-icon" size={24}/>
          </Link>
          <Link to="/insert">
            <AiOutlineFileAdd className="menu-icon" size={24}/>
          </Link>
        </div>

    </div>
  )
}

export default Sidebar